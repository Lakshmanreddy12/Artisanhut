import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ShieldCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [pincode, setPincode] = useState('560001');
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [pincodeVerified, setPincodeVerified] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'card'>('cod');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Checkout Form Details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalWeightKg = items.reduce((sum, item) => sum + (item.product.weightKg || 5) * item.quantity, 0);
  const hasHeavyItems = items.some((item) => item.product.heavyFreight);

  // Free delivery threshold: ₹5,000
  const freightFee = subtotal >= 5000 || subtotal === 0 ? 0 : 450;
  const grandTotal = subtotal + freightFee;
  const directArtisanShare = Math.round(subtotal * 0.72);

  const handleVerifyPincode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingPincode(true);
    setTimeout(() => {
      setIsCheckingPincode(false);
      setPincodeVerified(true);
    }, 400);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `AH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#E8DFD3]">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8DFD3] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8E4723]" />
              <h2 className="font-display text-lg font-bold text-[#2C211B]">
                {showCheckout ? 'Confirm Delivery & Escrow' : 'Your Shopping Bag'}
              </h2>
            </div>
            <button
              onClick={() => {
                if (showCheckout && !orderConfirmed) {
                  setShowCheckout(false);
                } else {
                  onClose();
                  setShowCheckout(false);
                  setOrderConfirmed(false);
                }
              }}
              className="p-1 rounded-full text-[#8A796E] hover:text-[#2C211B] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          {orderConfirmed ? (
            /* Order Placed State */
            <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#E9F5EB] text-[#1C5E28] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#1C5E28] font-bold">
                Direct Work Order Dispatched
              </span>
              <h3 className="font-display text-2xl font-bold text-[#2C211B] mt-1 mb-2">
                Order #{orderId} Confirmed
              </h3>
              <p className="text-xs text-[#6E5F55] leading-relaxed mb-6 max-w-xs">
                Your order is logged directly into the village carpentry registry. The artisan receives 72% direct payout upon Porter/Rivigo shock-proof crate inspection.
              </p>

              <div className="w-full bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD3] text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#8A796E]">Recipient:</span>
                  <span className="font-semibold text-[#2C211B]">{name || 'Customer'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A796E]">Delivery Pincode:</span>
                  <span className="font-semibold text-[#2C211B] font-mono-num">{pincode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A796E]">Payment Mode:</span>
                  <span className="font-semibold uppercase text-[#1C5E28]">{paymentMethod}</span>
                </div>
                <div className="flex justify-between border-t border-[#E8DFD3] pt-2">
                  <span className="font-bold text-[#2C211B]">Total Payable:</span>
                  <span className="font-mono-num font-bold text-[#2C211B] text-sm">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrderConfirmed(false);
                  setShowCheckout(false);
                  onClose();
                }}
                className="w-full py-3 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md transition-colors"
              >
                Continue Exploring Marketplace
              </button>
            </div>
          ) : showCheckout ? (
            /* Checkout Form */
            <form onSubmit={handlePlaceOrder} className="flex-1 p-5 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E8DFD3] text-xs">
                  <div className="font-bold text-[#2C211B] mb-1">Total Order Summary</div>
                  <div className="flex justify-between text-[#6E5F55]">
                    <span>Items Total ({items.length}):</span>
                    <span className="font-mono-num font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#6E5F55]">
                    <span>Heavy Freight / Courier:</span>
                    <span className="font-mono-num text-[#1C5E28] font-semibold">
                      {freightFee === 0 ? 'FREE (Above ₹5,000)' : `₹${freightFee}`}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C211B] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lakshman Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C211B] mb-1">
                    Phone Number (for Porter Tailgate Truck Delivery)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C211B] mb-1">
                    Complete Street Address
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="House/Apartment #, Street, Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E3D6C8] rounded-md focus:outline-none focus:border-[#8E4723]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C211B] mb-1">
                    Payment & Escrow Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                        paymentMethod === 'cod'
                          ? 'border-[#8E4723] bg-[#FAF5EF] text-[#8E4723]'
                          : 'border-[#E3D6C8] text-[#5A4E46]'
                      }`}
                    >
                      Cash on Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                        paymentMethod === 'upi'
                          ? 'border-[#8E4723] bg-[#FAF5EF] text-[#8E4723]'
                          : 'border-[#E3D6C8] text-[#5A4E46]'
                      }`}
                    >
                      UPI / QR
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-[#8E4723] bg-[#FAF5EF] text-[#8E4723]'
                          : 'border-[#E3D6C8] text-[#5A4E46]'
                      }`}
                    >
                      Card / NetBank
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD3] mt-6">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md shadow-sm transition-colors cursor-pointer"
                >
                  Place Direct Order (₹{grandTotal.toLocaleString()})
                </button>
              </div>
            </form>
          ) : (
            /* Itemized Cart View */
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {items.length === 0 ? (
                <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-12 h-12 text-[#C4B5A5] mb-3 stroke-[1.5]" />
                  <p className="text-sm font-bold text-[#2C211B] mb-1">Your cart is empty</p>
                  <p className="text-xs text-[#8A796E] max-w-xs mb-4">
                    Explore seasoned Sheesham chairs, haveli teak tables, or Channapatna crafts.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md transition-colors"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="flex-1 p-5 overflow-y-auto space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-3 pb-4 border-b border-[#F0E6D8] last:border-b-0"
                      >
                        <img
                          src={item.product.img}
                          alt={item.product.title}
                          className="w-18 h-18 rounded-lg object-cover bg-[#FAF5EF] border border-[#E8DFD3] shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#2C211B] truncate">
                            {item.product.title}
                          </h4>
                          <div className="text-[11px] text-[#8A796E] truncate">
                            {item.product.village} · By {item.product.artisan}
                          </div>
                          <div className="font-mono-num text-xs font-bold text-[#2C211B] mt-1 tabular-nums">
                            ₹{item.product.price.toLocaleString()}
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-[#E3D6C8] rounded">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, -1)}
                                className="p-1 text-[#6E5F55] hover:text-[#2C211B]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-mono-num font-semibold text-[#2C211B]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, 1)}
                                className="p-1 text-[#6E5F55] hover:text-[#2C211B]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-[11px] text-red-600 hover:text-red-700 flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Pincode & Freight Estimate */}
                    <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD3] space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-[#2C211B]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8E4723]" />
                          <span>Pincode Freight Serviceability</span>
                        </span>
                        <span className="text-[11px] text-[#1C5E28]">Porter Active</span>
                      </div>
                      <form onSubmit={handleVerifyPincode} className="flex gap-2">
                        <input
                          type="text"
                          value={pincode}
                          maxLength={6}
                          onChange={(e) => setPincode(e.target.value)}
                          placeholder="Enter PIN code"
                          className="flex-1 px-2.5 py-1 text-xs bg-white border border-[#E3D6C8] rounded focus:outline-none focus:border-[#8E4723] font-mono-num"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1 text-xs font-semibold bg-[#FAF5EF] border border-[#E3D6C8] rounded hover:bg-[#F2E8DC]"
                        >
                          {isCheckingPincode ? 'Checking...' : 'Check'}
                        </button>
                      </form>
                      {pincodeVerified && (
                        <div className="text-[11px] text-[#6E5F55]">
                          🚚 Shock-proof wooden crate dispatch to <strong>{pincode}</strong> in <strong>4-6 business days</strong>.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary & Checkout Button */}
                  <div className="p-5 border-t border-[#E8DFD3] bg-[#FAF7F2] space-y-3">
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#6E5F55]">
                        <span>Subtotal:</span>
                        <span className="font-mono-num font-semibold text-[#2C211B]">
                          ₹{subtotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#6E5F55]">
                        <span>Heavy Freight & Crate:</span>
                        <span className="font-mono-num text-[#1C5E28] font-semibold">
                          {freightFee === 0 ? 'FREE (Special Fair Subsidy)' : `₹${freightFee}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#1C5E28] text-[11px] font-semibold border-t border-[#E8DFD3] pt-1.5">
                        <span>Direct Artisan Hand Payout:</span>
                        <span className="font-mono-num">₹{directArtisanShare.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-[#2C211B] pt-1">
                        <span>Total Payable:</span>
                        <span className="font-mono-num text-lg">₹{grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full py-3 text-xs font-bold text-white bg-[#8E4723] hover:bg-[#743719] rounded-md shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Proceed to Direct Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
