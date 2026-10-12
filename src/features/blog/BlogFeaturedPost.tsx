import React from 'react';
import { ArrowRight, Clock, User, Calendar, MapPin } from 'lucide-react';
import { FEATURED_BLOG_POST } from './blogData';
import type { BlogPost } from './blogData';
import { generators1Img } from '../../assets/images';

interface BlogFeaturedPostProps {
  post?: BlogPost;
  onReadArticle: (post: BlogPost) => void;
}

export const BlogFeaturedPost: React.FC<BlogFeaturedPostProps> = ({
  post = FEATURED_BLOG_POST,
  onReadArticle,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm select-none">
      {/* Top Image Banner with Overlay Content */}
      <div className="relative h-64 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden">
        <img
          src={generators1Img}
          alt={post.title}
          className="w-full h-full object-cover opacity-35 transform hover:scale-102 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00163D] via-[#00163D]/70 to-transparent" />

        {/* Floating Content over Image */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white space-y-3">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-[#D32F2F] text-white text-[10px] font-bold uppercase rounded-[2px] tracking-wider">
              FEATURED GUIDE
            </span>
            <span className="px-2.5 py-1 bg-[#0A1D3F] text-white text-[10px] font-bold uppercase rounded-[2px] tracking-wider border border-white/20">
              {post.categoryBadge}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/40 text-slate-200 text-[10px] font-bold uppercase rounded-[2px] backdrop-blur-xs">
              <Clock className="w-3 h-3 text-[#D97706]" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            {post.title}
          </h2>
        </div>
      </div>

      {/* Bottom Metadata & Excerpt */}
      <div className="p-6 sm:p-8 space-y-5">
        {/* Author & Tag Line */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-karla text-slate-500 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <User className="w-3.5 h-3.5 text-[#385BAB]" />
            <span>By M.R Generators Editorial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Official Desk</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#385BAB] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>Hyderabad Market Insights</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="font-karla text-sm text-slate-600 leading-relaxed">
          {post.excerpt}
        </p>

        {/* CTA + Edition */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={() => onReadArticle(post)}
            className="h-10 px-6 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
          >
            <span>READ FULL ARTICLE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <span className="font-karla text-xs text-slate-400 font-medium">
            {post.date}
          </span>
        </div>
      </div>
    </div>
  );
};
