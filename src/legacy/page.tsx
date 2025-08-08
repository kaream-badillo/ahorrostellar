"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useApp } from "@/contexts/AppContext";
import { Wallet, Target } from "lucide-react";
import Link from "next/link";
import HowItWorks from "@/components/stake/HowItWorks";
import Benefits from "@/components/stake/Benefits";
import ProjectListMini from "@/components/stake/ProjectListMini";

export default function Stake() {
  const { state, makeStake } = useApp();
  const { wallet, projects, isLoading } = state;
  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);

  const handleStake = async () => {
    if (!selectedProject) return;
    await makeStake(selectedProject, stakeAmount);
  };

  if (!wallet.isConnected) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Conecta tu Wallet</h1>
          <p className="text-gray-600 mb-6">
            Necesitas conectar tu wallet Freighter para poder votar con tu ahorro.
          </p>
          <Link href="/">
            <Button size="lg">
              <Wallet className="w-5 h-5 mr-2" />
              Conectar Wallet
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vota con tu Ahorro</h1>
        <p className="text-lg text-gray-600">
          Elige un proyecto y bloquea XLM por 7 días como voto simbólico.
        </p>
      </div>

      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="p-6 text-sm text-gray-700 space-y-2">
          <p>✅ Tu XLM no se transfiere a terceros</p>
          <p>✅ Se desbloquea automáticamente al final del periodo</p>
          <p>✅ Contrato Soroban validado (testnet)</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de Stake */}
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Configura tu Voto</h2>

            {/* Select de Proyecto */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proyecto a respaldar
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Selecciona un proyecto</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Cantidad a bloquear */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto en XLM
              </label>
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(Number(e.target.value))}
                min="10"
                max="1000"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-1">
                Mínimo 10 XLM — se desbloquea en 7 días.
              </p>
            </div>

            {/* Botón de stake */}
            <Button
              onClick={handleStake}
              disabled={!selectedProject || isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Procesando...
                </>
              ) : (
                <>
                  <Target className="w-5 h-5 mr-2" />
                  Votar con {stakeAmount} XLM
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Paneles informativos */}
        <div className="space-y-6">
          <HowItWorks />
          <Benefits />
          <ProjectListMini />
        </div>
      </div>
    </Layout>
  );
}
