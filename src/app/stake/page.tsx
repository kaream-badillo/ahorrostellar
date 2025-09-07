"use client";

import { useState } from "react";
import { Wallet, TrendingUp, Shield, Target, Award, Users, ExternalLink, Info, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import { useReflectorPrices } from "@/hooks/useReflectorPrices";
import Link from "next/link";

export default function Stake() {
  const { state, makeStake, connectWallet } = useApp();
  const { wallet, projects, isLoading } = state;
  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);
  const [stakeDuration, setStakeDuration] = useState(7);
  
  // Get real-time prices from Reflector Oracle
  const { prices, loading: pricesLoading, error: pricesError, isHealthy } = useReflectorPrices();

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
        
        {/* Real-time Price Display */}
        <div className="mt-6 flex justify-center">
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex items-center space-x-4">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <div className="text-sm">
                <span className="text-gray-600">Precios en tiempo real:</span>
                <div className="flex space-x-4 mt-1">
                  {pricesLoading ? (
                    <span className="text-gray-500">Cargando...</span>
                  ) : pricesError ? (
                    <span className="text-red-500">Error: {pricesError}</span>
                  ) : (
                    <>
                      <span className="font-semibold text-green-600">
                        USDC/USD: ${prices['USDC:GBBD47IF6LXCC7EDU6L4Q5JWCQ7PASDKL3SWK3UMVD7AQ4AVM6U2Y3X3/USD']?.price?.toFixed(4) || 'N/A'}
                      </span>
                      <span className="font-semibold text-blue-600">
                        XLM/USD: ${prices['XLM/USD']?.price?.toFixed(4) || 'N/A'}
                      </span>
                    </>
                  )}
                </div>
                {!isHealthy && (
                  <div className="text-xs text-orange-600 mt-1">
                    ⚠️ Oracle no disponible, usando precios simulados
                  </div>
                )}
              </div>
            </div>
          </Card>
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
