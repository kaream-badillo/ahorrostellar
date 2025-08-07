"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import QRPlaceholder from "@/components/ui/QRPlaceholder";
import { Wallet, TrendingUp, Users, Star } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/contexts/AppContext";

export default function Home() {
  const { state, connectWallet } = useApp();
  const { wallet, isLoading } = state;

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-stellarBlue" />
              <span className="text-2xl font-bold gradient-text">AhorroStellar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="ghost" size="sm">
                  Proyectos
                </Button>
              </Link>
              <Button 
                variant={wallet.isConnected ? "outline" : "primary"} 
                size="sm"
                onClick={handleConnectWallet}
                disabled={isLoading}
              >
                <Wallet className="w-4 h-4 mr-2" />
                {wallet.isConnected ? 'Conectado' : 'Conectar Wallet'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - 2 Column Layout */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold gradient-text leading-tight">
              Tu ahorro construye el futuro Web3
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Participa en el ecosistema Stellar sin riesgo. Bloquea fondos y respalda proyectos universitarios que merecen tu apoyo.
            </p>
            <div className="flex space-x-4">
              <Link href="/dashboard">
                <Button size="lg">
                  <Wallet className="w-5 h-5 mr-2" />
                  Explorar Dashboard
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  Ver Proyectos
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 gradient-text">
                {wallet.isConnected ? 'Wallet Conectada' : 'Conecta tu Wallet'}
              </h2>
              <QRPlaceholder size={280} />
              {wallet.isConnected && (
                <p className="text-sm text-green-600 mt-4">
                  ✅ Conectado a Stellar Testnet
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 3 Column Grid */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            ¿Por qué AhorroStellar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una plataforma diseñada para estudiantes que quieren participar en el ecosistema Web3 de forma segura y educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-10 h-10 text-stellarBlue" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sin Riesgo</h3>
              <p className="text-gray-600 text-lg">Bloquea fondos temporalmente sin perder tu dinero</p>
            </div>
          </Card>

          <Card>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-stellarPurple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Reputación</h3>
              <p className="text-gray-600 text-lg">Gana visibilidad y prestigio en la comunidad</p>
            </div>
          </Card>

          <Card>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Comunidad</h3>
              <p className="text-gray-600 text-lg">Conecta con otros estudiantes y proyectos</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <Card variant="gradient" className="text-center p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a la comunidad de estudiantes que están construyendo el futuro del ahorro Web3.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-stellarBlue hover:bg-gray-100">
                Comenzar Ahora
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stellarBlue">
                Explorar Proyectos
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stellarBlue"></div>
            <span className="text-gray-700">Conectando wallet...</span>
          </div>
        </div>
      )}
    </div>
  );
}
