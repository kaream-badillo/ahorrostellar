// [AhorroStellar][Reflector]
import { useEffect, useState } from 'react'

export type AssetCode = 'USDC'|'CLP'|'XLM'

export function useSelectedAssetPrice(asset: AssetCode){
  const [priceUSD, setPriceUSD] = useState<number|null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)

  useEffect(()=>{ 
    let m=true;
    (async()=>{
      try{
        setLoading(true); setError(null)
        
        // Check if we have a valid reader key
        const readerKey = process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY
        if (!readerKey || readerKey === 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') {
          if(m) setError('Configure NEXT_PUBLIC_READONLY_PUBLIC_KEY to enable real-time prices')
          return
        }
        
        // Dynamic import to avoid SSR issues
        const { priceUSDCinUSD, usdPerCLP, priceXLMinUSD } = await import('@/lib/reflector')
        
        let p=0
        if(asset==='USDC') p=await priceUSDCinUSD()
        else if(asset==='CLP'){ const usd_clp=await usdPerCLP(); p = 1/usd_clp }
        else if(asset==='XLM') p=await priceXLMinUSD()
        if(m) setPriceUSD(p)
      }catch(e:any){ 
        if(m) setError(e.message||'price fetch failed') 
      } finally{ 
        if(m) setLoading(false) 
      }
    })(); 
    return ()=>{m=false}
  },[asset])

  return { priceUSD, loading, error }
}