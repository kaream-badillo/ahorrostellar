'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle, ExternalLink, RefreshCw } from 'lucide-react'
import Button from './ui/Button'

export default function FreighterSetupGuide() {
  const [freighterStatus, setFreighterStatus] = useState<{
    isInstalled: boolean
    isUnlocked: boolean
    hasAccount: boolean
    network: string | null
  }>({
    isInstalled: false,
    isUnlocked: false,
    hasAccount: false,
    network: null
  })

  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkFreighterStatus = async () => {
      setIsChecking(true)
      
      try {
        // Wait for extensions to load
        await new Promise(resolve => setTimeout(resolve, 1000))

        if (typeof window === 'undefined') {
          setFreighterStatus({
            isInstalled: false,
            isUnlocked: false,
            hasAccount: false,
            network: null
          })
          setIsChecking(false)
          return
        }

        // Check if Freighter is installed
        const possibleLocations = [
          (window as any).stellar,
          (window as any).freighter,
          (window as any).__stellar__,
          (window as any).Stellar,
          (window as any).stellarFreighter
        ]

        const stellar = possibleLocations.find(loc => loc && typeof loc === 'object')
        
        if (!stellar) {
          setFreighterStatus({
            isInstalled: false,
            isUnlocked: false,
            hasAccount: false,
            network: null
          })
          setIsChecking(false)
          return
        }

        // Freighter is installed
        setFreighterStatus(prev => ({ ...prev, isInstalled: true }))

        // Try to check if it's unlocked and has an account
        try {
          // Try to get public key (this will fail if locked or no account)
          const publicKey = await stellar.getPublicKey()
          if (publicKey) {
            setFreighterStatus(prev => ({ 
              ...prev, 
              isUnlocked: true, 
              hasAccount: true 
            }))
          }
        } catch (error) {
          // Freighter is installed but might be locked or no account
          setFreighterStatus(prev => ({ 
            ...prev, 
            isUnlocked: false, 
            hasAccount: false 
          }))
        }

        // Try to get network info
        try {
          const network = await stellar.getNetwork()
          setFreighterStatus(prev => ({ ...prev, network }))
        } catch (error) {
          // Network info not available
        }

      } catch (error) {
        console.error('Error checking Freighter status:', error)
      } finally {
        setIsChecking(false)
      }
    }

    checkFreighterStatus()

    // Check periodically
    const interval = setInterval(checkFreighterStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }

  if (isChecking) {
    return (
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="font-semibold text-blue-800">Verificando Freighter...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de Freighter</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            {freighterStatus.isInstalled ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="text-sm">
              <strong>Instalado:</strong> {freighterStatus.isInstalled ? 'Sí' : 'No'}
            </span>
          </div>
          
          {freighterStatus.isInstalled && (
            <>
              <div className="flex items-center space-x-3">
                {freighterStatus.isUnlocked ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="text-sm">
                  <strong>Desbloqueado:</strong> {freighterStatus.isUnlocked ? 'Sí' : 'No'}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                {freighterStatus.hasAccount ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="text-sm">
                  <strong>Cuenta configurada:</strong> {freighterStatus.hasAccount ? 'Sí' : 'No'}
                </span>
              </div>
              
              {freighterStatus.network && (
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">
                    <strong>Red:</strong> {freighterStatus.network}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Installation Steps */}
      {!freighterStatus.isInstalled && (
        <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Paso 1: Instalar Freighter</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="text-orange-700">Ve a <a href="https://freighter.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">freighter.app</a></p>
                <p className="text-sm text-orange-600">Haz clic en "Add to Chrome" o "Add to Edge"</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="text-orange-700">Confirma la instalación en tu navegador</p>
                <p className="text-sm text-orange-600">Acepta los permisos necesarios</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="text-orange-700">Recarga esta página</p>
                <p className="text-sm text-orange-600">Haz clic en el botón "Recargar" abajo</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Setup Steps */}
      {freighterStatus.isInstalled && !freighterStatus.isUnlocked && (
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Paso 2: Configurar Freighter</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="text-yellow-700">Haz clic en el ícono de Freighter en tu navegador</p>
                <p className="text-sm text-yellow-600">Busca el ícono de Freighter en la barra de extensiones</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="text-yellow-700">Crea una nueva cuenta o importa una existente</p>
                <p className="text-sm text-yellow-600">Sigue las instrucciones en Freighter</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="text-yellow-700">Asegúrate de estar en la red Testnet</p>
                <p className="text-sm text-yellow-600">En Freighter, cambia a "Testnet" en la configuración</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="text-yellow-700">Recarga esta página</p>
                <p className="text-sm text-yellow-600">Haz clic en el botón "Recargar" abajo</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success State */}
      {freighterStatus.isInstalled && freighterStatus.isUnlocked && freighterStatus.hasAccount && (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-800">¡Freighter configurado correctamente!</h3>
          </div>
          <p className="text-green-700 mb-4">
            Tu wallet Freighter está lista para usar. Ahora puedes conectar tu wallet a la aplicación.
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3 justify-center">
        {!freighterStatus.isInstalled && (
          <a 
            href="https://freighter.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Instalar Freighter</span>
          </a>
        )}
        
        <Button 
          onClick={handleRefresh}
          variant="outline"
          className="px-6 py-3 flex items-center space-x-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Recargar Página</span>
        </Button>
      </div>
    </div>
  )
}
