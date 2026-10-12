import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from './blogData';

interface BlogArticleCardProps {
  post: BlogPost;
  onReadArticle: (post: BlogPost) => void;
}

export const BlogArticleCard: React.FC<BlogArticleCardProps> = ({
  post,
  onReadArticle,
}) => {
  return (
    <div
      onClick={() => onReadArticle(post)}
      className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#385BAB] transition-all hover:shadow-md cursor-pointer select-none"
    >
      <div className="space-y-3">
        {/* Header Tags */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2 py-0.5 bg-[#E5EEFF] text-[#00163D] font-karla font-bold text-[10px] uppercase tracking-wider rounded-[2px] truncate">
            {post.categoryBadge}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-karla font-bold text-slate-400 shrink-0">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-rubik font-bold text-base sm:text-lg text-[#00163D] leading-snug line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-karla text-xs text-slate-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-karla">
        <span className="text-slate-500 font-medium truncate max-w-[160px]">
          {post.author}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onReadArticle(post);
          }}
          className="font-bold text-[#385BAB] hover:text-[#00163D] flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px] cursor-pointer"
        >
          <span>READ ARTICLE</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
