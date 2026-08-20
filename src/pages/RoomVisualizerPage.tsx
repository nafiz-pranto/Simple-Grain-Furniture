import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { FinishOption, Product } from '../types';
import {
  Sun,
  Moon,
  Sparkles,
  Sliders,
  Maximize2,
  Check,
  ShoppingBag,
  RotateCcw,
  Layers,
  Ruler,
  Info,
  ArrowRight
} from 'lucide-react';

interface RoomScenePreset {
  id: string;
  name: string;
  roomType: string;
  bgImage: string;
  defaultProductId: string;
  description: string;
}

const ROOM_PRESETS: RoomScenePreset[] = [
  {
    id: 'living-pavilion',
    name: 'Sunlit Living Pavilion',
    roomType: 'Living Room',
    bgImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    defaultProductId: 'sg-liv-01',
    description: 'Generous 3.2m ceiling height with floor-to-ceiling glass and soft morning daylight.'
  },
  {
    id: 'dining-hall',
    name: 'Minimalist Dining Gallery',
    roomType: 'Dining',
    bgImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85',
    defaultProductId: 'sg-din-01',
    description: 'Warm travertine architectural niche suited for 8–10 guest entertaining.'
  },
  {
    id: 'bedroom-sanctuary',
    name: 'Calm Bedroom Suite',
    roomType: 'Bedroom',
    bgImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    defaultProductId: 'sg-bed-01',
    description: 'Acoustically softened sanctuary with linen wall drapery and warm low-level lamps.'
  },
  {
    id: 'executive-study',
    name: 'Architectural Executive Study',
    roomType: 'Office',
    bgImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
    defaultProductId: 'sg-off-01',
    description: 'Focused corner library with continuous vertical timber paneling.'
  }
];

const WALL_TONES = [
  { name: 'Limewash Alabaster', hex: '#F5F2EB', filter: 'brightness(1.02) sepia(0.04)' },
  { name: 'Warm Travertine', hex: '#EDE6DA', filter: 'sepia(0.12) brightness(0.98)' },
  { name: 'Sage Plaster', hex: '#E0E5DD', filter: 'hue-rotate(25deg) brightness(0.96)' },
  { name: 'Smoked Charcoal', hex: '#38342F', filter: 'brightness(0.75) contrast(1.15)' }
];

const LIGHT_MOODS = [
  { id: 'morning', name: 'Morning Warmth (8:00 AM)', overlay: 'bg-amber-100/15' },
  { id: 'midday', name: 'Midday Daylight (1:00 PM)', overlay: 'bg-transparent' },
  { id: 'evening', name: 'Golden Hour (6:00 PM)', overlay: 'bg-amber-900/25 mix-blend-multiply' }
];

