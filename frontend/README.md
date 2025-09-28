# 💸 AhorroStellar Frontend

**Frontend profesional adaptado según especificación de estructura moderna**

## 📁 Estructura del Proyecto

```
frontend/
├── app/                    # App Router de Next.js 14
│   ├── layout.tsx         # Layout global (header, footer, sidebar)
│   ├── page.tsx           # Home/dashboard principal
│   ├── auth/              # Autenticación (/auth/login, /auth/register)
│   ├── links/             # Gestión de enlaces (proyectos)
│   │   ├── page.tsx       # Lista de enlaces (/links)
│   │   └── [id]/page.tsx  # Detalle de enlace (/links/[id])
│   ├── add/               # Agregar nuevo enlace (/add)
│   ├── categories/        # Gestión de categorías (/categories)
│   ├── search/            # Búsqueda avanzada (/search)
│   ├── settings/          # Configuración de usuario (/settings)
│   ├── stake/             # Stake/votación (/stake)
│   ├── dashboard/         # Dashboard del usuario (/dashboard)
│   └── api/               # API routes
│
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── ui/           # Componentes base (Button, Input, etc.)
│   │   ├── layout/       # Layout components (Header, Sidebar, etc.)
│   │   ├── wallet/       # Componentes de wallet (Freighter, etc.)
│   │   ├── stake/        # Componentes específicos de stake
│   │   └── dashboard/    # Componentes del dashboard
│   ├── forms/            # Formularios específicos
│   ├── cards/            # Tarjetas de enlaces y categorías
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utilidades y helpers
│   ├── types/            # Definiciones de TypeScript
│   ├── styles/           # Estilos globales y CSS
│   ├── contexts/         # Context API
│   └── stores/           # Estado con Zustand
│
├── lib/                   # Librerías y configuraciones
│   ├── api/              # Cliente API y endpoints
│   │   ├── client.ts     # Cliente API principal
│   │   ├── config.ts     # Configuración de API
│   │   ├── friendbot.ts  # Utilidades Friendbot
│   │   ├── reader.ts     # Utilidades de lectura
│   │   └── reflector.ts  # Integración Reflector Oracle
│   ├── ai/               # Integración con servicios de IA
│   │   └── assistant.ts  # Asistente IA para sugerencias
│   ├── auth/             # Autenticación y autorización
│   │   ├── stellar.ts    # Servicios de Stellar
│   │   ├── wallet.ts     # Autenticación de wallet
│   │   └── web3.ts       # Configuración Web3
│   └── utils/            # Utilidades específicas del proyecto
│       ├── constants.ts  # Constantes y configuraciones
│       ├── helpers.ts    # Funciones helper
│       └── mockData.ts   # Datos mock para desarrollo
│
├── public/                # Archivos estáticos (imágenes, favicon)
└── README.md              # Documentación actualizada
```

## 🚀 Características Principales

### ✅ **Estructura Profesional Adaptada**
- **Next.js 14+** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Organización modular** según especificación moderna

### ✅ **Rutas Organizadas**
- **`/auth`**: Login y registro de usuarios
- **`/links`**: Gestión de proyectos (enlaces)
- **`/add`**: Crear nuevos proyectos
- **`/categories`**: Explorar por categorías
- **`/search`**: Búsqueda avanzada
- **`/settings`**: Configuración de usuario
- **`/stake`**: Sistema de stake/votación
- **`/dashboard`**: Panel de usuario

### ✅ **Componentes Organizados**
- **`ui/`**: Componentes base reutilizables
- **`layout/`**: Componentes de layout
- **`forms/`**: Formularios específicos
- **`cards/`**: Tarjetas de proyectos y categorías
- **`wallet/`**: Integración con wallets
- **`stake/`**: Componentes de stake
- **`dashboard/`**: Componentes del dashboard

### ✅ **Librerías Estructuradas**
- **`api/`**: Cliente API y endpoints
- **`ai/`**: Integración con servicios de IA
- **`auth/`**: Autenticación y autorización
- **`utils/`**: Utilidades específicas del proyecto

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14.x | Framework React con App Router |
| **React** | 19.x | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 3.x | Framework CSS |
| **Stellar SDK** | Latest | Integración blockchain |
| **Zustand** | Latest | Gestión de estado |
| **Lucide React** | Latest | Iconos |

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción

# Calidad de código
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # Verificación de tipos
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local`:

```bash
# Stellar Configuration
NEXT_PUBLIC_READONLY_PUBLIC_KEY=YOUR_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# AI Configuration (Opcional)
NEXT_PUBLIC_AI_API_KEY=your_ai_api_key
NEXT_PUBLIC_AI_BASE_URL=https://api.openai.com/v1

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Configuración de Stellar

El proyecto está configurado para trabajar con:
- **Red**: Stellar Testnet
- **Wallet**: Freighter
- **Oracle**: Reflector (precios en tiempo real)
- **Assets**: USDC, XLM, CLP

## 🎯 Funcionalidades Implementadas

### ✅ **Sistema de Autenticación**
- Login con Freighter Wallet
- Registro de usuarios
- Gestión de sesiones
- Configuración de perfil

### ✅ **Gestión de Proyectos**
- Crear nuevos proyectos
- Explorar por categorías
- Búsqueda avanzada
- Detalles de proyecto

### ✅ **Sistema de Stake**
- Bloqueo temporal de USDC/XLM/CLP
- Votación simbólica por proyectos
- Sistema de recompensas
- Dashboard de reputación

### ✅ **Integración Oracle**
- Precios en tiempo real (USDC/USD, XLM/USD, CLP/USD)
- Fallback a precios demo
- Actualización automática

### ✅ **Experiencia de Usuario**
- Modo demo para testing
- Interfaz responsive
- Manejo de errores
- Estados de carga

## 🔍 Páginas Principales

| Página | Ruta | Descripción |
|--------|------|-------------|
| **Landing** | `/` | Página principal |
| **Login** | `/auth/login` | Autenticación |
| **Registro** | `/auth/register` | Registro de usuarios |
| **Proyectos** | `/links` | Lista de proyectos |
| **Crear Proyecto** | `/add` | Formulario de creación |
| **Categorías** | `/categories` | Explorar por categorías |
| **Búsqueda** | `/search` | Búsqueda avanzada |
| **Configuración** | `/settings` | Configuración de usuario |
| **Stake** | `/stake` | Votación con ahorros |
| **Dashboard** | `/dashboard` | Panel de usuario |

## 🧪 Testing

### Demo Mode
- Click "🚀 Simulate Connection (Demo)" en `/stake`
- No requiere wallet real
- Permite probar todo el flujo

### Real Mode
- Instalar Freighter Wallet
- Conectar en Testnet
- Ver precios en tiempo real

## 📚 Documentación

- **README Principal**: `../README.md`
- **Guía Paso a Paso**: `../GUIA_PASO_A_PASO.md`
- **Documentación Técnica**: `../docs/`

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Add nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📞 Contacto

**Kaream Badillo**  
📧 Email: kaream.badillo@usach.cl  
🐦 X: [@kaream_badillo](https://x.com/kaream_badillo)  
🐙 GitHub: [@kaream-badillo](https://github.com/kaream-badillo)

---

💸 **Ahorra con propósito. Vota por el futuro.** 🌟  
_Construido con ❤️ para la comunidad estudiantil LATAM_