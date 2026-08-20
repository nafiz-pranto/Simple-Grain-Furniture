import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Check, Heart } from 'lucide-react';
import { PageView } from '../types';

export const Footer: React.FC = () => {
  const { setCurrentPage, setSelectedCategoryFilter, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      showToast('Thank you for subscribing to our private atelier journal.');
      setNewsletterEmail('');
    }
  };

  const navigateAndFilter = (category: string) => {
    setSelectedCategoryFilter(category);
    setCurrentPage('collection');
  };

  return (
    <footer id="main-footer" className="bg-[#141311] text-[#FAF8F5] pt-24 pb-16 px-4 sm:px-8 lg:px-12 border-t border-[#292623]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#292623] items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFCABA] font-mono block">
              THE SIMPLE GRAIN PROMISE
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.1] text-[#FAF8F5]">
              Thoughtfully made for the spaces we call home.
            </h3>
            <p className="text-xs sm:text-sm text-[#A29B8F] max-w-xl font-light leading-relaxed">
              We design and sculpt solid timber furniture in Dhaka, Bangladesh — combining architectural honesty, interlocking joinery, and natural wax-oil finishes.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 space-y-4 bg-[#1C1A18] p-6 sm:p-8 border border-[#292623]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono block">
              PRIVATE JOURNAL & RELEASES
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#FAF8F5]">
              Receive New Design Catalogs
            </h4>
            <p className="text-xs text-[#A29B8F] font-light leading-relaxed">
              Invitations to private studio viewings, seasonal wood lot releases, and architectural essays.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 bg-[#FAF8F5]/10 border border-[#DFCABA]/40 text-[#DFCABA] text-xs flex items-center space-x-2">
                <Check size={14} />
                <span>You have been added to our private register.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#141311] border border-[#3D3934] px-3.5 py-3 text-xs text-[#FAF8F5] placeholder-[#7E776C] focus:outline-none focus:border-[#DFCABA]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#FAF8F5] text-[#141311] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#E5DECF] transition-colors cursor-pointer shrink-0 flex items-center space-x-1"
                  >
                    <span>Join</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
                <span className="text-[10px] text-[#7E776C] block font-mono">
                  We respect your privacy. No promotional spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-xs">
          
          {/* Col 1: Living Archetypes */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono block">
              Archetypes
            </span>
            <ul className="space-y-2.5 text-[#A29B8F] font-light">
              <li>
                <button onClick={() => navigateAndFilter('Living Room')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Living Pavilions
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndFilter('Dining')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Dining & Entertaining
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndFilter('Bedroom')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Bedroom Sanctuaries
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndFilter('Office')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Executive Studies
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndFilter('Storage')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Credenzas & Shelving
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Brand & Craft */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono block">
              The Atelier
            </span>
            <ul className="space-y-2.5 text-[#A29B8F] font-light">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Our Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('craftsmanship')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Honest Joinery
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('lookbook')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Spatial Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('visualizer')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Room Studio
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('journal')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Design Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono block">
              Concierge Care
            </span>
            <ul className="space-y-2.5 text-[#A29B8F] font-light">
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Book Studio Visit
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  White-Glove Logistics
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('craftsmanship')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  10-Year Warranty
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  Timber Care Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Location */}
          <div className="space-y-4 col-span-2 lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCABA] font-mono block">
              Dhaka Flagship Studio
            </span>
            <div className="space-y-2 text-[#A29B8F] font-light leading-relaxed">
              <p>House 24, Road 11, Block D, Gulshan-1, Dhaka 1212, Bangladesh</p>
              <p className="text-xs text-[#FAF8F5] font-mono pt-1">
                Studio Hours: Sat – Thu, 10:30 AM – 8:30 PM (Private appointments welcomed)
              </p>
              <p className="text-xs text-[#DFCABA] font-mono">
                concierge@simplegrainfurniture.com • +880 1711 000000
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-12 border-t border-[#292623] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7E776C] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Simple Grain Furniture Atelier Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Made with Integrity in Bangladesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
