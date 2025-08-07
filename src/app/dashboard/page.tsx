"use client";

import { useWallet } from "@/components/wallet/WalletProvider";
import { Wallet, Star, TrendingUp, Users, Home, FolderOpen, User, Settings, Bell } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  const { wallet } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100">
        <div className="container mx-auto max-w-7xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-stellar-500" />
              <h1 className="text-2xl font-bold gradient-text">AhorroStellar</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-stellar-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-stellar-100">
                <div className="w-8 h-8 bg-stellar-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">K</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Kaream</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout - Sidebar + Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-sm border-r border-stellar-100">
          <nav className="p-6">
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-stellar-100 text-stellar-700 font-medium">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <FolderOpen className="w-5 h-5" />
                <span>Proyectos</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <TrendingUp className="w-5 h-5" />
                <span>Mis Stakes</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <User className="w-5 h-5" />
                <span>Mi Perfil</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stellar-50 text-gray-600 hover:text-stellar-700 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Configuración</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-2">¡Bienvenido de vuelta!</h1>
              <p className="text-gray-600 text-lg">Aquí tienes un resumen de tu actividad en AhorroStellar</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <Card padding="lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-stellar-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-6 h-6 text-stellar-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">$1,250</h3>
                  <p className="text-gray-600">Balance Total</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">$450</h3>
                  <p className="text-gray-600">Stakes Activos</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">85</h3>
                  <p className="text-gray-600">Reputación</p>
                </div>
              </Card>

              <Card padding="lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">12</h3>
                  <p className="text-gray-600">Proyectos</p>
                </div>
              </Card>
            </div>

            {/* Recent Projects Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-stellar-100 rounded-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-stellar-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Proyecto Blockchain</h3>
                    <p className="text-gray-600 mb-4">Desarrollo de una aplicación descentralizada para la universidad</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Stakeado: $200</span>
                      <Button size="sm">Ver Detalles</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Comunidad Estudiantil</h3>
                    <p className="text-gray-600 mb-4">Plataforma para conectar estudiantes y compartir recursos</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Stakeado: $150</span>
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
