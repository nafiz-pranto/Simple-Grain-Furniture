import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { PageView } from '../types';

export const Header: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    cartCount,
    setIsCartOpen,
    wishlistIds,
    setIsWishlistOpen,
    setIsSearchOpen,
    setSelectedCategoryFilter
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks: { label: string; page: PageView; category?: string }[] = [
    { label: 'Collection', page: 'collection' },
    { label: 'Lookbook', page: 'lookbook' },
    { label: 'Craftsmanship', page: 'craftsmanship' },
    { label: 'Room Studio', page: 'visualizer' },
    { label: 'Manifesto', page: 'about' },
    { label: 'Journal', page: 'journal' }
  ];

  const handleNavClick = (page: PageView, category?: string) => {
    if (category) {
      setSelectedCategoryFilter(category);
    }
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'h-[56px] sm:h-[62px] bg-[#FAF8F5]/94 backdrop-luxury border-b border-[#E5DECF] shadow-xs'
          : 'h-[60px] sm:h-[68px] bg-[#FAF8F5]/85 backdrop-luxury border-b border-[#E5DECF]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#141311] hover:text-[#8E7048] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Desktop Left Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
          {navLinks.slice(0, 3).map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleNavClick(link.page, link.category)}
              className={`text-[11px] tracking-[0.18em] uppercase transition-colors relative py-1 cursor-pointer font-medium ${
                currentPage === link.page
                  ? 'text-[#141311] font-semibold'
                  : 'text-[#5C564E] hover:text-[#141311]'
              }`}
            >
              <span className="luxury-link">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Brand Wordmark Logo */}
        <div
          className="flex flex-col items-center cursor-pointer group select-none py-0.5"
          onClick={() => handleNavClick('home')}
        >
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E7048] opacity-80 group-hover:scale-125 transition-transform" />
            <span className="font-serif text-base sm:text-xl tracking-[0.22em] text-[#141311] font-normal uppercase leading-tight">
              SIMPLE GRAIN
            </span>
          </div>
          <span className="text-[7.5px] sm:text-[8px] tracking-[0.3em] text-[#7E776C] uppercase font-mono font-light">
            ATELIER • DHAKA
          </span>
        </div>

        {/* Desktop Right Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          {navLinks.slice(3).map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleNavClick(link.page, link.category)}
              className={`text-[11px] tracking-[0.18em] uppercase transition-colors relative py-1 cursor-pointer font-medium ${
                currentPage === link.page
                  ? 'text-[#141311] font-semibold'
                  : 'text-[#5C564E] hover:text-[#141311]'
              }`}
            >
              <span className="luxury-link">{link.label}</span>
            </button>
          ))}

          {/* Quick Action Utilities */}
          <div className="flex items-center space-x-3.5 pl-4 border-l border-[#E5DECF]">
            <button
              id="header-search-btn"
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-[#5C564E] hover:text-[#141311] transition-colors relative cursor-pointer"
              title="Search furniture & journal (⌘K)"
              aria-label="Search"
            >
              <Search size={15} />
            </button>

            <button
              id="header-wishlist-btn"
              onClick={() => setIsWishlistOpen(true)}
              className="p-1.5 text-[#5C564E] hover:text-[#141311] transition-colors relative cursor-pointer"
              title="View Saved Pieces"
              aria-label="Wishlist"
            >
              <Heart size={15} />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#141311] text-[#FAF8F5] text-[8.5px] font-mono rounded-full flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            <button
              id="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center space-x-1.5 py-1.5 px-3 bg-[#141311] text-[#FAF8F5] hover:bg-[#3D3934] transition-all cursor-pointer shadow-xs rounded-xs"
              title="Shopping Bag"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={12} />
              <span className="text-[9.5px] tracking-[0.16em] uppercase font-semibold">Bag</span>
              <span className="text-[9.5px] font-mono bg-[#3D3934] text-[#E5DECF] px-1.5 py-0.2 rounded-xs">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Right Icons */}
        <div className="flex items-center space-x-2.5 lg:hidden">
          <button
            id="mobile-search-btn"
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 text-[#5C564E] hover:text-[#141311]"
            aria-label="Search"
          >
            <Search size={17} />
          </button>
          <button
            id="mobile-cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="p-1.5 text-[#141311] relative"
            aria-label="Cart"
          >
            <ShoppingBag size={17} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#141311] text-[#FAF8F5] text-[8.5px] rounded-full flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[62px] bottom-0 bg-[#FAF8F5]/98 backdrop-luxury border-b border-[#E5DECF] shadow-xl px-6 py-6 transition-all z-50 overflow-y-auto">
          <div className="flex flex-col space-y-4 max-w-sm mx-auto">
            <div className="text-[9.5px] tracking-[0.25em] text-[#8E7048] uppercase font-mono pb-2 border-b border-[#E5DECF]">
              Simple Grain Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page, link.category)}
                className={`text-left text-base font-serif tracking-wide py-1 flex items-center justify-between cursor-pointer ${
                  currentPage === link.page ? 'text-[#8E7048] font-medium' : 'text-[#141311]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight size={13} className="text-[#8E7048] opacity-60" />
              </button>
            ))}

            <div className="pt-4 border-t border-[#E5DECF] flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="flex items-center justify-between text-xs text-[#5C564E] py-1 cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Heart size={14} />
                  <span>Saved Designs</span>
                </span>
                <span className="font-mono text-xs text-[#7E776C]">({wishlistIds.length})</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 bg-[#141311] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold rounded-xs text-center mt-2 cursor-pointer"
              >
                Book Studio Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
