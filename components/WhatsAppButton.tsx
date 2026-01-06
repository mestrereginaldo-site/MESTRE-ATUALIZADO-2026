"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+5511XXXXXXXXX"
      accountName="Mestre Reginaldo"
      avatar="/avatar-mestre.jpg" // Imagem profissional do mestre
      statusMessage="Tipicamente responde em 2 minutos"
      chatMessage="Olá! Sou o Mestre Reginaldo. Como posso ajudar na sua jornada espiritual hoje?"
      placeholder="Escreva sua mensagem..."
      darkMode={true}
      allowClickAway={true}
      notification={true}
      notificationDelay={60}
      notificationSound={true}
      className="z-50"
    />
  );
};
