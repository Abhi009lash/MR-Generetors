import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emergency' | 'accent' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-karla font-bold tracking-[0.56px] uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[2px] active:scale-[0.98]';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 min-h-[32px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[42px] gap-2',
    lg: 'text-base px-6 py-3.5 min-h-[48px] gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-navy-950 text-white hover:bg-navy-900 focus:ring-navy-950 shadow-sm hover:shadow',
    emergency:
      'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red shadow-sm hover:shadow',
    accent:
      'bg-brand-lightBlue text-navy-950 hover:bg-[#7799ee] focus:ring-brand-lightBlue font-bold shadow-sm',
    outline:
      'border-2 border-navy-950 text-navy-950 bg-transparent hover:bg-navy-950 hover:text-white focus:ring-navy-950',
    white:
      'bg-white text-navy-950 hover:bg-slate-100 focus:ring-white shadow-sm font-bold',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};
