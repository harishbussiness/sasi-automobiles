import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ChevronRight } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE, SHOP_NAME, BRAND_NAME, createWhatsAppUrl } from '../utils/whatsapp';

export const ShopInfoSection: React.FC = () => {
  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(`Hello ${SHOP_NAME}, I want to check availability or order ${BRAND_NAME}.`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="store" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3 flex flex-col items-center">
          <img
            src="/web images/sasi logo.png"
            alt="Sasi Automobiles"
            width={160}
            height={55}
            className="h-9 sm:h-11 w-auto object-contain mx-auto"
            loading="lazy"
            decoding="async"
          />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#002244]">
            Authorized Destination
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
            {SHOP_NAME}.
          </h2>
          <p className="text-base text-[#86868b] max-w-lg mx-auto">
            Your trusted source for genuine {BRAND_NAME}. Immediate counter pickup & fast shipping across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1: Location */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 space-y-3 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0071e3] shadow-xs">
              <MapPin className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-bold text-base text-[#1d1d1f]">Store Location</h3>
            <p className="text-xs text-[#86868b] leading-relaxed">
              <strong className="text-[#1d1d1f] font-semibold block text-sm">Housing Board Colony</strong>
              Tanuku, West Godavari District<br />
              Andhra Pradesh &ndash; 534211<br />
              <span className="text-[11px] text-[#0071e3] font-medium mt-1 inline-block">Direct Counter Pickup & Daily Dispatch</span>
            </p>
          </div>

          {/* Card 2: Hotline & WhatsApp */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 space-y-3 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-xs">
              <Phone className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-bold text-base text-[#1d1d1f]">WhatsApp & Phone</h3>
            <p className="text-xs text-[#86868b] leading-relaxed">
              <a href={`tel:${WHATSAPP_PHONE}`} className="text-[#0071e3] font-semibold hover:underline block text-sm">
                {DISPLAY_PHONE}
              </a>
              Fast replies for size checks & quotes.
            </p>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 space-y-3 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d1d1f] shadow-xs">
              <Clock className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-bold text-base text-[#1d1d1f]">Store Hours</h3>
            <p className="text-xs text-[#86868b] leading-relaxed">
              Mon – Sat: 8:30 AM – 9:00 PM<br />
              Sunday: 9:00 AM – 2:00 PM
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handleWhatsApp}
            className="px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-xs font-medium transition-all shadow-xs inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Connect with Sasi Automobiles on WhatsApp</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
