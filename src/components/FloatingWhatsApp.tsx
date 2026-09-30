import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/atelierData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Aline! Visitei o site do ateliê e gostaria de tirar dúvidas sobre roupas personalizadas.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip */}
      <div className="hidden sm:block bg-white text-stone-800 text-xs font-medium px-4 py-2 rounded-2xl shadow-lg border border-rose-100 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
        Fale com a Aline 👋
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 focus:outline-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
};
