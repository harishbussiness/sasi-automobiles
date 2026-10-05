import React from 'react';
import { DISPLAY_PHONE, SHOP_NAME, BRAND_NAME } from '../utils/whatsapp';

interface FooterProps {
  onExploreCatalog?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868b] text-[11px] py-12 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Footnotes / Disclaimers (Apple style) */}
        <div className="space-y-1.5 pb-4 border-b border-black/5 text-[#86868b] leading-relaxed">
          <p>
            1. {BRAND_NAME} are precision manufactured with high-carbon vacuum-degassed GCr15 chrome alloy steel conforming to international ISO/DIN tolerance standards.
          </p>
          <p>
            2. Wholesale box discount rates apply to purchases meeting the minimum package quantities or verified commercial garage accounts through {SHOP_NAME}.
          </p>
          <p>
            3. WhatsApp ordering is powered directly through our official customer hotline at {DISPLAY_PHONE}.
          </p>
          <p className="text-[10px] text-[#86868b]/80 pt-1">
            Sasi Automobiles is an authorized bearing store and stockist of genuine PowerDrive bearings, automotive ball bearings, taper roller bearings, and heavy vehicle components with pan-India delivery.
          </p>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868b]">
          <div className="flex items-center gap-3">
            <img
              src="/web images/sasi logo.png"
              alt="Sasi Automobiles"
              width={90}
              height={30}
              className="h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('sasi-logo.webp')) {
                  target.src = '/web images/sasi-logo.webp';
                }
              }}
            />
            <span>
              Copyright &copy; {new Date().getFullYear()} {SHOP_NAME}. Authorized Distributor of {BRAND_NAME}.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Genuine GCr15 Chrome Alloy</span>
            <span>·</span>
            <span>All India Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
