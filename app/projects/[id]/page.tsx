import { portfolioData } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Lightbulb, Route, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const sections = [
  { key: 'problem', title: 'Problem', icon: Target },
  { key: 'approach', title: 'Approach', icon: Route },
  { key: 'contribution', title: 'My contribution', icon: CheckCircle2 },
  { key: 'learning', title: 'Key learning', icon: Lightbulb },
] as const;

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24">
      <section className="section-shell pb-16">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm font-bold">
          <ArrowLeft size={17} />
          Back to work
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase" style={{ color: project.accent }}>
              {project.role}
            </p>
            <h1 className="font-display text-6xl leading-none md:text-8xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5f5a52]">{project.description}</p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-black/15 bg-white p-2 shadow-2xl shadow-black/10">
            <Image src={project.image} alt={`${project.title} hero image`} fill sizes="(min-width: 1024px) 48vw, 92vw" className="rounded-[1.5rem] object-cover" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-[#161616] py-8 text-[#f6f1e8]">
        <div className="section-shell grid gap-4 md:grid-cols-2">
          {project.metrics?.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/15 p-6">
              <p className="text-5xl font-black" style={{ color: project.accent }}>
                {metric.value}
              </p>
              <p className="mt-2 font-semibold text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.key} className="rounded-3xl border border-black/15 bg-white/55 p-6 md:p-8">
                <Icon className="mb-5 h-8 w-8" style={{ color: project.accent }} />
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-4 leading-8 text-[#5f5a52]">{project[item.key]}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-black/15 bg-white/60 p-6 md:p-8">
          <h2 className="mb-6 text-3xl font-black">Visual notes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={image} className={`relative min-h-[240px] overflow-hidden rounded-2xl border border-black/15 bg-white ${index === 0 ? 'md:col-span-2 md:row-span-2 md:min-h-[500px]' : ''}`}>
                <Image src={image} alt={`${project.title} visual ${index + 1}`} fill sizes="(min-width: 768px) 33vw, 92vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-3xl font-black">Technologies</h2>
            <p className="mt-3 leading-7 text-[#5f5a52]">{project.impact}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-black/15 bg-[#161616] px-4 py-2 text-sm font-bold text-[#f6f1e8]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-black bg-[#f2a900] p-8 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-display text-4xl leading-none md:text-6xl">Want to talk about a similar system?</h2>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#161616] px-5 py-3 font-black text-[#f6f1e8] hover:-translate-y-0.5">
              Contact Ayushya <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
