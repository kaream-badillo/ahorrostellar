"use client";

import { useWallet } from "@/components/wallet/WalletProvider";
import { Wallet, Star, TrendingUp, Users, Home, FolderOpen, User, Settings, Bell, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  const { wallet } = useWallet();

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
              <a href="#" className="flex items-center space-x-4 px-6 py-4 rounded-xl bg-stellar-100 text-stellar-700 font-medium shadow-sm">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-4 px-6 py-4 rounded-xl hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
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
            {/* Welcome Section */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold gradient-text mb-4">¡Bienvenido de vuelta!</h1>
              <p className="text-xl text-gray-600">Aquí tienes un resumen de tu actividad en AhorroStellar</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-8 mb-12">
              <Card padding="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-stellar-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Wallet className="w-8 h-8 text-stellar-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">$1,250</h3>
                  <p className="text-gray-600 font-medium">Balance Total</p>
                  <p className="text-sm text-green-600 mt-2">+$150 este mes</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">$450</h3>
                  <p className="text-gray-600 font-medium">Stakes Activos</p>
                  <p className="text-sm text-purple-600 mt-2">3 proyectos</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">85</h3>
                  <p className="text-gray-600 font-medium">Reputación</p>
                  <p className="text-sm text-green-600 mt-2">Bronze Badge</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FolderOpen className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">12</h3>
                  <p className="text-gray-600 font-medium">Proyectos</p>
                  <p className="text-sm text-orange-600 mt-2">2 activos</p>
                </div>
              </Card>
            </div>

            {/* Recent Projects Grid */}
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-stellar-100 rounded-xl flex items-center justify-center">
                    <Star className="w-10 h-10 text-stellar-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">Proyecto Blockchain</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Desarrollo de una aplicación descentralizada para la universidad que permitirá a los estudiantes gestionar sus credenciales académicas de forma segura.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Stakeado: $200</span>
                        <span className="text-xs text-green-600">+15% este mes</span>
                      </div>
                      <Button size="sm">Ver Detalles</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-10 h-10 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">Comunidad Estudiantil</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Plataforma para conectar estudiantes y compartir recursos académicos, facilitando la colaboración entre diferentes carreras.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Stakeado: $150</span>
                        <span className="text-xs text-purple-600">+8% este mes</span>
                      </div>
                      <Button size="sm">Ver Detalles</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
