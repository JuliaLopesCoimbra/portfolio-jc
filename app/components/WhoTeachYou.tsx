"use client";

import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Caio Padeiro",
    image: "/person/caio.jpeg", // Substitua pela foto de Samuel Meller quando disponível
    description: "é formado em nutrição, pós-graduado em Bodybuilding Coach, já preparou diversos atletas para competições de federações como WNBF e IFBB. Está se tornando um dos maiores nomes do movimento Science based, produzindo conteúdo com base em evidências tanto no Youtube, quanto no Instagram, tendo, no total, mais de 100 mil seguidores nas redes.",
  },
  {
    id: 2,
    name: "João Herker",
    image: "/person/joao.jpg",
    imagePosition: "top" as const,
    description: "é formado em educação física, pós-graduado em bodybuilding coach, estudou com as maiores referências do Brasil e atendeu mais de 1000 alunos. Hoje, está se tornando um nome de peso entre os treinadores no país, tendo criado a Muscle Lab, ao lado de Samuel Meller, onde tudo que é ensinado dentro da Hypertrophy academy, é feito na prática, tendo mais de 300 alunos ativos",
  },
];

export default function WhoTeachYou() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4 bg-black">
      {/* Sombra na base para transição suave com a próxima seção */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-sans">
          Quem irá te ensinar?
        </h2>

        {/* Cards Container */}
        <div>
          {/* Cards Grid - Mostra ambos os cards simultaneamente */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="relative rounded-2xl overflow-hidden border-2 border-red-600/50 bg-black/40 backdrop-blur-sm"
              >
                {/* Card Content */}
                <div className="relative">
                  {/* Image Container with Yellow Glow Effect */}
                  <div className="relative w-full h-80 md:h-96 overflow-hidden">
                    {/* Yellow Glow Background */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: "radial-gradient(circle at center, rgba(202, 138, 4, 0.4) 0%, rgba(202, 138, 4, 0.2) 40%, transparent 70%)",
                        filter: "blur(40px)",
                      }}
                    />
                    
                    {/* Image with Grayscale Filter */}
                    <div className="relative w-full h-full">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                        style={{
                          filter: "grayscale(100%) brightness(0.9)",
                          objectPosition: "imagePosition" in instructor && instructor.imagePosition === "top" ? "10% 20%" : "center",
                        }}
                      />
                      {/* Yellow glow overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to bottom, transparent 0%, rgba(202, 138, 4, 0.2) 50%, rgba(202, 138, 4, 0.4) 100%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 bg-black/60">
                    {/* Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 font-sans">
                      {instructor.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white text-sm md:text-base leading-relaxed font-sans">
                      {instructor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

