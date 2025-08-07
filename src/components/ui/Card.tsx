import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  padding = 'md',
}) => {
  const baseClasses = 'card-stellar rounded-xl shadow-lg border border-stellar-100/50';
  const hoverClasses = hover ? 'cursor-pointer hover:shadow-xl hover:scale-[1.02]' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className} transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
