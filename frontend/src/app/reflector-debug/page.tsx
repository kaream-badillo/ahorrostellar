// [AhorroStellar][Reflector] - KALE x Reflector Hackathon 2025
'use client'
import { useState, useEffect, useRef } from 'react'
import { 
  priceUSDCinUSD, 
  usdPerCLP, 
  priceXLMinUSD, 
  priceCLPinUSD,
  getTwap,
  getXTwap,
  getLastTimestamp,
  testReflectorConnections 
} from '@/lib/api/reflector'
import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { RefreshCw, CheckCircle, XCircle, Clock, Database } from 'lucide-react'

interface PriceData {
  price: number
  error: string | null
  timestamp: number
  loading: boolean
}

interface DebugData {
  usdcUsd: PriceData
  usdClp: PriceData
  xlmUsd: PriceData
  clpUsd: PriceData
  decimals: {
    usdc: number
    fx: number
    cex: number
    errors: string[]
  }
}

export default function ReflectorDebugPage() {
  const [data, setData] = useState<DebugData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [autoRefresh, setAutoRefresh] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const results = await testReflectorConnections()
      setData({
        usdcUsd: { ...results.usdcUsd, loading: false },
        usdClp: { ...results.usdClp, loading: false },
        xlmUsd: { ...results.xlmUsd, loading: false },
        clpUsd: { ...results.clpUsd, loading: false },
        decimals: results.decimals
      })
      setLastUpdate(new Date())
    } catch (error) {
      console.error('Failed to fetch Reflector data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const testIndividual = async (testName: string, testFn: () => Promise<number>) => {
    console.log(`Testing ${testName}...`)
    try {
      const result = await testFn()
      console.log(`${testName}:`, result)
      alert(`${testName}: ${result}`)
    } catch (error) {
      console.error(`${testName} failed:`, error)
      alert(`${testName} failed: ${error}`)
    }
  }

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(fetchData, 30000) // 30 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoRefresh])

  // Initial load
  useEffect(() => {
    fetchData()
  }, [])

  const formatPrice = (price: number) => {
    if (price >= 1) return price.toFixed(4)
    if (price >= 0.01) return price.toFixed(6)
    return price.toFixed(8)
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔍 Reflector Oracle Debug
          </h1>
          <p className="text-gray-600">
            Real-time testing of Reflector Oracle price feeds for KALE x Reflector Hackathon 2025
          </p>
          
          {/* Status Indicator */}
          <div className="mt-4 p-4 rounded-lg border">
            <div className="flex items-center space-x-2">
              {process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY && 
               !process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY.startsWith('GDEMO') &&
               process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY !== '<TU_PUBLIC_KEY_G...>' ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-medium">🚀 REAL REFLECTOR MODE</span>
                  <span className="text-sm text-gray-600">
                    Account: {process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY.slice(0, 6)}...{process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY.slice(-6)}
                  </span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-700 font-medium">🔧 DEMO MODE</span>
                  <span className="text-sm text-gray-600">
                    Configure .env.local with real testnet account for live prices
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <div className="p-6">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Button 
                  onClick={fetchData} 
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Testing...' : 'Test All Connections'}
                </Button>
                
                <Button 
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  variant={autoRefresh ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  {autoRefresh ? 'Stop Auto-Refresh' : 'Start Auto-Refresh (30s)'}
                </Button>
              </div>

              {lastUpdate && (
                <div className="text-sm text-gray-500">
                  Last update: {lastUpdate.toLocaleTimeString()}
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Individual Tests */}
        <Card className="mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Individual Tests</h2>
            
            {/* Basic Price Tests */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Basic Price Feeds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  onClick={() => testIndividual('USDC/USD', priceUSDCinUSD)}
                  variant="outline"
                  size="sm"
                >
                  Test USDC/USD
                </Button>
                <Button 
                  onClick={() => testIndividual('USD/CLP', usdPerCLP)}
                  variant="outline"
                  size="sm"
                >
                  Test USD/CLP
                </Button>
                <Button 
                  onClick={() => testIndividual('XLM/USD', priceXLMinUSD)}
                  variant="outline"
                  size="sm"
                >
                  Test XLM/USD
                </Button>
                <Button 
                  onClick={() => testIndividual('CLP/USD', priceCLPinUSD)}
                  variant="outline"
                  size="sm"
                >
                  Test CLP/USD
                </Button>
              </div>
            </div>

            {/* Advanced Tests */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Advanced Oracle Functions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  onClick={() => testIndividual('USDC TWAP', () => getTwap(process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC!, { type: 2, code: 'USDC' }, 2))}
                  variant="outline"
                  size="sm"
                >
                  Test USDC TWAP
                </Button>
                <Button 
                  onClick={() => testIndividual('XLM TWAP', () => getTwap(process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX!, { type: 1, code: 'XLM' }, 2))}
                  variant="outline"
                  size="sm"
                >
                  Test XLM TWAP
                </Button>
                <Button 
                  onClick={() => testIndividual('XLM/USD TWAP', () => getXTwap(process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX!, { type: 1, code: 'XLM' }, { type: 2, code: 'USD' }, 2))}
                  variant="outline"
                  size="sm"
                >
                  Test XLM/USD TWAP
                </Button>
                <Button 
                  onClick={() => testIndividual('Last Timestamp', () => getLastTimestamp(process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC!))}
                  variant="outline"
                  size="sm"
                >
                  Test Last Timestamp
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Results */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Feeds */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Price Feeds
                </h2>
                
                <div className="space-y-4">
                  {/* USDC/USD */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-blue-900">USDC/USD</div>
                      <div className="text-sm text-blue-700">
                        Stellar Public Assets
                      </div>
                    </div>
                    <div className="text-right">
                      {data.usdcUsd.error ? (
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="w-4 h-4" />
                          <span className="text-sm">Error</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-mono font-semibold">
                            ${formatPrice(data.usdcUsd.price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* USD/CLP */}
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-green-900">USD/CLP</div>
                      <div className="text-sm text-green-700">
                        Foreign Exchange
                      </div>
                    </div>
                    <div className="text-right">
                      {data.usdClp.error ? (
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="w-4 h-4" />
                          <span className="text-sm">Error</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-mono font-semibold">
                            {formatPrice(data.usdClp.price)} CLP
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* XLM/USD */}
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-purple-900">XLM/USD</div>
                      <div className="text-sm text-purple-700">
                        External CEX & DEX
                      </div>
                    </div>
                    <div className="text-right">
                      {data.xlmUsd.error ? (
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="w-4 h-4" />
                          <span className="text-sm">Error</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-mono font-semibold">
                            ${formatPrice(data.xlmUsd.price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CLP/USD (derived) */}
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-orange-900">CLP/USD</div>
                      <div className="text-sm text-orange-700">
                        Derived (1/USD/CLP)
                      </div>
                    </div>
                    <div className="text-right">
                      {data.clpUsd.error ? (
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="w-4 h-4" />
                          <span className="text-sm">Error</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-mono font-semibold">
                            ${formatPrice(data.clpUsd.price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Oracle Info */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Oracle Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contract IDs (Testnet)</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-gray-50 rounded">
                        <div className="font-mono text-xs break-all">
                          USDC: {process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC || 'Not configured'}
                        </div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded">
                        <div className="font-mono text-xs break-all">
                          FX: {process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX || 'Not configured'}
                        </div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded">
                        <div className="font-mono text-xs break-all">
                          CEX: {process.env.NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX || 'Not configured'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Decimals</h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-semibold text-blue-900">USDC</div>
                        <div className="font-mono">{data.decimals.usdc}</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-semibold text-green-900">FX</div>
                        <div className="font-mono">{data.decimals.fx}</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-semibold text-purple-900">CEX</div>
                        <div className="font-mono">{data.decimals.cex}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Configuration</h3>
                    <div className="space-y-1 text-sm">
                      <div>RPC: {process.env.NEXT_PUBLIC_SOROBAN_RPC_PRIMARY || 'Not configured'}</div>
                      <div>Network: {process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE || 'Not configured'}</div>
                      <div>Reader: {process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY ? 'Configured' : 'Not configured'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

      </div>
    </Layout>
  )
}
