export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl fade-in-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Quem somos</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mt-3 mb-6">
            Sobre o Escritorio
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />

          <div className="space-y-5 text-muted-foreground font-sans leading-relaxed text-sm md:text-base text-justify">
            <p>
              O Castilho & Associados nasceu da convicção de que a advocacia de excelência exige mais do que conhecimento técnico: demanda compromisso genuíno com cada causa e cada cliente.
            </p>

            <p>
              Fundado em 2009, o escritório se consolidou como referência em atuação estratégica nas áreas civel, empresarial, imobiliária e de família, atendendo desde pessoas físicas até grupos empresariais de grande porte.
            </p>

            <p>
              Nossa abordagem combina rigor acadêmico, experiência prática e uma visão integrada do direito, sempre orientada para resultados concretos e duradouros. Acreditamos que a confiança se constroi com transparência, dedicação e resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
