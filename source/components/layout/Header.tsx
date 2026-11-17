import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-sm border-b-4 border-neon-green">
      <NavBar />
    </header>
  );
}