import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu automatically when a link is clicked
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Apply Dark Mode class to the HTML document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-stone-950/90 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white tracking-wide"
        >
          Thedecorarthome
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-amber-600 dark:text-amber-500"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Desktop Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 ml-4 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-colors text-stone-600 dark:text-stone-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-stone-900 dark:text-white"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-amber-600 dark:text-amber-500"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
