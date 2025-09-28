"use client";

import { useParams } from "next/navigation";
import { useApp } from "@/contexts/AppContext";
import Layout from "@/components/layout/Layout";
import Card from "@/components/cards/Card";
import Button from "@/components/ui/Button";
import { ArrowLeft, Users, TrendingUp, Award, Calendar, Target, Shield } from "lucide-react";
import Link from "next/link";

export default function ProjectDetails() {
  const params = useParams();
  const { state } = useApp();
  const { projects } = state;
  
  const projectId = params.id as string;
  const project = projects.find(p => p.id.toString() === projectId);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/proyectos/demo">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Per-project tailored copy (EN) to avoid generic Spanish leftovers
  const projectExtras: Record<string, {about1: string; about2: string}> = {
    '1': {
      about1: 'This certification platform helps students gain industry-recognized credentials with hands-on tracks in Solidity, DeFi, and Smart Contracts.',
      about2: 'Backed by the community, it aims to partner with universities and accelerate Web3 career readiness across LATAM.'
    },
    '2': {
      about1: 'The hub connects students with fintech startups for research and product experiments, bridging academic talent with real industry needs.',
      about2: 'Support will expand startup collaborations, internships, and proof-of-concept launches with measurable outcomes.'
    },
    '3': {
      about1: 'Advanced mentorship pairs students with blockchain experts to build real DeFi/NFT projects with production-grade practices.',
      about2: 'With community backing, the program can scale mentor pools, cohorts, and project showcases.'
    },
    '4': {
      about1: 'Green Campus deploys solar panels and renewable monitoring with on-chain transparency of energy metrics.',
      about2: 'Funding will expand installations and student-led sustainability research initiatives.'
    },
    '5': {
      about1: 'The AI & Blockchain Lab explores decentralized AI, data integrity, and on-chain automation with practical student projects.',
      about2: 'Support enables more compute resources, datasets, and cross-university collaboration.'
    },
    '6': {
      about1: 'The Web3 Digital Library provides authenticated educational resources with on-chain provenance and open access.',
      about2: 'Community support helps curate more materials, translations, and contributor incentives.'
    }
  };
  const extras = projectExtras[projectId] || {
    about1: project?.description || '',
    about2: 'With community support, this project can scale to more universities and learners.'
  };

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <p className="text-gray-600 mb-6">The project you are looking for does not exist or has been removed.</p>
          <Link href="/stake">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/stake">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Total Backed</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">${project.totalStaked.toLocaleString()}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Voters</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{project.stakers}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Projected Bonus</span>
              </div>
              <p className="text-2xl font-bold text-purple-600">Up to 12%</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">Days Left</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">{project.daysLeft}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Project progress</span>
              <span>{project.progress}% completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Project */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-700 mb-4">{extras.about1}</p>
                  <p className="text-gray-700">{extras.about2}</p>
                </div>
              </div>
            </Card>

            {/* Team */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Team</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{project.creator.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{project.creator}</h3>
                      <p className="text-sm text-gray-600">Project Lead</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Development team with experience in blockchain and technology education.
                  </p>
                </div>
              </div>
            </Card>

            {/* Roadmap */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Roadmap</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phase 1: Development</h3>
                      <p className="text-sm text-gray-600">Base platform and initial certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phase 2: Expansion</h3>
                      <p className="text-sm text-gray-600">Integration with more universities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phase 3: Ecosystem</h3>
                      <p className="text-sm text-gray-600">Full platform with multiple courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-semibold text-green-600 capitalize">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Goal</span>
                    <span className="font-semibold">${project.targetAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">My Stake</span>
                    <span className="font-semibold text-blue-600">${project.myStake.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stake Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">No risk of loss</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-700">Up to 12% bonus if it wins</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Build reputation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-700">Practical Web3 education</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Button */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Interested?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Back this project with your savings and participate in the future of Web3 education.
                </p>
                <Link href="/stake">
                  <Button className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Vote with my Savings
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
