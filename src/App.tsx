import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModelsCatalog } from './components/ModelsCatalog';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { OrderCalculator } from './components/OrderCalculator';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-stone-800 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ModelsCatalog />
        <HowItWorks />
        <About />
        <Testimonials />
        <OrderCalculator />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
