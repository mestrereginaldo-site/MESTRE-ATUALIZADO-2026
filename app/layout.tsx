import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mestre Reginaldo - Consultoria Espiritual e Amarração Amorosa",
  description: "Especialista em rituais ancestrais e união amorosa. Atendimento exclusivo no Brasil e Portugal com sigilo absoluto.",
  alternates: {
    languages: {
      'pt-BR': 'https://mestrereginaldo.com.br',
      'pt-PT': 'https://mestrereginaldo.com.br/pt',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
