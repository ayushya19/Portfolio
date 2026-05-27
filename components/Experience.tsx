'use client';

import { credentials, experienceItems, publications, skillClusters, systemHighlights } from '@/data/portfolio';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="border-y border-black/15 bg-white/40 py-24">
      <div className="section-shell">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#13a89e]">Resume signal</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">Experience without the PDF maze.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5f5a52]">
            I consolidated the repeated experience across the resume variants into a readable timeline: research, XR product delivery, AI systems, spatial computing, and measurable product outcomes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {experienceItems.map((item) => (
              <article key={`${item.company}-${item.period}`} className="rounded-3xl border border-black/15 bg-[#f6f1e8] p-6 md:p-8">
                <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase text-[#3867ff]">
                      <BriefcaseBusiness size={16} />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-black leading-tight">{item.role}</h3>
                    <p className="mt-1 font-semibold text-[#5f5a52]">
                      {item.company} · {item.location}
                    </p>
                  </div>
                </div>
                <p className="max-w-3xl leading-8 text-[#5f5a52]">{item.summary}</p>
                <div className="mt-6 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <p key={highlight} className="rounded-2xl border border-black/10 bg-white/60 p-4 leading-7 text-[#3f3a35]">
                      {highlight}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/15 px-3 py-1 text-xs font-bold uppercase text-[#5f5a52]">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-black bg-[#161616] p-6 text-[#f6f1e8] md:p-8">
              <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase text-[#f2a900]">
                <GraduationCap size={17} />
                Education
              </div>
              <div className="space-y-5">
                {credentials.map((item) => (
                  <div key={item.title} className="border-t border-white/15 pt-5 first:border-t-0 first:pt-0">
                    <p className="text-xl font-black">{item.title}</p>
                    <p className="mt-1 text-sm font-semibold text-white/60">
                      {item.institution} · {item.period}
                    </p>
                    <p className="mt-3 leading-7 text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/15 bg-[#f2a900] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase">
                <BookOpen size={17} />
                Publications
              </div>
              <div className="space-y-5">
                {publications.map((item) => (
                  <div key={item.title} className="border-t border-black/15 pt-5 first:border-t-0 first:pt-0">
                    <p className="text-xl font-black">{item.title}</p>
                    <p className="mt-1 text-sm font-semibold text-black/55">
                      {item.venue} · {item.year}
                    </p>
                    <p className="mt-3 leading-7 text-black/70">{item.detail}</p>
                    {item.href && (
                      <a href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-black hover:opacity-70">
                        Read abstract <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systemHighlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/15 bg-white/65 p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-[#e94f7a]">
                <Layers3 size={16} />
                {item.metric}
              </div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5f5a52]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-black/15 px-3 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/15 bg-[#161616] p-6 text-[#f6f1e8] md:p-8">
          <p className="mb-6 text-sm font-black uppercase text-[#13a89e]">Capability map</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {skillClusters.map((cluster) => (
              <div key={cluster.title}>
                <h3 className="mb-3 text-lg font-black">{cluster.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/75">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
