import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Leaf, BrainCircuit, BadgeCheck, ExternalLink, CalendarDays } from 'lucide-react';

const PK    = '#F13E93';
const SOFT  = 'rgba(241,62,147,0.1)';
const SOFT2 = 'rgba(241,62,147,0.16)';
const BORD  = 'rgba(241,62,147,0.22)';
const BORD2 = 'rgba(241,62,147,0.45)';
const GLOW  = 'rgba(241,62,147,0.18)';
const DIM   = 'rgba(241,62,147,0.55)';

const certs = [
  {
    title: 'MongoDB Database Admin Path',
    issuer: 'SmartBridge',
    type: 'Professional Program',
    date: 'Jan 2025',
    Icon: Leaf,
    link: '#',
    skills: ['MongoDB', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'Online Certification',
    type: 'Online Certification',
    date: '2024',
    Icon: BrainCircuit,
    link: '#',
    skills: ['AI Fundamentals', 'Machine Learning', 'Problem Solving'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

function CertCard({ cert, index }) {
  const { title, issuer, type, date, Icon, link, skills } = cert;

  return (
    <motion.div
      {...fadeUp(index * 0.15)}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, rgba(241,62,147,0.05) 0%, rgba(15,23,42,0.6) 100%)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 0 35px ${GLOW}`;
        e.currentTarget.style.borderColor = BORD2;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Hover glow layer */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(241,62,147,0.07) 0%, transparent 65%)' }} />

      {/* Decorative dot */}
      <span className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: PK }} />

      {/* Top row: icon + verified badge */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: SOFT, border: `1px solid ${BORD}` }}>
          <Icon size={22} style={{ color: PK, filter: 'drop-shadow(0 0 6px rgba(241,62,147,0.5))' }} />
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}>
          <BadgeCheck size={11} /> Verified
        </span>
      </div>

      {/* Title & metadata */}
      <div className="relative z-10">
        <h3 className="font-semibold text-lg leading-snug mb-3" style={{ color: '#fde4f2' }}>
          {title}
        </h3>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: DIM }}>Issuer</span>
            <span className="text-xs font-medium" style={{ color: '#f9cee7' }}>{issuer}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: DIM }}>Type</span>
            <span className="text-xs font-medium" style={{ color: '#f9cee7' }}>{type}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays size={11} style={{ color: DIM }} />
            <span className="text-xs" style={{ color: 'rgba(249,206,231,0.6)' }}>{date}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full rounded-full relative z-10"
        style={{ background: `linear-gradient(to right, ${BORD2}, transparent)` }} />

      {/* Skills gained */}
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-2.5" style={{ color: DIM }}>
          Skills Gained
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s}
              className="text-xs px-2.5 py-1 rounded-full border transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: BORD, color: 'rgba(241,62,147,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.background = SOFT2; e.currentTarget.style.borderColor = BORD2; e.currentTarget.style.color = PK; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = BORD; e.currentTarget.style.color = 'rgba(241,62,147,0.8)'; }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* View Certificate button */}
      <div className="relative z-10 mt-auto">
        <a href={link} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105"
          style={{ borderColor: BORD, color: PK, background: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.background = SOFT2; e.currentTarget.style.borderColor = BORD2; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = BORD; }}>
          <ExternalLink size={12} /> View Certificate
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications" light>
      <motion.p
        className="text-center text-sm mb-10 max-w-md mx-auto"
        style={{ color: DIM }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Verified credentials and completed programs
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-12 h-px max-w-xs mx-auto rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${PK}, transparent)` }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </SectionWrapper>
  );
}
