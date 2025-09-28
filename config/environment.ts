// Environment Configuration
export const environment = {
  // Stellar Configuration
  STELLAR_NETWORK: process.env.NEXT_PUBLIC_STELLAR_NETWORK || 'testnet',
  SOROBAN_RPC: process.env.NEXT_PUBLIC_SOROBAN_RPC || 'https://soroban-testnet.stellar.org',
  STELLAR_NETWORK_PASSPHRASE: process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE || 'Test SDF Network ; September 2015',
  
  // Oracle Configuration
  REFLECTOR_USDC_PRICE: process.env.NEXT_PUBLIC_REFLECTOR_USDC_PRICE || 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP',
  REFLECTOR_FX_RATES: process.env.NEXT_PUBLIC_REFLECTOR_FX_RATES || 'CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W',
  
  // Database Configuration
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/ahorrostellar',
  
  // API Keys
  READONLY_PUBLIC_KEY: process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
} as const;
