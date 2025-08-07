"use client";

import { TrendingUp, Star, Users, Calendar, Award, BarChart3, Target, Shield } from "lucide-react";
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tu Impacto como Votante</h1>
        <p className="text-lg text-gray-600">Análisis completo de tu participación simbólica y reputación en la comunidad Web3 universitaria</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="XLM Bloqueados"
          value={`${user.activeStakes} XLM`}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Votos Activos"
          value={user.totalProjects.toString()}
          icon={Target}
        />
        <StatsCard
          title="Reputación Pública"
          value={user.reputation.toString()}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Proyectos Respaldados"
          value={user.totalProjects.toString()}
          icon={BarChart3}
        />
      </div>

      {/* Security Info */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Estadísticas verificables</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Todos los votos están onchain</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Reputación pública transparente</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Historial verificable</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Reputation and Achievements */}
      <Card className="mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">🎮 Logros y Reputación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Nivel {user.reputationLevel}</h3>
              <p className="text-sm text-gray-600">Votante {Number(user.reputationLevel) === 1 ? 'Novato' : Number(user.reputationLevel) === 2 ? 'Intermedio' : 'Experto'}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">{completedProjects} Proyectos</h3>
              <p className="text-sm text-gray-600">Respaldados exitosamente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">+{totalRewards}</h3>
              <p className="text-sm text-gray-600">Reconocimientos ganados</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Monthly Activity */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Actividad Mensual</h2>
            <div className="space-y-4">
              {['Enero', 'Febrero', 'Marzo', 'Abril'].map((month, index) => (
                <div key={month} className="flex items-center justify-between">
                  <span className="text-gray-600">{month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${Math.random() * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{Math.floor(Math.random() * 1000)} XLM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Category Distribution */}
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Distribución por Categoría</h2>
            <div className="space-y-4">
              {['Blockchain', 'DeFi', 'NFTs', 'Smart Contracts', 'Web3'].map((category, index) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-gray-600">{category}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" 
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

      {/* Voting Impact */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Tu voto tiene impacto real</h2>
          <p className="text-gray-700 mb-6">
            Cada respaldo simbólico que haces contribuye a la comunidad Web3 universitaria. 
            <span className="font-medium text-blue-600"> Tu visión temprana puede cambiar el futuro</span>.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/stake">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Target className="w-5 h-5 mr-2" />
                Hacer Nuevo Voto
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                Explorar Proyectos
              </Button>
            </Link>
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
        <Link href="/profile">
          <Button>
            Ver Mi Perfil
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
