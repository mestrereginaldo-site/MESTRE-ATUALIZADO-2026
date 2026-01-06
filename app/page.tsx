"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, Heart, ShieldCheck, Zap, Star, X, Send } from "lucide-react";

export default function LandingPage() {
  const zapNumber = "5511XXXXXXXXX"; // Substitua pelo seu número real
  const zapLink = `https://wa.me/${zapNumber}?text=Mestre,%20preciso%20de%20ajuda%20espiritual%20urgente`;
  const [isChatOpen, setIsChatOpen] = useState(false);

  // LISTA DE SERVIÇOS - CORRIGIDA
  const services =;

  return (
    <main className="relative min-h-screen bg-mocha-900 selection:bg-gold selection:text-mocha-900">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-mocha-800/40 to-transparent" />
        
        <div className="z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-gold tracking-[0.5em] text-[10px] font-bold mb-8 uppercase"
          >
            BRASIL • PORTUGAL • EUROPA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-9xl font-serif mb-10 leading-tight text-white"
          >
            Seu Destino <br />
            <span className="text-gold italic font-light font-serif">Transformado</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-gold hover:bg-gold-dark text-mocha-900 font-black py-6 px-14 rounded-full text-xl gold-glow transition-all transform hover:scale-110 flex items-center gap-4 mx-auto"
            >
              <MessageCircle size={28} className="animate-bounce" />
              QUERO MINHA CONSULTA
            </button>
            <p className="mt-6 text-mocha-300 text-sm font-light">
              Mestre Reginaldo: 30 anos de sabedoria transformando vidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div 
              key={i} whileHover={{ y: -15 }}
              className="glass p-12 rounded-[50px] text-center border border-white/5 transition-all"
            >
              <div className="text-gold mb-8 flex justify-center">{item.icon}</div>
              <span className="text-[10px] uppercase text-gold/60 tracking-widest mb-2 block">{item.tag}</span>
              <h3 className="text-2xl font-bold mb-6 text-white font-serif">{item.title}</h3>
              <p className="text-mocha-200 font-light text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 text-center px-6 bg-mocha-800/20">
        <div className="flex justify-center gap-2 text-gold mb-8">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
        </div>
        <h2 className="text-3xl md:text-5xl italic max-w-4xl mx-auto mb-10 font-light text-mocha-100 font-serif leading-snug">
          "Recuperei o amor que achei ter perdido para sempre. Meus caminhos financeiros se abriram e hoje tenho paz. Gratidão, Mestre."
        </h2>
        <p className="text-gold font-bold tracking-widest uppercase">— Maria João, Lisboa (PT)</p>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <h2 className="text-white text-3xl font-serif mb-8">Sua felicidade não pode esperar.</h2>
        <button 
          onClick={() => window.open(zapLink, "_blank")}
          className="text-gold border border-gold/30 hover:bg-gold hover:text-mocha-900 py-4 px-10 rounded-full transition-all"
        >
          Falar no WhatsApp agora
        </button>
      </footer>

      {/* CUSTOM WHATSAPP WIDGET */}
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="mb-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden text-black"
            >
              <div className="bg-[#075e54] p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">MR</div>
                  <div>
                    <p className="font-bold text-sm">Mestre Reginaldo</p>
                    <p className="text-[10px] opacity-80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online agora
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)}><X size={20}/></button>
              </div>
              <div className="p-6 bg-[#e5ddd5] min-h-[100px]">
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm inline-block max-w-[90%]">
                  Olá! Sou o Mestre Reginaldo. O que te trouxe até mim hoje? Posso te guiar para a solução.
                </div>
              </div>
              <div className="p-4 bg-white">
                <button 
                  onClick={() => window.open(zapLink, "_blank")}
                  className="w-full bg-[#25d366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-all"
                >
                  <Send size={18} /> Iniciar conversa no WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#25d366] text-white p-5 rounded-full shadow-2xl relative"
        >
          <MessageCircle size={32} />
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
          )}
        </motion.button>
      </div>
    </main>
  );
}
