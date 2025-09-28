"use client";

import { useApp } from "@/contexts/AppContext";
import Card from "@/components/ui/Card";
import {
  Target,
  Users,
  Award,
  Star,
  Wallet
} from "lucide-react";

export default function ActivityFeed() {
  const { state } = useApp();
  const { activities } = state;

  if (!activities?.length) return null;

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Actividad Reciente</h2>
        <div className="space-y-3">
          {activities.slice(0, 3).map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                {activity.type === "stake" && <Target className="w-4 h-4 text-white" />}
                {activity.type === "reputation_gained" && <Users className="w-4 h-4 text-white" />}
                {activity.type === "reward" && <Award className="w-4 h-4 text-white" />}
                {activity.type === "project_completed" && <Star className="w-4 h-4 text-white" />}
                {activity.type === "wallet_connected" && <Wallet className="w-4 h-4 text-white" />}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-900">{activity.title}</h4>
                <p className="text-xs text-gray-600">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-500">
                {new Date(activity.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
