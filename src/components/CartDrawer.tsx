import React, { useState, useRef } from 'react';
import { X, Trash2, MessageSquare, ShoppingBag, CheckCircle2, AlertCircle } from 'lucide-react';
import { CartItem } from '../types/bearing';
import { createWhatsAppUrl, generateCartWhatsAppMessage, DISPLAY_PHONE } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (bearingId: string, quantity: number) => void;
  onRemoveItem: (bearingId: string) => void;
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
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem('sasi_customer_name') || '';
    } catch {
      return '';
    }
  });

  const [mobile, setMobile] = useState(() => {
    try {
      return localStorage.getItem('sasi_customer_mobile') || '';
    } catch {
      return '';
    }
  });

  const [town, setTown] = useState(() => {
    try {
      return localStorage.getItem('sasi_customer_town') || '';
    } catch {
      return '';
    }
  });

  const [pincode, setPincode] = useState(() => {
    try {
      return localStorage.getItem('sasi_customer_pincode') || '';
    } catch {
      return '';
    }
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const townInputRef = useRef<HTMLInputElement>(null);
  const pincodeInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => {
    const isWholesale = item.quantity >= item.bearing.minWholesaleQty;
    const price = isWholesale ? item.bearing.wholesalePrice : item.bearing.price;
    return sum + (price * item.quantity);
  }, 0);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!name.trim()) {
      errs.name = 'Please enter your name or workshop';
    }

    const cleanMobile = mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      errs.mobile = 'Mobile number is required';
    } else if (cleanMobile.length !== 10) {
      errs.mobile = 'Enter valid 10-digit mobile number';
    }

    if (!town.trim()) {
      errs.town = 'Please enter your town or city';
    }

    const cleanPincode = pincode.replace(/\D/g, '');
    if (!cleanPincode) {
      errs.pincode = 'PIN code is required';
    } else if (cleanPincode.length !== 6) {
      errs.pincode = 'Enter 6-digit PIN';
    }

    setErrors(errs);
    return errs;
  };

  const handleCheckout = () => {
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setShowAlert(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      // Autofocus first invalid field like Apple
      if (errs.name) nameInputRef.current?.focus();
      else if (errs.mobile) mobileInputRef.current?.focus();
      else if (errs.town) townInputRef.current?.focus();
      else if (errs.pincode) pincodeInputRef.current?.focus();
      return;
    }

    setShowAlert(false);

    // Save for convenience
    try {
      localStorage.setItem('sasi_customer_name', name.trim());
      localStorage.setItem('sasi_customer_mobile', mobile.trim());
      localStorage.setItem('sasi_customer_town', town.trim());
      localStorage.setItem('sasi_customer_pincode', pincode.trim());
    } catch {
      // ignore
    }

    // Launch WhatsApp directly with prefilled order
    const message = generateCartWhatsAppMessage(items, {
      name: name.trim(),
      phone: mobile.trim(),
      city: town.trim(),
      pincode: pincode.trim(),
    });
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out drawer with zero clipping */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between bg-white shrink-0">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
              Review your Bag.
            </h2>
            <p className="text-xs text-[#86868b]">
              {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} ready for dispatch
            </p>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-md cursor-pointer"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#86868b]/40 stroke-[1.25]" />
              <p className="text-base font-semibold text-[#1d1d1f]">Your Bag is empty.</p>
              <p className="text-xs text-[#86868b] max-w-xs mx-auto">
                Browse lorry, tractor, bike, or appliance bearings to add to your order.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#0071e3] text-white rounded-full text-xs font-medium cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => {
                  const isWholesale = item.quantity >= item.bearing.minWholesaleQty;
                  const price = isWholesale ? item.bearing.wholesalePrice : item.bearing.price;
                  const lineTotal = price * item.quantity;

                  return (
                    <div
                      key={item.bearing.id}
                      className="p-3.5 bg-[#f5f5f7] rounded-2xl flex items-center gap-3 border border-black/5"
                    >
                      <img
                        src={encodeURI(item.bearing.image)}
                        alt={item.bearing.partNumber}
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 rounded-xl object-contain bg-white shrink-0 border border-black/5 p-1"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const [clean, query] = target.src.split('?');
                          const qString = query ? `?${query}` : '';
                          if (clean.endsWith('.webp')) {
                            target.src = clean.replace(/\.webp$/, '.png') + qString;
                          }
                        }}
                      />

                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-[#1d1d1f] tracking-tight">
                              {item.bearing.partNumber}
                            </h4>
                            <p className="text-xs text-[#86868b] truncate max-w-[170px]">{item.bearing.name}</p>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.bearing.id)}
                            className="text-[#86868b] hover:text-red-500 p-1 shrink-0 cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/5">
                          {/* Stepper */}
                          <div className="flex items-center gap-2 bg-white rounded-full px-2 py-0.5 border border-black/5 text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.bearing.id, item.quantity - 1)}
                              className="font-bold text-[#86868b] hover:text-[#1d1d1f] px-1 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="font-semibold text-[#1d1d1f] px-1">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.bearing.id, item.quantity + 1)}
                              className="font-bold text-[#86868b] hover:text-[#1d1d1f] px-1 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-bold text-sm text-[#1d1d1f] font-mono tabular-nums">
                              ₹{lineTotal.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-[#86868b] block">
                              ₹{price}/pc {isWholesale && <span className="text-emerald-600 font-semibold">(Tier)</span>}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Apple-Style Warning Alert Banner */}
              {showAlert && (
                <div
                  className={`p-3.5 rounded-2xl bg-[#ff3b30]/10 border border-[#ff3b30]/25 text-[#1d1d1f] shadow-xs flex items-start gap-3 transition-all ${
                    isShaking ? 'animate-apple-shake' : 'animate-in fade-in duration-200'
                  }`}
                  role="alert"
                >
                  <div className="w-6 h-6 rounded-full bg-[#ff3b30] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-semibold text-[#d70015]">Delivery Details Incomplete</div>
                    <p className="text-[11px] text-[#515154] mt-0.5 leading-snug">
                      Please enter your Name, 10-digit Mobile number, Town, and 6-digit PIN code to proceed with WhatsApp checkout.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAlert(false)}
                    className="text-[#86868b] hover:text-[#1d1d1f] p-1 rounded-full cursor-pointer"
                    aria-label="Dismiss alert"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Apple-style Delivery Details Form */}
              <div
                className={`pt-3 border-t border-black/5 space-y-3 transition-all ${
                  isShaking ? 'animate-apple-shake' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold tracking-tight text-[#1d1d1f] uppercase flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0071e3]"></span>
                      Delivery Details
                    </span>
                    <p className="text-[10px] text-[#86868b]">Required for order confirmation &amp; dispatch</p>
                  </div>
                  <span className="text-[10px] text-[#0071e3] font-medium bg-blue-50 border border-blue-200/50 px-2 py-0.5 rounded-full">
                    All 4 required
                  </span>
                </div>

                {/* 1. Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#1d1d1f] mb-1">
                    Name <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    placeholder="Your Name or Workshop Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                      if (showAlert && e.target.value.trim()) setShowAlert(false);
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#f5f5f7] border rounded-xl focus:outline-none focus:bg-white transition-all ${
                      errors.name
                        ? 'border-[#ff3b30] bg-red-50/40 focus:ring-2 focus:ring-[#ff3b30]/20'
                        : 'border-black/5 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[#d70015] font-medium mt-1 flex items-center gap-1">
                      <span>•</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Mobile */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#1d1d1f] mb-1">
                    Mobile Number <span className="text-[#ff3b30]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-semibold text-[#86868b] select-none">
                      +91
                    </span>
                    <input
                      ref={mobileInputRef}
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={mobile}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setMobile(val);
                        if (errors.mobile) setErrors({ ...errors, mobile: '' });
                        if (showAlert && val.length === 10) setShowAlert(false);
                      }}
                      className={`w-full pl-12 pr-3.5 py-2.5 text-xs bg-[#f5f5f7] border rounded-xl focus:outline-none focus:bg-white font-mono tracking-wider transition-all ${
                        errors.mobile
                          ? 'border-[#ff3b30] bg-red-50/40 focus:ring-2 focus:ring-[#ff3b30]/20'
                          : 'border-black/5 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15'
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-[11px] text-[#d70015] font-medium mt-1 flex items-center gap-1">
                      <span>•</span> {errors.mobile}
                    </p>
                  )}
                </div>

                {/* 3. Town & 4. Pincode */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#1d1d1f] mb-1">
                      Town / City <span className="text-[#ff3b30]">*</span>
                    </label>
                    <input
                      ref={townInputRef}
                      type="text"
                      placeholder="e.g. Tanuku"
                      value={town}
                      onChange={(e) => {
                        setTown(e.target.value);
                        if (errors.town) setErrors({ ...errors, town: '' });
                        if (showAlert && e.target.value.trim()) setShowAlert(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#f5f5f7] border rounded-xl focus:outline-none focus:bg-white transition-all ${
                        errors.town
                          ? 'border-[#ff3b30] bg-red-50/40 focus:ring-2 focus:ring-[#ff3b30]/20'
                          : 'border-black/5 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15'
                      }`}
                    />
                    {errors.town && (
                      <p className="text-[11px] text-[#d70015] font-medium mt-1 flex items-center gap-1">
                        <span>•</span> {errors.town}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1d1d1f] mb-1">
                      PIN Code <span className="text-[#ff3b30]">*</span>
                    </label>
                    <input
                      ref={pincodeInputRef}
                      type="tel"
                      maxLength={6}
                      placeholder="e.g. 534211"
                      value={pincode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                        setPincode(val);
                        if (errors.pincode) setErrors({ ...errors, pincode: '' });
                        if (showAlert && val.length === 6) setShowAlert(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#f5f5f7] border rounded-xl focus:outline-none focus:bg-white font-mono tracking-wider transition-all ${
                        errors.pincode
                          ? 'border-[#ff3b30] bg-red-50/40 focus:ring-2 focus:ring-[#ff3b30]/20'
                          : 'border-black/5 focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15'
                      }`}
                    />
                    {errors.pincode && (
                      <p className="text-[11px] text-[#d70015] font-medium mt-1 flex items-center gap-1">
                        <span>•</span> {errors.pincode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Bar with zero clipping */}
        {items.length > 0 && (
          <div className="p-5 border-t border-black/5 space-y-3 bg-white shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#86868b] font-medium">Estimated Total ({totalQuantity} pcs)</span>
              <span className="text-2xl font-bold text-[#1d1d1f] font-mono tabular-nums">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 px-4 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-xs sm:text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span className="truncate">
                Check out via WhatsApp ({DISPLAY_PHONE})
              </span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#86868b]">
              <span>Direct WhatsApp dispatch to Sasi Automobiles</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
