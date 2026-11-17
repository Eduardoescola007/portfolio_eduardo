'use client';

import { useEffect, useRef } from 'react';

export function useGameLoop(update: (dt: number) => void, active = true) {
  const frame = useRef<number>(0);
  const last = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    last.current = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - last.current) / 1000, 0.1);
      last.current = time;
      update(dt);
      frame.current = requestAnimationFrame(loop);
    };

    frame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame.current);
  }, [update, active]);
}