'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/models/Project';
import ProjectCard from './ProjectCard';
import { staggerContainer } from '@/lib/animations';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </motion.div>
  );
}