// Wallet Authentication for AhorroStellar
import { getStellarServer, getNetworkConfig } from './web3';
import { SUPPORTED_ASSETS } from '@/lib/utils/constants';

export interface WalletConnection {
  isConnected: boolean;
  publicKey: string | null;
  network: 'testnet' | 'mainnet';
  balances: Record<string, number>;
  error: string | null;
}

export interface WalletAuth {
  connect(): Promise<WalletConnection>;
  disconnect(): void;
  getConnection(): WalletConnection;
  signTransaction(transaction: any): Promise<any>;
  getBalances(publicKey: string): Promise<Record<string, number>>;
}

export class FreighterAuth implements WalletAuth {
  private connection: WalletConnection = {
    isConnected: false,
    publicKey: null,
    network: 'testnet',
    balances: {},
    error: null
  };

  constructor() {
    this.checkConnection();
  }

  private async checkConnection() {
    if (typeof window !== 'undefined' && (window as any).stellar) {
      try {
        const stellar = (window as any).stellar;
        const isConnected = await stellar.isConnected();
        
        if (isConnected) {
          const publicKey = await stellar.getPublicKey();
          const network = await stellar.getNetwork();
          
          this.connection = {
            isConnected: true,
            publicKey,
            network: network === 'TESTNET' ? 'testnet' : 'mainnet',
            balances: {},
            error: null
          };

          // Load balances
          await this.getBalances(publicKey);
        }
      } catch (error) {
        console.error('Error checking Freighter connection:', error);
        this.connection.error = 'Failed to check wallet connection';
      }
    }
  }

  async connect(): Promise<WalletConnection> {
    if (typeof window === 'undefined') {
      this.connection.error = 'Window object not available';
      return this.connection;
    }

    if (!(window as any).stellar) {
      this.connection.error = 'Freighter wallet not installed';
      return this.connection;
    }

    try {
      const stellar = (window as any).stellar;
      
      // Request connection
      await stellar.setAllowed(true);
      const publicKey = await stellar.getPublicKey();
      const network = await stellar.getNetwork();

      this.connection = {
        isConnected: true,
        publicKey,
        network: network === 'TESTNET' ? 'testnet' : 'mainnet',
        balances: {},
        error: null
      };

      // Load balances
      await this.getBalances(publicKey);

      return this.connection;
    } catch (error: any) {
      this.connection.error = error.message || 'Failed to connect wallet';
      return this.connection;
    }
  }

  disconnect(): void {
    this.connection = {
      isConnected: false,
      publicKey: null,
      network: 'testnet',
      balances: {},
      error: null
    };
  }

  getConnection(): WalletConnection {
    return { ...this.connection };
  }

  async signTransaction(transaction: any): Promise<any> {
    if (!this.connection.isConnected || !this.connection.publicKey) {
      throw new Error('Wallet not connected');
    }

    if (typeof window === 'undefined' || !(window as any).stellar) {
      throw new Error('Freighter wallet not available');
    }

    try {
      const stellar = (window as any).stellar;
      return await stellar.signTransaction(transaction);
    } catch (error: any) {
      throw new Error(`Transaction signing failed: ${error.message}`);
    }
  }

  async getBalances(publicKey: string): Promise<Record<string, number>> {
    try {
      const server = getStellarServer(this.connection.network);
      const account = await server.loadAccount(publicKey);
      
      const balances: Record<string, number> = {};

      account.balances.forEach((balance: any) => {
        const assetCode = balance.asset_type === 'native' ? 'XLM' : balance.asset_code;
        const amount = parseFloat(balance.balance);
        balances[assetCode] = amount;
      });

      // Update connection balances
      this.connection.balances = balances;

      return balances;
    } catch (error: any) {
      console.error('Error loading balances:', error);
      return {};
    }
  }

  // Utility methods
  async isWalletInstalled(): Promise<boolean> {
    return typeof window !== 'undefined' && !!(window as any).stellar;
  }

  async getWalletInfo(): Promise<{ name: string; version: string } | null> {
    if (typeof window === 'undefined' || !(window as any).stellar) {
      return null;
    }

    try {
      const stellar = (window as any).stellar;
      return {
        name: 'Freighter',
        version: stellar.version || 'Unknown'
      };
    } catch (error) {
      return null;
    }
  }

  async switchNetwork(network: 'testnet' | 'mainnet'): Promise<void> {
    if (!this.connection.isConnected) {
      throw new Error('Wallet not connected');
    }

    try {
      const stellar = (window as any).stellar;
      await stellar.switchNetwork(network.toUpperCase());
      
      this.connection.network = network;
    } catch (error: any) {
      throw new Error(`Failed to switch network: ${error.message}`);
    }
  }
}

// Singleton instance
export const walletAuth = new FreighterAuth();

// Export convenience methods
export const {
  connect: connectWallet,
  disconnect: disconnectWallet,
  getConnection: getWalletConnection,
  signTransaction,
  getBalances,
  isWalletInstalled,
  getWalletInfo,
  switchNetwork
} = walletAuth;
