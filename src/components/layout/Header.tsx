"use client";

import { Search, Bell } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/contexts/AppContext";
import { WalletData } from "@/components/molecules/wallet-data";
import Image from "next/image";

interface HeaderProps {
  showSearch?: boolean;
}

export default function Header({ showSearch = true }: HeaderProps) {
  const { state, clearNotifications } = useApp();
  const { user, notifications } = state;

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/favicon.png" 
              alt="Stellar Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold gradient-text">AhorroStellar</span>
          </Link>

          {/* Search Bar */}
          {showSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, users..."
                  className="w-full pl-10 pr-4 py-2 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellarBlue focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-3 rounded-lg hover:bg-stellar-100 transition-colors relative"
              onClick={clearNotifications}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Wallet Connect Button */}
            <WalletData />
          </div>
        </div>
      </div>
    </header>
  );
}
