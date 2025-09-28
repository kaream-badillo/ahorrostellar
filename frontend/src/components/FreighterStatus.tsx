'use client'

import { useState, useEffect } from 'react'
import { Info, CheckCircle, XCircle, ExternalLink } from 'lucide-react'
import Button from './ui/Button'

export default function FreighterStatus() {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)

  useEffect(() => {
    const checkFreighter = () => {
      if (typeof window === 'undefined') return

      // Check if Freighter is available
      const stellar = (window as any).stellar || 
                     (window as any).freighter || 
                     (window as any).__stellar__ ||
                     (window as any).Stellar

      setIsInstalled(!!stellar)

      if (stellar) {
        // Try to check if already connected
        try {
          // This is a non-blocking check
          stellar.isConnected?.().then((connected: boolean) => {
            setIsConnected(connected)
            if (connected) {
              stellar.getPublicKey?.().then((key: string) => {
                setPublicKey(key)
              }).catch(() => {
                // Ignore errors for optional checks
              })
            }
          }).catch(() => {
            // Ignore errors for optional checks
          })
        } catch (error) {
          // Ignore errors for optional checks
        }
      }
    }

    checkFreighter()

    // Check periodically for Freighter installation
    const interval = setInterval(checkFreighter, 2000)
    return () => clearInterval(interval)
  }, [])

  if (isInstalled === null) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span className="text-sm text-gray-600">Verificando Freighter...</span>
        </div>
      </div>
    )
  }

  if (!isInstalled) {
    return (
      <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <XCircle className="w-5 h-5 text-orange-600" />
          <span className="font-semibold text-orange-800">Freighter no instalado</span>
        </div>
        <p className="text-sm text-orange-700 mb-3">
          Necesitas instalar la extensión Freighter para usar esta aplicación.
        </p>
        <div className="flex space-x-2">
          <a 
            href="https://freighter.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold flex items-center space-x-1"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Instalar Freighter</span>
          </a>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline" 
            size="sm"
          >
            Recargar
          </Button>
        </div>
      </div>
    )
  }

  if (isInstalled && !isConnected) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <CheckCircle className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Freighter instalado</span>
        </div>
        <p className="text-sm text-blue-700 mb-3">
          Freighter está instalado pero no conectado. Haz clic en "Conectar" para continuar.
        </p>
      </div>
    )
  }

  if (isInstalled && isConnected && publicKey) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-800">Freighter conectado</span>
        </div>
        <p className="text-sm text-green-700">
          Wallet: {publicKey.slice(0, 8)}...{publicKey.slice(-8)}
        </p>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="flex items-center space-x-2">
        <Info className="w-5 h-5 text-gray-600" />
        <span className="text-sm text-gray-600">Estado de Freighter desconocido</span>
      </div>
    </div>
  )
}
