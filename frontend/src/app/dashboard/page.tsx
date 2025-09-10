"use client";

import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import StatsCard from "@/components/ui/StatsCard";
import Card from "@/components/ui/Card";
import { usePrices } from "@/hooks/usePrices";
import { useHydration } from "@/hooks/useHydration";
import { Wallet, FolderOpen, Users, DollarSign } from "lucide-react";

export default function Dashboard() {
  const { state } = useApp();
  const { user, isLoading } = state;
  const isHydrated = useHydration();
  
  // Get real-time prices directly from hook
  const { usdcUsd, xlmUsd } = usePrices();

  if (!user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Usuario no encontrado</h1>
          <p className="text-gray-600">Por favor, conecta tu wallet para continuar.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tu Reputación de Votante</h1>
        <p className="text-lg text-gray-600 mb-4">
          Tu historial de respaldos simbólicos y reconocimiento público
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Ahorro Actual (USDC bloqueado)"
            value={`${user.activeStakes} USDC`}
            icon={Wallet}
            trend={{ value: 15, isPositive: true }}
            subtitle={
              !isHydrated 
                ? 'Loading...' 
                : usdcUsd.price > 0 
                  ? `≈ $${(user.activeStakes * usdcUsd.price).toFixed(2)} USD` 
                  : usdcUsd.error 
                    ? 'Error loading price' 
                    : 'Loading...'
            }
          />
          <StatsCard
            title="Proyectos Respaldados"
            value={user.totalProjects.toString()}
            icon={FolderOpen}
          />
          <StatsCard
            title="Reputación Pública"
            value={user.reputation.toString()}
            icon={Users}
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* FX Panel */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Panel de Precios en Tiempo Real</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">USDC/USD</h4>
                  <p className="text-sm text-gray-500">Precio de USDC</p>
                </div>
                <div className="text-right">
                  {!isHydrated ? (
                    <span className="text-gray-500">Cargando...</span>
                  ) : usdcUsd.loading ? (
                    <span className="text-gray-500">Cargando...</span>
                  ) : usdcUsd.error ? (
                    <span className="text-red-500">Error</span>
                  ) : (
                    <span className="text-2xl font-bold text-blue-600">${usdcUsd.price.toFixed(4)}</span>
                  )}
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-700">XLM/USD</h4>
                  <p className="text-sm text-gray-500">Precio de Stellar</p>
                </div>
                <div className="text-right">
                  {!isHydrated ? (
                    <span className="text-gray-500">Cargando...</span>
                  ) : xlmUsd.loading ? (
                    <span className="text-gray-500">Cargando...</span>
                  ) : xlmUsd.error ? (
                    <span className="text-red-500">Error</span>
                  ) : (
                    <span className="text-2xl font-bold text-green-600">${xlmUsd.price.toFixed(4)}</span>
                  )}
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-800">
                Precios actualizados desde Reflector Oracle en Soroban Testnet
              </span>
            </div>
          </div>
        </div>

        {/* Mis Proyectos Respaldados */}
        {state.projects.filter(p => p.myStake > 0).length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mis Proyectos Respaldados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {state.projects.filter(p => p.myStake > 0).map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow border-green-200 bg-green-50">
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-green-800 font-semibold">Tu Respaldo</span>
                        </div>
                        <p className="text-green-700 font-bold text-lg">${project.myStake.toFixed(2)} USD</p>
                        <p className="text-green-600 text-sm">Bloqueado temporalmente</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Total respaldado</p>
                        <p className="font-semibold text-blue-600">${project.totalStaked.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Progreso</p>
                        <p className="font-semibold text-gray-900">{project.progress.toFixed(1)}%</p>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>

                    <div className="text-center">
                      <span className="text-xs text-green-600 font-semibold">
                        ✅ Proyecto respaldado por ti
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-sm text-gray-500 italic mt-4">
          Próximamente: panel de reputación, visualización global y votación pública.
        </div>

        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="text-gray-700">Cargando datos...</span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