export const RoomVisualizerPage: React.FC = () => {
  const {
    visualizerProduct,
    addToCart,
    navigateToProduct,
    showToast
  } = useShop();

  const [activeRoom, setActiveRoom] = useState<RoomScenePreset>(ROOM_PRESETS[0]);
  
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    visualizerProduct ||
      PRODUCTS.find((p) => p.id === activeRoom.defaultProductId) ||
      PRODUCTS[0]
  );

  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(
    selectedProduct.finishOptions[0]
  );

  const [selectedWallTone, setSelectedWallTone] = useState(WALL_TONES[0]);
  const [activeLightMood, setActiveLightMood] = useState(LIGHT_MOODS[1]);
  const [showDimensionsOverlay, setShowDimensionsOverlay] = useState(true);

  // Sync if visualizerProduct changes from external navigation
  useEffect(() => {
    if (visualizerProduct) {
      setSelectedProduct(visualizerProduct);
      setSelectedFinish(visualizerProduct.finishOptions[0]);
      // Also match room preset if relevant
      const matchingRoom = ROOM_PRESETS.find(
        (r) => r.roomType.toLowerCase() === visualizerProduct.category.toLowerCase()
      );
      if (matchingRoom) {
        setActiveRoom(matchingRoom);
      }
    }
  }, [visualizerProduct]);

  // When product changes, reset default finish
  const handleSelectProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setSelectedFinish(prod.finishOptions[0]);
  };

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="space-y-4 border-b border-[#EFEAE1] pb-6">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium">
            <Sparkles size={14} />
            <span>Interactive Spatial Studio</span>
            <span>/</span>
            <span>See It In Your Space</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#191816] font-normal tracking-tight">
                Calibrate Proportions & Daylight
              </h1>
              <p className="text-xs sm:text-sm text-[#57524A] font-light max-w-xl mt-2 leading-relaxed">
                Test how solid timber grains, natural textiles, and shadow lines behave across different room settings and times of day.
              </p>
            </div>

            {/* Room Architecture Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
              {ROOM_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setActiveRoom(preset);
                    const matchedProd = PRODUCTS.find((p) => p.id === preset.defaultProductId);
                    if (matchedProd && !visualizerProduct) {
                      handleSelectProduct(matchedProd);
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    activeRoom.id === preset.id
                      ? 'bg-[#191816] text-[#FDFBF7] shadow-xs'
                      : 'bg-[#F5F2EB] text-[#57524A] hover:bg-[#EFEAE1]'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visualizer Canvas Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Stage Canvas */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] bg-[#191816] rounded-xs overflow-hidden border border-[#EFEAE1] shadow-2xl">
              
              {/* Background Architectural Interior */}
              <img
                src={activeRoom.bgImage}
                alt={activeRoom.name}
                referrerPolicy="no-referrer"
                style={{ filter: selectedWallTone.filter }}
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Lighting Mood Tint Overlay */}
              <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${activeLightMood.overlay}`} />

              {/* Ambient Interior Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Furniture In-Scene Simulation Stage */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <div className="relative max-w-md w-full animate-fade-in group pointer-events-auto">
                  
                  {/* Floating Furniture Render Overlay */}
                  <img
                    src={selectedProduct.images.primary}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dimension Pinpoint Overlays */}
                  {showDimensionsOverlay && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#191816]/90 backdrop-luxury text-[#FDFBF7] px-2.5 py-1 rounded text-[10px] font-mono border border-[#38342F] shadow-lg">
                      Width: {selectedProduct.dimensions.widthCm}cm ({selectedProduct.dimensions.widthInches})
                    </div>
                  )}

                  {showDimensionsOverlay && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#191816]/90 backdrop-luxury text-[#FDFBF7] px-2.5 py-1 rounded text-[10px] font-mono border border-[#38342F] shadow-lg">
                      Height: {selectedProduct.dimensions.heightCm}cm
                    </div>
                  )}

                  {/* Finish Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FDFBF7] text-[#191816] px-3 py-1 rounded-xs text-[10px] uppercase tracking-wider font-semibold border border-[#E2D9CA] shadow-md flex items-center space-x-1.5 whitespace-nowrap">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/10"
                      style={{ backgroundColor: selectedFinish.colorHex }}
                    />
                    <span>{selectedProduct.name} • {selectedFinish.name}</span>
                  </div>

                </div>
              </div>

              {/* Top HUD Controls Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#191816]/80 backdrop-luxury text-[#EDE6DA] px-3 py-1.5 rounded-xs text-xs font-mono border border-[#38342F]">
                  {activeRoom.name} • {activeLightMood.name}
                </div>

                <button
                  onClick={() => setShowDimensionsOverlay(!showDimensionsOverlay)}
                  className="pointer-events-auto bg-[#FDFBF7]/90 backdrop-luxury text-[#191816] px-3 py-1.5 rounded-xs text-xs font-medium flex items-center space-x-1.5 border border-[#E2D9CA] hover:bg-[#FDFBF7] cursor-pointer"
                >
                  <Ruler size={13} className="text-[#A38053]" />
                  <span>{showDimensionsOverlay ? 'Hide Metrics' : 'Show Proportions'}</span>
                </button>
              </div>

            </div>

            {/* Room Environment Description */}
            <div className="p-4 bg-[#FDFBF7] border border-[#EFEAE1] rounded-xs text-xs text-[#57524A] flex items-center justify-between">
              <span className="font-light">{activeRoom.description}</span>
              <span className="text-[#A38053] font-mono shrink-0 ml-4">Bangladeshi Standard Ceiling (10.5 ft)</span>
            </div>
          </div>

          {/* Configuration & Controls Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active Piece Overview */}
            <div className="bg-[#FDFBF7] p-6 rounded-xs border border-[#EFEAE1] space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A38053] font-medium block">
                    Active Architecture Piece
                  </span>
                  <h3 className="font-serif text-xl text-[#191816] font-medium">
                    {selectedProduct.name}
                  </h3>
                </div>
                <span className="font-mono text-base font-bold text-[#191816]">
                  {formatPrice(selectedProduct.price)}
                </span>
              </div>

              {/* Timber & Finish Swatches */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Select Timber Species
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProduct.finishOptions.map((finish) => {
                    const isSelected = selectedFinish.id === finish.id;
                    return (
                      <button
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish)}
                        className={`p-2.5 rounded-xs border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#191816] bg-[#191816] text-[#FDFBF7]'
                            : 'border-[#E2D9CA] bg-[#F5F2EB] text-[#57524A] hover:border-[#191816]'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                          style={{ backgroundColor: finish.colorHex }}
                        />
                        <div className="min-w-0">
                          <span className="block text-[11px] font-medium truncate">{finish.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => addToCart(selectedProduct, selectedFinish)}
                  className="w-full py-3.5 bg-[#191816] text-[#FDFBF7] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#38342F] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xs"
                >
                  <ShoppingBag size={14} />
                  <span>Add Configured Piece to Bag</span>
                </button>

                <button
                  onClick={() => navigateToProduct(selectedProduct)}
                  className="w-full py-2.5 bg-[#F5F2EB] text-[#191816] border border-[#E2D9CA] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#EFEAE1] transition-all cursor-pointer"
                >
                  View Complete Product Specs
                </button>
              </div>

            </div>

            {/* Environmental Lighting & Plaster Controls */}
            <div className="bg-[#FDFBF7] p-6 rounded-xs border border-[#EFEAE1] space-y-6">
              
              {/* Daylight Time of Day */}
              <div className="space-y-2.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Natural Daylight Simulation
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {LIGHT_MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setActiveLightMood(mood)}
                      className={`p-2 rounded-xs border text-center text-[10px] font-medium transition-all cursor-pointer ${
                        activeLightMood.id === mood.id
                          ? 'border-[#191816] bg-[#191816] text-[#FDFBF7]'
                          : 'border-[#E2D9CA] bg-[#F5F2EB] text-[#57524A] hover:border-[#191816]'
                      }`}
                    >
                      {mood.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wall Plaster Tone */}
              <div className="space-y-2.5 pt-4 border-t border-[#EFEAE1]">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816]">
                  Wall Lime-Plaster Tone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {WALL_TONES.map((tone) => (
                    <button
                      key={tone.name}
                      onClick={() => setSelectedWallTone(tone)}
                      className={`p-2 rounded-xs border text-left flex items-center space-x-2 transition-all cursor-pointer ${
                        selectedWallTone.name === tone.name
                          ? 'border-[#191816] bg-[#191816] text-[#FDFBF7]'
                          : 'border-[#E2D9CA] bg-[#F5F2EB] text-[#57524A] hover:border-[#191816]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                        style={{ backgroundColor: tone.hex }}
                      />
                      <span className="text-[10px] font-medium truncate">{tone.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Switch to Other Furniture Pieces */}
            <div className="bg-[#FDFBF7] p-6 rounded-xs border border-[#EFEAE1] space-y-3">
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816]">
                Swap Furniture Piece
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod)}
                    className={`w-full p-2 rounded-xs border text-left flex items-center space-x-2.5 transition-colors cursor-pointer ${
                      selectedProduct.id === prod.id
                        ? 'border-[#191816] bg-[#F5F2EB] font-medium'
                        : 'border-transparent hover:bg-[#F5F2EB]'
                    }`}
                  >
                    <img
                      src={prod.images.primary}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 object-cover rounded-xs bg-[#EFEAE1]"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs truncate text-[#191816]">{prod.name}</span>
                      <span className="block text-[10px] text-[#7A746B]">{prod.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
