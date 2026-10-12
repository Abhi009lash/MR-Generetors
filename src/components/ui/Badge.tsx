import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'blue' | 'amber' | 'red' | 'softBlue' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'softBlue',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 tracking-[0.5px]',
    md: 'text-xs px-2.5 py-1 tracking-[0.72px]',
  };

  const variantClasses = {
    navy: 'bg-navy-950 text-white',
    blue: 'bg-brand-blue text-white',
    amber: 'bg-brand-amber/15 text-brand-amber font-bold',
    red: 'bg-brand-red/15 text-brand-red font-bold',
    softBlue: 'bg-[#E5EEFF] text-brand-blue font-bold',
    neutral: 'bg-slate-100 text-slate-700 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-karla font-bold uppercase rounded-[2px] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
