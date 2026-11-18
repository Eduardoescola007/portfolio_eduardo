'use client';

import { motion } from 'framer-motion';
import { player } from '@/data/player';
import PixelWindow from '@/components/ui/PixelWindow';
import { useScrollAnimation } from '@/controllers/useScrollAnimation';
import { fadeInUp } from '@/lib/animations';

const STAT_LABELS: Record<string, string> = {
  code: 'Código',
  logic: 'Lógica',
  creativity: 'Criatividade',
  persistence: 'Persistência',
};

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24 px-4 border-t-4 border-bg-soft">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="font-pixel text-xl md:text-2xl text-neon-green mb-8 text-center">
            &gt; Sobre o Herói
          </h2>
        </motion.div>

        <PixelWindow title="Ficha do Personagem" accent="cyan">
          <p className="font-terminal text-xl text-gray-300 mb-8 leading-relaxed">
            {player.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(player.stats).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-[10px] text-neon-cyan uppercase">
                    {STAT_LABELS[key] ?? key}
                  </span>
                  <span className="font-pixel text-[10px] text-gray-400">{value}/100</span>
                </div>
                <div className="h-4 bg-bg-deep border-2 border-neon-cyan relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${value}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="h-full bg-neon-cyan"
                  />
                </div>
              </div>
            ))}
          </div>
        </PixelWindow>
      </div>
    </section>
  );
}