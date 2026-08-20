import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/journal';
import { LOOKBOOK_SCENES } from '../data/lookbook';
import { ProductCard } from '../components/ProductCard';
import { MaterialLibrary } from '../components/MaterialLibrary';
import {
  ArrowRight,
  Shield,
  Truck,
  Sparkles,
  Compass,
  Check,
  Eye,
  Layers
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    setCurrentPage,
    navigateToCategory,
    navigateToProduct,
    navigateToArticle,
    navigateToVisualizerWithProduct
  } = useShop();

  const featuredPieces = PRODUCTS.filter((p) => p.featured).slice(0, 6);
  const heroLookbook = LOOKBOOK_SCENES[0];

  return (
    <div className="w-full max-w-full bg-[#FAF8F5] overflow-x-clip">
      
      {/* =========================================================================
          SECTION 01 — CINEMATIC HERO
          Large immersive imagery, substantial negative space, quiet luxury motion.
      ========================================================================= */}
      <section
        id="hero-section"
        className="relative min-h-[100svh] min-h-[100vh] w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-14 px-4 sm:px-8 lg:px-12 bg-[#141311] overflow-hidden"
      >
        
        {/* Background Architectural Canvas Image with slow scale reveal */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90"
            alt="Simple Grain Architectural Living Space"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center animate-hero-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/95 via-[#141311]/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/85 via-transparent to-transparent" />
        </div>

        {/* Top spacer / header headroom balance */}
        <div className="relative z-10 w-full" aria-hidden="true" />

        {/* Hero Editorial Typography Stagger */}
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6 sm:space-y-10 my-auto py-4">
          
          <div className="max-w-3xl text-[#FAF8F5] space-y-4 sm:space-y-6 animate-hero-text">
            
            <div className="inline-flex items-center space-x-2.5 sm:space-x-3 text-[9.5px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#DFCABA] font-mono">
              <span className="w-2 h-[1px] bg-[#DFCABA]" />
              <span>Simple Grain Atelier • Dhaka</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#FAF8F5] break-words">
              Furniture for the way you want to live.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#E5DECF] leading-relaxed max-w-xl font-light">
              Solid timber pieces sculpted for architectural warmth, honest joinery, and multi-generational life in modern homes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <button
                id="hero-explore-collection-btn"
                onClick={() => setCurrentPage('collection')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#FAF8F5] text-[#141311] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#E5DECF] transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer group"
              >
                <span>Explore Collection</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                id="hero-discover-craft-btn"
                onClick={() => setCurrentPage('craftsmanship')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-transparent text-[#FAF8F5] border border-[#FAF8F5]/40 text-xs font-medium uppercase tracking-[0.2em] rounded-xs hover:bg-[#FAF8F5]/10 transition-all flex items-center justify-center backdrop-luxury cursor-pointer"
              >
                <span>The Craft Story</span>
              </button>
            </div>

          </div>

          {/* Bottom Architectural Precision Strip */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-[11px] text-[#A29B8F] tracking-[0.16em] sm:tracking-[0.2em] uppercase border-t border-[#FAF8F5]/15 font-mono gap-2 sm:gap-4">
            <span>FSC-Certified Solid Timber</span>
            <span className="hidden sm:inline">•</span>
            <span>Mortise & Tenon Interlocking Joinery</span>
            <span className="hidden sm:inline">•</span>
            <span>Nationwide White-Glove Placement</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — BRAND MANIFESTO
          Generous whitespace, quiet editorial typography.
      ========================================================================= */}
      <section id="brand-intro-section" className="py-20 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <span className="text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8E7048] font-mono block">
            THE SIMPLE GRAIN PHILOSOPHY
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141311] font-normal leading-[1.18] tracking-tight">
            “Your home deserves more than furniture. <br className="hidden sm:inline" />
            It deserves pieces that belong.”
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5C564E] leading-relaxed max-w-2xl mx-auto font-light">
            We reject the disposable tempo of mass manufacturing. At Simple Grain, every chair, dining trestle, and credenza begins with sustainably sourced solid timber, balanced proportions, and natural wax-oil finishes that age with profound beauty across generations.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('about')}
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-semibold text-[#141311] luxury-link pb-1 hover:text-[#8E7048] transition-colors cursor-pointer"
            >
              Read Our Full Manifesto
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — FEATURED SPACES
          Asymmetric, large-format editorial layouts.
      ========================================================================= */}
      <section id="featured-collections-section" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F6F3ED] border-t border-[#E5DECF] w-full">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5DECF] pb-4 sm:pb-6 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                CURATED ARCHETYPES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141311] font-normal mt-1">
                Explore by Living Space
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('collection')}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141311] hover:text-[#8E7048] transition-colors flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>View All 24 Designs</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {/* Hero Category 1: Living Room */}
            <div
              onClick={() => navigateToCategory('Living Room')}
              className="md:col-span-8 group relative aspect-[16/10] bg-[#E5DECF] overflow-hidden cursor-pointer shadow-xs"
            >
              <img
                src={CATEGORIES[0].image}
                alt={CATEGORIES[0].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/85 via-[#141311]/20 to-transparent" />
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-[#FAF8F5] flex items-end justify-between gap-3">
                <div className="space-y-1 sm:space-y-1.5 max-w-md">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono">
                    {CATEGORIES[0].count} Handcrafted Designs
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium">{CATEGORIES[0].name}</h3>
                  <p className="text-xs text-[#E5DECF] line-clamp-2 font-light hidden xs:block">{CATEGORIES[0].description}</p>
                </div>
                <span className="p-2.5 sm:p-3 bg-[#FAF8F5]/15 backdrop-luxury text-[#FAF8F5] group-hover:bg-[#FAF8F5] group-hover:text-[#141311] transition-all shrink-0">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>

            {/* Category 2: Dining */}
            <div
              onClick={() => navigateToCategory('Dining')}
              className="md:col-span-4 group relative aspect-[4/3] md:aspect-auto bg-[#E5DECF] overflow-hidden cursor-pointer shadow-xs"
            >
              <img
                src={CATEGORIES[1].image}
                alt={CATEGORIES[1].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/85 via-[#141311]/20 to-transparent" />
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-[#FAF8F5] flex items-end justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono">
                    {CATEGORIES[1].count} Designs
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium">{CATEGORIES[1].name}</h3>
                  <p className="text-xs text-[#E5DECF] line-clamp-2 font-light hidden xs:block">{CATEGORIES[1].description}</p>
                </div>
                <span className="p-2 sm:p-2.5 bg-[#FAF8F5]/15 backdrop-luxury text-[#FAF8F5] group-hover:bg-[#FAF8F5] group-hover:text-[#141311] transition-all shrink-0">
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>

            {/* Remaining Categories */}
            {CATEGORIES.slice(2).map((cat) => (
              <div
                key={cat.name}
                onClick={() => navigateToCategory(cat.name)}
                className="md:col-span-4 group relative aspect-[4/3] bg-[#E5DECF] overflow-hidden cursor-pointer shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/85 via-[#141311]/20 to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-[#FAF8F5] flex items-end justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono">
                      {cat.count} Designs
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium">{cat.name}</h3>
                  </div>
                  <span className="p-2 bg-[#FAF8F5]/15 backdrop-luxury text-[#FAF8F5] group-hover:bg-[#FAF8F5] group-hover:text-[#141311] transition-all shrink-0">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — SIGNATURE DESIGNS
          Editorial product grid with photography dominance.
      ========================================================================= */}
      <section id="featured-pieces-section" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] w-full">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5DECF] pb-4 sm:pb-6 gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                THE SIGNATURE CATALOG
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#141311] font-normal mt-1">
                Handcrafted Centerpieces
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7E776C] max-w-sm font-light leading-relaxed">
              Sculpted from Select-Grade White Oak, Aged Burmese Teak, and Appalachian Walnut, finished with organic wax-oils.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-14">
            {featuredPieces.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 3} />
            ))}
          </div>

          <div className="pt-4 sm:pt-6 text-center">
            <button
              onClick={() => setCurrentPage('collection')}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#141311] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#3D3934] transition-all inline-flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <span>Explore Complete 24-Piece Catalog</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — CRAFTSMANSHIP SPLIT
          "Made to be lived with" - Mortise & tenon joinery, natural wax-oils.
      ========================================================================= */}
      <section id="craftsmanship-highlight-section" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-[#1C1A18] text-[#FAF8F5] w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Image Stage */}
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#141311] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
              alt="Simple Grain Joinery and Craftsmanship"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-[#E5DECF] font-mono gap-2">
              <span>Hand-planed tenon joint</span>
              <span>Organic Hardwax Oil</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#DFCABA] font-mono">
              HONEST JOINERY & MATERIALS
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-[#FAF8F5]">
              Made to be lived with.
            </h2>

            <p className="text-xs sm:text-sm text-[#E5DECF] leading-relaxed font-light">
              We believe great furniture reveals its quality over time. Instead of relying on hidden screws or synthetic glues that fail under tropical humidity shifts, our carpenters employ interlocking mortise-and-tenon joints that breathe harmoniously with the wood’s natural respiration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-4 border-t border-[#292623]">
              <div className="space-y-1">
                <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5]">Zero Synthetic Lacquers</h4>
                <p className="text-xs text-[#A29B8F] leading-relaxed font-light">
                  Finished exclusively with plant-based wax-oils that allow the wood pores to breathe and develop a deep natural patina.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5]">10-Year Timber Guarantee</h4>
                <p className="text-xs text-[#A29B8F] leading-relaxed font-light">
                  Every structural frame is built to withstand decades of daily family use and multi-generational inheritance.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => setCurrentPage('craftsmanship')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-[#FAF8F5] text-[#141311] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#E5DECF] transition-colors inline-flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Explore Craftsmanship Standards</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — INTERACTIVE MATERIAL LIBRARY
          Tactile explorer of White Oak, Burmese Teak, Walnut, Linen, Bouclé, Leather.
      ========================================================================= */}
      <MaterialLibrary />

      {/* =========================================================================
          SECTION 07 — EDITORIAL LOOKBOOK TEASER
          Magazine style preview.
      ========================================================================= */}
      <section id="lookbook-teaser-section" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F6F3ED] w-full">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5DECF] pb-4 sm:pb-6 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                THE SPATIAL LOOKBOOK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141311] font-normal mt-1">
                Spaces that feel like home.
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('lookbook')}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141311] hover:text-[#8E7048] transition-colors flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 4 Lookbook Spaces</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Hero Lookbook Banner */}
          <div
            onClick={() => setCurrentPage('lookbook')}
            className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[320px] sm:min-h-[380px] overflow-hidden cursor-pointer group shadow-lg"
          >
            <img
              src={heroLookbook.heroImage}
              alt={heroLookbook.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-[#141311]/40 to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-[#FAF8F5] flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 sm:space-y-2 max-w-xl">
                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono">
                  {heroLookbook.subtitle} • {heroLookbook.locationContext}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium">{heroLookbook.title}</h3>
                <p className="text-xs text-[#E5DECF] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {heroLookbook.description}
                </p>
              </div>

              <span className="px-5 sm:px-6 py-3 sm:py-3.5 bg-[#FAF8F5] text-[#141311] text-xs uppercase tracking-[0.18em] font-semibold rounded-xs group-hover:bg-[#E5DECF] transition-colors self-start md:self-auto shrink-0 flex items-center space-x-2">
                <span>Shop this Space</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — ROOM VISUALIZER TEASER
          "See it in your space."
      ========================================================================= */}
      <section id="room-visualizer-teaser-section" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-[#141311] text-[#FAF8F5] w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono">
              <Sparkles size={13} />
              <span>Interactive Spatial Studio</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F5] leading-tight">
              See it in your space.
            </h2>

            <p className="text-xs sm:text-sm text-[#E5DECF] font-light leading-relaxed">
              Furnishing a new residence requires confidence in proportions and daylight interaction. Use our interactive Room Studio to test timber finishes, wall plasters, and furniture compositions before placing your order.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 text-xs text-[#A29B8F] font-light">
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#8E7048] shrink-0 mt-0.5" />
                <span>Simulate Morning, Midday, and Golden Hour daylight moods</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#8E7048] shrink-0 mt-0.5" />
                <span>Preview Natural Oak, Smoked Walnut, and Burmese Teak finishes</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check size={14} className="text-[#8E7048] shrink-0 mt-0.5" />
                <span>Calibrated for standard Bangladeshi apartment ceiling heights</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                id="home-launch-visualizer-btn"
                onClick={() => setCurrentPage('visualizer')}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#FAF8F5] text-[#141311] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#E5DECF] transition-all inline-flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <span>Launch Interactive Room Studio</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Preview Mockup Box */}
          <div
            onClick={() => setCurrentPage('visualizer')}
            className="lg:col-span-6 relative aspect-[4/3] bg-[#1C1A18] overflow-hidden border border-[#292623] p-3 sm:p-4 group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              alt="Room Visualizer Simulator"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-103"
            />
            
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
              <div className="bg-[#141311]/90 backdrop-luxury text-[#FAF8F5] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xs text-[10px] sm:text-[11px] font-mono border border-[#292623]">
                Sunlit Living Pavilion • Midday Light
              </div>
              <div className="bg-[#FAF8F5] text-[#141311] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xs text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider">
                Interactive
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — DESIGN JOURNAL
          Editorial articles preview.
      ========================================================================= */}
      <section id="journal-preview-section" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] w-full">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5DECF] pb-4 sm:pb-6 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                THE DESIGN JOURNAL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141311] font-normal mt-1">
                Notes on Thoughtful Living
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('journal')}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141311] hover:text-[#8E7048] transition-colors flex items-center space-x-1 cursor-pointer self-start md:self-auto"
            >
              <span>Read All Editorial Essays</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
              <article
                key={article.id}
                onClick={() => navigateToArticle(article)}
                className="group flex flex-col space-y-3.5 sm:space-y-4 cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[#F6F3ED] overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-[#7E776C] font-mono">
                    <span className="text-[#8E7048] font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#141311] group-hover:text-[#8E7048] transition-colors leading-snug font-medium">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#5C564E] leading-relaxed line-clamp-2 font-light">
                    {article.excerpt}
                  </p>

                  <span className="text-xs text-[#141311] font-medium inline-flex items-center space-x-1 group-hover:text-[#8E7048] transition-colors pt-1">
                    <span>Read Essay</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — TRUST & CONCIERGE SERVICE
          Restrained 4-pillar presentation without generic badges.
      ========================================================================= */}
      <section id="trust-service-section" className="py-20 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F6F3ED] border-t border-[#E5DECF] w-full">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
              THE CONCIERGE PROMISE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141311] font-normal">
              Considered Service Across Bangladesh
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[#8E7048] font-mono text-xs">01 / LOGISTICS</div>
              <h4 className="font-serif text-base sm:text-lg text-[#141311] font-medium">Nationwide White-Glove</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed font-light">
                Direct two-person transport and room-of-choice placement throughout Dhaka, Chittagong, Sylhet, and all districts.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-[#8E7048] font-mono text-xs">02 / GUARANTEE</div>
              <h4 className="font-serif text-base sm:text-lg text-[#141311] font-medium">10-Year Timber Warranty</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed font-light">
                Every mortise tenon joint and structural timber rail is warranted against warping and joint failure.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-[#8E7048] font-mono text-xs">03 / ASSEMBLY</div>
              <h4 className="font-serif text-base sm:text-lg text-[#141311] font-medium">Master Installation</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed font-light">
                Our in-house carpentry crew unboxes, levels, and finishes hardware on-site with zero packaging waste left behind.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-[#8E7048] font-mono text-xs">04 / CONSULTATION</div>
              <h4 className="font-serif text-base sm:text-lg text-[#141311] font-medium">Spatial Studio Advice</h4>
              <p className="text-xs text-[#5C564E] leading-relaxed font-light">
                Complimentary layout reviews with our Dhaka interior studio to verify scale and timber pairing.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FINAL CTA
          "Make space for better living."
      ========================================================================= */}
      <section id="final-cta-section" className="relative py-24 sm:py-44 px-4 sm:px-8 lg:px-12 bg-[#141311] text-[#FAF8F5] overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Simple Grain Interior Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-105"
          />
          <div className="absolute inset-0 bg-[#141311]/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFCABA] font-mono">
            CREATE YOUR SANCTUARY
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] leading-tight">
            Make space for better living.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#E5DECF] font-light max-w-xl mx-auto leading-relaxed">
            Begin your home’s next chapter with handcrafted solid wood furniture designed to be cherished for a lifetime.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setCurrentPage('collection')}
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 bg-[#FAF8F5] text-[#141311] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#E5DECF] transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore the Collection</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 bg-transparent text-[#FAF8F5] border border-[#FAF8F5]/50 text-xs font-medium uppercase tracking-[0.2em] rounded-xs hover:bg-[#FAF8F5]/10 transition-all backdrop-luxury cursor-pointer flex items-center justify-center"
            >
              <span>Book Studio Consultation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
