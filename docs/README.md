# 💸 AhorroStellar - Reflector Edition
**Stellar KALE x Reflector Hackathon 2025**

*Save with purpose. Vote for the future.*

Educational DeFi app for LATAM students built with Stellar + Soroban + **Reflector Oracle**

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-00C7B7?style=for-the-badge&logo=vercel)](https://ahorrostellar.vercel.app)
[![Stellar](https://img.shields.io/badge/Stellar-Testnet-7D00FF?style=for-the-badge&logo=stellar)](https://stellar.org)
[![Reflector](https://img.shields.io/badge/Reflector-Oracle-FF6B35?style=for-the-badge)](https://reflector.stellar.org)

🚀 **Live Demo** | 🌟 **[Try AhorroStellar →](https://ahorrostellar.vercel.app)**

*For judges: Direct access without installations. Mobile & desktop compatible.*

## 🏆 Stellar KALE x Reflector Hackathon 2025

**Category:** DeFi & Financial Inclusion  
**Focus:** Web3 Education for LATAM students  
**Differentiator:** Zero risk + social purpose + real scalability + Reflector integration

### Why AhorroStellar Will Win
- ✅ **Real Problem:** Lack of educational DeFi access in LATAM
- ✅ **Viable Solution:** Functional MVP, scalable architecture  
- ✅ **Large Market:** Millions of university students
- ✅ **Early Traction:** Complete UI, smooth experience
- ✅ **Clear Vision:** Defined technical and business roadmap
- ✅ **Reflector Integration:** Real-time price feeds for accurate calculations

---

## 📊 Executive Summary

| Aspect | Detail |
|--------|--------|
| 🎯 **Problem** | LATAM students lack access to safe, educational DeFi experiences |
| 💡 **Solution** | Temporary USDC staking + symbolic voting without risk + **real-time prices via Reflector** |
| 👥 **Market** | University students (18-25 years) in LATAM |
| 💰 **Model** | Free educational platform + scalability via partnerships |
| ⚡ **Traction** | Functional MVP, complete UI, **Reflector integration ready** |
| 🏆 **Competition** | **Stellar KALE x Reflector Hackathon 2025** |

---

## 🎯 Unique Value Proposition

- **Zero Risk**: Funds always recoverable (temporary lock)
- **Educational**: First practical and safe DeFi experience
- **Purpose-Driven**: Symbolic voting for projects that matter
- **Real Rewards**: Bonus if backed project wins funding + **real-time price calculations**
- **Real-Time Data**: **Reflector Oracle integration** for live USDC/USD, CLP/USD, XLM/USD prices

---

## 🧪 MVP Features

### 💰 Vote-Savings System
- Temporary USDC locking (risk-free)
- **Real-time price feeds** via **Reflector Oracle**
- Symbolic voting for university projects
- Conditional bonus if project wins external funding

### 🏆 Reputation Dashboard
- Participation and backing history
- Accumulated reputation level
- Backed projects statistics
- Progress to next level

### 🔐 Stellar Integration
- Native Freighter Wallet connection
- USDC management on Stellar Testnet
- **Reflector Oracle** for live price feeds
- Architecture ready for Soroban contracts
- Simulated transactions (educational MVP)

---

## 🛠️ Tech Stack

| Frontend | Blockchain | Deploy |
|----------|------------|--------|
| Next.js 15 | Stellar Testnet | Vercel |
| TypeScript | **Reflector Oracle** | GitHub Actions |
| Tailwind CSS | Freighter Wallet | Edge Functions |
| React 18 | Stellar SDK | Global CDN |

---

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│   Next.js App  │───▶│  Stellar SDK │───▶│ Freighter Wallet│
│   (Frontend)    │    │   (Bridge)   │    │   (User Funds)  │
└─────────────────┘    └──────────────┘    └─────────────────┘
         │                       │                    │
         ▼                       ▼                    ▼
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│  Vercel Deploy │    │**Reflector** │    │ Stellar Testnet │
│   (Hosting)     │    │**(Oracle)**  │    │   (Network)     │
└─────────────────┘    └──────────────┘    └─────────────────┘
```

---

## 🔧 Reflector Oracle Integration

### **Real-Time Price Feeds**
- **USDC/USD**: Live pricing from Stellar Public Assets
- **CLP/USD**: Foreign exchange rates via Reflector
- **XLM/USD**: External CEX & DEX pricing

### **Contract IDs (Testnet)**
```javascript
// Reflector Contracts
USDC_PRICE: "CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP"
FX_RATES:   "CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W"
CEX_DEX:    "CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63"
```

### **Implementation**
- **Read-only access** via `simulateTransaction` (no signing required)
- **14 decimal precision** for accurate calculations
- **5-minute sampling** for fresh price data
- **Error handling** with fallback to demo prices

---

## 🚀 Quick Start

### Installation
```bash
# Clone repository
git clone https://github.com/kaream-badillo/ahorrostellar.git
cd ahorrostellar

# Install dependencies
npm install

# Start development
npm run dev
```

### Reflector Configuration
```bash
# 1. Create testnet account at: https://laboratory.stellar.org/#account-creator?network=testnet
# 2. Fund account
curl "https://friendbot.stellar.org/?addr=<YOUR_PUBLIC_KEY>"

# 3. Create .env.local
echo "NEXT_PUBLIC_READONLY_PUBLIC_KEY=<YOUR_PUBLIC_KEY>" > .env.local
echo "NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org" >> .env.local
echo "NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015" >> .env.local
```

### Deploy
```bash
npm run build    # Verify build
vercel deploy    # Automatic deploy
```

---

## 📱 Responsive Design

| Device | Status | Notes |
|--------|--------|-------|
| Desktop | ✅ Complete | Optimized UI, functional sidebar |
| Tablet | ✅ Complete | Adaptive grid, touch-friendly |
| Mobile | 🟡 70% | Responsive content, header in development |

**Tailwind Breakpoints:**
- `sm: 640px+` (large mobile)
- `md: 768px+` (tablet)
- `lg: 1024px+` (desktop)

---

## 🎯 Product Roadmap

### ✅ Phase 1: MVP (Current)
- Complete responsive UI/UX
- Basic Freighter integration
- **Reflector Oracle integration** for real-time prices
- Simulated Soroban contracts
- Local reputation system

### 🔄 Phase 2: Blockchain (Post-Hackathon)
- Deploy real Soroban contracts
- Complete on-chain integration
- Decentralized governance system
- Advanced participation metrics

### 📈 Phase 3: Scalability
- Partnerships with LATAM universities
- Student project marketplace
- Advanced gamification with NFTs
- AI-powered predictive analytics

---

## 🏆 Stellar KALE x Reflector Hackathon 2025

### **Category**: DeFi & Financial Inclusion
### **Focus**: Web3 Education for LATAM students
### **Differentiator**: Zero risk + social purpose + real scalability + **Reflector integration**

### **Why AhorroStellar Will Win**
- **Real Problem**: Lack of educational DeFi access in LATAM
- **Viable Solution**: Functional MVP, scalable architecture
- **Large Market**: Millions of university students
- **Early Traction**: Complete UI, smooth experience
- **Clear Vision**: Defined technical and business roadmap
- **Reflector Integration**: **Real-time price feeds** for accurate calculations

---

## 🧪 Testing Reflector Integration

### **Live Price Testing**
```javascript
// Console testing (in /reflector-debug)
await priceUSDCinUSD()  // USDC/USD
await usdPerCLP()       // USD/CLP
await priceXLMinUSD()   // XLM/USD
```

### **UI Testing**
- **`/stake`**: Real-time price display + USD equivalences
- **`/dashboard`**: Live price panel with Reflector data
- **`/reflector-debug`**: Price feed logs and debugging

---

## 🤝 Contributing

Contributions are especially welcome in:

- Mobile responsive design
- Real Soroban contracts
- University integration
- Localization (ES/PT/EN)
- **Reflector Oracle enhancements**

### Process
1. Fork the project
2. Create branch: `git checkout -b feature/new-functionality`
3. Commit: `git commit -m 'Add new functionality'`
4. Push: `git push origin feature/new-functionality`
5. Pull Request

---

## ⚖️ License

MIT License - See LICENSE for complete details.

---

## 📞 Contact & Links

| Demo | Code (branch) | Deploy | Docs |
|------|----------------|--------|------|
| 🌟 [Live App](https://ahorrostellar.vercel.app) | 📁 [GitHub](https://github.com/kaream-badillo/ahorrostellar/tree/feat/kale-reflector-hackathon) | ⚡ [Vercel Project](https://vercel.com/kareams-projects/ahorrostellar) | 📚 [Stellar](https://stellar.org) |

**Kaream Badillo**  
Blockchain Enthusiast & Emerging Web3 Builder  
📧 Email: kaream.badillo@usach.cl  
🐦 X: https://x.com/kaream_badillo  
🐙 GitHub: https://github.com/kaream-badillo  
🌍 Chile

*Developing the future of educational DeFi in LATAM*

---

💸 **Save with purpose. Vote for the future.** 🌟  
*Built with ❤️ for the LATAM student community*

**Stellar KALE x Reflector Hackathon 2025 • DeFi Education • Financial Inclusion**

---

## 🆕 What's New for KALE x Reflector Hackathon 2025

### **Added Features**
- **Real-time price feeds** via **Reflector Oracle** (USDC/USD, USD/CLP, XLM/USD)
- **SEP-40 compliant** integration using `simulateTransaction` (read-only, no signing)
- **Live price calculations** in stake interface with USD equivalences
- **Comprehensive debugging** page at `/reflector-debug` with auto-refresh
- **Error handling** with graceful fallbacks to demo prices

### **Technical Implementation**
- **Method**: `simulateTransaction` for read-only access (no wallet required)
- **Precision**: 14 decimals for accurate price calculations
- **Contracts**: Official Reflector testnet contract IDs
- **Polling**: 30-second auto-refresh for live price updates
- **Fallback**: Demo prices when Reflector unavailable
- **Based on**: Official @reflector/oracle-client v6.1.1 implementation
- **Features**: TWAP, cross-asset pricing, timestamp-based queries, comprehensive error handling

### **What Existed vs What's New**
- **Existed**: MVP UI, Freighter connect, educational flows, mock staking
- **New**: Real Reflector Oracle integration, live price feeds, comprehensive debugging, SEP-40 compliance

## 🔍 For Judges: Technical Deep Dive

### **Reflector Integration Details**
- **File**: `src/lib/reflector.ts`
- **Method**: `simulateTransaction` for read-only access
- **Precision**: 14 decimals for accurate price calculations
- **Fallback**: Demo prices when Reflector unavailable

### **Key Routes**
- **`/stake`**: Asset selector (USDC/CLP/XLM) + real-time USD equivalences
- **`/dashboard`**: Live price panel + reputation tracking
- **`/reflector-debug`**: Price feed debugging and logs

### **Security**
- **No secret keys** in code or environment
- **Read-only access** to Reflector contracts
- **No fund movement** (educational MVP)

### **Future Integration with KALE**
- **Work-based rewards** using KALE token
- **Teamwork proof** for reputation bonuses
- **Community governance** via KALE staking

---

*This project demonstrates composability by building directly on top of existing Stellar infrastructure (Reflector Oracle) while maintaining educational value and zero-risk user experience.*

---

## ✅ Prerequisites

- Node.js 20.x (LTS)
- npm 10.x (o pnpm 9.x)
- macOS/Linux/Windows (en Windows se recomienda WSL para dev avanzado)

---

## 🔧 Environment Variables

Add a `.env.local` file at project root:

```bash
# 🔴 Replace with your values
NEXT_PUBLIC_READONLY_PUBLIC_KEY=TODO_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=TODO_RPC_URL
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
```

What they do:
- `NEXT_PUBLIC_READONLY_PUBLIC_KEY`: public key for read-only Reflector calls.
- `NEXT_PUBLIC_SOROBAN_RPC_PRIMARY`: Soroban Testnet RPC.
- `NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE`: network passphrase (Testnet).

---

## 🧪 Demo vs Real Usage

- Demo mode: click "🚀 Simulate Connection (Demo)" on `/stake`. No real funds, enables full flow for judges.
- Real mode: connect Freighter on Testnet, see live prices (Reflector) and interact read-only.

Limitations in MVP:
- No on-chain transfers; staking is simulated for education.

---

## 🔐 Freighter Guide (Testnet)

1) Install Freighter: https://freighter.app
2) Switch to Testnet and create a new account.
3) Fund with Friendbot:
```bash
curl "https://friendbot.stellar.org/?addr=YOUR_PUBLIC_KEY"
```
4) Open `/stake`, connect wallet, verify live prices.

Troubleshooting:
- If connection popup is blocked, allow site pop-ups.
- If network mismatch, re-select Testnet in Freighter and refresh.

---

## 🔎 How to evaluate in 2 minutes (Judges)

1) Open the live demo: https://ahorrostellar.vercel.app
2) Go to `/stake` and click "🚀 Simulate Connection (Demo)"
3) Pick a project and perform a "Vote-Save (mock)"
4) Go to `/dashboard` to view reputation and backed projects

---

## 🔗 Contract Links (Testnet)

Reflector Contracts on Testnet (explorer):
- USDC_PRICE: `CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP` — https://stellar.expert/explorer/testnet/contract/CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
- FX_RATES:   `CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W` — https://stellar.expert/explorer/testnet/contract/CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
- CEX_DEX:    `CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63` — https://stellar.expert/explorer/testnet/contract/CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63

---

## 🧰 Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
```

---

## 🧪 CI/CD

Add a CI badge once your workflow is configured:

```markdown
[![CI](https://github.com/TODO_USER/TODO_REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/TODO_USER/TODO_REPO/actions/workflows/ci.yml)
```

---

## 🤝 KALE Tie-in (Education)

- Future step: integrate KALE-based reputation boosts for "work" contributions.
- Governance preview: community voting via KALE staking (post-hackathon).

---

## 🛟 Troubleshooting

- Build fails with JSX/TS errors: ensure Node 20.x and clean install `rm -rf node_modules && npm i`.
- Reflector not responding: wait 30–60 seconds and retry; demo prices will fallback.
- Freighter not detected: confirm extension installed and on Testnet.
