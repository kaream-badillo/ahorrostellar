"use client";

import { useState } from "react";
import { Target } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useApp } from "@/contexts/AppContext";

interface StakeFormProps {
  onStake: (projectId: string, amount: number) => Promise<void>;
  isLoading?: boolean;
}

export default function StakeForm({ onStake, isLoading = false }: StakeFormProps) {
  const { state } = useApp();
  const { projects } = state;

  const [selectedProject, setSelectedProject] = useState("");
  const [stakeAmount, setStakeAmount] = useState(50);

  const handleStake = async () => {
    if (!selectedProject || isLoading) return;
    await onStake(selectedProject, stakeAmount);
  };

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Configura tu voto simbólico</h2>

        {/* Selección de proyecto */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Proyecto a respaldar</label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Selecciona un proyecto</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        {/* Monto de XLM */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad a bloquear (XLM)</label>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(Number(e.target.value))}
            min={10}
            max={1000}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">Rango sugerido: 10 a 1000 XLM</p>
        </div>

        {/* Botón de stake */}
        <Button
          onClick={handleStake}
          disabled={!selectedProject || isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Procesando...
            </>
          ) : (
            <>
              <Target className="w-5 h-5 mr-2" />
              Votar con {stakeAmount} XLM
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
