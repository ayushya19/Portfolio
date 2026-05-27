'use client';

import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="border-t border-black/15 py-24">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-black bg-[#f2a900] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase">Contact</p>
              <h2 className="font-display text-5xl leading-none md:text-8xl">Let&apos;s build the strange useful thing.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-black/70">
                I&apos;m open to immersive technology, AI media, simulation, research, and product engineering conversations.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${portfolioData.email}?subject=Portfolio%20conversation`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#161616] px-5 py-3 font-black text-[#f6f1e8] hover:-translate-y-0.5"
                >
                  <Mail size={18} />
                  Email me
                  <ArrowUpRight size={18} />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white/55 px-5 py-3 font-black hover:-translate-y-0.5 hover:bg-white"
                >
                  <Copy size={18} />
                  {copied ? 'Copied' : portfolioData.email}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
