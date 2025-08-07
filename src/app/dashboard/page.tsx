"use client";

import { Wallet, Star, TrendingUp, Users, FolderOpen, Award } from "lucide-react";
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
      {/* Welcome Section - Emocional y Web3 */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">¡Tu ahorro ya está construyendo Web3!</h1>
        <p className="text-xl text-gray-600 mb-4">Cada stake apoya proyectos reales y suma reputación. ¡Es win-win sin riesgo!</p>
        
        {/* Mensaje motivacional adicional */}
        <div className="bg-gradient-to-r from-stellarBlue/10 to-stellarPurple/10 p-6 rounded-xl border border-stellarBlue/20">
          <p className="text-lg text-gray-700 text-center">
            <span className="font-semibold text-stellarBlue">Ahorra sin riesgo, gana reputación y apoya lo que importa.</span> Stellar te recompensa por confiar.
          </p>
        </div>
      </div>

      {/* Stats Grid - 5 Columns Web3 Simplificadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <StatsCard
          title="Balance Total"
          value={`$${user.totalBalance.toLocaleString()}`}
          icon={Wallet}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Stakes Activos"
          value={`$${user.activeStakes.toLocaleString()}`}
          icon={TrendingUp}
        />
        <StatsCard
          title="Reputación"
          value={user.reputation.toString()}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Proyectos Apoyados"
          value={user.totalProjects.toString()}
          icon={FolderOpen}
        />
        <StatsCard
          title="Rentabilidad"
          value="+12.5%"
          icon={TrendingUp}
          trend={{ value: 12.5, isPositive: true }}
        />
      </div>

      {/* Información de Rentabilidad - Motivacional */}
      <Card className="mb-8">
        <div className="p-6 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-green-600">Tu ahorro está generando una rentabilidad anual estimada del 12.5%</span> mientras lo bloqueas para apoyar proyectos blockchain.
          </p>
        </div>
      </Card>

      {/* Gamificación y Logros - Estilo Web3 */}
      <Card className="mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">🎮 Tus Logros Web3</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-stellarBlue" />
              </div>
              <h3 className="font-semibold mb-1">Nivel {user.reputationLevel}</h3>
              <p className="text-sm text-gray-600">Reputación en la comunidad</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-stellarPurple" />
              </div>
              <h3 className="font-semibold mb-1">{user.totalProjects} Proyectos</h3>
              <p className="text-sm text-gray-600">Apoyados exitosamente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-1">+{user.totalRewards}</h3>
              <p className="text-sm text-gray-600">Recompensas ganadas</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Incentivo para nuevos usuarios */}
      {user.activeStakes === 0 && (
        <Card className="mb-8 bg-gradient-to-r from-stellarBlue/5 to-stellarPurple/5 border-stellarBlue/20">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-stellarBlue mb-2">¿Aún no estás participando?</h3>
            <p className="text-gray-600 mb-4">Haz tu primer stake y empieza a construir reputación en el ecosistema Web3.</p>
            <Link href="/projects">
              <Button size="lg" className="bg-stellarBlue hover:bg-stellarBlue/90">
                <Star className="w-5 h-5 mr-2" />
                Explorar Proyectos
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {/* Quick Actions - Simplificadas */}
      <Card className="mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Acciones Rápidas</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg">
                <FolderOpen className="w-5 h-5 mr-2" />
                Explorar Proyectos Blockchain
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Ver Perfil
              </Button>
            </Link>
            <Link href="/stats">
              <Button variant="secondary" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ver Estadísticas
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Staking Test Component */}
      <div className="mb-12">
        <StakingTest />
      </div>

      {/* Recent Projects Grid - 2 Columns */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold gradient-text">Mis Proyectos Recientes</h2>
          <Link href="/projects">
            <Button variant="ghost">
              Ver Todos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {myStakedProjects.slice(0, 2).map((project) => (
            <Card key={project.id}>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-stellar-100 rounded-xl flex items-center justify-center">
                  <Star className="w-10 h-10 text-stellarBlue" />
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
      </div>

      {/* Activity Feed - Simplificado */}
      <Card className="mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Actividad Reciente</h2>
          <div className="space-y-4">
            {activities.slice(0, 3).map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-stellar-50 rounded-lg">
                <div className="w-10 h-10 bg-stellarBlue rounded-full flex items-center justify-center">
                  {activity.type === 'stake' && <TrendingUp className="w-5 h-5 text-white" />}
                  {activity.type === 'reputation_gained' && <Users className="w-5 h-5 text-white" />}
                  {activity.type === 'reward' && <Wallet className="w-5 h-5 text-white" />}
                  {activity.type === 'project_completed' && <Star className="w-5 h-5 text-white" />}
                  {activity.type === 'wallet_connected' && <Wallet className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <span className="text-sm text-gray-500">
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

      {/* Mensaje motivacional final */}
      <Card className="bg-gradient-to-r from-stellarBlue/5 to-stellarPurple/5 border-stellarBlue/20">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-stellarBlue mb-4">¡Sigues construyendo el futuro!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Cada stake que haces no solo genera rentabilidad, sino que también apoya proyectos reales 
            y construye tu reputación en la comunidad Web3. ¡Tu ahorro tiene poder!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects">
              <Button size="lg" className="bg-stellarBlue hover:bg-stellarBlue/90">
                <Star className="w-5 h-5 mr-2" />
                Explorar Más Proyectos
              </Button>
            </Link>
            <Link href="/stats">
              <Button variant="outline" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ver Mi Progreso
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stellarBlue"></div>
            <span className="text-gray-700">Cargando datos...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
