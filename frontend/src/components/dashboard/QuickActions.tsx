"use client";

import { useRouter } from "next/navigation";
import { Rocket, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function QuickActions() {
  const router = useRouter();

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Acciones Rápidas</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            onClick={() => router.push("/stake")}
            className="flex items-center gap-2 w-full md:w-auto"
            size="lg"
          >
            <Rocket className="w-5 h-5" />
            Votar por Proyecto
          </Button>
          <Button
            onClick={() => router.push("/projects")}
            variant="outline"
            className="flex items-center gap-2 w-full md:w-auto"
            size="lg"
          >
            <Plus className="w-5 h-5" />
            Ver Proyectos
          </Button>

        </div>
      </div>
    </Card>
  );
}
