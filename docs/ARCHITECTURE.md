# 🏗️ AhorroStellar Architecture

## 📁 Project Structure

```
ahorrostellar/
├── 📁 frontend/           # Next.js Application
│   ├── src/              # Source code
│   │   ├── app/          # App Router pages
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities & integrations
│   │   ├── stores/       # Zustand stores
│   │   └── contexts/     # React contexts
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   ├── next.config.ts    # Next.js configuration
│   ├── tailwind.config.ts # Tailwind CSS config
│   ├── tsconfig.json     # TypeScript config
│   └── .env.local        # Environment variables
├── 📁 contracts/         # Soroban Smart Contracts
│   └── README.md         # Contract documentation
├── 📁 soroban/          # Soroban SDK & Utilities
│   ├── stellar.ts       # Stellar SDK integration
│   └── friendbot.ts     # Testnet funding utilities
├── 📁 reflector/        # Reflector Oracle Integration
│   ├── reflector.ts     # Oracle client implementation
│   ├── REFLECTOR_SETUP.md # Setup guide
│   ├── REFLECTOR_TECHNICAL.md # Technical docs
│   └── setup-reflector.md # Quick setup
├── 📁 docs/            # Project Documentation
│   ├── README.md       # Main documentation
│   ├── ARCHITECTURE.md # This file
│   └── *.md           # Other documentation
├── 📁 scripts/         # Build & Development Scripts
│   ├── setup.js        # Project setup
│   ├── dev-frontend.js # Development server
│   └── build-frontend.js # Production build
├── 📁 config/          # Configuration Files
│   ├── config.ts       # App configuration
│   └── utils.ts        # Utility functions
├── package.json        # Root package.json
├── README.md          # Project overview
└── LICENSE            # MIT License
```

## 🔧 Component Architecture

### **Frontend Layer**
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Zustand** for state management

### **Blockchain Layer**
- **Stellar Testnet** for network
- **Soroban** for smart contracts
- **Freighter Wallet** for user interaction
- **Reflector Oracle** for price feeds

### **Integration Layer**
- **Reflector Oracle** - Real-time price feeds
- **Stellar SDK** - Blockchain interactions
- **Freighter API** - Wallet management

## 🚀 Development Workflow

1. **Setup**: `npm run setup`
2. **Develop**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: Automatic via Vercel

## 📊 Data Flow

```
User → Freighter → Stellar SDK → Stellar Testnet
  ↓
Frontend → Reflector Oracle → Price Feeds
  ↓
Zustand Store → UI Components
```

## 🔗 Key Integrations

- **Reflector Oracle**: USDC/USD, CLP/USD, XLM/USD prices
- **Freighter Wallet**: Account management and transactions
- **Stellar SDK**: Blockchain operations and queries
- **Next.js API**: Server-side operations and data fetching
