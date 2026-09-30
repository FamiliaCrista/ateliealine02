import React, { useState } from 'react';
import { CLOTHING_MODELS, CATEGORIES, ClothingModel, WHATSAPP_NUMBER } from '../data/atelierData';
import { ModelModal } from './ModelModal';
import { MessageCircle, Sparkles, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ModelsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [activeModalModel, setActiveModalModel] = useState<ClothingModel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredModels = selectedCategory === 'todos'
    ? CLOTHING_MODELS
    : CLOTHING_MODELS.filter(m => m.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredModels.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredModels.length) % filteredModels.length);
  };

  return (
    <section id="modelos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Portfólio Exclusivo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Modelos já criados
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Inspire-se nas peças exclusivas que já saíram do nosso ateliê. Cada modelo pode ser adaptado com as cores, tecidos e medidas que você desejar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rose-700 text-white shadow-md'
                  : 'bg-stone-100 hover:bg-rose-50 text-stone-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Carousel / Slider for Mobile & Desktop */}
        <div className="relative mb-16 bg-[#FCFBF9] p-6 sm:p-10 rounded-3xl border border-rose-100/60 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-700 font-bold block">Destaque do Ateliê</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">Destaques em Destaque</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {filteredModels.length > 0 && (() => {
              const current = filteredModels[currentIndex % filteredModels.length];
              const whatsappMsg = `Olá Aline! Vi o modelo *${current.title}* (${current.age}) no site e gostaria de fazer uma versão personalizada. Pode me ajudar?`;
              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <>
                  <motion.div
                    key={current.id + '-img'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-stone-200 relative group cursor-pointer"
                    onClick={() => setActiveModalModel(current)}
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {current.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-stone-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                        <Eye className="w-4 h-4" /> Ver Detalhes
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    key={current.id + '-content'}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-6 flex flex-col justify-center"
                  >
                    <span className="text-xs uppercase tracking-widest text-rose-700 font-semibold mb-2">
                      {current.age}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                      {current.title}
                    </h4>
                    <p className="text-stone-600 text-base leading-relaxed mb-6">
                      {current.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {current.fabrics.map((fabric, idx) => (
                        <span key={idx} className="bg-white border border-stone-200 text-stone-700 text-xs px-3 py-1 rounded-full font-medium">
                          {fabric}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all text-sm"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Quero uma personalizada igual</span>
                      </a>
                      <button
                        onClick={() => setActiveModalModel(current)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-stone-800 border border-rose-200 font-medium px-6 py-3 rounded-xl transition-all text-sm"
                      >
                        <Eye className="w-4 h-4 text-rose-600" />
                        <span>Ver detalhes</span>
                      </button>
                    </div>
                  </motion.div>
                </>
              );
            })()}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filteredModels.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex % filteredModels.length === idx ? 'w-8 bg-rose-600' : 'w-2 bg-stone-300'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of All Filtered Models */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredModels.map((item) => {
            const whatsappMsg = `Olá Aline! Vi o modelo *${item.title}* (${item.age}) no site e gostaria de fazer uma versão personalizada. Pode me ajudar?`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FCFBF9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-200/60 flex flex-col group"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => setActiveModalModel(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-rose-600/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                      {item.age}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-stone-900 px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Ver Detalhes
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3
                      onClick={() => setActiveModalModel(item)}
                      className="font-serif text-lg font-bold text-stone-900 mb-1 cursor-pointer hover:text-rose-700 transition-colors"
                    >
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalModel(item)}
                      className="text-xs text-stone-700 font-semibold hover:text-rose-700 underline underline-offset-4"
                    >
                      Detalhes
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Quero Igual</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Model Detail Modal */}
      <ModelModal
        model={activeModalModel}
        onClose={() => setActiveModalModel(null)}
      />
    </section>
  );
};
