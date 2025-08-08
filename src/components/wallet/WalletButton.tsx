"use client";

import React from 'react';
import { Wallet } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

export const WalletButton: React.FC = () => {
  const { state, connectWallet, disconnectWallet } = useApp();
  const { wallet } = state;

  // Check if Freighter is installed
  const isFreighterInstalled = typeof window !== 'undefined' && (window as any).stellar;

  const handleConnect = async () => {
    if (!isFreighterInstalled) {
      // Show alert and redirect to Freighter installation
      alert("Necesitas instalar la wallet Freighter para usar esta función. Te redirigiremos a la página oficial.");
      window.open("https://freighter.app/", "_blank");
      return;
    }

    try {
      await connectWallet();
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
  };

  if (!wallet.isConnected) {
    return (
      <button 
        onClick={handleConnect}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center space-x-2"
      >
        <Wallet className="w-4 h-4" />
        <span>Conectar Freighter</span>
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-stellar-100 shadow-sm">
             <div className="w-8 h-8 bg-stellarBlue rounded-full flex items-center justify-center">
         <span className="text-white font-medium text-sm">
           {wallet.publicKey ? wallet.publicKey.slice(0, 2).toUpperCase() : 'U'}
         </span>
       </div>
       <div className="flex flex-col">
         <span className="text-sm font-medium text-gray-700">
           {wallet.publicKey ? `${wallet.publicKey.slice(0, 6)}...${wallet.publicKey.slice(-4)}` : 'Usuario'}
         </span>
         <span className="text-xs text-gray-500">Estudiante</span>
       </div>
      <button 
        onClick={handleDisconnect}
        className="text-xs text-red-600 hover:text-red-700"
      >
        Salir
      </button>
    </div>
  );
};
