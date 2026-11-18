'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/models/Project';
import PixelWindow from '@/components/ui/PixelWindow';
import PixelBadge from '@/components/ui/PixelBadge';
import PixelButton from '@/components/ui/PixelButton';
import { DIFFICULTY_LABELS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <Link
          href="/#projetos"
          className="font-pixel text-[10px] text-neon-cyan hover:text-neon-green transition-colors uppercase"
        >
          ← Voltar ao mapa
        </Link>
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-8 text-center">
        <p className="font-pixel text-[10px] text-gray-500 uppercase mb-2">
          {project.chapter} · {project.year}
        </p>
        <h1 className="font-pixel text-xl md:text-3xl text-neon-green mb-3 leading-relaxed">
          {project.title}
        </h1>
        <p className="font-terminal text-xl text-neon-cyan mb-4">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <PixelBadge color="yellow">{DIFFICULTY_LABELS[project.difficulty]}</PixelBadge>
          <PixelBadge color="green">{project.status}</PixelBadge>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <PixelWindow title="Descrição da Missão" accent="green" className="mb-6">
          <p className="font-terminal text-xl text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>
        </PixelWindow>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PixelWindow title="Objetivos" accent="cyan">
          <ul className="space-y-2">
            {project.objectives.map((obj, i) => (
              <li key={i} className="font-terminal text-lg text-gray-300 flex gap-2">
                <span className="text-neon-cyan">▸</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </PixelWindow>

        <PixelWindow title="Aprendizados" accent="purple">
          <ul className="space-y-2">
            {project.learnings.map((l, i) => (
              <li key={i} className="font-terminal text-lg text-gray-300 flex gap-2">
                <span className="text-neon-purple">★</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </PixelWindow>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <PixelWindow title="Tecnologias" accent="yellow" className="mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <PixelBadge key={t} color="yellow">
                {t}
              </PixelBadge>
            ))}
          </div>
        </PixelWindow>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
        <PixelButton variant="green" size="lg" href={project.repoUrl} external>
          Ver Repositório
        </PixelButton>
        <PixelButton variant="cyan" size="lg" href="/#projetos">
          Explorar Outras Fases
        </PixelButton>
      </motion.div>
    </motion.article>
  );
}