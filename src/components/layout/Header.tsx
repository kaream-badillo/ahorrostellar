"use client";

import { Star, Bell, Search, Wallet } from "lucide-react";
import { useWallet } from "@/components/wallet/WalletProvider";
import Button from "@/components/ui/Button";

interface HeaderProps {
  showSearch?: boolean;
  showNotifications?: boolean;
}

export default function Header({ showSearch = true, showNotifications = true }: HeaderProps) {
  const { wallet, connect, disconnect, isLoading } = useWallet();

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100 sticky top-0 z-50">
      <div className="container mx-auto max-w-screen-xl px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Star className="w-8 h-8 text-stellar-500" />
            <h1 className="text-2xl font-bold gradient-text">AhorroStellar</h1>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar proyectos..."
                  className="w-full pl-10 pr-4 py-2 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            {showNotifications && (
              <button className="p-3 rounded-lg hover:bg-stellar-100 transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            )}

            {/* User Profile or Wallet Connect */}
            {wallet.isConnected ? (
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-stellar-100 shadow-sm">
                <div className="w-8 h-8 bg-stellar-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">K</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Kaream</span>
                  <span className="text-xs text-gray-500">Estudiante</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={disconnect}
                  className="ml-2"
                >
                  Desconectar
                </Button>
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={connect}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Wallet className="w-4 h-4 mr-2" />
                )}
                Conectar Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
