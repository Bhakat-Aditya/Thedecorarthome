import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { portfolio } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Showcase() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the portfolio dynamically based on the search query
  const filteredPortfolio = portfolio
    .map((section) => {
      // Filter the items within each section
      const matchingItems = section.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.desc ? item.desc.toLowerCase().includes(query) : false;
        return matchesName || matchesDesc;
      });

      // Return the section with ONLY the matching items
      return { ...section, items: matchingItems };
    })
    // Completely remove sections that have 0 matching items
    .filter((section) => section.items.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 w-full min-h-screen">
      
      {/* --- HEADER & SEARCH BAR --- */}
      <div className="text-center mb-16">
        <h2 className="text-sm tracking-[0.3em] uppercase text-amber-700 dark:text-amber-500 mb-4 font-bold">
          The Gallery
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-6">
          Our Masterpieces
        </h3>
        <p className="text-stone-600 dark:text-stone-400 mb-12 max-w-2xl mx-auto font-light text-lg">
          Browse through our bespoke categories or search directly to find the perfect piece for your home.
        </p>

        {/* Elegant Search Input */}
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-stone-400 group-focus-within:text-amber-500 transition-colors duration-300" />
          </div>
          <input
            type="text"
            className="block w-full pl-14 pr-6 py-4 rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-xl dark:focus:bg-stone-900"
            placeholder="Search for clocks, wall art, house plates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- NO RESULTS STATE --- */}
      {filteredPortfolio.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-stone-500 dark:text-stone-400 font-light mb-6">
            No artworks found matching "<span className="text-stone-900 dark:text-white font-medium">{searchQuery}</span>"
          </p>
          <button 
            onClick={() => setSearchQuery('')}
            className="text-sm font-bold tracking-widest uppercase text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors border-b border-amber-600/30 hover:border-amber-600 pb-1"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* --- FILTERED PORTFOLIO GRID --- */}
      {filteredPortfolio.map((section) => (
        <section key={section.id} className="mb-24 animate-fade-in-up">
          <div className="mb-10 border-b border-stone-200 dark:border-stone-800 pb-6">
            <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">
              {section.category}
            </h3>
            {section.description && (
              <p className="text-stone-500 dark:text-stone-400 mt-3 font-light text-lg">
                {section.description}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {section.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}