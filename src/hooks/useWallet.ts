import { useState, useEffect } from 'react';
import { stellarService } from '@/lib/stellar';

export interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  balance: any | null;
  isLoading: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    publicKey: null,
    balance: null,
    isLoading: false,
    error: null
  });

  // Check if Freighter is installed
  const isFreighterInstalled = () => {
    return typeof window !== 'undefined' && (window as any).stellar;
  };

  // Connect to wallet
  const connectWallet = async () => {
    setWalletState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      if (!isFreighterInstalled()) {
        throw new Error('Freighter wallet not found. Please install the Freighter extension.');
      }

      const publicKey = await stellarService.connectWallet();
      const balance = await stellarService.getBalance(publicKey);

      setWalletState({
        isConnected: true,
        publicKey,
        balance,
        isLoading: false,
        error: null
      });

      // Store in localStorage for persistence
      localStorage.setItem('ahorrostellar_wallet', publicKey);
      
      return publicKey;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to connect wallet';
      setWalletState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWalletState({
      isConnected: false,
      publicKey: null,
      balance: null,
      isLoading: false,
      error: null
    });
    localStorage.removeItem('ahorrostellar_wallet');
  };

  // Create staking transaction
  const createStaking = async (amount: number, projectId: string) => {
    if (!walletState.isConnected) {
      throw new Error('Wallet not connected');
    }

    setWalletState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const transactionXDR = await stellarService.createStakingTransaction(amount, projectId);
      const result = await stellarService.signAndSubmitTransaction(transactionXDR);
      
      // Update balance after transaction
      if (walletState.publicKey) {
        const newBalance = await stellarService.getBalance(walletState.publicKey);
        setWalletState(prev => ({ ...prev, balance: newBalance, isLoading: false }));
      }

      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to create staking transaction';
      setWalletState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  };

  // Issue reputation token
  const issueReputation = async (amount: number, recipient: string) => {
    if (!walletState.isConnected) {
      throw new Error('Wallet not connected');
    }

    setWalletState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const transactionXDR = await stellarService.issueReputationToken(amount, recipient);
      const result = await stellarService.signAndSubmitTransaction(transactionXDR);
      
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to issue reputation token';
      setWalletState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));
      throw error;
    }
  };

  // Get transaction history
  const getTransactionHistory = async () => {
    if (!walletState.publicKey) {
      return [];
    }

    try {
      return await stellarService.getTransactionHistory(walletState.publicKey);
    } catch (error) {
      console.error('Error getting transaction history:', error);
      return [];
    }
  };

  // Auto-connect on mount if wallet was previously connected
  useEffect(() => {
    const savedWallet = localStorage.getItem('ahorrostellar_wallet');
    if (savedWallet && isFreighterInstalled()) {
      connectWallet().catch(() => {
        // If auto-connect fails, clear the saved wallet
        localStorage.removeItem('ahorrostellar_wallet');
      });
    }
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
    createStaking,
    issueReputation,
    getTransactionHistory,
    isFreighterInstalled
  };
};
