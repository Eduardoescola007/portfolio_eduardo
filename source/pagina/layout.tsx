import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eduardo | Dev de Jogos',
  description:
    'Portfólio em pixel art de um desenvolvedor em formação, transformando projetos em fases de jogo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${pressStart.variable} ${vt323.variable}`}>
      <body className="font-terminal antialiased">{children}</body>
    </html>
  );
}