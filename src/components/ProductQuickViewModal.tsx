import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, ArrowRight, ShieldCheck, Truck, Ruler, Sparkles } from 'lucide-react';
import { FinishOption } from '../types';

export const ProductQuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct,
    navigateToVisualizerWithProduct
  } = useShop();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!quickViewProduct) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentFinish = selectedFinish || product.finishOptions[0];
  const isSaved = isInWishlist(product.id);

  const imageList = [
    product.images.primary,
    product.images.secondary,
    product.images.lifestyle,
    product.images.detailCloseUp
  ].filter(Boolean);

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  const handleClose = () => {
    setQuickViewProduct(null);
    setSelectedFinish(null);
    setSelectedImageIndex(0);
    setQuantity(1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#191816]/60 backdrop-luxury animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      <div
        id="quick-view-modal"
        className="relative w-full max-w-4xl bg-[#FDFBF7] border border-[#EFEAE1] shadow-2xl rounded-xs overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FDFBF7]/90 text-[#262421] hover:text-[#191816] hover:bg-[#F5F2EB] flex items-center justify-center transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Left: Gallery */}
        <div className="md:w-1/2 bg-[#F5F2EB] p-4 sm:p-6 flex flex-col justify-between">
          <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-[#EFEAE1]">
            <img
              src={imageList[selectedImageIndex] || product.images.primary}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center space-x-2 mt-4 overflow-x-auto pb-1">
            {imageList.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-14 h-14 rounded-xs overflow-hidden border transition-all shrink-0 cursor-pointer ${
                  selectedImageIndex === idx ? 'border-[#191816] ring-1 ring-[#191816]' : 'border-[#EFEAE1] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[85vh]">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-[#7A746B] tracking-widest uppercase">
                <span>{product.category}</span>
                <span className="font-mono">{product.inStock ? 'In Stock • Handcrafted in Dhaka' : 'Made to Order'}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#191816] font-medium mt-1">
                {product.name}
              </h2>
              
              <div className="flex items-baseline space-x-3 mt-2">
                <span className="text-xl font-medium text-[#191816] font-mono">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#9E978D] line-through font-mono">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed">
              {product.description}
            </p>

            {/* Finish Selection */}
            <div className="pt-2 border-t border-[#EFEAE1] space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#262421]">
                Selected Finish: <span className="font-normal text-[#57524A]">{currentFinish.name} ({currentFinish.woodType})</span>
              </label>
              <div className="flex items-center space-x-3">
                {product.finishOptions.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-xs border text-xs transition-all cursor-pointer ${
                      currentFinish.id === finish.id
                        ? 'border-[#191816] bg-[#191816] text-[#FDFBF7]'
                        : 'border-[#E2D9CA] bg-transparent text-[#57524A] hover:border-[#191816]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: finish.colorHex }} />
                    <span>{finish.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Dimensions */}
            <div className="p-3 bg-[#F5F2EB] rounded-xs text-xs text-[#57524A] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Ruler size={15} className="text-[#A38053]" />
                <span>Dimensions:</span>
              </div>
              <span className="font-mono text-[#191816]">
                {product.dimensions.widthCm}W × {product.dimensions.depthCm}D × {product.dimensions.heightCm}H cm ({product.dimensions.widthInches} × {product.dimensions.depthInches})
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#EFEAE1] space-y-3 mt-6">
            <div className="flex items-center space-x-3">
              {/* Quantity Selector */}
              <div className="flex items-center border border-[#E2D9CA] rounded-xs bg-[#FDFBF7]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-xs text-[#57524A] hover:text-[#191816] transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-2.5 text-xs font-mono text-[#191816] min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-xs text-[#57524A] hover:text-[#191816] transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Bag */}
              <button
                id="quickview-add-to-bag-btn"
                onClick={() => {
                  addToCart(product, currentFinish, quantity);
                  handleClose();
                }}
                className="flex-1 py-3 bg-[#191816] text-[#FDFBF7] text-xs font-medium uppercase tracking-[0.15em] rounded-xs hover:bg-[#38342F] transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
              >
                <ShoppingBag size={15} />
                <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-xs border transition-colors ${
                  isSaved
                    ? 'border-[#C5A880] bg-[#C5A880] text-[#191816]'
                    : 'border-[#E2D9CA] text-[#57524A] hover:text-[#191816] hover:border-[#191816]'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save piece'}
              >
                <Heart size={16} fill={isSaved ? '#191816' : 'none'} />
              </button>
            </div>

            {/* Room Studio & Full Specs links */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => {
                  navigateToVisualizerWithProduct(product);
                  handleClose();
                }}
                className="text-xs text-[#A38053] hover:underline flex items-center space-x-1 font-medium cursor-pointer"
              >
                <Sparkles size={13} />
                <span>View in Room Studio</span>
              </button>

              <button
                onClick={() => {
                  navigateToProduct(product);
                  handleClose();
                }}
                className="text-xs text-[#191816] hover:underline flex items-center space-x-1 font-medium cursor-pointer"
              >
                <span>View Complete Specifications</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
