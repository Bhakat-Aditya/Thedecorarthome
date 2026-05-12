import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Diamond,
  Palette,
  Heart,
  Star,
  ArrowDown,
} from "lucide-react";
import { businessInfo } from "../data/products";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  // --- CINEMATIC INTRO STATE ---
  const [introFinished, setIntroFinished] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("introPlayed") === "true";
    }
    return false;
  });

  // Refs for both videos so we can speed them up
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    // Set video playback speed to 1.25x for whichever video is rendering
    if (!introFinished) {
      if (desktopVideoRef.current) desktopVideoRef.current.playbackRate = 2.25;
      if (mobileVideoRef.current) mobileVideoRef.current.playbackRate = 2.25;
    }
  }, [introFinished]);

  const handleIntroEnd = () => {
    setIntroFinished(true);
    sessionStorage.setItem("introPlayed", "true");
  };

  const allLeftImages = [
    "/key-chain-4.jpeg",
    "/house-plate-6.jpeg",
    "/wedding-plate-1.jpeg",
    "/clock-7.jpeg",
    "/house-plate-2.jpeg",
    "/wedding-plate-1.jpeg",
  ];

  const allRightImages = [
    "/vermala-3.jpeg",
    "/clock-1.jpeg",
    "/house-plate-2.jpeg",
    "/wedding-plate-1.jpeg",
    "/key-chain-4.jpeg",
  ];

  const [leftOffset, setLeftOffset] = useState(0);
  const [rightOffset, setRightOffset] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftOffset((prev) => (prev + 1) % allLeftImages.length);
    }, 2500);

    const rightInterval = setInterval(() => {
      setRightOffset((prev) => (prev + 1) % allRightImages.length);
    }, 3000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  const leftImages = Array.from(
    { length: 4 },
    (_, i) => allLeftImages[(leftOffset + i) % allLeftImages.length],
  );

  const rightImages = Array.from(
    { length: 4 },
    (_, i) => allRightImages[(rightOffset + i) % allRightImages.length],
  );

  return (
    <div className="w-full font-sans overflow-hidden bg-stone-50 dark:bg-[#0a0a09]">
      {/* =========================================================
          THE CINEMATIC ENTRANCE (Plays on First Load)
          ========================================================= */}
      <div
        className={`fixed inset-0 z-[200] bg-black flex items-center justify-center transition-all duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          introFinished
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* DESKTOP VIDEO (Hidden on Mobile) */}
        <video
          ref={desktopVideoRef}
          src="/videos/intro.webm"
          autoPlay
          muted
          playsInline
          onEnded={handleIntroEnd}
          className="hidden md:block w-full h-full object-cover opacity-80"
        />

        {/* MOBILE PORTRAIT VIDEO (Hidden on Desktop) */}
        <video
          ref={mobileVideoRef}
          src="/videos/intro-mobile.webm"
          autoPlay
          muted
          playsInline
          onEnded={handleIntroEnd}
          className="block md:hidden w-full h-full object-cover opacity-80"
        />

        {/* Skip Button */}
        <button
          onClick={handleIntroEnd}
          className="absolute bottom-8 right-8 text-white/70 hover:text-white text-[10px] md:text-xs tracking-[0.3em] uppercase border-b border-white/30 hover:border-white pb-1 transition-all z-10"
        >
          Skip Intro
        </button>
      </div>

      {/* =========================================================
          1. ASTONISHING HERO SECTION (Responsive Fixes)
          ========================================================= */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 md:px-6 text-center pt-24 md:pt-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] max-w-[800px] max-h-[800px] bg-amber-600/15 dark:bg-amber-600/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* DESKTOP FLOATING COLLAGE */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* LEFT */}
          {leftImages.map((img, index) => (
            <div
              key={`left-${index}-${img}`}
              className={`absolute overflow-hidden rounded-[2rem] shadow-2xl select-none animate-fadeSwap transition-all duration-[2000ms] ease-out ${
                introFinished
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-24"
              }`}
              style={{
                left: index % 2 === 0 ? "4%" : "11%",
                top: `${12 + index * 18}%`,
                width: index % 2 === 0 ? "220px" : "180px",
                aspectRatio: index % 2 === 0 ? "4/5" : "1/1",
                transform: `rotate(${index % 2 === 0 ? "-8deg" : "6deg"})`,
                transitionDelay: `${700 + index * 150}ms`,
                animation: `floatY ${5 + index}s ease-in-out infinite`,
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={img}
                alt="Artwork"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2500ms]"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>

              <div className="absolute bottom-4 w-full text-center text-white/80 font-serif text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">
                Thedecorarthome
              </div>
            </div>
          ))}

          {/* RIGHT */}
          {rightImages.map((img, index) => (
            <div
              key={`right-${index}-${img}`}
              className={`absolute overflow-hidden rounded-[2rem] shadow-2xl select-none animate-fadeSwap transition-all duration-[2000ms] ease-out ${
                introFinished
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-24"
              }`}
              style={{
                right: index % 2 === 0 ? "4%" : "11%",
                top: `${10 + index * 18}%`,
                width: index % 2 === 0 ? "210px" : "185px",
                aspectRatio: index % 2 === 0 ? "1/1" : "4/5",
                transform: `rotate(${index % 2 === 0 ? "8deg" : "-6deg"})`,
                transitionDelay: `${900 + index * 150}ms`,
                animation: `floatY ${6 + index}s ease-in-out infinite`,
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={img}
                alt="Artwork"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2500ms]"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>

              <div className="absolute bottom-4 w-full text-center text-white/80 font-serif text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">
                Thedecorarthome
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div
          className={`relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center transition-all duration-1000 delay-500 ${
            introFinished
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-stone-900 dark:text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
            A warm welcome to <br className="hidden md:block" />
            <span className="italic text-amber-700 dark:text-amber-500 font-bold drop-shadow-sm">
              Thedecorarthome.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl font-light leading-relaxed mb-8 md:mb-16 px-2">
            We don't just make art; we freeze your most precious memories in
            time. Handcrafted with devotion in Howrah.
          </p>

          <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
            <Link
              to="/showcase"
              className="bg-stone-900 dark:bg-amber-500 hover:bg-amber-700 dark:hover:bg-amber-400 text-white dark:text-stone-950 px-8 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all shadow-xl hover:-translate-y-1 hover:shadow-amber-900/20 z-20"
            >
              Discover The Art
            </Link>

            {/* MOBILE COLLAGE */}
            <div className="flex lg:hidden w-full max-w-[280px] sm:max-w-[320px] justify-center gap-3 mt-6 z-10">
              <div
                className={`w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl translate-y-2 select-none transition-all duration-[1500ms] ${
                  introFinished
                    ? "opacity-100 translate-y-2"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <img
                  src="/house-plate-6.jpeg"
                  className="w-full h-full object-cover"
                  draggable="false"
                  alt="Art 1"
                />
              </div>

              <div
                className={`w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl -translate-y-2 select-none transition-all duration-[1500ms] ${
                  introFinished
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <img
                  src="/clock-7.jpeg"
                  className="w-full h-full object-cover"
                  draggable="false"
                  alt="Art 2"
                />
              </div>
            </div>

            {/* Scroll Indicator */}
            <span className="text-stone-400 animate-bounce mt-6 md:mt-8 block">
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6 opacity-50" />
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. THE STORY OF THE MAKER
          ========================================================= */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div
                className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden image-reveal bg-stone-100 dark:bg-stone-800 relative select-none shadow-2xl"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/dp.jpg"
                  alt="The Artist in her studio"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out pointer-events-none"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-xs font-bold tracking-[0.4em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-50 dark:bg-amber-900/30 p-8 rounded-3xl border border-amber-100 dark:border-amber-800/50 backdrop-blur-md shadow-xl hidden md:block">
                <p className="font-serif italic text-2xl text-amber-800 dark:text-amber-400 max-w-[250px] leading-snug">
                  "Every piece carries a fragment of my soul."
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500">
                The Maker
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-stone-900 dark:text-white leading-tight">
                An artisan driven by <br />
                <span className="italic text-amber-700 dark:text-amber-500">
                  passion & precision.
                </span>
              </h3>

              <div className="space-y-6 text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                <p>
                  I have always believed that our most cherished moments deserve
                  to be protected, not just in our memories, but in physical
                  form. Thedecorarthome was born from a deep love for combining
                  raw, earthly materials with the pristine clarity of resin.
                </p>
                <p>
                  My hands shape every creation. From carefully drying wedding
                  garlands to hand-placing crushed glass and semi-precious
                  stones onto luxury wall clocks, I pour meticulous attention
                  into every detail to ensure your artwork lasts a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SAMPLE WORKS SHOWCASE
          ========================================================= */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm tracking-[0.35em] uppercase text-stone-400 dark:text-stone-500 mb-4">
                The Portfolio
              </h2>

              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white leading-tight">
                Sample Works
              </h3>
            </div>

            <Link
              to="/showcase"
              className="group text-sm font-bold tracking-[0.2em] uppercase text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <span className="border-b-2 border-stone-300 group-hover:border-amber-600 pb-1 transition-colors">
                View Full Gallery →
              </span>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-5 md:gap-10">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-stone-800 image-reveal select-none shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/house-plate-2.jpeg"
                  alt="Home Name Plate"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2500ms] ease-out pointer-events-none"
                  draggable="false"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />

                {/* Brand */}
                <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </div>

              <div className="pt-5">
                <h4 className="text-lg md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-tight">
                  Home Name Plate
                </h4>

                <p className="text-stone-500 dark:text-stone-400 font-light text-xs md:text-lg leading-relaxed">
                  Name plate made of resin and gold flakes
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer md:mt-16">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-stone-800 image-reveal select-none shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/wedding-plate-1.jpeg"
                  alt="Wedding Plate"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2500ms] ease-out pointer-events-none"
                  draggable="false"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />

                <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </div>

              <div className="pt-5">
                <h4 className="text-lg md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-tight">
                  Wedding Plate
                </h4>

                <p className="text-stone-500 dark:text-stone-400 font-light text-xs md:text-lg leading-relaxed">
                  Walnut Wood, Resin & Amethyst Stones
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-stone-800 image-reveal select-none shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/vermala-4.jpeg"
                  alt="Vermala Preservation"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2500ms] ease-out pointer-events-none"
                  draggable="false"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />

                <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </div>

              <div className="pt-5">
                <h4 className="text-lg md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-tight">
                  Wedding Frame
                </h4>

                <p className="text-stone-500 dark:text-stone-400 font-light text-xs md:text-lg leading-relaxed">
                  Premium handcrafted resin frame
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group cursor-pointer md:mt-16">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 dark:bg-stone-800 image-reveal select-none shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/clock-1.jpeg"
                  alt="Resin Clock"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2500ms] ease-out pointer-events-none"
                  draggable="false"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />

                <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </div>

              <div className="pt-5">
                <h4 className="text-lg md:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2 leading-tight">
                  Resin Clock
                </h4>

                <p className="text-stone-500 dark:text-stone-400 font-light text-xs md:text-lg leading-relaxed">
                  Elegant handcrafted wall clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. INSTAGRAM REELS
          ========================================================= */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">
                Studio Diary
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">
                Watch the Process
              </h3>
            </div>
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b-2 border-stone-300 hover:border-amber-600 pb-1 transition-colors text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500"
            >
              <FaInstagram className="w-4 h-4" /> View All on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((num) => (
              <a
                key={num}
                href={businessInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className={`group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-stone-900 shadow-xl image-reveal block select-none ${num % 2 === 0 ? "md:mt-12" : ""}`}
                onContextMenu={(e) => e.preventDefault()}
              >
                <video
                  src={`/videos/reel-${num}.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                  <p className="text-xs md:text-sm text-center font-medium text-white/90">
                    Tap to view on Instagram
                  </p>
                </div>
                <div className="absolute top-4 w-full text-center text-white/60 font-serif text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md pointer-events-none z-10">
                  Thedecorarthome
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. WHATSAPP CUSTOMER REVIEWS
          ========================================================= */}
      <section className="py-32 bg-stone-50 dark:bg-[#0a0a09] border-t border-stone-200 dark:border-stone-800 overflow-hidden relative">
        {/* INJECTED MARQUEE CSS */}
        <style>
          {`
            @keyframes scrollReviews {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-reviews {
              animation: scrollReviews 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-scroll-reviews:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-sm tracking-[0.3em] uppercase text-amber-700 dark:text-amber-500 mb-4">
              Client Love
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">
              Happy Customers
            </h3>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative group">
          <div className="animate-scroll-reviews gap-4 md:gap-6 px-4 md:px-6">
            {/* 👇 THE REVIEW ARRAY: JUST ADD THE IMAGE FILE NAME AND CUSTOMER NAME 👇 */}
            {[
              ...[
                { img: "review-1.jpeg" },
                { img: "review-2.jpeg" },
                { img: "review-3.jpeg" },
                { img: "review-4.jpeg" },
                { img: "review-5.jpeg" },
                { img: "review-6.jpeg" },
              ],
              // Duplicated array to create the endless seamless loop
              ...[
                { img: "review-1.jpeg" },
                { img: "review-2.jpeg" },
                { img: "review-3.jpeg" },
                { img: "review-4.jpeg" },

                { img: "review-5.jpeg" },
                { img: "review-6.jpeg" },
              ],
              ...[
                { img: "review-1.jpeg" },
                { img: "review-2.jpeg" },
                { img: "review-3.jpeg" },
                { img: "review-4.jpeg" },
                { img: "review-5.jpeg" },
                { img: "review-6.jpeg" },
              ],
              ...[
                { img: "review-1.jpeg" },
                { img: "review-2.jpeg" },
                { img: "review-3.jpeg" },
                { img: "review-4.jpeg" },
                { img: "review-5.jpeg" },
                { img: "review-6.jpeg" },
              ],
            ].map((review, index) => (
              <div
                key={index}
                // Width calculations: ~50vw on mobile (2 items), ~25vw on desktop (4 items)
                className="flex-shrink-0 w-[calc(50vw-1rem)] md:w-[calc(25vw-1.5rem)] max-w-[320px] flex flex-col items-center group/review"
              >
                {/* Image Container */}
                <div
                  className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-black/40 border border-stone-100 dark:border-stone-800 select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src={`/${review.img}`}
                    className="w-full h-full object-cover pointer-events-none group-hover/review:scale-105 transition-transform duration-700 ease-out"
                    draggable="false"
                    alt={`Review by ${review.name}`}
                    loading="lazy"
                  />
                  {/* Subtle Watermark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 w-full text-center text-white/90 font-serif text-[10px] font-bold tracking-[0.4em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none z-10">
                    Thedecorarthome
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Gradients for seamless edges */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-stone-50 dark:from-[#0a0a09] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-stone-50 dark:from-[#0a0a09] to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* =========================================================
          6. HER SIGNATURE SKILLS
          ========================================================= */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a09]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">
              The Craft
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">
              Mastery in Every Medium
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white dark:bg-stone-900 rounded-[2rem] shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
              <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Heart className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
                Floral Preservation
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Delicate techniques to dry and immortalize wedding varmalas and
                sentimental blooms within crystal-clear resin blocks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white dark:bg-stone-900 rounded-[2rem] shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
              <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Diamond className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
                Jewels & Stones
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Integrating semi-precious stones, vintage jewels, and crushed
                glass to create breathtaking, textured geode artworks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white dark:bg-stone-900 rounded-[2rem] shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
              <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Palette className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
                Mixed Media Fusion
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Seamlessly blending rich, natural wood grains with modern resin
                pours to craft functional art like luxury wall clocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. THE COMMISSION PROCESS
          ========================================================= */}
      <section className="py-32 bg-[#FAFAFA] dark:bg-[#0a0a09]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">
              How It Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">
              The Journey of a Custom Piece
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-stone-300 dark:bg-stone-800 z-0 border-dashed border-b border-stone-300 dark:border-stone-800"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-20 h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-amber-700 dark:text-amber-500 mb-8 shadow-xl">
                01
              </span>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-4">
                Consultation
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                We begin with a conversation about your vision, color palette,
                and the specific memories or flowers you wish to preserve.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-20 h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-amber-700 dark:text-amber-500 mb-8 shadow-xl">
                02
              </span>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-4">
                The Craftsmanship
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Your piece undergoes a meticulous pouring and curing process in
                my studio, taking several weeks to ensure perfection.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-20 h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-amber-700 dark:text-amber-500 mb-8 shadow-xl">
                03
              </span>
              <h4 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-4">
                The Reveal
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Carefully packaged and safely delivered to your doorstep, ready
                to become the breathtaking focal point of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. ELEGANT CTA (Now Light/Dark Mode Responsive)
          ========================================================= */}
      <section className="py-40 bg-white dark:bg-[#050505] text-stone-900 dark:text-white text-center px-6 border-t border-stone-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-10 leading-tight">
            Ready to commission your <br className="hidden md:block" /> personal
            masterpiece?
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-16 text-xl font-light max-w-2xl mx-auto">
            Every creation is completely customizable in size, style, and
            finish. Connect with me directly on WhatsApp to discuss your vision.
          </p>
          <a
            href={`https://wa.me/${businessInfo.phone}?text=${encodeURIComponent("Hi! I saw your website, can I have a talk with you? 🎨")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white dark:hover:text-white px-12 py-6 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
