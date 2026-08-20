import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Shield, Truck, Check, ArrowLeft, CreditCard, Banknote, Smartphone, Printer, Sparkles } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart, setCurrentPage, showToast } = useShop();

  const [division, setDivision] = useState('Dhaka');
  const [district, setDistrict] = useState('Dhaka');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'card' | 'bank'>('cod');
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [customer, setCustomer] = useState({
    name: 'Tariq Rahman',
    phone: '01711987654',
    email: 'tariq.rahman@example.com',
    address: 'Apartment 6B, Road 79, Gulshan-2',
    notes: 'Please call 1 hour before arrival. Elevator available in building.'
  });

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'TIMELIVING' || promoCode.trim().toUpperCase() === 'DHAKA10') {
      setDiscount(Math.round(cartTotal * 0.1));
      showToast('10% Atelier Welcome Privileges Applied');
    } else {
      showToast('Invalid invitation code. Try TIMELIVING');
    }
  };

  const shippingCost = division === 'Dhaka' ? 0 : 3500;
  const finalTotal = Math.max(0, cartTotal - discount + shippingCost);

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `SGF-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newId);
    setIsOrderComplete(true);
    clearCart();
    showToast(`Order ${newId} confirmed successfully`);
  };

  const bangladeshDivisions = [
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Rajshahi',
    'Khulna',
    'Barisal',
    'Rangpur',
    'Mymensingh'
  ];

  if (cart.length === 0 && !isOrderComplete) {
    return (
      <div className="pt-28 sm:pt-32 pb-24 px-4 text-center max-w-lg mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F5F2EB] flex items-center justify-center mx-auto text-[#9E978D]">
          <ShoppingBag size={24} />
        </div>
        <h2 className="font-serif text-3xl text-[#191816]">Your shopping bag is empty</h2>
        <p className="text-xs text-[#7A746B] leading-relaxed">
          Please select signature furniture pieces from our catalog before proceeding to checkout.
        </p>
        <button
          onClick={() => setCurrentPage('collection')}
          className="px-8 py-3.5 bg-[#191816] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#38342F]"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium">
              <span>Simple Grain Atelier</span>
              <span>/</span>
              <span>Secure Checkout</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#191816] font-normal mt-1">
              Order Confirmation & Delivery Details
            </h1>
          </div>

          <button
            onClick={() => setCurrentPage('collection')}
            className="text-xs uppercase tracking-wider text-[#57524A] hover:text-[#191816] flex items-center space-x-1.5"
          >
            <ArrowLeft size={14} />
            <span>Continue Browsing</span>
          </button>
        </div>

        {/* Order Success Confirmation View */}
        {isOrderComplete ? (
          <div className="max-w-2xl mx-auto bg-[#FDFBF7] p-8 sm:p-12 rounded-xs border border-[#E2D9CA] shadow-xl text-center space-y-6 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#191816] text-[#C5A880] flex items-center justify-center mx-auto">
              <Check size={28} strokeWidth={2.5} />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium block">
              RESERVATION CONFIRMED
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#191816]">
              Thank you for your order, {customer.name}.
            </h2>

            <div className="p-4 bg-[#F5F2EB] rounded-xs border border-[#E2D9CA] font-mono text-xs space-y-1">
              <div className="text-[#191816] font-bold">Order Reference: {orderId}</div>
              <div className="text-[#7A746B]">
                Destination: {customer.address}, {district}, {division}
              </div>
              <div className="text-[#7A746B]">
                Estimated Delivery: Within 4–6 Business Days (White-Glove Team)
              </div>
            </div>

            <p className="text-xs text-[#57524A] leading-relaxed font-light">
              Our Dhaka logistics concierge will call you at <strong className="text-[#191816] font-mono">{customer.phone}</strong> within 12 hours to confirm delivery appointment timing and staircase clearances.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 bg-[#F5F2EB] border border-[#E2D9CA] text-[#191816] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2"
              >
                <Printer size={14} />
                <span>Print Order Receipt</span>
              </button>
              <button
                onClick={() => {
                  setIsOrderComplete(false);
                  setCurrentPage('home');
                }}
                className="w-full sm:w-auto px-8 py-3 bg-[#191816] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#38342F]"
              >
                Return to Atelier Home
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Form: Shipping & Payment */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Section 1: Customer Contact */}
              <div className="bg-[#FDFBF7] p-5 sm:p-8 rounded-xs border border-[#EFEAE1] space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-[#191816] font-medium">
                  1. Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] font-mono focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
              </div>

              {/* Section 2: Delivery Address in Bangladesh */}
              <div className="bg-[#FDFBF7] p-5 sm:p-8 rounded-xs border border-[#EFEAE1] space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-[#191816] font-medium">
                  2. Residence Delivery Address (Bangladesh)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                      Division
                    </label>
                    <select
                      value={division}
                      onChange={(e) => {
                        setDivision(e.target.value);
                        setDistrict(e.target.value);
                      }}
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    >
                      {bangladeshDivisions.map((div) => (
                        <option key={div} value={div}>{div} Division</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                      District / City
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g. Dhaka (Gulshan / Banani / Dhanmondi)"
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                    Street Address & Apartment / House Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    placeholder="House, Road, Block, Sector, Apartment #"
                    className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1 font-mono">
                    Delivery & Elevator Notes
                  </label>
                  <input
                    type="text"
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    placeholder="e.g. Elevator available, floor 4..."
                    className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-sm sm:text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
              </div>

              {/* Section 3: Payment Method */}
              <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-xs border border-[#EFEAE1] space-y-4">
                <h3 className="font-serif text-xl text-[#191816] font-medium">
                  3. Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-4 rounded-xs border cursor-pointer flex items-start space-x-3 transition-colors ${
                      paymentMethod === 'cod'
                        ? 'border-[#191816] bg-[#F5F2EB]'
                        : 'border-[#E2D9CA] hover:border-[#191816]'
                    }`}
                  >
                    <Banknote size={20} className="text-[#A38053] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-[#191816]">
                        Cash / Card on Delivery
                      </span>
                      <span className="block text-[11px] text-[#7A746B] mt-0.5">
                        Pay upon unboxing and white-glove inspection
                      </span>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-4 rounded-xs border cursor-pointer flex items-start space-x-3 transition-colors ${
                      paymentMethod === 'bkash'
                        ? 'border-[#191816] bg-[#F5F2EB]'
                        : 'border-[#E2D9CA] hover:border-[#191816]'
                    }`}
                  >
                    <Smartphone size={20} className="text-[#A38053] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-[#191816]">
                        bKash / Nagad Direct
                      </span>
                      <span className="block text-[11px] text-[#7A746B] mt-0.5">
                        Official Merchant Wallet Checkout
                      </span>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xs border cursor-pointer flex items-start space-x-3 transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-[#191816] bg-[#F5F2EB]'
                        : 'border-[#E2D9CA] hover:border-[#191816]'
                    }`}
                  >
                    <CreditCard size={20} className="text-[#A38053] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-[#191816]">
                        Credit / Debit Card
                      </span>
                      <span className="block text-[11px] text-[#7A746B] mt-0.5">
                        Visa, Mastercard, Amex (SSLCommerz)
                      </span>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 rounded-xs border cursor-pointer flex items-start space-x-3 transition-colors ${
                      paymentMethod === 'bank'
                        ? 'border-[#191816] bg-[#F5F2EB]'
                        : 'border-[#E2D9CA] hover:border-[#191816]'
                    }`}
                  >
                    <Shield size={20} className="text-[#A38053] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-[#191816]">
                        Corporate Bank Wire
                      </span>
                      <span className="block text-[11px] text-[#7A746B] mt-0.5">
                        BRAC / City Bank Atelier Account
                      </span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#FDFBF7] p-6 sm:p-8 rounded-xs border border-[#EFEAE1] space-y-6 sticky top-24 shadow-sm">
              
              <h3 className="font-serif text-xl text-[#191816] pb-4 border-b border-[#EFEAE1]">
                Order Bag Summary ({cart.reduce((s, i) => s + i.quantity, 0)} items)
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedFinish.id}`} className="flex space-x-3 text-xs">
                    <img
                      src={item.product.images.primary}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover rounded-xs bg-[#F5F2EB] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#191816] truncate">{item.product.name}</h4>
                      <p className="text-[11px] text-[#7A746B]">
                        {item.selectedFinish.name} • Qty: {item.quantity}
                      </p>
                      <span className="font-mono text-[#191816] block mt-0.5">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo code input */}
              <div className="pt-4 border-t border-[#EFEAE1] flex space-x-2">
                <input
                  type="text"
                  placeholder="Invitation Code (e.g. TIMELIVING)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3 py-2 text-xs font-mono uppercase"
                />
                <button
                  type="button"
                  onClick={applyPromo}
                  className="px-4 py-2 bg-[#191816] text-[#FDFBF7] text-xs font-medium uppercase rounded-xs"
                >
                  Apply
                </button>
              </div>

              {/* Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-[#EFEAE1] text-xs">
                <div className="flex justify-between text-[#57524A]">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#191816]">{formatPrice(cartTotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#2D6A4F]">
                    <span>Atelier Welcome Privilege</span>
                    <span className="font-mono">-{formatPrice(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#57524A]">
                  <span>White-Glove Delivery & Installation</span>
                  <span className="font-mono text-[#191816]">
                    {shippingCost === 0 ? 'Complimentary (Dhaka)' : formatPrice(shippingCost)}
                  </span>
                </div>

                <div className="flex justify-between text-[#57524A]">
                  <span>VAT & Duties</span>
                  <span className="font-mono text-[#191816]">Included</span>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-[#EFEAE1] text-[#191816]">
                  <span className="font-serif text-lg font-medium">Total Amount</span>
                  <span className="font-mono text-xl font-bold">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#191816] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#38342F] transition-all shadow-md cursor-pointer"
              >
                Confirm Order & Reserve Pieces
              </button>

              <div className="text-[11px] text-[#7A746B] text-center flex items-center justify-center space-x-1.5 pt-2">
                <Shield size={13} className="text-[#A38053]" />
                <span>Protected by Simple Grain 10-Year Craftsmanship Guarantee</span>
              </div>

            </div>

          </form>
        )}

      </div>
    </div>
  );
};
