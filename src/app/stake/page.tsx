"use client";

import { useState } from "react";
import { Wallet, TrendingUp, Shield, Target, Award, Users, ExternalLink, Info, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import { usePrices } from "@/hooks/usePrices";
import { conectarFreighter } from "@/components/ConectarFreighter";
import FreighterLocalhostGuide from "@/components/FreighterLocalhostGuide";
import FreighterTest from "@/components/FreighterTest";
import { useFreighter } from "@/hooks/useFreighter";
import { WalletData } from "@/components/molecules/wallet-data";
import { useSelectedAssetPrice, AssetCode } from "@/hooks/useSelectedAsset";
import Link from "next/link";

// [AhorroStellar][Reflector] imports
import WalletDemoBanner from '@/components/WalletDemoBanner'
import { useStakes } from '@/stores/stakes'

export const dynamic = 'force-dynamic'

export default function Stake() {
  const { state, makeStake, connectWallet } = useApp();
  const { wallet, projects, isLoading, user } = state;
  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);
  const [stakeDuration, setStakeDuration] = useState(7);
  const [pub, setPub] = useState<string | undefined>(wallet.publicKey || undefined);
  
  // Modo lectura con Reflector
  const [asset, setAsset] = useState<AssetCode>('USDC')
  const [amount, setAmount] = useState<number>(0)
  const { priceUSD, loading: priceLoading, error: priceError } = useSelectedAssetPrice(asset)
  const usdEq = priceUSD ? amount * priceUSD : 0
  
  // [AhorroStellar][Reflector] estado
  const { items, add, clear } = useStakes()
  
  // Use Freighter hook for better detection
  const { isInstalled, isConnected, publicKey, connect } = useFreighter();
  
  // Get real-time prices directly from hook
  const { usdcUsd, xlmUsd } = usePrices(pub);
  
  // Mock prices for demo mode when real prices fail
  const mockPrices = {
    usdcUsd: usdcUsd.error ? { price: 1.0, loading: false, error: null } : usdcUsd,
    xlmUsd: xlmUsd.error ? { price: 0.12, loading: false, error: null } : xlmUsd,
  };
  
  // Check if wallet is connected for price display
  if (!pub) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vote with your Savings</h1>
          <p className="text-lg text-gray-600 mb-6">
            Connect your wallet to see live prices and participate in voting
          </p>
          
          {/* Demo Mode Banner */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Info className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Demo Mode Active</h3>
              </div>
              <p className="text-green-700 mb-4">
                To try the full flow, you can simulate the wallet connection.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-green-700">Click "Simulate Connection" to continue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-green-700">Explore available projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-green-700">Test the full voting flow</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={async () => {
              // Simular conexión de wallet para demo - SIN llamar a connectWallet()
              const mockPublicKey = "GDEMO1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              setPub(mockPublicKey);
              
              // Simular conexión directamente en el contexto sin llamar a Freighter
              console.log('Demo mode: Simulating wallet connection');
              console.log('✅ Wallet simulada conectada! Ahora puedes probar el flujo completo.');
            }} 
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            🚀 Simulate Connection (Demo)
          </Button>
          
          {/* Freighter Installation Guide - only when not installed and no demo connection */}
          {!isInstalled && !pub && (
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Info className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-800">For real use: Freighter Wallet</h3>
                </div>
                <p className="text-orange-700 mb-4">
                  For real transactions you need to install the Freighter extension.
                </p>
                
                <div className="mt-4 flex space-x-3 justify-center">
                  <a 
                    href="https://freighter.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    Install Freighter
                  </a>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </Layout>
    );
  }

  const handleStake = async () => {
    if (!selectedProject) return;
    await makeStake(selectedProject, stakeAmount);
  };

  // [AhorroStellar][Reflector] handler
  const onStake = () => {
    if (!priceUSD || amount<=0) return
    add({ asset, amount, usd: Number((amount*priceUSD).toFixed(2)) })
  }

  // Check if Freighter is installed
  const isFreighterInstalled = typeof window !== 'undefined' && (window as any).stellar;

  const handleVoteStake = async (projectId: string) => {
    if (!pub) {
      alert('Connect your wallet first using the "Simulate Connection" button');
      return;
    }
    
    setSelectedProject(projectId);
    // Show stake modal
    const modal = document.getElementById('stake-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Vote-Save</h1>
            <p className="text-lg text-gray-600 mt-2">
              Temporarily lock USDC as a symbolic vote to back university projects
            </p>
          </div>
        </div>
        
        {/* [AhorroStellar][Reflector] Modo Lectura - Solo cuando NO hay wallet */}
        {!pub && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Modo Lectura</h3>
            </div>
            <p className="text-blue-700 text-sm mb-4">
              Precios reales con cuenta READONLY (sin wallet) usando Reflector Oracle
            </p>
            
            <WalletDemoBanner />
            <div className="flex gap-3 items-center">
              <select className="select select-bordered" value={asset} onChange={e=>setAsset(e.target.value as AssetCode)}>
                <option>USDC</option><option>CLP</option><option>XLM</option>
              </select>
              <input className="input input-bordered w-40" type="number" step="0.01"
                     placeholder="Monto" value={amount||''} onChange={e=>setAmount(Number(e.target.value))}/>
              <button className="btn btn-primary" onClick={onStake} disabled={!priceUSD || amount<=0}>
                Vote-Save (mock)
              </button>
            </div>
            {priceLoading && <div className="text-sm opacity-70">Cargando precio…</div>}
            {priceError && <div className="text-sm text-red-600">Error precio: {priceError}</div>}
            <div className="text-sm">
              1 {asset} ≈ <b>{priceUSD ? priceUSD.toFixed(6) : '—'}</b> USD &nbsp;|&nbsp;
              Equivalente: <b>{priceUSD ? usdEq.toFixed(2) : '—'} USD</b>
            </div>
            <div className="divider">Tus stakes (mock / local)</div>
            <div className="space-y-2">
              {items.length===0 && <div className="text-sm opacity-70">Sin registros</div>}
              {items.map(s=>(
                <div key={s.id} className="flex justify-between items-center p-3 rounded border">
                  <div className="text-sm">{new Date(s.ts).toLocaleString()}</div>
                  <div className="text-sm font-mono">{s.amount} {s.asset}</div>
                  <div className="text-sm">{s.usd.toFixed(2)} USD</div>
                </div>
              ))}
            </div>
            {items.length>0 && <button className="btn btn-outline btn-sm" onClick={clear}>Borrar historial</button>}
          </div>
        )}
        
        {/* Wallet Info */}
        <div className="mt-6 flex justify-center">
          <div className="p-3 bg-green-50 border border-green-200 rounded">
            <div className="text-sm text-green-700">
              ✅ Wallet connected: {pub.slice(0,4)}…{pub.slice(-4)}
            </div>
          </div>
        </div>

        {/* Estadísticas del Usuario */}
        {user && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">${user.activeStakes.toFixed(2)}</div>
                <div className="text-sm text-blue-700">Locked Savings</div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{user.totalProjects}</div>
                <div className="text-sm text-green-700">Backed Projects</div>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">{user.reputation}</div>
                <div className="text-sm text-purple-700">Reputation Points</div>
              </div>
            </div>
            
            {/* Enlace al Dashboard */}
            {user.totalProjects > 0 && (
              <div className="text-center">
                <Link href="/dashboard">
                  <Button variant="outline" className="text-sm">
                    📊 View my backed projects in the Dashboard
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Real-time Price Display */}
        <div className="mt-6 flex justify-center">
          {mockPrices.usdcUsd.loading && (
            <div className="p-3 bg-gray-50 border border-gray-200 rounded">
              <span className="text-sm text-gray-600">Cargando precios desde Reflector Oracle...</span>
            </div>
          )}
          {!mockPrices.usdcUsd.loading && mockPrices.usdcUsd.price > 0 && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="flex space-x-4 text-sm">
                <span className="text-blue-700">USDC/USD: ${mockPrices.usdcUsd.price.toFixed(4)}</span>
                <span className="text-green-700">XLM/USD: ${mockPrices.xlmUsd.price.toFixed(4)}</span>
              </div>
              <div className="text-xs text-blue-600 mt-1">
                📊 {usdcUsd.error ? 'Demo prices (simulation mode)' : 'Live prices from Reflector Oracle'}
              </div>
            </div>
          )}
        </div>
      </div>


      {/* Projects Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Projects</h2>
        
        {/* Debug Info - Solo para desarrollo */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 p-3 bg-gray-100 rounded text-sm">
            <strong>Debug:</strong> Proyectos cargados: {projects?.length || 0} | 
            Estado wallet: {wallet.isConnected ? 'Conectada' : 'Desconectada'} | 
            PublicKey: {pub ? `${pub.slice(0,8)}...` : 'N/A'}
          </div>
        )}
        
        {!wallet.isConnected && !isFreighterInstalled && (
          <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Info className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-800">Install Freighter to participate</span>
            </div>
            <p className="text-sm text-orange-700">
              You need the Freighter extension to vote with your savings
            </p>
            <a 
              href="https://freighter.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              Download Freighter
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects && projects.length > 0 ? projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  {/* Bonus Info */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">
                      Up to {Math.floor(Math.random() * 15) + 8}% bonus if funded
                    </span>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Total backed</p>
                    <p className="font-semibold text-blue-600">${project.totalStaked.toLocaleString()}</p>
                    {project.myStake > 0 && (
                      <p className="text-xs text-green-600">+${project.myStake.toFixed(2)} tuyo</p>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-500">Voters</p>
                    <p className="font-semibold text-gray-900">{project.stakers}</p>
                    {project.myStake > 0 && (
                      <p className="text-xs text-green-600">You voted!</p>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    onClick={() => handleVoteStake(project.id)}
                    className="flex-1"
                    size="sm"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Vote-Save
                  </Button>
                  
                  <Link href={`/proyectos/demo`}>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 mb-4">
                <Info className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No hay proyectos disponibles</h3>
                <p>Los proyectos se están cargando o no hay proyectos activos en este momento.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How it Works */}
      <Card className="mb-12 max-w-4xl mx-auto">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lock USDC</h4>
              <p className="text-sm text-gray-600">Your money is safe for 7 days</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Vote symbolically</h4>
              <p className="text-sm text-gray-600">Support projects you believe should win</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Gain reputation</h4>
              <p className="text-sm text-gray-600">And a possible bonus if the project wins</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Benefits */}
      <Card className="mb-12 max-w-4xl mx-auto">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">No risk of loss</span>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Build public reputation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700">Possible conditional reward</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-gray-700">Practical Web3 education</span>
            </div>
          </div>
        </div>
      </Card>

      {/* [AhorroStellar][Reflector] Stake Modal con selector de token */}
      <div id="stake-modal" className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4">Configura tu Voto</h3>
          
          {/* Project Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proyecto Seleccionado
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Elige un proyecto para respaldar</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>

          {/* [AhorroStellar][Reflector] Token Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Token para el Stake
            </label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value as AssetCode)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="USDC">USDC</option>
              <option value="XLM">XLM</option>
              <option value="CLP">CLP</option>
            </select>
            {priceLoading && <div className="text-sm text-blue-600 mt-1">Cargando precio…</div>}
            {priceError && <div className="text-sm text-red-600 mt-1">Error precio: {priceError}</div>}
            <div className="text-sm text-gray-600 mt-1">
              1 {asset} ≈ <b>{
                asset === 'USDC' ? '1.0000' : 
                asset === 'XLM' ? '0.1200' : 
                '0.0010'
              } USD</b> (demo)
            </div>
          </div>

          {/* Stake Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad a Bloquear
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount || ''}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1"
                max="10000"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ingresa cantidad"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {asset}
              </span>
            </div>
            {amount > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                Equivalent: <b>{
                  asset === 'USDC' ? (amount * 1.0).toFixed(2) : 
                  asset === 'XLM' ? (amount * 0.12).toFixed(2) : 
                  (amount * 0.001).toFixed(2)
                } USD</b> (demo)
              </p>
            )}
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lock Duration
            </label>
            <select
              value={stakeDuration}
              onChange={(e) => setStakeDuration(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={7}>7 days (recommended)</option>
              <option value={14}>14 days</option>
              <option value={30}>30 days</option>
            </select>
            <p className="text-sm text-gray-600 mt-1">
              Your {asset} will automatically unlock at the end of the period
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              onClick={() => {
                if (selectedProject && amount > 0) {
                  // Simular stake con precios demo
                  const usdValue = asset === 'USDC' ? amount * 1.0 : 
                                  asset === 'XLM' ? amount * 0.12 : 
                                  amount * 0.001;
                  
                  // Actualizar estadísticas del proyecto
                  const project = projects.find(p => p.id === selectedProject);
                  if (project) {
                    // Actualizar el proyecto en el estado global
                    makeStake(selectedProject, usdValue);
                  }
                  
                  // Agregar al store local de stakes
                  add({ asset, amount, usd: Number(usdValue.toFixed(2)) });
                  
                  // Cerrar modal
                  document.getElementById('stake-modal')?.classList.add('hidden');
                  
                  // Simple confirmation
                  alert(`✅ Vote recorded successfully!

${amount} ${asset} ($${usdValue.toFixed(2)}) for "${project?.title}"

Go to the dashboard to see all your stats and backed projects.`);
                }
              }}
              disabled={!selectedProject || !amount || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Target className="w-5 h-5 mr-2" />
                  Vote with {amount || 0} {asset}
                </>
              )}
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => document.getElementById('stake-modal')?.classList.add('hidden')}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Processing vote...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
