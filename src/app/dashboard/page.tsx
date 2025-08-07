"use client";

import { Wallet, Star, TrendingUp, Users, FolderOpen } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsCard from "@/components/ui/StatsCard";
import Layout from "@/components/layout/Layout";
import { useUserStats } from "@/hooks/useUserStats";
import { useProjects } from "@/hooks/useProjects";
import Link from "next/link";

export default function Dashboard() {
  const { userStats, additionalStats, isLoading } = useUserStats();
  const { myStakedProjects, projectStats } = useProjects();

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">¡Bienvenido de vuelta!</h1>
        <p className="text-xl text-gray-600">Aquí tienes un resumen de tu actividad en AhorroStellar</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <StatsCard
          title="Balance Total"
          value={`$${userStats.totalBalance.toLocaleString()}`}
          icon={Wallet}
          trend="+$150 este mes"
          trendType="positive"
        />
        <StatsCard
          title="Stakes Activos"
          value={`$${userStats.activeStakes.toLocaleString()}`}
          icon={TrendingUp}
          trend={`${myStakedProjects.length} proyectos`}
          trendType="neutral"
        />
        <StatsCard
          title="Reputación"
          value={userStats.reputation.toString()}
          icon={Users}
          trend="Bronze Badge"
          trendType="positive"
        />
        <StatsCard
          title="Proyectos"
          value={userStats.totalProjects.toString()}
          icon={FolderOpen}
          trend={`${projectStats.activeProjects} activos`}
          trendType="neutral"
        />
      </div>

      {/* Recent Projects Grid */}
      <div className="grid grid-cols-2 gap-8">
        {myStakedProjects.slice(0, 2).map((project) => (
          <Card key={project.id}>
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-stellar-100 rounded-xl flex items-center justify-center">
                <Star className="w-10 h-10 text-stellar-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Stakeado: ${project.myStake}</span>
                    <span className="text-xs text-green-600">+15% este mes</span>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stellar-500"></div>
            <span className="text-gray-700">Cargando datos...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
