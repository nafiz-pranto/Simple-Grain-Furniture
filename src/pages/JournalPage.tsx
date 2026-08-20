import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { JOURNAL_ARTICLES } from '../data/journal';
import { PRODUCTS } from '../data/products';
import { JournalArticle } from '../types';
import { ArrowRight, BookOpen, Clock, Calendar, X, ArrowLeft } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const {
    selectedArticleSlug,
    setSelectedArticleSlug,
    navigateToArticle,
    navigateToProduct,
    setCurrentPage
  } = useShop();

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Interior', 'Materials', 'Design', 'Living'];

  const filteredArticles = activeCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category === activeCategory);

  // If an article is selected, show full editorial reading view
  const currentArticle: JournalArticle | undefined = selectedArticleSlug
    ? JOURNAL_ARTICLES.find((a) => a.slug === selectedArticleSlug)
    : undefined;

  const handleBackToJournal = () => {
    setSelectedArticleSlug(null);
    window.location.hash = 'journal';
  };

  if (currentArticle) {
    const featuredProducts = PRODUCTS.filter((p) =>
      currentArticle.featuredProductIds.includes(p.id)
    );

    return (
      <article className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Back button & Meta */}
          <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-6">
            <button
              onClick={handleBackToJournal}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#57524A] hover:text-[#191816] transition-colors cursor-pointer font-medium"
            >
              <ArrowLeft size={15} />
              <span>Back to All Essays</span>
            </button>

            <div className="flex items-center space-x-3 text-xs text-[#7A746B]">
              <span className="text-[#A38053] font-semibold uppercase tracking-wider">{currentArticle.category}</span>
              <span>•</span>
              <span>{currentArticle.readTime}</span>
              <span>•</span>
              <span>{currentArticle.publishDate}</span>
            </div>
          </div>

          {/* Article Header */}
          <div className="space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#191816] font-normal leading-[1.12]">
              {currentArticle.title}
            </h1>
            <p className="text-base sm:text-lg text-[#57524A] font-light leading-relaxed">
              {currentArticle.excerpt}
            </p>
          </div>

          {/* Cover Image */}
          <div className="aspect-[16/9] rounded-xs overflow-hidden bg-[#F5F2EB] shadow-md border border-[#EFEAE1]">
            <img
              src={currentArticle.coverImage}
              alt={currentArticle.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-neutral max-w-none text-[#38342F] space-y-8 text-sm sm:text-base leading-relaxed font-light">
            <p className="text-base sm:text-lg font-serif italic text-[#191816] leading-relaxed border-l-2 border-[#A38053] pl-6 my-8">
              {currentArticle.content.intro}
            </p>

            {currentArticle.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h3 className="font-serif text-2xl text-[#191816] font-medium pt-2">
                  {section.heading}
                </h3>
                <p>{section.body}</p>

                {section.quote && (
                  <blockquote className="my-6 p-6 bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs font-serif text-lg text-[#191816] italic text-center">
                    {section.quote}
                  </blockquote>
                )}

                {section.image && (
                  <div className="my-6 aspect-[16/9] rounded-xs overflow-hidden bg-[#F5F2EB]">
                    <img
                      src={section.image}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-[#EFEAE1]">
              <p className="font-medium text-[#191816]">{currentArticle.content.conclusion}</p>
            </div>
          </div>

          {/* Featured Pieces in this Article */}
          {featuredProducts.length > 0 && (
            <div className="pt-12 border-t border-[#EFEAE1] space-y-6">
              <h4 className="font-serif text-2xl text-[#191816]">Featured in this Essay</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => navigateToProduct(prod)}
                    className="p-3 bg-[#FDFBF7] border border-[#EFEAE1] rounded-xs flex items-center space-x-3 cursor-pointer hover:border-[#C5A880] transition-colors"
                  >
                    <img
                      src={prod.images.primary}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover rounded-xs"
                    />
                    <div className="min-w-0">
                      <h5 className="font-serif text-sm font-medium text-[#191816] truncate">
                        {prod.name}
                      </h5>
                      <span className="text-xs font-mono text-[#7A746B]">
                        ৳{prod.price.toLocaleString('en-BD')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to all essays bottom button */}
          <div className="pt-8 text-center">
            <button
              onClick={handleBackToJournal}
              className="px-8 py-3 bg-[#191816] text-[#FDFBF7] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#38342F]"
            >
              Explore More Essays
            </button>
          </div>

        </div>
      </article>
    );
  }

  // Journal Index View
  const heroArticle = JOURNAL_ARTICLES[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== heroArticle.id || activeCategory !== 'All');

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#EFEAE1] pb-8">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium">
            <span>Simple Grain Editorial</span>
            <span>/</span>
            <span>Design Journal</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#191816] font-normal tracking-tight">
                Notes on Thoughtful Living
              </h1>
              <p className="text-xs sm:text-sm text-[#57524A] font-light max-w-xl mt-2 leading-relaxed">
                Essays on spatial harmony, sustainable forestry, honest joinery, and the art of shaping calm homes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#191816] text-[#FDFBF7] shadow-xs'
                      : 'bg-[#F5F2EB] text-[#57524A] hover:bg-[#EFEAE1] hover:text-[#191816]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Editorial Hero Article (if 'All' is selected) */}
        {activeCategory === 'All' && (
          <div
            onClick={() => navigateToArticle(heroArticle)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FDFBF7] border border-[#EFEAE1] rounded-xs p-6 sm:p-8 cursor-pointer group hover:border-[#C5A880] transition-colors shadow-xs"
          >
            <div className="lg:col-span-7 aspect-[16/10] rounded-xs overflow-hidden bg-[#F5F2EB]">
              <img
                src={heroArticle.coverImage}
                alt={heroArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#7A746B]">
                <span className="text-[#A38053] font-semibold">{heroArticle.category}</span>
                <span>•</span>
                <span>{heroArticle.readTime}</span>
                <span>•</span>
                <span>Featured Essay</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#191816] font-normal leading-tight group-hover:text-[#A38053] transition-colors">
                {heroArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
                {heroArticle.excerpt}
              </p>

              <div className="pt-2">
                <span className="text-xs font-medium text-[#191816] uppercase tracking-wider inline-flex items-center space-x-2 group-hover:text-[#A38053]">
                  <span>Read Full Editorial</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigateToArticle(article)}
              className="bg-[#FDFBF7] border border-[#EFEAE1] rounded-xs p-5 space-y-4 cursor-pointer group hover:border-[#C5A880] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] rounded-xs overflow-hidden bg-[#F5F2EB]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#7A746B]">
                    <span className="text-[#A38053] font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#191816] group-hover:text-[#A38053] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#57524A] leading-relaxed line-clamp-3 font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EFEAE1] flex items-center justify-between text-xs text-[#191816] font-medium">
                <span>Read Essay</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-[#A38053]" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
