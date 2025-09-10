'use client'

import { useState, useEffect } from 'react'

export default function FreighterDebug() {
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const checkFreighter = () => {
      const info: any = {
        window: typeof window,
        userAgent: navigator.userAgent,
        extensions: {}
      }

      if (typeof window !== 'undefined') {
        // Check for various Freighter-related objects
        info.extensions = {
          stellar: !!(window as any).stellar,
          freighter: !!(window as any).freighter,
          __stellar__: !!(window as any).__stellar__,
          Stellar: !!(window as any).Stellar,
          stellarFreighter: !!(window as any).stellarFreighter
        }

        // Get detailed info about each object
        Object.keys(info.extensions).forEach(key => {
          if (info.extensions[key]) {
            const obj = (window as any)[key]
            info.extensions[key] = {
              exists: true,
              type: typeof obj,
              methods: typeof obj === 'object' ? Object.getOwnPropertyNames(obj) : [],
              prototype: typeof obj === 'object' ? Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) : []
            }
          }
        })

        // Check for common wallet extension patterns
        info.possibleExtensions = {
          hasChromeExtensions: !!(window as any).chrome?.runtime,
          hasWeb3: !!(window as any).web3,
          hasEthereum: !!(window as any).ethereum
        }
      }

      setDebugInfo(info)
    }

    checkFreighter()
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-lg text-sm">
      <h3 className="font-bold mb-2">🔍 Freighter Debug Info</h3>
      <pre className="whitespace-pre-wrap overflow-auto max-h-96">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  )
}
