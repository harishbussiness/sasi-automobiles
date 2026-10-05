import React from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { HERO_IMAGE } from '../data/bearingsData';
import { DISPLAY_PHONE, WHATSAPP_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const handleWhatsApp = () => {
    const url = createWhatsAppUrl('Hello Sasi Automobiles, I would like to inquire about PowerDrive Bearings pricing and stock.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white pt-10 pb-16 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-medium tracking-tight text-[#002244] uppercase">
          Sasi Automobiles presents
        </p>

        {/* Apple Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.06]">
          PowerDrive Bearings.
        </h1>

        {/* Apple Subheading */}
        <p className="text-xl sm:text-2xl text-[#86868b] font-normal tracking-tight max-w-2xl mx-auto">
          Built for heavy hauls, tractors, bikes, and daily appliances.
        </p>

        {/* Apple-style CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={handleWhatsApp}
            className="px-5 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-sm font-medium transition-all shadow-xs flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Order via WhatsApp ({DISPLAY_PHONE})</span>
          </button>

          <button
            onClick={onExplore}
            className="px-5 py-2.5 text-[#0071e3] hover:bg-[#0071e3]/5 rounded-full text-sm font-medium transition-all flex items-center gap-1 border border-[#0071e3]/30"
          >
            <span>Explore Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs text-[#86868b] pt-1">
          High-carbon GCr15 chrome alloy · Tamper-evident holographic guarantee
        </div>

        {/* Hero Visual Showcase */}
        <div className="pt-6">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#001026] relative border border-black/5">
            <img
              src={HERO_IMAGE}
              alt="PowerDrive Precision Bearings"
              width={1200}
              height={675}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full aspect-[16/9] object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient & Badge */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between text-left text-white gap-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                  Engineered for Longevity
                </span>
                <p className="text-lg sm:text-xl font-bold">100% Genuine Chrome Steel</p>
                <p className="text-xs text-white/70">From miniature 608-ZZ to heavy 32218 trailer bearings.</p>
              </div>
              <div className="text-right sm:text-right shrink-0">
                <span className="text-[11px] text-white/60">Stockist</span>
                <p className="text-sm font-bold text-white">Sasi Automobiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
