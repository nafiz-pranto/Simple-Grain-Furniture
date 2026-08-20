import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import {
  SlidersHorizontal,
  X,
  Search,
  LayoutGrid,
  Grid3X3,
  RotateCcw
} from 'lucide-react';

export const CollectionPage: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter
  } = useShop();

  // Local filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState<number>(150000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Lock scroll when mobile filter is open and support ESC
  useEffect(() => {
    if (!isMobileFilterOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileFilterOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileFilterOpen]);

  const allCategories: Category[] = ['All', 'Living Room', 'Dining', 'Bedroom', 'Office', 'Storage'];

  const availableMaterials = [
    'Solid White Oak',
    'Burmese Teak',
    'Solid American Walnut',
    'Belgian Textured Linen',
    'Raw Bouclé Weave',
    'Full-Grain Tuscan Saddle Leather'
  ];

  // Material Toggle
  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategoryFilter('All');
    setSearchQuery('');
    setSelectedMaterials([]);
    setPriceMax(150000);
    setInStockOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategoryFilter !== 'All' ||
    searchQuery.trim() !== '' ||
    selectedMaterials.length > 0 ||
    priceMax < 150000 ||
    inStockOnly;

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        const matchMaterial = product.materials.some((m) => m.toLowerCase().includes(q));
        const matchTag = product.tagline.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchMaterial && !matchTag) return false;
      }

      // Materials Filter
      if (selectedMaterials.length > 0) {
        const matchesAny = selectedMaterials.some((mat) =>
          product.materials.some((pm) => pm.toLowerCase().includes(mat.toLowerCase())) ||
          product.primaryMaterial.toLowerCase().includes(mat.toLowerCase())
        );
        if (!matchesAny) return false;
      }

      // Price Range Filter
      if (product.price > priceMax) {
        return false;
      }

      // In-stock Filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategoryFilter, searchQuery, selectedMaterials, priceMax, inStockOnly, sortBy]);

  const formatPrice = (amount: number) => `৳${amount.toLocaleString('en-BD')}`;

  return (
    <div className="pt-20 sm:pt-24 pb-32 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header Editorial */}
        <div className="space-y-4 border-b border-[#E5DECF] pb-8">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#8E7048] font-mono">
            <span>Simple Grain Atelier</span>
            <span>/</span>
            <span>Furniture Collection</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#141311] font-normal leading-tight">
                {selectedCategoryFilter === 'All' ? 'The Complete Collection' : selectedCategoryFilter}
              </h1>
              <p className="text-xs sm:text-sm text-[#5C564E] font-light max-w-xl mt-2 leading-relaxed">
                Sculpted from select-grade timbers and textured organic fabrics. Built for durability and timeless living.
              </p>
            </div>

            {/* Category Nav Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategoryFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategoryFilter === cat
                      ? 'bg-[#141311] text-[#FAF8F5]'
                      : 'bg-[#F6F3ED] text-[#5C564E] hover:bg-[#E5DECF] hover:text-[#141311]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E5DECF] text-xs">
          
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-[#F6F3ED] border border-[#E5DECF] flex items-center space-x-2 text-[#141311] font-medium cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              <span>Filters {hasActiveFilters && '• Active'}</span>
            </button>

            {/* Live Count */}
            <span className="text-[#7E776C] font-mono text-[11px]">
              Showing {filteredProducts.length} of {PRODUCTS.length} designs
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sorting Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-[#7E776C] hidden sm:inline text-[11px] uppercase tracking-wider font-mono">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F6F3ED] border border-[#E5DECF] text-[#141311] text-xs px-3 py-1.5 focus:outline-none focus:border-[#141311] cursor-pointer"
              >
                <option value="featured">Curated & Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Releases</option>
              </select>
            </div>

            {/* Desktop Grid Switcher */}
            <div className="hidden sm:flex items-center space-x-1 border-l border-[#E5DECF] pl-4">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 ${gridCols === 2 ? 'bg-[#141311] text-[#FAF8F5]' : 'text-[#7E776C] hover:text-[#141311]'}`}
                title="2-Column Large View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 ${gridCols === 3 ? 'bg-[#141311] text-[#FAF8F5]' : 'text-[#7E776C] hover:text-[#141311]'}`}
                title="3-Column Editorial Grid"
              >
                <Grid3X3 size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-[#7E776C] font-mono">Filters:</span>
            
            {selectedCategoryFilter !== 'All' && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F6F3ED] border border-[#E5DECF] text-xs text-[#141311]">
                <span>{selectedCategoryFilter}</span>
                <X size={12} className="cursor-pointer hover:text-[#8E7048]" onClick={() => setSelectedCategoryFilter('All')} />
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F6F3ED] border border-[#E5DECF] text-xs text-[#141311]">
                <span>&ldquo;{searchQuery}&rdquo;</span>
                <X size={12} className="cursor-pointer hover:text-[#8E7048]" onClick={() => setSearchQuery('')} />
              </span>
            )}

            {selectedMaterials.map((mat) => (
              <span key={mat} className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F6F3ED] border border-[#E5DECF] text-xs text-[#141311]">
                <span>{mat}</span>
                <X size={12} className="cursor-pointer hover:text-[#8E7048]" onClick={() => toggleMaterial(mat)} />
              </span>
            ))}

            {priceMax < 150000 && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F6F3ED] border border-[#E5DECF] text-xs text-[#141311]">
                <span>Under {formatPrice(priceMax)}</span>
                <X size={12} className="cursor-pointer hover:text-[#8E7048]" onClick={() => setPriceMax(150000)} />
              </span>
            )}

            {inStockOnly && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#F6F3ED] border border-[#E5DECF] text-xs text-[#141311]">
                <span>Ready to Ship</span>
                <X size={12} className="cursor-pointer hover:text-[#8E7048]" onClick={() => setInStockOnly(false)} />
              </span>
            )}

            <button
              onClick={handleClearFilters}
              className="text-xs text-[#8E7048] hover:underline font-mono ml-2 flex items-center space-x-1 cursor-pointer"
            >
              <RotateCcw size={11} />
              <span>Reset filters</span>
            </button>
          </div>
        )}

        {/* Main Grid with Filter Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-24 bg-[#F6F3ED] p-6 border border-[#E5DECF]">
            
            {/* Search Input */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-[#141311] mb-2 font-mono">
                Search Catalog
              </label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7E776C]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Timber, textile, name..."
                  className="w-full bg-[#FAF8F5] border border-[#E5DECF] pl-8 pr-3 py-2 text-xs text-[#141311] focus:outline-none focus:border-[#141311]"
                />
              </div>
            </div>

            {/* Material Filter */}
            <div className="space-y-3 pt-4 border-t border-[#E5DECF]">
              <label className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-[#141311] font-mono">
                Timber & Material
              </label>
              <div className="space-y-2">
                {availableMaterials.map((mat) => {
                  const isChecked = selectedMaterials.includes(mat);
                  return (
                    <label
                      key={mat}
                      className="flex items-center space-x-2.5 text-xs text-[#5C564E] hover:text-[#141311] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleMaterial(mat)}
                        className="border-[#E5DECF] text-[#141311] focus:ring-0 cursor-pointer"
                      />
                      <span>{mat}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3 pt-4 border-t border-[#E5DECF]">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-[#141311] font-mono">
                  Price Limit
                </label>
                <span className="font-mono text-xs text-[#8E7048]">{formatPrice(priceMax)}</span>
              </div>
              <input
                type="range"
                min="18000"
                max="150000"
                step="5000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#141311] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#7E776C] font-mono">
                <span>৳18,000</span>
                <span>৳1,50,000</span>
              </div>
            </div>

            {/* In Stock Only */}
            <div className="pt-4 border-t border-[#E5DECF]">
              <label className="flex items-center space-x-2.5 text-xs text-[#5C564E] cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="border-[#E5DECF] text-[#141311] focus:ring-0 cursor-pointer"
                />
                <span className="font-medium text-[#141311]">Ready to Ship (In Stock)</span>
              </label>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="w-full py-2.5 border border-[#E5DECF] bg-[#FAF8F5] text-xs text-[#141311] hover:bg-[#E5DECF] transition-colors uppercase tracking-wider font-medium cursor-pointer"
              >
                Clear All Filters
              </button>
            )}

          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-[#F6F3ED] border border-[#E5DECF] space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto text-[#7E776C]">
                  <Search size={18} />
                </div>
                <h3 className="font-serif text-2xl text-[#141311]">No pieces match your filters</h3>
                <p className="text-xs text-[#5C564E] max-w-sm mx-auto font-light">
                  Try broadening your price range or clearing material filters to view our full collection.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-[#141311] text-[#FAF8F5] text-xs uppercase tracking-wider cursor-pointer inline-block"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-x-8 gap-y-14 ${
                  gridCols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#141311]/60 backdrop-luxury flex justify-end">
          <div className="w-full max-w-xs bg-[#FAF8F5] h-full p-6 flex flex-col justify-between overflow-y-auto">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5DECF] pb-4">
                <h3 className="font-serif text-xl text-[#141311] font-medium">Filter Catalog</h3>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              {/* Search */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#141311] mb-1">Search</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter designs..."
                  className="w-full bg-[#F6F3ED] border border-[#E5DECF] px-3 py-2 text-xs"
                />
              </div>

              {/* Material */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#141311]">Materials</label>
                {availableMaterials.map((mat) => (
                  <label key={mat} className="flex items-center space-x-2 text-xs text-[#5C564E]">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Max Price:</span>
                  <span className="font-mono text-[#8E7048]">{formatPrice(priceMax)}</span>
                </div>
                <input
                  type="range"
                  min="18000"
                  max="150000"
                  step="5000"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#141311]"
                />
              </div>

              {/* In Stock */}
              <label className="flex items-center space-x-2 text-xs text-[#141311]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <span>Ready to Ship Only</span>
              </label>
            </div>

            <div className="pt-6 border-t border-[#E5DECF] space-y-2">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-[#141311] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium"
              >
                Apply Filters ({filteredProducts.length})
              </button>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="w-full py-2 text-xs text-[#7E776C] hover:text-[#141311]"
                >
                  Clear All
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
