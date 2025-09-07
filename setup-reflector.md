# 🔧 Setup Reflector Oracle - KALE x Reflector Hackathon 2025

## ⚡ Quick Setup (5 minutes)

### 1. Create Testnet Account
```bash
# Go to: https://laboratory.stellar.org/#account-creator?network=testnet
# Click "Generate Keypair"
# Copy ONLY the Public Key (G...)
# DO NOT copy the Secret Key (for security)
```

### 2. Fund the Account
```bash
# Replace <YOUR_PUBLIC_KEY> with your actual public key
curl "https://friendbot.stellar.org/?addr=<YOUR_PUBLIC_KEY>"

# Should return:
# {
#   "hash": "...",
#   "result": "success",
#   "submission_result": "success"
# }
```

### 3. Create .env.local
Create file `.env.local` in project root with:

```env
# [AhorroStellar][Reflector] - KALE x Reflector Hackathon 2025
# Stellar Testnet Configuration

# ── Stellar Testnet (Soroban)
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# ── Cuenta lectora READONLY (solo public key, NO secret key)
NEXT_PUBLIC_READONLY_PUBLIC_KEY=<YOUR_PUBLIC_KEY_HERE>

# ── Reflector Oracle Contract IDs (Testnet) - Official from Stellar Docs
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63

# ── Development flags
NEXT_PUBLIC_DEV_WALLET_MOCK=true
```

### 4. Restart Development Server
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next
npm run dev

# macOS/Linux
rm -rf .next && npm run dev
```

## 🧪 Testing

### 1. Test in Browser Console
Go to `/reflector-debug` and open browser console:

```javascript
// Test individual functions
await priceUSDCinUSD()  // Should return ~1.0
await usdPerCLP()       // Should return ~1000
await priceXLMinUSD()   // Should return ~0.12
```

### 2. Test in UI
- Go to `/stake` → Should show real prices (not "demo")
- Go to `/dashboard` → Should show live price panel
- Go to `/reflector-debug` → Should show all connections working

## 🐛 Troubleshooting

### Error: "NEXT_PUBLIC_READONLY_PUBLIC_KEY missing"
- Check that `.env.local` exists and has the variable
- Restart `npm run dev` after creating `.env.local`

### Error: "Account not found"
- Account not funded → Run friendbot curl command
- Wrong public key → Check the key in `.env.local`

### Error: "No retval from simulation"
- Check Contract IDs are correct
- Check RPC connection to testnet
- Check internet connection

### Prices show as "demo" instead of real
- Check `.env.local` configuration
- Restart development server
- Check browser console for errors

## ✅ Success Indicators

- `/reflector-debug` shows green checkmarks for all price feeds
- `/stake` shows real-time prices (not "demo")
- Browser console shows actual price values
- No errors in browser console

## 🔗 Official Documentation

- [Stellar Laboratory](https://laboratory.stellar.org/)
- [Reflector Oracle Docs](https://developers.stellar.org/docs/data/oracles/oracle-providers)
- [Soroban RPC](https://developers.stellar.org/docs/data/apis/rpc/api-reference/methods/simulateTransaction)

---

**Ready for KALE x Reflector Hackathon 2025! 🚀**
