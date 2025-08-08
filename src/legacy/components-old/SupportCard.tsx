"use client";

import Card from "@/components/ui/Card";

export default function SupportCard() {
  return (
    <Card className="bg-green-50 border-green-200">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-lg">💚</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Soporte Disponible</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Comunidad universitaria activa</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Tutoriales de voto simbólico</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Soporte técnico 24/7</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
