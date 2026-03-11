import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Star, Quote, ArrowRight, Utensils, Users, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const popularDishes = [
  {
    name: 'Korean Fried Chicken',
    price: '₹349',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
    desc: 'Crispy chicken tossed in authentic spicy-sweet gochujang sauce.'
  },
  {
    name: 'Nasi Goreng',
    price: '₹389',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    desc: 'Indonesian fried rice served with chicken satay and fried egg.'
  },
  {
    name: 'Chicken Tikka',
    price: '₹329',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    desc: 'Succulent pieces of chicken marinated in yogurt and spices.'
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Local Guide",
    text: "Beautiful ambiance with big screen and amazing lighting. The food quality is top-notch.",
    rating: 5
  },
  {
    name: "Priya Nair",
    role: "Food Blogger",
    text: "Excellent food and service. Perfect place for family gatherings and weekend vibes.",
    rating: 5
  },
  {
    name: "Arun Kumar",
    role: "Regular Customer",
    text: "The best lounge experience in Coimbatore. Their Asian cuisine is a must-try!",
    rating: 4
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-dark relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Our Story</h3>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  Crafting Culinary <br />
                  <span className="text-gold">Masterpieces</span>
                </h2>
              </div>
              <p className="text-white/60 leading-relaxed text-lg">
                Sazz Kitchen & Lounge is more than just a restaurant; it's a celebration of flavors and ambiance. Located in the heart of Coimbatore, we offer a unique blend of fine dining and premium lounge vibes.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Utensils size={32} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">Fine Dining</h4>
                    <p className="text-white/40 text-sm">Exquisite Cuisine</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Music size={32} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold">Lounge Vibes</h4>
                    <p className="text-white/40 text-sm">Premium Music</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-outline inline-flex items-center group">
                Discover More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-24 bg-dark-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Chef's Selection</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Popular Dishes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-dark border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-display font-bold text-white group-hover:text-gold transition-colors">{dish.name}</h4>
                    <span className="text-gold font-bold">{dish.price}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{dish.desc}</p>
                  <Link to="/menu" className="text-gold text-xs uppercase tracking-widest font-bold flex items-center group/link">
                    View in Menu
                    <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Quote size={400} className="absolute -top-20 -left-20 text-gold" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-10 rounded-3xl space-y-6"
              >
                <div className="flex text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80 italic leading-relaxed">"{item.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.name}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-dark-soft border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Follow Us</h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">@sazz_kitchen</h2>
            </div>
            <a href="#" className="btn-outline flex items-center group">
              Follow on Instagram
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400'
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden border border-white/5"
              >
                <img src={img} alt="Instagram Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black">Ready for an Unforgettable <br /> Dining Experience?</h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto font-medium">
            Join us at Sazz Kitchen & Lounge for a night of exquisite flavors and premium ambiance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservation" className="px-10 py-4 bg-black text-gold font-bold uppercase tracking-widest hover:bg-black/90 transition-all">
              Reserve Your Table
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-gold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
