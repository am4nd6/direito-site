import heroImg from '@/assets/hero-justice.png';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Estatua da Justica"
          width={1920}
          height={1080}
          className="hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="max-w-2xl">
          <div className="w-16 h-px bg-gold mb-8" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-accent-foreground mb-6">
            Segurança jurídica para decisões que transformam
          </h1>
          <p className="text-base md:text-lg text-accent-foreground/70 font-sans leading-relaxed mb-10 max-w-lg md:text-justify">
            Atuação estratégica e personalizada para proteger seu patrimônio, seus direitos e o futuro do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#contato')}
              className="px-8 py-4 bg-gold text-accent-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-all duration-300"
            >
              Agendar Consulta
            </button>
            <button
              onClick={() => scrollTo('#areas')}
              className="px-8 py-4 border border-accent-foreground/30 text-accent-foreground text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Conhecer Áreas
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-accent-foreground/10 pt-8">
          {[
            { value: '500+', label: 'Casos resolvidos' },
            { value: '98%', label: 'Satisfação' },
            { value: '15+', label: 'Anos de atuação' },
            { value: '4', label: 'Especialidades' },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-2xl md:text-3xl font-serif text-gold">{stat.value}</span>
              <p className="text-xs md:text-sm text-accent-foreground/60 mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
