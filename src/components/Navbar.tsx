import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/atelierData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Aline! Gostaria de saber mais sobre as roupas infantis personalizadas do ateliê.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-55 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-rose-100/50'
          : 'bg-[#FCFBF9]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 shadow-inner group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-stone-900 block">
                Atelier Aline Schueng
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium block">
                Roupa Infantil Sob Medida
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700 text-sm">
            <a href="#inicio" className="hover:text-rose-600 transition-colors">
              Início
            </a>
            <a href="#modelos" className="hover:text-rose-600 transition-colors">
              Modelos Exclusivos
            </a>
            <a href="#como-funciona" className="hover:text-rose-600 transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="hover:text-rose-600 transition-colors">
              Sobre o Ateliê
            </a>
            <a href="#depoimentos" className="hover:text-rose-600 transition-colors">
              Depoimentos
            </a>
            <a href="#encomenda" className="hover:text-rose-600 transition-colors">
              Faça seu Pedido
            </a>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-full shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-rose-600 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-xl py-6 px-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 font-medium text-stone-800">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Início
            </a>
            <a
              href="#modelos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Modelos Exclusivos
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Como Funciona
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Sobre o Ateliê
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Depoimentos
            </a>
            <a
              href="#encomenda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-rose-600"
            >
              Faça seu Pedido
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-medium shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar com a Aline no WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
