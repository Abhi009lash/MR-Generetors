import React from 'react';

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'md',
}) => {
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-[2px]',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const style: React.CSSProperties = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <div
      style={style}
      className={`animate-pulse bg-slate-200/80 ${roundedClasses[rounded]} ${className}`}
      aria-hidden="true"
    />
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm space-y-4">
      <Skeleton height={200} rounded="lg" />
      <Skeleton height={24} width="70%" />
      <Skeleton height={16} width="90%" />
      <Skeleton height={16} width="60%" />
      <div className="flex gap-2 pt-2">
        <Skeleton height={36} width="50%" />
        <Skeleton height={36} width="50%" />
      </div>
    </div>
  );
};
