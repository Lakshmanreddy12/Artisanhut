import React, { useState } from 'react';
import { Mic, Volume2, Users, PackageCheck, Award, Play, Pause } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DigitalSathiSectionProps {
  currentLang: Language;
  onOpenSathiModal: () => void;
}

export const DigitalSathiSection: React.FC<DigitalSathiSectionProps> = ({
  currentLang,
  onOpenSathiModal,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleTestimonialAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio) {
      setTimeout(() => setIsPlayingAudio(false), 6000);
    }
  };

  return (
    <section id="sathi" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-gradient-to-br from-[#FAF5EF] via-white to-[#F5ECE0] rounded-2xl border border-[#E8DFD3] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Explanation Column (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E4723] uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Grassroots Digital Inclusion</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2C211B] mb-4">
            {t.sathiHeadline}
          </h2>

          <p className="text-sm text-[#6E5F55] leading-relaxed mb-8">
            {t.sathiSubhead}
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] border border-[#E8DFD3] flex items-center justify-center shrink-0 text-[#8E4723]">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2C211B]">
                  {t.sathiPoint1Title}
                </h3>
                <p className="text-xs text-[#6E5F55] mt-1 leading-relaxed">
                  {t.sathiPoint1Desc}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#E9F5EB] border border-[#C6E7CB] flex items-center justify-center shrink-0 text-[#1C5E28]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2C211B]">
                  {t.sathiPoint2Title}
                </h3>
                <p className="text-xs text-[#6E5F55] mt-1 leading-relaxed">
                  {t.sathiPoint2Desc}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] border border-[#E8DFD3] flex items-center justify-center shrink-0 text-[#8E4723]">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2C211B]">
                  {t.sathiPoint3Title}
                </h3>
                <p className="text-xs text-[#6E5F55] mt-1 leading-relaxed">
                  {t.sathiPoint3Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenSathiModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Mic className="w-4 h-4" />
              <span>{t.openSathiModalBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Testimonial & Audio Proof Column (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E8DFD3] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#8E4723]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A796E]">
                  Artisan Audio Note
                </span>
              </div>
              <span className="text-[11px] font-mono-num text-[#1C5E28] font-semibold bg-[#E9F5EB] px-2 py-0.5 rounded">
                Verified Sathi Recording
              </span>
            </div>

            <blockquote className="text-xs sm:text-sm text-[#4A3E37] leading-relaxed italic border-l-2 border-[#8E4723] pl-3.5 my-3">
              "I have been carving seasoned Sheesham in Nagina for 34 years. City middlemen paid us ₹1,200 for a haveli armchair and sold it for ₹7,000. Now through the local Village Sathi, I receive ₹4,800 directly in my bank account."
            </blockquote>

            {/* Audio Wave Simulator */}
            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E8DFD3] my-4 flex items-center gap-3">
              <button
                onClick={toggleTestimonialAudio}
                className="w-9 h-9 rounded-full bg-[#8E4723] text-white flex items-center justify-center shrink-0 hover:bg-[#743719] transition-colors"
                aria-label={isPlayingAudio ? "Pause testimonial audio" : "Play testimonial audio"}
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <div className="flex-1">
                <div className="flex items-center justify-between text-[11px] text-[#6E5F55] mb-1">
                  <span>Hindi Voice Note (Nagina Hub)</span>
                  <span className="font-mono-num">{isPlayingAudio ? '0:04 / 0:18' : '0:18'}</span>
                </div>
                {/* Waveform Bars */}
                <div className="flex items-center gap-1 h-5">
                  {[40, 70, 90, 60, 30, 80, 100, 50, 75, 45, 95, 60, 35, 70, 85, 40, 60, 80].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlayingAudio && i < 8 ? 'bg-[#8E4723]' : 'bg-[#DCCEC2]'
                      }`}
                      style={{ height: isPlayingAudio ? `${Math.max(20, (h * (i % 2 === 0 ? 1.2 : 0.8)) % 100)}%` : `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-[#F0E6D8] mt-2">
            <div className="w-10 h-10 rounded-full bg-[#8E4723] text-white flex items-center justify-center font-display font-bold text-sm">
              रा
            </div>
            <div>
              <div className="text-xs font-bold text-[#2C211B]">Master Ram Swaroop Sharma</div>
              <div className="text-[11px] text-[#8A796E]">Senior Woodcarver · Nagina Cluster, Uttar Pradesh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
