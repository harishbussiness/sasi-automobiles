import React, { useState, useMemo } from 'react';
import { Search, X, MessageSquare, ChevronRight } from 'lucide-react';
import { BEARINGS_CATALOG } from '../data/bearingsData';
import { Bearing } from '../types/bearing';
import { ProductCard } from './ProductCard';
import { DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

interface CatalogSectionProps {
  onSelectBearing: (bearing: Bearing) => void;
  onAddToCart: (bearing: Bearing) => void;
  onShare?: (bearing: Bearing) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectBearing,
  onAddToCart,
  onShare,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(15);
  const sentinelRef = React.useRef<HTMLDivElement>(null);

  const filteredBearings = useMemo(() => {
    if (!searchQuery.trim()) {
      return BEARINGS_CATALOG;
    }

    const q = searchQuery.toLowerCase().trim();
    const qAltSlash = q.replace(/:/g, '/');
    const qAltColon = q.replace(/\//g, ':');

    return BEARINGS_CATALOG.filter((bearing) => {
      const pLower = bearing.partNumber.toLowerCase();
      const nLower = bearing.name.toLowerCase();
      const matchesPart = pLower.includes(q) || pLower.includes(qAltSlash) || pLower.includes(qAltColon);
      const matchesName = nLower.includes(q) || nLower.includes(qAltSlash) || nLower.includes(qAltColon);
      const matchesType = bearing.bearingType.toLowerCase().includes(q);
      const matchesApp = bearing.applications.some((app) => app.toLowerCase().includes(q));
      const matchesBrand = bearing.compatibleBrands.some((b) => b.toLowerCase().includes(q));
      const matchesDim = `${bearing.dimensions.bore}x${bearing.dimensions.outerDiameter}`.includes(q) ||
        `${bearing.dimensions.bore}` === q ||
        `${bearing.dimensions.outerDiameter}` === q;
      return matchesPart || matchesName || matchesType || matchesApp || matchesBrand || matchesDim;
    });
  }, [searchQuery]);

  // Reset display count when search changes
  React.useEffect(() => {
    setDisplayCount(15);
  }, [searchQuery]);

  // High-performance intersection observer loads next batch when user scrolls near
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayCount((prev) => {
            if (prev < filteredBearings.length) {
              return Math.min(prev + 12, filteredBearings.length);
            }
            return prev;
          });
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [filteredBearings.length]);

  const visibleBearings = useMemo(() => {
    return filteredBearings.slice(0, displayCount);
  }, [filteredBearings, displayCount]);

  return (
    <section id="catalog" className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Apple-style Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
            PowerDrive Store
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] max-w-xl mx-auto">
            {BEARINGS_CATALOG.length} models available. Search by part number, coolant volume, or vehicle fitment.
          </p>
        </div>

        {/* Minimalist Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#86868b] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search part number, coolant, or size (e.g. COOLANT 1L, 1265, 30204, 6202)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-[#f5f5f7] border border-black/5 rounded-full focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all text-[#1d1d1f] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid (Large Nike-style cards: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        {visibleBearings.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
              {visibleBearings.map((bearing, idx) => (
                <ProductCard
                  key={bearing.id}
                  bearing={bearing}
                  priority={idx < 6}
                  onSelect={onSelectBearing}
                  onAddToCart={onAddToCart}
                  onShare={onShare}
                />
              ))}
            </div>

            {/* Infinite Sentinel & Progressive Loading Indicator */}
            {displayCount < filteredBearings.length && (
              <div ref={sentinelRef} className="py-8 flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => setDisplayCount((prev) => Math.min(prev + 15, filteredBearings.length))}
                  className="px-6 py-2.5 bg-[#f5f5f7] hover:bg-slate-200 text-xs font-semibold text-[#1d1d1f] rounded-full transition-all border border-black/5"
                >
                  Load More Bearings ({filteredBearings.length - displayCount} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center space-y-3 bg-[#f5f5f7] rounded-3xl max-w-md mx-auto p-8">
            <p className="text-sm font-semibold text-[#1d1d1f]">
              No bearings found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-[#86868b]">
              Need a non-standard size? Sasi Automobiles stocks 500+ sizes.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hello Sasi Automobiles, I need bearing code: ${searchQuery}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0071e3] px-4 py-2 rounded-full"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp: {DISPLAY_PHONE}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
