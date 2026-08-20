import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { FinishOption, Product } from '../types';
import { DimensionsDiagram } from '../components/DimensionsDiagram';
import { ProductCard } from '../components/ProductCard';
import {
  Heart,
  ShoppingBag,
  Share2,
  Truck,
  Shield,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Check,
  Compass,
  Maximize2
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProductSlug,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct,
    navigateToVisualizerWithProduct,
    setCurrentPage,
    showToast
  } = useShop();

  const product: Product =
    PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(
    product.finishOptions[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Reset product state when product id changes
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedFinish(product.finishOptions[0]);
    setQuantity(1);
  }, [product.id]);

  // Accordion states
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    story: true,
    craftsmanship: true,
    materials: false,
    dimensions: true,
    delivery: false,
    warranty: false,
    care: false
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSaved = isInWishlist(product.id);

  // Scroll listener for sticky mobile buy bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageList = [
    { label: 'Studio View', url: product.images.primary },
    { label: 'Architectural Angle', url: product.images.secondary },
    { label: 'Lifestyle Setting', url: product.images.lifestyle },
    { label: 'Material Close-Up', url: product.images.detailCloseUp },
    ...(product.images.joineryMacro
      ? [{ label: 'Joinery Macro', url: product.images.joineryMacro }]
      : [])
  ];

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard');
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#7E776C] font-mono" aria-label="Breadcrumb">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-[#141311] transition-colors cursor-pointer"
          >
            Atelier
          </button>
          <span>/</span>
          <button
            onClick={() => setCurrentPage('collection')}
            className="hover:text-[#141311] transition-colors cursor-pointer"
          >
            Collection
          </button>
          <span>/</span>
          <span className="text-[#8E7048]">{product.category}</span>
          <span>/</span>
          <span className="text-[#141311] truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Above the Fold: Large Gallery + Sticky Buy Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Photo Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] bg-[#F4EFEA] overflow-hidden">
              <img
                src={imageList[activeImageIndex]?.url || product.images.primary}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />

              {/* Tag Overlays */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2 pointer-events-none">
                {product.isNew && (
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-[#141311] text-[#FAF8F5] font-medium px-3 py-1 font-mono">
                    New Release
                  </span>
                )}
                <span className="text-[9px] uppercase tracking-[0.25em] bg-[#FAF8F5]/90 backdrop-luxury text-[#141311] font-medium px-3 py-1 font-mono">
                  {product.primaryMaterial}
                </span>
              </div>

              {/* Direct Room Studio Launcher button */}
              <button
                onClick={() => navigateToVisualizerWithProduct(product)}
                className="absolute bottom-4 right-4 px-4 py-2.5 bg-[#FAF8F5]/95 backdrop-luxury border border-[#E5DECF] text-[#141311] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#141311] hover:text-[#FAF8F5] transition-all flex items-center space-x-2 shadow-sm cursor-pointer"
              >
                <Sparkles size={13} className="text-[#8E7048]" />
                <span>See in Your Space</span>
              </button>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer bg-[#F4EFEA] relative ${
                    activeImageIndex === idx
                      ? 'border-[#141311] ring-1.5 ring-[#141311]'
                      : 'border-[#E5DECF] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Trust Assurance Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5DECF] text-xs text-[#5C564E]">
              <div className="flex items-center space-x-2">
                <Truck size={15} className="text-[#8E7048] shrink-0" />
                <span>Nationwide delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={15} className="text-[#8E7048] shrink-0" />
                <span>10-Year guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass size={15} className="text-[#8E7048] shrink-0" />
                <span>White-glove assembly</span>
              </div>
            </div>

          </div>

          {/* Right Column: Information, Pricing, Finishes, and Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header Information */}
            <div className="space-y-3 pb-6 border-b border-[#E5DECF]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                  {product.category}
                </span>
                <span className="text-xs font-mono text-[#7E776C]">
                  {product.inStock ? 'Ready in Dhaka Studio' : 'Crafted to Order (14 Days)'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#141311] font-normal leading-[1.1]">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#7E776C] font-serif italic">
                &ldquo;{product.tagline}&rdquo;
              </p>

              {/* Price block */}
              <div className="flex items-baseline space-x-4 pt-2">
                <span className="text-2xl sm:text-3xl font-medium font-mono text-[#141311]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-[#A29B8F] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-[11px] text-[#7E776C]">Incl. VAT & white-glove setup</span>
              </div>
            </div>

            {/* Finish & Timber Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#141311]">
                  Select Timber & Finish
                </span>
                <span className="text-[#5C564E] font-mono">
                  {selectedFinish.name} ({selectedFinish.woodType})
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {product.finishOptions.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-3 border text-left transition-all flex items-center space-x-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#141311] bg-[#141311] text-[#FAF8F5]'
                          : 'border-[#E5DECF] bg-[#FAF8F5] text-[#5C564E] hover:border-[#141311]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                        style={{ backgroundColor: finish.colorHex }}
                      />
                      <div className="min-w-0">
                        <span className="block text-xs font-medium truncate">{finish.name}</span>
                        <span className={`block text-[10px] truncate ${isSelected ? 'text-[#DFCABA]' : 'text-[#7E776C]'}`}>
                          {finish.woodType}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Purchase CTA Row */}
            <div className="space-y-4 pt-4 border-t border-[#E5DECF]">
              <div className="flex items-center space-x-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-[#E5DECF] bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-3.5 text-xs text-[#5C564E] hover:text-[#141311]"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 py-3.5 text-xs font-mono font-medium text-[#141311] min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-3.5 text-xs text-[#5C564E] hover:text-[#141311]"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  id="pdp-add-to-bag-btn"
                  onClick={() => addToCart(product, selectedFinish, quantity)}
                  className="flex-1 py-4 bg-[#141311] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#3D3934] transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
                </button>

                {/* Wishlist Toggle */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 border transition-colors cursor-pointer ${
                    isSaved
                      ? 'border-[#141311] bg-[#141311] text-[#FAF8F5]'
                      : 'border-[#E5DECF] bg-[#FAF8F5] text-[#5C564E] hover:text-[#141311] hover:border-[#141311]'
                  }`}
                  title={isSaved ? 'Saved to wishlist' : 'Save piece'}
                  aria-label="Wishlist"
                >
                  <Heart size={16} fill={isSaved ? '#FAF8F5' : 'none'} />
                </button>

                {/* Share Link */}
                <button
                  onClick={handleShare}
                  className="p-4 border border-[#E5DECF] bg-[#FAF8F5] text-[#5C564E] hover:text-[#141311] transition-colors cursor-pointer"
                  title="Share design link"
                  aria-label="Share"
                >
                  <Share2 size={16} />
                </button>
              </div>

              {/* Room Visualizer Quick Action Banner */}
              <div
                onClick={() => navigateToVisualizerWithProduct(product)}
                className="p-4 bg-[#F6F3ED] border border-[#E5DECF] flex items-center justify-between cursor-pointer hover:border-[#8E7048] transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#141311] text-[#FAF8F5] flex items-center justify-center shrink-0">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141311]">
                      Preview in Room Studio
                    </h4>
                    <p className="text-[11px] text-[#7E776C]">
                      Simulate proportions and daylight in Living, Dining or Bedroom settings
                    </p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#8E7048] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* =========================================================================
                SPECIFICATION ACCORDION SECTIONS
            ========================================================================= */}
            <div className="border-t border-[#E5DECF] divide-y divide-[#E5DECF]">
              
              {/* 1. Design Story */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('story')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Design Narrative & Purpose</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.story ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.story && (
                  <div className="pt-3 text-xs sm:text-sm text-[#5C564E] leading-relaxed space-y-2 font-light">
                    <p>{product.description}</p>
                    <div className="pt-2 text-xs text-[#7E776C]">
                      Recommended placement: <strong className="text-[#141311]">{product.roomSuitability.join(' • ')}</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Craftsmanship */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('craftsmanship')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Master Joinery & Craftsmanship</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.craftsmanship ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.craftsmanship && (
                  <div className="pt-3 text-xs text-[#5C564E] space-y-2">
                    {product.craftsmanshipHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check size={14} className="text-[#8E7048] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Materials */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Honest Materials & Sourcing</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.materials ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.materials && (
                  <div className="pt-3 text-xs text-[#5C564E] space-y-2">
                    <p className="leading-relaxed font-light">
                      We harvest select-grade timber through certified sustainable forestry partnerships.
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-[#141311]">
                      {product.materials.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 4. Dimensions & Scale Diagram */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('dimensions')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Dimensions, Proportions & Scale</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.dimensions ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.dimensions && (
                  <div className="pt-4">
                    <DimensionsDiagram
                      dimensions={product.dimensions}
                      productName={product.name}
                      category={product.category}
                    />
                  </div>
                )}
              </div>

              {/* 5. Delivery in Bangladesh */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Delivery & Assembly in Bangladesh</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.delivery ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.delivery && (
                  <div className="pt-3 text-xs text-[#5C564E] space-y-3 leading-relaxed font-light">
                    <div>
                      <strong className="text-[#141311] block font-mono">Lead Time:</strong>
                      <span>{product.deliveryInfo.leadTime}</span>
                    </div>
                    <div>
                      <strong className="text-[#141311] block font-mono">White-Glove Placement:</strong>
                      <span>{product.deliveryInfo.assembly}</span>
                    </div>
                    <div>
                      <strong className="text-[#141311] block font-mono">Nationwide Coverage:</strong>
                      <span>{product.deliveryInfo.shippingBangladesh}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Warranty */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('warranty')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>10-Year Timber Warranty</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.warranty ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.warranty && (
                  <div className="pt-3 text-xs text-[#5C564E] space-y-2 leading-relaxed font-light">
                    <p className="font-semibold text-[#141311]">{product.warrantyInfo}</p>
                    <p>
                      Covers structural mortise-and-tenon failure, wood splitting, and hardware malfunction under standard indoor residential usage.
                    </p>
                  </div>
                )}
              </div>

              {/* 7. Care */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#141311] cursor-pointer"
                >
                  <span>Care & Longevity Guide</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${openAccordions.care ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordions.care && (
                  <div className="pt-3 text-xs text-[#5C564E] space-y-2 font-light">
                    {product.careInstructions.map((inst, idx) => (
                      <p key={idx} className="leading-relaxed">• {inst}</p>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            RELATED DESIGNS
        ========================================================================= */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#E5DECF] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                  COMPLEMENTARY ARCHETYPES
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141311] font-normal mt-1">
                  Complete the Spatial Composition
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('collection')}
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#141311] hover:text-[#8E7048] flex items-center space-x-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Sticky Mobile Add-to-Bag Bar */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF8F5]/95 backdrop-luxury border-t border-[#E5DECF] p-3.5 z-40 flex items-center justify-between shadow-lg animate-slide-up">
          <div className="flex items-center space-x-2.5 min-w-0 mr-3">
            <img
              src={product.images.primary}
              alt=""
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-cover bg-[#F4EFEA] shrink-0"
            />
            <div className="min-w-0">
              <span className="font-serif text-sm font-medium text-[#141311] block truncate">
                {product.name}
              </span>
              <span className="text-xs font-mono text-[#8E7048] block">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, selectedFinish, 1)}
            className="px-5 py-2.5 bg-[#141311] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] rounded-xs shrink-0 cursor-pointer"
          >
            Add to Bag
          </button>
        </div>
      )}

    </div>
  );
};
