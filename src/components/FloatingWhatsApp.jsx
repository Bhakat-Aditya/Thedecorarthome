import React from 'react';
import { MessageCircle } from 'lucide-react'; // or FaWhatsapp from react-icons/fa
import { businessInfo } from '../data/products';

export default function FloatingWhatsApp() {
  const message = "Hi! I was looking at your beautiful art website and would love to discuss a custom piece. 🎨";
  const waLink = `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip that slides out on hover */}
      <span className="absolute right-16 bg-white dark:bg-stone-800 text-stone-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with the Artist
      </span>
      {/* Ping Animation for attention */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
    </a>
  );
}