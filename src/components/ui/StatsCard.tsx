import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  trendType = 'neutral',
  className = '',
}) => {
  const trendColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <Card padding="lg" className={className}>
      <div className="text-center">
        <div className="w-16 h-16 bg-stellar-100 rounded-xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-stellar-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
        <p className="text-gray-600 font-medium">{title}</p>
        {trend && (
          <p className={`text-sm mt-2 ${trendColors[trendType]}`}>
            {trend}
          </p>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;
