import React from 'react';
import { AlertTriangle, Inbox, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message,
  onRetry,
  className = '',
}) => {
  return (
    <div
      className={`p-6 bg-red-50/80 border border-red-200 rounded-lg text-center flex flex-col items-center justify-center ${className}`}
      role="alert"
    >
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-brand-red mb-3">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h4 className="font-rubik font-semibold text-base text-navy-950 mb-1">
        {title}
      </h4>
      <p className="font-karla text-sm text-slate-600 max-w-md mb-4">
        {message}
      </p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          leftIcon={<RefreshCw className="w-4 h-4" />}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export interface EmptyStateProps {
  title?: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  message,
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`p-8 bg-slate-50 border border-dashed border-slate-200 rounded-lg text-center flex flex-col items-center justify-center ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
        <Inbox className="w-6 h-6" />
      </div>
      <h4 className="font-rubik font-semibold text-base text-navy-950 mb-1">
        {title}
      </h4>
      <p className="font-karla text-sm text-slate-500 max-w-sm mb-4">
        {message}
      </p>
      {actionText && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
