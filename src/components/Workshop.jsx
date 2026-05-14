import React from "react";
import { MessageCircle, PhoneCall, Calendar, MapPin, Sparkles } from "lucide-react";
import { businessInfo } from "../data/products";

export default function Workshop() {
  // Custom WhatsApp Message tailored exactly for workshop inquiries
  const whatsappMessage = "Hi Thedecorarthome! 🎨\n\nI am interested in joining your offline Resin Art Masterclass. Could you please share the upcoming batch dates, curriculum details, and registration fees?";
  const waLink = `https://wa.me/${businessInfo.phone}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Direct Call Link
  const callLink = `tel:+${businessInfo.phone}`;

  return (
    <section className="py-32 bg-white dark:bg-[#050505] border-t border-stone-200 dark:border-stone-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="w-full lg:w-1/2 relative group">
            <div 
              className="aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 dark:shadow-black/50 relative select-none border border-stone-100 dark:border-stone-800" 
              onContextMenu={e => e.preventDefault()}
            >
              {/* Feel free to change this image to a real photo of you teaching! */}
              <img 
                src="/table-piece-1.jpeg" 
                alt="Resin Art Workshop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none"
                loading="lazy"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full flex items-center gap-2 text-white shadow-lg pointer-events-none">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold tracking-widest uppercase">Beginner Friendly</span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none">
                <h4 className="text-2xl font-serif font-bold mb-2">Hands-on Experience</h4>
                <p className="text-sm text-white/80 font-light leading-relaxed">All raw materials, safety gear, and step-by-step guidance provided by the artist.</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & BUTTONS --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm tracking-[0.3em] uppercase text-amber-600 dark:text-amber-500 mb-4 font-bold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-600 dark:bg-amber-500"></span>
              Offline Masterclass
            </h2>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-white leading-tight mb-6">
              Learn the Art of <br />
              <span className="italic text-amber-700 dark:text-amber-500 drop-shadow-sm">Resin Pouring.</span>
            </h3>

            <p className="text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed mb-10">
              Step into our studio and discover the mesmerizing world of fluid art. Whether you want to preserve your own varmala, craft luxury geode clocks, or simply explore a new creative outlet, our exclusive workshops are designed to guide you from the absolute basics to mastery.
            </p>

            {/* Info Badges */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-center gap-4 text-stone-700 dark:text-stone-300">
                <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">Weekend Batches</h5>
                  <p className="text-xs font-light mt-1">Flexible timings available</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-stone-700 dark:text-stone-300">
                <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">Studio Location</h5>
                  <p className="text-xs font-light mt-1">Liluah, Howrah</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all shadow-xl hover:shadow-[#25D366]/20 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>

              <a
                href={callLink}
                className="flex-1 flex items-center justify-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 px-8 py-4 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all shadow-xl hover:shadow-stone-900/10 dark:hover:shadow-white/10 hover:-translate-y-1 border border-stone-800 dark:border-stone-200"
              >
                <PhoneCall className="w-4 h-4" />
                Call Directly
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}