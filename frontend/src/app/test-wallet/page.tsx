"use client";

import { useApp } from "@/contexts/AppContext";
import { useWallet } from "@/hooks/useWallet";

export default function TestWallet() {
  const { state } = useApp();
  const walletHook = useWallet();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Wallet State</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h2 className="font-bold mb-2">AppContext State:</h2>
          <pre className="text-sm">{JSON.stringify(state.wallet, null, 2)}</pre>
        </div>
        
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="font-bold mb-2">useWallet Hook State:</h2>
          <pre className="text-sm">{JSON.stringify({
            isConnected: walletHook.isConnected,
            publicKey: walletHook.publicKey,
            balance: walletHook.balance,
            isLoading: walletHook.isLoading,
            error: walletHook.error
          }, null, 2)}</pre>
        </div>
        
        <div className="p-4 bg-yellow-100 rounded-lg">
          <h2 className="font-bold mb-2">Projects:</h2>
          <p>Count: {state.projects.length}</p>
          <pre className="text-sm">{JSON.stringify(state.projects.slice(0, 2), null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
