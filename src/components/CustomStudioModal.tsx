import React, { useState } from 'react';
import { X, Ruler, Calculator, CheckCircle2, MessageSquare, Upload } from 'lucide-react';
import { Product } from '../types';

interface CustomStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const CustomStudioModal: React.FC<CustomStudioModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState(
    initialProduct?.title?.includes('Chair') || initialProduct?.title?.includes('Table')
      ? 'Dining Table & Chairs'
      : 'Solid Wood Study Desk'
  );
  const [woodType, setWoodType] = useState(initialProduct?.woodType || 'sheesham');
  const [finish, setFinish] = useState('natural_wax');
  const [lengthFt, setLengthFt] = useState(5);
  const [widthFt, setWidthFt] = useState(3);
  const [heightFt, setHeightFt] = useState(2.5);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Live Timber Volume & Price Calculation Formula
  // CFT (Cubic Feet) estimated as (L * W * H * 0.45) for solid furniture joinery allowance
  const estimatedCFT = Number((lengthFt * widthFt * heightFt * 0.45).toFixed(1));
  const woodRatePerCFT = woodType === 'teak' ? 2400 : woodType === 'sheesham' ? 1800 : 1300;
  const timberCost = Math.round(estimatedCFT * woodRatePerCFT);
  const joineryLabor = Math.round(timberCost * 0.65);
  const crateLogistics = 1800;
  const estimatedTotal = timberCost + joineryLabor + crateLogistics;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD3] relative my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8A796E] hover:text-[#2C211B] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E4723] mb-1">
            <Ruler className="w-3.5 h-3.5" />
            <span>Master Carpenter Direct Studio</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-[#2C211B]">
            Custom Dimension Request
          </h2>
          <p className="text-xs text-[#6E5F55] mt-1">
            Tailor furniture sizes directly with regional woodworking clusters (Saharanpur, Pali, Jodhpur). Full wood seasoning cert included.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#1C5E28] mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-[#2C211B] mb-2">
              Specifications Dispatched to Master Carpenters!
            </h3>
            <p className="text-xs text-[#6E5F55] max-w-md mx-auto leading-relaxed">
              We have forwarded your dimensions to senior joiners in the cluster. You will receive wood grain samples and a finalized WhatsApp quotation at <strong className="text-[#2C211B]">{customerPhone || 'your contact'}</strong> within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  WhatsApp Contact
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bengaluru, Karnataka"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Furniture Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                >
                  <option>Dining Table & Chairs</option>
                  <option>Solid Wood Study Desk</option>
                  <option>Traditional Hand-Carved Swings (Jhula)</option>
                  <option>Consoles & TV Credenzas</option>
                  <option>Pooja Mandir & Temple Woodwork</option>
                  <option>Haveli Four-Poster Bed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Select Seasoned Timber
                </label>
                <select
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                >
                  <option value="sheesham">Seasoned Sheesham Wood (Rosewood)</option>
                  <option value="teak">Reclaimed Sagwan (Teak Wood)</option>
                  <option value="mango">Sustainable Mango Wood</option>
                </select>
              </div>
            </div>

            {/* Dimension Sliders */}
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#2C211B]">
                  Required Dimensions (in Feet)
                </span>
                <span className="text-[11px] font-mono-num text-[#8E4723] font-semibold">
                  {lengthFt}'L × {widthFt}'W × {heightFt}'H
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-[11px] text-[#6E5F55] mb-1">
                    <span>Length:</span>
                    <span className="font-mono-num font-bold text-[#2C211B]">{lengthFt} ft</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.5"
                    value={lengthFt}
                    onChange={(e) => setLengthFt(parseFloat(e.target.value))}
                    className="w-full accent-[#8E4723] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#6E5F55] mb-1">
                    <span>Width:</span>
                    <span className="font-mono-num font-bold text-[#2C211B]">{widthFt} ft</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={widthFt}
                    onChange={(e) => setWidthFt(parseFloat(e.target.value))}
                    className="w-full accent-[#8E4723] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#6E5F55] mb-1">
                    <span>Height:</span>
                    <span className="font-mono-num font-bold text-[#2C211B]">{heightFt} ft</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.5"
                    value={heightFt}
                    onChange={(e) => setHeightFt(parseFloat(e.target.value))}
                    className="w-full accent-[#8E4723] cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Timber Calculation Estimate */}
              <div className="mt-4 pt-3 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between text-xs gap-3">
                <div>
                  <span className="text-[#8A796E]">Est. Timber Volume: </span>
                  <span className="font-mono-num font-bold text-[#2C211B]">{estimatedCFT} CFT</span>
                </div>
                <div>
                  <span className="text-[#8A796E]">Estimated Fair Cost: </span>
                  <span className="font-mono-num text-base font-bold text-[#1C5E28]">
                    ~₹{estimatedTotal.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#8A796E] ml-1">(incl. Crate Freight)</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2C211B] mb-1">
                Hand-Buffed Finish Preference
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
              >
                <option value="natural_wax">Natural Cold-Pressed Linseed Oil & Beeswax (Matte)</option>
                <option value="honey_polish">Traditional Honey Teak Gloss Polish</option>
                <option value="walnut_stain">Dark Walnut Royal Antique Stain</option>
                <option value="raw_timber">Raw Untreated Kiln-Seasoned (Ready for Custom Oil)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2C211B] mb-1">
                Special Requests & Room Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need cable grommets for computer desk, or rounded corners for child safety."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md shadow-sm transition-colors cursor-pointer"
            >
              Send Dimensions to Regional Woodworking Hub
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
