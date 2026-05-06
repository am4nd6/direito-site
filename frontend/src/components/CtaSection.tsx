export default function CtaSection() {
  const scrollTo = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center fade-in-up">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Próximo passo</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mt-3 mb-6">
          Proteja o que mais importa para você
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed mb-10 max-w-lg mx-auto">
          Agende uma consulta inicial e descubra como podemos atuar de forma estratégica na solução do seu caso.
        </p>
        <button
          onClick={scrollTo}
          className="px-10 py-4 bg-gold text-accent-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-all duration-300"
        >
          Agendar Consulta Agora
        </button>
      </div>
    </section>
  );
}
