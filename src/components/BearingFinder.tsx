import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { BEARINGS_CATALOG } from '../data/bearingsData';
import { Bearing } from '../types/bearing';
import { createWhatsAppUrl, generateDimensionInquiryMessage } from '../utils/whatsapp';

interface BearingFinderProps {
  onSelectBearing: (bearing: Bearing) => void;
  onAddToCart: (bearing: Bearing) => void;
}

export const BearingFinder: React.FC<BearingFinderProps> = ({
  onSelectBearing,
  onAddToCart,
}) => {
  const [boreInput, setBoreInput] = useState<string>('');
  const [odInput, setOdInput] = useState<string>('');
  const [widthInput, setWidthInput] = useState<string>('');
  const [tolerance, setTolerance] = useState<number>(0.5); // mm tolerance
  const [vehicleNote, setVehicleNote] = useState<string>('');

  const boreNum = parseFloat(boreInput) || undefined;
  const odNum = parseFloat(odInput) || undefined;
  const widthNum = parseFloat(widthInput) || undefined;

  const hasAnyFilter = Boolean(boreNum || odNum || widthNum);

  // Filter bearings by dimensions within tolerance
  const matches = useMemo(() => {
    if (!hasAnyFilter) return [];

    return BEARINGS_CATALOG.filter((b) => {
      let match = true;
      if (boreNum !== undefined) {
        match = match && Math.abs(b.dimensions.bore - boreNum) <= tolerance;
      }
      if (odNum !== undefined) {
        match = match && Math.abs(b.dimensions.outerDiameter - odNum) <= tolerance;
      }
      if (widthNum !== undefined) {
        match = match && Math.abs(b.dimensions.width - widthNum) <= tolerance;
      }
      return match;
    });
  }, [boreNum, odNum, widthNum, tolerance, hasAnyFilter]);

  const handleReset = () => {
    setBoreInput('');
    setOdInput('');
    setWidthInput('');
    setVehicleNote('');
  };

  const handleAskWhatsAppCustom = () => {
    const url = createWhatsAppUrl(
      generateDimensionInquiryMessage(boreNum, odNum, widthNum, vehicleNote)
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const setPreset = (d: number, D: number, B: number, note: string) => {
    setBoreInput(d.toString());
    setOdInput(D.toString());
    setWidthInput(B.toString());
    setVehicleNote(note);
  };

  return (
    <section id="finder" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-800">
            Precision Vernier Caliper Match
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Bearing Dimension Finder (d × D × B)
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Measure your existing bearing with a caliper or ruler and enter Inner Bore (d), Outer Diameter (D), and Width (B) in millimetres.
          </p>
        </div>

        {/* Dimension Blueprint Visual & Input Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Inner Diameter (d) */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Inner Bore (d) <span className="text-blue-700 font-mono">mm</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={boreInput}
                    onChange={(e) => setBoreInput(e.target.value)}
                    placeholder="e.g. 15"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 font-mono tabular-nums"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-400 font-mono">d</span>
                </div>
              </div>

              {/* Outer Diameter (D) */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Outer Diameter (D) <span className="text-blue-700 font-mono">mm</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={odInput}
                    onChange={(e) => setOdInput(e.target.value)}
                    placeholder="e.g. 35"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 font-mono tabular-nums"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-400 font-mono">D</span>
                </div>
              </div>

              {/* Width / Thickness (B) */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Width / Depth (B) <span className="text-blue-700 font-mono">mm</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={widthInput}
                    onChange={(e) => setWidthInput(e.target.value)}
                    placeholder="e.g. 11"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 font-mono tabular-nums"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-400 font-mono">B</span>
                </div>
              </div>
            </div>

            {/* Application Note */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Vehicle or Equipment Name (Optional)
              </label>
              <input
                type="text"
                value={vehicleNote}
                onChange={(e) => setVehicleNote(e.target.value)}
                placeholder="e.g. Hero Splendor Rear Wheel or Ceiling Fan"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-700"
              />
            </div>

            {/* Tolerance & Reset bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Search Tolerance:</span>
                <button
                  type="button"
                  onClick={() => setTolerance(0)}
                  className={`px-2 py-1 rounded font-mono ${tolerance === 0 ? 'bg-blue-900 text-white font-medium' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Exact (0mm)
                </button>
                <button
                  type="button"
                  onClick={() => setTolerance(0.5)}
                  className={`px-2 py-1 rounded font-mono ${tolerance === 0.5 ? 'bg-blue-900 text-white font-medium' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  ±0.5mm
                </button>
                <button
                  type="button"
                  onClick={() => setTolerance(1.0)}
                  className={`px-2 py-1 rounded font-mono ${tolerance === 1.0 ? 'bg-blue-900 text-white font-medium' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  ±1.0mm
                </button>
              </div>

              {hasAnyFilter && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-900"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Sizes</span>
                </button>
              )}
            </div>

            {/* Quick Popular Dimension Presets */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Popular Quick Sizes
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPreset(12, 32, 10, 'Hero Front / Fan Upper (6201)')}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-mono transition-colors"
                >
                  12 × 32 × 10 (6201)
                </button>
                <button
                  type="button"
                  onClick={() => setPreset(15, 35, 11, 'Ceiling Fan Bottom / Scooter (6202)')}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-mono transition-colors"
                >
                  15 × 35 × 11 (6202)
                </button>
                <button
                  type="button"
                  onClick={() => setPreset(17, 40, 12, 'Bajaj Pulsar Rear Hub (6203)')}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-mono transition-colors"
                >
                  17 × 40 × 12 (6203)
                </button>
                <button
                  type="button"
                  onClick={() => setPreset(50, 90, 24.75, 'Tractor Front Hub (32210)')}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-mono transition-colors"
                >
                  50 × 90 × 24.75 (32210)
                </button>
                <button
                  type="button"
                  onClick={() => setPreset(19.05, 49.225, 18.034, 'Tapered Roller (09067/09195)')}
                  className="px-2.5 py-1.5 bg-[#0071e3]/10 hover:bg-[#0071e3]/20 text-[#0071e3] font-semibold rounded-md font-mono transition-colors"
                >
                  19.05 × 49.23 × 18.03 (09067/09195)
                </button>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">
                  Calibrated Matches
                </span>
                <span className="text-xs font-mono tabular-nums font-semibold text-blue-900">
                  {hasAnyFilter ? `${matches.length} Found` : 'Awaiting Input'}
                </span>
              </div>

              {!hasAnyFilter ? (
                <div className="py-8 text-center text-slate-400 space-y-2">
                  <Search className="w-8 h-8 mx-auto text-slate-300 stroke-[1.5]" />
                  <p className="text-xs">Enter bore diameter, outer diameter, or width on the left to see matching PowerDrive bearing codes.</p>
                </div>
              ) : matches.length === 0 ? (
                <div className="py-6 space-y-4 text-center">
                  <p className="text-sm text-slate-700 font-medium">
                    No standard catalog match for {boreNum || '—'} × {odNum || '—'} × {widthNum || '—'} mm
                  </p>
                  <p className="text-xs text-slate-500">
                    Sasi Automobiles stocks 500+ specialized non-standard sizes in our physical shop. Ask our technicians on WhatsApp:
                  </p>
                  <button
                    onClick={handleAskWhatsAppCustom}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Check Custom Size with Sasi Automobiles</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                  {matches.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors bg-slate-50/50 flex items-center justify-between gap-3 text-left"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-mono font-bold text-blue-900 text-sm">{item.partNumber}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 truncate">{item.categoryName}</span>
                        </div>
                        <p className="text-xs text-slate-700 truncate mt-0.5">{item.name}</p>
                        <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                          {item.dimensions.bore} × {item.dimensions.outerDiameter} × {item.dimensions.width} mm
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <div className="text-right">
                          <span className="text-xs font-semibold text-slate-900 font-mono tabular-nums block">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <button
                          onClick={() => onSelectBearing(item)}
                          className="p-1.5 text-xs text-blue-800 hover:bg-blue-50 rounded border border-blue-200 transition-colors"
                          title="View Technical Details"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
