"use client";

import { useState } from "react";
import { Wallet, Star, Shield, Target, Users, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";

export default function Register() {
  const { state, connectWallet } = useApp();
  const { wallet, isLoading } = state;
  const [step, setStep] = useState(1);

  const handleConnectWallet = async () => {
    await connectWallet();
    setStep(2);
  };

  const handleCompleteRegistration = () => {
    setStep(3);
  };

  if (wallet.isConnected && step === 1) {
    setStep(2);
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Únete a AhorroStellar</h1>
          <p className="text-lg text-gray-600">
            Conecta tu wallet y comienza a votar con tu ahorro simbólico
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step > 1 ? <CheckCircle className="w-6 h-6" /> : '1'}
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step > 2 ? <CheckCircle className="w-6 h-6" /> : '2'}
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step > 3 ? <CheckCircle className="w-6 h-6" /> : '3'}
            </div>
          </div>
        </div>

        {/* Step 1: Connect Wallet */}
        {step === 1 && (
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conecta tu Wallet</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Necesitas conectar tu wallet Freighter para poder participar en el voto simbólico. 
                Tu ahorro se bloqueará temporalmente como respaldo visible.
              </p>
              <Button size="lg" onClick={handleConnectWallet} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Conectando...
                  </>
                ) : (
                  <>
                    <Wallet className="w-5 h-5 mr-2" />
                    Conectar Wallet Freighter
                  </>
                )}
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Complete Profile */}
        {step === 2 && (
          <Card>
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Wallet Conectada!</h2>
                <p className="text-gray-600 mb-6">
                  Ahora completa tu perfil para comenzar a votar simbólicamente
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Universidad
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu universidad"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carrera
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu carrera o especialidad"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Año de Estudio
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona tu año</option>
                    <option value="1">1er Año</option>
                    <option value="2">2do Año</option>
                    <option value="3">3er Año</option>
                    <option value="4">4to Año</option>
                    <option value="5">5to Año</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" onClick={handleCompleteRegistration}>
                  Completar Registro
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Welcome */}
        {step === 3 && (
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Bienvenido a AhorroStellar!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Ya estás listo para comenzar a votar simbólicamente. Tu ahorro tiene el poder de respaldar proyectos universitarios.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Sin Riesgo</h3>
                  <p className="text-sm text-gray-600">Tu XLM se bloquea temporalmente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Voto Simbólico</h3>
                  <p className="text-sm text-gray-600">Respaldas proyectos que crees</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Reputación</h3>
                  <p className="text-sm text-gray-600">Construyes reconocimiento público</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Link href="/stake">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Target className="w-5 h-5 mr-2" />
                    Hacer Mi Primer Voto
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg">
                    Ir al Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}

        {/* Security Info */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">Tu seguridad es prioridad</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Tu XLM nunca se transfiere</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Se recupera automáticamente</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Contratos Soroban verificados</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
