import Image from "next/image";

export default function Principal() {
  return (
    <section className="relative h-screen flex flex-col justify-end lg:justify-center overflow-hidden">
      {/* Foto em tela cheia – celular: fundocelular; PC: fundonovo */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/kk.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/fundo.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Esquerda - Texto sobre a foto (overlay leve só para legibilidade) */}
      <div className="relative z-10 order-2 lg:order-1 flex flex-col justify-center w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-4">
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-sans drop-shadow-md">
          Tenha acesso a uma plataforma completa de treino e alimentação voltada para hipertrofia, ideal para quem quer{" "}
            <span className="text-[#DAA520] drop-shadow-[0_0_12px_rgba(218,165,32,0.5)]"> resultados reais.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-3 font-sans drop-shadow-md">
            Na <span className="font-bold text-[#DAA520] drop-shadow-[0_0_12px_rgba(218,165,32,0.5)]">JC Academy</span> está reunido o conhecimento que já levou centenas de pessoas, inclusive atletas, a conquistarem um físico melhor.
         
          </p>
        </div>
      </div>

      {/* Seta: no mobile fica abaixo do texto (order-3); no PC fica fixa centralizada no rodapé */}
      <div
        className="order-3 flex justify-center pt-6 lg:order-none lg:pt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 z-20 animate-bounce"
        aria-hidden
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#DAA520] drop-shadow-[0_0_12px_rgba(218,165,32,0.5)]"
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

