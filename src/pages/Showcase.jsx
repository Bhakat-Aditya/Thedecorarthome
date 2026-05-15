import React, { useState } from "react";
import { Search, MessageCircle, Sparkles } from "lucide-react";
import { portfolio, businessInfo } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Showcase() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the portfolio dynamically based on the search query
  const filteredPortfolio = portfolio
    .map((section) => {
      // Filter the items within each section
      const matchingItems = section.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.desc
          ? item.desc.toLowerCase().includes(query)
          : false;
        return matchesName || matchesDesc;
      });

      // Return the section with ONLY the matching items
      return { ...section, items: matchingItems };
    })
    // Completely remove sections that have 0 matching items
    .filter((section) => section.items.length > 0);

  // Custom WhatsApp Message for users who need help deciding
  const helpMessage =
    "Hi Thedecorarthome! 🎨\n\nI am browsing your gallery but I am a bit confused about what to choose. Could you help me find or customize the perfect piece?";
  const helpWaLink = `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(helpMessage)}`;

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
          Browse through our bespoke categories or search directly to find the
          perfect piece for your home.
        </p>

        {/* Elegant Search Input */}
        <div className="relative max-w-xl mx-auto group z-10">
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

        {/* --- ANIMATED "NEED HELP" WHATSAPP BANNER --- */}
        <div className="mt-8 flex justify-center animate-fade-in-up">
          <a
            href={helpWaLink}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-500 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden"
          >
            {/* Sliding Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 -translate-x-full group-hover:animate-[liquidShine_2s_ease-in-out_infinite]"></div>

            <MessageCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 animate-pulse relative z-10" />

            <span className="text-sm font-medium text-stone-600 dark:text-stone-300 relative z-10">
              Confused with the options?{" "}
              <span className="font-bold text-stone-900 dark:text-white border-b border-amber-500/30 group-hover:border-amber-500 transition-colors">
                Let's chat and design together
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* --- NO RESULTS STATE --- */}
      {filteredPortfolio.length === 0 && (
        <div className="text-center py-20 animate-fade-in-up">
          <p className="text-xl text-stone-500 dark:text-stone-400 font-light mb-6">
            No artworks found matching "
            <span className="text-stone-900 dark:text-white font-medium">
              {searchQuery}
            </span>
            "
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-sm font-bold tracking-widest uppercase text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors border-b border-amber-600/30 hover:border-amber-600 pb-1"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* --- FILTERED PORTFOLIO GRID --- */}
      {filteredPortfolio.map((section) => {
        // Check if this specific category is Varmala Preservation
        const isVarmalaCategory =
          section.category.toLowerCase().includes("varmala") ||
          section.category.toLowerCase().includes("vermala");

        return (
          <section key={section.id} className="mb-24 animate-fade-in-up">
            <div className="mb-10 border-b border-stone-200 dark:border-stone-800 pb-6">
              {/* Category Title & Dynamic Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">
                  {section.category}
                </h3>

                {/* --- VARMALA SPECIAL PICKUP BADGE --- */}
                {isVarmalaCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-emerald-200 dark:border-emerald-800/50 shadow-sm animate-pulse w-max">
                    <Sparkles className="w-3 h-3" />
                    Home Pickup Available
                  </span>
                )}
              </div>

              {section.description && (
                <p className="text-stone-500 dark:text-stone-400 mt-2 font-light text-lg">
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
        );
      })}

      {/* Internal CSS for the banner sliding glow effect */}
      <style>{`
        @keyframes liquidShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
