import { Scale, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="section-padding bg-dark border-t border-accent-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-gold" />
              <span className="font-serif text-lg tracking-wider text-accent-foreground">CASTILHO & ASSOCIADOS</span>
            </div>
            <p className="text-sm text-accent-foreground/50 font-sans leading-relaxed">
              Advocacia de excelência com foco em resultados. Segurança jurídica para pessoas e empresas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-gold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-accent-foreground/60 font-sans">Av. Paulista, 1578, Sala 1204 São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-accent-foreground/60 font-sans">(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-accent-foreground/60 font-sans">contato@castilhoassociados.com.br</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-gold mb-4">Horário</h4>
            <div className="space-y-2 text-sm text-accent-foreground/60 font-sans">
              <p>Segunda a Sexta: 9h - 18h</p>
              <p>Sábado: 9h - 13h (agendamento)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent-foreground/10 text-center">
          <p className="text-xs text-accent-foreground/40 font-sans tracking-wide">
            2026 Castilho & Associados. Todos os direitos reservados. OAB/SP 12345.
          </p>
        </div>
      </div>
    </footer>
  );
}
