import React, { useState } from 'react';
import { X, Mic, MicOff, CheckCircle2, AlertCircle, Sparkles, Truck } from 'lucide-react';
import { Product } from '../types';

interface DigitalSathiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (newProduct: Product) => void;
}

export const DigitalSathiModal: React.FC<DigitalSathiModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  // Form State
  const [artisanName, setArtisanName] = useState('');
  const [village, setVillage] = useState('');
  const [itemName, setItemName] = useState('');
  const [woodType, setWoodType] = useState<'sheesham' | 'teak' | 'mango' | 'ivorywood'>('sheesham');
  const [category, setCategory] = useState<'furniture' | 'handicraft' | 'textile'>('furniture');
  const [expectedPrice, setExpectedPrice] = useState<number | ''>('');
  const [weightKg, setWeightKg] = useState<number | ''>('');
  const [freightType, setFreightType] = useState('porter');
  const [sathiId, setSathiId] = useState('CSC-UP-4021');
  const [voiceNoteTranscript, setVoiceNoteTranscript] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Handle Voice Recording Simulation
  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingSeconds(0);
      const timer = setInterval(() => {
        setRecordingSeconds((prev) => {
          if (prev >= 4) {
            clearInterval(timer);
            setIsRecording(false);
            setHasRecorded(true);
            // Simulate AI Speech to Structured specs
            setVoiceNoteTranscript("Transcribed: '4 chairs, seasoned Sheesham wood, 14kg each, artisan asking ₹4,200 net hand payout'");
            setArtisanName('Munna Lal Badhai');
            setVillage('Saharanpur, UP');
            setItemName('Sheesham Carved Dining Chair with Cane Mesh');
            setWoodType('sheesham');
            setCategory('furniture');
            setExpectedPrice(4200);
            setWeightKg(14);
            return 5;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setIsRecording(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemName || !expectedPrice || !artisanName) return;

    const retailPrice = Math.round(Number(expectedPrice) * 1.38);
    const newProduct: Product = {
      id: Date.now(),
      title: itemName,
      category,
      woodType,
      price: retailPrice,
      originalPrice: Math.round(retailPrice * 1.6),
      artisan: artisanName,
      artisanRole: "Village Certified Badhai",
      village: village || "Saharanpur Cluster",
      state: "Uttar Pradesh",
      specs: `Kiln-seasoned ${woodType === 'sheesham' ? 'Sheesham Wood' : woodType === 'teak' ? 'Teak Wood' : 'Mango Wood'} · Hand-buffed natural wax`,
      dimensions: "Standard Workshop Dimensions",
      weightKg: Number(weightKg) || 12,
      woodMoisture: "10.2% Seasoned Kiln Dry",
      certification: "Village Sathi Authenticated & Hub Checked",
      heavyFreight: freightType === 'porter',
      freightPartner: freightType === 'porter' ? "Porter Heavy Wood Crate (Tailgate Insured)" : "Standard Courier Air Express",
      img: "https://images.unsplash.com/photo-1580481077191-735c13de279f?auto=format&fit=crop&w=800&q=80",
      description: `Direct listing initiated by Village Digital Sathi (${sathiId}). 100% fair payout to artisan bank account via Escrow upon delivery confirmation.`,
      inStock: 3,
      leadTimeDays: 5
    };

    onAddProduct(newProduct);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

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

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C5E28] mb-1">
            <span>डिजिटल साथी सहायता पोर्टल</span>
            <span aria-hidden="true">·</span>
            <span>CSC Village Helper Console</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-[#2C211B]">
            Village Assisted Listing
          </h2>
          <p className="text-xs text-[#6E5F55] mt-1">
            Enabling rural carpenters to list their creations directly using native voice recording, eliminating middlemen without complex paperwork.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#1C5E28] mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-[#2C211B] mb-1">
              Masterwork Published Successfully!
            </h3>
            <p className="text-xs text-[#6E5F55]">
              Listing is now live in the catalog. Regional hub coordinator notified for timber verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Interactive Voice Recording Box */}
            <div 
              onClick={handleToggleRecord}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-center ${
                isRecording 
                  ? 'border-red-500 bg-red-50 animate-pulse' 
                  : hasRecorded 
                    ? 'border-[#1C5E28] bg-[#E9F5EB]' 
                    : 'border-dashed border-[#8E4723] bg-[#FAF7F2] hover:bg-[#F5ECE0]'
              }`}
            >
              <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2 bg-white shadow-sm">
                <Mic className={`w-6 h-6 ${isRecording ? 'text-red-600' : hasRecorded ? 'text-[#1C5E28]' : 'text-[#8E4723]'}`} />
              </div>

              {isRecording ? (
                <div>
                  <div className="text-xs font-bold text-red-700">
                    🔴 Recording Artisan Voice in Hindi / Kannada / Telugu... ({recordingSeconds}s)
                  </div>
                  <div className="text-[11px] text-red-600 mt-0.5">
                    Listening to wood finish, chair sizes, and expected price...
                  </div>
                </div>
              ) : hasRecorded ? (
                <div>
                  <div className="text-xs font-bold text-[#1C5E28]">
                    ✅ Voice Note Converted to Catalog Draft
                  </div>
                  <div className="text-[11px] text-[#2C211B] mt-0.5 italic">
                    "{voiceNoteTranscript}"
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold text-[#2C211B]">
                    Tap to Record Artisan's Voice Note
                  </div>
                  <div className="text-[11px] text-[#6E5F55] mt-0.5">
                    Speak naturally in local language. Details will be auto-filled into the form below.
                  </div>
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Artisan Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Suthar"
                  value={artisanName}
                  onChange={(e) => setArtisanName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Village & Cluster
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Channapatna / Nagina"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2C211B] mb-1">
                Item Title & Description
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Solid Teak Wood Rocking Chair"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Timber Species
                </label>
                <select
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                >
                  <option value="sheesham">Seasoned Sheesham</option>
                  <option value="teak">Reclaimed Teak</option>
                  <option value="mango">Mango Wood</option>
                  <option value="ivorywood">Channapatna Ivory Wood</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Artisan Price (₹ in Hand)
                </label>
                <input
                  type="number"
                  required
                  placeholder="₹ 4,200"
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(Number(e.target.value) || '')}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C211B] mb-1">
                  Est. Weight (kg)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 15"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value) || '')}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2C211B] mb-1">
                Logistics & Freight Method
              </label>
              <select
                value={freightType}
                onChange={(e) => setFreightType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
              >
                <option value="porter">Porter / Rivigo Heavy Wooden Crate (Tailgate Truck Pickup)</option>
                <option value="courier">Standard Express Courier (&lt; 5kg Goods)</option>
              </select>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E8DFD3] flex items-center justify-between text-xs">
              <span className="text-[#6E5F55]">Assisting Sathi ID: <strong>{sathiId}</strong></span>
              <span className="text-[#1C5E28] font-semibold">3% Commission Credited Upon Dispatch</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md shadow-sm transition-colors cursor-pointer"
            >
              Publish Masterwork to Direct Marketplace
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
