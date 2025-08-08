// Datos simulados para el MVP
// TODO: Reemplazar con datos reales del backend

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  creator: string;
  totalStaked: number;
  myStake: number;
  backers: number;
  daysLeft: number;
  image: string;
  status: 'active' | 'completed' | 'ending';
  goal: number;
  progress: number;
  stakers: number;
}

export interface UserStats {
  totalBalance: number;
  activeStakes: number;
  reputation: number;
  totalProjects: number;
  totalRewards: number;
  rank: number;
}

export interface Stake {
  id: number;
  projectId: number;
  projectTitle: string;
  amount: number;
  date: string;
  status: 'active' | 'completed' | 'pending';
  reward?: number;
}

export interface Activity {
  id: number;
  type: 'stake' | 'reward' | 'project_created' | 'reputation_gained';
  title: string;
  description: string;
  date: string;
  amount?: number;
}

// Datos simulados de proyectos
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Certificaciones Web3 para Universitarios",
    description: "Plataforma de certificaciones blockchain reconocidas por empresas del sector, con cursos prácticos de Solidity, DeFi y Smart Contracts.",
    category: "Technology",
    creator: "Dr. García",
    totalStaked: 2500,
    myStake: 200,
    backers: 45,
    stakers: 45,
    daysLeft: 15,
    image: "blockchain",
    status: "active",
    goal: 5000,
    progress: 50,
  },
  {
    id: 2,
    title: "Fintech Startup Hub",
    description: "Centro de innovación financiera que conecta estudiantes con startups del sector fintech para proyectos de investigación y desarrollo.",
    category: "Social",
    creator: "María López",
    totalStaked: 1800,
    myStake: 150,
    backers: 32,
    stakers: 32,
    daysLeft: 8,
    image: "community",
    status: "active",
    goal: 3000,
    progress: 60,
  },
  {
    id: 3,
    title: "Mentoría Blockchain Avanzada",
    description: "Programa de mentoría especializada en blockchain donde expertos del sector guían a estudiantes en proyectos reales de DeFi y NFTs.",
    category: "Education",
    creator: "Carlos Ruiz",
    totalStaked: 3200,
    myStake: 0,
    backers: 67,
    stakers: 67,
    daysLeft: 22,
    image: "tutoring",
    status: "active",
    goal: 4000,
    progress: 80,
  },
  {
    id: 4,
    title: "Campus Verde: Energía Renovable",
    description: "Implementación de paneles solares y sistemas de energía renovable en el campus, con monitoreo blockchain de consumo energético.",
    category: "Environment",
    creator: "Ana Martínez",
    totalStaked: 1200,
    myStake: 100,
    backers: 28,
    stakers: 28,
    daysLeft: 5,
    image: "sustainability",
    status: "ending",
    goal: 2000,
    progress: 60,
  },
  {
    id: 5,
    title: "Laboratorio de IA y Blockchain",
    description: "Centro de investigación que combina inteligencia artificial con blockchain para desarrollar aplicaciones descentralizadas innovadoras.",
    category: "Technology",
    creator: "Prof. Rodríguez",
    totalStaked: 4500,
    myStake: 300,
    backers: 89,
    stakers: 89,
    daysLeft: 30,
    image: "ai-lab",
    status: "active",
    goal: 6000,
    progress: 75,
  },
  {
    id: 6,
    title: "Biblioteca Digital Web3",
    description: "Plataforma descentralizada de recursos educativos con certificación blockchain de autenticidad y propiedad intelectual.",
    category: "Education",
    creator: "Biblioteca Central",
    totalStaked: 2800,
    myStake: 0,
    backers: 156,
    stakers: 156,
    daysLeft: 12,
    image: "digital-library",
    status: "active",
    goal: 3500,
    progress: 80,
  },
];

// Datos simulados de estadísticas de usuario
export const mockUserStats: UserStats = {
  totalBalance: 1250,
  activeStakes: 450,
  reputation: 85,
  totalProjects: 4,
  totalRewards: 150,
  rank: 15,
};

// Datos simulados de stakes
export const mockStakes: Stake[] = [
  {
    id: 1,
    projectId: 1,
    projectTitle: "Proyecto Blockchain",
    amount: 200,
    date: "2025-08-05",
    status: "active",
  },
  {
    id: 2,
    projectId: 2,
    projectTitle: "Comunidad Estudiantil",
    amount: 150,
    date: "2025-08-03",
    status: "active",
  },
  {
    id: 3,
    projectId: 4,
    projectTitle: "Sostenibilidad Campus",
    amount: 100,
    date: "2025-08-01",
    status: "active",
  },
  {
    id: 4,
    projectId: 5,
    projectTitle: "Laboratorio de IA",
    amount: 300,
    date: "2025-07-28",
    status: "active",
  },
];

// Datos simulados de actividad
export const mockActivity: Activity[] = [
  {
    id: 1,
    type: "stake",
    title: "Stake en Proyecto Blockchain",
    description: "Hiciste un stake de $200 en el proyecto Blockchain",
    date: "2025-08-05",
    amount: 200,
  },
  {
    id: 2,
    type: "reward",
    title: "Recompensa ganada",
    description: "Ganaste $25 por tu participación en Comunidad Estudiantil",
    date: "2025-08-04",
    amount: 25,
  },
  {
    id: 3,
    type: "reputation_gained",
    title: "Reputación aumentada",
    description: "Tu reputación aumentó a 85 puntos",
    date: "2025-08-03",
  },
  {
    id: 4,
    type: "stake",
    title: "Stake en Sostenibilidad Campus",
    description: "Hiciste un stake de $100 en el proyecto Sostenibilidad",
    date: "2025-08-01",
    amount: 100,
  },
];

// Categorías de proyectos
export const projectCategories = [
  "Technology",
  "Education", 
  "Social",
  "Environment",
  "Health",
  "Arts",
  "Sports",
];

// Estados de proyectos
export const projectStatuses = {
  active: "Activo",
  completed: "Completado",
  ending: "Finalizando",
};


