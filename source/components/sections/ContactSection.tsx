'use client';

import { motion } from 'framer-motion';
import { player } from '@/data/player';
import PixelWindow from '@/components/ui/PixelWindow';
import PixelButton from '@/components/ui/PixelButton';
import { useScrollAnimation } from '@/controllers/useScrollAnimation';
import { fadeInUp } from '@/lib/animations';

export default function ContactSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contato" className="py-24 px-4 border-t-4 border-bg-soft">
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-2xl text-neon-green mb-4">
            &gt; Continuar?
          </h2>
          <p className="font-terminal text-xl text-gray-400">Escolha sua próxima ação</p>
        </motion.div>

        <PixelWindow title="Menu de Contato" accent="green">
          <div className="flex flex-col gap-4">
            <PixelButton
              variant="green"
              size="lg"
              href={player.github}
              external
              className="w-full"
            >
              GitHub
            </PixelButton>
            <PixelButton
              variant="cyan"
              size="lg"
              href={`mailto:${player.email}`}
              className="w-full"
            >
              E-mail
            </PixelButton>
            {player.linkedin && (
              <PixelButton
                variant="purple"
                size="lg"
                href={player.linkedin}
                external
                className="w-full"
              >
                LinkedIn
              </PixelButton>
            )}
          </div>
        </PixelWindow>
      </div>
    </section>
  );
}