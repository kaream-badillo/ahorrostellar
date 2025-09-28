// Constantes para AhorroStellar

// Configuración de Stellar
export const STELLAR_CONFIG = {
  NETWORK: {
    TESTNET: 'testnet',
    MAINNET: 'mainnet',
  },
  PASSPHRASE: {
    TESTNET: 'Test SDF Network ; September 2015',
    MAINNET: 'Public Global Stellar Network ; September 2015',
  },
  RPC_URL: {
    TESTNET: 'https://soroban-testnet.stellar.org',
    MAINNET: 'https://soroban-mainnet.stellar.org',
  },
  FRIENDBOT_URL: 'https://friendbot.stellar.org',
} as const;

// Direcciones de contratos Reflector en Testnet
export const REFLECTOR_CONTRACTS = {
  USDC_PRICE: 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP',
  FX_RATES: 'CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W',
  CEX_DEX: 'CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63',
} as const;

// Assets soportados
export const SUPPORTED_ASSETS = {
  USDC: {
    code: 'USDC',
    issuer: 'CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQAHHXCN3X2Z',
    decimals: 7,
    name: 'USD Coin',
  },
  CLP: {
    code: 'CLP',
    issuer: 'native',
    decimals: 7,
    name: 'Chilean Peso',
  },
  XLM: {
    code: 'XLM',
    issuer: 'native',
    decimals: 7,
    name: 'Stellar Lumens',
  },
} as const;

// Configuración de staking
export const STAKING_CONFIG = {
  MIN_AMOUNT: 1, // Mínimo 1 USDC/CLP/XLM
  MAX_AMOUNT: 10000, // Máximo 10,000 USDC/CLP/XLM
  MIN_DURATION: 1, // Mínimo 1 día
  MAX_DURATION: 365, // Máximo 1 año
  BASE_APY: 5, // 5% APY base
  BONUS_APY: 12, // 12% APY máximo con bonus
} as const;

// Configuración de reputación
export const REPUTATION_CONFIG = {
  LEVELS: [
    { level: 1, name: 'Novato', minPoints: 0, color: 'gray' },
    { level: 2, name: 'Ahorrador', minPoints: 100, color: 'blue' },
    { level: 3, name: 'Inversor', minPoints: 500, color: 'green' },
    { level: 4, name: 'Experto', minPoints: 1000, color: 'purple' },
    { level: 5, name: 'Maestro', minPoints: 2500, color: 'gold' },
  ],
  POINTS: {
    STAKE: 10, // Puntos por hacer stake
    VOTE: 5, // Puntos por votar
    PROJECT_SUCCESS: 50, // Bonus por proyecto exitoso
    REFERRAL: 25, // Puntos por referir usuario
  },
} as const;

// Configuración de proyectos
export const PROJECT_CONFIG = {
  CATEGORIES: [
    'Tecnología',
    'Educación',
    'Salud',
    'Medio Ambiente',
    'Arte y Cultura',
    'Deportes',
    'Social',
    'Investigación',
  ],
  STATUS: {
    ACTIVE: 'active',
    FUNDED: 'funded',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
  },
  MIN_FUNDING_GOAL: 100, // Mínimo 100 USDC
  MAX_FUNDING_GOAL: 100000, // Máximo 100,000 USDC
} as const;

// Configuración de UI
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
  AUTO_REFRESH_INTERVAL: 30000, // 30 segundos
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
} as const;

// Mensajes de error
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Wallet no conectado',
  INSUFFICIENT_BALANCE: 'Balance insuficiente',
  INVALID_AMOUNT: 'Cantidad inválida',
  NETWORK_ERROR: 'Error de red',
  TRANSACTION_FAILED: 'Transacción fallida',
  ORACLE_ERROR: 'Error al obtener precios',
  PROJECT_NOT_FOUND: 'Proyecto no encontrado',
  STAKE_NOT_FOUND: 'Stake no encontrado',
} as const;

// URLs externas
export const EXTERNAL_URLS = {
  STELLAR_EXPLORER: 'https://stellar.expert/explorer/testnet',
  FREIGHTER_WALLET: 'https://freighter.app',
  STELLAR_DOCS: 'https://developers.stellar.org',
  SOROBAN_DOCS: 'https://soroban.stellar.org',
  REFLECTOR_DOCS: 'https://reflector.network',
} as const;

// Configuración de desarrollo
export const DEV_CONFIG = {
  DEMO_MODE: process.env.NODE_ENV === 'development',
  DEBUG_MODE: process.env.NODE_ENV === 'development',
  LOG_LEVEL: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
} as const;
