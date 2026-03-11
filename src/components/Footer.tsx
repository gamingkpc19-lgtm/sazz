import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-soft border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-display font-bold text-gold tracking-wider">SAZZ</span>
              <span className="text-xs tracking-[0.3em] text-white/70 uppercase">Kitchen & Lounge</span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Experience the finest dining and premium lounge vibes in the heart of Coimbatore. Culinary excellence meets sophisticated ambiance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/reservation" className="hover:text-gold transition-colors">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>Back side of HP Petrol Bunk, 3/520/1-A, Ukkadam to Bypass Rd, Selvapuram, Coimbatore – 641001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>095855 55456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@sazzkitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-gold font-display text-xl mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center justify-between">
                <span>Monday - Sunday</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="pt-4 border-t border-white/5">
                <p className="text-xs italic text-white/40">
                  * Timings may vary on public holidays and special events.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Sazz Kitchen & Lounge. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
