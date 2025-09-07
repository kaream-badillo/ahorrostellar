# 💸 AhorroStellar



**Ahorra con propósito. Vota por el futuro.**

*App DeFi educativa para estudiantes LATAM construida con Stellar + Soroban*

[![Deploy](ahorrostellar-nnbe-rbmohxvv7-kareams-projects.vercel.app)]


---

## 🚀 **Demo Live**

### **[🌟 Ver AhorroStellar →](https://ahorrostellar-nnbe.vercel.app/)**

> **Para jurados**: Acceso directo sin instalaciones. Compatible con móvil y desktop.

---

## 📊 **Resumen Ejecutivo**

| **Aspecto** | **Detalle** |
|-------------|-------------|
| **🎯 Problema** | Estudiantes LATAM sin acceso a DeFi educativo y seguro |
| **💡 Solución** | Stake temporal de USDC + votación simbólica sin riesgo |
| **👥 Mercado** | Estudiantes universitarios (18-25 años) en LATAM |
| **💰 Modelo** | Educativo gratuito + escalabilidad vía partnerships |
| **⚡ Tracción** | MVP funcional, UI completa, listo para Soroban |
| **🏆 Competencia** | Stellar LATAM Ideathon 2025 |

### **🎯 Propuesta de Valor Única**
- **Sin riesgo**: Fondos siempre recuperables
- **Educativo**: Primera experiencia DeFi práctica y segura
- **Propósito**: Votación simbólica por proyectos que importan
- **Recompensas reales**: Bonus si el proyecto respaldado gana financiamiento, y rentabilidad por stake.

---

## 🧪 **Funcionalidades del MVP**

### **💰 Sistema de Voto-Ahorro**
- Bloqueo temporal de USDC (sin riesgo)
- Rentabilidad base garantizada 
- Votación simbólica por proyectos universitarios
- Bonus condicional si el proyecto gana financiamiento externo

### **🏆 Dashboard de Reputación**
- Historial de participación y respaldos
- Nivel de reputación acumulada
- Estadísticas de proyectos respaldados
- Progreso hacia siguiente nivel

### **🔐 Integración Stellar**
- Conexión nativa con Freighter Wallet
- Gestión de USDC en Stellar Testnet
- Arquitectura preparada para contratos Soroban
- Transacciones simuladas (MVP educativo)

## Reflector Edition (Hackathon)
- Network: Testnet (Soroban)
- Oracle: Reflector (SEP-40 compatible)
- RPC: $NEXT_PUBLIC_SOROBAN_RPC_URL
- Contract: $NEXT_PUBLIC_REFLECTOR_CONTRACT_ID
- UI: USDC/USD live price + USD equivalences
- Notes: prices are read-only; no admin ops executed

---

## 🛠️ **Stack Tecnológico**


| **Frontend** | **Blockchain** | **Deploy** |
|--------------|----------------|------------|
| Next.js 15 | Stellar Testnet | Vercel |
| TypeScript | Soroban (preparado) | GitHub Actions |
| Tailwind CSS | Freighter Wallet | Edge Functions |
| React 18 | Stellar SDK | Global CDN |


### **Arquitectura**
```
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│   Next.js App  │───▶│  Stellar SDK │───▶│ Freighter Wallet│
│   (Frontend)    │    │   (Bridge)   │    │   (User Funds)  │
└─────────────────┘    └──────────────┘    └─────────────────┘
         │                       │                    │
         ▼                       ▼                    ▼
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│  Vercel Deploy │    │ Soroban MVP  │    │ Stellar Testnet │
│   (Hosting)     │    │ (Contracts)  │    │   (Network)     │
└─────────────────┘    └──────────────┘    └─────────────────┘
```

### 🧾 Contrato Soroban Simulado

- 📂 Carpeta: `smart-contracts/`
- 🔧 Lenguaje: **Rust**
- 📋 Estado: Simulado para MVP educativo
- 🔐 Red: Stellar Testnet
- ⚙️ Funciones clave:
  - `stake_temporal`: bloquea USDC 
  - `votar_proyecto`: vota simbólicamente por un proyecto
  - `bonus_condicional`: calcula rentabilidad si el proyecto gana

> El contrato está preparado para migrar fácilmente a producción usando Soroban CLI. Las funciones están organizadas modularmente y listas para validación on-chain post-ideathon.

