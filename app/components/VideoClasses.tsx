"use client";

import Image from "next/image";
import { useState } from "react";

// Temas e vídeos locais/YouTube
const temas: Record<string, string> = {
  "VOLUME DE TREINO": "https://www.youtube.com/watch?v=_aHESllVl0s",
  "CICLO DE CARBO": "",
  "UNIDADES MOTORAS": "https://www.youtube.com/watch?v=egVH1AG1zcM",
  "SUPLEMENTAÇÃO": "",
  "FADIGA E DANO MUSCULAR ": "https://www.youtube.com/watch?v=1-f3QxSG_Ow",
  "MONTANDO DIETA DO ZERO": "",
  "PONTO FRACO": "https://www.youtube.com/watch?v=RdEMSwdQFmg",
  "FISIOLOGIA HUMANA": "",
};

export default function VideoClasses() {
  const themeKeys = Object.keys(temas);
  const [selectedTheme, setSelectedTheme] = useState<string>(themeKeys[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const isShortUrl = parsedUrl.hostname.includes("youtu.be");
      const videoId = isShortUrl
        ? parsedUrl.pathname.slice(1)
        : parsedUrl.searchParams.get("v");

      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
      return null;
    }
  };

  const currentVideoUrl = temas[selectedTheme as keyof typeof temas] ?? Object.values(temas)[0];
  const isLocalVideo = currentVideoUrl?.startsWith("/videos/");
  const youtubeEmbedUrl = getYouTubeEmbedUrl(currentVideoUrl);
  const isYouTubeVideo = Boolean(youtubeEmbedUrl);

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
    setIsPlaying(false); // Reset para mostrar thumbnail quando mudar de tema
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-5 md:py-12 px-4 bg-black">
      {/* Background Image com overlay escuro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://totalpass.com/wp-content/uploads/2022/09/como-montar-uma-academia-equipamentos.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90" />
        {/* Sombra na base para transição suave com a próxima seção */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 font-sans">
          Escolha um tema e conheça nossas aulas:
        </h2>

        {/* Botões de Temas */}
        <div className="mb-8 space-y-4">
          {/* Primeira linha de botões */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {themeKeys.slice(0, 4).map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeClick(theme)}
                className={`px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 font-sans ${
                  selectedTheme === theme
                    ? "bg-[rgb(218,165,32)] text-white shadow-[0_0_20px_rgba(218,165,32,0.5)] scale-105"
                    : "bg-[#3a2a1f] text-white border-2 border-[#DAA520] hover:bg-[#4a3a2f]"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Segunda linha de botões */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {themeKeys.slice(4, 8).map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeClick(theme)}
                className={`px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 font-sans ${
                  selectedTheme === theme
                    ? "bg-[rgb(218,165,32)] text-white shadow-[0_0_20px_rgba(218,165,32,0.5)] scale-105"
                    : "bg-[#3a2a1f] text-white border-2 border-[#DAA520] hover:bg-[#4a3a2f]"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Vídeo centralizado - grande na tela */}
        <div className="flex justify-center mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm w-full max-w-5xl border border-[#DAA520] shadow-[0_0_25px_rgba(218,165,32,0.4)]">
            <div className="relative aspect-video w-full">
              {isLocalVideo ? (
                isPlaying ? (
                  <video
                    key={currentVideoUrl}
                    src={currentVideoUrl}
                    className="absolute inset-0 w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                    title={`Aula: ${selectedTheme}`}
                  />
                ) : (
                  <div key={currentVideoUrl} className="absolute inset-0">
                    <video
                      src={currentVideoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      preload="metadata"
                      muted
                      playsInline
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    >
                      <div className="relative z-10 w-20 h-20 bg-[rgb(218,165,32)] rounded-full flex items-center justify-center hover:bg-[#C4941A] transition-colors duration-300 shadow-[0_0_20px_rgba(218,165,32,0.5),0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <svg
                          className="w-10 h-10 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                )
              ) : isYouTubeVideo ? (
                <iframe
                  key={currentVideoUrl}
                  src={youtubeEmbedUrl ?? undefined}
                  className="absolute inset-0 w-full h-full"
                  title={`Aula: ${selectedTheme}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                  Vídeo não disponível
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mb-6 flex justify-center">
          <button className="max-w-xs w-full bg-[rgb(218,165,32)] shadow-[0_0_20px_rgba(218,165,32,0.5),0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:bg-[#C4941A] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl transition-colors duration-300 font-sans">
            QUERO FAZER PARTE!
          </button>
        </div>

        {/* Security Information */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
          {/* Compra segura */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm md:text-base font-sans">Compra segura</span>
          </div>

          {/* Garantia */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm md:text-base font-sans">Garantia</span>
          </div>

          {/* Acesso imediato */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="text-sm md:text-base font-sans">Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}

