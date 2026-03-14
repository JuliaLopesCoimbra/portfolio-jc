const faqItems = [
  {
    question: "Já atuo na área, o conteúdo é indicado para mim?",
    answer:
      "Sim. Na Hypertrophy Academy você encontra um conteúdo exclusivo que amplia sua bagagem profissional. O que você aprende vale tanto para sua própria evolução quanto para aplicar com seus alunos ou pacientes.",
  },
  {
    question: "Como faço para acessar o curso?",
    answer: "O link da área de membros é enviado para o e-mail que você cadastrou na compra.",
  },
  {
    question: "Quais são as opções de pagamento?",
    answer:
      "Aceitamos Pix, cartão de crédito e boleto (na prática, a maior parte das pessoas usa Pix ou cartão).",
  },
  {
    question: "O curso oferece garantia?",
    answer: "Sim. Você tem 7 dias para testar e, se não gostar, pode pedir reembolso sem precisar justificar.",
  },
  {
    question: "Qual a vantagem de começar já?",
    answer:
      "Quanto antes você começar, mais cedo terá na mão o que precisa para transformar seu corpo. A decisão é sua: começar a mudar agora ou deixar para depois.",
  },
];

export default function Faq() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background: escuro com sombras douradas à esquerda e à direita */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(212, 175, 55, 0.35) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 100% 50%, rgba(212, 175, 55, 0.35) 0%, transparent 65%), #000",
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#DAA520] tracking-wide inline drop-shadow-[0_0_12px_rgba(218,165,32,0.5)]">
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
              className="bg-[#282828]/90 rounded-xl overflow-hidden flex flex-col sm:flex-row border border-white/10 shadow-[0_0_20px_rgba(212,175,55,0.15),0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.25),0_4px_6px_rgba(0,0,0,0.3)] transition-shadow duration-300"
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

        {/* Contato */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-4">
            Quer saber mais? Entre em contato!
          </p>
          <a
            href="https://wa.me/551331502758?text=Quero%20saber%20mais%20sobre%20a%20JC%20Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-[#282828]/90 hover:bg-[#333]/90 border border-white/10 rounded-xl px-8 py-5 text-white font-medium text-lg shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_28px_rgba(212,175,55,0.25)] transition-all duration-300"
          >
            <span>+55 13 3150-2758</span>
            <span className="text-gray-400 text-base">Quero saber mais sobre a JC Academy</span>
          </a>
        </div>
      </div>
    </section>
  );
}
