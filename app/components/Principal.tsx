import Image from "next/image";

export default function Principal() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - preto fosco acizentado */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#0d0d0d" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left Side - Text Content (no mobile aparece embaixo) */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-3">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-3">
                <Image
                  src="/logo_academy.png"
                  alt="JC Academy Logo"
                  width={150}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
                Acesse a melhor plataforma de treinamento e nutrição voltado à{" "}
                <span className="text-red-500">hipertrofia para pessoas comuns</span>, como você.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-200 mt-3 font-sans">
                Na <span className="font-bold text-red-500">JC Academy</span> você terá acesso a todo o conhecimento que melhorou o físico de centenas de pessoas (incluindo atletas).
              </p>

           

        
            </div>

            {/* Right Side - Photos (no mobile aparece primeiro) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Sombra vermelha atrás das fotos */}
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-70 -z-10"
                  style={{
                    background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(220,38,38,0.5) 0%, rgba(185,28,28,0.25) 40%, transparent 70%)",
                    boxShadow: "0 0 80px rgba(220,38,38,0.4), 0 0 120px rgba(185,28,28,0.2)",
                  }}
                />
                {/* Fotos dos dois personais */}
                <div className="flex gap-3 items-center relative">
                  {/* Foto 1 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-1">
                    <Image
                      src="/person/caio.jpeg"
                      alt="Caio - Personal JC Academy"
                      width={250}
                      height={400}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </div>
                  {/* Foto 2 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-1">
                    <Image
                      src="/person/joao.jpg"
                      alt="João - Personal JC Academy"
                      width={250}
                      height={400}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seta vermelha flutuante apontando para baixo */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        aria-hidden
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-red-500 drop-shadow-lg"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

