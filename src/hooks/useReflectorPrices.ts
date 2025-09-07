import { useState, useEffect, useCallback } from 'react';
import { reflectorClient, PriceData, ASSETS } from '@/lib/reflectorClient';

export interface UseReflectorPricesOptions {
  refreshInterval?: number; // in milliseconds
  autoRefresh?: boolean;
  pairs?: Array<{ base: string; quote: string }>;
}

export interface UseReflectorPricesReturn {
  prices: Record<string, PriceData | null>;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  convertAmount: (amount: number, fromAsset: string, toAsset: string) => Promise<number | null>;
  isHealthy: boolean;
}

// Default trading pairs for AhorroStellar
const DEFAULT_PAIRS = [
  { base: ASSETS.XLM, quote: ASSETS.USD },
  { base: ASSETS.USDC, quote: ASSETS.USD },
  { base: ASSETS.XLM, quote: ASSETS.USDC },
];

export function useReflectorPrices(options: UseReflectorPricesOptions = {}): UseReflectorPricesReturn {
  const {
    refreshInterval = 30000, // 30 seconds default
    autoRefresh = true,
    pairs = DEFAULT_PAIRS,
  } = options;

  const [prices, setPrices] = useState<Record<string, PriceData | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHealthy, setIsHealthy] = useState(false);

  // Fetch prices for all pairs
  const fetchPrices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔄 useReflectorPrices: Fetching prices for pairs:', pairs);
      
      const priceResults = await reflectorClient.getMultiplePrices(pairs);
      setPrices(priceResults);
      
      // Check health status
      const healthStatus = await reflectorClient.getHealthStatus();
      setIsHealthy(healthStatus.isHealthy);
      
      console.log('✅ useReflectorPrices: Prices updated:', priceResults);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch prices';
      setError(errorMessage);
      setIsHealthy(false);
      console.error('❌ useReflectorPrices: Error fetching prices:', err);
    } finally {
      setLoading(false);
    }
  }, [pairs]);

  // Manual refresh function
  const refresh = useCallback(async () => {
    await fetchPrices();
  }, [fetchPrices]);

  // Convert amount between assets
  const convertAmount = useCallback(async (amount: number, fromAsset: string, toAsset: string): Promise<number | null> => {
    try {
      return await reflectorClient.convertAmount(amount, fromAsset, toAsset);
    } catch (err) {
      console.error('❌ useReflectorPrices: Error converting amount:', err);
      return null;
    }
  }, []);

  // Auto-refresh effect
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchPrices();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchPrices]);

  // Initial fetch
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return {
    prices,
    loading,
    error,
    refresh,
    convertAmount,
    isHealthy,
  };
}

// Specialized hooks for common use cases
export function useUSDCPrices() {
  return useReflectorPrices({
    pairs: [
      { base: ASSETS.USDC, quote: ASSETS.USD },
      { base: ASSETS.XLM, quote: ASSETS.USDC },
    ],
  });
}

export function useXLMToUSD() {
  return useReflectorPrices({
    pairs: [{ base: ASSETS.XLM, quote: ASSETS.USD }],
  });
}

export function useUSDCToUSD() {
  return useReflectorPrices({
    pairs: [{ base: ASSETS.USDC, quote: ASSETS.USD }],
  });
}

// Hook for converting XLM amounts to USD
export function useXLMToUSDConverter() {
  const { prices, loading, error } = useXLMToUSD();
  
  const convertXLMToUSD = useCallback((xlmAmount: number): number | null => {
    const xlmUsdPrice = prices[`${ASSETS.XLM}/${ASSETS.USD}`];
    if (xlmUsdPrice) {
      return xlmAmount * xlmUsdPrice.price;
    }
    return null;
  }, [prices]);

  return {
    convertXLMToUSD,
    xlmUsdPrice: prices[`${ASSETS.XLM}/${ASSETS.USD}`]?.price || null,
    loading,
    error,
  };
}

// Hook for converting USDC amounts to USD
export function useUSDCToUSDConverter() {
  const { prices, loading, error } = useUSDCToUSD();
  
  const convertUSDCToUSD = useCallback((usdcAmount: number): number | null => {
    const usdcUsdPrice = prices[`${ASSETS.USDC}/${ASSETS.USD}`];
    if (usdcUsdPrice) {
      return usdcAmount * usdcUsdPrice.price;
    }
    return null;
  }, [prices]);

  return {
    convertUSDCToUSD,
    usdcUsdPrice: prices[`${ASSETS.USDC}/${ASSETS.USD}`]?.price || null,
    loading,
    error,
  };
}
