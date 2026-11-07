import React from 'react';
import { X, Award, GraduationCap, Users, HeartHandshake, CheckCircle } from 'lucide-react';

interface ProjectCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCreditModal: React.FC<ProjectCreditModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD3] relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8A796E] hover:text-[#2C211B] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E4723] mb-1">
          <GraduationCap className="w-4 h-4" />
          <span>Student Innovation Project</span>
        </div>

        <h2 className="font-display text-2xl font-bold text-[#2C211B] mb-2">
          ArtisanHaat Platform Architecture
        </h2>

        <p className="text-xs text-[#6E5F55] leading-relaxed mb-6">
          An engineering and economic initiative created to dismantle parasitic middleman commissions in rural woodworking belts across Uttar Pradesh, Rajasthan, and Karnataka.
        </p>

        {/* Team Members Grid */}
        <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD3] mb-6">
          <div className="text-xs font-bold text-[#2C211B] mb-3 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#8E4723]" />
            <span>Core Design & Development Team:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-lg border border-[#E8DFD3]">
              <div className="font-display font-bold text-sm text-[#2C211B]">Lakshman Reddy M</div>
              <div className="text-[11px] text-[#8E4723] font-medium">Lead Developer</div>
              <div className="text-[10px] text-[#8A796E] mt-1">Platform Architecture & Logistics Integration</div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E8DFD3]">
              <div className="font-display font-bold text-sm text-[#2C211B]">Ajay</div>
              <div className="text-[11px] text-[#8E4723] font-medium">Product & Research</div>
              <div className="text-[10px] text-[#8A796E] mt-1">Digital Sathi Onboarding & Cluster Economics</div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E8DFD3]">
              <div className="font-display font-bold text-sm text-[#2C211B]">Pruthvi Charan</div>
              <div className="text-[11px] text-[#8E4723] font-medium">UX & Systems</div>
              <div className="text-[10px] text-[#8A796E] mt-1">Custom Studio Dimension Estimator & Timber Engine</div>
            </div>
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="space-y-2.5 text-xs text-[#5A4E46] mb-6">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#1C5E28] shrink-0 mt-0.5" />
            <span><strong>Voice-Driven Digital Inclusion:</strong> Elderly non-literate carpenters list products using WhatsApp voice notes translated by local CSC youth.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#1C5E28] shrink-0 mt-0.5" />
            <span><strong>72% Direct Value Retention:</strong> Artisans receive ~₹4,800 on a chair that previously earned them barely ₹1,200 in wholesale mandis.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#1C5E28] shrink-0 mt-0.5" />
            <span><strong>Startup Freight Infrastructure:</strong> Porter & Rivigo provide doorstep crate loading so heavy furniture safely travels across 28,000+ pincodes.</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md transition-colors"
        >
          Return to Marketplace
        </button>
      </div>
    </div>
  );
};
