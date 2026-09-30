import React from 'react';
import { Heart, Sparkles, Award, Scissors, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#FCFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-12 gap-4 relative">
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Aline Schueng no ateliê costurando roupa infantil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 flex flex-col gap-4 pt-12">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-rose-100">
                  <img
                    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400"
                    alt="Detalhes de costura e botões"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-rose-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center text-center">
                  <span className="font-serif text-3xl font-bold">+10 anos</span>
                  <span className="text-xs text-rose-200 uppercase tracking-widest mt-1">De Amor e Tradição</span>
                </div>
              </div>
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700">
                <Heart className="w-5 h-5 fill-rose-600 text-rose-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">100% Artesanal</p>
                <p className="text-[11px] text-stone-500">Com carinho em cada ponto</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>Nossa Essência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Feito à mão com afeto para vestir quem você mais ama
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
              Olá! Sou a <strong>Aline Schueng</strong>, fundadora e estilista à frente deste ateliê. Acredito que a infância é a fase mais mágica da vida e merece ser celebrada com roupas que unem elegância clássica, conforto absoluto e personalidade.
            </p>

            <p className="text-stone-600 text-base leading-relaxed mb-8">
              Cada peça que sai do nosso ateliê é pensada exclusivamente para o seu filho ou filha. Trabalhamos sob encomenda para garantir que o caimento seja perfeito e que cada detalhe — do botão de madrepérola ao bordado feito à mão — reflita o carinho que você tem pela sua família.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/60 shadow-xs">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Tecidos Nobres</h4>
                  <p className="text-xs text-stone-500">Linho puro, algodão egípcio e antialérgicos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/60 shadow-xs">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Ajuste Sob Medida</h4>
                  <p className="text-xs text-stone-500">Orientação personalizada para tirar medidas.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-serif italic text-xl text-rose-800">
                "Vestir com afeto é eternizar memórias."
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
