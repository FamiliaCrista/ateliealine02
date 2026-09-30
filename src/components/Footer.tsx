import React from 'react';
import { Sparkles, MessageCircle, Instagram, Heart, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/atelierData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Aline! Gostaria de falar sobre uma encomenda no ateliê.'
  )}`;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-stone-800">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-rose-300 border border-rose-700/50">
                <Sparkles className="w-5 h-5 text-rose-400" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                Atelier Aline Schueng
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Roupas infantis personalizadas e sob medida. Criando peças exclusivas com alfaiataria artesanal e muito carinho para momentos especiais.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-rose-900 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-rose-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#modelos" className="hover:text-rose-400 transition-colors">Modelos Exclusivos</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-rose-400 transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-rose-400 transition-colors">Sobre o Ateliê</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-rose-400 transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4">Coleções</h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>Vestidos de Festa</li>
              <li>Batizado & Ceremonial</li>
              <li>Conjuntos & Passeio</li>
              <li>Enxoval & Recém-Nascido</li>
              <li>Daminhas & Pajens</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4">Atendimento</h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <span>Atendimento online para todo o Brasil e presencial com hora marcada.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Segunda a Sexta: 9h às 18h</span>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-xl text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar com Aline</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Atelier Aline Schueng. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" /> para momentos inesquecíveis.
          </p>
        </div>
      </div>
    </footer>
  );
};
