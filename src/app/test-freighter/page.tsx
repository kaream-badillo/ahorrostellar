'use client'
import freighter from '@stellar/freighter-api'
import { useState } from 'react'

export default function TestFreighterPage() {
  const [results, setResults] = useState<any>({})

  const test = async () => {
    const newResults: any = {}
    
    try {
      // Test 1: Check injection
      newResults.inject = typeof (window as any).freighterApi
      console.log('inject:', newResults.inject)
      
      // Test 2: Check connection
      newResults.isConnected = await freighter.isConnected()
      console.log('isConnected', newResults.isConnected)
      
      // Test 3: Check permissions
      newResults.setAllowed = await freighter.setAllowed()
      console.log('setAllowed', newResults.setAllowed)
      
      // Test 4: Get address
      newResults.getAddress = await freighter.getAddress()
      console.log('getAddress', newResults.getAddress)
      
      // Test 5: Request access
      newResults.requestAccess = await freighter.requestAccess()
      console.log('requestAccess', newResults.requestAccess)
      
    } catch (error) {
      newResults.error = error instanceof Error ? error.message : 'Unknown error'
      console.error('Test error:', error)
    }
    
    setResults(newResults)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🧪 Prueba de Freighter API
          </h1>
          
          <div className="space-y-6">
            {/* Test Button */}
            <div className="text-center">
              <button 
                onClick={test}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Probar Freighter
              </button>
            </div>
            
            {/* Results */}
            {Object.keys(results).length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Resultados:</h2>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </div>
            )}
            
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Instrucciones:</h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Abre la consola del navegador (F12)</li>
                <li>Haz clic en "Probar Freighter"</li>
                <li>Revisa los logs en la consola</li>
                <li>Verifica que <code>window.freighterApi</code> sea "object"</li>
                <li>Si falla, revisa la configuración de Freighter</li>
              </ol>
            </div>
            
            {/* Troubleshooting */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Solución de Problemas:</h3>
              <ul className="list-disc list-inside space-y-2 text-orange-700">
                <li><strong>Chrome Extensions:</strong> chrome://extensions/ → Freighter → Enabled=ON</li>
                <li><strong>Site Access:</strong> Details → Site access = On all sites</li>
                <li><strong>Freighter Settings:</strong> Remove localhost de Blocked, Add a Allowed</li>
                <li><strong>Wallet:</strong> Desbloquea Freighter con PIN</li>
                <li><strong>Network:</strong> Configura en Testnet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
