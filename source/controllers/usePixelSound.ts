'use client';

import { useCallback, useRef } from 'react';

type SoundName = 'hover' | 'click' | 'success';

const SOUND_PATHS: Record<SoundName, string> = {
  hover: '/sounds/hover.wav',
  click: '/sounds/click.wav',
  success: '/sounds/success.wav',
};

export function usePixelSound(enabled = true) {
  const cache = useRef<Record<string, HTMLAudioElement>>({});

  const play = useCallback(
    (name: SoundName) => {
      if (!enabled || typeof window === 'undefined') return;

      try {
        if (!cache.current[name]) {
          cache.current[name] = new Audio(SOUND_PATHS[name]);
          cache.current[name].volume = 0.15;
        }
        const audio = cache.current[name];
        audio.currentTime = 0;
        audio.play().catch(() => {
          /* arquivo ausente ou autoplay bloqueado */
        });
      } catch {
        /* silêncio */
      }
    },
    [enabled]
  );

  return { play };
}