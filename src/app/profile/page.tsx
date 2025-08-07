"use client";

import { User, Edit, Star, TrendingUp, Users, Calendar, Award, Target, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsCard from "@/components/ui/StatsCard";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";

export default function Profile() {
  const { state, updateUserProfile } = useApp();
  const { user, myStakedProjects, activities } = state;

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

  const handleEditProfile = () => {
    // In a real app, this would open a modal or navigate to edit page
    console.log('Edit profile clicked');
  };

  return (
    <Layout>
      {/* Profile Header */}
      <div className="mb-8">
        <Card>
          <div className="p-8">
            <div className="flex items-start space-x-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{user.avatar}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Cambiar Foto
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{user.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">Votante Simbólico Activo</p>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {user.university}
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        Nivel {user.reputationLevel}
                      </span>
                    </div>
                  </div>
                  <Button size="lg" onClick={handleEditProfile}>
                    <Edit className="w-5 h-5 mr-2" />
                    Editar Perfil
                  </Button>
                </div>

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  Apasionado por la tecnología blockchain y el ecosistema Web3. 
                  Participando activamente en AhorroStellar para construir el futuro del voto simbólico universitario y la reputación descentralizada.
                  <span className="font-medium text-blue-600"> Mi respaldo simbólico respalda la visión de otros estudiantes</span>.
                </p>

                {/* Contact Info */}
                <div className="flex items-center space-x-8 mt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Miembro desde {new Date(user.memberSince).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{user.totalProjects} proyectos respaldados con mi voto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Grid */}
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
          icon={User}
        />
      </div>

      {/* Security Info */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Tu reputación está protegida</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Votos simbólicos verificables</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Historial público transparente</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Recompensas condicionales</span>
            </div>
          </div>
        </div>
      </Card>

      {/* My Votes Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Mis Votos Simbólicos</h2>
          <Link href="/projects">
            <Button variant="outline">
              Ver Todos los Proyectos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {myStakedProjects.slice(0, 4).map((project) => (
            <Card key={project.id}>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Mi Voto: {project.myStake} XLM</span>
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

      {/* Activity Timeline */}
      <Card>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Actividad Reciente</h2>
          <div className="space-y-6">
            {activities.slice(0, 4).map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  {activity.type === 'stake' && <Target className="w-5 h-5 text-white" />}
                  {activity.type === 'reputation_gained' && <Users className="w-5 h-5 text-white" />}
                  {activity.type === 'reward' && <Award className="w-5 h-5 text-white" />}
                  {activity.type === 'project_completed' && <Star className="w-5 h-5 text-white" />}
                  {activity.type === 'wallet_connected' && <User className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(activity.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Layout>
  );
}
