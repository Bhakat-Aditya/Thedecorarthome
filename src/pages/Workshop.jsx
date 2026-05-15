import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Monitor,
  House,
  PackageCheck,
  BadgeCheck,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  IndianRupee,
  HelpCircle,
  Palette,
  BookOpen,
} from "lucide-react";
import { businessInfo } from "../data/products";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WorkshopPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    // --- GSAP ANIMATIONS ---
    const ctx = gsap.context(() => {
      // 1. Hero Animations (Plays immediately on load)
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(
          ".hero-badge",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.4",
        );

      // 2. Scroll Animations (Plays when scrolled into view)
      const sections = gsap.utils.toArray(".animate-section");
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // 3. Staggered Grid Animations
      gsap.fromTo(
        ".gsap-img-wrapper",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bento-grid-trigger", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".gsap-feature-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".features-trigger", start: "top 85%" },
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // --- DATA ---
  const workshopImages = [
    "/clock-3.jpeg",
    "/puja-thali-1.jpeg",
    "/wall-art-1.jpeg",
    "/wedding-plate-4.jpeg",
    "/vermala-4.jpeg",
    "/key-chain-1.jpeg",
  ];

  const curriculum = [
    {
      title: "Resin Mixing & Safety",
      desc: "Learn the exact ratios, curing times, and safety protocols for professional results.",
    },
    {
      title: "Geode Art Creation",
      desc: "Master the placement of crushed glass, crystals, and gold lines to create luxury geodes.",
    },
    {
      title: "Flower Preservation",
      desc: "Techniques to properly dry and cast delicate Varmala flowers without losing color.",
    },
    {
      title: "Mantra Frame Design",
      desc: "Learn to embed text, metallic stickers, and photos seamlessly into your resin pours.",
    },
    {
      title: "Vendor Details",
      desc: "Get exclusive access to my trusted list of raw material suppliers at wholesale rates.",
    },
    {
      title: "Live Q&A Session",
      desc: "Dedicated time to answer all your doubts regarding business, pricing, and techniques.",
    },
  ];

  const faqs = [
    {
      q: "Do I need prior art experience?",
      a: "Not at all! This masterclass is designed from the ground up for absolute beginners.",
    },
    {
      q: "Are materials provided?",
      a: "Yes, 100% of the raw materials, safety gear, and tools will be provided at the studio.",
    },
    {
      q: "Can I take my artwork home?",
      a: "Absolutely. Once fully cured, you will take home the beautiful masterpieces you create during the workshop.",
    },
    // { q: "Is there an age limit?", a: "Participants must be 14 years or older due to the handling of chemical resin." }
  ];

  // --- WHATSAPP SETUP ---
  const whatsappMessage =
    "Hi Thedecorarthome! 🎨\n\nI want to register for the upcoming Resin Art Masterclass. Please share the availability and payment details.";
  const whatsappLink = `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      ref={pageRef}
      className="w-full min-h-screen bg-stone-50 dark:bg-[#0a0a09] font-sans overflow-hidden selection:bg-amber-500 selection:text-white pb-20"
    >
      {/* GLOBAL CSS KEYFRAMES */}
      <style>
        {`
          @keyframes resinGlow {
            0% { transform: rotate(0deg) translateX(-10%); }
            50% { transform: rotate(180deg) translateX(10%); }
            100% { transform: rotate(360deg) translateX(-10%); }
          }
          .animate-resin-glow { animation: resinGlow 8s linear infinite; }
        `}
      </style>

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] bg-amber-500/5 dark:bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/4 z-0"></div>
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vw] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/3 z-0"></div>

      {/* =========================================================
          1. HERO SECTION
          ========================================================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 z-10 flex flex-col items-center text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-600/30 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-900/10 backdrop-blur-md mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-amber-800 dark:text-amber-500">
            Registration Open
          </span>
        </div>

        <h1 className="hero-title text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-stone-900 dark:text-white leading-[1.05] tracking-tight mb-8">
          The Resin Art <br className="hidden md:block" />
          <span className="italic text-amber-700 dark:text-amber-500 font-bold drop-shadow-sm">
            Masterclass.
          </span>
        </h1>

        <p className="hero-sub text-lg md:text-2xl text-stone-600 dark:text-stone-400 font-light max-w-2xl leading-relaxed mb-12">
          Master the art of fluid resin, geode crafting, and floral
          preservation. An exclusive offline experience guided by the artist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#register"
            className="hero-btn flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-900 dark:bg-amber-500 text-white dark:text-stone-900 font-bold tracking-widest uppercase text-sm transition-all shadow-xl hover:-translate-y-1 hover:shadow-amber-500/20"
          >
            Book Your Spot
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#curriculum"
            className="hero-btn flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-stone-900 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-800 font-bold tracking-widest uppercase text-sm transition-all shadow-sm hover:-translate-y-1 hover:bg-stone-50 dark:hover:bg-stone-800"
          >
            View Syllabus
          </a>
        </div>
      </section>

      {/* =========================================================
          2. QUICK DETAILS STRIP
          ========================================================= */}
      <section className="animate-section max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800">
            <div className="flex items-center gap-5 md:justify-center pt-4 md:pt-0 first:pt-0">
              <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Duration
                </p>
                <p className="text-stone-900 dark:text-white font-serif text-xl font-bold mt-1">
                  2 Days Weekend
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center pt-8 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Timings
                </p>
                <p className="text-stone-900 dark:text-white font-serif text-xl font-bold mt-1">
                  4 hrs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:justify-center pt-8 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Location
                </p>
                <p className="text-stone-900 dark:text-white font-serif text-xl font-bold mt-1">
                  Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. THE SYLLABUS / CURRICULUM
          ========================================================= */}
      <section
        id="curriculum"
        className="animate-section max-w-7xl mx-auto px-6 mb-32 relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm tracking-[0.3em] uppercase text-amber-600 dark:text-amber-500 mb-4 font-bold">
              What You'll Learn
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white leading-tight mb-6">
              The Complete Curriculum
            </h3>
            <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-8">
              From the basics of mixing to the advanced techniques of embedding
              mantas and preserving flowers. This course is designed to make you
              an independent artist.
            </p>
            <div className="p-6 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-amber-600 shrink-0" />
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Includes a comprehensive guide on vendor details to help you
                  start your own business immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#111] border border-stone-200 dark:border-stone-800 p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-amber-500 font-serif text-4xl font-bold opacity-30 mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. THE BENTO GALLERY (From Previous Code)
          ========================================================= */}
      <section className="bento-grid-trigger max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-amber-600 dark:text-amber-500 mb-4 font-bold">
            Project Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white leading-tight">
            What You Can Create
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6">
          {workshopImages.map((img, index) => {
            const gridWrappers = [
              "col-span-2 lg:col-span-4 row-span-4",
              "col-span-1 lg:col-span-3 row-span-2",
              "col-span-1 lg:col-span-5 row-span-3",
              "col-span-1 lg:col-span-3 row-span-3",
              "col-span-1 lg:col-span-5 row-span-2",
              "col-span-2 lg:col-span-4 row-span-3",
            ];
            const rotations = [
              "rotate-[-2deg]",
              "rotate-[2deg]",
              "rotate-[-1deg]",
              "rotate-[2deg]",
              "rotate-[-2deg]",
              "rotate-[1deg]",
            ];

            return (
              <div
                key={index}
                className={`gsap-img-wrapper relative ${gridWrappers[index]}`}
              >
                <div
                  className={`group absolute inset-0 overflow-hidden rounded-[2.4rem] border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-lg hover:scale-[1.02] hover:rotate-0 hover:z-30 transition-all duration-700 ${rotations[index]}`}
                >
                  <div className="absolute -inset-[40%] bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-resin-glow mix-blend-overlay z-10 pointer-events-none" />
                  <img
                    src={img}
                    alt={`Gallery Art ${index + 1}`}
                    loading="lazy"
                    draggable="false"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          5. FEATURES INCLUSION
          ========================================================= */}
      <section className="features-trigger max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Palette,
              title: "All Materials Provided",
              desc: "Just bring your creativity. We provide resin, molds, pigments, and safety gear.",
            },
            {
              icon: BadgeCheck,
              title: "Beginner Friendly",
              desc: "Step-by-step guidance ensuring you create a masterpiece on day one.",
            },
            {
              icon: PackageCheck,
              title: "Takeaway Art",
              desc: "Take home the beautiful geode clocks and frames you craft.",
            },
            {
              icon: CheckCircle2,
              title: "Certificate",
              desc: "Receive a completion certificate from Thedecorarthome studio.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="gsap-feature-wrapper bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-[2rem] text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          6. FAQ SECTION
          ========================================================= */}
      <section className="animate-section max-w-4xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center mb-12">
          <HelpCircle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111] border border-stone-200 dark:border-stone-800 p-6 rounded-2xl"
            >
              <h4 className="text-lg font-bold text-stone-900 dark:text-white mb-2">
                {faq.q}
              </h4>
              <p className="text-stone-600 dark:text-stone-400 font-light text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          7. REGISTRATION & PRICING CTA
          ========================================================= */}
      <section
        id="register"
        className="animate-section max-w-4xl mx-auto px-6 relative z-10"
      >
        <div className="bg-stone-900 dark:bg-white rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-sm tracking-[0.3em] uppercase text-amber-500 dark:text-amber-600 font-bold mb-4">
              Secure Your Seat
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white dark:text-stone-900 mb-6">
              Ready to create?
            </h3>
            <p className="text-stone-400 dark:text-stone-600 max-w-lg mx-auto mb-10 font-light">
              Limited seats available per batch to ensure personalized attention
              and guidance. Message us on WhatsApp to check availability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold tracking-widest uppercase text-sm transition-all shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Message to Register
              </a>
              <a
                href={`tel:+${businessInfo.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-stone-700 dark:border-stone-300 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100 font-bold tracking-widest uppercase text-sm transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
