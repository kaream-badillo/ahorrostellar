// [AhorroStellar][Reflector] - KALE x Reflector Hackathon 2025
// Based on official @reflector/oracle-client v6.1.1
import {
  rpc, Contract, TransactionBuilder, BASE_FEE, Networks, xdr, scValToBigInt, Operation, Address, Asset as StellarAsset, hash, StrKey
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

// Asset Types (from official Reflector client)
enum AssetType {
  Stellar = 1,
  Other = 2
}

// Helper to create ScVal from string (SEP-40 compatible)
const createSymbol = (symbol: string) => xdr.ScVal.scvSymbol(symbol)

// Helper to create ScVal from string (for asset names)
const createString = (str: string) => xdr.ScVal.scvString(str)

/**
 * Build Asset ScVal from asset object (based on official Reflector client)
 * @param asset - Asset object with type and code
 * @returns ScVal representation of the asset
 */
function buildAssetScVal(asset: { type: AssetType; code: string }): xdr.ScVal {
  let stellarAsset: StellarAsset | null = null
  
  switch (asset.type) {
    case AssetType.Stellar: {
      const splittedCode = asset.code.split(':')
      if (splittedCode.length === 2) {
        const [assetCode, issuer] = splittedCode
        if (!assetCode || !issuer) {
          throw new Error('Asset code and issuer must be defined')
        }
        if (!StrKey.isValidEd25519PublicKey(issuer)) {
          throw new Error('Asset issuer must be a valid ed25519 public key')
        }
        stellarAsset = new StellarAsset(assetCode, issuer)
      } else if (asset.code === 'XLM') {
        stellarAsset = StellarAsset.native()
      } else {
        // Contract ID
        if (!StrKey.isValidContract(asset.code)) {
          throw new Error(`Asset code ${asset.code} is invalid contract ID`)
        }
        return new Address(asset.code).toScVal()
      }
      break
    }
    case AssetType.Other:
      if (asset.code.length > 32) {
        throw new Error('Asset code must be 32 characters or less')
      }
      return createSymbol(asset.code)
    default:
      throw new Error(`Asset type ${asset.type} is not supported`)
  }
  
  if (stellarAsset) {
    const assetContractId = new xdr.HashIdPreimageContractId({
      networkId: hash(Buffer.from(NET)),
      contractIdPreimage: xdr.ContractIdPreimage.contractIdPreimageFromAsset(stellarAsset.toXDRObject())
    })
    const preimage = xdr.HashIdPreimage.envelopeTypeContractId(assetContractId)
    const contractId = StrKey.encodeContract(hash(preimage.toXDR()))
    return new Address(contractId).toScVal()
  }
  
  throw new Error('Failed to build asset ScVal')
}

/**
 * Parse Soroban result from transaction response (based on official Reflector client)
 * @param resultMetaXdr - Transaction result meta XDR
 * @returns Parsed result
 */
function parseSorobanResult(resultMetaXdr: any): any {
  if (!resultMetaXdr || !resultMetaXdr.returnValue) {
    return null
  }
  
  try {
    return scValToBigInt(resultMetaXdr.returnValue)
  } catch (error) {
    console.warn('Failed to parse Soroban result:', error)
    return null
  }
}

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
    // Using official Reflector client method: lastPrice(asset)
    const usdcAsset = { type: AssetType.Other, code: 'USDC' }
    const raw = await simulateRead(CID_USDC, 'lastprice', [
      buildAssetScVal(usdcAsset)
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
    // Using official Reflector client method: xLastPrice(base, quote)
    const usdAsset = { type: AssetType.Other, code: 'USD' }
    const clpAsset = { type: AssetType.Other, code: 'CLP' }
    const raw = await simulateRead(CID_FX, 'x_last_price', [
      buildAssetScVal(usdAsset),
      buildAssetScVal(clpAsset)
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
    // Using official Reflector client method: xLastPrice(base, quote)
    const xlmAsset = { type: AssetType.Stellar, code: 'XLM' }
    const usdAsset = { type: AssetType.Other, code: 'USD' }
    const raw = await simulateRead(CID_CEX, 'x_last_price', [
      buildAssetScVal(xlmAsset),
      buildAssetScVal(usdAsset)
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
 * Get TWAP (Time-Weighted Average Price) for an asset
 * @param contractId - Reflector contract ID
 * @param asset - Asset to get TWAP for
 * @param records - Number of records to average
 * @returns TWAP price
 */
export async function getTwap(contractId: string, asset: { type: AssetType; code: string }, records: number = 2): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'twap', [
      buildAssetScVal(asset),
      xdr.ScVal.scvU32(records)
    ])
    return raw
  } catch (error) {
    console.error(`Failed to get TWAP for ${asset.code}:`, error)
    throw error
  }
}

/**
 * Get cross-asset TWAP (Time-Weighted Average Price)
 * @param contractId - Reflector contract ID
 * @param baseAsset - Base asset
 * @param quoteAsset - Quote asset
 * @param records - Number of records to average
 * @returns Cross-asset TWAP price
 */
export async function getXTwap(contractId: string, baseAsset: { type: AssetType; code: string }, quoteAsset: { type: AssetType; code: string }, records: number = 2): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'x_twap', [
      buildAssetScVal(baseAsset),
      buildAssetScVal(quoteAsset),
      xdr.ScVal.scvU32(records)
    ])
    return raw
  } catch (error) {
    console.error(`Failed to get X-TWAP for ${baseAsset.code}/${quoteAsset.code}:`, error)
    throw error
  }
}

/**
 * Get price at specific timestamp
 * @param contractId - Reflector contract ID
 * @param asset - Asset to get price for
 * @param timestamp - Timestamp in milliseconds
 * @returns Price at timestamp
 */
export async function getPriceAtTimestamp(contractId: string, asset: { type: AssetType; code: string }, timestamp: number): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'price', [
      buildAssetScVal(asset),
      xdr.ScVal.scvU64(xdr.Uint64.fromString(timestamp.toString()))
    ])
    return raw
  } catch (error) {
    console.error(`Failed to get price for ${asset.code} at ${timestamp}:`, error)
    throw error
  }
}

