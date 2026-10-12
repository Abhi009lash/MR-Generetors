import React, { useState, useMemo, useRef } from 'react';
import { BlogHeaderBanner } from './BlogHeaderBanner';
import { BlogFeaturedPost } from './BlogFeaturedPost';
import { BlogArticleCard } from './BlogArticleCard';
import { BlogSidebarWidgets } from './BlogSidebarWidgets';
import { BlogPagination } from './BlogPagination';
import { BlogArticleModal } from './BlogArticleModal';
import { FEATURED_BLOG_POST, BLOG_POSTS_LIST } from './blogData';
import type { BlogPost } from './blogData';
import { X, Filter } from 'lucide-react';

interface BlogPageProps {
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  const articlesSectionRef = useRef<HTMLDivElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const scrollToArticles = () => {
    if (articlesSectionRef.current) {
      const headerOffset = 100;
      const elementPosition = articlesSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_LIST.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categoryBadge.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        post.categoryGroup.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        post.categoryBadge.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / ITEMS_PER_PAGE));
  const currentSlice = useMemo(() => {
    const startIndex = (currentPageNum - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPageNum]);

  const handleSelectArticleById = (articleId: string) => {
    if (articleId === FEATURED_BLOG_POST.id) {
      setSelectedArticle(FEATURED_BLOG_POST);
      return;
    }
    const found = BLOG_POSTS_LIST.find((p) => p.id === articleId);
    if (found) setSelectedArticle(found);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setCurrentPageNum(1);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-slate-800">
      {/* 1. Top Screen Identification Banner */}
      <BlogHeaderBanner onNavigateHome={onNavigateHome} />

      {/* 2. Main 2-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Featured Post + Article Grid + Pagination */}
          <main className="lg:col-span-8 space-y-8">
            {/* Active Filters Bar if filtered */}
            {(searchQuery || selectedCategory) && (
              <div className="flex items-center justify-between p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-karla">
                <div className="flex items-center gap-2 text-amber-900">
                  <Filter className="w-4 h-4 text-amber-700" />
                  <span>
                    Filtering by:{' '}
                    <strong>{searchQuery ? `"${searchQuery}"` : ''}</strong>{' '}
                    {selectedCategory ? `[${selectedCategory}]` : ''} ({filteredPosts.length} matches)
                  </span>
                </div>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800 font-semibold uppercase text-[11px]"
                >
                  <X className="w-3.5 h-3.5" /> Clear Filters
                </button>
              </div>
            )}

            {/* Featured Hero Article (Shown on first page when not actively filtered) */}
            {!searchQuery && !selectedCategory && currentPageNum === 1 && (
              <BlogFeaturedPost
                post={FEATURED_BLOG_POST}
                onReadArticle={(post) => setSelectedArticle(post)}
              />
            )}

            {/* Section Header for Articles */}
            <div
              ref={articlesSectionRef}
              id="blog-articles"
              className="flex items-center justify-between pb-2 border-b border-slate-200 scroll-mt-28"
            >
              <h2 className="font-rubik font-bold text-lg sm:text-xl text-[#00163D] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                Latest Power & Generator Articles
              </h2>
              <span className="font-karla text-xs text-slate-500 font-medium">
                {filteredPosts.length} Knowledge Base Articles
              </span>
            </div>

            {/* 2-Column Responsive Card Grid */}
            {currentSlice.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSlice.map((post) => (
                  <BlogArticleCard
                    key={post.id}
                    post={post}
                    onReadArticle={(selected) => setSelectedArticle(selected)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-3">
                <p className="font-rubik font-semibold text-slate-700 text-base">
                  No blog articles matched your search or category filter.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-[#00163D] text-white rounded-lg text-xs font-rubik font-bold hover:bg-[#002666] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <BlogPagination
                currentPage={currentPageNum}
                totalPages={totalPages}
                totalArticles={filteredPosts.length}
                onPageChange={(page) => {
                  setCurrentPageNum(page);
                  scrollToArticles();
                }}
              />
            )}
          </main>

          {/* RIGHT COLUMN: Sidebar Widgets (Scrollable sticky column with invisible scrollbar) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto space-y-6 scrollbar-none">
            <BlogSidebarWidgets
              onSearchChange={(query) => {
                setSearchQuery(query);
                setCurrentPageNum(1);
              }}
              onSearchSubmit={scrollToArticles}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setCurrentPageNum(1);
                scrollToArticles();
              }}
              onSelectArticle={handleSelectArticleById}
            />
          </aside>
        </div>
      </div>

      {/* Reader Modal */}
      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenQuote={onNavigateContact}
      />
    </div>
  );
};
