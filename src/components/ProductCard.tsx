import React, { useState } from 'react';
import { Eye, Ruler, ShoppingBag, Truck, ImageOff } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onRequestCustom: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onRequestCustom,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <article className="group bg-white rounded-xl border border-[#E8DFD3] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-[#EFE8DF] overflow-hidden">
        {!imageError ? (
          <img
            src={product.img}
            alt={product.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DF] to-[#E3D6C8] p-4 text-center">
            <ImageOff className="w-8 h-8 text-[#8A796E] mb-2" />
            <span className="text-xs font-semibold text-[#5A4E46]">{product.title}</span>
            <span className="text-[11px] text-[#8A796E] mt-1">{product.village}</span>
          </div>
        )}

        {/* Quick View Floating Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-x-3 bottom-3 py-2 px-3 bg-white/95 backdrop-blur-md rounded-md text-xs font-bold text-[#2C211B] flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-[#8E4723]" />
          <span>Inspect Timber Certificate</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Unboxed Metadata (Zero-Pill Rule Compliant) */}
        <div className="flex items-center gap-1.5 text-xs text-[#8A796E] mb-1.5 font-medium">
          <span>{product.village}</span>
          <span aria-hidden="true">·</span>
          <span>By {product.artisan}</span>
        </div>

        {/* Title in Editorial Serif */}
        <h3 className="font-display text-base font-bold text-[#2C211B] leading-snug line-clamp-1 group-hover:text-[#8E4723] transition-colors mb-1.5">
          {product.title}
        </h3>

        {/* Quiet Specs Line */}
        <div className="text-xs text-[#63554C] line-clamp-1 mb-3">
          {product.specs}
        </div>

        {/* Freight Indicator (Quiet Unboxed Row) */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#5A4E46] mb-3 pb-3 border-b border-[#F0E6D8]">
          <Truck className="w-3.5 h-3.5 text-[#8E4723] shrink-0" />
          <span className="truncate">{product.freightPartner}</span>
        </div>

        {/* Price Row */}
        <div className="mt-auto flex items-baseline justify-between gap-2 pt-1 mb-4">
          <div className="flex items-baseline gap-2">
            <span className="font-mono-num text-xl font-bold text-[#2C211B] tabular-nums">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="font-mono-num text-xs text-[#9E9084] line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#1C5E28]">
            72% Direct Payout
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onRequestCustom(product)}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-[#5A4E46] bg-[#FAF5EF] hover:bg-[#F2E8DC] border border-[#E3D6C8] rounded-md transition-colors cursor-pointer"
          >
            <Ruler className="w-3.5 h-3.5 text-[#8E4723]" />
            <span>Custom Size</span>
          </button>

          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold text-white rounded-md transition-colors cursor-pointer ${
              isAdded ? 'bg-[#1C5E28]' : 'bg-[#8E4723] hover:bg-[#743719]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
