"use client";

import { useWallet } from "@/components/wallet/WalletProvider";
import { Wallet, Star, TrendingUp, Users, Home, FolderOpen, User, Settings, Bell, Search, Filter, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Projects() {
  const { wallet } = useWallet();

  const projects = [
    {
      id: 1,
      title: "Proyecto Blockchain",
      description: "Desarrollo de una aplicación descentralizada para la universidad que permitirá a los estudiantes gestionar sus credenciales académicas de forma segura.",
      category: "Technology",
      creator: "Dr. García",
      totalStaked: 2500,
      myStake: 200,
      backers: 45,
      daysLeft: 15,
      image: "blockchain",
      status: "active"
    },
    {
      id: 2,
      title: "Comunidad Estudiantil",
      description: "Plataforma para conectar estudiantes y compartir recursos académicos, facilitando la colaboración entre diferentes carreras.",
      category: "Social",
      creator: "María López",
      totalStaked: 1800,
      myStake: 150,
      backers: 32,
      daysLeft: 8,
      image: "community",
      status: "active"
    },
    {
      id: 3,
      title: "App de Tutorías",
      description: "Sistema de tutorías peer-to-peer que conecta estudiantes con mentores para mejorar el aprendizaje colaborativo.",
      category: "Education",
      creator: "Carlos Ruiz",
      totalStaked: 3200,
      myStake: 0,
      backers: 67,
      daysLeft: 22,
      image: "tutoring",
      status: "active"
    },
    {
      id: 4,
      title: "Sostenibilidad Campus",
      description: "Iniciativa para implementar prácticas sostenibles en el campus universitario, incluyendo reciclaje y energía renovable.",
      category: "Environment",
      creator: "Ana Martínez",
      totalStaked: 1200,
      myStake: 100,
      backers: 28,
      daysLeft: 5,
      image: "sustainability",
      status: "ending"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100 sticky top-0 z-50">
        <div className="container mx-auto max-w-screen-xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-stellar-500" />
              <h1 className="text-2xl font-bold gradient-text">AhorroStellar</h1>
            </div>
            <div className="flex items-center space-x-6">
              <button className="p-3 rounded-lg hover:bg-stellar-100 transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-stellar-100 shadow-sm">
                <div className="w-8 h-8 bg-stellar-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">K</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Kaream</span>
                  <span className="text-xs text-gray-500">Estudiante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout - Sidebar + Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 bg-white/80 backdrop-blur-sm border-r border-stellar-100 sticky top-16 h-screen overflow-y-auto">
          <nav className="p-8">
            <div className="space-y-3">
              <a href="/dashboard" className="flex items-center space-x-4 px-6 py-4 rounded-xl hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a href="/projects" className="flex items-center space-x-4 px-6 py-4 rounded-xl bg-stellar-100 text-stellar-700 font-medium shadow-sm">
                <FolderOpen className="w-5 h-5" />
                <span>Proyectos</span>
              </a>
              <a href="#" className="flex items-center space-x-4 px-6 py-4 rounded-xl hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <TrendingUp className="w-5 h-5" />
                <span>Mis Stakes</span>
              </a>
              <a href="#" className="flex items-center space-x-4 px-6 py-4 rounded-xl hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <User className="w-5 h-5" />
                <span>Mi Perfil</span>
              </a>
              <a href="#" className="flex items-center space-x-4 px-6 py-4 rounded-xl hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Configuración</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 pt-8 border-t border-stellar-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-4 px-6">Acciones Rápidas</h3>
              <div className="space-y-3">
                <Button size="sm" className="w-full justify-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear Proyecto
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-center">
                  <Wallet className="w-4 h-4 mr-2" />
                  Conectar Wallet
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-screen-lg mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4">Proyectos Disponibles</h1>
              <p className="text-xl text-gray-600">Descubre y respalda proyectos universitarios que merecen tu apoyo</p>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar proyectos..."
                    className="pl-10 pr-4 py-3 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellar-500 focus:border-transparent w-80"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Tecnología</Button>
                <Button variant="outline" size="sm">Educación</Button>
                <Button variant="outline" size="sm">Social</Button>
                <Button variant="outline" size="sm">Ambiente</Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-stellar-100 rounded-lg flex items-center justify-center">
                          <Star className="w-6 h-6 text-stellar-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                          <p className="text-sm text-gray-500">por {project.creator}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {project.status === 'active' ? 'Activo' : 'Finalizando'}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">{project.category}</span>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">${project.totalStaked}</p>
                        <p className="text-xs text-gray-500">Total Stakeado</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{project.backers}</p>
                        <p className="text-xs text-gray-500">Backers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{project.daysLeft}</p>
                        <p className="text-xs text-gray-500">Días Restantes</p>
                      </div>
                    </div>

                    {/* My Stake Info */}
                    {project.myStake > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-green-700">Tu Stake</p>
                            <p className="text-lg font-bold text-green-700">${project.myStake}</p>
                          </div>
                          <Button size="sm" variant="outline">Ver Detalles</Button>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          {project.myStake > 0 ? `Stakeado: $${project.myStake}` : 'No stakeado'}
                        </span>
                      </div>
                      <Button size="sm">
                        {project.myStake > 0 ? 'Aumentar Stake' : 'Hacer Stake'}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
