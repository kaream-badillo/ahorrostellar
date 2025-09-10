# 🚀 Deployment Guide - AhorroStellar Refactored

## 📋 Overview

This guide explains how to deploy the refactored AhorroStellar project to Vercel without affecting the existing hackathon deployment.

## 🎯 Deployment Strategy

- **Existing Deploy**: `ahorrostellar.vercel.app` (hackathon version - DO NOT TOUCH)
- **New Deploy**: `ahorrostellar-refactored.vercel.app` (refactored version)

## 🛠️ Prerequisites

1. **Vercel CLI** installed globally
2. **Vercel account** with access to deploy
3. **Environment variables** configured

## 🚀 Quick Deploy

### Option 1: Automated Script
```bash
# Run the deploy script
npm run deploy
```

### Option 2: Manual Deploy
```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel --prod
```

## ⚙️ Environment Variables

Configure these in Vercel dashboard or via CLI:

```bash
# Stellar Testnet Configuration
NEXT_PUBLIC_READONLY_PUBLIC_KEY=YOUR_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# Reflector Oracle Contracts (Testnet)
NEXT_PUBLIC_REFLECTOR_USDC_PRICE=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_FX_RATES=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CEX_DEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63
```

## 🔧 Build Configuration

The project uses a custom build configuration:

- **Root Directory**: `frontend/`
- **Build Command**: `npm run build`
- **Output Directory**: `frontend/.next`
- **Install Command**: `npm install`

## 📁 Project Structure for Deploy

```
ahorrostellar/
├── vercel.json          # Vercel configuration
├── frontend/            # Next.js app (deployed)
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   ├── package.json    # Dependencies
│   └── .next/          # Build output
├── contracts/          # Smart contracts (not deployed)
├── soroban/           # Utilities (not deployed)
├── reflector/         # Oracle integration (not deployed)
├── docs/              # Documentation (not deployed)
└── scripts/           # Build scripts (not deployed)
```

## 🌐 URLs

- **Hackathon Version**: https://ahorrostellar.vercel.app (DO NOT TOUCH)
- **Refactored Version**: https://ahorrostellar-refactored.vercel.app (NEW)

## 🔍 Verification

After deployment, verify:

1. **Homepage loads**: `/`
2. **Stake page works**: `/stake`
3. **Dashboard accessible**: `/dashboard`
4. **Reflector debug**: `/reflector-debug`
5. **Freighter connection**: `/freighter-debug`

## 🚨 Important Notes

- **DO NOT** modify the existing `ahorrostellar.vercel.app` deployment
- **DO NOT** change environment variables of the hackathon version
- **DO NOT** merge changes to the `feat/kale-reflector-hackathon` branch
- **ALWAYS** work on the `feat/soroban-refactor` branch

## 🔄 Rollback

If something goes wrong:

```bash
# Revert to previous deployment
vercel rollback

# Or redeploy from a specific commit
vercel --prod --force
```

## 📞 Support

If you encounter issues:

1. Check Vercel dashboard for build logs
2. Verify environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that the build completes successfully locally

---

**Remember**: Keep the hackathon deployment untouched and always work on the refactored version!
