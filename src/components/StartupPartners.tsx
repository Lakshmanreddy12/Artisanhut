import React, { useState } from 'react';
import { Truck, Compass, Coins, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import { STARTUP_PARTNERS } from '../data/mockData';
import { StartupPartner } from '../types';

export const StartupPartners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<StartupPartner | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-4 h-4 text-[#8E4723]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#8E4723]" />;
      case 'Coins':
        return <Coins className="w-4 h-4 text-[#8E4723]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-4 h-4 text-[#8E4723]" />;
    }
  };

  return (
    <section id="startups" className="bg-[#FFFFFF] border-b border-[#E8DFD3] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-bold text-[#5A4E46] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
          <span>Startup & Infrastructure Grid:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {STARTUP_PARTNERS.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#2C211B] bg-[#FAF5EF] hover:bg-[#F2E8DC] border border-[#E3D6C8] rounded-md transition-colors cursor-pointer group"
            >
              <span className="p-0.5 rounded bg-white group-hover:bg-[#FAF5EF]">
                {getIcon(partner.icon)}
              </span>
              <span>{partner.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Partner Detail Dialog */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl border border-[#E8DFD3] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-[#8A796E] hover:text-[#2C211B] p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5EF] border border-[#E8DFD3] flex items-center justify-center">
                {getIcon(selectedPartner.icon)}
              </div>
              <div>
                <span className="text-xs text-[#8E4723] font-semibold uppercase tracking-wider block">
                  {selectedPartner.role}
                </span>
                <h3 className="font-display text-lg font-bold text-[#2C211B]">
                  {selectedPartner.name}
                </h3>
              </div>
            </div>

            <p className="text-sm font-medium text-[#5A4E46] mb-3">
              {selectedPartner.tagline}
            </p>

            <p className="text-sm text-[#4A3E37] leading-relaxed mb-4">
              {selectedPartner.description}
            </p>

            <div className="p-3 bg-[#FAF5EF] rounded-lg border border-[#E8DFD3] flex items-center gap-2 text-xs font-medium text-[#2C211B]">
              <CheckCircle2 className="w-4 h-4 text-[#1C5E28] shrink-0" />
              <span><strong>Operational Impact:</strong> {selectedPartner.metrics}</span>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#8E4723] hover:bg-[#783918] rounded-md transition-colors"
              >
                Close Integration Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
