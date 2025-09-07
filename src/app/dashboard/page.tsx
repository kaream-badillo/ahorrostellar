"use client";

import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import StatsCard from "@/components/ui/StatsCard";
import { useUSDCToUSDConverter } from "@/hooks/useReflectorPrices";
import { Wallet, FolderOpen, Users, DollarSign } from "lucide-react";

export default function Dashboard() {
  const { state } = useApp();
  const { user, isLoading } = state;
  
  // Get real-time USDC to USD conversion
  const { convertUSDCToUSD, usdcUsdPrice, loading: priceLoading } = useUSDCToUSDConverter();
  
  // Calculate USD values
  const activeStakesUSD = user ? convertUSDCToUSD(user.activeStakes) : null;
  const totalBalanceUSD = user ? convertUSDCToUSD(user.totalBalance) : null;

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

        {/* Real-time USD Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsCard
            title="Valor Total en USD"
            value={totalBalanceUSD ? `$${totalBalanceUSD.toFixed(2)}` : 'Cargando...'}
            icon={DollarSign}
            className={priceLoading ? 'opacity-50' : ''}
          />
          <StatsCard
            title="Stakes Activos en USD"
            value={activeStakesUSD ? `$${activeStakesUSD.toFixed(2)}` : 'Cargando...'}
            icon={DollarSign}
            className={priceLoading ? 'opacity-50' : ''}
          />
        </div>

        {/* Price Info */}
        {usdcUsdPrice && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-center space-x-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-800">
                Precio USDC: ${usdcUsdPrice.toFixed(4)} USD (actualizado en tiempo real)
              </span>
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
