import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  totalArticles: number;
  onPageChange: (page: number) => void;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  totalArticles,
  onPageChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200 mt-8">
      <span className="font-karla text-xs sm:text-sm text-slate-500 font-medium">
        Showing <strong className="text-slate-800 font-semibold">{Math.min(1 + (currentPage - 1) * 8, totalArticles)}</strong> to{' '}
        <strong className="text-slate-800 font-semibold">{Math.min(currentPage * 8, totalArticles)}</strong> of{' '}
        <strong className="text-slate-800 font-semibold">{totalArticles}</strong> articles
      </span>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          aria-label="Previous Page"
          className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded text-xs font-rubik font-semibold transition-colors ${
                isActive
                  ? 'bg-[#00163D] text-white shadow-xs'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
          className="px-3 h-8 rounded border border-slate-200 flex items-center gap-1 text-xs font-rubik font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          NEXT <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
