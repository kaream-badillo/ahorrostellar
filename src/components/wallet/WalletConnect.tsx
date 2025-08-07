"use client";

import React, { useState } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/Button';

interface WalletConnectProps {
  onConnect?: (publicKey: string) => void;
  onDisconnect?: () => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ 
  onConnect, 
  onDisconnect 
}) => {
  const { 
    isConnected, 
    publicKey, 
    balance, 
    isLoading, 
    error, 
    connectWallet, 
    disconnectWallet,
    isFreighterInstalled 
  } = useWallet();

  const [showError, setShowError] = useState(false);

  const handleConnect = async () => {
    try {
      setShowError(false);
      const publicKey = await connectWallet();
      onConnect?.(publicKey);
    } catch (error) {
      setShowError(true);
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    onDisconnect?.();
  };

  const formatBalance = (balance: any) => {
    if (!balance) return '0 XLM';
    
    const xlmBalance = balance.find((b: any) => b.asset_type === 'native');
    return xlmBalance ? `${parseFloat(xlmBalance.balance).toFixed(2)} XLM` : '0 XLM';
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!isFreighterInstalled()) {
    return (
      <div className="text-center p-4">
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <h3 className="text-warning font-semibold mb-2">Freighter Wallet Required</h3>
          <p className="text-sm text-gray-600 mb-4">
            Para usar AhorroStellar, necesitas instalar la extensión Freighter.
          </p>
          <Button
            onClick={() => window.open('https://www.freighter.app/', '_blank')}
            className="bg-warning text-white hover:bg-warning/80"
          >
            Instalar Freighter
          </Button>
        </div>
      </div>
    );
  }

  if (isConnected && publicKey) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">
            {formatAddress(publicKey)}
          </div>
          <div className="text-xs text-gray-500">
            {formatBalance(balance)}
          </div>
        </div>
        <Button
          onClick={handleDisconnect}
          variant="outline"
          size="sm"
          disabled={isLoading}
        >
          {isLoading ? 'Desconectando...' : 'Desconectar'}
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Button
        onClick={handleConnect}
        disabled={isLoading}
        className="bg-primary text-white hover:bg-primary/80"
      >
        {isLoading ? 'Conectando...' : 'Conectar Wallet'}
      </Button>
      
      {showError && error && (
        <div className="mt-2 text-sm text-error">
          {error}
        </div>
      )}
    </div>
  );
};
