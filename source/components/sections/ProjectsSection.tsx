'use client';

import { motion } from 'framer-motion';
import { useProjects } from '@/controllers/useProjects';
import { useScrollAnimation } from '@/controllers/useScrollAnimation';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { fadeInUp } from '@/lib/animations';

export default function ProjectsSection() {
  const { projects, total } = useProjects();
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="projetos" className="py-24 px-4 border-t-4 border-bg-soft">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-2xl text-neon-green mb-4">
            &gt; Fases Concluídas
          </h2>
          <p className="font-terminal text-xl text-gray-400">
            {total} fases registradas — cada uma um marco na jornada
          </p>
        </motion.div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}