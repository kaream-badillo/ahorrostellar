"use client";

import { Search, Filter, Star, TrendingUp, Users, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Layout from "@/components/layout/Layout";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const { state, makeStake } = useApp();
  const { projects, isLoading } = state;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Blockchain");

  const categories = ["Blockchain", "DeFi", "NFTs", "Smart Contracts", "Web3", "DAO"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Blockchain" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStake = async (projectId: string) => {
    const amount = 100; // Default stake amount
    await makeStake(projectId, amount);
  };

  return (
    <Layout>
      {/* Header with Search and Filters */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold gradient-text">Explorar Proyectos Blockchain</h1>
          <Button size="lg">
            <Star className="w-5 h-5 mr-2" />
            Crear Proyecto Web3
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center space-x-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar proyectos blockchain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellarBlue focus:border-transparent"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-5 h-5 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Filter Pills - Solo Web3 */}
        <div className="flex items-center space-x-4 mt-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-xl transition-shadow">
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-stellar-100 rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-stellarBlue" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status === 'active' ? 'Activo' : 'Finalizando'}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stellarBlue">${project.totalStaked.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Total Stakeado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stellarPurple">{project.stakers}</div>
                  <div className="text-sm text-gray-500">Stakers</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progreso</span>
                  <span className="text-sm font-semibold text-stellarBlue">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-stellarBlue to-stellarPurple h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Finaliza en {project.daysLeft} días</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button 
                  className="flex-1"
                  onClick={() => handleStake(project.id)}
                  disabled={isLoading}
                >
                  {isLoading ? 'Procesando...' : 'Hacer Stake'}
                </Button>
                <Link href={`/projects/${project.id}`}>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron proyectos</h3>
          <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">Anterior</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="ghost" size="sm">2</Button>
          <Button variant="ghost" size="sm">3</Button>
          <Button variant="ghost" size="sm">Siguiente</Button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stellarBlue"></div>
            <span className="text-gray-700">Procesando stake...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
