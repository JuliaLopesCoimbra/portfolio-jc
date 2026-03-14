import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JC Academy",
  description: "Descrição que vai aparecer abaixo do título no WhatsApp", // Importante!
  icons: {
    icon: "/logo_academy.png",
  },
  // Aqui é onde a mágica acontece para o WhatsApp/Redes Sociais
  openGraph: {
    title: "JC Academy",
    description: "Aprenda com os melhores na JC Academy.",
    url: "https://www.academyjc.com.br",
    siteName: "JC Academy",
    images: [
      {
        url: "/logo_academy_preta.png", // O ideal é uma imagem 1200x630
        width: 1200,
        height: 630,
        alt: "Logo JC Academy",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
