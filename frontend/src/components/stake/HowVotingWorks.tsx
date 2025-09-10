"use client";
import { Shield } from "lucide-react";
import Card from "@/components/ui/Card";

export default function HowVotingWorks({ stakeDuration = 7 }: { stakeDuration?: number }) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">¿Cómo funciona?</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Bloqueo Temporal</h4>
              <p className="text-sm text-gray-600">
                Tu XLM se reserva en un contrato Soroban por {stakeDuration} días
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Voto Simbólico</h4>
              <p className="text-sm text-gray-600">
                Tu bloqueo actúa como respaldo visible para el proyecto seleccionado
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Recuperación + Recompensa</h4>
              <p className="text-sm text-gray-600">
                Recuperas tu XLM y posible recompensa si el proyecto triunfa
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
