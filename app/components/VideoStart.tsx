"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoStart() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // URL do vídeo do YouTube (pode ser alterada)
  const youtubeVideoUrl = "https://www.youtube.com/watch?v=ejwwjL1FiOc";

  // Extrair o ID do vídeo da URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(youtubeVideoUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4 -mt-px">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://totalpass.com/wp-content/uploads/2022/09/como-montar-uma-academia-equipamentos.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay preto com opacidade */}
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
      <div className="relative z-10 w-full max-w-4xl mx-auto" >
        {/* Video Player Section */}
        <div className="relative bg-black/40 rounded-3xl p-6 md:p-8 mb-6 backdrop-blur-sm ">
          {/* Text and Arrow - Absolute positioned */}
          <div className="absolute left-6 md:left-8 top-6 md:top-8 z-20">
          
          </div>

          {/* Video Player - Full width */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full">
            {isPlaying && embedUrl ? (
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              />
            ) : (
              <>
                {/* Thumbnail do YouTube */}
                {thumbnailUrl && (
                  <Image
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                )}
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  {/* Concentric rings */}
                  <div className="absolute w-20 h-20 rounded-full border-4 border-red-600 animate-ping opacity-75"></div>
                  <div className="absolute w-20 h-20 rounded-full border-4 border-red-600"></div>
                  
                  {/* Play button */}
                  <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-2xl">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mb-8">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl transition-colors duration-300 shadow-2xl font-sans">
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

