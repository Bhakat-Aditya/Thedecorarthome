import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredImg, setHoveredImg] = useState(null);
  const location = useLocation();

  // --- REACT-DRIVEN WAVE ANIMATION STATE ---
  const brandText = "Thedecorarthome".split("");
  const [waveIndex, setWaveIndex] = useState(0);
  const dirRef = useRef(1); // 1 for right, -1 for left

  useEffect(() => {
    // 200ms interval + 600ms CSS transition creates a buttery smooth, overlapping wave.
    const interval = setInterval(() => {
      setWaveIndex((prev) => {
        // Reverse direction when hitting the ends
        if (prev >= brandText.length - 1) {
          dirRef.current = -1;
        } else if (prev <= 0) {
          dirRef.current = 1;
        }
        return prev + dirRef.current;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [brandText.length]);

  // Handle Light/Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper function to render the highly customized, wave-animated logo
  const renderAnimatedLogo = (isMobile = false) => (
    <div className="flex items-center relative">
      {/* 👇 THE SPINNING LOGO 👇 */}
      <img
        src="/logo.jpeg"
        alt="Logo"
        className={`object-contain animate-[spin_5s_linear_infinite] transition-all duration-300 z-10 ${
          isMobile ? "w-7 h-7 mr-2" : "w-8 h-8 mr-3"
        } invert dark:invert-0`}
        // Note: 'dark:invert' automatically turns a black logo white in dark mode.
        // If your logo is fully colored (like gold/blue), you can delete 'dark:invert'.
      />

      <div className="flex items-end relative">
        {brandText.map((char, index) => {
          const distance = Math.abs(waveIndex - index);
          const isCenter = distance === 0;
          const isNeighbor = distance === 1;

          const baseSize = isMobile
            ? "text-lg sm:text-xl"
            : "text-[1.2rem] lg:text-[1.4rem]";
          const baseColor =
            isMobile && isOpen
              ? "text-white"
              : "text-stone-900 dark:text-white";

          return (
            <span
              key={index}
              className={`font-serif ${baseSize} tracking-[0.05em] uppercase origin-bottom inline-block transition-all duration-[900ms] ease-out ${
                isCenter
                  ? "text-amber-500 scale-[1.25] -translate-y-1 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  : isNeighbor
                    ? "text-amber-500/70 scale-[1.1] -translate-y-0.5 drop-shadow-[0_0_4px_rgba(245,158,11,0.2)]"
                    : `${baseColor} scale-100 translate-y-0`
              }`}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* =========================================================
          DESKTOP: FLOATING MAGNETIC ISLAND
          ========================================================= */}
      <div className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl rounded-full group">
        {/* Continuous Light Beam Border (Vercel Style) */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-30 dark:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0_200deg,#f59e0b_360deg)] animate-[spin_4s_linear_infinite]"></div>
        </div>

        {/* Inner Glass Background */}
        <div className="absolute inset-[1px] bg-white/70 dark:bg-[#0a0a09]/95 backdrop-blur-xl rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-stone-200/80 dark:border-transparent z-0 transition-colors duration-500"></div>

        {/* --- ACTUAL NAVBAR CONTENT --- */}
        <div className="relative z-10 w-full flex items-center justify-between px-8 py-5">
          {/* Animated Logo Injection */}
          <NavLink to="/" className="relative flex items-center h-8">
            {renderAnimatedLogo(false)}
          </NavLink>

          {/* Links with Interactive Hover Animations */}
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredImg(link.img)}
                onMouseLeave={() => setHoveredImg(null)}
                className={({ isActive }) =>
                  `group relative flex flex-col items-center justify-center transition-colors duration-500 ${
                    isActive
                      ? "text-amber-600 dark:text-amber-500"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  }`
                }
              >
                <span className="font-serif italic tracking-widest group-hover:scale-110 transition-transform duration-500">
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-6 bg-stone-300 dark:bg-stone-800 mx-2"></div>

          {/* Morphing Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative overflow-hidden w-10 h-10 rounded-full flex items-center justify-center border border-stone-300 dark:border-stone-800 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-white/80 dark:bg-black/50 transition-all duration-500"
            aria-label="Toggle Dark Mode"
          >
            <div
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${darkMode ? "translate-y-10 opacity-0 rotate-90" : "translate-y-0 opacity-100 rotate-0"}`}
            >
              <Moon className="w-4 h-4 text-stone-900" />
            </div>
            <div
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${darkMode ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0 -rotate-90"}`}
            >
              <Sun className="w-4 h-4 text-amber-500" />
            </div>
          </button>
        </div>
      </div>

      {/* =========================================================
          DESKTOP: ETHEREAL HOVER IMAGE PEEK
          ========================================================= */}
      <div
        className={`hidden md:flex fixed inset-0 pointer-events-none z-[40] items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          hoveredImg
            ? "opacity-15 dark:opacity-20 scale-100 blur-[8px]"
            : "opacity-0 scale-90 blur-[40px]"
        }`}
      >
        <img
          src={hoveredImg || "/product-1.jpg"}
          className="w-[60vw] h-[60vh] object-cover rounded-full mix-blend-luminosity dark:mix-blend-lighten"
          alt="Preview"
        />
      </div>

      {/* =========================================================
          MOBILE: LIQUID CIRCLE MENU 
          ========================================================= */}

      {/* MOBILE TOP BAR */}
      <div
        className={`md:hidden fixed top-0 w-full z-[100] px-4 py-6 flex justify-between items-center transition-all duration-500 ${isOpen ? "text-white" : "text-stone-900 dark:text-white bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-[#0a0a09]/90 dark:via-[#0a0a09]/40"}`}
      >
        {/* Animated Logo Injection (Mobile) */}
        <NavLink to="/" className="relative flex items-center z-50 h-8">
          {renderAnimatedLogo(true)}
        </NavLink>

        {/* Custom Artistic Animated Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-50 group"
        >
          <span
            className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "w-6 rotate-45 translate-y-[8px] bg-white" : "w-8 bg-stone-900 dark:bg-white group-hover:w-6"}`}
          ></span>
          <span
            className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "w-0 opacity-0 bg-amber-500" : "w-5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"}`}
          ></span>
          <span
            className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "w-6 -rotate-45 -translate-y-[8px] bg-white" : "w-8 bg-stone-900 dark:bg-white group-hover:w-6"}`}
          ></span>
        </button>
      </div>

      {/* Full Screen Liquid Background Reveal */}
      <div
        className="md:hidden fixed inset-0 z-[90] bg-[#050505] flex flex-col justify-center px-8 transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          clipPath: isOpen
            ? "circle(150% at calc(100% - 3rem) 3rem)"
            : "circle(0% at calc(100% - 3rem) 3rem)",
        }}
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        <div className="flex flex-col gap-8 relative z-10">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100 rotate-0"
                      : "translate-y-full opacity-0 rotate-6"
                  } ${isActive ? "text-amber-500" : "text-white"}`
                }
                style={{
                  transitionDelay: `${isOpen ? index * 100 + 300 : 0}ms`,
                }}
              >
                <span className="text-5xl sm:text-6xl font-serif font-light tracking-wide">
                  {link.name}
                </span>
                <span className="text-xs font-sans tracking-[0.3em] uppercase opacity-30 mb-2">
                  0{index + 1}
                </span>
              </NavLink>
            </div>
          ))}
        </div>

        <div
          className={`absolute bottom-12 left-8 right-8 flex justify-between items-center transition-all duration-700 delay-700 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-white transition-colors"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
      </div>
    </>
  );
}
