import { SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t-4 border-neon-green bg-bg-deep">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-pixel text-[10px] text-gray-400 uppercase">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p className="font-terminal text-lg text-neon-green">
          &gt; jogo salvo com sucesso_
        </p>
      </div>
    </footer>
  );
}