import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Droplets,
  Ruler,
  Clock,
  ArrowRight,
  Check
} from 'lucide-react';

export const CraftsmanshipPage: React.FC = () => {
  const { setCurrentPage } = useShop();

  const CRAFT_CHAPTERS = [
    {
      step: '01',
      title: 'Material Sourcing & Kiln Seasoning',
      subtitle: 'PROVENANCE & INTEGRITY',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
      leadText: 'True longevity begins in the forest.',
      body: 'Every timber board selected for Simple Grain is FSC-certified European White Oak, matured Burmese Teak, or Appalachian Walnut. We kiln-dry our lumber over 45 days down to an exact 8–10% equilibrium moisture content to guarantee structural stability against monsoon humidity and winter dry air.',
      bulletPoints: [
        'Quarter-sawn timber for maximum dimensional resistance',
        'Zero chemical bleaching or synthetic wood-filler putty',
        'Hand-selected for continuous grain harmony across panels'
      ]
    },
    {
      step: '02',
      title: 'Architectural Form & Proportion',
      subtitle: 'SILHOUETTES THAT BREATHE',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      leadText: 'Furniture that dialogues with modern room volumes.',
      body: 'We study the spatial cadence of contemporary homes. Generous depths, low-profile horizontal planes, and soft-radius timber corners allow our furniture to ground a living space without visual congestion.',
      bulletPoints: [
        'Calibrated for 3.0m–3.4m ceiling height proportions',
        'Ergonomically tuned seat pitch and lumbar support curves',
        'Continuous shadow-gap lines that catch natural daylight'
      ]
    },
    {
      step: '03',
      title: 'Master Interlocking Joinery',
      subtitle: 'ANATOMY OF THE JOINT',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      leadText: 'Honest woodwork does not hide behind metal brackets.',
      body: 'Our carpenters practice traditional blind mortise-and-tenon joints, bridle joints, and half-blind dovetails. By locking wood directly into wood with precision friction tolerances, the furniture naturally flexes and expands with atmospheric changes without loosening.',
      bulletPoints: [
        'Hand-chiseled mortise and tenon joinery on all load-bearing rails',
        '45-degree mitered waterfall corners on storage credenzas',
        'Concealed solid brass reinforcement pins where required'
      ]
    },
    {
      step: '04',
      title: 'Organic Hardwax-Oil Finishes',
      subtitle: 'BREATHABLE & TACTILE',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      leadText: 'Zero plastic lacquers. Pure tactile honesty.',
      body: 'Standard mass-manufactured furniture coats timber in synthetic polyurethane films that feel cold and plasticky. At Simple Grain, we hand-rub every surface with multiple coats of organic carnauba and beeswax oils. The pores remain open and breathable, giving the wood its velvety, warm tactile touch.',
      bulletPoints: [
        '100% VOC-free and food-safe for dining table surfaces',
        'Resistant to tea, coffee, and water rings with easy spot renewal',
        'Preserves the organic scent and warmth of raw timber'
      ]
    },
    {
      step: '05',
      title: 'Generational Patina & Time',
      subtitle: 'DESIGNED TO AGE WITH DIGNITY',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85',
      leadText: 'Furniture that grows richer with every passing year.',
      body: 'We design pieces intended to be passed down through generations. Rather than showing wear as deterioration, natural solid timber accumulates a luminous patina — the subtle marks of family gatherings, shared meals, and decades of lived experience.',
      bulletPoints: [
        'Solid timber can be easily sanded and re-oiled after decades',
        '10-year comprehensive timber warranty on every piece',
        'Full factory restoration service available in Dhaka'
      ]
    }
  ];

  const QUALITY_CHECKS = [
    { num: '01', name: 'Moisture Calibration', desc: 'Moisture testing across 12 distinct points on every timber slab.' },
    { num: '02', name: 'Grain Alignment', desc: 'Continuous grain matching along table lengths and cabinet door fronts.' },
    { num: '03', name: 'Joinery Tolerance', desc: 'Zero-gap friction fitting on all mortise and tenon tenons.' },
    { num: '04', name: 'Surface Hand-Planed', desc: 'Progressive hand-sanding from 120 up to 400 grit micro-smoothness.' },
    { num: '05', name: 'Oil Curing Protocol', desc: '72-hour controlled oxidative curing between wax-oil applications.' },
    { num: '06', name: 'Load & Racking Rigor', desc: '200kg static load test and joint stability racking verification.' },
    { num: '07', name: 'Hardware & White-Glove Prep', desc: 'Solid brass leveler installation and dust-free wrapping.' }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-32 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl space-y-6 border-b border-[#E5DECF] pb-10">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#8E7048] font-mono">
            <span>The Workshop Manifesto</span>
            <span>•</span>
            <span>Honest Joinery</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#141311] font-normal leading-[1.08] tracking-tight">
            The details make the difference.
          </h1>

          <p className="text-sm sm:text-base text-[#5C564E] font-light leading-relaxed max-w-2xl">
            We believe that how a piece of furniture is made matters as much as how it looks. Here is our step-by-step commitment to architectural joinery, natural timber preservation, and timeless durability.
          </p>
        </div>

        {/* The 5 Pillars of Craftsmanship — Alternating Editorial Layouts */}
        <div className="space-y-32">
          {CRAFT_CHAPTERS.map((chap, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <section
                key={chap.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Image Box */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E5DECF] shadow-md">
                    <img
                      src={chap.image}
                      alt={chap.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
                    />
                  </div>
                </div>

                {/* Narrative Text */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
                      {chap.step} • {chap.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#141311] font-normal">
                      {chap.title}
                    </h2>
                  </div>

                  <p className="font-serif text-lg text-[#141311] italic">
                    &ldquo;{chap.leadText}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C564E] font-light leading-relaxed">
                    {chap.body}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E5DECF]">
                    {chap.bulletPoints.map((bp, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2.5 text-xs text-[#141311]">
                        <Check size={14} className="text-[#8E7048] shrink-0 mt-0.5" />
                        <span className="font-light">{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </section>
            );
          })}
        </div>

        {/* 7-Point Quality Assurance Protocol */}
        <section className="bg-[#F6F3ED] p-8 sm:p-14 border border-[#E5DECF] space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-mono">
              WORKSHOP STANDARDS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#141311] font-normal">
              The 7-Point Quality Assurance Protocol
            </h3>
            <p className="text-xs sm:text-sm text-[#5C564E] font-light">
              Every single piece created in our Dhaka workshop must pass these seven rigorous checkpoints before receiving its stamped serial plate and white-glove packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {QUALITY_CHECKS.map((qc) => (
              <div key={qc.num} className="bg-[#FAF8F5] p-5 border border-[#E5DECF] space-y-2">
                <span className="font-mono text-xs text-[#8E7048] font-semibold">{qc.num}</span>
                <h4 className="font-serif text-lg text-[#141311] font-medium">{qc.name}</h4>
                <p className="text-xs text-[#5C564E] font-light leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* Final CTA Banner */}
        <div className="text-center max-w-2xl mx-auto space-y-6 pt-8">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#141311] font-normal">
            Experience the Craft in Person
          </h3>
          <p className="text-xs sm:text-sm text-[#5C564E] font-light leading-relaxed">
            Visit our Gulshan studio to feel timber grains, test chair ergonomies, and inspect finish swatches under natural daylight.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-[#141311] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#3D3934] transition-colors cursor-pointer"
            >
              Book Studio Visit
            </button>
            <button
              onClick={() => setCurrentPage('collection')}
              className="px-8 py-3.5 bg-[#F6F3ED] border border-[#E5DECF] text-[#141311] text-xs font-medium uppercase tracking-[0.2em] rounded-xs hover:bg-[#E5DECF] transition-colors cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
