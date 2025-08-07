"use client";

import { Search, Filter, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Layout from "@/components/layout/Layout";
import { useProjects } from "@/hooks/useProjects";
import { useUserStats } from "@/hooks/useUserStats";
import Link from "next/link";

export default function Projects() {
  const {
    projects,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
  } = useProjects();

  const { makeStake, isLoading } = useUserStats();

  const handleStake = async (projectId: number, amount: number) => {
    await makeStake(projectId, amount);
  };

  return (
    <Layout>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Proyectos Disponibles</h1>
        <p className="text-xl text-gray-600">Descubre y respalda proyectos universitarios que merecen tu apoyo</p>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellar-500 focus:border-transparent w-80"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-3 border border-stellar-100 rounded-lg focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
          >
            <option value="recent">Más Recientes</option>
            <option value="popular">Más Populares</option>
            <option value="ending">Finalizando Pronto</option>
            <option value="amount">Mayor Cantidad</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={selectedCategory === "" ? "primary" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("")}
          >
            Todos
          </Button>
          {categories.slice(0, 4).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-stellar-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-stellar-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500">por {project.creator}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Badge
                    variant={project.status === 'active' ? 'success' : 'warning'}
                    size="sm"
                  >
                    {project.status === 'active' ? 'Activo' : 'Finalizando'}
                  </Badge>
                  <span className="text-xs text-gray-500 mt-1">{project.category}</span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 leading-relaxed">{project.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progreso</span>
                  <span className="text-gray-900 font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-stellar-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">${project.totalStaked.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Total Stakeado</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{project.backers}</p>
                  <p className="text-xs text-gray-500">Backers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{project.daysLeft}</p>
                  <p className="text-xs text-gray-500">Días Restantes</p>
                </div>
              </div>

              {/* My Stake Info */}
              {project.myStake > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Tu Stake</p>
                      <p className="text-lg font-bold text-green-700">${project.myStake}</p>
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {project.myStake > 0 ? `Stakeado: $${project.myStake}` : 'No stakeado'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm" variant="outline">Ver Detalles</Button>
                  </Link>
                  <Button
                    size="sm"
                    onClick={() => handleStake(project.id, 100)}
                    disabled={isLoading}
                  >
                    {project.myStake > 0 ? 'Aumentar Stake' : 'Hacer Stake'}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron proyectos</h3>
          <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stellar-500"></div>
            <span className="text-gray-700">Procesando stake...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
