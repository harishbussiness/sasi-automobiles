import React from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

export const PC_SHOWCASE_IMAGE = '/web images/PowerDrive Bearing Showcase (1).webp';
export const MOBILE_SHOWCASE_IMAGE = '/web images/Powerdrive Bearings in Cinematic Metal (1).webp';
export const DUO_SHOWCASE_IMAGE = '/web images/Exploded Metallic Bearing Assembly (1) (1).webp';

export const LOCAL_SHOWCASE_IMAGE = '/src/assets/images/powerdrive_bearing_showcase.webp';
export const LOCAL_MOBILE_IMAGE = '/src/assets/images/powerdrive_cinematic_metal_mobile.webp';
export const LOCAL_DUO_IMAGE = '/src/assets/images/exploded_metallic_bearing_assembly.webp';

interface ApplePostersProps {
  onExploreCatalog: (cat?: string) => void;
  onOpenCart: () => void;
  onOpenAbout?: () => void;
}

export const ApplePosters: React.FC<ApplePostersProps> = ({
  onExploreCatalog,
  onOpenAbout,
}) => {
  const handleHeavyWhatsApp = () => {
    const url = createWhatsAppUrl(
      'Hello Sasi Automobiles, I want to order PowerDrive Bearings for Lorries / HCV.'
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLightWhatsApp = () => {
    const url = createWhatsAppUrl(
      'Hello Sasi Automobiles, I want to inquire about PowerDrive Duo Precision Bearings for Bikes & Appliances.'
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-3">
      {/* ================= POSTER 1: DARK PRO BILLBOARD WITH EXACT POSITIONING ================= */}
      <section className="relative bg-[#000000] text-white pt-14 sm:pt-20 pb-4 sm:pb-8 px-4 text-center overflow-hidden">
        {/* Content Container (Headline, Subhead, CTA Buttons) */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow for Brand Authority */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#2997ff] uppercase mb-1">
            Sasi Automobiles · Authorized Bearing Stockist
          </p>

          {/* Main Keyword-Rich H1 Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            PowerDrive Bearings
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[#f5f5f7] font-normal tracking-tight mt-2 mb-5 drop-shadow-sm">
            Engineered further.
          </p>

          {/* Apple Signature Pill Action Buttons */}
          <div className="flex items-center justify-center gap-3.5 mb-2 sm:mb-4">
            <button
              onClick={() => (onOpenAbout ? onOpenAbout() : onExploreCatalog())}
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-lg cursor-pointer"
            >
              Learn more
            </button>

            <button
              onClick={handleHeavyWhatsApp}
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-black/40 backdrop-blur-md hover:bg-white/10 text-[#2997ff] border border-[#2997ff] rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 flex items-center gap-1.5 shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Showcase Image with Exact Responsive Positioning */}
        <div className="w-full max-w-7xl mx-auto flex justify-center -mt-8 sm:-mt-14 md:-mt-20 lg:-mt-24">
          {/* PC Desktop Widescreen Showcase */}
          <img
            src={PC_SHOWCASE_IMAGE}
            onError={(e) => {
              e.currentTarget.src = LOCAL_SHOWCASE_IMAGE;
            }}
            alt="PowerDrive Bearings PC Showcase"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="hidden sm:block w-full h-auto max-h-[85vh] object-contain select-none"
          />

          {/* Mobile Portrait Cinematic Showcase */}
          <img
            src={MOBILE_SHOWCASE_IMAGE}
            onError={(e) => {
              e.currentTarget.src = LOCAL_MOBILE_IMAGE;
            }}
            alt="PowerDrive Bearings Mobile Showcase"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="block sm:hidden w-full max-w-md h-auto max-h-[80vh] object-contain select-none -mt-14"
          />
        </div>
      </section>

      {/* ================= POSTER 2: POWERDRIVE DUO WITH CRYSTAL CLEAR SHOWCASE ================= */}
      <section className="relative bg-[#ffffff] text-[#1d1d1f] pt-16 sm:pt-16 pb-8 sm:pb-10 px-4 text-center overflow-hidden border-t border-black/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-tight">
            PowerDrive Duo
          </h2>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[#86868b] font-normal tracking-tight mt-2 mb-5 sm:mb-4">
            Hello, rotation.
          </p>

          {/* Apple Signature Pill Action Buttons */}
          <div className="flex items-center justify-center gap-3.5 mb-5 sm:mb-2">
            <button
              onClick={() => (onOpenAbout ? onOpenAbout() : onExploreCatalog())}
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-md cursor-pointer"
            >
              Learn more
            </button>

            <button
              onClick={handleLightWhatsApp}
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-transparent hover:bg-slate-100 text-[#0071e3] border border-[#0071e3] rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 flex items-center gap-1 shadow-xs"
            >
              <span>View pricing</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 100% Seamless Crystal-Clear Metallic Showcase (Generous mobile space, tight PC view) */}
          <div className="w-full max-w-4xl lg:max-w-5xl flex justify-center mt-3 sm:-mt-4">
            <img
              src={DUO_SHOWCASE_IMAGE}
              onError={(e) => {
                e.currentTarget.src = LOCAL_DUO_IMAGE;
              }}
              alt="PowerDrive Duo Exploded Metallic Bearing Assembly"
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[70vh] object-contain object-top select-none block mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
