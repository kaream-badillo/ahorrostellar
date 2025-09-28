"use client";

import { useState, useEffect } from "react";
import { Search, Filter, SortAsc, Tag, Calendar, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/cards/Card";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

// Mock data for search results
const mockProjects = [
  {
    id: "1",
    title: "AI Learning Platform for Students",
    description: "An interactive platform that uses AI to personalize learning experiences for university students",
    category: "technology",
    university: "usach",
    fundingGoal: 15000,
    currentFunding: 8500,
    progress: 57,
    deadline: "2024-12-31",
    supporters: 23,
    tags: ["AI", "Education", "Machine Learning"]
  },
  {
    id: "2",
    title: "Sustainable Campus Initiative",
    description: "A comprehensive program to make our campus more environmentally friendly",
    category: "environment",
    university: "uchile",
    fundingGoal: 12000,
    currentFunding: 4200,
    progress: 35,
    deadline: "2024-11-15",
    supporters: 18,
    tags: ["Sustainability", "Environment", "Campus"]
  },
  {
    id: "3",
    title: "Mental Health Support App",
    description: "A mobile application providing mental health resources and peer support for students",
    category: "health",
    university: "puc",
    fundingGoal: 20000,
    currentFunding: 15600,
    progress: 78,
    deadline: "2024-10-30",
    supporters: 45,
    tags: ["Mental Health", "Mobile App", "Wellness"]
  }
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [results, setResults] = useState(mockProjects);

  const categories = [
    { value: "", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "environment", label: "Environment" },
    { value: "social", label: "Social Impact" },
    { value: "research", label: "Research" }
  ];

  const sortOptions = [
    { value: "relevance", label: "Most Relevant" },
    { value: "funding", label: "Most Funded" },
    { value: "deadline", label: "Ending Soon" },
    { value: "supporters", label: "Most Popular" }
  ];

  useEffect(() => {
    // Filter and sort results based on search criteria
    let filtered = mockProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "funding":
          return b.currentFunding - a.currentFunding;
        case "supporters":
          return b.supporters - a.supporters;
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        default:
          return 0; // relevance - keep original order
      }
    });

    setResults(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Projects</h1>
          <p className="text-gray-600">Find and support projects that align with your interests</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects, tags, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Filter className="w-4 h-4" />
                <span>{results.length} projects found</span>
              </div>
              {searchTerm && (
                <div className="flex items-center space-x-1">
                  <span>Searching for: </span>
                  <span className="font-medium">"{searchTerm}"</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Search Results */}
        <div className="space-y-6">
          {results.length > 0 ? (
            results.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <Link href={`/links/${project.id}`} className="hover:text-blue-600">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500 mb-1">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.university.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <div>
                        <div className="text-sm text-gray-500">Funding</div>
                        <div className="font-semibold">
                          ${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600 font-bold">%</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Progress</div>
                        <div className="font-semibold">{project.progress}%</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-purple-600 font-bold">👥</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Supporters</div>
                        <div className="font-semibold">{project.supporters}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <div>
                        <div className="text-sm text-gray-500">Deadline</div>
                        <div className="font-semibold">
                          {new Date(project.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/links/${project.id}`}>
                      <Button>
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/stake?project=${project.id}`}>
                      <Button variant="outline">
                        Vote & Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card>
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find more projects
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSortBy("relevance");
                }}>
                  Clear Filters
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
