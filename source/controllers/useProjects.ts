'use client';

import { useMemo } from 'react';
import { getAllProjects, getTotalProjects } from '@/services/projectService';

export function useProjects() {
  const projects = useMemo(() => getAllProjects(), []);
  const total = useMemo(() => getTotalProjects(), []);

  return { projects, total };
}