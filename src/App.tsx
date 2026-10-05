/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ApplePosters } from './components/ApplePosters';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { ShopInfoSection } from './components/ShopInfoSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AboutPowerDrivePage } from './components/AboutPowerDrivePage';
import { CartDrawer } from './components/CartDrawer';
import { Bearing, CartItem } from './types/bearing';
import { BEARINGS_CATALOG } from './data/bearingsData';
import { MessageSquare, Check } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE, createWhatsAppUrl, generateGeneralInquiryMessage } from './utils/whatsapp';

const CART_STORAGE_KEY = 'sasi_powerdrive_cart_apple_v1';

export default function App() {
  const [activeDetailBearing, setActiveDetailBearing] = useState<Bearing | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Deep linking: read ?product= or #partNumber from URL on load
  useEffect(() => {
    const handleUrlDeepLink = () => {
      const params = new URLSearchParams(window.location.search);
      const targetParam = params.get('product') || window.location.hash.replace(/^#/, '');
      if (targetParam) {
        const found = BEARINGS_CATALOG.find(
          (b) =>
            b.id.toLowerCase() === targetParam.toLowerCase() ||
            b.partNumber.toLowerCase() === targetParam.toLowerCase()
        );
        if (found) {
          setActiveDetailBearing(found);
        }
      }
    };

    handleUrlDeepLink();
    window.addEventListener('popstate', handleUrlDeepLink);
    return () => window.removeEventListener('popstate', handleUrlDeepLink);
  }, []);

  // Sync active product to URL query parameter (?product=...)
  useEffect(() => {
    const url = new URL(window.location.href);
    if (activeDetailBearing) {
      url.searchParams.set('product', activeDetailBearing.id);
    } else {
      url.searchParams.delete('product');
    }
    window.history.replaceState({}, '', url.toString());
  }, [activeDetailBearing]);

  // Cart persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (!saved) return [];
      const parsed: CartItem[] = JSON.parse(saved);
      // Re-hydrate with latest catalog data so updated images and prices are always fresh
      return parsed.map((item) => {
        const fresh = BEARINGS_CATALOG.find((b) => b.id === item.bearing.id);
        return fresh ? { ...item, bearing: fresh } : item;
      });
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (bearing: Bearing, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.bearing.id === bearing.id);
      if (existing) {
        return prev.map((item) =>
          item.bearing.id === bearing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { bearing, quantity }];
    });
    showToast(`Added ${bearing.partNumber} to Bag`);
  };

  const handleUpdateQuantity = (bearingId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(bearingId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.bearing.id === bearingId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (bearingId: string) => {
    setCartItems((prev) => prev.filter((item) => item.bearing.id !== bearingId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
      const searchInput = catalogEl.querySelector('input');
      searchInput?.focus();
    }
  };

  const handleFloatingWhatsApp = () => {
    const url = createWhatsAppUrl(generateGeneralInquiryMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-[#1d1d1f] text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs animate-in slide-in-from-bottom-3 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-semibold text-[#0071e3] hover:underline"
          >
            Review Bag
          </button>
        </div>
      )}

      {/* Global Apple Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={handleSearchClick}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Apple Billboard Posters (Matching User's Reference Screenshot 2) */}
        <ApplePosters
          onExploreCatalog={handleScrollToCatalog}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* Minimalist Catalog Section */}
        <CatalogSection
          onSelectBearing={(bearing) => setActiveDetailBearing(bearing)}
          onAddToCart={handleAddToCart}
          onShare={(bearing) => showToast(`Link copied for PowerDrive ${bearing.partNumber}`)}
        />

        {/* Sasi Automobiles Store Information */}
        <ShopInfoSection />
      </main>

      {/* Apple-style Minimal Footer */}
      <Footer onExploreCatalog={handleScrollToCatalog} />

      {/* Official PowerDrive Company & Engineering Story Page */}
      <AboutPowerDrivePage
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onExploreCatalog={handleScrollToCatalog}
      />

      {/* Clean Product Detail Overlay */}
      <ProductDetailModal
        bearing={activeDetailBearing}
        onClose={() => setActiveDetailBearing(null)}
        onAddToCart={handleAddToCart}
        onShare={(bearing) => showToast(`Link copied for PowerDrive ${bearing.partNumber}`)}
      />

      {/* Shopping Bag Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Apple-style WhatsApp Hotline - Pure Icon Button */}
      <aside aria-label="WhatsApp quick hotline" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleFloatingWhatsApp}
          className="w-12 h-12 rounded-full bg-[#002244] hover:bg-[#003366] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center border border-white/10 cursor-pointer"
          title={`Chat with Sasi Automobiles on WhatsApp (${DISPLAY_PHONE})`}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400" />
        </button>
      </aside>
    </div>
  );
}
