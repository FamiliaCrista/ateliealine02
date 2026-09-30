import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/atelierData';
import { MessageCircle, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const OrderCalculator: React.FC = () => {
  const [category, setCategory] = useState('Vestido de Festa');
  const [age, setAge] = useState('2 anos');
  const [occasion, setOccasion] = useState('Aniversário');
  const [notes, setNotes] = useState('');

  const whatsappMessage = `Olá Aline! Gostaria de encomendar uma peça personalizada.
• Tipo: ${category}
• Idade/Tamanho: ${age}
• Ocasião: ${occasion}
${notes ? `• Detalhes desejados: ${notes}` : ''}
Pode me orientar sobre valores e prazos?`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="encomenda" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/60 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Orçamento Rápido</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Monte seu pedido ideal
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Selecione as preferências abaixo para gerar sua mensagem personalizada e falar diretamente com a Aline no WhatsApp.
          </p>
        </div>

        {/* Builder Box */}
        <div className="max-w-3xl mx-auto bg-[#FCFBF9] p-8 sm:p-12 rounded-3xl shadow-xl border border-rose-100">
          <div className="space-y-6">
            
            {/* Category selection */}
            <div>
              <label className="block font-serif font-bold text-stone-900 text-sm mb-2">
                1. O que você deseja encomendar?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Vestido de Festa', 'Conjunto / Passeio', 'Roupa de Batizado', 'Saída de Maternidade'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                      category === item
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Age selection */}
            <div>
              <label className="block font-serif font-bold text-stone-900 text-sm mb-2">
                2. Qual a idade ou tamanho aproximado da criança?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Recém-nascido (0-3m)', '1 a 2 anos', '3 a 5 anos', '6 a 10 anos'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setAge(item)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                      age === item
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion selection */}
            <div>
              <label className="block font-serif font-bold text-stone-900 text-sm mb-2">
                3. Qual é a ocasião especial?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Aniversário / Festa', 'Batizado', 'Casamento / Daminha', 'Passeio / Dia a Dia'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setOccasion(item)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${
                      occasion === item
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block font-serif font-bold text-stone-900 text-sm mb-2">
                4. Detalhes, cores ou observações (opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Gostaria em tons de rosa bebê, com laço nas costas e manga bufante..."
                rows={3}
                className="w-full rounded-xl border border-stone-200 p-4 text-sm text-stone-800 bg-white focus:outline-none focus:border-rose-400"
              />
            </div>

            {/* Preview Message Box */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                Prévia da mensagem que será enviada:
              </span>
              <p className="font-mono text-xs text-stone-600 whitespace-pre-line bg-stone-50 p-3 rounded-xl border border-stone-100">
                {whatsappMessage}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Pedido Personalizado no WhatsApp</span>
                <Send className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-stone-400 mt-3">
                O WhatsApp abrirá instantaneamente com sua mensagem pronta para a Aline.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
