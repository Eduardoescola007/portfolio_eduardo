'use client';

import { motion } from 'framer-motion';
import { player } from '@/data/player';
import PixelButton from '@/components/ui/PixelButton';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-neon-green/40 animate-float" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-neon-cyan/40 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-neon-pink/60 animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="font-pixel text-xs text-neon-cyan mb-4 uppercase tracking-widest"
        >
          ── Bem-vindo ao meu jogo ──
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-pixel text-2xl md:text-4xl text-neon-green mb-6 leading-relaxed"
        >
          {player.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-terminal text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto"
        >
          {player.class} &middot; {player.title}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
          <PixelButton variant="green" size="lg" href="#projetos">
            ▶ Iniciar Jornada
          </PixelButton>
          <PixelButton variant="cyan" size="lg" href="#contato">
            ✉ Contato
          </PixelButton>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 font-pixel text-[10px] text-gray-500 animate-blink"
        >
          ▼ SCROLL PARA CONTINUAR ▼
        </motion.div>
      </motion.div>
    </section>
  );
}