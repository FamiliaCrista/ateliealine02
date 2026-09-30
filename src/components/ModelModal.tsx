import React from 'react';
import { X, MessageCircle, CheckCircle2, Sparkles, Ruler } from 'lucide-react';
import { ClothingModel, WHATSAPP_NUMBER } from '../data/atelierData';
import { motion, AnimatePresence } from 'motion/react';

interface ModelModalProps {
  model: ClothingModel | null;
  onClose: () => void;
}

export const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  if (!model) return null;

  const whatsappMessage = `Olá Aline! Vi o modelo *${model.title}* (${model.age}) no site e gostaria de fazer uma versão personalizada. Pode me ajudar?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-stone-700 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-stone-100">
            <img
              src={model.image}
              alt={model.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {model.tag}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-700 text-xs font-medium uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feito Sob Encomenda</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                {model.title}
              </h2>
              <div className="flex items-center gap-2 text-stone-500 text-sm mb-4">
                <Ruler className="w-4 h-4 text-rose-600" />
                <span>Idade sugerida: <strong>{model.age}</strong> (ajustável sob medida)</span>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {model.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm mb-2">
                    Destaques da Peça:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {model.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm mb-2">
                    Tecidos e Acabamentos:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {model.fabrics.map((fabric, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action footer */}
            <div className="pt-6 border-t border-stone-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-2xl shadow-lg transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Quero uma personalizada igual</span>
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2">
                Aline responderá no WhatsApp para confirmar medidas, cores e prazos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
