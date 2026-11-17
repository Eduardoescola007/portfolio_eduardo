export interface Skill {
    name: string;
    level: number; // 0 a 100
    category: 'language' | 'framework' | 'tool' | 'concept';
    color: 'green' | 'cyan' | 'pink' | 'purple' | 'yellow';
  }