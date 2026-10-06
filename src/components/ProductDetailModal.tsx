import React, { useState } from 'react';
import { ArrowLeft, X, MessageSquare, Share2, Check } from 'lucide-react';
import { Bearing } from '../types/bearing';
import { createWhatsAppUrl, generateSingleProductWhatsAppMessage } from '../utils/whatsapp';

interface ProductDetailModalProps {
  bearing: Bearing | null;
  onClose: () => void;
  onAddToCart: (bearing: Bearing, quantity: number) => void;
  onShare?: (bearing: Bearing) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  bearing,
  onClose,
  onAddToCart,
  onShare,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isCopied, setIsCopied] = useState(false);

  if (!bearing) return null;

  const handleShare = async () => {
    const productUrl = `${window.location.origin}${window.location.pathname}?product=${encodeURIComponent(bearing.id)}`;
    const shareData = {
      title: `PowerDrive ${bearing.partNumber} Bearing`,
      text: `PowerDrive ${bearing.partNumber} (${bearing.bearingType}) - Sasi Automobiles`,
      url: productUrl,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        onShare?.(bearing);
        return;
      }
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(productUrl);
      setIsCopied(true);
      onShare?.(bearing);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = productUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      onShare?.(bearing);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const isWholesale = quantity >= bearing.minWholesaleQty;
  const unitPrice = isWholesale ? bearing.wholesalePrice : bearing.price;
  const totalPrice = unitPrice * quantity;
  const mrpPrice = bearing.mrp ?? Math.round(bearing.price * 1.25);
  const hasDiscount = mrpPrice > unitPrice;
  const discountPercent = hasDiscount ? Math.round(((mrpPrice - unitPrice) / mrpPrice) * 100) : 0;

  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(generateSingleProductWhatsAppMessage(bearing, quantity));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddAndClose = () => {
    onAddToCart(bearing, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col w-full h-screen h-[100dvh] overflow-hidden select-none animate-in fade-in duration-150">
      {/* 1. Full Page Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-black/5 px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between shrink-0">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#0071e3] transition-colors py-1.5 px-2 rounded-full hover:bg-black/5 active:scale-95 cursor-pointer"
          aria-label="Back to catalog"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/web images/sasi logo emblem.webp"
            alt="Sasi Automobiles Emblem"
            className="h-5 sm:h-6 w-5 sm:w-6 object-contain"
          />
          <span className="text-xs font-bold tracking-tight text-[#111111] uppercase hidden sm:inline">
            Sasi Automobiles
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isCopied
                ? 'bg-emerald-500 text-white'
                : 'bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#111111]'
            }`}
            title={isCopied ? 'Link Copied!' : `Share ${bearing.partNumber}`}
            aria-label={`Share ${bearing.partNumber} link`}
          >
            {isCopied ? (
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
            aria-label="Close page"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* 2. Zero-Scroll Viewport Body (Flex column fitting 100% of remaining height) */}
      <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col justify-between px-4 sm:px-6 max-w-xl mx-auto pt-2 pb-1">
        {/* Product Header & Pricing Summary */}
        <div className="shrink-0 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-tight">
              PowerDrive {bearing.partNumber}
            </h1>
            <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
              Genuine PowerDrive
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#707072] font-normal truncate">
            {bearing.bearingType} · {bearing.sealType}
          </p>

          {/* Pricing Row: Price on Enquiry OR Active Price + MRP */}
          {bearing.priceOnEnquiry || bearing.price <= 0 ? (
            <div className="pt-0.5 flex items-center gap-2 flex-wrap">
              <span className="text-lg sm:text-xl font-bold text-[#0071e3] tracking-tight">
                Price on Enquiry
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                Direct WhatsApp Quotation
              </span>
            </div>
          ) : (
            <div className="pt-0.5 flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                ₹{unitPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                MRP: ₹{(bearing.mrp || bearing.price).toLocaleString('en-IN')}
              </span>
              {isWholesale && (
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                  Wholesale Rate Applied
                </span>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Image Canvas: Flex-1 Min-H-0 so it automatically scales to available height */}
        <div className="flex-1 min-h-0 w-full my-2 bg-[#f6f6f6] rounded-2xl p-3 sm:p-4 flex items-center justify-center relative overflow-hidden">
          <img
            src={encodeURI(bearing.image)}
            alt={`PowerDrive ${bearing.partNumber}`}
            width={500}
            height={500}
            decoding="async"
            fetchPriority="high"
            loading="eager"
            className="max-h-full max-w-full w-auto h-auto object-contain select-none transition-transform duration-200 hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              const [clean, query] = target.src.split('?');
              const qString = query ? `?${query}` : '';
              if (clean.endsWith('.webp')) {
                target.src = clean.replace(/\.webp$/, '.png') + qString;
              }
            }}
          />
        </div>
      </div>

      {/* 3. Bottom Action Bar - Compact & Single-Row Buttons for Zero Scroll */}
      <div className="bg-white border-t border-black/5 px-4 py-2.5 sm:px-6 sm:py-3 shrink-0">
        <div className="max-w-xl mx-auto space-y-2">
          {/* Quantity Stepper & Subtotal Row */}
          <div className="flex items-center justify-between text-xs">
            <div className="text-[#707072]">
              <span>Qty: </span>
              <strong className="text-xs sm:text-sm text-[#111111]">{quantity} pc{quantity > 1 ? 's' : ''}</strong>
              {!bearing.priceOnEnquiry && bearing.price > 0 && (
                <span className="ml-1 sm:ml-2 font-medium text-[#111111]">
                  (Total: <strong className="text-xs sm:text-sm font-bold text-[#111111]">₹{totalPrice.toLocaleString('en-IN')}</strong>)
                </span>
              )}
            </div>

            {/* Stepper Pill */}
            <div className="flex items-center bg-[#f6f6f6] rounded-full p-0.5 border border-black/5">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#111111] font-bold text-xs sm:text-sm flex items-center justify-center hover:bg-slate-100 shadow-xs active:scale-90 transition-all cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-2 sm:px-2.5 text-xs font-semibold text-[#111111] min-w-[1.5rem] text-center font-mono">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#111111] font-bold text-xs sm:text-sm flex items-center justify-center hover:bg-slate-100 shadow-xs active:scale-90 transition-all cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons: 2 Equal Columns on ALL screens for zero-scroll */}
          {bearing.priceOnEnquiry || bearing.price <= 0 ? (
            <div>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full h-11 px-4 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Enquire Price on WhatsApp ({quantity} pc{quantity > 1 ? 's' : ''})</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleAddAndClose}
                className="w-full h-11 px-3 sm:px-4 bg-[#111111] hover:bg-[#222222] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Add to Bag</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full h-11 px-3 sm:px-4 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer truncate"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span className="truncate">Order on WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
