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
} from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Workshop() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline linked to the scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Sequence the animations beautifully
      tl.fromTo(
        ".workshop-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      )
        .fromTo(
          ".workshop-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
          "-=0.4",
        )
        .fromTo(
          ".workshop-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".workshop-pill-wrapper",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .fromTo(
          ".gsap-img-wrapper",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          ".gsap-feature-wrapper",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".cta-card",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const workshopImages = [
    "/clock-3.jpeg",
    "/puja-thali-1.jpeg",
    "/wall-art-1.jpeg",
    "/wedding-plate-2.jpeg",
    "/vermala-4.jpeg",
    // "/key-chain-1.jpeg",
  ];

  const workshopItems = [
    "Clock",
    "Puja Thali",
    "Wall Art",
    "Wedding Frame",
    "Vermala Preservation",
    // "Key Chain",
  ];

  const features = [
    {
      icon: Monitor,
      title: "Online Workshop",
      desc: "Learn comfortably from your home with live guidance.",
    },
    {
      icon: House,
      title: "Offline Workshop",
      desc: "Hands-on resin art experience in a creative environment.",
    },
    {
      icon: PackageCheck,
      title: "Complete Kits",
      desc: "All materials delivered right to your doorstep.",
    },
    {
      icon: BadgeCheck,
      title: "Beginner Friendly",
      desc: "No prior experience needed to start creating.",
    },
  ];

  const whatsappMessage =
    "Hi Thedecorarthome! I want to join the Resin Art Workshop. Please share complete details.";

  const whatsappLink = `https://wa.me/917980605925?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f4eb] dark:bg-[#0c0c0c] py-20 md:py-28 transition-colors duration-500"
    >
      {/* INJECTED CSS KEYFRAMES */}
      <style>
        {`
          @keyframes resinGlow {
            0% { transform: rotate(0deg) translateX(-10%); }
            50% { transform: rotate(180deg) translateX(10%); }
            100% { transform: rotate(360deg) translateX(-10%); }
          }
          .animate-resin-glow {
            animation: resinGlow 8s linear infinite;
          }

          /* --- THE NAVBAR-STYLE CONTINUOUS WAVE FOR THE WORKSHOP ITEMS --- */
          @keyframes pillWave {
            0%, 30% {
              transform: scale(1);
            }
            40% {
              transform: scale(1.05);
              color: rgba(214, 184, 110, 0.8) !important;
              border-color: rgba(214, 184, 110, 0.6) !important;
            }
            50% {
              transform: scale(1.15);
              color: #d6b86e !important;
              border-color: #d6b86e !important;
              box-shadow: 0 0 20px rgba(214, 184, 110, 0.4);
              background-color: rgba(214, 184, 110, 0.1);
            }
            60% {
              transform: scale(1.05);
              color: rgba(214, 184, 110, 0.8) !important;
              border-color: rgba(214, 184, 110, 0.6) !important;
            }
            70%, 100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d2bc88]/15 dark:bg-[#d2bc88]/10 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-200/20 dark:bg-emerald-700/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="workshop-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#b89d63]/30 dark:border-[#b89d63]/20 bg-white/70 dark:bg-white/5 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-[#8a6a2f]" />
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#7a6132] dark:text-[#d4b46b]">
              Affordable Workshop
            </span>
          </div>

          <h2 className="workshop-title text-5xl md:text-7xl lg:text-8xl font-serif text-[#1f3527] dark:text-[#f5efe3] leading-none tracking-tight">
            Resin Art
            <br />
            Workshop
          </h2>

          <p className="workshop-sub mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Learn • Create • Decorate
            <br className="hidden sm:block" />
            Crafted by you, made with love.
          </p>
        </div>

        {/* MASTERCLASS BADGE */}
        <div className="workshop-pill-wrapper flex justify-center mt-12">
          <div className="bg-[#4f5b3d] dark:bg-[#5f6d48] text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold tracking-[0.25em] uppercase shadow-2xl text-center">
            6 in 1 Resin Art Masterclass
          </div>
        </div>

        {/* --- CONTINUOUS WAVING WORKSHOP ITEMS --- */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 h-[60px] items-center">
          {workshopItems.map((item, index) => (
            <div key={index} className="workshop-pill-wrapper flex items-end">
              <div
                className="px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-white/5 backdrop-blur-md text-sm md:text-base text-stone-700 dark:text-stone-300 origin-bottom whitespace-nowrap"
                style={{
                  animation: `pillWave 3.5s ease-in-out infinite alternate`,
                  animationDelay: `${index * 0.15}s`, // Creates the sequential neighbor-scaling wave
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* PREMIUM COLLAGE */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] bg-[#b89d63]/10 dark:bg-[#d6b86e]/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[120px] md:auto-rows-[140px] gap-4 md:gap-6 relative z-10">
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
                "rotate-[-3deg]",
                "rotate-[2deg]",
                "rotate-[-2deg]",
                "rotate-[3deg]",
                "rotate-[-2deg]",
                "rotate-[2deg]",
              ];

              return (
                <div
                  key={index}
                  className={`gsap-img-wrapper relative ${gridWrappers[index]}`}
                >
                  <div
                    className={`group absolute inset-0 overflow-hidden rounded-[2.4rem]
                    border border-white/40 dark:border-white/10
                    bg-white/70 dark:bg-white/[0.03]
                    backdrop-blur-xl
                    shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                    dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                    hover:scale-[1.03]
                    hover:rotate-0
                    hover:z-30
                    transition-all duration-700
                    ${rotations[index]}`}
                  >
                    {/* FRAME */}
                    <div className="absolute inset-0 rounded-[2.4rem] border border-white/50 dark:border-white/10 z-20 pointer-events-none" />

                    {/* GLOW EFFECT */}
                    <div className="absolute -inset-[40%] bg-gradient-to-r from-[#d7bb7d]/0 via-[#d7bb7d]/40 to-[#d7bb7d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-resin-glow mix-blend-overlay z-10 pointer-events-none" />

                    {/* IMAGE */}
                    <img
                      src={img}
                      alt={`Workshop ${index + 1}`}
                      loading="lazy"
                      draggable="false"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110 will-change-transform"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />

                    {/* LABEL */}
                    <div className="absolute bottom-5 left-5 z-30">
                      <div className="bg-white/85 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 dark:border-white/10 shadow-md">
                        <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase font-semibold text-stone-900 dark:text-white">
                          {workshopItems[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="gsap-feature-wrapper">
                <div className="h-full rounded-[2rem] border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-white/5 backdrop-blur-md p-7 hover:-translate-y-3 transition-transform duration-500 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-[#e8dcc1] dark:bg-[#1a1a1a] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#7d6231] dark:text-[#d6b86e]" />
                  </div>

                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="cta-card mt-24">
          <div className="rounded-[2.7rem] border border-stone-200 dark:border-stone-800 bg-gradient-to-br from-[#4d5a3c] to-[#2f3825] p-8 md:p-14 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-white/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="max-w-2xl">
                <p className="text-[#d8c08b] uppercase tracking-[0.3em] text-xs md:text-sm mb-5 font-bold">
                  Join Our Creative Community
                </p>

                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Discover the artist in you.
                </h3>

                <p className="mt-5 text-stone-200 leading-relaxed max-w-xl font-light">
                  Learn premium resin techniques with expert guidance and create
                  handcrafted decor pieces you can proudly take home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white text-stone-900 font-bold tracking-wider hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Register Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+917980605925"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-white/30 text-white font-bold tracking-wider hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
