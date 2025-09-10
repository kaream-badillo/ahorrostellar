# 💸 AhorroStellar - Professional Structure

**Educational DeFi app for LATAM students built with Stellar + Soroban + Reflector Oracle**

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-00C7B7?style=for-the-badge&logo=vercel)](https://ahorrostellar.vercel.app)
[![Stellar](https://img.shields.io/badge/Stellar-Testnet-7D00FF?style=for-the-badge&logo=stellar)](https://stellar.org)
[![Reflector](https://img.shields.io/badge/Reflector-Oracle-FF6B35?style=for-the-badge)](https://reflector.stellar.org)

## 🏗️ Project Structure

```
ahorrostellar/
├── 📁 frontend/           # Next.js Application
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── next.config.ts    # Next.js configuration
├── 📁 contracts/         # Soroban Smart Contracts
│   └── README.md         # Contract documentation
├── 📁 soroban/          # Soroban SDK & Utilities
│   ├── stellar.ts       # Stellar SDK integration
│   └── friendbot.ts     # Testnet funding utilities
├── 📁 reflector/        # Reflector Oracle Integration
│   ├── reflector.ts     # Oracle client implementation
│   └── *.md            # Oracle documentation
├── 📁 docs/            # Project Documentation
│   └── *.md            # All documentation files
├── 📁 scripts/         # Build & Development Scripts
│   ├── setup.js        # Project setup
│   ├── dev-frontend.js # Development server
│   └── build-frontend.js # Production build
├── 📁 config/          # Configuration Files
│   ├── config.ts       # App configuration
│   └── utils.ts        # Utility functions
└── package.json        # Root package.json
```

## 🚀 Quick Start

### 1. Setup Project
```bash
# Clone repository
git clone https://github.com/kaream-badillo/ahorrostellar.git
cd ahorrostellar

# Setup everything
npm run setup
```

### 2. Configure Environment
Edit `frontend/.env.local`:
```bash
# 🔴 Replace with your values
NEXT_PUBLIC_READONLY_PUBLIC_KEY=YOUR_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
```

### 3. Start Development
```bash
# Start development server
npm run dev

# Or build for production
npm run build
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run setup` | Setup project and install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📱 Features

### ✅ **Implemented**
- **Responsive UI/UX** - Complete Next.js application
- **Freighter Integration** - Wallet connection and management
- **Reflector Oracle** - Real-time price feeds (USDC/USD, CLP/USD, XLM/USD)
- **Stake System** - Temporary USDC locking with symbolic voting
- **Reputation Dashboard** - User progress and backed projects
- **Educational Flow** - Zero-risk DeFi learning experience

### 🔄 **In Development**
- **Soroban Contracts** - Real smart contracts deployment
- **KALE Integration** - Work-based rewards system
- **Advanced Governance** - Community voting mechanisms

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS |
| **Blockchain** | Stellar Testnet, Soroban, Freighter Wallet |
| **Oracle** | Reflector Oracle (real-time price feeds) |
| **State** | Zustand, React Context |
| **Deploy** | Vercel, GitHub Actions |

## 🌟 Key Components

### **Frontend (`/frontend`)**
- **Pages**: Landing, Stake, Dashboard, Projects
- **Components**: UI kit, Wallet integration, Stake forms
- **Hooks**: Freighter, Prices, Projects, User stats
- **Stores**: Global state management

### **Reflector (`/reflector`)**
- **Real-time prices**: USDC/USD, CLP/USD, XLM/USD
- **SEP-40 compliant**: Read-only access via `simulateTransaction`
- **Error handling**: Graceful fallbacks to demo prices
- **14 decimal precision**: Accurate calculations

### **Soroban (`/soroban`)**
- **Stellar SDK**: Account management, transaction building
- **Friendbot**: Testnet funding utilities
- **Network config**: Testnet/Mainnet switching

### **Contracts (`/contracts`)**
- **Smart contracts**: Soroban contract templates
- **Deployment**: Contract deployment scripts
- **ABI**: Contract interfaces and documentation

## 🔗 Integration Points

### **Reflector Oracle**
```typescript
// Real-time price feeds
const usdcPrice = await priceUSDCinUSD()
const clpRate = await usdPerCLP()
const xlmPrice = await priceXLMinUSD()
```

### **Freighter Wallet**
```typescript
// Wallet connection
const { connect, disconnect, isConnected } = useFreighter()
```

### **Stake System**
```typescript
// Temporary USDC locking
const { stake, unstake, getStakes } = useStakes()
```

## 📊 Architecture

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

## 🎯 Development Workflow

1. **Setup**: `npm run setup`
2. **Develop**: `npm run dev`
3. **Test**: Use `/reflector-debug` for Oracle testing
4. **Build**: `npm run build`
5. **Deploy**: Automatic via Vercel

## 📚 Documentation

- **Setup Guide**: `docs/SETUP.md`
- **Reflector Integration**: `docs/REFLECTOR_TECHNICAL.md`
- **API Documentation**: `docs/API.md`
- **Deployment Guide**: `docs/DEPLOYMENT.md`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📞 Contact

**Kaream Badillo**  
Blockchain Enthusiast & Emerging Web3 Builder  
📧 Email: kaream.badillo@usach.cl  
🐦 X: https://x.com/kaream_badillo  
🐙 GitHub: https://github.com/kaream-badillo  
🌍 Chile

---

💸 **Save with purpose. Vote for the future.** 🌟  
*Built with ❤️ for the LATAM student community*

**Stellar KALE x Reflector Hackathon 2025 • DeFi Education • Financial Inclusion**