import PixelButton from '@/components/ui/PixelButton';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-pixel text-neon-red text-4xl md:text-6xl">GAME OVER</h1>
      <p className="font-terminal text-2xl text-gray-300">
        Fase não encontrada. O herói se perdeu no mapa.
      </p>
      <PixelButton variant="green" href="/">
        Voltar ao início
      </PixelButton>
    </main>
  );
}