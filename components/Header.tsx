'use client';

import { portfolioData } from '@/data/portfolio';
import { Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Work', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Lab', href: '/#lab' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f6f1e8]/86 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-[#161616]">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#161616] text-sm text-[#f6f1e8]">AR</span>
          <span className="hidden sm:inline">{portfolioData.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#4f4b45] hover:bg-black hover:text-[#f6f1e8]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${portfolioData.email}`}
          className="hidden items-center gap-2 rounded-full border border-black bg-[#161616] px-4 py-2 text-sm font-semibold text-[#f6f1e8] hover:-translate-y-0.5 md:inline-flex"
        >
          <Mail size={16} />
          Email
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-black/15 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-black/10 bg-[#f6f1e8] md:hidden">
          <div className="section-shell flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-black/10 py-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${portfolioData.email}`} className="py-4 text-lg font-semibold">
              {portfolioData.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
