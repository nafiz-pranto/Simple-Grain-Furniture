import React, { useState } from 'react';
import { Product, FinishOption } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const {
    navigateToProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop();

  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(
    product.finishOptions[0]
  );
  const [isHovered, setIsHovered] = useState(false);

  const isSaved = isInWishlist(product.id);

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group flex flex-col transition-all duration-500 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Image Stage */}
      <div
        className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] bg-[#F4EFEA] overflow-hidden cursor-pointer"
        onClick={() => navigateToProduct(product)}
      >
        {/* Layered Primary & Lifestyle hover transition */}
        <img
          src={product.images.primary}
          alt={product.name}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
            isHovered && product.images.lifestyle ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {product.images.lifestyle && (
          <img
            src={product.images.lifestyle}
            alt={`${product.name} in living interior`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Minimalist Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1 pointer-events-none z-10">
          {product.isNew && (
            <span className="text-[9px] uppercase tracking-[0.25em] bg-[#141311] text-[#FAF8F5] font-medium px-2.5 py-1">
              New Release
            </span>
          )}
        </div>

        {/* Subtle Wishlist Trigger */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-10 cursor-pointer ${
            isSaved
              ? 'bg-[#141311] text-[#FAF8F5]'
              : 'bg-[#FAF8F5]/85 backdrop-luxury text-[#5C564E] hover:text-[#141311] hover:bg-[#FAF8F5] shadow-xs'
          }`}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={14} fill={isSaved ? 'currentColor' : 'none'} strokeWidth={1.5} />
        </button>

        {/* Quick View Floating Actions (Desktop hover & Mobile accessible) */}
        <div className="hidden sm:flex absolute inset-x-4 bottom-4 items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="px-3.5 py-2 bg-[#FAF8F5]/95 backdrop-luxury text-[#141311] text-[10px] font-medium uppercase tracking-[0.18em] border border-[#E5DECF] hover:bg-[#141311] hover:text-[#FAF8F5] transition-all flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <Eye size={12} />
            <span>Quick Inspect</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, selectedFinish, 1);
            }}
            className="px-3.5 py-2 bg-[#141311] text-[#FAF8F5] text-[10px] font-medium uppercase tracking-[0.18em] hover:bg-[#3D3934] transition-all shadow-sm cursor-pointer"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Editorial Content Below Image */}
      <div className="pt-3.5 pb-2 flex flex-col space-y-1.5">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#7E776C]">
          <span>{product.category}</span>
          <span className="font-mono">{product.dimensions.widthCm}cm W</span>
        </div>

        <div className="flex items-baseline justify-between pt-0.5">
          <h3
            onClick={() => navigateToProduct(product)}
            className="font-serif text-lg sm:text-xl text-[#141311] font-normal leading-snug cursor-pointer group-hover:text-[#8E7048] transition-colors"
          >
            <span className="luxury-link">{product.name}</span>
          </h3>

          <span className="text-xs font-mono font-medium text-[#141311] ml-2 shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="text-xs text-[#5C564E] font-light line-clamp-1">
          {product.primaryMaterial}
        </p>

        {/* Minimal Finish Indicator Dots with 36px touch zone */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center space-x-1 -ml-1">
            {product.finishOptions.map((finish) => (
              <button
                key={finish.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFinish(finish);
                }}
                className="w-7 h-7 flex items-center justify-center cursor-pointer"
                title={`${finish.name} (${finish.woodType})`}
                aria-label={`Select ${finish.name}`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full transition-all border border-black/10 ${
                    selectedFinish.id === finish.id
                      ? 'ring-2 ring-offset-1 ring-[#141311] scale-110'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: finish.colorHex }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-[#A29B8F] font-light hidden xs:inline">
              {product.inStock ? 'In Stock' : 'To Order'}
            </span>
            {/* Mobile quick view button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuickViewProduct(product);
              }}
              className="sm:hidden p-1.5 text-[#5C564E] hover:text-[#141311] bg-[#F6F3ED] rounded-xs text-[10px] flex items-center space-x-1 cursor-pointer"
              title="Quick inspect"
            >
              <Eye size={12} />
              <span>Inspect</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
