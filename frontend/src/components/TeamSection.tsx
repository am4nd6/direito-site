import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';

const team = [
  { name: 'Ricardo Castilho', role: 'Direito Empresarial e Societário', image: team1 },
  { name: 'Mariana Oliveira', role: 'Direito Civil e Imobiliário', image: team2 },
  { name: 'Eduardo Mendes', role: 'Direito Tributário', image: team3 },
  { name: 'Isabela Santos', role: 'Direito de Família e Sucessões', image: team4 },
];

export default function TeamSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? team.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === team.length - 1 ? 0 : c + 1));

  return (
    <section id="equipe" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Profissionais</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-accent-foreground mt-3">
            Nossa Equipe
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="fade-in-up group">
              <div className="overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-72 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-base text-accent-foreground">{member.name}</h3>
              <p className="text-xs text-gold mt-1 tracking-wide font-sans">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden fade-in-up">
          <div className="overflow-hidden mb-4">
            <img
              src={team[current].image}
              alt={team[current].name}
              loading="lazy"
              width={640}
              height={800}
              className="w-full h-80 object-cover object-top"
            />
          </div>
          <h3 className="font-serif text-lg text-accent-foreground">{team[current].name}</h3>
          <p className="text-xs text-gold mt-1 tracking-wide font-sans">{team[current].role}</p>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="p-2 border border-accent-foreground/20 hover:border-gold transition-colors">
              <ChevronLeft className="w-5 h-5 text-accent-foreground" />
            </button>
            <span className="text-xs text-accent-foreground/50 font-sans tracking-wider">
              {current + 1} / {team.length}
            </span>
            <button onClick={next} className="p-2 border border-accent-foreground/20 hover:border-gold transition-colors">
              <ChevronRight className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
