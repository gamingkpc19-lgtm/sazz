import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Get in Touch</h3>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">Contact Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-10 rounded-3xl text-center space-y-6 group hover:border-gold/30 transition-all"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto group-hover:bg-gold group-hover:text-black transition-all">
              <MapPin size={32} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Our Location</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Back side of HP Petrol Bunk, 3/520/1-A, Ukkadam to Bypass Rd, Selvapuram, Coimbatore – 641001
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Get Directions <ExternalLink size={14} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-10 rounded-3xl text-center space-y-6 group hover:border-gold/30 transition-all"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto group-hover:bg-gold group-hover:text-black transition-all">
              <Phone size={32} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Call or WhatsApp</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              For reservations, orders, or inquiries, feel free to reach out to us anytime.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="tel:09585555456" className="text-white font-bold text-lg hover:text-gold transition-colors">095855 55456</a>
              <a href="https://wa.me/919585555456" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center text-gold text-xs font-bold uppercase tracking-widest hover:underline">
                Chat on WhatsApp <MessageCircle size={14} className="ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-3xl text-center space-y-6 group hover:border-gold/30 transition-all"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto group-hover:bg-gold group-hover:text-black transition-all">
              <Clock size={32} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Opening Hours</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              We are open every day to serve you the best culinary experience.
            </p>
            <div className="space-y-1">
              <p className="text-white font-bold">Mon - Sun</p>
              <p className="text-gold">11:00 AM - 11:00 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Map and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.47244970631!2d76.9535!3d10.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f974061%3A0x27d99259482627bc!2sSazz%20Kitchen%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-soft p-10 rounded-3xl border border-white/5"
          >
            <h4 className="text-2xl font-display font-bold text-white mb-8">Send us a Message</h4>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="btn-premium w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
