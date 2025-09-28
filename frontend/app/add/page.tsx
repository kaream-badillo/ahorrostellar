"use client";

import { useState } from "react";
import { Plus, Target, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/cards/Card";
import Layout from "@/components/layout/Layout";

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    university: "",
    fundingGoal: "",
    deadline: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate project creation
    setTimeout(() => {
      setIsLoading(false);
      alert("Project created successfully! Redirecting to dashboard...");
      window.location.href = '/dashboard';
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Project</h1>
          <p className="text-gray-600">Submit a university project for community voting</p>
        </div>

        <Card>
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your project and its impact"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="environment">Environment</option>
                    <option value="social">Social</option>
                    <option value="research">Research</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                    University
                  </label>
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select university</option>
                    <option value="usach">Universidad de Santiago de Chile</option>
                    <option value="uchile">Universidad de Chile</option>
                    <option value="puc">Pontificia Universidad Católica</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Goal (USDC)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      id="fundingGoal"
                      name="fundingGoal"
                      value={formData.fundingGoal}
                      onChange={handleChange}
                      required
                      min="100"
                      max="100000"
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="flex-1"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Project...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 mr-2" />
                      Create Project
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button"
                  variant="ghost"
                  onClick={() => window.history.back()}
                  className="flex-1"
                  size="lg"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Card>

        <div className="mt-8">
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-800">How Project Voting Works</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Students can vote with their USDC savings</li>
                <li>• Projects with more votes get priority visibility</li>
                <li>• Successful projects may receive external funding</li>
                <li>• Voters earn reputation points for good choices</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
