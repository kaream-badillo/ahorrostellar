"use client";

import Card from "@/components/ui/Card";
import { Target, Star, Award } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export default function VotingProgress() {
  const { state } = useApp();
  const { user } = state;
  if (!user) return null;

  {/* ⚠️ Dummy – Datos simulados para presentación visual */}
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Tu Progreso como Votante</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nivel de reputación */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-1">Nivel {user.reputationLevel}</h3>
            <p className="text-sm text-gray-600">
              Votante{" "}
              {Number(user.reputationLevel) === 1
                ? "Novato"
                : Number(user.reputationLevel) === 2
                ? "Intermedio"
                : "Experto"}
            </p>
          </div>

          {/* Proyectos respaldados */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-1">{user.totalProjects} Proyectos</h3>
            <p className="text-sm text-gray-600">Que has elegido respaldar</p>
          </div>

          {/* Recompensas ganadas */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-1">+{user.totalRewards}</h3>
            <p className="text-sm text-gray-600">Reconocimientos ganados</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
