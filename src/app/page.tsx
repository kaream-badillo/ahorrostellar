"use client";

import { TrendingUp, Shield, Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout showSidebar={false}>
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          🌟 Ahorra sin riesgo, vota con propósito y gana con impacto
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Una app DeFi educativa para estudiantes, construida con Stellar + Soroban.
          </p>
          
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transforma tus ahorros temporales en USDC en respaldo simbólico para proyectos que te motivan.
            Recupera siempre tu dinero. Gana reputación y recompensas reales si tu proyecto gana.
          </p>
          
          <Link href="/stake">
            <Button size="lg" className="text-lg px-8 py-4">
              🌟 Comenzar ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué AhorroStellar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sin Riesgo</h3>
              <p className="text-gray-600">
                Tu USDC se bloquea temporalmente pero nunca se pierde. 
                Recuperas siempre tu dinero al finalizar el período.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Con Propósito</h3>
              <p className="text-gray-600">
                Vota simbólicamente por proyectos universitarios que te interesan.
                Construye reputación y gana recompensas si tu proyecto gana.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educativo</h3>
              <p className="text-gray-600">
                Aprende DeFi de forma práctica y segura. 
                Experimenta con blockchain sin riesgo real.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Cómo Funciona?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elige un Proyecto</h3>
              <p className="text-gray-600 text-sm">
                Explora proyectos universitarios y elige cuál quieres respaldar
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bloquea USDC</h3>
              <p className="text-gray-600 text-sm">
                Conecta Freighter y bloquea temporalmente tu USDC por 7 días
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gana Recompensas</h3>
              <p className="text-gray-600 text-sm">
                Recupera tu dinero + bonus si tu proyecto gana financiamiento
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Únete a la revolución del ahorro con propósito. 
            Sin riesgo, con impacto real.
          </p>
          <Link href="/stake">
            <Button size="lg" className="text-lg px-8 py-4">
              Comenzar a Votar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            Desarrollado para el Stellar LATAM Ideathon 2025 · Sin riesgo · 100% educativo
          </p>
        </div>
      </div>
    </Layout>
  );
}
