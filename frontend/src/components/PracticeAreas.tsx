import { Shield, Briefcase, Building2, Users, FileText, Landmark } from 'lucide-react';

const areas = [
  {
    icon: Briefcase,
    title: 'Direito Empresarial',
    problem: 'Contratos frágeis e riscos societários',
    benefit: 'Estruturação jurídica sólida para crescer com segurança',
  },
  {
    icon: Building2,
    title: 'Direito Imobiliário',
    problem: 'Transações vulneráveis e disputas patrimoniais',
    benefit: 'Proteção total em compra, venda e locação de imóveis',
  },
  {
    icon: Shield,
    title: 'Direito Civil',
    problem: 'Conflitos contratuais e responsabilidade civil',
    benefit: 'Resolução eficiente de disputas com foco em resultado',
  },
  {
    icon: Users,
    title: 'Direito de Família',
    problem: 'Decisões delicadas que afetam o futuro da família',
    benefit: 'Orientação humana e estratégica em momentos críticos',
  },
  {
    icon: FileText,
    title: 'Direito Trabalhista',
    problem: 'Passivos ocultos e relações de trabalho inseguras',
    benefit: 'Prevenção de riscos e defesa de direitos trabalhistas',
  },
  {
    icon: Landmark,
    title: 'Direito Tributário',
    problem: 'Carga tributária excessiva e autuações fiscais',
    benefit: 'Planejamento fiscal inteligente e defesa administrativa',
  },
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Expertise</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mt-3">
            Áreas de Atuação
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="fade-in-up group bg-background p-6 md:p-8 border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-lg"
            >
              <area.icon className="w-6 h-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-lg text-foreground mb-3">{area.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 font-sans">{area.problem}</p>
              <p className="text-sm text-foreground/80 font-sans font-medium">{area.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
