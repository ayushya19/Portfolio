'use client';

import { Project } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group grid overflow-hidden border-t border-black/15 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-8"
    >
      <div className="mb-5 flex items-start justify-between gap-5 md:mb-0">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-[#706b63]">0{index + 1} / {project.role}</p>
          <h3 className="max-w-sm text-3xl font-black leading-none tracking-normal text-[#161616] md:text-5xl">
            {project.title}
          </h3>
        </div>
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-black/15 bg-white text-[#161616] group-hover:-translate-y-1 group-hover:bg-[#161616] group-hover:text-[#f6f1e8]"
          aria-hidden="true"
        >
          <ArrowUpRight size={22} />
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_0.72fr]">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-black/15 bg-white shadow-lg shadow-black/5">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 42vw, 92vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
          <div
            className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold uppercase text-white"
            style={{ backgroundColor: project.accent }}
          >
            {project.description}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-black/15 bg-white/55 p-5">
          <p className="text-base leading-7 text-[#5f5a52]">{project.problem}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-black/15 bg-[#f6f1e8] px-3 py-1 text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
