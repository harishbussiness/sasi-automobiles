import React from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { CAT_LORRY_IMG, CAT_TRACTOR_IMG, CAT_TWOWHEELER_IMG, CAT_APPLIANCE_IMG } from '../data/bearingsData';
import { createWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface FeatureShowcaseProps {
  onSelectCategory: (cat: string) => void;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'lorry',
      title: 'Lorry & HCV.',
      subtitle: 'Heavy hauls. Extreme axle endurance.',
      desc: 'Tapered roller hub bearings and clutch assemblies for Ashok Leyland, Tata, Eicher & trailers.',
      image: CAT_LORRY_IMG,
      dark: true,
      whatsappMsg: 'Hello Sasi Automobiles, I need bearings for commercial lorries / heavy trucks.',
    },
    {
      id: 'tractor',
      title: 'Tractor & Agri.',
      subtitle: 'High torque. Field tested.',
      desc: 'Hardened bearings for Mahindra, Swaraj, John Deere, rotavators, and harvesters.',
      image: CAT_TRACTOR_IMG,
      dark: false,
      whatsappMsg: 'Hello Sasi Automobiles, I need tractor and agricultural machinery bearings.',
    },
    {
      id: 'two-wheeler',
      title: 'Two Wheeler.',
      subtitle: 'Zero friction. Pure agility.',
      desc: 'Precision wheel, crankshaft, and steering stem bearings for Hero, Honda, Bajaj & TVS.',
      image: CAT_TWOWHEELER_IMG,
      dark: false,
      whatsappMsg: 'Hello Sasi Automobiles, I need two-wheeler motorcycle and scooter bearings.',
    },
    {
      id: 'daily-appliances',
      title: 'Daily Appliances.',
      subtitle: 'Whisper quiet. Built for daily spin.',
      desc: 'Low-noise bearings for ceiling fans, washing machines, submersible pumps, and mixers.',
      image: CAT_APPLIANCE_IMG,
      dark: false,
      whatsappMsg: 'Hello Sasi Automobiles, I need bearings for ceiling fans and home appliances.',
    },
  ];

  const handleWhatsApp = (msg: string) => {
    const url = createWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]">
            The PowerDrive Lineup.
          </h2>
          <p className="text-[#86868b] text-base max-w-lg mx-auto">
            Engineered specifically for each application requirement.
          </p>
        </div>

        {/* 2x2 Apple-style Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between border transition-all duration-300 hover:shadow-lg ${
                card.dark
                  ? 'bg-[#001428] text-white border-black/20'
                  : 'bg-[#f5f5f7] text-[#1d1d1f] border-black/5'
              }`}
            >
              {/* Text Header */}
              <div className="p-8 sm:p-10 space-y-2 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {card.title}
                </h3>
                <p className={`text-base font-normal ${card.dark ? 'text-blue-300' : 'text-[#86868b]'}`}>
                  {card.subtitle}
                </p>
                <p className={`text-xs max-w-sm mx-auto leading-relaxed pt-1 ${card.dark ? 'text-white/70' : 'text-[#86868b]'}`}>
                  {card.desc}
                </p>

                {/* Apple-style Action links */}
                <div className="flex items-center justify-center gap-4 pt-3 text-xs font-medium">
                  <button
                    onClick={() => onSelectCategory(card.id)}
                    className="text-[#0071e3] hover:underline flex items-center gap-0.5"
                  >
                    <span>View Models</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(card.whatsappMsg)}
                    className="text-emerald-500 hover:underline flex items-center gap-1 font-medium"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Order on WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Product Visual */}
              <div className="px-6 pb-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xs bg-white/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
