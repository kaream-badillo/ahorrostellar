// src/lib/reflector.ts
import {
  rpc,
  Contract,
  TransactionBuilder,
  BASE_FEE,
  Networks,
  xdr,
  scValToBigInt,
} from '@stellar/stellar-sdk'

const RPC = process.env.NEXT_PUBLIC_SOROBAN_RPC_PRIMARY || 'https://soroban-testnet.stellar.org'
const NET = process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET

const CID_USDC = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC || 'MOCK_USDC_CONTRACT'
const CID_FX   = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX || 'MOCK_FX_CONTRACT'
const CID_CEX  = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX || 'MOCK_CEX_CONTRACT'

const server = new rpc.Server(RPC, { allowHttp: true })

function sym(v: string) { return xdr.ScVal.scvSymbol(v) }

async function simulateRead(publicKey: string, contractId: string, method: string, args: xdr.ScVal[]) {
  // Requiere cuenta existente en testnet; si no existe, fundéala con Friendbot antes desde tu flujo de wallet.
  const account = await server.getAccount(publicKey)
  const contract = new Contract(contractId)

  const tx = new TransactionBuilder(account, { fee: BASE_FEE })
    .setNetworkPassphrase(NET)
    .setTimeout(30)
    .addOperation(contract.call(method, ...args))
    .build()

  const sim = await server.simulateTransaction(tx)
  if (rpc.Api.isSimulationError(sim)) throw new Error(sim.error)

  // `sim.result?.retval` → xdr.ScVal
  const retval = (sim as any).result?.retval ?? (sim as any).result // fallback por variaciones de tipo
  if (!retval) throw new Error('no retval from simulation')

  return scValToBigInt(retval) // BigInt con escala del feed
}

// --- Lecturas de precios ---
// Nota: los tres contratos publican valores enteros escalados con `decimals=14`.
const DEC = 14
const scale = (v: bigint, decimals = DEC) => Number(v) / 10 ** decimals

// USDC (Stellar public network asset price feed) -> lastprice('USDC')
export async function priceUSDCinUSD(publicKey: string) {
  const raw = await simulateRead(publicKey, CID_USDC, 'lastprice', [sym('USDC')])
  return scale(raw, DEC)
}

// FX -> x_last_price('USD','CLP')  == (USD/CLP)
export async function usdPerCLP(publicKey: string) {
  const raw = await simulateRead(publicKey, CID_FX, 'x_last_price', [sym('USD'), sym('CLP')])
  return scale(raw, DEC) // USD/CLP
}

// CEX/DEX -> x_last_price('XLM','USD') == (XLM/USD)
export async function priceXLMinUSD(publicKey: string) {
  const raw = await simulateRead(publicKey, CID_CEX, 'x_last_price', [sym('XLM'), sym('USD')])
  return scale(raw, DEC)
}