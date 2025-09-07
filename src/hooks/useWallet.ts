import { useState, useEffect } from 'react';
import { stellarService } from '@/lib/stellar';
import { ensureFunded } from '@/lib/friendbot';

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
    const hasFreighter = typeof window !== 'undefined' && (window as any).stellar;
    console.log('🔍 Checking Freighter installation:', hasFreighter);
    return hasFreighter;
  };

  // Connect to wallet
  const connectWallet = async () => {
    console.log('🔌 Starting wallet connection...');
    setWalletState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      if (!isFreighterInstalled()) {
        console.log('❌ Freighter not installed');
        // Show alert and redirect to Freighter installation
        alert("Necesitas instalar la wallet Freighter para usar esta función. Te redirigiremos a la página oficial.");
        window.open("https://freighter.app/", "_blank");
        throw new Error('Freighter wallet not found. Please install the Freighter extension.');
      }

      console.log('✅ Freighter found, requesting account...');
      const publicKey = await stellarService.connectWallet();
      console.log('✅ Account received:', publicKey);
      
      // Ensure account is funded (testnet only)
      await ensureFunded(publicKey);
      
      const balance = await stellarService.getBalance(publicKey);
      console.log('✅ Balance retrieved:', balance);

      setWalletState({
        isConnected: true,
        publicKey,
        balance,
        isLoading: false,
        error: null
      });

      // Store in localStorage for persistence
      localStorage.setItem('ahorrostellar_wallet', publicKey);
      console.log('💾 Wallet saved to localStorage');
      
      return publicKey;
    } catch (error) {
      console.error('❌ Wallet connection error:', error);
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
    const autoConnect = async () => {
      // Small delay to ensure everything is initialized
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log('🔍 Checking for saved wallet...');
      const savedWallet = localStorage.getItem('ahorrostellar_wallet');
      console.log('📦 Saved wallet:', savedWallet);
      
      if (savedWallet && isFreighterInstalled()) {
        console.log('✅ Freighter installed, attempting auto-connect...');
        try {
          await connectWallet();
          console.log('✅ Auto-connect successful');
        } catch (error) {
          console.warn('❌ Auto-connect failed:', error);
          // If auto-connect fails, clear the saved wallet
          localStorage.removeItem('ahorrostellar_wallet');
        }
      } else {
        console.log('❌ No saved wallet or Freighter not installed');
      }
    };
    
    autoConnect();
  }, []); // connectWallet is stable, so this is safe

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
