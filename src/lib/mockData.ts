// Mock data for the MVP
// TODO: Replace with real backend data

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

// Mock project data
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Web3 Certifications for University Students",
    description: "Certification platform recognized by companies, with hands-on courses in Solidity, DeFi, and Smart Contracts.",
    category: "Technology",
    creator: "Dr. Garcia",
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
    description: "Financial innovation hub connecting students with fintech startups for research and development projects.",
    category: "Social",
    creator: "Maria Lopez",
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
    title: "Advanced Blockchain Mentorship",
    description: "Specialized mentorship program where industry experts guide students in real DeFi and NFT projects.",
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
    title: "Green Campus: Renewable Energy",
    description: "Solar panels and renewable energy systems on campus, with blockchain-based energy consumption monitoring.",
    category: "Environment",
    creator: "Ana Martinez",
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
    title: "AI & Blockchain Lab",
    description: "Research center combining AI and blockchain to develop innovative decentralized applications.",
    category: "Technology",
    creator: "Prof. Rodriguez",
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
    title: "Web3 Digital Library",
    description: "Decentralized platform of educational resources with blockchain certification of authenticity and intellectual property.",
    category: "Education",
    creator: "Central Library",
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

// Mock user stats
export const mockUserStats: UserStats = {
  totalBalance: 1250,
  activeStakes: 450,
  reputation: 85,
  totalProjects: 4,
  totalRewards: 150,
  rank: 15,
};

// Mock stakes
export const mockStakes: Stake[] = [
  {
    id: 1,
    projectId: 1,
    projectTitle: "Blockchain Project",
    amount: 200,
    date: "2025-08-05",
    status: "active",
  },
  {
    id: 2,
    projectId: 2,
    projectTitle: "Student Community",
    amount: 150,
    date: "2025-08-03",
    status: "active",
  },
  {
    id: 3,
    projectId: 4,
    projectTitle: "Campus Sustainability",
    amount: 100,
    date: "2025-08-01",
    status: "active",
  },
  {
    id: 4,
    projectId: 5,
    projectTitle: "AI Laboratory",
    amount: 300,
    date: "2025-07-28",
    status: "active",
  },
];

// Mock activity
export const mockActivity: Activity[] = [
  {
    id: 1,
    type: "stake",
    title: "Stake in Blockchain Project",
    description: "You staked $200 in the Blockchain project",
    date: "2025-08-05",
    amount: 200,
  },
  {
    id: 2,
    type: "reward",
    title: "Reward earned",
    description: "You earned $25 for your participation in Student Community",
    date: "2025-08-04",
    amount: 25,
  },
  {
    id: 3,
    type: "reputation_gained",
    title: "Reputation increased",
    description: "Your reputation increased to 85 points",
    date: "2025-08-03",
  },
  {
    id: 4,
    type: "stake",
    title: "Stake in Campus Sustainability",
    description: "You staked $100 in the Sustainability project",
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

// Project statuses
export const projectStatuses = {
  active: "Active",
  completed: "Completed",
  ending: "Ending",
};


