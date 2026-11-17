export const pixelTheme = {
    colors: {
      bgDeep: '#0a0a1a',
      bgBase: '#1a1a2e',
      bgSoft: '#252544',
      green: '#00ff41',
      cyan: '#00ffff',
      pink: '#ff006e',
      purple: '#9d4edd',
      yellow: '#ffd700',
      red: '#ff0040',
    },
    shadows: {
      sm: '4px 4px 0 0 rgba(0, 0, 0, 0.8)',
      base: '6px 6px 0 0 rgba(0, 0, 0, 0.8)',
      lg: '8px 8px 0 0 rgba(0, 0, 0, 0.8)',
    },
  } as const;
  
  export type PixelColor = keyof typeof pixelTheme.colors;