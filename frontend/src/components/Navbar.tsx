import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const threshold = Math.max(150, window.innerHeight - 150);
      let current = '#hero';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.querySelector(navLinks[i].href);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = navLinks[i].href;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setClickedItem(href);
    setTimeout(() => {
      setClickedItem(null);
      setOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => handleClick('#hero')} className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-gold" />
          <span className="font-serif text-lg md:text-xl tracking-wider text-accent-foreground">
            CASTILHO & ASSOCIADOS
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                activeSection === link.href ? 'text-gold' : 'text-accent-foreground/80 hover:text-gold'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="ml-4 px-8 py-4 bg-gold text-accent-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-all duration-300"
          >
            Agendar Consulta
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-accent-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 border-t border-gold/10 bg-transparent ${
          open ? 'max-h-96 menu-open' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-left text-sm tracking-widest uppercase py-2 nav-link-mobile menu-item transition-all duration-300 ${
                activeSection === link.href ? 'text-gold menu-item-active' : 'text-accent-foreground/80'
              } ${clickedItem === link.href ? 'menu-item-clicked' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className={`mt-4 px-8 py-4 w-full bg-gold text-accent-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark btn-cta-premium menu-item ${
              clickedItem === '#contato' ? 'menu-item-clicked' : ''
            }`}
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </nav>
  );
}
