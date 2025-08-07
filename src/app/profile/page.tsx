"use client";

import { User, Edit, Star, TrendingUp, Users, Calendar, Award } from "lucide-react";
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
      <div className="mb-12">
        <Card>
          <div className="p-8">
            <div className="flex items-start space-x-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-br from-stellarBlue to-stellarPurple rounded-full flex items-center justify-center">
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
                    <h1 className="text-4xl font-bold gradient-text mb-2">{user.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">Estudiante de Ingeniería en Sistemas</p>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-stellar-100 text-stellarBlue rounded-full text-sm font-medium">
                        {user.university}
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-stellarPurple rounded-full text-sm font-medium">
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
                  Apasionado por la tecnología blockchain y las finanzas descentralizadas. 
                  Participando activamente en el ecosistema Stellar para construir el futuro del ahorro universitario.
                </p>

                {/* Contact Info */}
                <div className="flex items-center space-x-8 mt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Miembro desde {new Date(user.memberSince).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{user.totalProjects} proyectos respaldados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Grid - 4 Columns */}
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
          icon={User}
        />
      </div>

      {/* My Projects Section - 2 Columns */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold gradient-text">Mis Proyectos</h2>
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
                <div className="w-20 h-20 bg-stellar-100 rounded-xl flex items-center justify-center">
                  <Star className="w-10 h-10 text-stellarBlue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Mi Stake: ${project.myStake}</span>
                      <span className="text-xs text-green-600">+12% este mes</span>
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
          <h2 className="text-2xl font-bold mb-6 gradient-text">Actividad Reciente</h2>
          <div className="space-y-6">
            {activities.slice(0, 4).map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-stellarBlue rounded-full flex items-center justify-center flex-shrink-0">
                  {activity.type === 'stake' && <TrendingUp className="w-5 h-5 text-white" />}
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
