import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Star, CheckCircle2, Server, Database, Shield, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const PK    = '#F13E93';
const SOFT  = 'rgba(241,62,147,0.1)';
const SOFT2 = 'rgba(241,62,147,0.16)';
const BORD  = 'rgba(241,62,147,0.22)';
const BORD2 = 'rgba(241,62,147,0.45)';
const GLOW  = 'rgba(241,62,147,0.18)';

/* ── Data ── */
const featured = {
  title: 'MongoDB Backend Project',
  badge: 'Backend Project',
  description:
    'A production-ready backend application built on MongoDB with a clean RESTful API architecture, robust schema modeling, and scalable data handling designed for real-world use cases.',
  tech: ['MongoDB', 'Express', 'Node.js'],
  meta: [
    { label: 'API Type', value: 'REST' },
    { label: 'Database', value: 'MongoDB' },
    { label: 'Role', value: 'Backend Dev' },
  ],
  features: [
    { Icon: Server,    text: 'RESTful API design & routing' },
    { Icon: Database,  text: 'MongoDB schema modeling & CRUD' },
    { Icon: Shield,    text: 'Error handling & input validation' },
    { Icon: Zap,       text: 'Scalable architecture & performance' },
  ],
  tags: ['API', 'CRUD', 'DB Design', 'REST'],
  github: '#',
  demo: '#',
};

const projects = [
  {
    title: 'Rhythmic Tunes',
    description:
      'Built backend APIs supporting music data, playlist management, and user interactions with clean endpoint design and structured data responses.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    meta: [
      { label: 'API Type', value: 'REST' },
      { label: 'Role', value: 'Full Stack' },
    ],
    tags: ['API', 'CRUD'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Product Inventory Management',
    description:
      'Designed REST APIs for inventory tracking, stock management, and product CRUD operations with structured error handling and database integration.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    meta: [
      { label: 'API Type', value: 'REST' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Role', value: 'Backend Dev' },
    ],
    tags: ['API', 'CRUD', 'DB Design'],
    github: '#',
    demo: '#',
  },
];

/* ── Helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

const cardHoverHandlers = {
  onMouseEnter: e => {
    e.currentTarget.style.boxShadow = `0 0 40px ${GLOW}`;
    e.currentTarget.style.borderColor = BORD2;
  },
  onMouseLeave: e => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
  },
};

function TechPill({ label }) {
  return (
    <span
      className="text-xs px-3 py-1 rounded-full border transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(241,62,147,0.8)' }}
      onMouseEnter={e => { e.currentTarget.style.background = SOFT; e.currentTarget.style.borderColor = BORD; e.currentTarget.style.color = PK; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(241,62,147,0.8)'; }}
    >
      {label}
    </span>
  );
}

function SystemTag({ label }) {
  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider"
      style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}
    >
      {label}
    </span>
  );
}

function MetaBadge({ label, value }) {
  return (
    <div
      className="flex flex-col px-3 py-2 rounded-lg"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(241,62,147,0.5)' }}>{label}</span>
      <span className="text-xs font-semibold mt-0.5" style={{ color: PK }}>{value}</span>
    </div>
  );
}

function LinkBtn({ href, icon: Icon, label }) {
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105"
      style={{ borderColor: BORD, color: PK, background: 'transparent' }}
      onMouseEnter={e => { e.currentTarget.style.background = SOFT2; e.currentTarget.style.borderColor = BORD2; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = BORD; }}
    >
      <Icon size={13} /> {label}
    </a>
  );
}

/* ── Featured Card ── */
function FeaturedCard() {
  return (
    <motion.div
      {...fadeUp(0)}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-7 md:p-10 overflow-hidden transition-all duration-300"
      {...cardHoverHandlers}
    >
      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(241,62,147,0.05)' }} />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}>
            <Star size={10} /> {featured.badge}
          </span>
          <div className="flex gap-2">
            {featured.tags.map(t => <SystemTag key={t} label={t} />)}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: '#fde4f2' }}>
              {featured.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6"
              style={{ color: 'rgba(249,206,231,0.75)' }}>
              {featured.description}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-3 mb-6">
              {featured.meta.map(m => <MetaBadge key={m.label} {...m} />)}
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tech.map(t => <TechPill key={t} label={t} />)}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <LinkBtn href={featured.github} icon={GitBranch} label="GitHub" />
              <LinkBtn href={featured.demo} icon={ExternalLink} label="View API" />
            </div>
          </div>

          {/* Right: Key Features panel */}
          <div className="lg:w-64 shrink-0">
            <div className="rounded-xl p-5 h-full"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORD}` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: PK }}>
                Key Features
              </p>
              <div className="flex flex-col gap-3">
                {featured.features.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: SOFT, border: `1px solid ${BORD}` }}>
                      <Icon size={13} style={{ color: PK }} />
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(249,206,231,0.7)' }}>{text}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 h-px rounded-full"
                style={{ background: `linear-gradient(to right, ${BORD}, transparent)` }} />

              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} style={{ color: PK }} />
                <span className="text-xs" style={{ color: 'rgba(241,62,147,0.6)' }}>Production-ready architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Small Card ── */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.12)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 flex flex-col transition-all duration-300"
      {...cardHoverHandlers}
    >
      {/* Accent line */}
      <div className="w-8 h-0.5 rounded-full mb-5" style={{ background: PK }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(t => <SystemTag key={t} label={t} />)}
      </div>

      <h3 className="font-bold text-lg mb-2" style={{ color: '#fde4f2' }}>{project.title}</h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'rgba(249,206,231,0.7)' }}>
        {project.description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.meta.map(m => <MetaBadge key={m.label} {...m} />)}
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => <TechPill key={t} label={t} />)}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <LinkBtn href={project.github} icon={GitBranch} label="GitHub" />
        <LinkBtn href={project.demo} icon={ExternalLink} label="View API" />
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" light>
      <div className="flex flex-col gap-8">
        <FeaturedCard />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}