---

## 🚀 **Instalación y Desarrollo**

### **Quick Start**
```bash
# Clonar repositorio
git clone https://github.com/kaream-badillo/ahorrostellar.git
cd ahorrostellar

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

### **Configuración Wallet**
1. **Instalar**: [Freighter Wallet](https://freighter.app/)
2. **Configurar**: Stellar Testnet
3. **Fondos**: [Stellar Laboratory](https://laboratory.stellar.org/) para USDC testnet

### **Deploy en Vercel**
```bash
npm run build    # Verificar build
vercel deploy    # Deploy automático
```

---

## 📱 **Responsive Design**

| **Dispositivo** | **Estado** | **Notas** |
|-----------------|-----------|-----------|
| **Desktop** | ✅ Completo | UI optimizada, sidebar funcional |
| **Tablet** | ✅ Completo | Grid adaptativo, touch-friendly |
| **Móvil** | 🟡 70% | Contenido responsive, header en desarrollo |

### **Breakpoints Tailwind**
- `sm:` 640px+ (móvil grande)
- `md:` 768px+ (tablet)
- `lg:` 1024px+ (desktop)

---

## 🎯 **Roadmap de Producto**

### **✅ Fase 1: MVP (Actual)**
- UI/UX completa y responsive
- Integración básica con Freighter
- Simulación de contratos Soroban
- Sistema de reputación local

### **🔄 Fase 2: Blockchain (Post-Ideathon)**
- Deploy de contratos Soroban reales
- Integración on-chain completa
- Sistema de governance descentralizado
- Métricas avanzadas de participación

### **📈 Fase 3: Escalabilidad**
- Partnerships con universidades LATAM
- Marketplace de proyectos estudiantiles
- Gamificación avanzada con NFTs
- Análisis predictivo con IA

---

## 🏆 **Stellar LATAM Ideathon 2025**

### **Categoría**: DeFi & Financial Inclusion
### **Enfoque**: Educación Web3 para estudiantes LATAM
### **Diferenciador**: Sin riesgo + propósito social + escalabilidad real

#### **🎯 Por qué AhorroStellar ganará**
1. **Problema real**: Falta de acceso a DeFi educativo en LATAM
2. **Solución viable**: MVP funcional, arquitectura escalable
3. **Mercado grande**: Millones de estudiantes universitarios
4. **Tracción temprana**: UI completa, experiencia fluida
5. **Visión clara**: Roadmap técnico y de negocio definido

---

### **Desktop Experience**
```
🏠 Home → 💰 Stake → 📊 Dashboard
  ↓         ↓          ↓
Landing   Projects   Reputation
```

### **Mobile Experience**
```
📱 Responsive Grid
📊 Touch-Friendly Cards  
🔐 One-Tap Wallet Connect
```

---

## 🤝 **Contribución**

Las contribuciones son bienvenidas especialmente en:

- **Responsive design** para móviles
- **Contratos Soroban** reales
- **Integración universitaria**
- **Localización** (ES/PT/EN)

### **Proceso**
1. Fork del proyecto
2. Crear rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Pull Request

---

## ⚖️ **Licencia**

MIT License - Ver [LICENSE](LICENSE) para detalles completos.

---



**[Kaream Badillo](https://github.com/kaream-badillo)**  
*Blockchain Enthusiast & Emerging Web3 Builder 
📧 Email • 🐙 GitHub • 🌍 Chile

*Desarrollando el futuro de DeFi educativo en LATAM*


---

## 📞 **Contacto & Enlaces**



| **Demo** | **Código** | **Deploy** | **Docs** |
|----------|------------|------------|----------|
| [🌟 Live App](https://ahorrostellar-nnbe.vercel.app/) | [📁 GitHub](https://github.com/kaream-badillo/ahorrostellar) | [⚡ Vercel](https://vercel.com) | [📚 Stellar](https://stellar.org) |


---



## 💸 **Ahorra con propósito. Vota por el futuro.** 🌟

*Construido con ❤️ para la comunidad estudiantil de LATAM*

**Stellar LATAM Ideathon 2025 • DeFi Education • Financial Inclusion**

[![Stellar](https://img.shields.io/badge/Powered%20by-Stellar-7B3F98?style=flat-square&logo=stellar)](https://stellar.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

