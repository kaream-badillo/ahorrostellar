"use client";

import Card from "@/components/ui/Card";

export default function HowVotingWorks() {
  return (
    <Card className="mb-8 bg-blue-50 border-blue-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600 text-sm font-bold">
            1
          </span>
          Cómo funciona tu voto simbólico
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            • <span className="font-medium">Bloqueas XLM temporalmente</span> – no se transfiere, solo se reserva
          </p>
          <p>
            • <span className="font-medium">Tu bloqueo es un voto visible</span> que respalda proyectos universitarios
          </p>
          <p>
            • <span className="font-medium">Construyes reputación pública</span> como votante temprano
          </p>
          <p>
            • <span className="font-medium">Recuperas XLM + posible recompensa</span> si el proyecto triunfa
          </p>
        </div>
      </div>
    </Card>
  );
}