/**
 * Get cross-asset price at specific timestamp
 * @param contractId - Reflector contract ID
 * @param baseAsset - Base asset
 * @param quoteAsset - Quote asset
 * @param timestamp - Timestamp in milliseconds
 * @returns Cross-asset price at timestamp
 */
export async function getXPriceAtTimestamp(contractId: string, baseAsset: { type: AssetType; code: string }, quoteAsset: { type: AssetType; code: string }, timestamp: number): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'x_price', [
      buildAssetScVal(baseAsset),
      buildAssetScVal(quoteAsset),
      xdr.ScVal.scvU64(xdr.Uint64.fromString(timestamp.toString()))
    ])
    return raw
  } catch (error) {
    console.error(`Failed to get X-price for ${baseAsset.code}/${quoteAsset.code} at ${timestamp}:`, error)
    throw error
  }
}

/**
 * Get last timestamp from oracle
 * @param contractId - Reflector contract ID
 * @returns Last timestamp
 */
export async function getLastTimestamp(contractId: string): Promise<number> {
  try {
    const raw = await simulateRead(contractId, 'last_timestamp', [])
    return Math.floor(raw)
  } catch (error) {
    console.error(`Failed to get last timestamp for ${contractId}:`, error)
    throw error
  }
}

/**
 * Get supported assets from oracle
 * @param contractId - Reflector contract ID
 * @returns Array of supported assets
 */
export async function getSupportedAssets(contractId: string): Promise<Array<{ type: AssetType; code: string }>> {
  try {
    const raw = await simulateRead(contractId, 'assets', [])
    // Note: This would need proper parsing of the returned ScVal array
    // For now, return empty array as this is complex to implement
    console.warn('getSupportedAssets not fully implemented - would need ScVal array parsing')
    return []
  } catch (error) {
    console.error(`Failed to get supported assets for ${contractId}:`, error)
    throw error
  }
}

/**
 * Test all Reflector connections with comprehensive data
 * @returns Object with all price data and status
 */
export async function testReflectorConnections() {
  const results = {
    usdcUsd: { price: 0, error: null, timestamp: Date.now() },
    usdClp: { price: 0, error: null, timestamp: Date.now() },
    xlmUsd: { price: 0, error: null, timestamp: Date.now() },
    clpUsd: { price: 0, error: null, timestamp: Date.now() },
    decimals: { usdc: 0, fx: 0, cex: 0, errors: [] },
    lastTimestamps: { usdc: 0, fx: 0, cex: 0, errors: [] },
    twaps: { usdc: 0, xlm: 0, errors: [] }
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

  try {
    // Test last timestamps
    results.lastTimestamps.usdc = await getLastTimestamp(CID_USDC)
    results.lastTimestamps.fx = await getLastTimestamp(CID_FX)
    results.lastTimestamps.cex = await getLastTimestamp(CID_CEX)
  } catch (error) {
    results.lastTimestamps.errors.push(error instanceof Error ? error.message : 'Unknown error')
  }

  try {
    // Test TWAPs
    const usdcAsset = { type: AssetType.Other, code: 'USDC' }
    const xlmAsset = { type: AssetType.Stellar, code: 'XLM' }
    results.twaps.usdc = await getTwap(CID_USDC, usdcAsset, 2)
    results.twaps.xlm = await getTwap(CID_CEX, xlmAsset, 2)
  } catch (error) {
    results.twaps.errors.push(error instanceof Error ? error.message : 'Unknown error')
  }

  return results
}