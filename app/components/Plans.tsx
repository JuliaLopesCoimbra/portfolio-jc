"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0 text-[#DAA520]" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-7 h-7 shrink-0 text-[#DAA520]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const MiniLockIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#DAA520] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const mensalFeatures = [
  "Acesso à todas as aulas",
  "1 Modelos de Treino Masculina (As 3 divisões mais otimizadas atualmente)",
  "1 Modelos de Treino Feminina (As 3 divisões mais otimizadas atualmente)",
  "Comunidade com alunos",
  "Acesso a Calculadora de Substituições Infinita",
  "Calculadora de Saldo Líquido de Estímulos Semanais",
  "Lives Quinzenais com João e Caio para tirar dúvidas",
];

const anualFeatures = [
  "Acesso à todas as aulas",
  "Comunidade com alunos",
  "Acesso a Calculadora de Substituições Infinita",
  "Calculadora de Saldo Líquido de Estímulos Semanais",
  "Lives Quinzenais com João e Caio para tirar dúvidas",
  "3 Modelos de Treino Masculina (As 3 divisões mais otimizadas atualmente)",
  "3 Modelos de Treino Feminina (As 3 divisões mais otimizadas atualmente)",
  "Ebook: Ciclo de Carboidratos",
  "Ebook: Cutting e Bulking",
  "Ebook: Como montar uma dieta do Zero",
  "Ebook: O melhor exercício para cada músculo: S-Tier",
  "Ebook: Os 3 erros que limitam seu estímulo",
 
];

const anualFeaturesDestacados = new Set([
  "3 Modelos de Treino Masculina (As 3 divisões mais otimizadas atualmente)",
  "3 Modelos de Treino Feminina (As 3 divisões mais otimizadas atualmente)",
  "Módulo Bônus: O Universo dos Peptídeos e Canetas Emagrecedoras",
  "Check In Quinzenal Com dúvidas individuais",
  "Ebook: Ciclo de Carboidratos",
  "Ebook: Cutting e Bulking",
  "Ebook: Como montar uma dieta do Zero", 
  "Ebook: O melhor exercício para cada músculo: S-Tier",
  "Ebook: Os 3 erros que limitam seu estímulo",
]);

export default function Plans() {
  return (
    <section className={`${poppins.className} relative min-h-screen py-16 px-4 overflow-hidden bg-black`}>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 border border-white/20 rounded-lg overflow-hidden bg-black/40">
          {/* Coluna MENSAL */}
          <div className="flex flex-col p-10 md:p-12 border-r border-white/30">
            <h2 className="text-white text-center text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-5">
              MENSAL
            </h2>
            <div className="w-14 h-px bg-[#DAA520]/80 mx-auto mb-6" />

            <div className="flex items-center gap-2 mb-8">
              <LightningIcon />
              <span className="text-white text-base sm:text-lg font-medium tracking-wider uppercase">
                HYPER TROPHY BRASIL
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {mensalFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white text-base sm:text-lg">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p
              className="text-[#DAA520] text-center mb-3 leading-none tracking-normal"
              style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}
            >
              <span className="font-bold text-5xl sm:text-6xl">R$</span>
              <span className="font-bold text-5xl sm:text-6xl">65,00</span>
              <span className="text-lg sm:text-xl ml-2">/mês</span>
            </p>
            <a
              href="#"
              className="block w-full py-4 bg-[rgb(218,165,32)] shadow-[0_0_20px_rgba(218,165,32,0.5),0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:bg-[#C4941A] text-white text-center font-bold text-base sm:text-lg tracking-wider uppercase rounded transition-colors duration-300"
            >
              QUERO FAZER PARTE!
            </a>

            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <LockIcon />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <ShieldIcon />
                <span>Garantia</span>
              </div>
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <RocketIcon />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Coluna ANUAL */}
          <div className="flex flex-col p-10 md:p-12">
            <h2 className="text-white text-center text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-5">
              ANUAL
            </h2>
            <div className="w-14 h-px bg-[#DAA520]/80 mx-auto mb-6" />

            <div className="flex items-center gap-2 mb-8">
              <LightningIcon />
              <span className="text-white text-base sm:text-lg font-medium tracking-wider uppercase">
                HYPER TROPHY BRASIL
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {anualFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white text-base sm:text-lg"
                >
                  {anualFeaturesDestacados.has(item) ? <MiniLockIcon /> : <CheckIcon />}
                  <span
                    className={anualFeaturesDestacados.has(item) ? "text-white font-extrabold" : ""}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="bg-gradient-to-r from-[#FFF1B8] via-[#DAA520] to-[#F7D774] bg-clip-text text-transparent text-center mb-3 leading-none tracking-normal"
              style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}
            >
              <span className="text-lg sm:text-xl mr-2">12x de</span>
              <span className="font-bold text-5xl sm:text-6xl">R$</span>
              <span className="font-bold text-5xl sm:text-6xl">50,00</span>
              <span className="text-lg sm:text-xl ml-2">/mês</span>
            </p>
            <a
              href="#"
              className="block w-full py-4 bg-[rgb(218,165,32)] shadow-[0_0_20px_rgba(218,165,32,0.5),0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:bg-[#C4941A] text-white text-center font-bold text-base sm:text-lg tracking-wider uppercase rounded transition-colors duration-300"
            >
              QUERO FAZER PARTE!
            </a>

            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <LockIcon />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <ShieldIcon />
                <span>Garantia</span>
              </div>
              <div className="flex items-center gap-2 text-[#DAA520] text-sm">
                <RocketIcon />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
