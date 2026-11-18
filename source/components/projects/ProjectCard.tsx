'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/models/Project';
import PixelBadge from '@/components/ui/PixelBadge';
import PixelButton from '@/components/ui/PixelButton';
import { DIFFICULTY_LABELS } from '@/lib/constants';
import { usePixelSound } from '@/controllers/usePixelSound';
import { fadeInUp } from '@/lib/animations';

const DIFFICULTY_COLOR: Record<number, 'green' | 'yellow' | 'pink'> = {
  1: 'green',
  2: 'yellow',
  3: 'pink',
};

export default function ProjectCard({ project }: { project: Project }) {
  const { play } = usePixelSound();
  const accent = DIFFICULTY_COLOR[project.difficulty];

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      onMouseEnter={() => play('hover')}
      className="relative flex flex-col h-full border-4 border-bg-soft bg-bg-base shadow-pixel hover:border-neon-green transition-colors"
    >
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-pixel text-[9px] text-gray-500 uppercase">
            {project.chapter}
          </span>
          <PixelBadge color={accent}>{DIFFICULTY_LABELS[project.difficulty]}</PixelBadge>
        </div>
        <h3 className="font-pixel text-sm text-neon-green mb-1 leading-relaxed">
          {project.title}
        </h3>
        <p className="font-terminal text-base text-neon-cyan mb-3">{project.subtitle}</p>
        <p className="font-terminal text-lg text-gray-300 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="px-4 py-3 flex flex-wrap gap-1">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="font-pixel text-[8px] text-gray-400 border border-gray-600 px-1.5 py-1 uppercase"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto p-4 flex gap-2">
        <div className="flex-1">
          <PixelButton
            variant="green"
            size="sm"
            href={`/projetos/${project.slug}`}
            className="w-full"
          >
            Detalhes
          </PixelButton>
        </div>
        <PixelButton variant="cyan" size="sm" href={project.repoUrl} external>
          Repo
        </PixelButton>
      </div>
    </motion.article>
  );
}