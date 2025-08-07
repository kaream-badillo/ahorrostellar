"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import QRCode from "@/components/qr/QRCode";
import Layout from "@/components/layout/Layout";
import { Wallet, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout showSidebar={false} showSearch={false}>
      {/* Hero Section - 2 Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
            <h2 className="text-2xl font-bold mb-6 gradient-text">Conecta tu Wallet</h2>
            <QRCode size={280} />
          </div>
        </div>
      </div>

      {/* Features Grid - 3 Columns by Default */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <Card>
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-10 h-10 text-stellar-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sin Riesgo</h3>
            <p className="text-gray-600 text-lg">Bloquea fondos temporalmente sin perder tu dinero</p>
          </div>
        </Card>

        <Card>
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-purple-500" />
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
    </Layout>
  );
}
