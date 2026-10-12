import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'dark' | 'soft';
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  className = '',
  hoverEffect = false,
}) => {
  const variantClasses = {
    white: 'bg-white shadow-sm border border-slate-100',
    dark: 'bg-navy-850 text-white border border-white/10 shadow-lg',
    soft: 'bg-surface-light border border-slate-100 shadow-sm',
  };

  const hoverClass = hoverEffect
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md'
    : '';

  return (
    <div
      className={`rounded-lg overflow-hidden ${variantClasses[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
