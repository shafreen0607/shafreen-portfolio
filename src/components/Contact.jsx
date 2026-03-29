import { useRef, useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import { Phone, Mail, ExternalLink, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

// ── EmailJS config (loaded from .env) ─────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ───────────────────────────────────────────────────────────────

const PK    = '#F13E93';
const SOFT  = 'rgba(241,62,147,0.1)';
const SOFT2 = 'rgba(241,62,147,0.16)';
const BORD  = 'rgba(241,62,147,0.22)';
const BORD2 = 'rgba(241,62,147,0.45)';
const GLOW  = '0 0 28px rgba(241,62,147,0.22)';
const DIM   = 'rgba(241,62,147,0.55)';

const contacts = [
  { Icon: Phone,        label: 'Phone',    value: '9095848499',              href: 'tel:9095848499' },
  { Icon: Mail,         label: 'Email',    value: 'shafreens06@gmail.com',   href: 'mailto:shafreens06@gmail.com' },
  { Icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/shafreen', href: 'https://linkedin.com/in/shafreen-syed-mohamed-06a7aa336' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

const inputBase = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#e2e8f0',
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleFocus = e => {
    e.target.style.borderColor = BORD2;
    e.target.style.boxShadow = '0 0 0 3px rgba(241,62,147,0.08)';
  };
  const handleBlur = e => {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" light>
      <div className="max-w-3xl mx-auto">

        {/* CTA header */}
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#fde4f2' }}>
            Let's Build Something Together
          </h3>
          <p className="text-sm" style={{ color: DIM }}>
            Open to internships, collaborations, and backend roles
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {contacts.map(({ Icon: ContactIcon, label, value, href }, i) => (
            <motion.a
              key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              {...fadeUp(0.1 + i * 0.1)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex flex-col items-center gap-3 bg-white/4 backdrop-blur-xl border border-white/8 rounded-2xl p-6 transition-all duration-300 group"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = GLOW; e.currentTarget.style.borderColor = BORD2; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: SOFT, border: `1px solid ${BORD}` }}>
                <ContactIcon size={20} style={{ color: PK, filter: 'drop-shadow(0 0 5px rgba(241,62,147,0.5))' }} />
              </div>
              <span className="text-xs uppercase tracking-widest" style={{ color: DIM }}>{label}</span>
              <span className="text-sm font-medium text-center break-all" style={{ color: '#f9cee7' }}>{value}</span>
            </motion.a>
          ))}
        </div>

        {/* Form card */}
        <motion.div {...fadeUp(0.35)} className="bg-white/4 backdrop-blur-xl border border-white/8 rounded-2xl p-7 md:p-8">
          <div className="mb-6">
            <h3 className="font-bold text-lg" style={{ color: '#fde4f2' }}>Send a Message</h3>
            <p className="text-xs mt-1" style={{ color: DIM }}>Fill in the form and I'll get back to you</p>
          </div>

          <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* IMPORTANT: name attributes must match EmailJS template variables exactly */}
              <input
                type="text" name="user_name" placeholder="Your Name" required
                className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:text-slate-600"
                style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
              />
              <input
                type="email" name="user_email" placeholder="Your Email" required
                className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:text-slate-600"
                style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
              />
            </div>

            <input
              type="text" name="subject" placeholder="Subject (e.g. Internship Opportunity)"
              className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:text-slate-600"
              style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
            />

            <textarea
              rows={5} name="message" placeholder="Your Message" required
              className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:text-slate-600 resize-none"
              style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
            />

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                style={{ background: 'rgba(241,62,147,0.08)', border: `1px solid ${BORD}`, color: PK }}>
                <CheckCircle2 size={15} /> Message sent! I'll reply within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}>
                <AlertCircle size={15} /> Something went wrong. Please try again or email directly.
              </div>
            )}

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(to right, #F13E93, #ff6eb4)`,
                  color: '#fff',
                  boxShadow: '0 0 22px rgba(241,62,147,0.4)',
                }}
                onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 0 35px rgba(241,62,147,0.6)'; }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(241,62,147,0.4)'}
              >
                <Send size={15} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              <p className="flex items-center gap-1.5 text-xs" style={{ color: DIM }}>
                <Clock size={12} /> I typically respond within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
