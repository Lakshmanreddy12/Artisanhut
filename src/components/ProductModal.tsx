import React from 'react';
import { X, ShieldCheck, TreePine, Ruler, Truck, Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onRequestCustom: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onRequestCustom,
}) => {
  if (!product) return null;

  const artisanEarning = Math.round(product.price * 0.72);
  const logisticsEarning = Math.round(product.price * 0.17);
  const sathiEarning = Math.round(product.price * 0.03);
  const platformEscrow = product.price - artisanEarning - logisticsEarning - sathiEarning;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8DFD3] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 border border-[#E8DFD3] text-[#5A4E46] hover:text-[#2C211B] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative bg-[#FAF5EF] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DFD3]">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E8DFD3] shadow-sm mb-4">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Timber Certification Card */}
            <div className="p-3.5 bg-white rounded-xl border border-[#E8DFD3] text-xs">
              <div className="flex items-center gap-1.5 font-bold text-[#1C5E28] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Wood Certification Record</span>
              </div>
              <p className="text-[#5A4E46] text-[11px] leading-relaxed">
                {product.certification}
              </p>
              <div className="mt-2 pt-2 border-t border-[#F0E6D8] flex items-center justify-between text-[11px] text-[#8A796E]">
                <span>Moisture Reading:</span>
                <span className="font-mono-num font-semibold text-[#2C211B]">{product.woodMoisture}</span>
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 flex flex-col">
            <div className="text-xs text-[#8E4723] font-semibold uppercase tracking-wider mb-1">
              📍 {product.village}, {product.state}
            </div>

            <h2 className="font-display text-xl font-bold text-[#2C211B] mb-2">
              {product.title}
            </h2>

            <div className="text-xs text-[#5A4E46] mb-4">
              Carved by <strong className="text-[#2C211B]">{product.artisan}</strong> · {product.artisanRole}
            </div>

            <p className="text-xs text-[#6E5F55] leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Technical Specs List */}
            <div className="space-y-2 py-3 border-y border-[#F0E6D8] text-xs mb-4">
              <div className="flex justify-between">
                <span className="text-[#8A796E]">Dimensions:</span>
                <span className="font-medium text-[#2C211B]">{product.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A796E]">Weight:</span>
                <span className="font-medium text-[#2C211B] font-mono-num tabular-nums">{product.weightKg} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A796E]">Freight Handling:</span>
                <span className="font-medium text-[#2C211B]">{product.freightPartner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A796E]">Estimated Dispatch:</span>
                <span className="font-medium text-[#1C5E28]">{product.leadTimeDays} business days</span>
              </div>
            </div>

            {/* Direct Fair-Trade Payout Breakdown */}
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3] mb-6 text-xs">
              <div className="font-bold text-[#2C211B] mb-2 flex items-center justify-between">
                <span>Transparent Fair-Trade Breakdown</span>
                <span className="text-[#1C5E28] font-mono-num font-semibold">100% Direct Escrow</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between text-[#2C211B]">
                  <span>Artisan Direct Bank Payout (72%):</span>
                  <span className="font-mono-num font-bold">₹{artisanEarning.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6E5F55]">
                  <span>Heavy Wood Crate & Freight (17%):</span>
                  <span className="font-mono-num">₹{logisticsEarning.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6E5F55]">
                  <span>Village Digital Sathi Incentive (3%):</span>
                  <span className="font-mono-num">₹{sathiEarning.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6E5F55]">
                  <span>Quality Assurance & Escrow (8%):</span>
                  <span className="font-mono-num">₹{platformEscrow.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-[#F0E6D8]">
              <div>
                <div className="text-[10px] text-[#8A796E] uppercase tracking-wider font-semibold">Artisan Direct Price</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-num text-2xl font-bold text-[#2C211B] tabular-nums">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="font-mono-num text-xs text-[#9E9084] line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onRequestCustom(product);
                    onClose();
                  }}
                  className="px-3 py-2 text-xs font-semibold text-[#5A4E46] bg-[#FAF5EF] hover:bg-[#F2E8DC] border border-[#E3D6C8] rounded-md transition-colors"
                >
                  Custom Size
                </button>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md transition-colors shadow-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
