export type Difficulty = 1 | 2 | 3;

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  repoUrl: string;
  tech: string[];
  difficulty: Difficulty;
  chapter: string;
  objectives: string[];
  learnings: string[];
  status: 'concluído' | 'em andamento';
  year: number;
}