"use client";

import React, { useState } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { useInteraction } from '@/hooks/useApi';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const StakingTest: React.FC = () => {
  const { isConnected, publicKey, createStaking } = useWallet();
  const { recordInteraction, loading: apiLoading } = useInteraction();
  const [testResult, setTestResult] = useState<string>('');
  const [isTesting, setIsTesting] = useState(false);

  const runStakingTest = async () => {
    if (!isConnected || !publicKey) {
      setTestResult('❌ Error: Wallet no conectada');
      return;
    }

    setIsTesting(true);
    setTestResult('🔄 Iniciando prueba de staking...');

    try {
      // Step 1: Create blockchain transaction
      setTestResult('📝 Creando transacción en Stellar...');
      const result = await createStaking(100, 'test-project-1');
      
      setTestResult('✅ Transacción blockchain exitosa!');
      console.log('Blockchain result:', result);

      // Step 2: Record interaction in backend
      setTestResult('💾 Registrando interacción en backend...');
      await recordInteraction({
        userId: publicKey,
        projectId: 'test-project-1',
        interactionType: 'stake',
        amount: 100,
        blockchainTxId: result.hash || 'test-tx-id'
      });

      setTestResult('🎉 ¡Prueba completada exitosamente!\n\n✅ Transacción Stellar creada\n✅ Interacción registrada en backend\n✅ Flujo completo validado');

    } catch (error) {
      console.error('Test error:', error);
      setTestResult(`❌ Error en la prueba: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">🧪 Prueba de Staking Completo</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">
              Esta prueba valida el flujo completo:
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Conexión con wallet Stellar</li>
              <li>• Creación de transacción onchain</li>
              <li>• Registro en backend</li>
              <li>• Validación de respuesta</li>
            </ul>
          </div>
          
          <Button
            onClick={runStakingTest}
            disabled={!isConnected || isTesting}
            className="bg-primary text-white"
          >
            {isTesting ? 'Probando...' : 'Ejecutar Prueba'}
          </Button>
        </div>

        {testResult && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Resultado:</h4>
            <pre className="text-sm whitespace-pre-wrap">{testResult}</pre>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <p><strong>Estado Wallet:</strong> {isConnected ? '✅ Conectada' : '❌ Desconectada'}</p>
          {publicKey && <p><strong>Address:</strong> {publicKey.slice(0, 8)}...{publicKey.slice(-8)}</p>}
        </div>
      </div>
    </Card>
  );
};
