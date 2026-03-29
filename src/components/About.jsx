import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Code2, Database } from 'lucide-react';

const PK = '#F13E93';
const PK_SOFT = 'rgba(241,62,147,0.1)';
const PK_BORDER = 'rgba(241,62,147,0.22)';

const highlights = [
  { Icon: GraduationCap, label: '2nd Year BCA Student', sub: 'Naina Mohamed College' },
  { Icon: Code2, label: 'Full Stack Enthusiast', sub: 'Web & Backend Dev' },
  { Icon: Database, label: 'Database Explorer', sub: 'MongoDB & DBMS' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" light>
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(241,62,147,0.06)' }} />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(241,62,147,0.05)' }} />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start relative z-10">
          <motion.div {...fadeUp(0)} className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold mb-5 bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, #ff6eb4, ${PK})`, filter: 'drop-shadow(0 0 12px rgba(241,62,147,0.35))' }}>
              Who am I?
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I am a 2nd-year BCA student at{' '}
                <span className="font-medium" style={{ color: PK }}>Naina Mohamed College of Arts & Science</span>{' '}
                with a strong academic background and a deep interest in software development.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I have hands-on experience in{' '}
                <span className="font-medium" style={{ color: PK }}>C, Java, and Python</span>,
                along with web technologies such as{' '}
                <span className="font-medium" style={{ color: PK }}>HTML and CSS</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I am currently exploring{' '}
                <span className="font-medium" style={{ color: PK }}>full stack development</span>{' '}
                and database management, aiming to build scalable and efficient applications.
              </p>
            </div>
            <div className="mt-6 h-px w-full rounded-full"
              style={{ background: `linear-gradient(to right, rgba(241,62,147,0.35), transparent)` }} />
            <div className="mt-5 flex flex-wrap gap-3">
              {[['BCA', 'Degree'], ['2024–27', 'Batch'], ['84.75', 'CGPA']].map(([val, lbl]) => (
                <div key={lbl} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 min-w-[72px]">
                  <span className="text-base font-bold" style={{ color: PK }}>{val}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{lbl}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 w-full md:w-72 shrink-0">
            {highlights.map(({ Icon, label, sub }, i) => (
              <motion.div key={label} {...fadeUp(0.1 + i * 0.1)} whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border rounded-xl px-5 py-4 transition-all duration-300 cursor-default"
                style={{ borderColor: PK_BORDER }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(241,62,147,0.28)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ background: PK_SOFT, border: `1px solid ${PK_BORDER}` }}>
                  <Icon size={20} style={{ color: PK, filter: 'drop-shadow(0 0 6px rgba(241,62,147,0.5))' }} />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold text-sm leading-tight">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}
            <motion.div {...fadeUp(0.4)} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-4"
              style={{ background: 'linear-gradient(135deg, rgba(241,62,147,0.07) 0%, rgba(15,23,42,0.4) 100%)' }}>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Currently</p>
              <p className="text-sm font-medium" style={{ color: PK }}>
                Building full stack projects & exploring modern web technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
