// Tipos para el proyecto AhorroStellar

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  university: string;
  fundingGoal: number;
  currentFunding: number;
  supporters: number;
  deadline: string;
  imageUrl?: string;
  status: 'active' | 'funded' | 'completed' | 'cancelled';
}

export interface Stake {
  id: string;
  amount: number;
  asset: 'USDC' | 'CLP' | 'XLM';
  projectId?: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'cancelled';
  rewards?: number;
}

export interface UserStats {
  totalStaked: number;
  reputation: number;
  level: number;
  projectsSupported: number;
  totalRewards: number;
  joinDate: string;
}

export interface PriceData {
  asset: string;
  price: number;
  timestamp: string;
  source: 'reflector' | 'demo';
}

export interface WalletConnection {
  isConnected: boolean;
  publicKey?: string;
  network?: 'testnet' | 'mainnet';
  balance?: Record<string, number>;
}

export interface VotingRecord {
  id: string;
  projectId: string;
  amount: number;
  timestamp: string;
  status: 'pending' | 'confirmed';
}

// Tipos para Stellar
export interface StellarAccount {
  publicKey: string;
  balances: Array<{
    asset_code: string;
    asset_issuer?: string;
    balance: string;
  }>;
}

export interface StellarTransaction {
  id: string;
  hash: string;
  status: 'pending' | 'success' | 'failed';
  amount: number;
  asset: string;
  timestamp: string;
}

// Tipos para Reflector Oracle
export interface OraclePrice {
  asset: string;
  price: number;
  timestamp: string;
  precision: number;
}

// Tipos para el contexto de la aplicación
export interface AppState {
  user: UserStats | null;
  wallet: WalletConnection;
  stakes: Stake[];
  projects: Project[];
  prices: PriceData[];
  loading: boolean;
  error: string | null;
}

// Tipos para formularios
export interface StakeFormData {
  amount: number;
  asset: 'USDC' | 'CLP' | 'XLM';
  duration: number; // días
  projectId?: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  category: string;
  university: string;
  fundingGoal: number;
  deadline: string;
  imageUrl?: string;
}
