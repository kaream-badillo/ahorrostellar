"use client";

import { useState } from "react";
import { Tag, TrendingUp, Users, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/cards/Card";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const categories = [
  {
    id: "technology",
    name: "Technology",
    description: "Innovation in software, hardware, and digital solutions",
    icon: "💻",
    projectsCount: 12,
    totalFunding: 45000,
    topProject: "AI Learning Platform"
  },
  {
    id: "education",
    name: "Education",
    description: "Educational tools, platforms, and learning initiatives",
    icon: "📚",
    projectsCount: 8,
    totalFunding: 32000,
    topProject: "Virtual Lab Simulator"
  },
  {
    id: "health",
    name: "Health",
    description: "Healthcare innovations and medical research projects",
    icon: "🏥",
    projectsCount: 6,
    totalFunding: 28000,
    topProject: "Mental Health App"
  },
  {
    id: "environment",
    name: "Environment",
    description: "Sustainability, climate action, and environmental protection",
    icon: "🌱",
    projectsCount: 9,
    totalFunding: 38000,
    topProject: "Carbon Footprint Tracker"
  },
  {
    id: "social",
    name: "Social Impact",
    description: "Community development and social justice initiatives",
    icon: "🤝",
    projectsCount: 5,
    totalFunding: 22000,
    topProject: "Community Food Bank"
  },
  {
    id: "research",
    name: "Research",
    description: "Scientific research and academic studies",
    icon: "🔬",
    projectsCount: 7,
    totalFunding: 35000,
    topProject: "Quantum Computing Study"
  }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Categories</h1>
          <p className="text-gray-600">Explore projects by category and find what interests you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{category.projectsCount}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">${category.totalFunding.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Total Funding</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <strong>Top Project:</strong> {category.topProject}
                </div>

                <Button 
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/links?category=${category.id}`;
                  }}
                >
                  View Projects
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800">Active Projects</div>
                    <div className="text-sm text-blue-600">
                      {categories.find(c => c.id === selectedCategory)?.projectsCount} projects seeking funding
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800">Total Raised</div>
                    <div className="text-sm text-green-600">
                      ${categories.find(c => c.id === selectedCategory)?.totalFunding.toLocaleString()} USDC
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800">Community</div>
                    <div className="text-sm text-purple-600">
                      Active student voters
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <Button 
                  onClick={() => window.location.href = `/links?category=${selectedCategory}`}
                  className="flex-1"
                >
                  Browse {categories.find(c => c.id === selectedCategory)?.name} Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start Voting?</h3>
              <p className="text-gray-600 mb-4">
                Connect your wallet and start supporting projects that matter to you
              </p>
              <div className="flex space-x-3 justify-center">
                <Link href="/stake">
                  <Button>
                    Start Voting
                  </Button>
                </Link>
                <Link href="/add">
                  <Button variant="outline">
                    Submit Project
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
