"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mocha-900">
      {/* Background Decorativo - Efeito de Luz */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-light text-sm mb-8"
        >
          <Sparkles size={16} />
          <span>A Referência em Espiritualidade no Brasil e Portugal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
        >
          Retome o Controle do seu <br />
          <span className="text-gold italic">Destino e do seu Amor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-mocha-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Mestre Reginaldo utiliza a sabedoria ancestral e rituais poderosos para abrir seus caminhos, afastar negatividade e reconectar almas que se perderam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => window.open("https://wa.me/5511XXXXXXXXX", "_blank")}
            className="group relative inline-flex items-center gap-4 bg-gold hover:bg-gold-dark text-mocha-900 font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-gold/20"
          >
            <MessageCircle className="group-hover:scale-125 transition-transform" />
            <span className="text-xl">Iniciar Consulta Gratuita</span>
          </button>
          <p className="text-mocha-300 mt-4 text-sm font-light">Sigilo Absoluto e Atendimento Imediato</p>
        </motion.div>
      </div>
    </section>
  );
};
