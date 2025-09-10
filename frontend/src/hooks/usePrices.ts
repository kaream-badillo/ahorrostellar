import { useEffect, useState } from 'react';
import { priceUSDCinUSD, priceXLMinUSD, usdPerCLP } from '@/lib/reflector';
import { useApp } from '@/contexts/AppContext';

export interface PriceData {
  price: number;
  timestamp: number;
  loading: boolean;
  error: string | null;
}

export function usePrices(publicKey?: string) {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return {
      usdcUsd: { price: 0, timestamp: 0, loading: false, error: 'SSR not supported' },
      xlmUsd: { price: 0, timestamp: 0, loading: false, error: 'SSR not supported' },
      clpUsd: { price: 0, timestamp: 0, loading: false, error: 'SSR not supported' },
      convertUsdcToUsd: (amount: number) => amount * 0,
      convertXlmToUsd: (amount: number) => amount * 0,
      convertClpToUsd: (amount: number) => amount * 0,
    };
  }

  // Use provided publicKey or fallback to context
  const { state } = useApp();
  const { wallet } = state;
  const activePublicKey = publicKey || wallet.publicKey;

  const [usdcUsd, setUsdcUsd] = useState<PriceData>({
    price: 0,
    timestamp: 0,
    loading: true,
    error: null
  });

  const [xlmUsd, setXlmUsd] = useState<PriceData>({
    price: 0,
    timestamp: 0,
    loading: true,
    error: null
  });

  const [clpUsd, setClpUsd] = useState<PriceData>({
    price: 0,
    timestamp: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    if (!activePublicKey) {
      setUsdcUsd(prev => ({ ...prev, loading: false, error: 'wallet not connected' }));
      setXlmUsd(prev => ({ ...prev, loading: false, error: 'wallet not connected' }));
      setClpUsd(prev => ({ ...prev, loading: false, error: 'wallet not connected' }));
      return;
    }

    const fetchPrices = async () => {
      try {
        // Fetch USDC/USD
        try {
          const usdcPrice = await priceUSDCinUSD(activePublicKey);
          setUsdcUsd({
            price: usdcPrice,
            timestamp: Math.floor(Date.now() / 1000),
            loading: false,
            error: null
          });
        } catch (e) {
          setUsdcUsd(prev => ({ ...prev, loading: false, error: 'USDC price unavailable' }));
        }

        // Fetch XLM/USD
        try {
          const xlmPrice = await priceXLMinUSD(activePublicKey);
          setXlmUsd({
            price: xlmPrice,
            timestamp: Math.floor(Date.now() / 1000),
            loading: false,
            error: null
          });
        } catch (e) {
          setXlmUsd(prev => ({ ...prev, loading: false, error: 'XLM price unavailable' }));
        }

        // Fetch CLP/USD (inverse of USD/CLP)
        try {
          const usdPerClp = await usdPerCLP(activePublicKey);
          const clpPrice = 1 / usdPerClp; // Convert USD/CLP to CLP/USD
          setClpUsd({
            price: clpPrice,
            timestamp: Math.floor(Date.now() / 1000),
            loading: false,
            error: null
          });
        } catch (e) {
          setClpUsd(prev => ({ ...prev, loading: false, error: 'CLP price unavailable' }));
        }

      } catch (e: any) {
        console.error('Error fetching prices:', e);
        setUsdcUsd(prev => ({ ...prev, loading: false, error: e.message }));
        setXlmUsd(prev => ({ ...prev, loading: false, error: e.message }));
        setClpUsd(prev => ({ ...prev, loading: false, error: e.message }));
      }
    };

    fetchPrices();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, [activePublicKey]);

  return {
    usdcUsd,
    xlmUsd,
    clpUsd,
    convertUsdcToUsd: (amount: number) => amount * usdcUsd.price,
    convertXlmToUsd: (amount: number) => amount * xlmUsd.price,
    convertClpToUsd: (amount: number) => amount * clpUsd.price,
  };
}