# 💸 AhorroStellar - DeFi Educativo para Estudiantes LATAM

**Ahorra con propósito. Vota por el futuro.**

AhorroStellar es una app DeFi educativa donde estudiantes transforman sus ahorros en USDC en respaldo simbólico para proyectos universitarios, sin riesgo y con posibilidad de ganar intereses y reputación.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ahorrostellar.vercel.app-blue?style=for-the-badge&logo=vercel)](https://ahorrostellar.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-kaream--badillo%2Fahorrostellar-black?style=for-the-badge&logo=github)](https://github.com/kaream-badillo/ahorrostellar)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 🎯 **Propuesta de Valor Única**

| **🎯 Problema** | Estudiantes LATAM sin acceso a DeFi educativo y seguro |
| **💡 Solución** | Stake temporal de USDC + votación simbólica sin riesgo |
| **👥 Mercado** | Estudiantes universitarios (18-25 años) en LATAM |
| **💰 Modelo** | Educativo gratuito + escalabilidad vía partnerships |
| **⚡ Tracción** | MVP funcional, UI completa, listo para Soroban |

### **🔐 Características Principales**

- **Sin riesgo**: Fondos siempre recuperables (como stake flexible)
- **Educativo**: Primera experiencia DeFi práctica y segura
- **Propósito**: Votación simbólica por proyectos que importan
- **Recompensas reales**: Bonus si el proyecto respaldado gana financiamiento

## 💰 **Sistema de Voto-Ahorro**

- **Bloqueo temporal de USDC** (flexible, cada día puede retirar, sin riesgo)
- **Rentabilidad base garantizada** (ej: 5% APY ideal, mejor que un depósito a plazo)
- **Votación simbólica** por proyectos universitarios
- **Bonus condicional** (5-12%) si el proyecto gana financiamiento externo

## 🏆 **Dashboard de Reputación**

- **Historial de participación** y respaldos
- **Nivel de reputación** acumulada
- **Estadísticas de proyectos** respaldados
- **Progreso hacia siguiente nivel**

## 🔐 **Integración Stellar**

- **Conexión nativa** con Freighter Wallet (posiblemente después Lobstr u otras)
- **Gestión de USDC** en Stellar Testnet
- **Arquitectura preparada** para contratos Soroban

## 🎯 **¿Cómo Funciona AhorroStellar?**

### **1. 📱 Conecta tu Wallet**
- Instala Freighter Wallet
- Conecta tu cuenta Stellar
- Deposita USDC en tu wallet

### **2. 💰 Haz Stake Temporal**
- Bloquea USDC por el tiempo que desees
- Mantén control total: puedes retirar cuando quieras
- Gana rentabilidad base garantizada (5% APY)

### **3. 🗳️ Vota por Proyectos**
- Explora proyectos universitarios
- Vota simbólicamente con tu stake
- Apoya iniciativas que te importan

### **4. 🏆 Gana Reputación y Bonus**
- Acumula reputación por participar
- Recibe bonus si tu proyecto respaldado gana financiamiento
- Sube de nivel en el dashboard

### **5. 📊 Aprende DeFi**
- Experiencia práctica sin riesgo
- Entiende cómo funcionan los protocolos DeFi
- Prepara para el futuro financiero descentralizado

## 🚀 **Cómo se Desarrolló AhorroStellar**

### **📚 Historia del Proyecto**

AhorroStellar nació de la necesidad de crear una experiencia DeFi educativa y segura para estudiantes LATAM. El proyecto se desarrolló a través de tres fases principales:

#### **🎨 Fase 1: Fundación Frontend** 
- **Contexto**: Participación en ideathon inicial
- **Enfoque**: Diseño UI/UX y experiencia de usuario
- **Logros**: Aplicación Next.js completa con diseño responsivo

#### **🔗 Fase 2: Hackathon KALE x Reflector**
- **Contexto**: Stellar KALE x Reflector Hackathon 2025
- **Enfoque**: Composabilidad y feeds de precios en tiempo real
- **Logros**: Integración Reflector Oracle, precios en vivo, traducción al inglés

#### **🏗️ Fase 3: Refactor Soroban**
- **Contexto**: Estructura profesional y escalabilidad
- **Enfoque**: Arquitectura modular y preparación para contratos inteligentes
- **Logros**: Estructura de proyecto profesional, scripts de deployment, documentación completa

> **Nota**: Estas fases representan la evolución técnica del proyecto, pero la **visión central siempre ha sido la misma**: crear una plataforma DeFi educativa que permita a los estudiantes aprender sobre finanzas descentralizadas de manera segura y con propósito.

---

## 🏗️ **Current Project Structure**

```
ahorrostellar/
├── 📁 frontend/           # Next.js Application (Phase 1)
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
├── 📁 reflector/         # Reflector Oracle Integration (Phase 2)
│   ├── reflector.ts      # Oracle client implementation
│   └── *.md             # Oracle documentation
├── 📁 soroban/          # Soroban SDK & Utilities (Phase 3)
│   ├── stellar.ts       # Stellar SDK integration
│   └── friendbot.ts     # Testnet funding utilities
├── 📁 contracts/        # Smart Contracts (Phase 3)
│   └── README.md        # Contract documentation
├── 📁 docs/            # Project Documentation (All Phases)
│   └── *.md            # Comprehensive documentation
├── 📁 scripts/         # Build & Development Scripts (Phase 3)
│   ├── setup.js        # Project setup
│   ├── dev-frontend.js # Development server
│   └── build-frontend.js # Production build
├── 📁 config/          # Configuration Files (Phase 3)
│   ├── config.ts       # App configuration
│   └── utils.ts         # Utility functions
└── package.json        # Root package.json
```

---

## 🚀 **Quick Start**

### **1. Setup Project**

```bash
# Clone repository
git clone https://github.com/kaream-badillo/ahorrostellar.git
cd ahorrostellar

# Setup everything
npm run setup
```

### **2. Configure Environment**

Create `frontend/.env.local`:

```bash
# 🔴 Replace with your values
NEXT_PUBLIC_READONLY_PUBLIC_KEY=YOUR_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
```

### **3. Start Development**

```bash
# Start development server
npm run dev

# Or build for production
npm run build
```

---

## 🛠️ **Available Scripts**

| Script | Description |
|--------|-------------|
| `npm run setup` | Setup project and install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📱 **Funcionalidades Implementadas**

### **✅ Sistema Core**
- **Stake Temporal de USDC** - Bloqueo flexible sin riesgo
- **Votación Simbólica** - Respaldo a proyectos universitarios
- **Dashboard de Reputación** - Seguimiento de participación
- **Sistema de Recompensas** - Bonus condicional por proyectos exitosos

### **✅ Integración Blockchain**
- **Freighter Wallet** - Conexión nativa con Stellar
- **Reflector Oracle** - Precios en tiempo real (USDC/USD, CLP/USD, XLM/USD)
- **Gestión USDC** - Manejo seguro de fondos en Testnet
- **Arquitectura Soroban** - Preparada para contratos inteligentes

### **✅ Experiencia Educativa**
- **Flujo Sin Riesgo** - Primera experiencia DeFi segura
- **Interfaz Intuitiva** - Diseño moderno y accesible
- **Educación Práctica** - Aprendizaje hands-on de DeFi
- **Comunidad Universitaria** - Enfoque en estudiantes LATAM

---

## 🔧 **Tech Stack**

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS |
| **Blockchain** | Stellar Testnet, Soroban, Freighter Wallet |
| **Oracle** | Reflector Oracle (real-time price feeds) |
| **State** | Zustand, React Context |
| **Deploy** | Vercel, GitHub Actions |

---

## 🌟 **Key Components by Phase**

### **Frontend (`/frontend`)** - Phase 1
- **Pages**: Landing, Stake, Dashboard, Projects
- **Components**: UI kit, Wallet integration, Stake forms
- **Hooks**: Freighter, Prices, Projects, User stats
- **Stores**: Global state management

### **Reflector (`/reflector`)** - Phase 2
- **Real-time prices**: USDC/USD, CLP/USD, XLM/USD
- **SEP-40 compliant**: Read-only access via `simulateTransaction`
- **Error handling**: Graceful fallbacks to demo prices
- **14 decimal precision**: Accurate calculations

### **Soroban (`/soroban`)** - Phase 3
- **Stellar SDK**: Account management, transaction building
- **Friendbot**: Testnet funding utilities
- **Network config**: Testnet/Mainnet switching

### **Contracts (`/contracts`)** - Phase 3
- **Smart contracts**: Soroban contract templates
- **Deployment**: Contract deployment scripts
- **ABI**: Contract interfaces and documentation

---

## 🔗 **Integration Points**

### **Reflector Oracle** (Phase 2)
```typescript
// Real-time price feeds
const usdcPrice = await priceUSDCinUSD()
const clpRate = await usdPerCLP()
const xlmPrice = await priceXLMinUSD()
```

### **Freighter Wallet** (Phase 1)
```typescript
// Wallet connection
const { connect, disconnect, isConnected } = useFreighter()
```

### **Stake System** (Phase 2)
```typescript
// Temporary USDC locking
const { stake, unstake, getStakes } = useStakes()
```

---

## 📊 **Architecture Overview**

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

## 🎯 **Development Workflow**

1. **Setup**: `npm run setup`
2. **Develop**: `npm run dev`
3. **Test**: Use `/reflector-debug` for Oracle testing
4. **Build**: `npm run build`
5. **Deploy**: Automatic via Vercel

---

## 📚 **Documentation**

- **Setup Guide**: `docs/SETUP.md`
- **Reflector Integration**: `docs/REFLECTOR_TECHNICAL.md`
- **Architecture**: `docs/ARCHITECTURE.md`
- **Deployment Guide**: `docs/DEPLOYMENT.md`

---

## 🧪 **Demo vs Real Usage**

- **Demo mode**: Click "🚀 Simulate Connection (Demo)" on `/stake`. No real funds, enables full flow for judges.
- **Real mode**: Connect Freighter on Testnet, see live prices (Reflector) and interact read-only.

**Limitations in MVP**: No on-chain transfers; staking is simulated for education.

---

## 🔐 **Freighter Guide (Testnet)**

1. Install Freighter: [freighter.app](https://freighter.app)
2. Switch to Testnet and create a new account.
3. Fund with Friendbot:
   ```bash
   curl "https://friendbot.stellar.org/?addr=YOUR_PUBLIC_KEY"
   ```
4. Open `/stake`, connect wallet, verify live prices.

**Troubleshooting**:
- If connection popup is blocked, allow site pop-ups.
- If network mismatch, re-select Testnet in Freighter and refresh.

---

## 🔎 **How to Evaluate (Judges)**

1. Open the live demo: [ahorrostellar.vercel.app](https://ahorrostellar.vercel.app)
2. Go to `/stake` and click "🚀 Simulate Connection (Demo)"
3. Pick a project and perform a "Vote-Save (mock)"
4. Go to `/dashboard` to view reputation and backed projects

---

## 🔗 **Contract Links (Testnet)**

Reflector Contracts on Testnet (explorer):

- **USDC_PRICE**: `CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP` — [View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP)
- **FX_RATES**: `CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W` — [View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W)
- **CEX_DEX**: `CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63` — [View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63)

---

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📞 **Contact**

**Kaream Badillo**  
Blockchain Enthusiast & Emerging Web3 Builder  
📧 Email: kaream.badillo@usach.cl  
🐦 X: [@kaream_badillo](https://x.com/kaream_badillo)  
🐙 GitHub: [@kaream-badillo](https://github.com/kaream-badillo)  
🌍 Chile

---

💸 **Ahorra con propósito. Vota por el futuro.** 🌟  
_Construido con ❤️ para la comunidad estudiantil LATAM_

**DeFi Educativo • Inclusión Financiera • Futuro de las Finanzas Descentralizadas**

---

## 🆕 **What's New in Each Phase**

### **Phase 1: Frontend Foundation**
- Complete Next.js application with responsive design
- Educational DeFi flow with zero financial risk
- Modern UI/UX with Tailwind CSS
- User-friendly navigation and components

### **Phase 2: KALE x Reflector Hackathon**
- **Real-time price feeds** via **Reflector Oracle** (USDC/USD, USD/CLP, XLM/USD)
- **SEP-40 compliant** integration using `simulateTransaction` (read-only, no signing)
- **Live price calculations** in stake interface with USD equivalences
- **Comprehensive debugging** page at `/reflector-debug` with auto-refresh
- **Error handling** with graceful fallbacks to demo prices
- **English translation** for international hackathon participation

### **Phase 3: Soroban Refactor**
- **Professional project structure** with modular architecture
- **Smart contract preparation** with Soroban templates
- **Automated deployment scripts** for development and production
- **Comprehensive documentation** covering all aspects
- **Scalable configuration** for future enhancements

---

## 🔍 **For Judges: Technical Deep Dive**

### **Reflector Integration Details**
- **File**: `reflector/reflector.ts`
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

_This project demonstrates composability by building directly on top of existing Stellar infrastructure (Reflector Oracle) while maintaining educational value and zero-risk user experience._

---

## ✅ **Prerequisites**

- Node.js 20.x (LTS)
- npm 10.x (or pnpm 9.x)
- macOS/Linux/Windows (Windows users recommended WSL for advanced development)

---

## 🛟 **Troubleshooting**

- **Build fails with JSX/TS errors**: Ensure Node 20.x and clean install `rm -rf node_modules && npm i`
- **Reflector not responding**: Wait 30–60 seconds and retry; demo prices will fallback
- **Freighter not detected**: Confirm extension installed and on Testnet

---

## 🧰 **Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run format   # Format code
```

---

## 🧪 **CI/CD**

Add a CI badge once your workflow is configured:

[![CI](https://github.com/TODO_USER/TODO_REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/TODO_USER/TODO_REPO/actions/workflows/ci.yml)

---

## 🤝 **KALE Tie-in (Education)**

- Future step: integrate KALE-based reputation boosts for "work" contributions
- Governance preview: community voting via KALE staking (post-hackathon)

---

## ⚖️ **License**

MIT License - See [LICENSE](LICENSE) for complete details.

---

## 📞 **Contact & Links**

| Demo | Code (branch) | Deploy | Docs |
|------|---------------|--------|------|
| 🌟 [Live App](https://ahorrostellar.vercel.app) | 📁 [GitHub](https://github.com/kaream-badillo/ahorrostellar) | ⚡ [Vercel Project](https://vercel.com/kareams-projects/ahorrostellar) | 📚 [Stellar](https://stellar.org) |

**Kaream Badillo**  
Blockchain Enthusiast & Emerging Web3 Builder  
📧 Email: kaream.badillo@usach.cl  
🐦 X: [@kaream_badillo](https://x.com/kaream_badillo)  
🐙 GitHub: [@kaream-badillo](https://github.com/kaream-badillo)  
🌍 Chile

_Developing the future of educational DeFi in LATAM_

---

💸 **Ahorra con propósito. Vota por el futuro.** 🌟  
_Construido con ❤️ para la comunidad estudiantil LATAM_

**DeFi Educativo • Inclusión Financiera • Futuro de las Finanzas Descentralizadas**