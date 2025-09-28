'use client'

import { useState } from 'react'
import { conectarFreighter } from './ConectarFreighter'
import Button from './ui/Button'

export default function FreighterTest() {
  const [result, setResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    setResult('')
    
    try {
      console.log('🧪 Testing Freighter connection...')
      
      // Test 1: Check if freighterApi exists
      const freighterApiExists = typeof (window as any).freighterApi !== 'undefined'
      console.log('freighterApi exists:', freighterApiExists)
      
      if (!freighterApiExists) {
        setResult('❌ window.freighterApi no existe. Freighter no está inyectando su API.')
        return
      }
      
      // Test 2: Try to connect
      const publicKey = await conectarFreighter()
      console.log('✅ Connection successful:', publicKey)
      setResult(`✅ Conectado exitosamente!\nDirección: ${publicKey}`)
      
    } catch (error) {
      console.error('❌ Connection failed:', error)
      setResult(`❌ Error: ${error instanceof Error ? error.message : 'Error desconocido'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🧪 Prueba de Conexión Freighter</h3>
      
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          <p><strong>Verificaciones:</strong></p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>window.freighterApi existe</li>
            <li>isConnected() funciona</li>
            <li>setAllowed() funciona</li>
            <li>getAddress() o requestAccess() funciona</li>
          </ul>
        </div>
        
        <Button 
          onClick={testConnection}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Probando...' : 'Probar Conexión'}
        </Button>
        
        {result && (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <pre className="text-sm whitespace-pre-wrap">{result}</pre>
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          <p><strong>Instrucciones:</strong></p>
          <ol className="list-decimal list-inside mt-1 space-y-1">
            <li>Abre la consola del navegador (F12)</li>
            <li>Haz clic en "Probar Conexión"</li>
            <li>Revisa los logs en la consola</li>
            <li>Si falla, verifica que Freighter esté instalado y desbloqueado</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
