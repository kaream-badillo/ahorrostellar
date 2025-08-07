"use client";

import { TrendingUp, Star, Users, Calendar, Award, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsCard from "@/components/ui/StatsCard";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";

export default function Stats() {
  const { state } = useApp();
  const { user, projects, activities } = state;

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

  // Calculate additional stats
  const totalStaked = projects.reduce((sum, project) => sum + project.totalStaked, 0);
  const averageStake = projects.length > 0 ? totalStaked / projects.length : 0;
  const completedProjects = activities.filter(a => a.type === 'project_completed').length;
  const totalRewards = activities
    .filter(a => a.type === 'reward')
    .reduce((sum, activity) => sum + (activity.amount || 0), 0);

  return (
    <Layout>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Estadísticas Detalladas</h1>
        <p className="text-xl text-gray-600">Análisis completo de tu actividad en AhorroStellar</p>
      </div>

      {/* Main Stats Grid - 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatsCard
          title="Balance Total"
          value={`$${user.totalBalance.toLocaleString()}`}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Stakes Activos"
          value={`$${user.activeStakes.toLocaleString()}`}
          icon={Star}
        />
        <StatsCard
          title="Reputación"
          value={user.reputation.toString()}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Proyectos"
          value={user.totalProjects.toString()}
          icon={BarChart3}
        />
      </div>

      {/* Detailed Stats - 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Performance Metrics */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Métricas de Rendimiento</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Promedio de Stake</span>
                <span className="font-semibold">${averageStake.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Proyectos Completados</span>
                <span className="font-semibold">{completedProjects}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Recompensas</span>
                <span className="font-semibold text-green-600">${totalRewards.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tasa de Éxito</span>
                <span className="font-semibold text-stellarBlue">85%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Activity Summary */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Resumen de Actividad</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Stakes Realizados</span>
                <span className="font-semibold">{activities.filter(a => a.type === 'stake').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Puntos Ganados</span>
                <span className="font-semibold text-purple-600">+{activities.filter(a => a.type === 'reputation_gained').reduce((sum, a) => sum + (a.amount || 0), 0)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Días Activo</span>
                <span className="font-semibold">{Math.floor((new Date().getTime() - new Date(user.memberSince).getTime()) / (1000 * 60 * 60 * 24))}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Nivel Actual</span>
                <span className="font-semibold text-stellarPurple">{user.reputationLevel}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Monthly Activity */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Actividad Mensual</h2>
            <div className="space-y-4">
              {['Enero', 'Febrero', 'Marzo', 'Abril'].map((month, index) => (
                <div key={month} className="flex items-center justify-between">
                  <span className="text-gray-600">{month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-stellarBlue to-stellarPurple h-2 rounded-full" 
                        style={{ width: `${Math.random() * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{Math.floor(Math.random() * 1000)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Category Distribution */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Distribución por Categoría</h2>
            <div className="space-y-4">
              {['Blockchain', 'Fintech', 'Educación', 'Sostenibilidad', 'Salud'].map((category, index) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-gray-600">{category}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-stellarBlue to-stellarPurple h-2 rounded-full" 
                        style={{ width: `${20 + index * 15}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{20 + index * 15}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Logros y Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-stellar-50 rounded-lg">
              <Award className="w-12 h-12 text-stellarBlue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Primer Stake</h3>
              <p className="text-sm text-gray-600">Realizaste tu primer stake</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Star className="w-12 h-12 text-stellarPurple mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Proyecto Exitoso</h3>
              <p className="text-sm text-gray-600">Un proyecto que respaldaste fue exitoso</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Comunidad Activa</h3>
              <p className="text-sm text-gray-600">Participaste en 5+ proyectos</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <Button variant="outline">
            Volver al Dashboard
          </Button>
        </Link>
        <Link href="/projects">
          <Button>
            Explorar Proyectos
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
