import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      number_of_guests: formData.get('guests'),
      date: formData.get('date'),
      time: formData.get('time'),
      special_request: formData.get('requests'),
      source: 'Sazz Kitchen Website',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send reservation request');
      }

      e.currentTarget.reset();
      setSubmitted(true);
    } catch (err) {
      console.error('Reservation error:', err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 bg-dark min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-12 rounded-3xl text-center space-y-6"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center text-gold mx-auto">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-display font-bold text-white">Reservation Received!</h2>
          <p className="text-white/60">
            Thank you for choosing Sazz Kitchen & Lounge. We have received your request and will confirm your table shortly via phone or email.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-premium w-full"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-semibold">Book a Table</h3>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                Reserve Your <br />
                <span className="text-gold">Experience</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg max-w-md">
                Secure your spot for an evening of culinary delight. For parties larger than 10, please call us directly.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Opening Hours</h4>
                  <p className="text-white/40">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Group Bookings</h4>
                  <p className="text-white/40">Special arrangements for birthdays and corporate events.</p>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-2xl border-gold/20">
              <p className="text-gold font-medium italic">
                "A table at Sazz is a ticket to a world of refined tastes and premium vibes."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-soft p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Full Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Phone Number</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="095855 55456"
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Guests</label>
                  <select 
                    name="guests"
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'].map(num => (
                      <option key={num} value={num}>{num} Persons</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Date</label>
                  <input
                    required
                    name="date"
                    type="date"
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Time</label>
                  <input
                    required
                    name="time"
                    type="time"
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-semibold">Special Requests</label>
                <textarea
                  rows={4}
                  name="requests"
                  placeholder="Any allergies or special occasions?"
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:border-gold outline-none transition-all resize-none"
                ></textarea>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <button
                disabled={loading}
                type="submit"
                className="btn-premium w-full flex items-center justify-center space-x-3 h-14"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Calendar size={20} />
                    <span>Confirm Reservation</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">
                By clicking confirm, you agree to our booking terms.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
