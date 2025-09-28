import React from 'react';
import { cn } from '@/utils/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export default function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-32 w-full',
  };

  return (
    <div className={cn(
      'skeleton',
      variantClasses[variant],
      className
    )} />
  );
}
