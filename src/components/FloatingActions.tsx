import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919585555456"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all"
        title="Order on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/reservation"
          className="w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-gold-light transition-all"
          title="Reserve Table"
        >
          <Calendar size={28} />
        </Link>
      </motion.div>
    </div>
  );
}
