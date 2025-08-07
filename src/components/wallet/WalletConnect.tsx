"use client";

import React, { useState } from 'react';
import { Wallet, Star, Shield, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useWallet } from '@/hooks/useWallet';

interface WalletConnectProps {
  onClose?: () => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ onClose }) => {
  const { isConnected, publicKey, connectWallet, disconnectWallet } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectWallet();
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="max-w-md w-full mx-4">
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold gradient-text mb-2">
              {isConnected ? 'Wallet Conectada' : 'Conecta tu Wallet'}
            </h2>
            <p className="text-gray-600">
              {isConnected 
                ? 'Tu wallet está lista para participar en el ecosistema'
                : 'Conecta tu wallet para empezar a votar simbólicamente'
              }
            </p>
          </div>

          {!isConnected ? (
            <div className="space-y-4">
              {/* Benefits */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-blue-800">Beneficios de Conectar:</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Votar simbólicamente en proyectos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Construir reputación en la comunidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Participar de forma segura</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnect}
                disabled={isConnecting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Wallet className="w-5 h-5 mr-2" />
                {isConnecting ? 'Conectando...' : 'Conectar Wallet'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Connection Info */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-800">Conectado</span>
                </div>
                <p className="text-sm text-green-700">
                  Address: {publicKey?.slice(0, 8)}...{publicKey?.slice(-8)}
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleDisconnect}
                  variant="outline"
                  className="flex-1"
                >
                  Desconectar
                </Button>
                {onClose && (
                  <Button
                    onClick={onClose}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Continuar
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
