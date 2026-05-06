import balanceImg from '@/assets/balance-justice.jpg';

export default function BalanceSection() {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="fade-in-up order-2 lg:order-1">
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Tradição e Excelência</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-accent-foreground mt-3 mb-6">
              Compromisso com a justiça em cada detalhe
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-accent-foreground/70 font-sans leading-relaxed mb-6">
              Com mais de 15 anos de atuação, nosso escritório construiu uma reputação sólida baseada em resultados concretos, ética irrepreensível e dedicação integral a cada cliente.
            </p>
            <p className="text-accent-foreground/70 font-sans leading-relaxed mb-8">
              Cada caso recebe atenção personalizada de uma equipe multidisciplinar preparada para enfrentar os desafios jurídicos mais complexos do cenário atual.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="text-2xl font-serif text-gold">100%</span>
                <p className="text-xs text-accent-foreground/50 mt-1 tracking-wide">Dedicação</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-gold">24h</span>
                <p className="text-xs text-accent-foreground/50 mt-1 tracking-wide">Resposta</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-gold">Sigilo</span>
                <p className="text-xs text-accent-foreground/50 mt-1 tracking-wide">Absoluto</p>
              </div>
            </div>
          </div>
          <div className="fade-in-up order-1 lg:order-2">
            <img
              src={balanceImg}
              alt="Balanca da Justica"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
