"use client";

import React from 'react';
import { Wallet } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useFreighter } from '@/hooks/useFreighter';

export const WalletButton: React.FC = () => {
  const { state, connectWallet, disconnectWallet } = useApp();
  const { wallet } = state;
  const { isInstalled, isConnected, publicKey, isLoading, connect, disconnect } = useFreighter();

  const handleConnect = async () => {
    if (!isInstalled) {
      // Show alert and redirect to Freighter installation
      alert("Necesitas instalar la wallet Freighter para usar esta función. Te redirigiremos a la página oficial.");
      window.open("https://freighter.app/", "_blank");
      return;
    }

    try {
      const freighterPublicKey = await connect();
      // Also update the app context
      await connectWallet();
    } catch (error) {
      console.error('Connection error:', error);
      alert('Error conectando Freighter. Asegúrate de que la extensión esté desbloqueada.');
    }
  };

  const handleDisconnect = () => {
    disconnect();
    disconnectWallet();
  };

  if (!wallet.isConnected || !isConnected) {
    return (
      <button 
        onClick={handleConnect}
        disabled={isLoading}
        className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center space-x-2 ${
          isLoading 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : isInstalled 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-orange-600 text-white hover:bg-orange-700'
        }`}
      >
        <Wallet className="w-4 h-4" />
        <span>
          {isLoading 
            ? 'Conectando...' 
            : isInstalled 
              ? 'Conectar Freighter' 
              : 'Instalar Freighter'
          }
        </span>
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
