import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Calendar, BookOpen, School, MapPin } from 'lucide-react';

const PK    = '#F13E93';
const SOFT  = 'rgba(241,62,147,0.1)';
const SOFT2 = 'rgba(241,62,147,0.16)';
const BORD  = 'rgba(241,62,147,0.22)';
const BORD2 = 'rgba(241,62,147,0.45)';
const GLOW  = '0 0 28px rgba(241,62,147,0.22)';
const DIM   = 'rgba(241,62,147,0.55)';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Naina Mohamed College of Arts & Science',
    period: '2024 – 2027',
    score: 'CGPA: 84.75',
    Icon: GraduationCap,
    current: true,
    highlight: 'Pursuing full stack development & database management',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Selection Matric Hr. Sec. School',
    period: 'Completed',
    score: '82%',
    Icon: BookOpen,
    current: false,
    highlight: 'Science stream with strong academic foundation',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Selection Matric Hr. Sec. School',
    period: 'Completed',
    score: '92.2%',
    Icon: School,
    current: false,
    highlight: 'Top academic performance across all subjects',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="relative max-w-3xl mx-auto">

        {/* Timeline line */}
        <div className="absolute left-6 top-2 bottom-2 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(241,62,147,0.7), rgba(241,62,147,0.08))' }} />

        <div className="flex flex-col gap-7">
          {education.map((edu, i) => (
            <motion.div key={edu.degree} {...fadeUp(i * 0.15)} className="md:pl-16 relative">

              {/* Timeline dot */}
              <motion.div
                className="absolute left-[18px] top-8 w-4 h-4 rounded-full border-2 hidden md:block"
                style={{ background: PK, borderColor: '#0f172a', boxShadow: `0 0 10px rgba(241,62,147,0.6)` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative group bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 overflow-hidden transition-all duration-300"
                style={edu.current ? { borderColor: BORD } : {}}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = GLOW; e.currentTarget.style.borderColor = BORD2; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = edu.current ? BORD : 'rgba(255,255,255,0.08)'; }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(241,62,147,0.06) 0%, transparent 65%)' }} />

                {/* Decorative dot */}
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: PK }} />

                <div className="flex items-start justify-between flex-wrap gap-4 relative z-10">
                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    {/* Icon + badge row */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: SOFT, border: `1px solid ${BORD}` }}>
                        <edu.Icon size={18} style={{ color: PK, filter: 'drop-shadow(0 0 5px rgba(241,62,147,0.5))' }} />
                      </div>
                      {edu.current && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: SOFT2, color: PK, border: `1px solid ${BORD}` }}>
                          ● Current
                        </span>
                      )}
                    </div>

                    {/* Degree */}
                    <h3 className="font-bold text-base leading-snug mb-1.5" style={{ color: '#fde4f2' }}>
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm flex items-center gap-1.5 mb-1" style={{ color: 'rgba(249,206,231,0.7)' }}>
                      <MapPin size={12} style={{ color: DIM }} /> {edu.institution}
                    </p>

                    {/* Period */}
                    <p className="text-xs flex items-center gap-1.5 mb-3" style={{ color: 'rgba(241,62,147,0.45)' }}>
                      <Calendar size={11} /> {edu.period}
                    </p>

                    {/* Highlight */}
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(249,206,231,0.5)' }}>
                      {edu.highlight}
                    </p>
                  </div>

                  {/* Score badge */}
                  <div className="shrink-0 flex flex-col items-center justify-center rounded-2xl px-5 py-3 text-center"
                    style={{ background: SOFT, border: `1px solid ${BORD}`, boxShadow: `0 0 14px rgba(241,62,147,0.12)` }}>
                    <p className="text-xl font-bold" style={{ color: PK }}>{edu.score}</p>
                    <p className="text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: DIM }}>Score</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
