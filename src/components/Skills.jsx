import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Code2, Globe, Database, Wrench,
  Terminal, Coffee, Braces, Layout,
  Palette, Leaf, BarChart2, MonitorDot, Cpu, PenTool,
  Keyboard, Zap, Target, TrendingUp,
} from 'lucide-react';

const PK    = '#F13E93';
const SOFT  = 'rgba(241,62,147,0.1)';
const SOFT2 = 'rgba(241,62,147,0.18)';
const BORD  = 'rgba(241,62,147,0.22)';
const BORD2 = 'rgba(241,62,147,0.45)';
const GLOW  = 'rgba(241,62,147,0.18)';
const DIM   = 'rgba(241,62,147,0.55)';

const SAMPLE = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
const MAX    = 80;

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M'],
];

const skillGroups = [
  {
    category: 'Programming', Icon: Code2, featured: true,
    skills: [{ name: 'C', Icon: Terminal }, { name: 'Java', Icon: Coffee }, { name: 'Python', Icon: Braces }],
  },
  {
    category: 'Web', Icon: Globe, featured: false,
    skills: [{ name: 'HTML', Icon: Layout }, { name: 'CSS', Icon: Palette }],
  },
  {
    category: 'Database', Icon: Database, featured: false,
    skills: [{ name: 'MongoDB', Icon: Leaf }, { name: 'DBMS', Icon: BarChart2 }],
  },
  {
    category: 'Tools', Icon: Wrench, featured: false,
    skills: [{ name: 'VS Code', Icon: MonitorDot }, { name: 'PyCharm', Icon: Cpu }, { name: 'Canva', Icon: PenTool }],
  },
];

