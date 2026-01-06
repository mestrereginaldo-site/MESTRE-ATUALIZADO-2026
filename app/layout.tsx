import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mestre Reginaldo - Consultoria Espiritual Brasil & Portugal",
  description: "Especialista em rituais ancestrais e união amorosa. Sigilo e resultados reais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="antialiased">{children}</body>
    </html>
  );
}
