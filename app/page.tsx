"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart, Shield, Zap, Star } from "lucide-react";
import { FloatingWhatsApp } from "@dxkit-org/react-floating-whatsapp";

export default function LandingPage() {
  const zapLink = "https://wa.me/5511XXXXXXXXX?text=Mestre,%20preciso%20de%20uma%20consulta%20espiritual";

  return (
    <main className="relative overflow-hidden bg-mocha-900">
      {/* 1. HERO SECTION - A PRIMEIRA IMPRESSÃO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="absolute inset-0 z-0 bg-[url('/bg-stars.png')] opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold-light text-xs uppercase tracking-widest mb-10"
          >
            <Sparkles size={14} className="text-gold" />
            Atendimento Especializado Brasil & Portugal
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1]"
          >
            Reconquiste seu <span className="text-gold italic">Amor</span> e <br />
            Limpe seus <span className="text-gold italic">Caminhos</span>
          </motion.h1>

          <p className="text-mocha-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Mestre Reginaldo une a sabedoria dos antigos rituais com a discrição moderna para transformar sua vida sentimental e financeira.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => window.open(zapLink, "_blank")}
              className="group flex items-center gap-4 bg-gold hover:bg-gold-dark text-mocha-900 font-bold py-6 px-12 rounded-2xl transition-all gold-shadow transform hover:scale-105"
            >
              <MessageCircle size={24} />
              <span className="text-xl">Iniciar Consulta Gratuita</span>
            </button>
            <div className="flex items-center gap-3 text-mocha-300">
              <Shield size={18} />
              <span className="text-sm">Sigilo 100% Absoluto</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - O QUE O MESTRE FAZ */}
      <section className="py-32 bg-mocha-800/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Trabalhos de Alta Magia</h2>
            <div className="h-1 w-24 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[40px] text-center group transition-all hover:bg-white/10"
              >
                <div className="text-gold mb-6 mx-auto w-fit group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{s.title}</h3>
                <p className="text-mocha-200 font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF - DEPOIMENTOS */}
      <section className="py-32 bg-mocha-900">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20}/>)}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-10 max-w-3xl mx-auto">
            "Minha vida estava destruída após a separação. Com a ajuda do Mestre Reginaldo, em 21 dias ele voltou para casa arrependido. Hoje somos felizes."
          </h2>
          <p className="text-gold font-bold uppercase tracking-widest">— Maria Silva, Lisboa (PT)</p>
        </div>
      </section>

      {/* 4. FINAL CTA - ÚLTIMO GATILHO */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Não sofra mais sozinho.</h2>
          <p className="text-mocha-300 mb-12">A solução que você busca está a um clique de distância.</p>
          <button
            onClick={() => window.open(zapLink, "_blank")}
            className="bg-white/5 border border-white/10 hover:bg-gold hover:text-mocha-900 text-gold font-bold py-5 px-10 rounded-xl transition-all"
          >
            Chamar Mestre Reginaldo no WhatsApp
          </button>
        </div>
      </section>

      {/* WIDGET FLUTUANTE DE WHATSAPP */}
      <FloatingWhatsApp
        phoneNumber="5511XXXXXXXXX"
        accountName="Mestre Reginaldo"
        avatar="/avatar-mestre.jpg"
        statusMessage="Online agora"
        chatMessage="Olá! Sou o Mestre Reginaldo. Como posso te ajudar na sua caminhada hoje?"
        placeholder="Escreva sua mensagem..."
        darkMode={true}
        allowClickAway={true}
        notification={true}
        notificationDelay={10}
        className="z-50"
      />
    </main>
  );
}
