import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Local Guide",
    text: "Beautiful ambiance with big screen and amazing lighting. The food quality is top-notch. Perfect for weekend vibes.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Food Blogger",
    text: "Excellent food and service. Perfect place for family gatherings. Their Korean Fried Chicken is to die for!",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Regular Customer",
    text: "The best lounge experience in Coimbatore. Their Asian cuisine is a must-try! Staff is very professional.",
    rating: 4,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Verified Guest",
    text: "Great place for birthday celebrations. The decor is premium and the music selection is fantastic.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Local Guide",
    text: "Amazing food variety. The Nasi Goreng was authentic and flavorful. Highly recommend this place.",
    rating: 5,
    date: "5 days ago"
  },
  {
    id: 6,
    name: "Ananya Das",
    role: "Verified Guest",
    text: "A bit crowded on weekends, but the wait is worth it. The ambiance is unmatched in the city.",
    rating: 4,
    date: "1 week ago"
  }
];

export default function Reviews() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Guest Experiences</h3>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">Reviews & Ratings</h2>
          
          <div className="flex flex-col items-center space-y-4 pt-6">
            <div className="flex items-center space-x-4">
              <span className="text-6xl font-display font-bold text-white">4.5</span>
              <div className="flex flex-col items-start">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-white/40 text-sm">Based on 1500+ Reviews</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gold/80 text-xs uppercase tracking-widest font-bold">
              <CheckCircle size={14} />
              <span>Google Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-3xl space-y-6 relative group hover:border-gold/30 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors" size={60} />
              
              <div className="flex text-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/80 italic leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
                <span className="text-white/20 text-[10px] uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write a Review CTA */}
        <div className="mt-20 text-center space-y-8">
          <p className="text-white/60">Had a great time at Sazz? Share your experience with us!</p>
          <button className="btn-outline">
            Write a Google Review
          </button>
        </div>
      </div>
    </div>
  );
}
