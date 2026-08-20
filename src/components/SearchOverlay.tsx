import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/journal';
import { LOOKBOOK_SCENES } from '../data/lookbook';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    navigateToProduct,
    navigateToArticle,
    navigateToCategory
  } = useShop();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isSearchOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingProducts = normalizedQuery
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.category.toLowerCase().includes(normalizedQuery) ||
          p.primaryMaterial.toLowerCase().includes(normalizedQuery) ||
          p.materials.some((m) => m.toLowerCase().includes(normalizedQuery)) ||
          p.tagline.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchingArticles = normalizedQuery
    ? JOURNAL_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(normalizedQuery) ||
          a.excerpt.toLowerCase().includes(normalizedQuery) ||
          a.category.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const handleSelectProduct = (product: typeof PRODUCTS[0]) => {
    setIsSearchOpen(false);
    navigateToProduct(product);
  };

  const handleSelectArticle = (article: typeof JOURNAL_ARTICLES[0]) => {
    setIsSearchOpen(false);
    navigateToArticle(article);
  };

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  const popularSearches = ['Solid White Oak', 'Burmese Teak', 'Lounge Chair', 'Dining Table', 'Linen Sofa', 'Credenza'];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FDFBF7]/98 backdrop-luxury animate-fade-in overflow-y-auto">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EFEAE1]">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#7A746B]">
            <Sparkles size={14} className="text-[#C5A880]" />
            <span>Search Simple Grain Catalog & Journal</span>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-[#57524A] hover:text-[#191816] transition-colors rounded-full hover:bg-[#F5F2EB] flex items-center space-x-1 text-xs cursor-pointer"
            aria-label="Close search"
          >
            <span className="hidden sm:inline text-[11px] font-mono text-[#9E978D]">ESC</span>
            <X size={18} />
          </button>
        </div>

        {/* Input Field */}
        <div className="relative my-8">
          <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9E978D]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by piece, wood species, material, or design topic..."
            className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs pl-14 pr-12 py-4 text-base sm:text-lg text-[#191816] placeholder-[#9E978D] focus:outline-none focus:border-[#191816] transition-colors font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#9E978D] hover:text-[#191816]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Default State: Popular tags & Categories */}
        {!normalizedQuery && (
          <div className="space-y-8 pt-4">
            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A746B] mb-3">
                Suggested Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-[#F5F2EB] hover:bg-[#EFEAE1] text-xs text-[#57524A] hover:text-[#191816] rounded-xs transition-colors border border-[#EFEAE1] cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A746B] mb-3">
                Browse by Category
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Living Room', 'Dining', 'Bedroom', 'Office', 'Storage'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToCategory(cat);
                    }}
                    className="p-4 bg-[#F5F2EB] hover:bg-[#EFEAE1] text-left rounded-xs transition-colors border border-[#EFEAE1] flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-serif text-base text-[#191816]">{cat}</span>
                    <ArrowRight size={14} className="text-[#A38053] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results State */}
        {normalizedQuery && (
          <div className="space-y-10 flex-1">
            {/* Products Results */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1] mb-4">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A746B]">
                  Furniture Designs ({matchingProducts.length})
                </span>
              </div>

              {matchingProducts.length === 0 ? (
                <p className="text-sm text-[#7A746B] py-4">No furniture pieces matched &ldquo;{query}&rdquo;.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchingProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className="p-3 bg-[#FDFBF7] hover:bg-[#F5F2EB] border border-[#EFEAE1] rounded-xs flex items-center space-x-4 cursor-pointer transition-colors group"
                    >
                      <img
                        src={product.images.primary}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-xs shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-[#A38053] tracking-widest uppercase block">
                          {product.category}
                        </span>
                        <h4 className="font-serif text-base text-[#191816] group-hover:text-[#A38053] transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-[#7A746B] font-mono mt-0.5">
                          {formatPrice(product.price)} • {product.primaryMaterial}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-[#9E978D] group-hover:text-[#191816] transition-colors" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Articles Results */}
            {matchingArticles.length > 0 && (
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1] mb-4">
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7A746B]">
                    Journal Articles ({matchingArticles.length})
                  </span>
                </div>

                <div className="space-y-3">
                  {matchingArticles.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => handleSelectArticle(article)}
                      className="p-4 bg-[#FDFBF7] hover:bg-[#F5F2EB] border border-[#EFEAE1] rounded-xs flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <BookOpen size={18} className="text-[#A38053] shrink-0 mt-1" />
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#7A746B]">
                            {article.category} • {article.readTime}
                          </span>
                          <h4 className="font-serif text-base text-[#191816] group-hover:text-[#A38053] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-xs text-[#7A746B] line-clamp-1 mt-0.5">{article.excerpt}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-[#9E978D] group-hover:text-[#191816] transition-colors ml-4 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
