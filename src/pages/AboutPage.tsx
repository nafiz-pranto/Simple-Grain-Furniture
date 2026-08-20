import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Compass, Shield, Feather, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Editorial Brand Manifesto Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium">
            <span>Simple Grain Atelier</span>
            <span>/</span>
            <span>Brand Story</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#191816] font-normal leading-[1.1] tracking-tight">
            A home should not simply be filled. It should be shaped by pieces that belong.
          </h1>

          <p className="text-base sm:text-lg text-[#57524A] font-light leading-relaxed max-w-3xl">
            Simple Grain exists for people creating a home with intention — people who appreciate honest materials, refined architectural forms, thoughtful craftsmanship, and timeless design.
          </p>
        </div>

        {/* Cinematic Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 aspect-[16/10] rounded-xs overflow-hidden bg-[#262421] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
              alt="Simple Grain Interior Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 bg-[#262421] text-[#FDFBF7] p-8 sm:p-10 rounded-xs flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A880]">
                THE CORE PRINCIPLES
              </span>
              <h3 className="font-serif text-3xl font-normal leading-snug">
                Simple forms.<br />
                Natural character.<br />
                Thoughtful craft.<br />
                Timeless living.
              </h3>
            </div>
            <p className="text-xs text-[#EDE6DA] leading-relaxed font-light">
              The &ldquo;grain&rdquo; in Simple Grain represents the unvarnished honesty of materials — especially solid wood, which records the passage of time not with weariness, but with grace.
            </p>
          </div>
        </div>

        {/* Narrative Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-[#EFEAE1]">
          
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-mono">01 / INTENTION</span>
            <h3 className="font-serif text-2xl text-[#191816]">Rejecting the Ephemeral</h3>
            <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
              We do not chase trends that expire with each passing season. By grounding our silhouettes in classical proportions and ergonomic balance, every Simple Grain design remains just as compelling decades from now as on the day it arrives in your home.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-mono">02 / HONESTY</span>
            <h3 className="font-serif text-2xl text-[#191816]">The Truth of Materials</h3>
            <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
              We build exclusively with genuine solid timber, natural Belgian flax linen, and vegetable-tanned saddle leather. We refuse synthetic veneers, plastic lacquers, or particle board that conceal structural compromises beneath superficial sheen.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-mono">03 / RESPECT</span>
            <h3 className="font-serif text-2xl text-[#191816]">Bangladeshi Architecture</h3>
            <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
              Our designs are engineered specifically for modern South Asian living — celebrating high ceilings, natural ventilation, and timber species that breathe harmoniously through tropical monsoon moisture and bright sunlit winters.
            </p>
          </div>

        </div>

        {/* Workshop Environment Quote */}
        <div className="p-8 sm:p-14 bg-[#F5F2EB] rounded-xs border border-[#E2D9CA] max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#191816] font-normal leading-relaxed">
            &ldquo;Furniture is not merely an object occupying physical space; it is the silent backdrop against which our most cherished family memories unfold.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.2em] text-[#A38053] font-medium">
            SIMPLE GRAIN DESIGN ATELIER • DHAKA
          </p>
        </div>

        {/* Final Exploration Action */}
        <div className="text-center space-y-4 pt-4">
          <button
            onClick={() => setCurrentPage('collection')}
            className="px-8 py-4 bg-[#191816] text-[#FDFBF7] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#38342F] transition-all inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Explore the Handcrafted Collection</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
