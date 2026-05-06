import { CheckCircle2 } from 'lucide-react';

const items = [
  {
    title: 'Atendimento exclusivo e personalizado',
    desc: 'Cada cliente é tratado como único, com estratégias desenhadas sob medida para suas necessidades.',
  },
  {
    title: 'Equipe multidisciplinar de alto nível',
    desc: 'Advogados especializados em diversas áreas do direito trabalhando de forma integrada.',
  },
  {
    title: 'Transparência total em honorários',
    desc: 'Proposta clara e detalhada antes do início de qualquer trabalho, sem surpresas.',
  },
  {
    title: 'Atuação preventiva e estratégica',
    desc: 'Foco em evitar problemas antes que eles surjam, protegendo seu patrimônio de forma proativa.',
  },
];

export default function Differentials() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Por que nos escolher</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mt-3">
            Diferenciais
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="fade-in-up flex gap-4 p-6 border border-border hover:border-gold/30 transition-all duration-500">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
