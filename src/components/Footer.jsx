import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { businessInfo } from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a09] text-stone-300 pt-24 pb-8 border-t border-white/10 relative overflow-hidden flex-shrink-0">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: CTA & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Left: Brand Statement */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
              Let's create something <br />{" "}
              <span className="italic text-amber-500">unforgettable.</span>
            </h3>
            <p className="text-stone-500 font-light max-w-sm mb-8">
              Based in Howrah, crafting bespoke resin art and preserving
              cherished memories for clients worldwide.
            </p>
            <a
              href={`https://wa.me/${businessInfo.phone}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-white uppercase tracking-widest text-sm border-b border-white/30 hover:border-amber-500 hover:text-amber-500 pb-2 transition-all group"
            >
              Start a Commission{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Center: Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6 font-bold">
              Menu
            </h4>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="text-lg font-serif hover:text-amber-500 hover:italic transition-all"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/showcase"
                  className="text-lg font-serif hover:text-amber-500 hover:italic transition-all"
                >
                  The Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-lg font-serif hover:text-amber-500 hover:italic transition-all"
                >
                  Contact Studio
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right: Contact & Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6 font-bold">
              Studio Info
            </h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-5 h-5 shrink-0 text-amber-600/70" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex flex-col gap-1 text-stone-400 pl-8">
                <span className="uppercase tracking-widest text-xs font-bold text-stone-500">
                  Hours
                </span>
                <span className="text-amber-500">Open 24/7</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Phone className="w-5 h-5 shrink-0 text-amber-600/70" />
                <a
                  href={`tel:+${businessInfo.phone}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  +91 {businessInfo.displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 text-xs text-stone-500 uppercase tracking-widest gap-6">
          <p>
            © {new Date().getFullYear()} Thedecorarthome. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-500 transition-colors flex items-center gap-2"
            >
              <FaInstagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href={`https://wa.me/${businessInfo.phone}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#25D366] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Massive Brand Name (Viewport Width Typography) */}
      <div className="w-full overflow-hidden mt-8 flex justify-center pointer-events-none opacity-20 select-none">
        <h1 className="text-[12vw] font-serif font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-900 whitespace-nowrap">
          THEDECORARTHOME
        </h1>
      </div>
    </footer>
  );
}
