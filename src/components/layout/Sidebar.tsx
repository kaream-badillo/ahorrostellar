"use client";

import { Home, FolderOpen, LogOut, Target, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/contexts/AppContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { state, disconnectWallet } = useApp();
  const { user, wallet } = state;

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Voto-Ahorro", href: "/stake", icon: Target },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    disconnectWallet();
    // In a real app, you would also clear user session
  };

  return (
    <aside className="w-72 bg-white/80 backdrop-blur-sm border-r border-gray-200 sticky top-16 h-screen overflow-y-auto hidden lg:block">
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
                    ? "bg-blue-100 text-blue-700 font-medium shadow-sm"
                    : "hover:bg-blue-50 text-gray-600 hover:text-blue-700"
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
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">USDC Bloqueados</span>
              <span className="text-sm font-semibold text-blue-600">
                {user?.activeStakes || '0'} USDC
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Proyectos Respaldados</span>
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

        {/* Security Info */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Seguridad</h3>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Tu ahorro está seguro</span>
            </div>
            <div className="space-y-1 text-xs text-green-600">
              <p>• USDC se bloquea por 7 días</p>
              <p>• Se recupera automáticamente</p>
              <p>• Sin riesgo de pérdida</p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-gray-200 pt-6">
          <div className="space-y-2">
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
