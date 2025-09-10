import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  className?: string;
}

export default function StatsCard({ title, value, icon: Icon, trend, subtitle, className }: StatsCardProps) {
  return (
    <Card className={className}>
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-stellar-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-stellarBlue" />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
        
        {subtitle && (
          <div className="text-sm text-green-600 mb-2">{subtitle}</div>
        )}
        
        {trend && (
          <div className={`flex items-center justify-center text-sm ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            <span className={trend.isPositive ? '↑' : '↓'}></span>
            <span className="ml-1">{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
    </Card>
  );
}
