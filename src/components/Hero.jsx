import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Download, ArrowDown, Sparkles, Code2, GraduationCap } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const PK = '#F13E93';
const PK_SOFT = 'rgba(241,62,147,0.1)';
const PK_BORDER = 'rgba(241,62,147,0.28)';
const PK_GLOW = 'rgba(241,62,147,0.4)';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const stats = [['84.75', 'CGPA'], ['2+', 'Certifications'], ['3+', 'Languages']];

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Aspiring Full Stack Developer', 'Backend Enthusiast', 'Problem Solver'],
    loop: true, delaySpeed: 1800, typeSpeed: 55, deleteSpeed: 35,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f172a 60%, rgba(241,62,147,0.05) 100%)' }}>

      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-125 md:h-125 rounded-full pointer-events-none"
        style={{ background: 'rgba(241,62,147,0.07)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-105 md:h-105 rounded-full pointer-events-none"
        style={{ background: 'rgba(241,62,147,0.05)', filter: 'blur(70px)' }} />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 py-24 sm:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">

          {/* LEFT */}
          <div className="flex-1 w-full text-center md:text-left order-2 md:order-1">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={12} style={{ color: PK }} />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: PK }}>
                Hello, I'm
              </span>
              <Sparkles size={12} style={{ color: PK }} />
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="font-bold leading-tight mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white block">Shafreen</span>
              <span className="block bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, #ff6eb4, ${PK})`, filter: `drop-shadow(0 0 18px ${PK_GLOW})` }}>
                Syed Mohamed
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="font-medium mb-4 text-sm sm:text-base md:text-lg"
              style={{ color: '#94a3b8', minHeight: '1.75rem' }}>
              <span style={{ color: '#ffb3d4' }}>{text}</span>
              <Cursor cursorStyle="|" cursorColor={PK} />
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base max-w-sm sm:max-w-md mx-auto md:mx-0">
              Passionate about building efficient web applications and learning modern technologies.
              Focused on turning ideas into real-world solutions.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start mb-10">
              <a href="#skills" className="w-full sm:w-auto px-7 py-3 text-white font-semibold rounded-full text-sm text-center transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(to right, ${PK}, #ff6eb4)`, boxShadow: `0 0 22px ${PK_GLOW}` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 38px rgba(241,62,147,0.65)`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 22px ${PK_GLOW}`}>
                View Projects
              </a>
              <a href="#contact" className="w-full sm:w-auto px-7 py-3 font-semibold rounded-full text-sm text-center border transition-all duration-300 hover:scale-105"
                style={{ borderColor: PK_BORDER, color: PK, background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = PK_SOFT; e.currentTarget.style.borderColor = PK; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = PK_BORDER; }}>
                Contact Me
              </a>
              <a
                href="/shafreenresume.pdf"
                download="Shafreen_Syed_Mohamed_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 font-semibold rounded-full text-sm text-center hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} /> Resume
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex gap-6 sm:gap-8 justify-center md:justify-start">
              {stats.map(([val, label]) => (
                <div key={label} className="text-center md:text-left">
                  <p className="text-lg sm:text-xl font-bold" style={{ color: PK }}>{val}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Avatar */}
          <motion.div className="shrink-0 relative flex items-center justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.78 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}>

            <div className="absolute rounded-full blur-3xl w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72"
              style={{ background: 'rgba(241,62,147,0.14)' }} />
            <div className="absolute rounded-full blur-2xl w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60"
              style={{ background: 'rgba(241,62,147,0.08)' }} />

            <motion.div className="absolute rounded-full border border-dashed w-45 h-45 sm:w-57.5 sm:h-57.5 md:w-70 md:h-70"
              style={{ borderColor: 'rgba(241,62,147,0.2)' }}
              animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="rounded-full p-[2.5px] pink-glow w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
                style={{ background: `linear-gradient(135deg, #ff6eb4, ${PK})` }}>
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center" style={{ background: '#0f172a' }}>
                  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                    <circle cx="100" cy="100" r="100" fill="#160f1a" />
                    <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" fillOpacity="0.12" />
                    <ellipse cx="100" cy="162" rx="54" ry="40" fill="#3a1525" />
                    <circle cx="100" cy="80" r="34" fill="#3a1525" />
                    <circle cx="100" cy="78" r="27" fill="#4d1f35" />
                    <defs>
                      <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={PK} />
                        <stop offset="100%" stopColor="#0f172a" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 sm:h-7 sm:w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ background: PK }} />
                <span className="relative inline-flex rounded-full h-6 w-6 sm:h-7 sm:w-7" style={{ background: PK }} />
              </span>

              <motion.div className="absolute -left-8 top-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 text-xs font-medium hidden md:flex items-center gap-1.5"
                style={{ color: PK }} animate={{ x: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <Code2 size={12} style={{ color: PK }} /> Full Stack
              </motion.div>

              <motion.div className="absolute -right-10 bottom-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 text-xs font-medium hidden md:flex items-center gap-1.5"
                style={{ color: PK }} animate={{ x: [0, 4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <GraduationCap size={12} style={{ color: PK }} /> BCA Student
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 transition-colors"
        style={{ color: '#475569' }} animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        onMouseEnter={e => e.currentTarget.style.color = PK}
        onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
        <span className="text-[9px] tracking-widest uppercase" style={{ color: PK, opacity: 0.5 }}>scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
