"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart, ShieldCheck, Zap, Star, Lock } from "lucide-react";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

export default function LandingPage() {
  const zapLink = "https://wa.me/5511XXXXXXXXX?text=Mestre,%20preciso%20de%20ajuda%20urgente";

  const services =;

  return (
    <div className="min-h-screen selection:bg-gold selection:text-mocha-900">
      
      {/* 1. HERO SECTION - IMPACTO IMEDIATO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 justify-center text-gold-light text-sm tracking-[0.2em] mb-6"
          >
            <Sparkles size={16} /> O MAIOR ESPECIALISTA DO BRASIL E PORTUGAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif text-white mb-8 leading-tight"
          >
            Destino <span className="text-gold italic font-light">Transformado</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-mocha-200 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Mestre Reginaldo utiliza segredos ancestrais para resolver o que parece impossível. Recupere seu amor e sua paz agora.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => window.open(zapLink, "_blank")}
              className="group relative inline-flex items-center gap-4 bg-gold hover:bg-gold-dark text-mocha-900 font-bold py-6 px-12 rounded-full transition-all shadow-2xl shadow-gold/20 transform hover:scale-105"
            >
              <MessageCircle size={24} className="animate-bounce" />
              <span className="text-xl">FALAR COM O MESTRE AGORA</span>
            </button>
            <div className="flex items-center justify-center gap-6 mt-8 text-mocha-400 text-sm">
              <span className="flex items-center gap-1"><Lock size={14}/> Sigilo Total</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14}/> Resultados Reais</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - PROPOSTA DE VALOR */}
      <section className="py-32 px-6 bg-mocha-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[40px] transition-all hover:bg-white/5 cursor-pointer"
              >
                <div className="text-gold mb-6">{s.icon}</div>
                <span className="text-[10px] text-gold/60 tracking-widest mb-2 block">{s.tag}</span>
                <h3 className="text-2xl font-serif text-white mb-4">{s.title}</h3>
                <p className="text-mocha-300 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS - PROVA SOCIAL [9] */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center gap-1 mb-10 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white italic leading-snug mb-12">
            "Eu tinha perdido as esperanças no meu casamento, mas o Mestre Reginaldo me mostrou a luz. Hoje somos mais felizes do que nunca."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold italic">M</div>
            <div className="text-left">
              <p className="text-white font-bold">Marta S.</p>
              <p className="text-mocha-400 text-sm">Lisboa, Portugal</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - O GATILHO FINAL */}
      <section className="py-40 px-6 text-center bg-gradient-to-t from-black/50 to-transparent">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">O tempo está correndo. <br/> <span className="text-gold">Sua felicidade não pode esperar.</span></h2>
        <button
          onClick={() => window.open(zapLink, "_blank")}
          className="bg-white text-mocha-900 font-bold py-6 px-16 rounded-full text-xl hover:bg-gold transition-colors"
        >
          QUERO MINHA CONSULTA AGORA
        </button>
      </section>

      {/* WHATSAPP WIDGET INTELIGENTE [8] */}
      <FloatingWhatsApp
        phoneNumber="5511XXXXXXXXX"
        accountName="Mestre Reginaldo"
        avatar="/avatar-mestre.jpg"
        statusMessage="Online e pronto para te ouvir"
        chatMessage="Seja bem-vindo(a). Sou o Mestre Reginaldo. Qual aflição te trouxe até aqui hoje?"
        placeholder="Escreva sua mensagem..."
        darkMode={true}
        allowClickAway={true}
        notification={true}
        className="z-50"
      />
    </div>
  );
}
