const faqItems = [
  {
    question: "Sou profissional, serve para mim?",
    answer:
      "Com certeza, dentro da Hypertrophy academy, será passado um conhecimento único, que com certeza vai aumentar seu repertório profissional. O conhecimento servirá tanto para você, quanto para seus alunos ou pacientes.",
  },
  {
    question: "Como tenho acesso?",
    answer: "O acesso da área de membros é enviado pelo seu email.",
  },
  {
    question: "Quais formas de pagamento?",
    answer:
      "Pix, cartão de crédito ou boleto (vamos ser francos, ninguém usa boleto em 2024)",
  },
  {
    question: "Tem garantia?",
    answer: "Sim, 7 dias de garantia incondicional.",
  },
  {
    question: "Porque devo entrar agora?",
    answer:
      "Quanto antes você entrar, mais rápido terá o conhecimento necessário para mudar o seu físico. É uma questão de escolha. Começar a mudar seu físico agora, ou procrastinar isso para sempre?",
  },
];

export default function Faq() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background: escuro com sombras vermelhas à esquerda e à direita */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(220, 38, 38, 0.35) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 100% 50%, rgba(220, 38, 38, 0.35) 0%, transparent 65%), #000",
        }}
      />
      {/* Sombra na base para transição suave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF4500] tracking-wide inline drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">
            FAQ
          </h2>
          <span className="ml-3 text-xl sm:text-2xl md:text-3xl text-gray-300">
            Dúvidas frequentes
          </span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#282828]/90 rounded-xl overflow-hidden flex flex-col sm:flex-row border border-white/10 shadow-[0_0_20px_rgba(220,38,38,0.15),0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_0_28px_rgba(220,38,38,0.25),0_4px_6px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            >
              {/* Question - left column */}
              <div className="sm:w-[38%] p-7 sm:py-10 sm:pr-6 sm:border-r border-gray-600/50">
                <p className="text-white font-semibold text-lg sm:text-xl">
                  {item.question}
                </p>
              </div>
              {/* Answer - right column */}
              <div className="sm:flex-1 p-7 sm:py-10 sm:pl-8">
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
