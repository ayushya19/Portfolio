'use client';

import { portfolioData } from '@/data/portfolio';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-10 pb-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/50 px-3 py-2 text-sm font-semibold text-[#4f4b45] shadow-sm">
            <Sparkles size={16} className="text-[#e94f7a]" />
            Immersive tech, AI systems, quantum learning
          </div>

          <h1 className="font-display text-[clamp(3.6rem,11vw,9.5rem)] leading-[0.86] tracking-normal text-[#161616]">
            Ayushya
            <span className="block italic text-[#3867ff]">Rao</span>
          </h1>

          <div className="mt-8 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
            <p className="text-xl font-semibold leading-tight text-[#161616] md:text-2xl">
              {portfolioData.title} building practical XR, simulation, and intelligent digital human systems.
            </p>
            <p className="max-w-xl text-base leading-7 text-[#5f5a52] md:text-lg">{portfolioData.introduction}</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#161616] px-5 py-3 font-semibold text-[#f6f1e8] hover:-translate-y-0.5"
            >
              View work <ArrowDown size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/50 px-5 py-3 font-semibold text-[#161616] hover:-translate-y-0.5 hover:bg-white"
            >
              <Mail size={18} /> {portfolioData.email}
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.92fr_0.62fr] lg:items-stretch">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-black/15 bg-white shadow-2xl shadow-black/10">
            <Image
              src="assets/portfolio/ayushya-rao.jpg"
              alt="Portrait of Ayushya Rao"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-top"
            />
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-black/15 bg-[#161616] p-2 shadow-xl shadow-black/10">
              <Image
                src="assets/portfolio/motion-capture-suit.png"
                alt="Motion capture suit project preview"
                width={620}
                height={420}
                className="aspect-[4/3] rounded-xl object-cover"
              />
              <p className="px-2 py-3 text-sm font-semibold text-[#f6f1e8]">Motion capture lab</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/15 bg-white p-2 shadow-xl shadow-black/10">
              <Image
                src="assets/portfolio/live-quantum-circuit.png"
                alt="Live quantum circuit project preview"
                width={660}
                height={430}
                className="aspect-[4/3] rounded-xl object-cover"
              />
              <div className="grid gap-1 px-2 py-3 text-xs font-semibold uppercase text-[#5f5a52]">
                {featured.map((project) => (
                  <span key={project.id} className="truncate">
                    {project.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee border-y border-black bg-[#161616] py-4 text-[#f6f1e8]">
        <div className="marquee-track gap-8 text-sm font-semibold uppercase">
          {Array.from({ length: 2 }).map((_, loop) =>
            ['VR Safety', 'Digital Humans', '3D Pose Reconstruction', 'Quantum Simulation', 'Motion Capture', 'Human-Centered Tools'].map(
              (item) => (
                <span key={`${loop}-${item}`} className="flex items-center gap-8">
                  {item}
                  <span className="h-2 w-2 rounded-full bg-[#f2a900]" />
                </span>
              ),
            ),
          )}
        </div>
      </div>
    </section>
  );
}
