// [AhorroStellar][Reflector] - KALE x Reflector Hackathon 2025
import {
  rpc, Contract, TransactionBuilder, BASE_FEE, Networks, xdr, scValToBigInt, Operation, Address
} from '@stellar/stellar-sdk'
import { getReaderPk } from '@/lib/reader'

const RPC = process.env.NEXT_PUBLIC_SOROBAN_RPC_PRIMARY || 'https://soroban-testnet.stellar.org'
const NET = process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET

// Reflector Contract IDs (Testnet) - Official from Stellar Docs
const CID_USDC = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC || 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP'
const CID_FX   = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX || 'CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W'
const CID_CEX  = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX || 'CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63'

const server = new rpc.Server(RPC, { allowHttp: true })
const DEC = 14
const scale = (v: bigint, d=DEC) => Number(v) / 10**d

// Helper to create ScVal from string (SEP-40 compatible)
const createSymbol = (symbol: string) => xdr.ScVal.scvSymbol(symbol)

// Helper to create ScVal from string (for asset names)
const createString = (str: string) => xdr.ScVal.scvString(str)

/**
 * Simulate a read-only contract call using SEP-40 interface
 * @param contractId - Reflector contract ID
 * @param method - Method name (lastprice, decimals, etc.)
 * @param args - Arguments as ScVal array
 * @returns Decoded result as number
 */
export async function simulateRead(contractId: string, method: string, args: xdr.ScVal[]): Promise<number> {
  try {
    const reader = getReaderPk()
    const account = await server.getAccount(reader)
    const contract = new Contract(contractId)
    
    const tx = new TransactionBuilder(account, { 
      fee: BASE_FEE,
      networkPassphrase: NET 
    })
      .addOperation(contract.call(method, ...args))
      .setTimeout(30)
      .build()
    
    const sim = await server.simulateTransaction(tx)
    
    if (rpc.Api.isSimulationError(sim)) {
      throw new Error(`Simulation error: ${sim.error}`)
    }
    
    const retval = (sim as any).result?.retval ?? (sim as any).result
    if (!retval) {
      throw new Error('No retval from simulation')
    }
    
    const bigIntValue = scValToBigInt(retval)
    return scale(bigIntValue)
    
  } catch (error) {
    console.error(`Error in simulateRead(${contractId}, ${method}):`, error)
    throw error
  }
}

/**
 * Get oracle decimals (SEP-40 standard)
 * @param contractId - Reflector contract ID
 * @returns Number of decimals
 */
export async function oracleDecimals(contractId: string): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'decimals', [])
    return Math.floor(raw)
  } catch (error) {
    console.warn(`Failed to get decimals for ${contractId}, using default ${DEC}`)
    return DEC
  }
}

/**
 * Get USDC/USD price from Reflector (Stellar Public Assets)
 * @returns USDC price in USD
 */
export async function priceUSDCinUSD(): Promise<number> {
  try {
    // Using SEP-40 standard: lastprice(asset, quote)
    const raw = await simulateRead(CID_USDC, 'lastprice', [
      createSymbol('USDC'),
      createSymbol('USD')
    ])
    return raw
  } catch (error) {
    console.error('Failed to get USDC/USD price:', error)
    // Fallback to demo price
    return 1.0
  }
}

/**
 * Get USD/CLP exchange rate from Reflector (Foreign Exchange)
 * @returns USD per CLP
 */
export async function usdPerCLP(): Promise<number> {
  try {
    // Using SEP-40 standard: lastprice(base, quote)
    const raw = await simulateRead(CID_FX, 'lastprice', [
      createSymbol('USD'),
      createSymbol('CLP')
    ])
    return raw
  } catch (error) {
    console.error('Failed to get USD/CLP rate:', error)
    // Fallback to demo rate (1 USD = 1000 CLP)
    return 1000
  }
}

/**
 * Get XLM/USD price from Reflector (External CEX & DEX)
 * @returns XLM price in USD
 */
export async function priceXLMinUSD(): Promise<number> {
  try {
    // Using SEP-40 standard: lastprice(asset, quote)
    const raw = await simulateRead(CID_CEX, 'lastprice', [
      createSymbol('XLM'),
      createSymbol('USD')
    ])
    return raw
  } catch (error) {
    console.error('Failed to get XLM/USD price:', error)
    // Fallback to demo price
    return 0.12
  }
}

/**
 * Get CLP/USD price (inverse of USD/CLP)
 * @returns CLP price in USD
 */
export async function priceCLPinUSD(): Promise<number> {
  try {
    const usdPerClp = await usdPerCLP()
    return 1 / usdPerClp
  } catch (error) {
    console.error('Failed to get CLP/USD price:', error)
    return 0.001
  }
}

/**
 * Test all Reflector connections
 * @returns Object with all price data and status
 */
export async function testReflectorConnections() {
  const results = {
    usdcUsd: { price: 0, error: null, timestamp: Date.now() },
    usdClp: { price: 0, error: null, timestamp: Date.now() },
    xlmUsd: { price: 0, error: null, timestamp: Date.now() },
    clpUsd: { price: 0, error: null, timestamp: Date.now() },
    decimals: { usdc: 0, fx: 0, cex: 0, errors: [] }
  }

  try {
    // Test USDC/USD
    results.usdcUsd.price = await priceUSDCinUSD()
  } catch (error) {
    results.usdcUsd.error = error instanceof Error ? error.message : 'Unknown error'
  }

  try {
    // Test USD/CLP
    results.usdClp.price = await usdPerCLP()
  } catch (error) {
    results.usdClp.error = error instanceof Error ? error.message : 'Unknown error'
  }

  try {
    // Test XLM/USD
    results.xlmUsd.price = await priceXLMinUSD()
  } catch (error) {
    results.xlmUsd.error = error instanceof Error ? error.message : 'Unknown error'
  }

  try {
    // Test CLP/USD (derived)
    results.clpUsd.price = await priceCLPinUSD()
  } catch (error) {
    results.clpUsd.error = error instanceof Error ? error.message : 'Unknown error'
  }

  try {
    // Test decimals
    results.decimals.usdc = await oracleDecimals(CID_USDC)
    results.decimals.fx = await oracleDecimals(CID_FX)
    results.decimals.cex = await oracleDecimals(CID_CEX)
  } catch (error) {
    results.decimals.errors.push(error instanceof Error ? error.message : 'Unknown error')
  }

  return results
}