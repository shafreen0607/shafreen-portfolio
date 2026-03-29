import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'];

const PK = '#F13E93';
const PK_DIM = 'rgba(241,62,147,0.7)';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links.find(l => {
        const el = document.getElementById(l.toLowerCase());
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 80 && bottom > 80;
      });
      if (current) setActive(current.toLowerCase());
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, ${PK}, #ff6eb4)` }}>
          Shafreen
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map(l => {
            const isActive = active === l.toLowerCase();
            return (
              <li key={l} className="relative">
                <a href={`#${l.toLowerCase()}`}
                  className="text-sm font-medium transition-colors duration-200 pb-1"
                  style={{ color: isActive ? PK : '#94a3b8' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = PK_DIM; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#94a3b8'; }}>
                  {l}
                </a>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: PK }} />
                )}
              </li>
            );
          })}
        </ul>
        <button className="md:hidden text-slate-400 transition-colors"
          onMouseEnter={e => e.currentTarget.style.color = PK}
          onMouseLeave={e => e.currentTarget.style.color = ''}
          onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-b border-white/5 px-6 pb-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block py-2.5 text-slate-400 text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
              onMouseEnter={e => e.currentTarget.style.color = PK}
              onMouseLeave={e => e.currentTarget.style.color = ''}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
