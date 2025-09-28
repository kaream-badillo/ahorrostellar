'use client'
import { useState } from 'react'
import { conectarFreighter } from '@/components/ui/ConnectButton'

export function WalletData() {
  const [addr, setAddr] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()

  const handleConnect = async () => {
    setIsLoading(true)
    setError(undefined)
    
    try {
      const address = await conectarFreighter()
      setAddr(address)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
      
      // Si Freighter no está detectada, redirigir a la página oficial
      if (errorMessage.includes('Freighter no detectada')) {
        window.open('https://freighter.app/', '_blank')
        return
      }
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = () => {
    setAddr(undefined)
    setError(undefined)
  }

  if (addr) {
    return (
      <div className="flex items-center space-x-3">
        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {addr.slice(0,4)}…{addr.slice(-4)}
        </div>
        <button 
          onClick={handleDisconnect}
          className="text-xs text-red-600 hover:text-red-700"
        >
          Desconectar
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end space-y-2">
      <button 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
        onClick={handleConnect}
        disabled={isLoading}
      >
        {isLoading ? 'Conectando...' : 'Connect Wallet'}
      </button>
      {error && (
        <p className="text-xs text-red-600 text-right max-w-xs">
          {error}
        </p>
      )}
    </div>
  )
}
