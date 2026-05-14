import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, X } from "lucide-react";
import { businessInfo } from "../data/products";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customInfo, setCustomInfo] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const getWhatsAppLink = () => {
    const message = `Hi Thedecorarthome!\n\nI am interested in ordering:\n\n*Product Name:* ${product.name}\n\n*Customization Details:*\n${customInfo ? customInfo : "No specific details added. Let's discuss."}\n\nPlease let me know the final quote and timeline.`;
    return `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div className="group flex flex-col bg-white dark:bg-stone-900 rounded-[2rem] overflow-hidden border border-stone-100 dark:border-stone-800 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500">
        {/* IMAGE CONTAINER - Set to aspect-square */}
        <div
          className="relative w-full aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800 select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={product.img}
            alt={product.name}
            // Removed group-hover:scale-105 to prevent zoom
            className="w-full h-full object-cover transition-transform duration-700 ease-out pointer-events-none"
            loading="lazy"
            draggable="false"
          />

          {/* Watermark */}
          <div className="absolute bottom-3 w-full text-center text-white/80 font-serif text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
            Thedecorarthome
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col flex-grow">
          <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-snug">
            {product.name}
          </h4>

          <span className="text-amber-700 dark:text-amber-500 font-medium mb-4 block">
            Starts From ₹{product.price} /-
          </span>

          <p className="text-stone-600 dark:text-stone-400 font-light mb-8 flex-grow leading-relaxed">
            {product.desc || "Premium handcrafted customized artwork."}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-stone-900 dark:bg-amber-500 hover:bg-amber-700 dark:hover:bg-amber-400 text-white dark:text-stone-950 py-4 px-6 rounded-2xl text-sm uppercase tracking-widest font-bold transition-colors"
          >
            Personalize & Order
          </button>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <div className="relative w-full max-w-5xl bg-white dark:bg-stone-950 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] animate-fade-in-up">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-stone-900 dark:text-white hover:bg-amber-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL IMAGE - Set to aspect-square on mobile, auto on desktop */}
              <div
                className="w-full md:w-1/2 aspect-square md:aspect-auto bg-stone-100 dark:bg-stone-900 relative select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable="false"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"></div>

                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs tracking-widest uppercase z-20">
                  ID: {product.id}
                </div>

                <div className="absolute bottom-4 w-full text-center text-white/80 font-serif text-sm font-bold tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] z-20 pointer-events-none">
                  Thedecorarthome
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-tight">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-amber-700 dark:text-amber-500">
                    ₹{product.price}/-
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Starting Price
                  </span>
                </div>

                {/* Pricing Info Card */}
                <div className="mb-8 rounded-[1.75rem] border border-amber-200/50 dark:border-amber-500/20 bg-gradient-to-br from-amber-50/90 via-white to-stone-50 dark:from-amber-500/10 dark:via-stone-900 dark:to-stone-950 p-6 shadow-xl shadow-amber-100/40 dark:shadow-none backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-amber-800 dark:text-amber-400">
                      Pricing & Customization
                    </h4>
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    <p>
                      Final pricing may vary depending on{" "}
                      <span className="font-semibold text-stone-900 dark:text-white">
                        size, decoration style, resin detailing, and floral
                        preservation
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <label className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                    Customization Details
                  </label>
                  <textarea
                    rows="4"
                    placeholder="e.g., Ocean blue theme with gold flakes..."
                    value={customInfo}
                    onChange={(e) => setCustomInfo(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none transition-all"
                  ></textarea>
                </div>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Request via WhatsApp
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
