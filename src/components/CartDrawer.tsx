import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    setCurrentPage,
    navigateToProduct
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!isCartOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  const freeDeliveryThreshold = 50000;
  const isFreeDelivery = cartTotal >= freeDeliveryThreshold;
  const deliveryFee = cartTotal === 0 ? 0 : isFreeDelivery ? 0 : 1500;
  const discountAmount = promoApplied ? Math.round(cartTotal * 0.05) : 0;
  const grandTotal = cartTotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'TIMELESS' || promoCode.trim().toUpperCase() === 'SIMPLE5') {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
    window.location.hash = 'checkout';
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-[#191816]/50 backdrop-luxury animate-fade-in flex justify-end"
      onClick={() => setIsCartOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div
        id="cart-drawer"
        className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#EFEAE1] animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-[#EFEAE1] flex items-center justify-between bg-[#FBF9F5]">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={18} className="text-[#191816]" />
            <h3 className="font-serif text-lg sm:text-xl text-[#191816] font-medium">Shopping Bag</h3>
            <span className="text-xs font-mono text-[#7A746B]">
              ({cart.reduce((s, i) => s + i.quantity, 0)} {cart.reduce((s, i) => s + i.quantity, 0) === 1 ? 'piece' : 'pieces'})
            </span>
          </div>
          <button
            id="close-cart-btn"
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center -mr-2 text-[#7A746B] hover:text-[#191816] transition-colors rounded-full hover:bg-[#EFEAE1] active:bg-[#E2D9CA]"
            aria-label="Close shopping bag"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="px-6 py-2.5 bg-[#F5F2EB] border-b border-[#EFEAE1] text-xs text-[#57524A]">
          {isFreeDelivery ? (
            <p className="flex items-center space-x-1.5 text-[#2E6F40]">
              <Truck size={14} />
              <span>Complimentary nationwide white-glove delivery unlocked</span>
            </p>
          ) : (
            <p className="flex items-center justify-between">
              <span>Add {formatPrice(freeDeliveryThreshold - cartTotal)} more for free nationwide delivery</span>
              <span className="font-mono text-[10px] text-[#A38053]">
                {Math.round((cartTotal / freeDeliveryThreshold) * 100)}%
              </span>
            </p>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F5F2EB] flex items-center justify-center mx-auto text-[#9E978D]">
                <ShoppingBag size={22} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-lg text-[#191816]">Your shopping bag is empty.</p>
              <p className="text-xs text-[#7A746B] max-w-xs mx-auto">
                Explore our handcrafted collection of solid timber seating, tables, and architectural storage.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentPage('collection');
                }}
                className="mt-2 px-6 py-2.5 bg-[#191816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-[#38342F] transition-all inline-block cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                id={`cart-item-${item.id}`}
                className="flex space-x-4 pb-6 border-b border-[#EFEAE1] last:border-0"
              >
                <img
                  src={item.product.images.primary}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToProduct(item.product);
                  }}
                  className="w-20 h-20 object-cover rounded-xs bg-[#F5F2EB] shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4
                        onClick={() => {
                          setIsCartOpen(false);
                          navigateToProduct(item.product);
                        }}
                        className="font-serif text-base text-[#191816] hover:text-[#A38053] transition-colors cursor-pointer truncate"
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#9E978D] hover:text-[#B94A48] p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {/* Finish Detail */}
                    <div className="flex items-center space-x-1.5 mt-0.5 text-[11px] text-[#7A746B]">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: item.selectedFinish.colorHex }}
                      />
                      <span>{item.selectedFinish.name}</span>
                    </div>

                    <div className="text-xs text-[#191816] font-mono mt-1">
                      {formatPrice(item.product.price)}
                    </div>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#E2D9CA] rounded-xs bg-[#FDFBF7]">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-xs text-[#57524A] hover:text-[#191816] active:bg-[#EFEAE1]"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono text-[#191816] min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-xs text-[#57524A] hover:text-[#191816] active:bg-[#EFEAE1]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-mono font-medium text-[#191816]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cart.length > 0 && (
          <div
            className="p-5 sm:p-6 bg-[#FBF9F5] border-t border-[#EFEAE1] space-y-4"
            style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
          >
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex space-x-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo code (e.g. TIMELESS)"
                disabled={promoApplied}
                className="flex-1 bg-[#FDFBF7] border border-[#E2D9CA] text-xs px-3 py-2.5 rounded-xs uppercase tracking-wider focus:outline-none focus:border-[#191816]"
              />
              <button
                type="submit"
                disabled={promoApplied}
                className="px-4 py-2.5 bg-[#262421] text-[#FDFBF7] text-xs uppercase tracking-wider rounded-xs hover:bg-[#38342F] disabled:opacity-50 cursor-pointer active:bg-[#38342F]"
              >
                {promoApplied ? 'Applied' : 'Apply'}
              </button>
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#57524A] border-t border-[#EFEAE1] pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-[#191816]">{formatPrice(cartTotal)}</span>
              </div>

              {promoApplied && (
                <div className="flex justify-between text-[#2E6F40]">
                  <span>Privilege Courtesy (5%)</span>
                  <span className="font-mono">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>White-Glove Delivery (Bangladesh)</span>
                <span className="font-mono text-[#191816]">
                  {deliveryFee === 0 ? 'Complimentary' : formatPrice(deliveryFee)}
                </span>
              </div>

              <div className="flex justify-between text-sm font-medium text-[#191816] pt-2 border-t border-[#EFEAE1]">
                <span className="font-serif">Estimated Total</span>
                <span className="font-mono font-semibold">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="cart-proceed-checkout-btn"
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#191816] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.18em] rounded-xs hover:bg-[#38342F] transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer active:bg-[#38342F]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={14} />
            </button>

            <p className="text-[10px] text-center text-[#7A746B]">
              Handcrafted in Bangladesh • Inspected before nationwide delivery
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