/* ── Pill ── */
function Pill({ name, Icon }) {
  return (
    <motion.span
      whileHover={{ scale: 1.07 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md cursor-pointer transition-all duration-200 text-sm"
      style={{ background: 'rgba(255,255,255,0.04)', borderColor: BORD, color: PK }}
      onMouseEnter={e => { e.currentTarget.style.background = SOFT2; e.currentTarget.style.borderColor = BORD2; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = BORD; e.currentTarget.style.color = PK; }}
    >
      <Icon size={12} style={{ color: PK }} />
      {name}
    </motion.span>
  );
}

/* ── Skill card ── */
function SkillCard({ group, index }) {
  const { category, Icon, featured, skills } = group;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group rounded-2xl p-6 border backdrop-blur-xl overflow-hidden transition-all duration-300 cursor-default"
      style={{ background: 'rgba(255,255,255,0.04)', borderColor: featured ? BORD2 : BORD, boxShadow: featured ? `0 0 30px ${GLOW}` : 'none' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 40px ${GLOW}`; e.currentTarget.style.borderColor = BORD2; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = featured ? `0 0 30px ${GLOW}` : 'none'; e.currentTarget.style.borderColor = featured ? BORD2 : BORD; }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(241,62,147,0.08) 0%, transparent 70%)' }} />
      <span className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: PK }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: SOFT, border: `1px solid ${BORD}` }}>
        <Icon size={22} style={{ color: PK, filter: 'drop-shadow(0 0 6px rgba(241,62,147,0.5))' }} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{category}</h3>
      <p className="text-xs mb-4" style={{ color: DIM }}>{skills.length} skill{skills.length !== 1 ? 's' : ''}</p>
      <div className="h-px w-full mb-4 rounded-full" style={{ background: `linear-gradient(to right, ${BORD2}, transparent)` }} />
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <Pill key={s.name} {...s} />)}
      </div>
    </motion.div>
  );
}

/* ── Progress bar ── */
function ProgressBar({ label, value, pct }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex-1">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium" style={{ color: '#f9cee7' }}>{label}</span>
        <span className="text-xs font-bold" style={{ color: PK }}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div className="h-full rounded-full"
          style={{ background: 'linear-gradient(to right, #F13E93, #ff6eb4)' }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

/* ── Keyboard display (pure UI, receives state from parent) ── */
function KeyboardDisplay({ typed, activeKey, done, onKey, onReset }) {
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Typing display */}
      <div className="w-full max-w-lg rounded-xl p-4 font-mono overflow-x-auto"
        style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORD}` }}>
        <div className="flex items-center gap-1.5 mb-2">
          {[PK, 'rgba(241,62,147,0.5)', 'rgba(241,62,147,0.25)'].map((c, i) => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
          <span className="ml-auto text-[9px]" style={{ color: DIM }}>{typed.length}/{MAX}</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed break-all whitespace-pre-wrap"
          style={{ color: '#f9cee7', minHeight: '1.4rem' }}>
          {typed.length > 0 ? typed : <span style={{ color: DIM }}>Start typing or click keys below...</span>}
          {!done && (
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }} style={{ color: PK }}>|</motion.span>
          )}
        </p>
      </div>

      {/* Keyboard — hidden on mobile (xs), shown sm+ */}
      <div className="hidden sm:flex flex-col items-center gap-1.5">
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1">
            {row.map(k => {
              const isActive = activeKey === k;
              return (
                <motion.button key={k} type="button"
                  onClick={() => onKey(k)}
                  animate={isActive ? { y: 2, scale: 0.88 } : { y: 0, scale: 1 }}
                  whileHover={done ? {} : { y: -2, scale: 1.12 }}
                  transition={{ duration: 0.08 }}
                  disabled={done}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-[10px] font-bold select-none cursor-pointer disabled:opacity-40"
                  style={{
                    background: isActive ? SOFT2 : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isActive ? BORD2 : BORD}`,
                    color: isActive ? '#fff' : PK,
                    boxShadow: isActive ? `0 0 8px rgba(241,62,147,0.45)` : '0 2px 0 rgba(241,62,147,0.2)',
                  }}>
                  {k}
                </motion.button>
              );
            })}
          </div>
        ))}

        {/* Space / Backspace / Reset row */}
        <div className="flex gap-1.5 mt-0.5 flex-wrap justify-center">
          {[['SPC', 'SPACE', 'min-w-20'], ['BACK', '⌫', 'min-w-12']].map(([key, label, cls]) => {
            const isActive = activeKey === key;
            return (
              <motion.button key={key} type="button"
                onClick={() => onKey(key)}
                animate={isActive ? { y: 2, scale: 0.97 } : { y: 0, scale: 1 }}
                whileHover={done ? {} : { y: -2 }}
                transition={{ duration: 0.08 }}
                disabled={done}
                className={`h-7 sm:h-8 rounded-md flex items-center justify-center text-[10px] font-bold select-none cursor-pointer px-3 disabled:opacity-40 ${cls}`}
                style={{
                  background: isActive ? SOFT2 : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${isActive ? BORD2 : BORD}`,
                  color: PK,
                  boxShadow: '0 2px 0 rgba(241,62,147,0.2)',
                }}>
                {label}
              </motion.button>
            );
          })}
          <motion.button type="button" onClick={onReset}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="h-7 sm:h-8 rounded-md px-3 text-[10px] font-bold cursor-pointer"
            style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}>
            Reset
          </motion.button>
        </div>
      </div>

      {/* Mobile: reset only */}
      <div className="flex sm:hidden justify-end">
        <motion.button type="button" onClick={onReset}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg text-xs font-bold"
          style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}>
          Reset
        </motion.button>
      </div>
    </div>
  );
}

