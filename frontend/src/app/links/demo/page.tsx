"use client";

import { useApp } from "@/contexts/AppContext";
import Layout from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Users, TrendingUp, Calendar, Target } from "lucide-react";
import Link from "next/link";

export default function ProjectDemo() {
  const { state } = useApp();
  const { projects } = state;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all available blockchain projects and choose which ones to support with your USDC staking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium">{project.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Creator</span>
                  <span className="font-medium">{project.creator}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Goal</span>
                  <span className="font-medium">${(project.goal || 0).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{project.progress || 0}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Backers</span>
                  <span className="font-medium">{project.backers || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Days Left</span>
                  <span className="font-medium">{project.daysLeft || 0}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href={`/proyectos/${project.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Link href="/stake" className="flex-1">
                  <Button className="w-full">
                    Stake USDC
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/stake">
            <Button size="lg">
              Start Staking
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
