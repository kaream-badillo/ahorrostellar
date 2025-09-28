"use client";

import { useState } from "react";
import { Wallet, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/cards/Card";
import { useFreighter } from "@/hooks/useFreighter";

export default function LoginPage() {
  const { isInstalled, isConnected, publicKey, connect, disconnect } = useFreighter();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      await connect();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to AhorroStellar</h1>
            <p className="text-gray-600">Connect your wallet to start saving with purpose</p>
          </div>

          {!isInstalled ? (
            <div className="text-center">
              <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <Wallet className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-orange-800 mb-2">Install Freighter Wallet</h3>
                <p className="text-sm text-orange-700 mb-4">
                  You need Freighter Wallet to connect to AhorroStellar
                </p>
                <a 
                  href="https://freighter.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Install Freighter
                </a>
              </div>
            </div>
          ) : isConnected ? (
            <div className="text-center">
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Wallet className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800 mb-2">Wallet Connected</h3>
                <p className="text-sm text-green-700 mb-2">
                  {publicKey ? `${publicKey.slice(0, 8)}...${publicKey.slice(-8)}` : 'Connected'}
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="w-full"
                >
                  Go to Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={disconnect}
                  className="w-full"
                >
                  Disconnect Wallet
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button 
                onClick={handleConnect}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Freighter Wallet
                  </>
                )}
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  By connecting, you agree to our terms of service
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
