"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Wallet, Star, TrendingUp, Users, Zap, Award, Shield, Target } from "lucide-react";
import Link from "next/link";
import { useApp } from "@/contexts/AppContext";

export default function Home() {
  const { state, connectWallet } = useApp();
  const { wallet, isLoading } = state;

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AhorroStellar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/projects">
                <Button variant="outline" size="sm">
                  Ver Proyectos
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

      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              Vota con tu Ahorro
            </h1>
            <p className="text-2xl text-blue-600 font-semibold">
              Construye Reputación • Respalda Proyectos • Sin Riesgo
            </p>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Bloquea temporalmente XLM como voto simbólico para proyectos universitarios. 
            <span className="font-medium text-blue-600"> Sin pérdida de fondos</span>, 
            solo construyes reputación y posible recompensa si el proyecto triunfa.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/stake">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Zap className="w-5 h-5 mr-2" />
                Empezar a Votar
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                Explorar Proyectos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona el voto-ahorro simbólico?
          </h2>
          <p className="text-lg text-gray-600">
            Un proceso simple y seguro para estudiantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Bloquea tu Ahorro</h3>
            <p className="text-gray-600">
              Reserva temporalmente XLM en un contrato Soroban. No se transfiere, solo se bloquea por 7 días.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Vota por Proyectos</h3>
            <p className="text-gray-600">
              Tu ahorro bloqueado actúa como voto simbólico para respaldar proyectos que crees que merecen apoyo.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Gana Reputación</h3>
            <p className="text-gray-600">
              Si el proyecto triunfa, recibes recompensas simbólicas y reconocimiento público por tu visión temprana.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Beneficios del Voto-Ahorro Simbólico
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sin Riesgo</h3>
                <p className="text-gray-600">
                  Tu XLM nunca se transfiere a terceros. Solo se bloquea temporalmente y se recupera automáticamente.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reputación Pública</h3>
                <p className="text-gray-600">
                  Construye tu reputación como votante temprano. Tu historial de respaldos es visible y reconocido.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recompensas Condicionales</h3>
                <p className="text-gray-600">
                  Si el proyecto que respaldaste gana premios o inversión, puede activar recompensas para sus votantes tempranos.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educación Web3</h3>
                <p className="text-gray-600">
                  Aprende DeFi real sin riesgo. Experimenta con contratos Soroban y gobernanza simbólica.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para votar con tu ahorro?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Conecta tu wallet Freighter y comienza a construir tu reputación en el ecosistema Stellar.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/stake">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Zap className="w-5 h-5 mr-2" />
                  Empezar Ahora
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Conectando wallet...</span>
          </div>
        </div>
      )}
    </div>
  );
}
