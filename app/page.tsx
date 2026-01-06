"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart, ShieldCheck, Zap, Star } from "lucide-react";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

export default function LandingPage() {
  const zapNumber = "5511XXXXXXXXX"; // TROQUE PELO SEU NÚMERO
  const zapLink = `https://wa.me/${zapNumber}?text=Mestre,%20vi%20seu%20site%20e%20preciso%20de%20ajuda%20urgente.`;

  const services =;

  return (
    <main className="relative min-h-screen bg-mocha-900">
      {/* 1. HERO - IMPACTO VISUAL */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-mocha-800/40 to-transparent" />
        
        <div className="z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-gold tracking-[0.5em] text-[10px] font-bold mb-8 uppercase"
          >
            A Maior Autoridade Espiritual do Brasil e Portugal
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-9xl font-serif mb-10 leading-tight text-white"
          >
            Sua Vida <br />
            <span className="text-gold italic font-light">Transformada</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <button 
              onClick={() => window.open(zapLink, "_blank")}
              className="bg-gold hover:bg-gold-dark text-mocha-900 font-black py-6 px-14 rounded-full text-xl gold-glow transition-all transform hover:scale-110 active:scale-95 flex items-center gap-4 mx-auto"
            >
              <MessageCircle size={28} className="animate-pulse" />
              QUERO MINHA CONSULTA AGORA
            </button>
            <p className="mt-6 text-mocha-300 text-sm font-light">Atendimento Imediato • Sigilo Absoluto • Resultados Reais</p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVIÇOS - GLASSMORPHISM CARDS  */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -15, backgroundColor: "rgba(255,255,255,0.06)" }}
              className="glass p-12 rounded-[50px] text-center border border-white/5 transition-all"
            >
              <div className="text-gold mb-8 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
              <p className="text-mocha-200 font-light text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROVA SOCIAL [3, 4] */}
      <section className="py-24 text-center px-6">
        <div className="flex justify-center gap-2 text-gold mb-8">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
        </div>
        <h2 className="text-3xl md:text-5xl italic max-w-4xl mx-auto mb-10 leading-snug font-light text-mocha-100">
          "Em menos de 21 dias, recuperei o amor que achei ter perdido e meus caminhos financeiros se abriram de forma milagrosa. Gratidão, Mestre!"
        </h2>
        <p className="text-gold font-bold tracking-widest">— Maria João, Lisboa (PT)</p>
      </section>

      {/* 4. WHATSAPP FLOATING WIDGET  */}
      <FloatingWhatsApp
        phoneNumber={zapNumber}
        accountName="Mestre Reginaldo"
        avatar="/avatar-mestre.jpg"
        statusMessage="Online agora"
        chatMessage="Seja bem-vindo(a). Sou o Mestre Reginaldo. Como posso guiar sua jornada hoje?"
        placeholder="Escreva sua mensagem..."
        darkMode={true}
        allowClickAway={true}
        notification={true}
        className="z-50"
      />
    </main>
  );
}
