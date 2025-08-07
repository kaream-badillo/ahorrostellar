"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Wallet, Star, TrendingUp, Users, Zap, Award } from "lucide-react";
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
      {/* Header Web3 */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-stellar-100 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-stellarBlue" />
              <span className="text-2xl font-bold gradient-text">AhorroStellar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/projects">
                <Button variant="outline" size="sm">
                  Crear Proyecto
                </Button>
              </Link>
              <Button 
                variant={wallet.isConnected ? "outline" : "primary"} 
                size="sm"
                onClick={handleConnectWallet}
                disabled={isLoading}
              >
                <Wallet className="w-4 h-4 mr-2" />
                {wallet.isConnected ? 'Wallet Conectada' : 'Conectar Wallet'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Web3 - Gamificado */}
      <section className="max-w-screen-xl mx-auto px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold gradient-text leading-tight">
              Tu ahorro construye Web3
            </h1>
            <p className="text-2xl text-stellarBlue font-semibold">
              Sin riesgo • Con reputación • Posibles beneficios
            </p>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Participa en el ecosistema Stellar sin riesgo. 
            Mientras ahorras, generas una pequeña rentabilidad. 
            Bloquea temporalmente parte de tu ahorro y apoya proyectos universitarios blockchain que merecen tu respaldo.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-stellarBlue hover:bg-stellarBlue/90">
                <Zap className="w-5 h-5 mr-2" />
                Explorar Dashboard
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                Ver Proyectos Web3
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios Web3 - Gamificados */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            ¿Por qué AhorroStellar?
          </h2>
          <p className="text-lg text-gray-600">
            Una plataforma Web3 educativa donde tu compromiso se convierte en reputación y posibles beneficios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-stellarBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Staking Sin Riesgo</h3>
              <p className="text-gray-600">Tu ahorro queda bloqueado temporalmente, no perdido. Siempre recuperas tu dinero.</p>
            </div>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-stellarPurple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reputación Web3</h3>
              <p className="text-gray-600">Gana visibilidad y prestigio por tu compromiso visionario en la comunidad.</p>
            </div>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beneficios Reales</h3>
              <p className="text-gray-600">Si el proyecto que respaldas triunfa, recibes recompensas proporcionales.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Gamificado */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <Card variant="gradient" className="text-center p-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¡Únete al futuro Web3!
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Tu ahorro ya está apoyando una idea Web3. ¡Eres parte del futuro de tu universidad!
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-stellarBlue hover:bg-gray-100">
                  <Zap className="w-5 h-5 mr-2" />
                  Comenzar Ahora
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stellarBlue">
                  Ver Proyectos
                </Button>
              </Link>
            </div>
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
