import { Server, Networks, TransactionBuilder, Operation, Asset } from '@stellar/stellar-sdk';

// Stellar testnet configuration
const STELLAR_TESTNET_URL = 'https://horizon-testnet.stellar.org';
const NETWORK_PASSPHRASE = Networks.TESTNET;

// Asset for reputation tokens (custom asset)
const REPUTATION_ASSET = new Asset('REPUTATION', 'GABRIEL7NEVAO4T7Z5X4Z2W7DBNULLL6X2A7MVGDW6AE7RKLH34OLL', 'REPUTATION');

export class StellarService {
  private server: Server;
  private publicKey: string | null = null;

  constructor() {
    this.server = new Server(STELLAR_TESTNET_URL);
  }

  // Connect to Freighter wallet
  async connectWallet(): Promise<string> {
    try {
      // Check if Freighter is installed
      if (typeof window !== 'undefined' && (window as any).stellar) {
        const stellar = (window as any).stellar;
        
        // Request connection
        const publicKey = await stellar.request({
          method: 'requestAccount'
        });
        
        this.publicKey = publicKey;
        return publicKey;
      } else {
        throw new Error('Freighter wallet not found. Please install Freighter extension.');
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  }

  // Get account balance
  async getBalance(publicKey: string): Promise<any> {
    try {
      const account = await this.server.loadAccount(publicKey);
      return account.balances;
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  // Create symbolic staking transaction
  async createStakingTransaction(amount: number, projectId: string): Promise<string> {
    if (!this.publicKey) {
      throw new Error('Wallet not connected');
    }

    try {
      const account = await this.server.loadAccount(this.publicKey);
      
      // Create a memo with project information
      const memo = `STAKING:${projectId}:${Date.now()}`;
      
      // Create transaction for symbolic staking (using XLM)
      const transaction = new TransactionBuilder(account, {
        fee: '100',
        networkPassphrase: NETWORK_PASSPHRASE
      })
      .addOperation(Operation.payment({
        destination: this.publicKey, // Self-payment for symbolic staking
        asset: Asset.native(),
        amount: amount.toString()
      }))
      .addMemo(memo)
      .setTimeout(30)
      .build();

      return transaction.toXDR();
    } catch (error) {
      console.error('Error creating staking transaction:', error);
      throw error;
    }
  }

  // Issue reputation token
  async issueReputationToken(amount: number, recipient: string): Promise<string> {
    if (!this.publicKey) {
      throw new Error('Wallet not connected');
    }

    try {
      const account = await this.server.loadAccount(this.publicKey);
      
      const transaction = new TransactionBuilder(account, {
        fee: '100',
        networkPassphrase: NETWORK_PASSPHRASE
      })
      .addOperation(Operation.payment({
        destination: recipient,
        asset: REPUTATION_ASSET,
        amount: amount.toString()
      }))
      .setTimeout(30)
      .build();

      return transaction.toXDR();
    } catch (error) {
      console.error('Error issuing reputation token:', error);
      throw error;
    }
  }

  // Sign and submit transaction
  async signAndSubmitTransaction(transactionXDR: string): Promise<any> {
    try {
      if (typeof window !== 'undefined' && (window as any).stellar) {
        const stellar = (window as any).stellar;
        
        const signedTransaction = await stellar.signTransaction(transactionXDR);
        const response = await this.server.submitTransaction(signedTransaction);
        
        return response;
      } else {
        throw new Error('Freighter wallet not available');
      }
    } catch (error) {
      console.error('Error signing/submitting transaction:', error);
      throw error;
    }
  }

  // Get transaction history
  async getTransactionHistory(publicKey: string): Promise<any[]> {
    try {
      const transactions = await this.server.transactions()
        .forAccount(publicKey)
        .order('desc')
        .limit(20)
        .call();
      
      return transactions.records;
    } catch (error) {
      console.error('Error getting transaction history:', error);
      throw error;
    }
  }
}

// Singleton instance
export const stellarService = new StellarService();
