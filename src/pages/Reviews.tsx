import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'food', url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800', title: 'Korean Fried Chicken' },
  { id: 2, type: 'ambiance', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', title: 'Main Lounge' },
  { id: 3, type: 'food', url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800', title: 'Nasi Goreng' },
  { id: 4, type: 'events', url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', title: 'Weekend Party' },
  { id: 5, type: 'food', url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800', title: 'Chicken Tikka' },
  { id: 6, type: 'ambiance', url: 'https://images.unsplash.com/photo-1550966842-2862ba996344?auto=format&fit=crop&q=80&w=800', title: 'Private Dining' },
  { id: 7, type: 'food', url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800', title: 'Hariyali Paneer' },
  { id: 8, type: 'events', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', title: 'Live Music' },
  { id: 9, type: 'ambiance', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', title: 'Bar Counter' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Visual Journey</h3>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'food', 'ambiance', 'events'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 border ${
                filter === f 
                  ? 'bg-gold text-black border-gold' 
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-gold/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
                  <Maximize2 className="text-gold" size={32} />
                  <span className="text-white text-sm uppercase tracking-widest font-bold">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
                <X size={40} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
