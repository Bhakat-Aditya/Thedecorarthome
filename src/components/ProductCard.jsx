import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { businessInfo } from "../data/products";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [customInfo, setCustomInfo] = useState("");

  const getWhatsAppLink = () => {
    // Clean, direct, and simple WhatsApp message (No image links, no extra fluff)
    const message = `Hi Thedecorarthome!\n\nI am interested in ordering:\n\n*Product Name:* ${product.name}\n*Product ID:* ${product.id}\n*Size:* ${selectedSize}\n\n*Custom Details:*\n${customInfo ? customInfo : "No specific details added. Let's discuss."}\n\nPlease let me know the quote and timeline.`;

    return `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      {/* 1. THE PRODUCT CARD */}
      <div className="group flex flex-col bg-white dark:bg-stone-900 rounded-[2rem] overflow-hidden border border-stone-100 dark:border-stone-800 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500">
        {/* IMAGE CONTAINER WITH PROTECTION & WATERMARK */}
        <div
          className="relative h-72 overflow-hidden bg-stone-100 dark:bg-stone-800 select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
            loading="lazy"
            draggable="false"
          />
          {/* The Watermark */}
          <div className="absolute bottom-3 w-full text-center text-white/80 font-serif text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
            Thedecorarthome
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-snug">
            {product.name}
          </h4>
          <span className="text-amber-700 dark:text-amber-500 font-medium mb-4 block">
            Starts at {product.price}
          </span>

          <p className="text-stone-600 dark:text-stone-400 font-light mb-8 flex-grow leading-relaxed">
            {product.desc}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-stone-900 dark:bg-amber-500 hover:bg-amber-700 dark:hover:bg-amber-400 text-white dark:text-stone-950 py-4 px-6 rounded-2xl text-sm uppercase tracking-widest font-bold transition-colors"
          >
            Personalize & Order
          </button>
        </div>
      </div>

      {/* 2. THE CUSTOMIZATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-4xl bg-white dark:bg-stone-950 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] animate-fade-in-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-stone-900 dark:text-white hover:bg-amber-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image with Protection */}
            <div
              className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 dark:bg-stone-900 relative select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs tracking-widest uppercase z-20">
                ID: {product.id}
              </div>
              <div className="absolute bottom-4 right-0 w-full text-center text-white/80 font-serif text-sm font-bold tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                Thedecorarthome
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
              <h3 className="text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2">
                {product.name}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 font-light mb-8">
                Customize your piece to fit your space perfectly. Fill out the
                details below to request a quote.
              </p>

              <div className="mb-6">
                <label className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                  1. Select Preferred Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                        selectedSize === size
                          ? "border-amber-600 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
                          : "border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-amber-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <label className="block text-xs font-bold tracking-widest uppercase text-stone-500 mb-3">
                  2. Customization Details
                </label>
                <textarea
                  rows="4"
                  placeholder="e.g., I would like blue ocean colors, gold flakes, and the name 'Sharma'..."
                  value={customInfo}
                  onChange={(e) => setCustomInfo(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                ></textarea>
                <p className="text-xs text-stone-400 mt-2">
                  *You can share reference photos with the artist once WhatsApp
                  opens.
                </p>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Send Request via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
