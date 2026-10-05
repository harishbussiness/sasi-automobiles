import React, { useState } from 'react';
import { MessageSquare, Plus, Disc, Share2, Check } from 'lucide-react';
import { Bearing } from '../types/bearing';
import { createWhatsAppUrl, generateSingleProductWhatsAppMessage } from '../utils/whatsapp';

interface ProductCardProps {
  bearing: Bearing;
  priority?: boolean;
  onSelect: (bearing: Bearing) => void;
  onAddToCart: (bearing: Bearing) => void;
  onShare?: (bearing: Bearing) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  bearing,
  priority = false,
  onSelect,
  onAddToCart,
  onShare,
}) => {
  const [currentImageSrc, setCurrentImageSrc] = useState(bearing.image);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    setCurrentImageSrc(bearing.image);
    setHasError(false);
    // Instant check if image is already cached in browser memory
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [bearing.image]);

  const mrp = bearing.mrp ?? Math.round(bearing.price * 1.25);
  const hasDiscount = mrp > bearing.price;
  const discountPercent = hasDiscount ? Math.round(((mrp - bearing.price) / mrp) * 100) : 0;

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
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

    // Fallback: Copy direct URL to clipboard
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

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = createWhatsAppUrl(generateSingleProductWhatsAppMessage(bearing, 1));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(bearing);
  };

  return (
    <div
      onClick={() => onSelect(bearing)}
      className="group cursor-pointer flex flex-col justify-between transition-all duration-200 select-none pb-2 relative"
    >
      {/* 1. Large Edge-to-Edge Hero Image Showcase (Nike Style) */}
      <div className="w-full aspect-square bg-[#f6f6f6] rounded-2xl overflow-hidden flex items-center justify-center p-6 relative">
        {/* Top Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full transition-all duration-200 backdrop-blur-md active:scale-95 flex items-center justify-center cursor-pointer shadow-xs border ${
            isCopied
              ? 'bg-emerald-500 text-white border-emerald-600 scale-105'
              : 'bg-white/90 hover:bg-white text-slate-700 hover:text-black border-black/10 hover:shadow-md'
          }`}
          title={isCopied ? 'Link Copied to Clipboard!' : `Share ${bearing.partNumber} link`}
          aria-label={`Share ${bearing.partNumber} link`}
        >
          {isCopied ? (
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <Share2 className="w-3.5 h-3.5 stroke-[2.2]" />
          )}
        </button>

        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#f6f6f6] flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full border border-black/5 bg-white/70" />
          </div>
        )}

        {hasError ? (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1 text-center">
            <Disc className="w-10 h-10 text-slate-400" />
            <span className="text-xs font-semibold">{bearing.partNumber}</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={encodeURI(currentImageSrc)}
            alt={`PowerDrive ${bearing.partNumber}`}
            width={500}
            height={500}
            className={`w-full h-full object-contain object-center group-hover:scale-105 transition-all duration-150 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              const [cleanPath, query] = currentImageSrc.split('?');
              const qString = query ? `?${query}` : '';
              if (cleanPath.endsWith('.webp')) {
                const pngFallback = cleanPath.replace(/\.webp$/, '.png') + qString;
                const img = new Image();
                img.src = encodeURI(pngFallback);
                img.onload = () => {
                  setCurrentImageSrc(pngFallback);
                  setIsLoaded(true);
                };
                img.onerror = () => setHasError(true);
              } else {
                setHasError(true);
              }
            }}
          />
        )}
      </div>

      {/* 2. Nike-Style Clean Metadata Below Image */}
      <div className="pt-3 pb-2 space-y-1">
        <h3 className="font-semibold text-base sm:text-lg text-[#111111] group-hover:text-[#0071e3] transition-colors leading-tight">
          PowerDrive {bearing.partNumber}
        </h3>
        <p className="text-sm text-[#707072] font-normal line-clamp-1">
          {bearing.bearingType} · {bearing.sealType}
        </p>

        {/* Price Row: If priceOnEnquiry, show badge; otherwise show price / MRP */}
        {bearing.priceOnEnquiry || bearing.price <= 0 ? (
          <div className="flex items-center gap-2 pt-0.5">
            <span className="inline-flex items-center text-xs font-semibold text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-full">
              Price on Enquiry
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2 pt-0.5 flex-wrap">
            <span className="font-bold text-lg text-[#111111]">
              ₹{bearing.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
              MRP: ₹{(bearing.mrp || bearing.price).toLocaleString('en-IN')}
            </span>
          </div>
        )}
      </div>

      {/* 3. Action Buttons */}
      {bearing.priceOnEnquiry || bearing.price <= 0 ? (
        <div className="pt-1">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full py-2.5 px-3 bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};
