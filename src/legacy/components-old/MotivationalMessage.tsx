"use client";

import { Lightbulb } from "lucide-react";
import Card from "@/components/ui/Card";

export default function MotivationalMessage() {
  return (
    <Card>
      <div className="p-6 flex items-start space-x-4">
        <div className="bg-yellow-500 text-white p-2 rounded-full">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Tu voto tiene impacto</h3>
          <p className="text-sm text-gray-700 mt-1">
            Al respaldar un proyecto con tus XLM, estás enviando una señal de confianza que
            puede influir en su éxito futuro. ¡Estás ayudando a construir el futuro con visión!
          </p>
        </div>
      </div>
    </Card>
  );
}
