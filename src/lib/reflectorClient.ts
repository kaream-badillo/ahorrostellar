import { Networks } from '@stellar/stellar-sdk';

// Reflector Oracle Configuration
const SOROBAN_RPC_URL = process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org';
const REFLECTOR_CONTRACT_ID = process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID || 'CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP';
const NETWORK_PASSPHRASE = Networks.TESTNET;

// Asset identifiers for Reflector
export const ASSETS = {
  USDC: 'USDC:GBBD47IF6LXCC7EDU6L4Q5JWCQ7PASDKL3SWK3UMVD7AQ4AVM6U2Y3X3',
  XLM: 'XLM',
  USD: 'USD',
} as const;

export interface PriceData {
  price: number;
  timestamp: number;
  asset: string;
  baseAsset: string;
}

export interface ReflectorClientConfig {
  rpcUrl: string;
  contractId: string;
  networkPassphrase: string;
}

class ReflectorClient {
  private config: ReflectorClientConfig;

  constructor(config?: Partial<ReflectorClientConfig>) {
    this.config = {
      rpcUrl: config?.rpcUrl || SOROBAN_RPC_URL,
      contractId: config?.contractId || REFLECTOR_CONTRACT_ID,
      networkPassphrase: config?.networkPassphrase || NETWORK_PASSPHRASE,
    };
  }

  /**
   * Get the last price for a trading pair
   * TODO: Implement real Soroban contract calls when SDK is updated
   */
  async getLastPrice(baseAsset: string, quoteAsset: string): Promise<PriceData | null> {
    try {
      console.log(`🔍 ReflectorClient: Getting price for ${baseAsset}/${quoteAsset}`);
      
      // Mock prices for now - replace with real Soroban calls
      const mockPrices: Record<string, number> = {
        'XLM/USD': 0.12,
        'USDC:GBBD47IF6LXCC7EDU6L4Q5JWCQ7PASDKL3SWK3UMVD7AQ4AVM6U2Y3X3/USD': 1.0,
        'XLM/USDC:GBBD47IF6LXCC7EDU6L4Q5JWCQ7PASDKL3SWK3UMVD7AQ4AVM6U2Y3X3': 0.12,
      };

      const priceKey = `${baseAsset}/${quoteAsset}`;
      const price = mockPrices[priceKey];
      
      if (price !== undefined) {
        const timestamp = Date.now();
        
        console.log(`✅ ReflectorClient: Price ${baseAsset}/${quoteAsset} = ${price} (mock)`);
        
        return {
          price,
          timestamp,
          asset: quoteAsset,
          baseAsset,
        };
      }
      
      return null;
    } catch (error) {
      console.error(`❌ ReflectorClient: Error getting price for ${baseAsset}/${quoteAsset}:`, error);
      return null;
    }
  }

  /**
   * Get TWAP (Time Weighted Average Price) for a trading pair
   * TODO: Implement real Soroban contract calls when SDK is updated
   */
  async getTwap(baseAsset: string, quoteAsset: string, period: number = 3600): Promise<PriceData | null> {
    try {
      console.log(`🔍 ReflectorClient: Getting TWAP for ${baseAsset}/${quoteAsset} (${period}s)`);
      
      // For now, return the same as last price
      return await this.getLastPrice(baseAsset, quoteAsset);
    } catch (error) {
      console.error(`❌ ReflectorClient: Error getting TWAP for ${baseAsset}/${quoteAsset}:`, error);
      return null;
    }
  }

  /**
   * Get multiple prices at once
   */
  async getMultiplePrices(pairs: Array<{ base: string; quote: string }>): Promise<Record<string, PriceData | null>> {
    const results: Record<string, PriceData | null> = {};
    
    const promises = pairs.map(async (pair) => {
      const key = `${pair.base}/${pair.quote}`;
      const price = await this.getLastPrice(pair.base, pair.quote);
      results[key] = price;
    });

    await Promise.all(promises);
    return results;
  }

  /**
   * Convert amount from one asset to another using current price
   */
  async convertAmount(amount: number, fromAsset: string, toAsset: string): Promise<number | null> {
    try {
      const priceData = await this.getLastPrice(fromAsset, toAsset);
      if (priceData) {
        return amount * priceData.price;
      }
      return null;
    } catch (error) {
      console.error(`❌ ReflectorClient: Error converting ${amount} ${fromAsset} to ${toAsset}:`, error);
      return null;
    }
  }

  /**
   * Get contract info and health status
   */
  async getHealthStatus(): Promise<{ isHealthy: boolean; lastUpdate?: number; error?: string }> {
    try {
      // Try to get a simple price to check if the contract is responsive
      const testPrice = await this.getLastPrice(ASSETS.XLM, ASSETS.USD);
      
      return {
        isHealthy: testPrice !== null,
        lastUpdate: testPrice?.timestamp,
      };
    } catch (error) {
      return {
        isHealthy: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

// Singleton instance
export const reflectorClient = new ReflectorClient();

// Export the class for custom instances
export { ReflectorClient };
