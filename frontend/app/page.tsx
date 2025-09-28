"use client";

import { TrendingUp, Shield, Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/cards/Card";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout showSidebar={false}>
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          🌟 Save without risk, vote with purpose, earn with impact
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An educational DeFi app for students, built with Stellar + Soroban.
          </p>
          
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your temporary USDC savings into symbolic backing for projects that inspire you.
            Always recover your money. Earn reputation and real rewards if your project wins.
          </p>
          
          <Link href="/stake">
            <Button size="lg" className="text-lg px-8 py-4">
              🌟 Start now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why AhorroStellar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Risk</h3>
              <p className="text-gray-600">
                Your USDC is temporarily locked but never lost. 
                You always recover your money at the end of the period.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">With Purpose</h3>
              <p className="text-gray-600">
                Symbolically vote for university projects that interest you.
                Build reputation and earn rewards if your project wins.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational</h3>
              <p className="text-gray-600">
                Learn DeFi in a practical and safe way. 
                Experiment with blockchain without real risk.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose a project</h3>
              <p className="text-gray-600 text-sm">
                Explore university projects and pick the one you want to back
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lock USDC</h3>
              <p className="text-gray-600 text-sm">
                Connect Freighter and temporarily lock your USDC for 7 days
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Earn rewards</h3>
              <p className="text-gray-600 text-sm">
                Get your money back + bonus if your project gets funded
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the purpose-driven savings revolution. 
            Zero risk, real impact.
          </p>
          <Link href="/stake">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Voting
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            Built for Stellar LATAM Ideathon 2025 · Zero risk · 100% educational
          </p>
        </div>
      </div>
    </Layout>
  );
}
