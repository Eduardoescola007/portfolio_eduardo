'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: { once?: boolean; margin?: string } = {}
) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? '-100px',
  });

  return { ref, isInView };
}