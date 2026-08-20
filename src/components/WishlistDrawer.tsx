import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistIds,
    toggleWishlist,
    addToCart,
    navigateToProduct,
    setCurrentPage
  } = useShop();

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!isWishlistOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsWishlistOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWishlistOpen, setIsWishlistOpen]);

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-[#191816]/50 backdrop-luxury animate-fade-in flex justify-end"
      onClick={() => setIsWishlistOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-title"
    >
      <div
        id="wishlist-drawer"
        className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#EFEAE1] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EFEAE1] flex items-center justify-between bg-[#FBF9F5]">
          <div className="flex items-center space-x-2">
            <Heart size={18} className="text-[#191816] fill-[#191816]" />
            <h3 className="font-serif text-xl text-[#191816] font-medium">Saved Pieces</h3>
            <span className="text-xs font-mono text-[#7A746B]">({savedProducts.length})</span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#7A746B] hover:text-[#191816] transition-colors rounded-full hover:bg-[#EFEAE1]"
            aria-label="Close saved pieces"
          >
            <X size={18} />
          </button>
        </div>

        {/* Saved Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EB] flex items-center justify-center mx-auto text-[#9E978D]">
                <Heart size={22} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-lg text-[#191816]">No saved pieces yet.</p>
              <p className="text-xs text-[#7A746B] max-w-xs mx-auto">
                Bookmark your favorite furniture pieces to review finishes, dimensions, and styling pairings.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  setCurrentPage('collection');
                }}
                className="mt-2 px-6 py-2.5 bg-[#191816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-[#38342F] transition-all inline-block cursor-pointer"
              >
                Browse Designs
              </button>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="flex space-x-4 pb-6 border-b border-[#EFEAE1] last:border-0"
              >
                <img
                  src={product.images.primary}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateToProduct(product);
                  }}
                  className="w-20 h-20 object-cover rounded-xs bg-[#F5F2EB] shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] text-[#A38053] tracking-widest uppercase block">
                        {product.category}
                      </span>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-[#9E978D] hover:text-[#B94A48] p-1 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        setIsWishlistOpen(false);
                        navigateToProduct(product);
                      }}
                      className="font-serif text-base text-[#191816] hover:text-[#A38053] transition-colors cursor-pointer truncate"
                    >
                      {product.name}
                    </h4>

                    <div className="text-xs text-[#191816] font-mono mt-1">
                      {formatPrice(product.price)}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="flex-1 py-1.5 bg-[#191816] text-[#FDFBF7] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#38342F] transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <ShoppingBag size={13} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProducts.length > 0 && (
          <div className="p-6 bg-[#FBF9F5] border-t border-[#EFEAE1] flex flex-col space-y-3">
            <button
              onClick={() => {
                savedProducts.forEach((p) => addToCart(p));
                setIsWishlistOpen(false);
              }}
              className="w-full py-3 bg-[#191816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-[#38342F] transition-all cursor-pointer"
            >
              Add All Available to Bag
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
