import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { LOOKBOOK_SCENES } from '../data/lookbook';
import { PRODUCTS } from '../data/products';
import { LookbookScene, Product } from '../types';
import {
  Sparkles,
  ArrowRight,
  Eye,
  ShoppingBag,
  Plus,
  Compass,
  Check
} from 'lucide-react';

export const LookbookPage: React.FC = () => {
  const {
    navigateToProduct,
    setQuickViewProduct,
    addToCart,
    navigateToVisualizerWithProduct,
    setCurrentPage
  } = useShop();

  const [activeHotspotProduct, setActiveHotspotProduct] = useState<Product | null>(null);

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  return (
    <div className="pt-20 sm:pt-24 pb-32 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* Editorial Cover Header */}
        <div className="max-w-3xl space-y-4 border-b border-[#E5DECF] pb-10">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#8E7048] font-mono">
            <span>Volume IV</span>
            <span>•</span>
            <span>Spatial Lookbook</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#141311] font-normal leading-[1.08] tracking-tight">
            Spaces that feel like home.
          </h1>

          <p className="text-xs sm:text-sm text-[#5C564E] font-light leading-relaxed max-w-xl">
            A visual documentation of Simple Grain pieces installed across contemporary Bangladeshi residences — exploring daylight, honest timbers, and proportional balance.
          </p>
        </div>

        {/* Magazine Editorial Chapters */}
        <div className="space-y-36">
          {LOOKBOOK_SCENES.map((scene: LookbookScene, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <section
                key={scene.id}
                id={`lookbook-chapter-${scene.id}`}
                className="space-y-12"
              >
                
                {/* Chapter Index Title Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DECF] pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                      Chapter 0{index + 1} • {scene.locationContext}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#141311] font-normal">
                      {scene.title}
                    </h2>
                  </div>
                  <p className="text-xs text-[#7E776C] font-light max-w-md">
                    {scene.subtitle} — {scene.description}
                  </p>
                </div>

                {/* Hero Scene with Interactive Hotspots */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#141311] overflow-hidden group shadow-lg">
                  <img
                    src={scene.heroImage}
                    alt={scene.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Interactive Hotspot Markers */}
                  {scene.hotspots.map((hotspot) => {
                    const matchedProduct = PRODUCTS.find((p) => p.id === hotspot.productId);
                    if (!matchedProduct) return null;

                    return (
                      <div
                        key={hotspot.id}
                        className="absolute z-20"
                        style={{ top: `${hotspot.yPercent}%`, left: `${hotspot.xPercent}%` }}
                      >
                        <button
                          onClick={() => setActiveHotspotProduct(matchedProduct)}
                          className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF8F5]/90 backdrop-luxury text-[#141311] border border-[#141311]/20 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#141311] hover:text-[#FAF8F5] transition-all cursor-pointer group/pin"
                          aria-label={`Inspect ${matchedProduct.name}`}
                        >
                          <Plus size={14} className="group-hover/pin:rotate-45 transition-transform" />
                          
                          {/* Pulsing ring */}
                          <span className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none" />
                        </button>
                      </div>
                    );
                  })}

                  {/* Hotspot Instruction Pill */}
                  <div className="absolute bottom-6 left-6 bg-[#141311]/85 backdrop-luxury text-[#FAF8F5] px-4 py-2 rounded-xs text-[11px] font-mono border border-[#3D3934] flex items-center space-x-2 pointer-events-none">
                    <Sparkles size={13} className="text-[#DFCABA]" />
                    <span>Click on pins to inspect featured pieces</span>
                  </div>
                </div>

                {/* Editorial Secondary Image Pairing & Storytelling */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  <div className="md:col-span-7 aspect-[4/3] bg-[#E5DECF] overflow-hidden">
                    <img
                      src={scene.secondaryImages[0]}
                      alt={`${scene.title} Detail`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                    />
                  </div>

                  <div className="md:col-span-5 space-y-6 md:pl-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E7048] font-mono block">
                      ARCHITECTURAL HARMONY
                    </span>

                    <blockquote className="font-serif text-2xl sm:text-3xl text-[#141311] font-normal leading-snug">
                      &ldquo;The rhythm of horizontal grain softens concrete architecture into a living space.&rdquo;
                    </blockquote>

                    <div className="space-y-3 pt-2 text-xs text-[#5C564E] font-light leading-relaxed">
                      <p>
                        Designed specifically with consideration for generous ceiling heights and wide balcony glass typical of contemporary Dhaka residences.
                      </p>
                    </div>

                    {/* Pieces featured in this chapter */}
                    <div className="pt-4 border-t border-[#E5DECF] space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E776C] font-mono block">
                        Featured in this room:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {scene.featuredProductIds.map((pId) => {
                          const prod = PRODUCTS.find((p) => p.id === pId);
                          if (!prod) return null;
                          return (
                            <button
                              key={prod.id}
                              onClick={() => navigateToProduct(prod)}
                              className="px-3 py-1.5 bg-[#F6F3ED] border border-[#E5DECF] text-[11px] text-[#141311] hover:border-[#141311] transition-colors cursor-pointer flex items-center space-x-1.5"
                            >
                              <span>{prod.name}</span>
                              <span className="font-mono text-[#8E7048]">({formatPrice(prod.price)})</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>

              </section>
            );
          })}
        </div>

        {/* Floating Hotspot Product Quick View Card Modal */}
        {activeHotspotProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-luxury animate-fade-in">
            <div className="bg-[#FAF8F5] max-w-md w-full p-6 space-y-5 border border-[#E5DECF] shadow-2xl relative">
              
              <button
                onClick={() => setActiveHotspotProduct(null)}
                className="absolute top-4 right-4 text-xs font-mono uppercase tracking-widest text-[#7E776C] hover:text-[#141311]"
              >
                Close ✕
              </button>

              <div className="aspect-[4/3] bg-[#F4EFEA] overflow-hidden">
                <img
                  src={activeHotspotProduct.images.primary}
                  alt={activeHotspotProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8E7048] font-mono">
                  <span>{activeHotspotProduct.category}</span>
                  <span>{activeHotspotProduct.dimensions.widthCm}cm Width</span>
                </div>

                <h3 className="font-serif text-2xl text-[#141311] font-medium">
                  {activeHotspotProduct.name}
                </h3>

                <p className="text-xs text-[#5C564E] line-clamp-2 font-light">
                  {activeHotspotProduct.description}
                </p>

                <div className="text-lg font-mono font-semibold text-[#141311] pt-1">
                  {formatPrice(activeHotspotProduct.price)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    addToCart(activeHotspotProduct, activeHotspotProduct.finishOptions[0], 1);
                    setActiveHotspotProduct(null);
                  }}
                  className="py-3 bg-[#141311] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#3D3934] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <ShoppingBag size={13} />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => {
                    navigateToProduct(activeHotspotProduct);
                    setActiveHotspotProduct(null);
                  }}
                  className="py-3 bg-[#F6F3ED] border border-[#E5DECF] text-[#141311] text-xs uppercase tracking-wider font-medium hover:bg-[#E5DECF] transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
