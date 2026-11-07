import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product, ProductCategory, WoodType, Language } from '../types';
import { ProductCard } from './ProductCard';
import { TRANSLATIONS } from '../data/translations';

interface ProductCatalogProps {
  products: Product[];
  currentLang: Language;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onRequestCustom: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  currentLang,
  onAddToCart,
  onQuickView,
  onRequestCustom,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedWood, setSelectedWood] = useState<WoodType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[currentLang];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Wood filter
      if (selectedWood !== 'all' && p.woodType !== selectedWood) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesArtisan = p.artisan.toLowerCase().includes(query);
        const matchesVillage = p.village.toLowerCase().includes(query);
        const matchesSpecs = p.specs.toLowerCase().includes(query);
        return matchesTitle || matchesArtisan || matchesVillage || matchesSpecs;
      }
      return true;
    });
  }, [products, selectedCategory, selectedWood, searchQuery]);

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E8DFD3]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E4723] mb-1.5">
            <span>Direct-from-Maker Registry</span>
            <span aria-hidden="true">·</span>
            <span>Kiln-Seasoned Hardwoods</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C211B]">
            Curated Handcrafted Collections
          </h2>
          <p className="text-sm text-[#6E5F55] mt-1 max-w-xl">
            Every creation is marked with master artisan signatures, wood moisture testing records, and insured heavy crate tracking.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <label htmlFor="search-crafts" className="sr-only">Search woodcrafts, artisans, or villages</label>
          <Search className="w-4 h-4 text-[#8A796E] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="search-crafts"
            type="text"
            placeholder="Search Sheesham, Pali, artisans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8A796E] hover:text-[#2C211B]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs (Segmented Controls) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#EFE8DF] rounded-lg overflow-x-auto max-w-full">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-[#2C211B] shadow-sm'
                : 'text-[#6E5F55] hover:text-[#2C211B]'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setSelectedCategory('furniture')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'furniture'
                ? 'bg-white text-[#2C211B] shadow-sm'
                : 'text-[#6E5F55] hover:text-[#2C211B]'
            }`}
          >
            {t.filterFurniture}
          </button>
          <button
            onClick={() => setSelectedCategory('handicraft')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'handicraft'
                ? 'bg-white text-[#2C211B] shadow-sm'
                : 'text-[#6E5F55] hover:text-[#2C211B]'
            }`}
          >
            {t.filterHandicraft}
          </button>
          <button
            onClick={() => setSelectedCategory('textile')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'textile'
                ? 'bg-white text-[#2C211B] shadow-sm'
                : 'text-[#6E5F55] hover:text-[#2C211B]'
            }`}
          >
            {t.filterTextile}
          </button>
          <button
            onClick={() => setSelectedCategory('brass_cane')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'brass_cane'
                ? 'bg-white text-[#2C211B] shadow-sm'
                : 'text-[#6E5F55] hover:text-[#2C211B]'
            }`}
          >
            {t.filterBrass}
          </button>
        </div>

        {/* Timber Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#8A796E] font-medium hidden sm:inline">Timber:</span>
          <label htmlFor="wood-select" className="sr-only">Filter by Timber Species</label>
          <select
            id="wood-select"
            value={selectedWood}
            onChange={(e) => setSelectedWood(e.target.value as WoodType)}
            className="text-xs bg-white border border-[#E3D6C8] text-[#2C211B] py-1.5 px-3 rounded-md focus:outline-none focus:border-[#8E4723] cursor-pointer"
          >
            <option value="all">{t.filterWoodAll}</option>
            <option value="sheesham">{t.filterWoodSheesham}</option>
            <option value="teak">{t.filterWoodTeak}</option>
            <option value="mango">{t.filterWoodMango}</option>
            <option value="ivorywood">Ivory Wood (Channapatna GI)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onRequestCustom={onRequestCustom}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-xl border border-[#E8DFD3] p-8">
          <p className="text-sm font-semibold text-[#2C211B] mb-2">No masterworks found matching your criteria</p>
          <p className="text-xs text-[#8A796E] mb-4">Try clearing filters or checking other timber species.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedWood('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
