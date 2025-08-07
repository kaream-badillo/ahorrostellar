"use client";

import { Home, FolderOpen, TrendingUp, User, Settings, Plus, Wallet } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const pathname = usePathname();

  const navigationItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/projects", icon: FolderOpen, label: "Proyectos" },
    { href: "/stakes", icon: TrendingUp, label: "Mis Stakes" },
    { href: "/profile", icon: User, label: "Mi Perfil" },
    { href: "/settings", icon: Settings, label: "Configuración" },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className={`w-72 bg-white/80 backdrop-blur-sm border-r border-stellar-100 sticky top-16 h-screen overflow-y-auto ${className}`}>
      <nav className="p-8">
        {/* Navigation Menu */}
        <div className="space-y-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-colors ${
                  active
                    ? "bg-stellar-100 text-stellar-700 font-medium shadow-sm"
                    : "hover:bg-stellar-50 text-gray-600 hover:text-stellar-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
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
  );
}
