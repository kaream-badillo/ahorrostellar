'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle, ExternalLink, Copy, RefreshCw } from 'lucide-react'
import Button from './ui/Button'

export default function FreighterLocalhostGuide() {
  const [isChecking, setIsChecking] = useState(true)
  const [freighterDetected, setFreighterDetected] = useState(false)
  const [freighterDetails, setFreighterDetails] = useState<any>(null)

  useEffect(() => {
    const checkFreighter = async () => {
      setIsChecking(true)
      
      try {
        // Wait for extensions to load
        await new Promise(resolve => setTimeout(resolve, 1500))

        if (typeof window === 'undefined') {
          setFreighterDetected(false)
          setIsChecking(false)
          return
        }

        // Check all possible locations for Freighter
        const checks = [
          { name: 'window.stellar', value: (window as any).stellar },
          { name: 'window.freighter', value: (window as any).freighter },
          { name: 'window.__stellar__', value: (window as any).__stellar__ },
          { name: 'window.Stellar', value: (window as any).Stellar },
          { name: 'window.stellarFreighter', value: (window as any).stellarFreighter },
          { name: 'window.freighterApi', value: (window as any).freighterApi },
          { name: 'window.stellarWallet', value: (window as any).stellarWallet }
        ]

        const found = checks.find(check => check.value && typeof check.value === 'object')
        
        if (found) {
          setFreighterDetected(true)
          setFreighterDetails({
            location: found.name,
            methods: Object.getOwnPropertyNames(found.value),
            prototype: Object.getOwnPropertyNames(Object.getPrototypeOf(found.value))
          })
        } else {
          setFreighterDetected(false)
          setFreighterDetails(null)
        }

      } catch (error) {
        console.error('Error checking Freighter:', error)
        setFreighterDetected(false)
      } finally {
        setIsChecking(false)
      }
    }

    checkFreighter()

    // Check periodically
    const interval = setInterval(checkFreighter, 3000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copiado al portapapeles')
  }

  if (isChecking) {
    return (
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="font-semibold text-blue-800">Verificando Freighter...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Detection Status */}
      <div className={`p-6 border rounded-lg ${
        freighterDetected 
          ? 'bg-green-50 border-green-200' 
          : 'bg-red-50 border-red-200'
      }`}>
        <div className="flex items-center space-x-2 mb-3">
          {freighterDetected ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-600" />
          )}
          <h3 className={`text-lg font-semibold ${
            freighterDetected ? 'text-green-800' : 'text-red-800'
          }`}>
            {freighterDetected ? 'Freighter Detectado' : 'Freighter No Detectado'}
          </h3>
        </div>
        
        {freighterDetected ? (
          <div className="text-green-700">
            <p className="mb-2">✅ Freighter está instalado y disponible en:</p>
            <code className="bg-green-100 px-2 py-1 rounded text-sm">{freighterDetails?.location}</code>
            <p className="mt-2 text-sm">
              Métodos disponibles: {freighterDetails?.methods?.length || 0}
            </p>
          </div>
        ) : (
          <div className="text-red-700">
            <p className="mb-2">❌ Freighter no está siendo detectado por la aplicación.</p>
            <p className="text-sm">Esto puede deberse a:</p>
            <ul className="text-sm list-disc list-inside mt-1 space-y-1">
              <li>Freighter no está instalado</li>
              <li>Freighter está deshabilitado</li>
              <li>Freighter no está inyectando su API correctamente</li>
              <li>Problemas de permisos del navegador</li>
            </ul>
          </div>
        )}
      </div>

      {/* Troubleshooting Steps */}
      {!freighterDetected && (
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Pasos para Solucionar</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">1. Verificar Instalación</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Asegúrate de que Freighter esté instalado y habilitado en tu navegador.
              </p>
              <div className="mt-2">
                <a 
                  href="https://freighter.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-yellow-800 hover:text-yellow-900 underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verificar en freighter.app</span>
                </a>
              </div>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">2. Verificar Permisos</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Asegúrate de que Freighter tenga permisos para acceder a localhost.
              </p>
              <div className="mt-2">
                <Button 
                  onClick={() => copyToClipboard('http://localhost:3000')}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copiar URL
                </Button>
              </div>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">3. Configurar Freighter</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Abre Freighter y asegúrate de que esté configurado para Testnet.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-semibold text-yellow-800">4. Recargar Página</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Después de configurar Freighter, recarga esta página.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Debug Information */}
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Información de Debug</h3>
        <div className="space-y-2 text-sm">
          <div>
            <strong>URL actual:</strong> 
            <code className="bg-gray-100 px-2 py-1 rounded ml-2">
              {typeof window !== 'undefined' ? window.location.href : 'N/A'}
            </code>
          </div>
          <div>
            <strong>User Agent:</strong> 
            <code className="bg-gray-100 px-2 py-1 rounded ml-2 text-xs">
              {typeof window !== 'undefined' ? navigator.userAgent : 'N/A'}
            </code>
          </div>
          <div>
            <strong>Extensiones detectadas:</strong>
            <div className="mt-1 space-y-1">
              {['stellar', 'freighter', '__stellar__', 'Stellar', 'stellarFreighter'].map(name => (
                <div key={name} className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <code className="text-xs">{name}:</code>
                  <span className={`text-xs ${(window as any)[name] ? 'text-green-600' : 'text-red-600'}`}>
                    {(window as any)[name] ? '✓' : '✗'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 justify-center">
        <Button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 flex items-center space-x-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Recargar Página</span>
        </Button>
        
        <a 
          href="https://freighter.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center space-x-2"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Ir a Freighter</span>
        </a>
      </div>
    </div>
  )
}
