"use client";

import React, { useState } from 'react';
import { useWallet } from '@/hooks/useWallet';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Award } from 'lucide-react';

export const StakingTest: React.FC = () => {
  const { isConnected, publicKey, createStaking } = useWallet();
  const [testResult, setTestResult] = useState<string>('');
  const [isTesting, setIsTesting] = useState(false);
  const [amount, setAmount] = useState(0);
  const [projectId, setProjectId] = useState('');

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
      const result = await createStaking(amount, projectId);
      
      setTestResult('✅ Transacción blockchain exitosa!');
      console.log('Blockchain result:', result);

      setTestResult('🎉 ¡Prueba completada exitosamente!\n\n✅ Transacción Stellar creada\n✅ Flujo de staking validado');

    } catch (error) {
      console.error('Test error:', error);
      setTestResult(`❌ Error en la prueba: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="p-6 bg-blue-50 border-blue-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Nuevo Stake - Sin Presión</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">
              Cuando estés listo, puedes hacer un stake para apoyar proyectos:
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Tu dinero queda seguro y protegido</li>
              <li>• Generas rentabilidad mientras ayudas</li>
              <li>• Construyes reputación en la comunidad Web3</li>
              <li>• Puedes retirar cuando quieras</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-500">Stake + Reputación</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad a stakear (USD)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proyecto a apoyar
            </label>
            <select
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Seleccionar proyecto...</option>
              <option value="1">Proyecto Blockchain Universitario</option>
              <option value="2">DeFi para Estudiantes</option>
              <option value="3">NFTs Educativos</option>
            </select>
          </div>
        </div>
        
        <Button
          onClick={runStakingTest}
          disabled={!isConnected || isTesting}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isTesting ? 'Procesando...' : 'Hacer Stake'}
        </Button>
      </div>
      
      {testResult && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium mb-2 text-green-800">Resultado:</h4>
          <pre className="text-sm whitespace-pre-wrap text-green-700">{testResult}</pre>
        </div>
      )}

      <div className="text-xs text-gray-500">
        <p><strong>Estado Wallet:</strong> {isConnected ? '✅ Conectada' : '❌ Desconectada'}</p>
        {publicKey && <p><strong>Address:</strong> {publicKey.slice(0, 8)}...{publicKey.slice(-8)}</p>}
      </div>
    </Card>
  );
};
