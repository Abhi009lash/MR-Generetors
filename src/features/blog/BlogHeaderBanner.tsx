import React from 'react';
import { ChevronRight, Award, MapPin } from 'lucide-react';

interface BlogHeaderBannerProps {
  onNavigateHome?: () => void;
}

export const BlogHeaderBanner: React.FC<BlogHeaderBannerProps> = ({
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#0A1D3F] border-b border-[#0F2B5C] py-4 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Title & Breadcrumbs */}
          <div className="space-y-1.5">
            {/* Breadcrumb + Red Tag */}
            <div className="flex items-center gap-2.5 text-xs font-karla">
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-amber-400 text-slate-300 font-bold transition-colors cursor-pointer uppercase"
              >
                HOME
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#D97706] font-bold uppercase">BLOG</span>

              <span className="ml-2 px-2 py-0.5 bg-[#D32F2F] text-white text-[10px] font-bold uppercase rounded-[2px] tracking-wider">
                M.R GENERATORS BLOG
              </span>
            </div>

            {/* Title */}
            <h1 className="font-rubik font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight uppercase">
              M.R GENERATORS &ndash; OFFICIAL BLOG &amp; POWER INSIGHTS
            </h1>

            {/* Subtitle */}
            <p className="font-karla text-xs sm:text-sm text-slate-300">
              Expert guides, generator buying tips, brand reviews, and power backup advice in Hyderabad
            </p>
          </div>

          {/* Right Trust Badges */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#131D3B] border border-white/10 rounded-[2px] text-xs font-karla text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
              <span>Authorised DG Sales &amp; Service</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#131D3B] border border-white/10 rounded-[2px] text-xs font-karla text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#88A9FE] shrink-0" />
              <span>Hyderabad &amp; Secunderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
