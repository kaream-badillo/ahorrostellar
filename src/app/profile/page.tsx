"use client";

import { User, Star, TrendingUp, Users, FolderOpen, Award, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsCard from "@/components/ui/StatsCard";
import Badge from "@/components/ui/Badge";
import Layout from "@/components/layout/Layout";
import { useUserStats } from "@/hooks/useUserStats";
import { useProjects } from "@/hooks/useProjects";
import { getReputationBadge } from "@/lib/mockData";

export default function Profile() {
  const { userStats, additionalStats, activity } = useUserStats();
  const { myStakedProjects } = useProjects();

  const reputationBadge = getReputationBadge(userStats.reputation);

  return (
    <Layout>
      {/* Profile Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-24 h-24 bg-stellar-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Kaream Badillo</h1>
            <p className="text-xl text-gray-600 mb-4">Estudiante de Ingeniería Informática</p>
            <div className="flex items-center space-x-4">
              <Badge variant="info" size="md">
                <Award className="w-4 h-4 mr-2" />
                {reputationBadge.charAt(0).toUpperCase() + reputationBadge.slice(1)} Badge
              </Badge>
              <span className="text-sm text-gray-500">Miembro desde 2024</span>
            </div>
          </div>
          <div className="ml-auto">
            <Button variant="outline" size="lg">
              Editar Perfil
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <StatsCard
          title="Balance Total"
          value={`$${userStats.totalBalance.toLocaleString()}`}
          icon={User}
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
          trend={`${reputationBadge} Badge`}
          trendType="positive"
        />
        <StatsCard
          title="Recompensas"
          value={`$${userStats.totalRewards.toLocaleString()}`}
          icon={Award}
          trend="+$25 este mes"
          trendType="positive"
        />
      </div>

      {/* My Projects Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">Mis Proyectos</h2>
        <div className="grid grid-cols-2 gap-8">
          {myStakedProjects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-stellar-100 rounded-xl flex items-center justify-center">
                  <Star className="w-10 h-10 text-stellar-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progreso</span>
                      <span className="text-gray-900 font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-stellar-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Tu Stake: ${project.myStake}</span>
                      <span className="text-xs text-green-600">+15% este mes</span>
                    </div>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">Actividad Reciente</h2>
        <Card>
          <div className="space-y-4">
            {activity.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0">
                <div className="w-10 h-10 bg-stellar-100 rounded-full flex items-center justify-center">
                  {item.type === 'stake' && <TrendingUp className="w-5 h-5 text-stellar-500" />}
                  {item.type === 'reward' && <Award className="w-5 h-5 text-green-500" />}
                  {item.type === 'reputation_gained' && <Users className="w-5 h-5 text-purple-500" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  {item.amount && (
                    <p className="text-sm font-medium text-green-600">+${item.amount}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-3 gap-8">
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {additionalStats.activeStakesCount}
            </h3>
            <p className="text-gray-600">Stakes Activos</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ${additionalStats.totalRewards.toLocaleString()}
            </h3>
            <p className="text-gray-600">Total Recompensas</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FolderOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {userStats.totalProjects}
            </h3>
            <p className="text-gray-600">Proyectos Participados</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