/* ── Typewriting card ── */
function TypingCard() {
  const [typed, setTyped]         = useState('');
  const [activeKey, setActiveKey] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [done, setDone]           = useState(false);
  const [result, setResult]       = useState(null);

  const flash = useCallback(key => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 140);
  }, []);

  const finish = useCallback((currentTyped, currentStart) => {
    if (!currentTyped.trim()) return;
    const mins = (Date.now() - (currentStart || Date.now())) / 60000 || 0.01;
    const words = currentTyped.trim().split(/\s+/).length;
    const wpm = Math.round(words / mins);
    const correct = currentTyped.split('').filter((c, i) => c === SAMPLE[i]).length;
    const accuracy = Math.round((correct / Math.max(currentTyped.length, 1)) * 100);
    setResult({ wpm, accuracy });
    setDone(true);
  }, []);

  const applyKey = useCallback(key => {
    if (done) return;
    if (!startTime) setStartTime(Date.now());
    if (key === 'BACK') {
      setTyped(t => t.slice(0, -1));
    } else if (key === 'SPC') {
      setTyped(t => t.length < MAX ? t + ' ' : t);
    } else {
      setTyped(t => t.length < MAX ? t + key : t);
    }
    flash(key);
  }, [done, flash, startTime]);

  const reset = useCallback(() => {
    setTyped(''); setActiveKey(null);
    setStartTime(null); setDone(false); setResult(null);
  }, []);

  useEffect(() => {
    const onKeyDown = e => {
      if (done) return;
      if (e.key === 'Backspace')           { e.preventDefault(); applyKey('BACK'); }
      else if (e.key === ' ')              { e.preventDefault(); applyKey('SPC'); }
      else if (e.key === 'Enter')          { e.preventDefault(); finish(typed, startTime); }
      else if (/^[a-zA-Z]$/.test(e.key))  { applyKey(e.key.toUpperCase()); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [done, typed, startTime, applyKey, finish]);

  const badges  = ['Junior Level', 'Practice', 'Ongoing'];
  const metrics = [
    { Icon: Zap,    label: 'Speed',    value: result ? `${result.wpm} WPM` : '45 WPM', pct: result ? Math.min(result.wpm, 100) : 45 },
    { Icon: Target, label: 'Accuracy', value: result ? `${result.accuracy}%` : '96%',   pct: result ? result.accuracy : 96 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative group rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.04)', borderColor: BORD }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 40px ${GLOW}`; e.currentTarget.style.borderColor = BORD2; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BORD; }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(241,62,147,0.07) 0%, transparent 65%)' }} />
      <span className="absolute top-5 right-5 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: PK }} />

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-6 md:p-8">

        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: SOFT, border: `1px solid ${BORD}` }}>
              <Keyboard size={20} style={{ color: PK, filter: 'drop-shadow(0 0 6px rgba(241,62,147,0.5))' }} />
            </div>
            {badges.map(b => (
              <span key={b} className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: SOFT, border: `1px solid ${BORD}`, color: PK }}>{b}</span>
            ))}
          </div>

          <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#fde4f2' }}>
            Typewriting
            <span className="ml-2 text-sm font-medium" style={{ color: DIM }}>(Junior Level)</span>
          </h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(249,206,231,0.6)' }}>
            Practicing structured typing to improve speed and accuracy
          </p>

          {/* Sample hint */}
          <div className="w-full max-w-xl rounded-lg px-3 py-2 mb-6 font-mono text-xs"
            style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORD}`, color: DIM }}>
            <span className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: 'rgba(241,62,147,0.4)' }}>Try typing:</span>
            {SAMPLE}
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-3 mb-4">
            {metrics.map(({ Icon: MIcon, label, value, pct }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: SOFT, border: `1px solid ${BORD}` }}>
                  <MIcon size={13} style={{ color: PK }} />
                </div>
                <ProgressBar label={label} value={value} pct={pct} />
              </div>
            ))}
          </div>

          {/* Result banner */}
          {done && result && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-xl px-4 py-3 mb-3 flex items-center gap-3 flex-wrap"
              style={{ background: SOFT, border: `1px solid ${BORD2}` }}>
              <span className="text-xs font-semibold" style={{ color: PK }}>Result:</span>
              <span className="text-xs" style={{ color: '#f9cee7' }}>{result.wpm} WPM</span>
              <span className="text-xs" style={{ color: '#f9cee7' }}>{result.accuracy}% Accuracy</span>
              <motion.button onClick={reset} whileTap={{ scale: 0.95 }}
                className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: PK, color: '#fff' }}>
                Retry
              </motion.button>
            </motion.div>
          )}

          {!done && typed.length > 0 && (
            <p className="text-[10px] mb-3" style={{ color: DIM }}>Press Enter to finish & see results</p>
          )}

          <div className="flex items-start gap-2">
            <TrendingUp size={13} className="shrink-0 mt-0.5" style={{ color: DIM }} />
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(249,206,231,0.5)' }}>
              Focused on consistency, speed, and accuracy for better productivity.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-72 shrink-0 w-full">
          <KeyboardDisplay typed={typed} activeKey={activeKey} done={done} onKey={applyKey} onReset={reset} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <motion.p
        className="text-center text-sm mb-10 max-w-md mx-auto"
        style={{ color: DIM }}
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        Technologies and tools I work with
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>

      <TypingCard />

      <motion.div
        className="mt-12 h-px max-w-xs mx-auto rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${PK}, transparent)` }}
        initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
      />
    </SectionWrapper>
  );
}
