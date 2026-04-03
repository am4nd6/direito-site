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

          <div className="space-y-5 text-muted-foreground font-sans leading-relaxed text-sm md:text-base">
            <p>
              O Castilho & Associados nasceu da conviccao de que a advocacia de excelencia exige mais do que conhecimento tecnico: demanda compromisso genuino com cada causa e cada cliente.
            </p>
            <p>
              Fundado em 2009, o escritorio se consolidou como referencia em atuacao estrategica nas areas civel, empresarial, imobiliaria e de familia, atendendo desde pessoas fisicas ate grupos empresariais de grande porte.
            </p>
            <p>
              Nossa abordagem combina rigor academico, experiencia pratica e uma visao integrada do direito, sempre orientada para resultados concretos e duradouros. Acreditamos que a confianca se constroi com transparencia, dedicacao e resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
