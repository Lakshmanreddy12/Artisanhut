import React from 'react';
import { ArrowDown, ShieldCheck, TreePine, Truck, Users } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenSathiModal: () => void;
  onOpenCustomModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenSathiModal,
  onOpenCustomModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="top" className="relative overflow-hidden bg-[#241A15] text-[#FAF5EF]">
      {/* Background Image with High Contrast Scrim */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45 mix-blend-luminosity filter saturate-75"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#241A15]/80 via-[#241A15]/90 to-[#241A15]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D5985C] mb-4">
          <span>{t.heroTag}</span>
          <span aria-hidden="true">·</span>
          <span>Zero Middleman Cuts</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.18] text-balance">
          {t.heroTitle}
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#D0C2B4] max-w-2xl mx-auto leading-relaxed font-normal">
          {t.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#shop"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#8E4723] hover:bg-[#783918] rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t.heroBrowseBtn}</span>
            <ArrowDown className="w-4 h-4 ml-2" />
          </a>

          <button
            onClick={onOpenSathiModal}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#FAF5EF] bg-white/10 hover:bg-white/15 border border-white/25 rounded-lg backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t.heroSathiBtn}</span>
          </button>

          <button
            onClick={onOpenCustomModal}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#E5A869] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>✨ Made-to-Order Studio</span>
          </button>
        </div>

        {/* Proof Row directly adjacent to claim */}
        <div className="mt-14 pt-8 border-t border-[#44352D] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#E5A869] shrink-0 mt-0.5" />
            <div>
              <div className="text-base font-bold text-white font-mono-num tabular-nums">₹1.4 Cr+</div>
              <div className="text-xs text-[#A8988B]">Direct to Village Carpenters</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <TreePine className="w-5 h-5 text-[#E5A869] shrink-0 mt-0.5" />
            <div>
              <div className="text-base font-bold text-white font-mono-num tabular-nums">&lt;11% Moisture</div>
              <div className="text-xs text-[#A8988B]">Seasoned Sheesham & Teak</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#E5A869] shrink-0 mt-0.5" />
            <div>
              <div className="text-base font-bold text-white font-mono-num tabular-nums">28,000+ Pincodes</div>
              <div className="text-xs text-[#A8988B]">Porter & Rivigo Heavy Freight</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E5A869] shrink-0 mt-0.5" />
            <div>
              <div className="text-base font-bold text-white font-mono-num tabular-nums">PM Vishwakarma</div>
              <div className="text-xs text-[#A8988B]">Certified Guild Woodcarvers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
