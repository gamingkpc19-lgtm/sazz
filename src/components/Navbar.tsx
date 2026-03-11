import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Reservation', path: '/reservation' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-display font-bold text-gold tracking-wider">SAZZ</span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/70 uppercase">Kitchen & Lounge</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold font-semibold' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservation" className="btn-premium rounded-none text-xs">
            Reserve Table
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-t border-white/10 py-8 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg uppercase tracking-widest text-center',
                  location.pathname === link.path ? 'text-gold' : 'text-white/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/reservation" className="btn-premium text-center rounded-none">
              Reserve Table
            </Link>
            <div className="flex justify-center space-x-6 pt-4">
              <a href="tel:09585555456" className="text-white/70 hover:text-gold transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://wa.me/919585555456" target="_blank" rel="noreferrer" className="text-white/70 hover:text-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
