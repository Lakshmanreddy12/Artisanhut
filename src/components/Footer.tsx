import React from 'react';
import { Hammer, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onOpenCreditsModal: () => void;
  onOpenSathiModal: () => void;
  onOpenCustomModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCreditsModal,
  onOpenSathiModal,
  onOpenCustomModal,
}) => {
  return (
    <footer className="bg-[#241A15] text-[#D8CCC0] pt-16 pb-12 border-t border-[#3D2C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-3 font-display">
              <span className="w-7 h-7 rounded bg-[#8E4723] text-white flex items-center justify-center font-display text-base">
                आ
              </span>
              <span>ArtisanHaat</span>
            </div>
            <p className="text-xs text-[#A8988B] leading-relaxed mb-4">
              Direct-from-village woodworking platform connecting generational Badhai carpenters and craft guilds with modern homes and architects across India.
            </p>
            <div className="text-[11px] text-[#E5A869] font-medium flex items-center gap-1.5">
              <Hammer className="w-3.5 h-3.5" />
              <span>Certified Kiln-Dried Hardwood Guarantee</span>
            </div>
          </div>

          {/* Heritage Clusters */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Craft Clusters
            </h4>
            <ul className="space-y-2 text-xs text-[#A8988B]">
              <li>Nagina & Saharanpur (Sheesham Woodcarving)</li>
              <li>Jodhpur & Pali (Reclaimed Teak Furniture)</li>
              <li>Channapatna (GI-Certified Ivory Wood Turnery)</li>
              <li>Gorakhpur (Black Terracotta Silt Pottery)</li>
              <li>Bastar (Dhokra Lost-Wax Bell Metal)</li>
            </ul>
          </div>

          {/* Rural Initiatives */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Rural Initiatives
            </h4>
            <ul className="space-y-2 text-xs text-[#A8988B]">
              <li>
                <button 
                  onClick={onOpenSathiModal} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Village Digital Sathi Voice Listing
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCustomModal} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Custom Dimension Made-to-Order
                </button>
              </li>
              <li>• PM Vishwakarma Guild Certification</li>
              <li>• Porter / Rivigo Heavy Freight Alliances</li>
              <li>• 100% Direct Escrow Artisan Guarantee</li>
            </ul>
          </div>

          {/* Student Project Attribution */}
          <div className="bg-[#2E221B] p-4 rounded-xl border border-[#443329]">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Academic Project
            </h4>
            <p className="text-xs text-[#A8988B] mb-2">
              Designed & Engineered By:
            </p>
            <p className="text-xs font-bold text-[#E5A869] leading-snug mb-3">
              Lakshman Reddy M · Ajay · Pruthvi Charan
            </p>
            <button
              onClick={onOpenCreditsModal}
              className="text-xs font-semibold text-white hover:text-[#E5A869] underline cursor-pointer"
            >
              View Architecture & Impact Report →
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-[#382820] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A796E] gap-4">
          <p>© 2026 ArtisanHaat — Preserving Tradition. Connecting Craft with the Future.</p>
          <p>Direct Artisan Escrow Model · Zero Middlemen Markups</p>
        </div>
      </div>
    </footer>
  );
};
