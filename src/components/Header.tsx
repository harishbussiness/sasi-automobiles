import React, { useState } from 'react';
import { ShoppingBag, Search, X, MessageSquare, ChevronRight } from 'lucide-react';
import { WHATSAPP_PHONE, DISPLAY_PHONE, createWhatsAppUrl, generateGeneralInquiryMessage, SHOP_NAME, BRAND_NAME } from '../utils/whatsapp';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearchClick: () => void;
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onSearchClick,
  onOpenAbout,
}) => {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(generateGeneralInquiryMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Products', id: 'catalog' },
    { label: 'About PowerDrive', action: 'about' },
    { label: 'Sasi Automobiles', id: 'store' },
  ];

  const handleNavClick = (item: { label: string; id?: string; action?: string }) => {
    if (item.action === 'about' && onOpenAbout) {
      onOpenAbout();
    } else if (item.id) {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      {/* Apple-style Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs font-normal">
          {/* Brand Mark (Zone 1) - Apple Style Standalone Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group text-left cursor-pointer transition-opacity hover:opacity-80 focus:outline-none"
            aria-label="Sasi Automobiles - Home"
          >
            <img
              src="/web images/sasi logo.png"
              alt="Sasi Automobiles"
              width={105}
              height={36}
              className="h-6 sm:h-7 w-auto object-contain select-none"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('sasi-logo.webp')) {
                  target.src = '/web images/sasi-logo.webp';
                }
              }}
            />
          </button>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-8 text-[#1d1d1f]/80">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="transition-colors hover:text-[#0071e3] text-xs font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons (Zone 3) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <PWAInstallButton />

            <button
              onClick={onSearchClick}
              className="p-1.5 text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors cursor-pointer"
              aria-label="Search bearings"
              title="Search catalog"
            >
              <Search className="w-4 h-4 stroke-[1.75]" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors cursor-pointer"
              aria-label="Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 w-3.5 h-3.5 bg-[#0071e3] text-white text-[9px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={handleWhatsApp}
              className="p-1.5 text-[#1d1d1f]/70 hover:text-emerald-600 transition-colors cursor-pointer"
              title={`WhatsApp: ${DISPLAY_PHONE}`}
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Apple-style Thin Notification Ribbon with Dismiss 'x' */}
      {!bannerDismissed && (
        <aside aria-label="Store announcement" className="relative bg-[#f5f5f7] border-b border-black/5 text-[11px] text-[#1d1d1f]/80 py-2 px-8 sm:px-12 text-center transition-all">
          <span>Sasi Automobiles is the authorized stockist for PowerDrive Bearings. Fast dispatch & wholesale pricing. </span>
          <button
            onClick={handleWhatsApp}
            className="text-[#0071e3] hover:underline font-medium inline-flex items-center gap-0.5 ml-1"
          >
            <span>Chat on WhatsApp ({DISPLAY_PHONE})</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Close 'x' button */}
          <button
            onClick={() => setBannerDismissed(true)}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-1 text-[#1d1d1f]/50 hover:text-[#1d1d1f] rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close announcement"
            title="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </>
  );
};
