import React from 'react';
import { ShoppingBag, Sparkles, Globe2, Hammer } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TopNavProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenSathiModal: () => void;
  onOpenCustomModal: () => void;
  onOpenCreditsModal: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentLang,
  onLanguageChange,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenSathiModal,
  onOpenCustomModal,
  onOpenCreditsModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3]">
      {/* Announcement Bar */}
      <div className="bg-[#2C211B] text-[#EFE7DE] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#E5A869]">Direct From Origin:</span>
            <span className="text-[#D8CCC0]">{t.bannerNotice}</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={onOpenCreditsModal}
              className="text-[#E5A869] hover:underline cursor-pointer whitespace-nowrap"
            >
              Academic Project By: Lakshman, Ajay & Pruthvi
            </button>
            <div className="flex items-center gap-1.5 bg-[#42332A] px-2.5 py-1 rounded text-white">
              <Globe2 className="w-3.5 h-3.5 text-[#E5A869]" />
              <label htmlFor="lang-select" className="sr-only">Select Language</label>
              <select
                id="lang-select"
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-xs text-white border-none focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-[#2C211B]">English</option>
                <option value="hi" className="bg-[#2C211B]">हिंदी (Hindi)</option>
                <option value="kn" className="bg-[#2C211B]">ಕನ್ನಡ (Kannada)</option>
                <option value="te" className="bg-[#2C211B]">తెలుగు (Telugu)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in Playfair Display) */}
        <a 
          href="#top" 
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#2C211B] whitespace-nowrap shrink-0 group font-display"
        >
          <span className="w-8 h-8 rounded-md bg-[#8E4723] text-white flex items-center justify-center font-display text-lg shadow-sm">
            आ
          </span>
          <span>ArtisanHaat</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A4E46]">
          <a href="#shop" className="hover:text-[#8E4723] transition-colors whitespace-nowrap shrink-0">
            {t.navCatalog}
          </a>
          <a href="#shop" className="hover:text-[#8E4723] transition-colors whitespace-nowrap shrink-0">
            {t.navFurniture}
          </a>
          <a href="#sathi" className="hover:text-[#8E4723] transition-colors whitespace-nowrap shrink-0">
            {t.navDigitalSathi}
          </a>
          <a href="#startups" className="hover:text-[#8E4723] transition-colors whitespace-nowrap shrink-0">
            {t.navStartups}
          </a>
          <button 
            onClick={onOpenCustomModal} 
            className="hover:text-[#8E4723] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            {t.navCustom}
          </button>
        </nav>

        {/* Zone 3: 1 primary action or clean paired action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSathiModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1C5E28] bg-[#E9F5EB] border border-[#C6E7CB] rounded-md hover:bg-[#D8EEDF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Hammer className="w-3.5 h-3.5" />
            <span>Digital Sathi</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View Shopping Bag"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="tabular-nums font-mono-num font-semibold">
              {cartCount} Item{cartCount !== 1 ? 's' : ''} · ₹{cartTotal.toLocaleString()}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
