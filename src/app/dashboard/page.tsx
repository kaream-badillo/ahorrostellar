"use client";

import { Wallet, Star, TrendingUp, Users, FolderOpen, Award, Shield, Target } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsCard from "@/components/ui/StatsCard";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import { StakingTest } from "@/components/StakingTest";
import Link from "next/link";

export default function Dashboard() {
  const { state } = useApp();
  const { user, myStakedProjects, activities, isLoading } = state;

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
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tu Reputación de Votante</h1>
        <p className="text-lg text-gray-600 mb-4">
          Tu historial de respaldos simbólicos y reconocimiento público
        </p>
        
        {/* Security Message */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Tu ahorro está protegido</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Todos tus votos simbólicos están respaldados por contratos Soroban. 
            <span className="font-medium text-blue-600"> Recuperas tu XLM automáticamente</span> y 
            <span className="font-medium text-green-600"> construyes reputación por tu visión temprana</span>.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="XLM Bloqueados"
          value={`${user.activeStakes} XLM`}
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
        <StatsCard
          title="Votos Activos"
          value={user.totalProjects.toString()}
          icon={Target}
        />
      </div>

      {/* How Voting Works */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 text-sm font-bold">1</span>
            Cómo funciona tu voto simbólico
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>• <span className="font-medium">Bloqueas XLM temporalmente</span> - no se transfiere, solo se reserva</p>
            <p>• <span className="font-medium">Tu bloqueo es un voto visible</span> que respalda proyectos universitarios</p>
            <p>• <span className="font-medium">Construyes reputación pública</span> como votante temprano</p>
            <p>• <span className="font-medium">Recuperas XLM + posible recompensa</span> si el proyecto triunfa</p>
          </div>
        </div>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Voting Progress */}
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Tu Progreso como Votante</h2>
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
                <h3 className="font-semibold mb-1">{user.totalProjects} Proyectos</h3>
                <p className="text-sm text-gray-600">Que has elegido respaldar</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">+{user.totalRewards}</h3>
                <p className="text-sm text-gray-600">Reconocimientos ganados</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Acciones Rápidas</h2>
            <div className="flex flex-col space-y-4">
              <Link href="/stake">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Target className="w-5 h-5 mr-2" />
                  Hacer Nuevo Voto
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full">
                  <FolderOpen className="w-5 h-5 mr-2" />
                  Explorar Proyectos
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="secondary" size="lg" className="w-full">
                  <Users className="w-5 h-5 mr-2" />
                  Ver Mi Perfil
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Staking Test + Recent Votes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Staking Test Component */}
        <div>
          <StakingTest />
        </div>

        {/* Recent Votes */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Mis Votos Recientes</h2>
            <Link href="/projects">
              <Button variant="ghost">
                Ver Todos
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {myStakedProjects.slice(0, 2).map((project) => (
              <Card key={project.id}>
                <div className="flex items-start space-x-4 p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Votado: {project.myStake} XLM</span>
                        <span className="text-xs text-green-600">+{user.reputation} reputación</span>
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
        </div>
      </div>

      {/* Activity + Motivation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Activity Feed */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Actividad Reciente</h2>
            <div className="space-y-3">
              {activities.slice(0, 3).map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    {activity.type === 'stake' && <Target className="w-4 h-4 text-white" />}
                    {activity.type === 'reputation_gained' && <Users className="w-4 h-4 text-white" />}
                    {activity.type === 'reward' && <Award className="w-4 h-4 text-white" />}
                    {activity.type === 'project_completed' && <Star className="w-4 h-4 text-white" />}
                    {activity.type === 'wallet_connected' && <Wallet className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900">{activity.title}</h4>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(activity.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Motivational Message */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tu voto tiene impacto</h3>
            <p className="text-gray-700 mb-6">
              Cada respaldo simbólico que haces contribuye a la comunidad Web3 universitaria. 
              <span className="font-medium text-blue-600"> Tu visión temprana puede cambiar el futuro</span>.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/stake">
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Target className="w-4 h-4 mr-2" />
                  Hacer Nuevo Voto
                </Button>
              </Link>
              <Link href="/stats">
                <Button variant="outline" size="sm" className="w-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Mi Progreso
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Support System */}
      <Card className="bg-green-50 border-green-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-lg">💚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Soporte Disponible</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Comunidad universitaria activa</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Tutoriales de voto simbólico</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Soporte técnico 24/7</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Cargando datos...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
