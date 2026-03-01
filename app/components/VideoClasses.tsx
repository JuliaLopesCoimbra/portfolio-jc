"use client";

import Image from "next/image";
import { useState } from "react";

// Definição dos temas e seus vídeos do YouTube (substitua pelos links reais das suas aulas)
const temas: Record<string, string> = {
  "Termogênicos": "https://www.youtube.com/watch?v=Rq8bFj9_BK0",
  "Suplementação": "https://www.youtube.com/watch?v=ejwwjL1FiOc",
  "Produção de conteúdo": "https://www.youtube.com/watch?v=WHmUUDa7reE",
  "Divisões de treino": "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  "Nutrient Timing": "https://www.youtube.com/watch?v=RgKAFK5djSk",
  "Cutting": "https://www.youtube.com/watch?v=09R8_2nJtjg",
  "Bulking": "https://www.youtube.com/watch?v=w73EvwawU3Y",
  "Preparação natural de atletas": "https://www.youtube.com/watch?v=rsv2PqWBAro",
};

export default function VideoClasses() {
  const [selectedTheme, setSelectedTheme] = useState<string>("Termogênicos");
  const [isPlaying, setIsPlaying] = useState(false);

  // Extrair o ID do vídeo da URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const currentVideoUrl = temas[selectedTheme as keyof typeof temas] || temas["Termogênicos"];
  const videoId = getYouTubeVideoId(currentVideoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : "";
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/person/joao.jpg";

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
    setIsPlaying(false); // Reset para mostrar thumbnail quando mudar de tema
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4 bg-black">
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
            {["Termogênicos", "Suplementação", "Produção de conteúdo", "Divisões de treino"].map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeClick(theme)}
                className={`px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 font-sans ${
                  selectedTheme === theme
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "bg-[#3a2a1f] text-white border-2 border-red-600 hover:bg-[#4a3a2f]"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Segunda linha de botões */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Nutrient Timing", "Cutting", "Bulking", "Preparação natural de atletas"].map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeClick(theme)}
                className={`px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 font-sans ${
                  selectedTheme === theme
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "bg-[#3a2a1f] text-white border-2 border-red-600 hover:bg-[#4a3a2f]"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Vídeo centralizado - grande na tela */}
        <div className="flex justify-center mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm w-full max-w-5xl">
            <div className="relative aspect-video w-full">
              {isPlaying && embedUrl ? (
                <iframe
                  key={videoId ?? selectedTheme}
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Aula: ${selectedTheme}`}
                />
              ) : (
                <div key={videoId ?? selectedTheme} className="absolute inset-0">
                  {/* Video Thumbnail Image */}
                  <Image
                    src={thumbnailUrl}
                    alt={`Thumbnail: ${selectedTheme}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  >
                    {/* Play button amarelo */}
                    <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-2xl">
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
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mb-6 flex justify-center">
          <button className="max-w-xs w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl transition-colors duration-300 shadow-2xl font-sans">
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

