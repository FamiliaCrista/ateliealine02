import React from 'react';
import { MessageCircle, Heart, Sparkles, ShieldCheck, Scissors } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/atelierData';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Aline! Gostaria de fazer uma encomenda de roupa infantil personalizada.'
  )}`;

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-rose-50/60 via-[#FCFBF9] to-stone-50">
      {/* Background decorative soft blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>Alta costura infantil artesanal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.15] mb-6">
              Roupas infantis personalizadas, <span className="text-rose-700 italic font-normal">feitas com amor</span> e sob medida
            </h1>

            <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Cada peça é única, criada especialmente para o seu pequeno brilhar nos momentos mais inesquecíveis da infância.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Faça sua encomenda pelo WhatsApp</span>
              </a>

              <a
                href="#modelos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-stone-800 border border-rose-200/80 font-medium px-6 py-4 rounded-full transition-all text-base"
              >
                <span>Ver Modelos Exclusivos</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/60">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold text-lg font-serif">
                  <Scissors className="w-4 h-4" /> 100%
                </div>
                <span className="text-xs text-stone-500 font-medium">Sob Encomenda</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold text-lg font-serif">
                  <Heart className="w-4 h-4 fill-rose-600 text-rose-600" /> Carinho
                </div>
                <span className="text-xs text-stone-500 font-medium">Bordado à Mão</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold text-lg font-serif">
                  <ShieldCheck className="w-4 h-4" /> Tecidos
                </div>
                <span className="text-xs text-stone-500 font-medium">Antialérgicos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Grid Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main big image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800"
                  alt="Vestido infantil artesanal Atelier Aline Schueng"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider bg-rose-600/90 px-2.5 py-1 rounded-full font-medium">
                      Exclusivo
                    </span>
                    <h3 className="font-serif text-xl font-bold mt-2">Coleção Festas & Batizados</h3>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-rose-100 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">Atendimento 1 a 1</p>
                    <p className="text-[11px] text-stone-500">Tire dúvidas direto com a Aline</p>
                  </div>
                </div>
              </motion.div>

              {/* Small decorative floating image */}
              <div className="absolute -top-6 -right-6 z-0 w-36 h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400"
                  alt="Detalhe costura infantil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
