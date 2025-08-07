"use client";

import { useState } from "react";
import { Wallet, Star, TrendingUp, Shield, Target, Award, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";

export default function Stake() {
  const { state, makeStake } = useApp();
  const { wallet, projects, isLoading } = state;
  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);
  const [stakeDuration, setStakeDuration] = useState(7);

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vota con tu Ahorro</h1>
        <p className="text-lg text-gray-600">
          Bloquea temporalmente XLM como voto simbólico para respaldar proyectos universitarios
        </p>
      </div>

      {/* Security Info */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Tu ahorro está seguro</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>No se transfiere a terceros</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Se recupera automáticamente</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Contrato Soroban verificado</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stake Configuration */}
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Configura tu Voto</h2>
            
            {/* Project Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona un Proyecto
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Elige un proyecto para respaldar</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Stake Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad de XLM a Bloquear
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  min="10"
                  max="1000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  XLM
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Mínimo: 10 XLM • Máximo: 1000 XLM
              </p>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duración del Bloqueo
              </label>
              <select
                value={stakeDuration}
                onChange={(e) => setStakeDuration(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={7}>7 días (recomendado)</option>
                <option value={14}>14 días</option>
                <option value={30}>30 días</option>
              </select>
              <p className="text-sm text-gray-600 mt-1">
                Tu XLM se desbloqueará automáticamente al finalizar el período
              </p>
            </div>

            {/* Stake Button */}
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

        {/* Information Panel */}
        <div className="space-y-6">
          {/* How it Works */}
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">¿Cómo funciona?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bloqueo Temporal</h4>
                    <p className="text-sm text-gray-600">
                      Tu XLM se reserva en un contrato Soroban por {stakeDuration} días
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Voto Simbólico</h4>
                    <p className="text-sm text-gray-600">
                      Tu bloqueo actúa como respaldo visible para el proyecto seleccionado
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Recuperación + Recompensa</h4>
                    <p className="text-sm text-gray-600">
                      Recuperas tu XLM y posible recompensa si el proyecto triunfa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits */}
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Beneficios</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Sin riesgo de pérdida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Construyes reputación pública</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">Posible recompensa condicional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-700">Educación Web3 práctica</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Projects */}
          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Proyectos Disponibles</h3>
                <Link href="/projects">
                  <Button variant="ghost" size="sm">
                    Ver Todos
                  </Button>
                </Link>
              </div>
              <div className="space-y-3">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">{project.title}</h4>
                      <p className="text-xs text-gray-600">{project.stakers} votantes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-blue-600">${project.totalStaked.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">total respaldado</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">Procesando voto...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
