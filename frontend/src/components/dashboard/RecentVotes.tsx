"use client";

import Link from "next/link";
import { Target } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function RecentVotes() {
  const { state } = useApp();
  const { user, myStakedProjects } = state;

  if (!user || !myStakedProjects?.length) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Mis Votos Recientes</h2>
        <Link href="/projects">
          <Button variant="ghost">Ver Todos</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {myStakedProjects.slice(0, 2).map((project) => (
          <Card key={project.id}>
            <div className="flex items-start space-x-4 p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Votado: {project.myStake} XLM</span>
                    <span className="text-xs text-green-600">+{user.reputation} reputación</span>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
