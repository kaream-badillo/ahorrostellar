"use client";

import { useState } from "react";
import { Wallet, TrendingUp, Shield, Target, Award, Users, ExternalLink, Info, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import { usePrices } from "@/hooks/usePrices";
import { conectarFreighter } from "@/components/ConectarFreighter";
import FreighterDebug from "@/components/FreighterDebug";
import FreighterLocalhostGuide from "@/components/FreighterLocalhostGuide";
import FreighterTest from "@/components/FreighterTest";
import { useFreighter } from "@/hooks/useFreighter";
import Link from "next/link";

export default function Stake() {
  const { state, makeStake, connectWallet } = useApp();
  const { wallet, projects, isLoading } = state;
  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);
  const [stakeDuration, setStakeDuration] = useState(7);
  const [pub, setPub] = useState<string | undefined>(wallet.publicKey || undefined);
  
  // Use Freighter hook for better detection
  const { isInstalled, isConnected, publicKey, connect } = useFreighter();
  
  // Get real-time prices directly from hook
  const { usdcUsd, xlmUsd } = usePrices(pub);
  
  // Check if wallet is connected for price display
  if (!pub) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vota con tu Ahorro</h1>
          <p className="text-lg text-gray-600 mb-6">
            Conecta tu wallet para ver precios en tiempo real y participar en la votación
          </p>
          
          {/* Freighter Installation Guide */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Info className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-orange-800">Freighter Wallet Requerida</h3>
              </div>
              <p className="text-orange-700 mb-4">
                Para usar esta aplicación necesitas instalar la extensión Freighter, la wallet oficial de Stellar.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-orange-700">Ve a <a href="https://freighter.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">freighter.app</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-orange-700">Instala la extensión para Chrome/Edge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-orange-700">Crea una cuenta o importa tu wallet existente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-orange-700">Recarga esta página y conecta tu wallet</span>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3 justify-center">
                <a 
                  href="https://freighter.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Instalar Freighter
                </a>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                  className="px-6 py-3"
                >
                  Recargar Página
                </Button>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={async () => {
              try {
                if (!isInstalled) {
                  alert('Freighter no está instalado. Instala la extensión primero.');
                  window.open('https://freighter.app/', '_blank');
                  return;
                }
                
                const freighterPublicKey = await connect();
                setPub(freighterPublicKey);
                await connectWallet();
              } catch (error) {
                console.error('Error connecting Freighter:', error);
                alert('Error conectando Freighter. Asegúrate de que la extensión esté desbloqueada.');
              }
            }} 
            size="lg"
            disabled={!isInstalled}
            className={!isInstalled ? "opacity-50 cursor-not-allowed" : ""}
          >
            {isInstalled ? 'Conectar Freighter' : 'Instala Freighter primero'}
          </Button>
          
          {/* Freighter Test */}
          <div className="mt-6 max-w-2xl mx-auto">
            <FreighterTest />
          </div>
          
          {/* Freighter Localhost Guide */}
          <div className="mt-6 max-w-4xl mx-auto">
            <FreighterLocalhostGuide />
          </div>
          
          {/* Debug Info - Solo para desarrollo */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6">
              <FreighterDebug />
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

  // Check if Freighter is installed
  const isFreighterInstalled = typeof window !== 'undefined' && (window as any).stellar;

  const handleVoteStake = async (projectId: string) => {
    if (!wallet.isConnected) {
      if (!isFreighterInstalled) {
        // Open Freighter installation page
        window.open('https://freighter.app/', '_blank');
        return;
      }
      try {
        await connectWallet();
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      setSelectedProject(projectId);
      // Show stake modal or redirect to stake form
      document.getElementById('stake-modal')?.classList.remove('hidden');
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vota con tu Ahorro</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bloquea temporalmente USDC como voto simbólico para respaldar proyectos universitarios
        </p>
        
        {/* Wallet Info */}
        <div className="mt-6 flex justify-center">
          <div className="p-3 bg-green-50 border border-green-200 rounded">
            <div className="text-sm text-green-700">
              ✅ Wallet conectada: {pub.slice(0,4)}…{pub.slice(-4)}
            </div>
          </div>
        </div>

        {/* Real-time Price Display */}
        <div className="mt-6 flex justify-center">
          {usdcUsd.loading && (
            <div className="p-3 bg-gray-50 border border-gray-200 rounded">
              <span className="text-sm text-gray-600">Cargando precios desde Reflector Oracle...</span>
            </div>
          )}
          {usdcUsd.error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <span className="text-sm text-red-600">Error: {usdcUsd.error}</span>
            </div>
          )}
          {!usdcUsd.loading && !usdcUsd.error && usdcUsd.price > 0 && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="flex space-x-4 text-sm">
                <span className="text-blue-700">USDC/USD: ${usdcUsd.price.toFixed(4)}</span>
                <span className="text-green-700">XLM/USD: ${xlmUsd.price.toFixed(4)}</span>
              </div>
              <div className="text-xs text-blue-600 mt-1">
                📊 Precios en tiempo real desde Reflector Oracle
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proyectos Disponibles</h2>
        
        {!wallet.isConnected && !isFreighterInstalled && (
          <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Info className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-800">Instala Freighter para participar</span>
            </div>
            <p className="text-sm text-orange-700">
              Necesitas la extensión Freighter para votar con tu ahorro
            </p>
            <a 
              href="https://freighter.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              Descargar Freighter
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                      Hasta {Math.floor(Math.random() * 15) + 8}% de bonus si gana financiamiento
                    </span>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Total respaldado</p>
                    <p className="font-semibold text-blue-600">${project.totalStaked.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Votantes</p>
                    <p className="font-semibold text-gray-900">{project.stakers}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progreso</span>
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
                    disabled={!isFreighterInstalled}
                    className="flex-1"
                    size="sm"
                    title={!isFreighterInstalled ? "Instala Freighter para participar" : ""}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Votar-Ahorra
                  </Button>
                  
                  <Link href={`/proyectos/demo`}>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <Card className="mb-12 max-w-4xl mx-auto">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">¿Cómo Funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bloquea USDC</h4>
              <p className="text-sm text-gray-600">Tu dinero queda seguro por 7 días</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Vota simbólicamente</h4>
              <p className="text-sm text-gray-600">Apoya proyectos que crees que merecen ganar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-lg font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Gana reputación</h4>
              <p className="text-sm text-gray-600">Y posible bonus si el proyecto gana</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Benefits */}
      <Card className="mb-12 max-w-4xl mx-auto">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Beneficios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">Sin riesgo de pérdida</span>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Construyes reputación pública</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700">Posible recompensa condicional</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-gray-700">Educación Web3 práctica</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Stake Modal */}
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

          {/* Stake Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad de USDC a Bloquear
            </label>
            <div className="relative">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(Number(e.target.value))}
                min="10"
                max="1000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                USDC
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Mínimo: 10 USDC • Máximo: 1000 USDC
            </p>
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duración del Bloqueo
            </label>
            <select
              value={stakeDuration}
              onChange={(e) => setStakeDuration(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={7}>7 días (recomendado)</option>
              <option value={14}>14 días</option>
              <option value={30}>30 días</option>
            </select>
            <p className="text-sm text-gray-600 mt-1">
              Tu USDC se desbloqueará automáticamente al finalizar el período
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              onClick={handleStake}
              disabled={!selectedProject || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Procesando...
                </>
              ) : (
                <>
                  <Target className="w-5 h-5 mr-2" />
                  Votar con {stakeAmount} USDC
                </>
              )}
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => document.getElementById('stake-modal')?.classList.add('hidden')}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Procesando voto...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
