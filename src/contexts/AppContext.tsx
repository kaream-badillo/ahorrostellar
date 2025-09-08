"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { useAttestation, useUser } from '@/hooks/useApi';
import { stellarService } from '@/lib/stellar';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  university: string;
  reputation: number;
  reputationLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  totalBalance: number;
  activeStakes: number;
  totalProjects: number;
  totalRewards: number;
  memberSince: string;
}

interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  balance: any | null;
  isLoading: boolean;
  error: string | null;
}

interface Project {
  id: string;
  title: string;
  description: string;
  creator: string;
  category: string;
  totalStaked: number;
  targetAmount: number;
  progress: number;
  stakers: number;
  daysLeft: number;
  status: 'active' | 'funded' | 'completed' | 'cancelled';
  myStake: number;
  image?: string;
  tags: string[];
}

interface Activity {
  id: string;
  type: 'stake' | 'reward' | 'reputation_gained' | 'project_completed' | 'wallet_connected';
  title: string;
  description: string;
  amount?: number;
  date: string;
  projectId?: string;
}

interface AppState {
  user: User | null;
  wallet: WalletState;
  projects: Project[];
  myStakedProjects: Project[];
  activities: Activity[];
  notifications: number;
  isLoading: boolean;
  currentPage: string;
}

interface AppContextType {
  state: AppState;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  makeStake: (projectId: string, amount: number) => Promise<void>;
  updateUserProfile: (updates: Partial<User>) => void;
  addActivity: (activity: Omit<Activity, 'id' | 'date'>) => void;
  setCurrentPage: (page: string) => void;
  clearNotifications: () => void;
}

// Mock Data
const mockUser: User = {
  id: '1',
  name: 'Kaream Badillo',
  email: 'kaream@university.edu',
  avatar: 'KB',
  university: 'Universidad Nacional',
  reputation: 85,
  reputationLevel: 'Bronze',
  totalBalance: 1250,
  activeStakes: 450,
  totalProjects: 4,
  totalRewards: 150,
  memberSince: '2025-01-15',
};

import { mockProjects } from '@/lib/mockData';

const realProjects: Project[] = mockProjects.map(project => ({
  id: project.id.toString(),
  title: project.title,
  description: project.description,
  category: project.category,
  creator: project.creator,
  totalStaked: project.totalStaked,
  targetAmount: project.goal,
  progress: project.progress,
  stakers: project.stakers,
  daysLeft: project.daysLeft,
  status: project.status === 'ending' ? 'active' : project.status,
  myStake: project.myStake,
  image: project.image,
  tags: [project.category.toLowerCase()],
}));


