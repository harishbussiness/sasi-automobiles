import React, { useEffect } from 'react';
import { ArrowLeft, X, CheckCircle2, ShieldCheck, Factory, Globe2, Award, Wrench, MessageSquare, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface AboutPowerDrivePageProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCatalog: () => void;
}

export const AboutPowerDrivePage: React.FC<AboutPowerDrivePageProps> = ({
  isOpen,
  onClose,
  onExploreCatalog,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppQuote = () => {
    const url = createWhatsAppUrl(
      'Hello Sasi Automobiles team, I am interested in PowerDrive industrial and automotive bearings. Please share quotation and product specifications.'
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleExplore = () => {
    onClose();
    setTimeout(() => {
      onExploreCatalog();
    }, 100);
  };

  const capabilities = [
    { title: 'Ball Bearings', desc: 'Deep groove, angular contact & miniature series' },
    { title: 'Taper Roller Bearings', desc: 'Heavy radial & thrust loads for axles & hubs' },
    { title: 'Spherical Roller Bearings', desc: 'Self-aligning heavy-duty industrial series' },
    { title: 'Cylindrical Roller Bearings', desc: 'High-speed radial capacities for gearboxes' },
    { title: 'Mounted & Flange Bearings', desc: 'Pillow blocks, 2-bolt & 4-bolt flange units' },
    { title: 'V-Belt & Timing Drives', desc: 'Synchronous precision power-transmission belts' },
    { title: 'Sprockets & Couplings', desc: 'Industrial roller chain drives & flexible couplings' },
    { title: 'Bushings & Sheaves', desc: 'Taper-lock bushings, sheaves & related components' },
  ];

  const industries = [
    'Automotive',
    'Industrial Machinery',
    'Power Generation',
    'Agriculture',
    'Mining',
    'Material Handling',
    'Submersible Pumps',
    'Electric Motors',
    'Earthmoving Equipment',
  ];

  const pillars = [
    {
      title: 'Engineering Expertise',
      desc: 'Decades of experience in precision bearing design, tribology, metallography, and power-transmission engineering.',
      icon: Wrench,
    },
    {
      title: 'Extensive Product Range',
      desc: 'A comprehensive catalog covering deep groove ball bearings, taper rollers, mounted units, and power-transmission components.',
      icon: Layers,
    },
    {
      title: 'Manufacturing Capability',
      desc: 'Substantial production footprint in Sanand, Gujarat with CNC grinding, in-house CAD/CAM tooling, and automated assembly.',
      icon: Factory,
    },
    {
      title: 'Global Availability',
      desc: 'International distribution network with 1,700+ stocked sizes, exports to 36 countries, and warehousing hubs across India and USA.',
      icon: Globe2,
    },
    {
      title: 'Competitive Value',
      desc: 'A dedicated focus on delivering ISO-compliant, long-life products with transparent pricing, box wholesale tiers, and dependable service.',
      icon: Award,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto selection:bg-[#0071e3] selection:text-white animate-in fade-in duration-200">
      {/* 1. Sticky Navigation Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5 px-4 sm:px-8 h-14 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-1.5 px-3 rounded-full hover:bg-black/5 active:scale-95 cursor-pointer"
          aria-label="Back to storefront"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/web images/sasi logo.png"
            alt="Sasi Automobiles"
            className="h-6 w-auto object-contain"
          />
          <span className="text-black/30 font-light">|</span>
          <span className="text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase">
            PowerDrive Official
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#111111] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Hero Section: Cinematic Industrial Identity */}
      <section className="relative bg-[#000000] text-white pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Subtle engineering grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#2997ff] font-medium tracking-wide">
            <span>GLOBAL POWER TRANSMISSION &amp; PRECISION BEARINGS</span>
            <span className="w-1 h-1 rounded-full bg-[#2997ff]" />
            <span>EST. 1981</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            POWERDRIVE
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-[#86868b] font-normal tracking-tight">
            Engineering Motion. Powering Industry.
          </p>

          <p className="text-sm sm:text-base text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed font-normal">
            PowerDrive is a global manufacturer and supplier of bearings and mechanical power-transmission components, serving automotive and industrial applications since 1981.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleExplore}
              className="px-6 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-95 shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Bearings Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppQuote}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-[#2997ff] border border-[#2997ff]/40 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Key Global Numbers Banner */}
      <section className="bg-[#111111] border-y border-white/10 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight">1,700+</div>
            <div className="text-xs text-[#86868b] font-medium uppercase tracking-wider">Bearing sizes in stock</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-bold text-[#2997ff] tracking-tight">36</div>
            <div className="text-xs text-[#86868b] font-medium uppercase tracking-wider">Countries reached</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight">250+</div>
            <div className="text-xs text-[#86868b] font-medium uppercase tracking-wider">Team members</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-bold text-emerald-400 tracking-tight">1981</div>
            <div className="text-xs text-[#86868b] font-medium uppercase tracking-wider">Since Michigan City, USA</div>
          </div>
        </div>
      </section>

      {/* 4. Built on Engineering. Driven by Quality. */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-6 text-left">
          <div className="inline-block text-xs font-bold text-[#0071e3] uppercase tracking-wider">
            Industrial Heritage &amp; Infrastructure
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
            Built on Engineering. Driven by Quality.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#515154] leading-relaxed">
            <p>
              PowerDrive began its journey in <strong>1981 in Michigan City, USA</strong>, and has developed into an international power-transmission business with manufacturing operations in India and sales and warehousing capabilities in the USA and India.
            </p>
            <p>
              Our manufacturing facility in <strong>Sanand, Ahmedabad, Gujarat</strong>, supports the production of bearings and power-transmission components for automotive and industrial applications. The company states that its Indian operations cover a substantial manufacturing footprint and employ more than <strong>250 skilled engineers and technicians</strong>.
            </p>
            <p>
              With manufacturing capabilities in India and a global presence, PowerDrive combines engineering expertise, manufacturing capability, product availability, and customer-focused service to deliver dependable power-transmission solutions across diverse industries.
            </p>
          </div>
        </div>

        {/* 5. Our Capabilities Grid */}
        <div className="mt-14 space-y-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
              Our Capabilities &amp; Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-1">
              Precision bearings and comprehensive power-transmission drive systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-[#f5f5f7] rounded-2xl p-5 text-left border border-black/5 hover:border-[#0071e3]/30 transition-all hover:shadow-xs group"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0071e3] shadow-xs mb-3 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#1d1d1f]">{cap.title}</h4>
                <p className="text-xs text-[#86868b] mt-1 leading-normal">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quality That Moves Industry */}
      <section className="bg-[#f5f5f7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-black/5">
        <div className="max-w-5xl mx-auto space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#0071e3] uppercase tracking-wider">
              Zero-Defect Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              Quality That Moves Industry
            </h2>
            <p className="text-sm sm:text-base text-[#515154] leading-relaxed max-w-3xl">
              At PowerDrive, quality is built directly into the manufacturing process. The company maintains an established quality-management system and operates advanced testing, measurement, and engineering capabilities to support consistent, repeatable product performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs border border-black/5">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0071e3] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1d1d1f]">Zero-Defect Supply Chain</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                Its stated approach includes rigorous quality control across every phase of manufacturing, metallurgical batch inspection, and a zero-defect-oriented supply chain guaranteeing precision dimensional tolerances.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs border border-black/5">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0071e3] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1d1d1f]">In-House R&amp;D and Tooling</h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                PowerDrive maintains comprehensive in-house research, development, engineering, and tooling capabilities—including advanced 3D CAD/CAM modeling, finite-element simulations, life-cycle dynamic load testers, and specialized metallurgical equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Designed for Demanding Applications (Sectors Served) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0071e3] uppercase tracking-wider">
              Versatile Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              Designed for Demanding Applications
            </h2>
            <p className="text-sm sm:text-base text-[#515154] leading-relaxed max-w-3xl">
              PowerDrive bearings are deployed across mission-critical environments where reliable mechanical motion, thermal stability, and extreme shock load handling are essential.
            </p>
          </div>

          {/* Industry Tags */}
          <div className="pt-2">
            <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-3">
              Key Sectors Served:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/5 text-xs sm:text-sm font-medium text-[#1d1d1f]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#fbfbfd] border border-black/5 rounded-2xl p-6 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
            Different bearing families are engineered for distinct operating duty cycles. For example, <strong>spherical roller bearings</strong> are built for high radial load capacity and self-aligning capability under shaft deflection, while <strong>taper roller bearings</strong> provide maximum combined radial and thrust load resistance across heavy automotive axles, tractor gearboxes, and industrial drives.
          </div>
        </div>
      </section>

      {/* 8. Global Reach & Why PowerDrive */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-black/5 text-left">
        <div className="space-y-12">
          {/* Global Reach */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#0071e3] uppercase tracking-wider">
              International Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              Global Reach
            </h2>
            <p className="text-sm sm:text-base text-[#515154] leading-relaxed">
              PowerDrive operates with an international outlook, supplying products to customers across multiple continents. The company&apos;s published information states that it maintains <strong>more than 1,700 bearing sizes in stock</strong> and <strong>exports to 36 countries</strong>, supported by dedicated sales offices, warehouse hubs, and rapid dispatch logistics.
            </p>
          </div>

          {/* Why PowerDrive: 5 Pillars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
              Why PowerDrive?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/5 space-y-2 hover:border-[#0071e3]/30 transition-all text-left"
                  >
                    <IconComponent className="w-5 h-5 text-[#0071e3]" />
                    <h4 className="font-bold text-sm text-[#1d1d1f]">{pillar.title}</h4>
                    <p className="text-xs text-[#86868b] leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission Quote Callout */}
          <div className="bg-[#002244] text-white rounded-3xl p-8 sm:p-10 space-y-3 relative overflow-hidden">
            <div className="text-xs font-bold uppercase tracking-widest text-[#2997ff]">
              Our Mission
            </div>
            <blockquote className="text-lg sm:text-2xl font-medium tracking-tight leading-snug text-white">
              &ldquo;To provide power-transmission products that deliver high quality and help customers remain competitive through performance, value and service.&rdquo;
            </blockquote>
            <p className="text-xs text-white/60">
              This closely reflects PowerDrive&apos;s published mission and positioning.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Final Action Section */}
      <section className="bg-[#f5f5f7] py-16 px-4 text-center border-t border-black/5">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
            PowerDrive Bearings
          </h3>
          <p className="text-base text-[#0071e3] font-semibold">
            Precision where it matters.
          </p>
          <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed max-w-lg mx-auto">
            From automotive applications to demanding industrial machinery, PowerDrive develops and supplies bearing solutions engineered for dependable operation.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleExplore}
              className="px-6 py-3 bg-[#111111] hover:bg-[#222222] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore our range of bearings</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppQuote}
              className="px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Request a Quote ({DISPLAY_PHONE})</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
