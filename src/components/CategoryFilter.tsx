import React from 'react';
import { CATEGORIES_CONFIG } from '../data/bearingsData';
import { ArrowUpRight } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  // Only display the 4 main application categories in the visual cards
  const visualCategories = CATEGORIES_CONFIG.filter((c) => c.id !== 'all');

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">
              Application Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Bearings Categorized by Application
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Engineered with tailored tolerances, seal designs, and high-temp greases for specific duty cycles.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-200 text-left bg-white ${
                  isSelected
                    ? 'border-blue-700 ring-2 ring-blue-700/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-400 hover:shadow-sm'
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs rounded-md p-1.5 shadow-xs text-slate-700 group-hover:text-blue-700 group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>PowerDrive Series</span>
                    <span className="font-mono tabular-nums font-medium text-slate-700">{cat.count} Variants</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
