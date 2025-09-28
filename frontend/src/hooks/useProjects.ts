import { useState, useMemo } from 'react';
import { mockProjects, Project, projectCategories } from '@/lib/utils/mockData';

export function useProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'ending' | 'amount'>('recent');

  // Filtrar y ordenar proyectos
  const filteredProjects = useMemo(() => {
    let filtered = [...mockProjects];

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.creator.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Ordenar proyectos
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.backers - a.backers);
        break;
      case 'ending':
        filtered.sort((a, b) => a.daysLeft - b.daysLeft);
        break;
      case 'amount':
        filtered.sort((a, b) => b.totalStaked - a.totalStaked);
        break;
      case 'recent':
      default:
        // Mantener orden original (más recientes primero)
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Obtener proyectos donde el usuario tiene stakes
  const myStakedProjects = useMemo(() => {
    return mockProjects.filter(project => project.myStake > 0);
  }, []);

  // Obtener proyectos recomendados (donde no tiene stakes)
  const recommendedProjects = useMemo(() => {
    return mockProjects.filter(project => project.myStake === 0);
  }, []);

  // Obtener estadísticas de proyectos
  const projectStats = useMemo(() => {
    const totalProjects = mockProjects.length;
    const activeProjects = mockProjects.filter(p => p.status === 'active').length;
    const totalStaked = mockProjects.reduce((sum, p) => sum + p.totalStaked, 0);
    const totalBackers = mockProjects.reduce((sum, p) => sum + p.backers, 0);

    return {
      totalProjects,
      activeProjects,
      totalStaked,
      totalBackers,
    };
  }, []);

  return {
    projects: filteredProjects,
    myStakedProjects,
    recommendedProjects,
    projectStats,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories: projectCategories,
  };
}
