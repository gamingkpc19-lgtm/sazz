import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Music, Award, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Our Story</h3>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                A Legacy of <br />
                <span className="text-gold">Culinary Excellence</span>
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed text-lg">
              Sazz Kitchen & Lounge was born out of a passion for exceptional food and a desire to create a space where luxury meets comfort. Located in Coimbatore, we have become a landmark for those who appreciate the finer things in life.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our journey began with a simple vision: to serve authentic flavors with a modern twist, all within an ambiance that inspires and relaxes. From our carefully curated menu to our premium lounge vibes, every detail is designed to provide an unforgettable experience.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 glass rounded-2xl space-y-2">
                <h4 className="text-gold font-bold text-3xl">5+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Years of Service</p>
              </div>
              <div className="p-6 glass rounded-2xl space-y-2">
                <h4 className="text-gold font-bold text-3xl">15k+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=1000"
                alt="Chef at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-white/80 italic text-sm">
                "We believe that every meal should be an experience, a memory that lingers long after the last bite."
              </p>
              <p className="text-gold font-bold mt-4 text-xs uppercase tracking-widest">— Executive Chef</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 bg-dark-soft rounded-3xl border border-white/5 space-y-6 hover:border-gold/30 transition-all">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
              <Utensils size={28} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Premium Dining</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              A meticulously crafted menu featuring the best of Asian, Continental, and Indian cuisines.
            </p>
          </div>
          <div className="p-10 bg-dark-soft rounded-3xl border border-white/5 space-y-6 hover:border-gold/30 transition-all">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
              <Users size={28} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Family Friendly</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              A welcoming atmosphere perfect for family gatherings, celebrations, and quiet dinners.
            </p>
          </div>
          <div className="p-10 bg-dark-soft rounded-3xl border border-white/5 space-y-6 hover:border-gold/30 transition-all">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
              <Music size={28} />
            </div>
            <h4 className="text-xl font-display font-bold text-white">Lounge Vibes</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium music, sophisticated lighting, and a vibe that sets the perfect mood for your evening.
            </p>
          </div>
        </div>

        {/* Interior Gallery Preview */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Ambiance</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The Sazz Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoNRT1QWAeiCuGFRpRldDuWool9PxRsDDZdCurC8sWQ-Ohak1HdhYBlYRRmAuRYAvPZ_XGVv2-_CXfMT1OjQS8l1_2QxXjT0kJ2AXVMdWW2N21wmZ_tWdi4DVbg0C_ENdez95sB3UEXfK_5=s1000',
              'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer-nv7cITipAOJxCKRROMiXdTtL3cCVAL5lQEYfbE-0lKeAj-gNSlVshpHSYC8o8zRoEoTw1z3WTA18YQpga-Qs0P6q1z1dS3s3GUSaN_XKWCSCy6UhjhwH2ptyMb8YGje7532Q-Q=s1000',
              'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerqude2tbEri3scBgYCEZg8gSuqvThBR7jRqMj-2WYVsJ3ETxW4AomqSnQiPt67szOfyvjqEt3gC8pqp5MSwat5Ge4NEQlCiK5Q0HluezJxqGpdhEGeWdBZxK6U71jJRASafZxLr-CXYnqX=s1000',
              'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepzhDWAQbySUV4GbfVouGlZ1Gdfe4PO3hGQXM-7jbVx0UXvcG7iNjwWVYDYtHoEJFUJb_GcZZ0MFYPWIQh8y0TLsbIrWkCY8KlXTDPGGwTF8pnPVJNd0Ei0X7S7AemeoaVcn0uoXAf0cAU=s1000'
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
              >
                <img src={img} alt="Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
