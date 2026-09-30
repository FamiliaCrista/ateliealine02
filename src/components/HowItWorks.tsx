import React from 'react';
import { STEPS, WHATSAPP_NUMBER } from '../data/atelierData';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Aline! Gostaria de iniciar uma encomenda personalizada para o meu filho(a).'
  )}`;

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Como funciona a encomenda
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Criar uma peça exclusiva com a Aline é um processo leve, carinhoso e totalmente guiado. Veja como é fácil:
          </p>
        </motion.div>

        {/* Steps Grid with staggered whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-[#FCFBF9] p-6 rounded-3xl border border-rose-100/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-rose-300 group-hover:text-rose-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 text-xs font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/40 flex items-center text-xs font-semibold text-rose-700">
                <span>Passo {idx + 1} de 5</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action card with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-rose-50 via-amber-50/50 to-rose-50 p-8 sm:p-12 rounded-3xl border border-rose-200/60 shadow-md text-center max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Pronta para criar uma peça única para o seu pequeno?
          </h3>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Clique no botão abaixo para conversar diretamente com a Aline pelo WhatsApp e dar o primeiro passo.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-base"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Iniciar Atendimento no WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