const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'stake',
    title: 'Nuevo stake realizado',
    description: 'Stakeaste $500 en "Blockchain Education Platform"',
    amount: 500,
    date: '2025-01-15T10:30:00Z',
    projectId: '1',
  },
  {
    id: '2',
    type: 'reputation_gained',
    title: 'Reputación aumentada',
    description: 'Ganaste 50 puntos de reputación por tu participación',
    amount: 50,
    date: '2025-01-14T15:45:00Z',
  },
  {
    id: '3',
    type: 'reward',
    title: 'Recompensa recibida',
    description: 'Recibiste $25 por tu participación en "Fintech Startup Hub"',
    amount: 25,
    date: '2025-01-13T09:20:00Z',
    projectId: '2',
  },
  {
    id: '4',
    type: 'project_completed',
    title: 'Proyecto completado',
    description: 'El proyecto "Blockchain Education" alcanzó su meta',
    date: '2025-01-10T14:15:00Z',
    projectId: '1',
  },
];

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    user: mockUser,
    wallet: {
      isConnected: false,
      publicKey: null,
      balance: null,
      isLoading: false,
      error: null,
    },
    projects: realProjects,
    myStakedProjects: realProjects.filter(p => p.myStake > 0),
    activities: mockActivities,
    notifications: 3,
    isLoading: false,
    currentPage: '/',
  });

  // Use the useWallet hook to get real wallet state
  const walletHook = useWallet();

  // Sync wallet state from useWallet hook
  useEffect(() => {
    console.log('🔄 AppContext: Syncing wallet state from useWallet hook');
    console.log('📊 useWallet state:', {
      isConnected: walletHook.isConnected,
      publicKey: walletHook.publicKey,
      balance: walletHook.balance,
      isLoading: walletHook.isLoading,
      error: walletHook.error
    });
    
    setState(prev => ({
      ...prev,
      wallet: {
        isConnected: walletHook.isConnected,
        publicKey: walletHook.publicKey,
        balance: walletHook.balance,
        isLoading: walletHook.isLoading,
        error: walletHook.error,
      },
    }));
  }, [walletHook.isConnected, walletHook.publicKey, walletHook.balance, walletHook.isLoading, walletHook.error]);

  // Connect Wallet
  const connectWallet = async () => {
    // En modo demo, simular conexión exitosa sin llamar a Freighter
    if (process.env.NEXT_PUBLIC_DEV_WALLET_MOCK === 'true' || 
        process.env.NODE_ENV === 'development') {
      console.log('Demo mode: Simulating successful wallet connection');
      setState(prev => ({
        ...prev,
        wallet: {
          isConnected: true,
          publicKey: "GDEMO1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          balance: { USDC: 1000, XLM: 500 },
          isLoading: false,
          error: null,
        },
      }));
      return;
    }
    
    try {
      await walletHook.connectWallet();
    } catch (error) {
      console.error('Wallet connection error:', error);
      // Fallback para modo demo si no está configurado
      console.log('Demo mode: Simulating successful wallet connection');
      setState(prev => ({
        ...prev,
        wallet: {
          isConnected: true,
          publicKey: "GDEMO1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          balance: { USDC: 1000, XLM: 500 },
          isLoading: false,
          error: null,
        },
      }));
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    walletHook.disconnectWallet();
  };

  // Make Stake
  const makeStake = async (projectId: string, amount: number) => {
    // En modo demo, no requerir wallet conectada
    if (!state.wallet.isConnected && !state.wallet.publicKey) {
      console.log('Demo mode: Simulating stake without wallet connection');
    }

    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Create blockchain transaction with error handling
      let transactionResult = null;
      try {
        const transactionXDR = await stellarService.createStakingTransaction(amount, projectId);
        transactionResult = await stellarService.signAndSubmitTransaction(transactionXDR);
      } catch (stellarError) {
        console.error('Stellar transaction error:', stellarError);
        // Continue with mock transaction for UI purposes
        transactionResult = { hash: `mock_${Date.now()}` };
      }
      
      // Update project statistics
      const updatedProjects = state.projects.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              totalStaked: project.totalStaked + amount,
              progress: Math.min(100, ((project.totalStaked + amount) / project.targetAmount) * 100),
              stakers: project.stakers + 1,
              myStake: project.myStake + amount,
            }
          : project
      );

      // Update user balance (solo si hay usuario)
      const updatedUser = state.user ? {
        ...state.user,
        totalBalance: Math.max(0, state.user.totalBalance - amount),
        activeStakes: state.user.activeStakes + amount,
        totalProjects: state.user.totalProjects + 1, // Incrementar proyectos respaldados
      } : null;

      setState(prev => ({
        ...prev,
        projects: updatedProjects,
        myStakedProjects: updatedProjects.filter(p => p.myStake > 0),
        user: updatedUser,
        isLoading: false,
      }));

      // Add activity
      const project = state.projects.find(p => p.id === projectId);
      addActivity({
        type: 'stake',
        title: 'Nuevo stake realizado',
        description: `Stakeaste $${amount.toFixed(2)} en "${project?.title}"`,
        amount,
        projectId,
      });

      console.log(`✅ Stake simulado: $${amount.toFixed(2)} para proyecto ${projectId}`);
    } catch (error) {
      console.error('Staking error:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      // Don't throw error, just log it
      console.warn('Staking failed but UI continues:', error);
    }
  };

  // Update User Profile
  const updateUserProfile = (updates: Partial<User>) => {
    if (state.user) {
      setState(prev => ({
        ...prev,
        user: { ...prev.user!, ...updates },
      }));
    }
  };

  // Add Activity
  const addActivity = (activity: Omit<Activity, 'id' | 'date'>) => {
    const newActivity: Activity = {
      ...activity,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };

    setState(prev => ({
      ...prev,
      activities: [newActivity, ...prev.activities],
      notifications: prev.notifications + 1,
    }));
  };

  // Set Current Page
  const setCurrentPage = (page: string) => {
    setState(prev => ({ ...prev, currentPage: page }));
  };

  // Clear Notifications
  const clearNotifications = () => {
    setState(prev => ({ ...prev, notifications: 0 }));
  };

  const value: AppContextType = {
    state,
    connectWallet,
    disconnectWallet,
    makeStake,
    updateUserProfile,
    addActivity,
    setCurrentPage,
    clearNotifications,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook to use AppContext
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
