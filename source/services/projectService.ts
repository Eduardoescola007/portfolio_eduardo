import { projects } from '@/data/projects';
import type { Project } from '@/models/Project';

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.difficulty - b.difficulty);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getTotalProjects(): number {
  return projects.length;
}