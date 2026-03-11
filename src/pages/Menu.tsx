import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Coffee, Beer, IceCream, Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: Utensils },
  { id: 'starters', name: 'Starters', icon: Utensils },
  { id: 'main', name: 'Main Course', icon: Utensils },
  { id: 'asian', name: 'Asian & Continental', icon: Utensils },
  { id: 'biryani', name: 'Biryani', icon: Utensils },
  { id: 'desserts', name: 'Desserts', icon: IceCream },
  { id: 'beverages', name: 'Beverages', icon: Coffee },
];

const menuItems = [
  {
    id: 1,
    name: 'Korean Fried Chicken',
    category: 'starters',
    price: '₹349',
    desc: 'Crispy chicken tossed in authentic spicy-sweet gochujang sauce.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 2,
    name: 'Nasi Goreng',
    category: 'asian',
    price: '₹389',
    desc: 'Indonesian fried rice served with chicken satay and fried egg.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 3,
    name: 'Chicken Tikka',
    category: 'starters',
    price: '₹329',
    desc: 'Succulent pieces of chicken marinated in yogurt and spices.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 4,
    name: 'Hariyali Paneer Tikka',
    category: 'starters',
    price: '₹299',
    desc: 'Paneer cubes marinated in a green herb and spice blend.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 5,
    name: 'Onion Crispy Rings',
    category: 'starters',
    price: '₹199',
    desc: 'Golden brown battered onion rings served with dip.',
    image: 'https://images.unsplash.com/photo-1639024471283-035188835118?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 6,
    name: 'Hyderabadi Chicken Biryani',
    category: 'biryani',
    price: '₹369',
    desc: 'Fragrant basmati rice cooked with tender chicken and aromatic spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    name: 'Paneer Butter Masala',
    category: 'main',
    price: '₹319',
    desc: 'Rich and creamy tomato-based gravy with soft paneer cubes.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    name: 'Sizzling Brownie',
    category: 'desserts',
    price: '₹249',
    desc: 'Hot chocolate brownie served with vanilla ice cream on a sizzler plate.',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    name: 'Virgin Mojito',
    category: 'beverages',
    price: '₹179',
    desc: 'Refreshing blend of lime, mint, and soda.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold tracking-[0.3em] uppercase text-sm font-semibold"
          >
            Exquisite Flavors
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-white"
          >
            Our Menu
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold mx-auto mt-6"
          ></motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-gold text-black border-gold shadow-lg shadow-gold/20' 
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-gold/50 hover:text-white'
              }`}
            >
              <cat.icon size={18} />
              <span className="text-sm font-medium uppercase tracking-wider">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-dark-soft border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Chef Special
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm italic">"{item.desc}"</p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-display font-bold text-white group-hover:text-gold transition-colors">{item.name}</h4>
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Menu Download CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-8">Want to see our full menu with all options?</p>
          <button className="btn-outline">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
