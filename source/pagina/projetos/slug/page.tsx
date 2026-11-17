import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/services/projectService';
import ProjectDetail from '@/components/projects/ProjectDetail';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Projeto não encontrado' };
  return {
    title: `${project.title} | Eduardo`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}