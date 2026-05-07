import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Diamond, Palette, Heart } from "lucide-react";
import { businessInfo } from '../data/products';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full font-sans overflow-hidden">
      {/* 1. MINIMALIST HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center mt-12">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-700 dark:text-amber-500 mb-8 font-medium animate-fade-in-up opacity-0">
            Thedecorarthome • Studio in Howrah
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-stone-900 dark:text-white leading-[1.1] mb-8 animate-fade-in-up delay-200 opacity-0">
            Crafting memories <br className="hidden md:block" /> into{" "}
            <span className="italic text-amber-700 dark:text-amber-500">
              timeless art.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl font-light leading-relaxed mb-12 animate-fade-in-up delay-400 opacity-0">
            Specializing in bespoke resin preservation and luxury home decor,
            meticulously handcrafted with natural woods, semi-precious stones,
            and vintage jewels.
          </p>

          <Link
            to="/showcase"
            className="group pb-1 border-b border-stone-400 hover:border-amber-600 transition-colors animate-fade-in-up delay-400 opacity-0 text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-500 uppercase tracking-widest text-sm"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* 2. THE STORY OF THE MAKER */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Artist Image (Mobile Optimized) */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden image-reveal bg-stone-100 dark:bg-stone-800">
                <img
                  src="dp.jpg"
                  alt="The Artist in her studio"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-2xl border border-amber-100 dark:border-amber-800/50 backdrop-blur-md">
                <p className="font-serif italic text-xl md:text-2xl text-amber-800 dark:text-amber-400">
                  "Every piece carries a piece of my soul."
                </p>
              </div>
            </div>

            {/* The Narrative */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500">
                The Maker
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white leading-tight">
                An artisan driven by{" "}
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
                  into every detail.
                </p>
                <p>
                  It's not just about home decor; it's about giving you a
                  personalized masterpiece that reflects your story, crafted
                  with an uncompromising dedication to artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HER SIGNATURE SKILLS */}
      <section className="py-24 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">
              The Craft
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white">
              Mastery in Every Medium
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Skill 1 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-serif font-medium text-stone-900 dark:text-white">
                Floral Preservation
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Delicate techniques to dry and immortalize wedding varmalas and
                sentimental blooms within crystal-clear resin blocks.
              </p>
            </div>

            {/* Skill 2 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Diamond className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-serif font-medium text-stone-900 dark:text-white">
                Jewels & Stones
              </h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Integrating semi-precious stones, vintage jewels, and crushed
                glass to create breathtaking, textured geode artworks.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4">
                <Palette className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-serif font-medium text-stone-900 dark:text-white">
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

      {/* 4. SELECTED MASTERPIECES (The Gallery Teaser) */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">The Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-white">Selected Works</h3>
            </div>
            <Link 
              to="/showcase" 
              className="text-sm tracking-widest uppercase border-b border-stone-300 hover:border-amber-600 pb-1 transition-colors text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500"
            >
              View Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Featured Art 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800 mb-6 image-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" 
                  alt="Varmala Preservation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  loading="lazy"
                />
              </div>
              <h4 className="text-2xl font-serif text-stone-900 dark:text-white mb-2">Eternal Varmala Block</h4>
              <p className="text-stone-500 dark:text-stone-400 font-light">Crystal Resin & 24k Gold Flakes</p>
            </div>

            {/* Featured Art 2 (Offset slightly for an editorial look) */}
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800 mb-6 image-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" 
                  alt="Geode Wall Clock" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  loading="lazy"
                />
              </div>
              <h4 className="text-2xl font-serif text-stone-900 dark:text-white mb-2">Midnight Geode Clock</h4>
              <p className="text-stone-500 dark:text-stone-400 font-light">Walnut Wood, Resin & Amethyst Stones</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE COMMISSION PROCESS (Builds Trust for Custom Orders) */}
      <section className="py-24 bg-[#FAFAFA] dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white">The Journey of a Custom Piece</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Decorative connecting line (Desktop only) */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-stone-200 dark:bg-stone-800 z-0"></div>

            {/* Step 01 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-16 h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-xl font-serif text-amber-700 dark:text-amber-500 mb-6 shadow-sm">
                01
              </span>
              <h4 className="text-xl font-serif text-stone-900 dark:text-white mb-4">Consultation</h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                We begin with a conversation about your vision, color palette, and the specific memories or flowers you wish to preserve.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-16 h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-xl font-serif text-amber-700 dark:text-amber-500 mb-6 shadow-sm">
                02
              </span>
              <h4 className="text-xl font-serif text-stone-900 dark:text-white mb-4">The Craftsmanship</h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Your piece undergoes a meticulous, multi-layered pouring and curing process in my Howrah studio, taking several weeks to perfect.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="w-16 h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center text-xl font-serif text-amber-700 dark:text-amber-500 mb-6 shadow-sm">
                03
              </span>
              <h4 className="text-xl font-serif text-stone-900 dark:text-white mb-4">The Reveal</h4>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                Carefully packaged and safely delivered to your doorstep, ready to become the focal point of your home for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM REELS (Auto-Playing Video Facades) */}
      <section className="py-24 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-4 animate-fade-in-up">Studio Diary</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-white animate-fade-in-up delay-200">Watch the Process</h3>
            </div>
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm tracking-widest uppercase border-b border-stone-300 hover:border-amber-600 pb-1 transition-colors text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-500 animate-fade-in-up delay-200"
            >
              <FaInstagram className="w-4 h-4" /> View All on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* REEL 1 */}
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="group relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-900 shadow-lg image-reveal block"
            >
              {/* Native HTML5 Video Player */}
              <video 
                src="/videos/reel-1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs md:text-sm text-center font-medium line-clamp-2 md:line-clamp-3 text-white/90">
                  Tap to view the reel on Instagram
                </p>
              </div>
            </a>

            {/* REEL 2 */}
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="group relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-900 shadow-lg image-reveal block md:mt-8"
            >
              <video 
                src="/videos/reel-2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs md:text-sm text-center font-medium line-clamp-2 md:line-clamp-3 text-white/90">
                  Tap to view the reel on Instagram
                </p>
              </div>
            </a>

            {/* REEL 3 */}
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="group relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-900 shadow-lg image-reveal block"
            >
              <video 
                src="/videos/reel-3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs md:text-sm text-center font-medium line-clamp-2 md:line-clamp-3 text-white/90">
                  Tap to view the reel on Instagram
                </p>
              </div>
            </a>

            {/* REEL 4 */}
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="group relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-900 shadow-lg image-reveal block md:mt-8"
            >
              <video 
                src="/videos/reel-4.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-xs md:text-sm text-center font-medium line-clamp-2 md:line-clamp-3 text-white/90">
                  Tap to view the reel on Instagram
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>
      
      

      {/* 6. ELEGANT CTA */}
      <section className="py-32 bg-stone-900 dark:bg-stone-950 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
            Ready to commission your personal masterpiece?
          </h2>
          <p className="text-stone-400 mb-12 text-lg font-light">
            Every creation is completely customizable in size, style, and
            finish. Connect with me directly to discuss your vision.
          </p>
          <a
            href="https://wa.me/917980605925"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-stone-900 hover:bg-amber-500 hover:text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
