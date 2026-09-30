import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/atelierData';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-[#FCFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Depoimentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            O que as mamães dizem
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Histórias reais de carinho, confiança e momentos inesquecíveis vestidos pelo nosso ateliê.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto relative bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-rose-100/60">
          <div className="absolute top-6 right-8 text-rose-200">
            <Quote className="w-16 h-16 opacity-50" />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-rose-100">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="font-serif italic text-lg sm:text-xl text-stone-800 mb-6 leading-relaxed">
                    "{current.content}"
                  </p>

                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-lg">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-rose-700 font-medium">
                      {current.role} • <span className="text-stone-500">Filho(a) de {current.childAge}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-rose-600' : 'w-2 bg-stone-300'
                    }`}
                    aria-label={`Depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-800 flex items-center justify-center transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-800 flex items-center justify-center transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
