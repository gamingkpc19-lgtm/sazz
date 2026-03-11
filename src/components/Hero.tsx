import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerqude2tbEri3scBgYCEZg8gSuqvThBR7jRqMj-2WYVsJ3ETxW4AomqSnQiPt67szOfyvjqEt3gC8pqp5MSwat5Ge4NEQlCiK5Q0HluezJxqGpdhEGeWdBZxK6U71jJRASafZxLr-CXYnqX=s2000"
          alt="Sazz Kitchen & Lounge Ambiance"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-white/80 text-sm tracking-widest uppercase">Rating 4.5 (1500+ Reviews)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
        >
          Sazz Kitchen <br />
          <span className="text-gold">& Lounge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light tracking-wide"
        >
          Experience Fine Dining & Premium Lounge Vibes in Coimbatore
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <Link to="/reservation" className="btn-premium flex items-center group">
            Reserve Table
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link to="/menu" className="btn-outline">
            View Menu
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-8 text-white/40 text-xs tracking-[0.2em] uppercase"
        >
          <span>Dine-in</span>
          <span className="w-1 h-1 bg-gold rounded-full"></span>
          <span>Drive-through</span>
          <span className="w-1 h-1 bg-gold rounded-full"></span>
          <span>No-contact delivery</span>
        </motion.div>
      </div>
    </section>
  );
}
