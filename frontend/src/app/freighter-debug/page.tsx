'use client'
import freighter from '@stellar/freighter-api'

export default function Page() {
  const test = async () => {
    // Logs clave en orden correcto
    console.log('inject:', typeof (window as any).freighterApi)
    const conn = await freighter.isConnected();   console.log('isConnected:', conn)
    const perm = await freighter.setAllowed();    console.log('setAllowed:', perm)
    const a1   = await freighter.getAddress();    console.log('getAddress:', a1)
    if (!a1.address) {
      const a2 = await freighter.requestAccess(); console.log('requestAccess:', a2)
    }
    const net = await freighter.getNetworkDetails(); console.log('getNetworkDetails:', net)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🧪 Freighter Debug
          </h1>
          
          <div className="space-y-6">
            <button 
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              onClick={test}
            >
              Probar Freighter
            </button>
            
            <p className="text-sm text-gray-600 text-center">
              Abre la consola del navegador (F12) y pulsa el botón.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Verificación en Consola:</h3>
              <div className="space-y-2 text-sm font-mono bg-blue-100 p-3 rounded">
                <div>typeof window.freighterApi // "object"</div>
                <div>isConnected: {`{isConnected: true/false}`}</div>
                <div>setAllowed: {`{isAllowed: true/false}`}</div>
                <div>getAddress: {`{address: "G..."}`}</div>
                <div>requestAccess: {`{address: "G..."}`}</div>
                <div>getNetworkDetails: {`{passphrase: "...", rpc: "..."}`}</div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Si window.freighterApi === "undefined":</h3>
              <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                <li>chrome://extensions/ → Freighter → Enabled=ON</li>
                <li>Details → Site access = On all sites</li>
                <li>Freighter Settings → Allow localhost:3000</li>
                <li>Desbloquea wallet con PIN</li>
                <li>Recarga pestaña (Ctrl+Shift+R)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
