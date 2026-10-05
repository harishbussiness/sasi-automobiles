import React, { useState } from 'react';
import { Building2, MessageSquare, Wrench, FileText, CheckCircle2 } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

export const WholesaleSection: React.FC = () => {
  const [garageName, setGarageName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');

  const handleWholesaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `*BULK / GARAGE QUOTATION REQUEST*\n`;
    msg += `*To:* Sasi Automobiles (PowerDrive Bearings)\n`;
    if (garageName) msg += `*Workshop/Shop:* ${garageName}\n`;
    if (city) msg += `*Location:* ${city}\n`;
    if (phone) msg += `*Phone:* ${phone}\n`;
    msg += `\n*REQUIREMENT LIST:*\n${requirement || 'Looking for wholesale dealer price list.'}\n\n`;
    msg += `Please send wholesale rate card and dispatch options.`;

    const url = createWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Benefits & Trust */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                B2B & Garage Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Wholesale Box Rates for Garages & Fleet Operators
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you run a commercial truck garage, tractor service center, two-wheeler workshop, or electric motor rewinding unit, Sasi Automobiles provides wholesale carton pricing on PowerDrive Bearings.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Direct Stock Availability: </span>
                  Over 10,000+ units readily available at Sasi Automobiles hub for same-day dispatch.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">100% Genuine Chrome Steel Guarantee: </span>
                  Sealed boxes with verifiable holograms and zero risk of counterfeit spares.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">GST Invoicing & Transport Delivery: </span>
                  Input tax credit compliant bills and daily dispatch via private parcel/lorry services.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast WhatsApp Requisition Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleWholesaleSubmit}
              className="bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 text-left"
            >
              <div className="border-b border-slate-700 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  Request Wholesale Rate Card
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Send your bearing requirements straight to our WhatsApp procurement desk at {DISPLAY_PHONE}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Workshop / Shop Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sri Balaji Motors / Garage"
                    value={garageName}
                    onChange={(e) => setGarageName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">City / Town</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanuku / West Godavari"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-slate-300 mb-1 font-medium">Contact Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="text-xs">
                <label className="block text-slate-300 mb-1 font-medium">
                  Bearings List or Quantities Needed
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. 50 pcs 6202-ZZ, 20 pcs 6201-2RS, 10 pcs 32215 taper roller, 10 pcs 6308 tractor bearings..."
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Submit to WhatsApp (+91 83319 48888)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
