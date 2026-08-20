import React, { useState } from 'react';
import { ArrowRight, Sparkles, Droplets, ShieldCheck, Sun } from 'lucide-react';

interface MaterialItem {
  id: string;
  name: string;
  category: string;
  textureImage: string;
  description: string;
  origin: string;
  tactileFeel: string;
  patinaNotes: string;
  characteristics: string[];
}

const MATERIALS: MaterialItem[] = [
  {
    id: 'oak',
    name: 'European Solid White Oak',
    category: 'Timber',
    textureImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
    description: 'Sustainably harvested from certified temperate forests. Celebrated for its tight, linear grain structure, pronounced medullary rays, and resilience against climate variance.',
    origin: 'FSC-Certified Temperate Reserves',
    tactileFeel: 'Smooth satin grain with subtle micro-relief',
    patinaNotes: 'Deepens gently over decades into a rich honey blonde warmth.',
    characteristics: ['Kiln-dried to 8–10% moisture', 'High natural tannin density', 'Finished with breathable wax-oils']
  },
  {
    id: 'teak',
    name: 'Matured Burmese Teak',
    category: 'Heritage Wood',
    textureImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    description: 'The definitive architectural wood of South Asia. Loaded with natural protective oils and silica that offer impervious defense against high monsoon humidity.',
    origin: 'Reclaimed & Matured Plantation Timber',
    tactileFeel: 'Silky, naturally waxy warmth',
    patinaNotes: 'Matures into an exquisite deep amber bronze with luminous golden highlights.',
    characteristics: ['Zero warping under tropical humidity', 'Dense straight grain', 'Organic natural oil content']
  },
  {
    id: 'walnut',
    name: 'Smoked American Walnut',
    category: 'Hardwood',
    textureImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85',
    description: 'Dense and expressive with smoky chocolate ribbons and warm mocha undertones. Hand-rubbed to preserve the natural softness of the pores.',
    origin: 'Appalachian Hardwood Forests',
    tactileFeel: 'Soft, velvety architectural touch',
    patinaNotes: 'Develops a subtle golden-brown luster as daylight interacts with the surface.',
    characteristics: ['Continuous waterfall grain matching', 'Organic hardwax finish', 'Low-light ambient richness']
  },
  {
    id: 'linen',
    name: 'Belgian Heavyweight Linen',
    category: 'Organic Textile',
    textureImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=85',
    description: 'Woven from 100% European flax fibers without harsh synthetic bleaching. Naturally breathable, cooling in summer, and exceptionally durable.',
    origin: 'Flanders Flax Weaving Mills',
    tactileFeel: 'Crisp yet relaxed slub texture',
    patinaNotes: 'Softens and drapes with increasing grace after each cleaning cycle.',
    characteristics: ['Hypoallergenic & anti-static', '45,000 Martindale rub count', 'Zero chemical coatings']
  },
  {
    id: 'boucle',
    name: 'Natural Wool & Cotton Bouclé',
    category: 'Textile',
    textureImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=85',
    description: 'Loop-yarn dimensional weave blending natural wool and organic cotton to create a cloud-like tactile depth that diffuses room acoustics.',
    origin: 'Artisanal Loom Weavers',
    tactileFeel: 'Plush, looped architectural softness',
    patinaNotes: 'Maintains loft and resilience with minimal maintenance.',
    characteristics: ['Sound-dampening acoustic quality', 'Heavyweight 680 g/m²', 'Soil-resistant natural fibers']
  },
  {
    id: 'leather',
    name: 'Vegetable-Tanned Saddle Leather',
    category: 'Touchpoints',
    textureImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    description: 'Full-grain hides conditioned with chestnut and mimosa barks. Left unsealed by plastic topcoats so every handling records a unique organic character.',
    origin: 'Tuscan Vegetable Tanneries',
    tactileFeel: 'Supple, substantial hand with deep natural aroma',
    patinaNotes: 'Evolves a rich caramel glow that is the hallmark of genuine luxury.',
    characteristics: ['Zero chrome or synthetic tanning', 'Hand-stitched burnished edges', 'Generational longevity']
  }
];

export const MaterialLibrary: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <section id="material-library-section" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#E5DECF]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5DECF] pb-8 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E7048] font-medium block">
              TACTILE HONESTY & SOURCING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#141311] font-normal tracking-tight">
              The Material Library
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C564E] font-light max-w-md leading-relaxed">
            Every Simple Grain piece is an encounter with honest raw materials — solid timbers, organic flax, and vegetable-tanned hides that gain depth with time.
          </p>
        </div>

        {/* Interactive Material Exploration Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Material Navigation Pills */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E776C] font-mono block pb-2">
              Select Material to Inspect
            </span>

            <div className="space-y-1.5">
              {MATERIALS.map((mat) => {
                const isSelected = selectedMaterial.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`w-full p-4 text-left transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#141311] text-[#FAF8F5] border-[#141311]'
                        : 'bg-[#FAF8F5] text-[#141311] border-[#E5DECF] hover:border-[#8E7048]'
                    }`}
                  >
                    <div>
                      <span className={`text-[9px] uppercase tracking-widest block ${isSelected ? 'text-[#DFCABA]' : 'text-[#8E7048]'}`}>
                        {mat.category}
                      </span>
                      <h4 className="font-serif text-lg font-medium mt-0.5">{mat.name}</h4>
                    </div>
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 ${isSelected ? 'translate-x-1 text-[#DFCABA]' : 'opacity-30'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Material Deep-Dive Stage */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#F6F3ED] p-6 sm:p-10 border border-[#E5DECF]">
            
            {/* Macro Photography Image */}
            <div className="md:col-span-6 aspect-[4/3] md:aspect-auto rounded-xs overflow-hidden bg-[#FAF8F5] shadow-xs">
              <img
                src={selectedMaterial.textureImage}
                alt={selectedMaterial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Material Technical Narrative */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E7048] font-medium block">
                    {selectedMaterial.category} Specification
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141311] font-medium mt-1">
                    {selectedMaterial.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C564E] font-light leading-relaxed">
                  {selectedMaterial.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E5DECF] text-xs">
                  <div>
                    <strong className="text-[#141311] block font-mono text-[11px] uppercase tracking-wider">Provenance:</strong>
                    <span className="text-[#5C564E]">{selectedMaterial.origin}</span>
                  </div>
                  <div>
                    <strong className="text-[#141311] block font-mono text-[11px] uppercase tracking-wider">Tactile Signature:</strong>
                    <span className="text-[#5C564E]">{selectedMaterial.tactileFeel}</span>
                  </div>
                  <div>
                    <strong className="text-[#141311] block font-mono text-[11px] uppercase tracking-wider">Patina Evolution:</strong>
                    <span className="text-[#5C564E]">{selectedMaterial.patinaNotes}</span>
                  </div>
                </div>
              </div>

              {/* Verified Characteristics Checkpoints */}
              <div className="pt-4 border-t border-[#E5DECF] space-y-1.5 text-xs text-[#141311]">
                {selectedMaterial.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E7048]" />
                    <span className="font-light">{char}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
