'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link
        href="/"
        className="font-pixel text-xs text-neon-green hover:text-neon-cyan transition-colors"
      >
        &gt;_ eduardo.dev
      </Link>

      <ul className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-pixel text-[10px] text-gray-300 hover:text-neon-green transition-colors uppercase"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden font-pixel text-xs text-neon-green"
        aria-label="Menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <ul className="absolute top-full left-0 right-0 bg-bg-deep border-b-4 border-neon-green md:hidden flex flex-col gap-4 p-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-pixel text-[10px] text-gray-300 hover:text-neon-green transition-colors uppercase block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}