import { useEffect, useState } from 'react';
import { xLastPrice } from '@/lib/reflectorClient';

export function useUSDCUSD(refreshMs = 10000) {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    let t: any;
    const run = async () => {
      try {
        setLoading(true);
        const p = await xLastPrice('USDC', 'USD');
        setPrice(p || 1);
        setError(null);
      } catch (e: any) { 
        setError(e?.message || 'err');
      } finally { 
        setLoading(false); 
        t = setTimeout(run, refreshMs);
      }
    };
    run(); 
    return () => clearTimeout(t);
  }, [refreshMs]);
  
  return { price, loading, error };
}
