'use client';

import { portfolioData, studyEntry } from '@/data/portfolio';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24">
        <div className="section-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase text-[#3867ff]">Featured work</p>
              <h2 className="font-display text-5xl leading-none md:text-7xl">Selected experiments that became products.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f5a52]">
              A compact tour through safety training, motion reconstruction, expressive avatars, and quantum education. The work is technical, but the aim is always human: make hard things easier to practice, see, and understand.
            </p>
          </div>

          <div>
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="bg-[#161616] py-24 text-[#f6f1e8]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-white/70">
              <FlaskConical size={16} className="text-[#13a89e]" />
              Research poster
            </div>
            <h2 className="font-display text-5xl leading-none md:text-7xl">{studyEntry.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{studyEntry.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {studyEntry.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-sm font-semibold text-white/75">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/30">
            <Image
              src={studyEntry.image}
              alt="Error Processing in Industrial Environment study poster"
              width={1200}
              height={1600}
              className="max-h-[720px] w-full rounded-2xl object-cover object-top"
            />
            <a
              href="#contact"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[#f2a900] px-4 py-3 text-sm font-black text-[#161616] hover:-translate-y-0.5"
            >
              Discuss the study <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
