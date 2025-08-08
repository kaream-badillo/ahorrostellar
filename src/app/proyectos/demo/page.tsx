"use client";

import Layout from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowLeft, Users, TrendingUp, Award, Calendar, Target, Shield } from "lucide-react";
import Link from "next/link";

export default function ProjectDemo() {
  const project = {
    id: "demo",
    title: "Certificaciones Web3 para Universitarios",
    description: "Plataforma de certificaciones blockchain reconocidas por empresas del sector, con cursos prácticos de Solidity, DeFi y Smart Contracts.",
    category: "Technology",
    creator: "Dr. García",
    totalStaked: 2500,
    stakers: 45,
    daysLeft: 15,
    progress: 50,
    status: "active",
    targetAmount: 5000,
    myStake: 200,
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/stake">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Proyectos
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Total Respaldado</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">${project.totalStaked.toLocaleString()}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Votantes</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{project.stakers}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Bonus Proyectado</span>
              </div>
              <p className="text-2xl font-bold text-purple-600">Hasta 12%</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">Días Restantes</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">{project.daysLeft}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso del proyecto</span>
              <span>{project.progress}% completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Project */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre el Proyecto</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-700 mb-4">
                    Este proyecto busca revolucionar la forma en que los estudiantes universitarios 
                    acceden a la educación Web3, proporcionando certificaciones reconocidas y 
                    oportunidades de aprendizaje prácticas.
                  </p>
                  <p className="text-gray-700">
                    Con el respaldo de la comunidad, este proyecto puede expandirse a más 
                    universidades y crear un ecosistema de educación blockchain más accesible.
                  </p>
                </div>
              </div>
            </Card>

            {/* Team */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipo</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{project.creator.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{project.creator}</h3>
                      <p className="text-sm text-gray-600">Líder del Proyecto</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Equipo de desarrollo con experiencia en blockchain y educación tecnológica.
                  </p>
                </div>
              </div>
            </Card>

            {/* Roadmap */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Roadmap</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fase 1: Desarrollo</h3>
                      <p className="text-sm text-gray-600">Plataforma base y certificaciones iniciales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fase 2: Expansión</h3>
                      <p className="text-sm text-gray-600">Integración con más universidades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fase 3: Ecosistema</h3>
                      <p className="text-sm text-gray-600">Plataforma completa con múltiples cursos</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Estadísticas Rápidas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categoría</span>
                    <span className="font-semibold">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estado</span>
                    <span className="font-semibold text-green-600 capitalize">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Meta</span>
                    <span className="font-semibold">${project.targetAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mi Stake</span>
                    <span className="font-semibold text-blue-600">${project.myStake.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Beneficios del Stake</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Sin riesgo de pérdida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-700">Hasta 12% de bonus si gana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Construyes reputación</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-700">Educación Web3 práctica</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Button */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Te interesa?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Respalda este proyecto con tu ahorro y participa en el futuro de la educación Web3.
                </p>
                <Link href="/stake">
                  <Button className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Votar con mi Ahorro
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
