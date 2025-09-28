import React from 'react';
import { cn } from '@/utils/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'card-stellar rounded-xl shadow-lg border border-stellar-100/50';

    const variants = {
      default: 'bg-white/80 backdrop-blur-sm',
      glass: 'bg-white/10 backdrop-blur-md border-white/20',
      gradient: 'bg-gradient-to-br from-white/90 to-white/70',
    };

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
