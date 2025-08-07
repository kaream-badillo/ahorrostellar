"use client";

import { Home, FolderOpen, User, TrendingUp, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/contexts/AppContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { state, disconnectWallet } = useApp();
  const { user, wallet } = state;

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Proyectos", href: "/projects", icon: FolderOpen },
    { name: "Perfil", href: "/profile", icon: User },
    { name: "Estadísticas", href: "/stats", icon: TrendingUp },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    disconnectWallet();
    // In a real app, you would also clear user session
  };

  return (
    <aside className="w-72 bg-white/80 backdrop-blur-sm border-r border-stellar-100 sticky top-16 h-screen overflow-y-auto hidden lg:block">
      <div className="p-6">
        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-stellar-100 text-stellar-700 font-medium shadow-sm"
                    : "hover:bg-stellar-50 text-gray-600 hover:text-stellar-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Resumen Rápido</h3>
          
          <div className="bg-stellar-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Balance Total</span>
              <span className="text-sm font-semibold text-stellarBlue">
                ${user?.totalBalance.toLocaleString() || '0'}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Stakes Activos</span>
              <span className="text-sm font-semibold text-green-600">
                {state.myStakedProjects.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Reputación</span>
              <span className="text-sm font-semibold text-purple-600">
                {user?.reputationLevel || 'Bronze'}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Acciones Rápidas</h3>
          
          <Link
            href="/projects"
            className="flex items-center space-x-3 px-4 py-3 bg-stellarBlue text-white rounded-lg hover:bg-stellar-600 transition-colors"
          >
            <FolderOpen className="w-5 h-5" />
            <span>Nuevo Stake</span>
          </Link>
          
          <Link
            href="/profile"
            className="flex items-center space-x-3 px-4 py-3 border border-stellar-100 text-gray-700 rounded-lg hover:bg-stellar-50 transition-colors"
          >
            <User className="w-5 h-5" />
            <span>Editar Perfil</span>
          </Link>
        </div>

        {/* Wallet Status */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Estado de Wallet</h3>
          
          <div className={`px-4 py-3 rounded-lg border ${
            wallet.isConnected 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                wallet.isConnected ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm font-medium">
                {wallet.isConnected ? 'Conectado' : 'Desconectado'}
              </span>
            </div>
            {wallet.isConnected && (
              <div className="mt-2">
                <p className="text-xs text-gray-600 truncate">
                  {wallet.address}
                </p>
                <p className="text-xs text-gray-600">
                  Balance: ${wallet.balance.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-stellar-100 pt-6">
          <div className="space-y-2">
            <Link
              href="/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Configuración</span>
            </Link>
            
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
