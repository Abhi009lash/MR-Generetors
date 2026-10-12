import React, { useState } from 'react';
import { Search, Zap, Phone, MapPin, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { BLOG_CATEGORIES, RECENT_POSTS } from './blogData';
import { submitContactRequirement } from '../../core/api/contactService';

interface BlogSidebarWidgetsProps {
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
  onSelectCategory: (categoryName: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export const BlogSidebarWidgets: React.FC<BlogSidebarWidgetsProps> = ({
  onSearchChange,
  onSearchSubmit,
  onSelectCategory,
  onSelectArticle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteCapacity, setQuoteCapacity] = useState('30 kVA - 82.5 kVA (Commercial / Office)');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchTerm);
    if (onSearchSubmit) onSearchSubmit();
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactRequirement({
        fullName: quoteName,
        phone: quotePhone,
        serviceType: `Blog Quick Quote: ${quoteCapacity}`,
        message: `Quick generator quote requested from blog sidebar for capacity: ${quoteCapacity}`,
      });
      setQuoteSubmitted(true);
    } catch {
      // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 select-none">
      {/* 1. Search Blog */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
        <h3 className="font-rubik font-bold text-base text-[#00163D]">Search Blog</h3>
        <p className="font-karla text-xs text-slate-500">Find buying guides, reviews, and technical advice</p>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearchChange(e.target.value);
              }}
              placeholder="Search articles..."
              className="w-full bg-[#F8F9FF] border border-slate-200 rounded-[2px] pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] font-karla"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase rounded-[2px] transition-colors cursor-pointer"
          >
            GO
          </button>
        </form>
      </div>

      {/* 2. Fast Price Quote Card (Dark Blue Card) */}
      <div className="bg-[#0A1D3F] text-white border border-[#1E3A8A] rounded-xl p-6 shadow-md space-y-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#D32F2F] text-white text-[10px] font-bold uppercase rounded-[2px] tracking-wider">
          <Zap className="w-3 h-3 fill-current" />
          <span>INSTANT PRICE QUOTE</span>
        </div>

        <div className="space-y-1">
          <h3 className="font-rubik font-bold text-xl text-white">Get Generator Quote</h3>
          <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
            Direct dealer prices for Ashok Leyland, Cummins, Kirloskar &amp; Greaves in Hyderabad.
          </p>
        </div>

        {quoteSubmitted ? (
          <div className="p-4 bg-emerald-900/40 border border-emerald-500/30 rounded text-center space-y-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
            <span className="font-karla font-bold text-xs text-emerald-200 block">Quote Request Dispatched</span>
            <span className="font-karla text-[11px] text-slate-300 block">Our duty engineer will call you with exact ex-factory pricing.</span>
          </div>
        ) : (
          <form onSubmit={handleQuoteSubmit} className="space-y-3 font-karla text-xs">
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1 tracking-wider">YOUR NAME</label>
              <input
                type="text"
                required
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className="w-full bg-[#00163D] border border-[#1E3A8A] rounded-[2px] px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1 tracking-wider">PHONE NUMBER</label>
              <input
                type="tel"
                required
                value={quotePhone}
                onChange={(e) => setQuotePhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-[#00163D] border border-[#1E3A8A] rounded-[2px] px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1 tracking-wider">CAPACITY REQUIRED (kVA)</label>
              <select
                value={quoteCapacity}
                onChange={(e) => setQuoteCapacity(e.target.value)}
                className="w-full bg-[#00163D] border border-[#1E3A8A] rounded-[2px] px-2.5 py-2 text-white focus:outline-none focus:border-amber-400"
              >
                <option value="30 kVA - 82.5 kVA (Commercial / Office)">30 kVA - 82.5 kVA (Commercial / Office)</option>
                <option value="5 - 25 kVA (Residential / Small Business)">5 - 25 kVA (Residential / Small Business)</option>
                <option value="100 - 500 kVA (Industrial / Hospital)">100 - 500 kVA (Industrial / Hospital)</option>
                <option value="750 - 2000 kVA (Heavy Infrastructure)">750 - 2000 kVA (Heavy Infrastructure)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#D32F2F] hover:bg-red-700 disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>REQUEST FREE QUOTE</span>
            </button>
          </form>
        )}
      </div>

      {/* 3. Categories */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
        <h3 className="font-rubik font-bold text-base text-[#00163D]">Categories</h3>
        <div className="space-y-1.5 font-karla text-xs">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => onSelectCategory(cat.name)}
              className="w-full flex items-center justify-between p-2 rounded hover:bg-[#F4F6F9] text-slate-700 hover:text-[#00163D] transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2 truncate pr-2">
                <FileText className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
                <span className="truncate">{cat.name}</span>
              </div>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold shrink-0">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Recent Posts */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
        <h3 className="font-rubik font-bold text-base text-[#00163D]">Recent Posts</h3>
        <div className="space-y-3 font-karla">
          {RECENT_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectArticle(post.id)}
              className="group cursor-pointer space-y-0.5"
            >
              <h4 className="text-xs font-bold text-[#00163D] group-hover:text-[#385BAB] transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h4>
              <span className="text-[11px] text-slate-400 block">
                {post.date} &bull; {post.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Need Urgent Support Card */}
      <div className="bg-[#E5EEFF] border border-[#CCDFFF] rounded-xl p-5 space-y-3 font-karla">
        <span className="block text-[10px] font-bold text-[#D32F2F] uppercase tracking-wider">
          NEED URGENT SUPPORT?
        </span>
        <h4 className="font-rubik font-bold text-sm text-[#00163D]">
          Need urgent generator support or quote?
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Our mobile engineers and estimation team are available around the clock.
        </p>
        <div className="space-y-1.5 pt-1 text-xs">
          <a href="tel:+918977778811" className="flex items-center gap-2 font-bold text-[#D32F2F] hover:underline">
            <Phone className="w-3.5 h-3.5" />
            <span>+91-8977778811</span>
          </a>
          <a href="tel:04048547105" className="flex items-center gap-2 text-slate-700 hover:underline">
            <Phone className="w-3.5 h-3.5" />
            <span>040-48547105</span>
          </a>
          <div className="flex items-start gap-2 text-slate-600 text-[11px] pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>Veera Ratna Towers, Near ESI Metro Station, Hyderabad 500038</span>
          </div>
        </div>
      </div>
    </div>
  );
};
