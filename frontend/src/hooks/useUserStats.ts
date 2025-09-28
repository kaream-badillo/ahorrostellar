import { useState, useEffect } from 'react';
import { mockUserStats, mockStakes, mockActivity, UserStats, Stake, Activity } from '@/lib/utils/mockData';

export function useUserStats() {
  const [userStats, setUserStats] = useState<UserStats>(mockUserStats);
  const [stakes, setStakes] = useState<Stake[]>(mockStakes);
  const [activity, setActivity] = useState<Activity[]>(mockActivity);
  const [isLoading, setIsLoading] = useState(false);

  // Simular carga de datos
  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    loadUserData();
  }, []);

  // Función para simular hacer un stake
  const makeStake = async (projectId: number, amount: number) => {
    setIsLoading(true);
    
    // Simular delay de transacción
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Actualizar estadísticas
    setUserStats(prev => ({
      ...prev,
      totalBalance: prev.totalBalance - amount,
      activeStakes: prev.activeStakes + amount,
    }));

    // Agregar nuevo stake
    const newStake: Stake = {
      id: stakes.length + 1,
      projectId,
      projectTitle: "Nuevo Proyecto", // TODO: Obtener del proyecto real
      amount,
      date: new Date().toISOString().split('T')[0],
      status: 'active',
    };

    setStakes(prev => [...prev, newStake]);

    // Agregar actividad
    const newActivity: Activity = {
      id: activity.length + 1,
      type: 'stake',
      title: `Stake de $${amount}`,
      description: `Hiciste un stake de $${amount} en un proyecto`,
      date: new Date().toISOString().split('T')[0],
      amount,
    };

    setActivity(prev => [newActivity, ...prev]);
    setIsLoading(false);
  };

  // Función para simular recibir recompensa
  const receiveReward = async (projectId: number, amount: number) => {
    setIsLoading(true);
    
    // Simular delay de transacción
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Actualizar estadísticas
    setUserStats(prev => ({
      ...prev,
      totalBalance: prev.totalBalance + amount,
      totalRewards: prev.totalRewards + amount,
      reputation: prev.reputation + 5, // Aumentar reputación
    }));

    // Agregar actividad
    const newActivity: Activity = {
      id: activity.length + 1,
      type: 'reward',
      title: `Recompensa ganada`,
      description: `Ganaste $${amount} por tu participación`,
      date: new Date().toISOString().split('T')[0],
      amount,
    };

    setActivity(prev => [newActivity, ...prev]);
    setIsLoading(false);
  };

  // Calcular estadísticas adicionales
  const additionalStats = {
    totalStaked: stakes.reduce((sum, stake) => sum + stake.amount, 0),
    averageStake: stakes.length > 0 ? stakes.reduce((sum, stake) => sum + stake.amount, 0) / stakes.length : 0,
    activeStakesCount: stakes.filter(stake => stake.status === 'active').length,
    completedStakesCount: stakes.filter(stake => stake.status === 'completed').length,
    totalRewards: activity
      .filter(act => act.type === 'reward')
      .reduce((sum, act) => sum + (act.amount || 0), 0),
  };

  return {
    userStats,
    stakes,
    activity,
    additionalStats,
    isLoading,
    makeStake,
    receiveReward,
  };
}
