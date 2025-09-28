# 🔧 Reflector Oracle Technical Implementation

## 📋 Overview

This document details the technical implementation of Reflector Oracle integration in AhorroStellar, based on the official `@reflector/oracle-client v6.1.1` documentation.

## 🏗️ Architecture

### **Core Components**

1. **`src/lib/reflector.ts`** - Main Oracle client implementation
2. **`src/app/reflector-debug/page.tsx`** - Comprehensive debugging interface
3. **`src/lib/reader.ts`** - Helper for read-only account management

### **Dependencies**

```json
{
  "@stellar/stellar-sdk": "14.1.1",
  "peerDependencies": {
    "@stellar/stellar-sdk": "14.1.1"
  }
}
```

## 🔌 Contract IDs (Testnet)

```typescript
// Official Reflector Contract IDs from Stellar Docs
const CID_USDC = 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP' // Stellar Public Assets
const CID_FX   = 'CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W' // Foreign Exchange
const CID_CEX  = 'CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63' // External CEX & DEX
```

## 🎯 Asset Types

```typescript
enum AssetType {
  Stellar = 1,  // Stellar assets (XLM, USDC:issuer, etc.)
  Other = 2     // Other assets (USD, CLP, etc.)
}
```

## 🔧 Core Functions

### **1. Asset ScVal Building**

```typescript
function buildAssetScVal(asset: { type: AssetType; code: string }): xdr.ScVal {
  // Handles both Stellar assets and other assets
  // Converts to proper ScVal format for contract calls
}
```

### **2. Read-Only Simulation**

```typescript
async function simulateRead(contractId: string, method: string, args: xdr.ScVal[]): Promise<number> {
  // Uses simulateTransaction for read-only access
  // No wallet signing required
  // Returns decoded price as number
}
```

### **3. Price Feed Functions**

```typescript
// Basic price feeds
export async function priceUSDCinUSD(): Promise<number>
export async function usdPerCLP(): Promise<number>
export async function priceXLMinUSD(): Promise<number>

// Advanced functions
export async function getTwap(contractId: string, asset: Asset, records: number): Promise<number>
export async function getXTwap(contractId: string, baseAsset: Asset, quoteAsset: Asset, records: number): Promise<number>
export async function getPriceAtTimestamp(contractId: string, asset: Asset, timestamp: number): Promise<number>
export async function getLastTimestamp(contractId: string): Promise<number>
```

## 📊 Supported Oracle Methods

### **Basic Methods**
- `lastprice(asset)` - Get last price for asset
- `x_last_price(base, quote)` - Get cross-asset last price
- `decimals()` - Get oracle precision
- `last_timestamp()` - Get last update timestamp

### **Advanced Methods**
- `twap(asset, records)` - Time-weighted average price
- `x_twap(base, quote, records)` - Cross-asset TWAP
- `price(asset, timestamp)` - Price at specific timestamp
- `x_price(base, quote, timestamp)` - Cross-asset price at timestamp
- `assets()` - Get supported assets (complex parsing required)

## 🔄 Error Handling

### **Graceful Fallbacks**
```typescript
try {
  const price = await priceUSDCinUSD()
  return price
} catch (error) {
  console.error('Failed to get USDC/USD price:', error)
  return 1.0 // Fallback to demo price
}
```

### **Comprehensive Testing**
```typescript
export async function testReflectorConnections() {
  // Tests all price feeds, decimals, timestamps, and TWAPs
  // Returns detailed results with error information
}
```

## 🎨 Debug Interface

### **Features**
- **Real-time testing** of all Oracle functions
- **Auto-refresh** every 30 seconds
- **Individual function testing** with console output
- **Error display** with detailed information
- **Configuration validation** (Contract IDs, RPC, etc.)

### **URL**: `/reflector-debug`

## ⚙️ Configuration

### **Environment Variables**
```env
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
NEXT_PUBLIC_READONLY_PUBLIC_KEY=GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63
```

## 🧪 Testing

### **Manual Testing**
```javascript
// Browser console at /reflector-debug
await priceUSDCinUSD()  // Should return ~1.0
await usdPerCLP()       // Should return ~1000
await priceXLMinUSD()   // Should return ~0.12
await getTwap(process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC, { type: 2, code: 'USDC' }, 2)
```

### **Automated Testing**
- All functions have comprehensive error handling
- Fallback to demo prices when Oracle unavailable
- Detailed logging for debugging

## 🚀 Performance

### **Optimizations**
- **Read-only access** - No transaction fees
- **Caching** - Results cached for 30 seconds
- **Error recovery** - Graceful fallbacks
- **Parallel requests** - Multiple price feeds simultaneously

### **Limitations**
- **Testnet only** - Production requires mainnet contracts
- **Read-only** - Cannot write to Oracle contracts
- **Rate limiting** - Respects RPC server limits

## 🔗 Integration Points

### **Stake Page**
- Real-time price display
- USD equivalence calculations
- Fallback to demo prices

### **Dashboard**
- Live price panel
- Historical data display
- Error status indicators

### **Debug Page**
- Comprehensive testing interface
- Configuration validation
- Performance monitoring

## 📚 References

- [Official Reflector Oracle Client](https://github.com/reflector-network/oracle-client)
- [Stellar Soroban RPC](https://developers.stellar.org/docs/data/apis/rpc/api-reference/methods/simulateTransaction)
- [SEP-40 Oracle Standard](https://stellar.org/protocol/sep-40)
- [Stellar Laboratory](https://laboratory.stellar.org/)

---

**Ready for KALE x Reflector Hackathon 2025! 🏆**
