import { motion } from 'framer-motion';

export default function SectionWrapper({ id, title, children, light = false }) {
  return (
    <section id={id} className={`py-20 px-6 ${light ? 'bg-white/[0.015]' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ filter: 'drop-shadow(0 0 14px rgba(241,62,147,0.3))' }}>
            {title}
          </h2>
          <div className="w-16 h-0.5 mx-auto rounded-full"
            style={{ background: 'linear-gradient(to right, #F13E93, #ff6eb4)' }} />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
