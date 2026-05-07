import React from 'react';
import { businessInfo } from '../data/products';
import { MapPin, Phone, Clock } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-4">Get in Touch</h2>
        <p className="text-stone-600 dark:text-stone-400">Visit our studio in Howrah or drop a message to discuss your custom art requirements.</p>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 dark:border-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8 text-stone-700 dark:text-stone-300">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-900 dark:text-white mb-1">Studio Address</h4>
                <p>{businessInfo.address}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-900 dark:text-white mb-1">Phone & WhatsApp</h4>
                <p>+91 {businessInfo.displayPhone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-900 dark:text-white mb-1">Working Hours</h4>
                <p>Open 24 Hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaInstagram className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0" />
              <div>
                <h4 className="font-bold text-stone-900 dark:text-white mb-1">Social Media</h4>
                <a href={businessInfo.instagram} target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">
                  View our recent reels
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          {/* Functional Google Maps Embed */}
          <div className="w-full bg-stone-200 dark:bg-stone-800 rounded-2xl flex items-center justify-center border border-stone-300 dark:border-stone-700 overflow-hidden shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472096.3883782315!2d87.0120817954813!3d22.41950010601519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d296d40a7ef%3A0x35b3a57172d0f197!2sThedecorarthome%20%7C%20Resin%20art%20%F0%9F%8E%A8%20Kolkata!5e0!3m2!1sen!2sin!4v1778195054378!5m2!1sen!2sin" 
              className="w-full h-full min-h-[300px] md:min-h-[400px]"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Thedecorarthome Studio Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}