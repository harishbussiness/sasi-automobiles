import React, { useState } from 'react';
import { Download, X, Share, PlusSquare, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running in standalone mode (already installed), hide
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      // Show Apple/Browser guide
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] rounded-full text-xs font-medium transition-all active:scale-95 border border-black/5 cursor-pointer shadow-2xs"
        title="Add PowerDrive shortcut to Home Screen"
        aria-label="Add app shortcut to Home Screen"
      >
        <Download className="w-3.5 h-3.5 text-[#0071e3]" />
        <span className="hidden sm:inline">Add to Home</span>
        <span className="sm:hidden">App</span>
      </button>

      {/* Apple-Style Guide Modal for iOS & Browsers */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-black/5 text-[#1d1d1f] space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/pwa-192x192.png"
                  alt="PowerDrive"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-2xl object-contain bg-[#001f3f] p-1.5 border border-black/5"
                />
                <div>
                  <h3 className="font-bold text-base text-[#1d1d1f]">Add to Home Screen</h3>
                  <p className="text-xs text-[#86868b]">PowerDrive · Sasi Automobiles</p>
                </div>
              </div>

              <button
                onClick={() => setShowGuide(false)}
                className="w-7 h-7 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors cursor-pointer"
                aria-label="Close guide"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {isIOS ? (
              <div className="space-y-3 pt-1 text-xs text-[#515154]">
                <p className="leading-relaxed">
                  Install PowerDrive on your iPhone or iPad for instant catalog lookup and fast WhatsApp ordering:
                </p>

                <div className="space-y-2.5 bg-[#f5f5f7] p-3.5 rounded-2xl">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0071e3] shrink-0 font-bold text-[11px] shadow-2xs">
                      1
                    </div>
                    <div className="flex-1 leading-snug">
                      Tap the <strong className="text-[#1d1d1f]">Share</strong> button <Share className="w-3.5 h-3.5 inline text-[#0071e3] mx-1" /> in the Safari toolbar.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0071e3] shrink-0 font-bold text-[11px] shadow-2xs">
                      2
                    </div>
                    <div className="flex-1 leading-snug">
                      Scroll down and tap <strong className="text-[#1d1d1f]">Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline text-[#1d1d1f] mx-1" />.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0071e3] shrink-0 font-bold text-[11px] shadow-2xs">
                      3
                    </div>
                    <div className="flex-1 leading-snug">
                      Tap <strong className="text-[#0071e3]">Add</strong> in the top-right corner.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-1 text-xs text-[#515154]">
                <p className="leading-relaxed">
                  Install PowerDrive on your phone, tablet, or desktop for 1-tap access:
                </p>

                <div className="space-y-2.5 bg-[#f5f5f7] p-3.5 rounded-2xl">
                  <div className="flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                    <div className="flex-1 leading-snug">
                      Tap your browser menu (<strong className="text-[#1d1d1f]">⋮</strong> or <strong className="text-[#1d1d1f]">Share</strong>) and choose <strong className="text-[#0071e3]">Install App</strong> or <strong className="text-[#0071e3]">Add to Home Screen</strong>.
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowGuide(false)}
              className="w-full py-2.5 bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold rounded-full transition-all cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
