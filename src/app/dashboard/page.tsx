"use client";

import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import StatsCard from "@/components/ui/StatsCard";
import Card from "@/components/ui/Card";
import { usePrices } from "@/hooks/usePrices";
import { Wallet, FolderOpen, Users, DollarSign } from "lucide-react";

export default function Dashboard() {
  const { state } = useApp();
  const { user, isLoading } = state;
  
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
            subtitle={usdcUsd.price > 0 ? `≈ $${(user.activeStakes * usdcUsd.price).toFixed(2)} USD` : usdcUsd.error ? 'Error loading price' : 'Loading...'}
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
                  {usdcUsd.loading ? (
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
                  {xlmUsd.loading ? (
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
