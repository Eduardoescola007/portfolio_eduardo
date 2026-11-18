'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useScrollAnimation } from '@/controllers/useScrollAnimation';
import PixelWindow from '@/components/ui/PixelWindow';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const CATEGORY_LABELS: Record<string, string> = {
  language: 'Linguagem',
  framework: 'Framework',
  tool: 'Ferramenta',
  concept: 'Conceito',
};

export default function SkillsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-4 border-t-4 border-bg-soft">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-2xl text-neon-green mb-4">
            &gt; Inventário de Habilidades
          </h2>
          <p className="font-terminal text-xl text-gray-400">
            Ferramentas desbloqueadas ao longo da jornada
          </p>
        </motion.div>

        <PixelWindow title="Status do Jogador" accent="purple">
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                variants={fadeInUp}
                className="border-2 border-bg-soft p-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-pixel text-[10px] text-gray-200 uppercase">
                    {skill.name}
                  </span>
                  <span className="font-terminal text-sm text-gray-500">
                    {CATEGORY_LABELS[skill.category]}
                  </span>
                </div>
                <div className="h-3 bg-bg-deep border border-neon-purple relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    className="h-full bg-neon-purple"
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </PixelWindow>
      </div>
    </section>
  );
}