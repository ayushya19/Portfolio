'use client';

import { BrainCircuit, Cuboid, Gauge, UsersRound } from 'lucide-react';

const highlights = [
  {
    icon: Cuboid,
    title: 'Immersive systems',
    description: 'VR/XR environments, motion capture, haptics, 3D simulation, and Unity-based training flows.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent media',
    description: 'Computer vision, pose reconstruction, digital humans, lip sync, emotional response, and real-time pipelines.',
  },
  {
    icon: UsersRound,
    title: 'Product leadership',
    description: 'Cross-functional coordination, customer feedback, technical planning, research writing, and delivery.',
  },
  {
    icon: Gauge,
    title: 'Measured impact',
    description: 'Projects with clear outcomes: 41% injury-risk reduction, 200+ students educated, and sub-second response time.',
  },
];

const onlineTools = [
  { name: 'Unity', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Blender', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#e94f7a]">Profile</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">A builder between lab and field.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52]">
              I like projects where the prototype has to survive contact with people: workers training for dangerous procedures, students trying to understand quantum ideas, or teams making virtual humans feel alive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-black/15 bg-white/55 p-6">
                  <Icon className="mb-5 h-8 w-8 text-[#3867ff]" />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#5f5a52]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-black/15 bg-[#161616] p-6 text-[#f6f1e8] md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#f2a900]">Toolbox</p>
              <h3 className="mt-2 text-3xl font-black md:text-5xl">Stack I reach for</h3>
            </div>
            <p className="max-w-lg leading-7 text-white/65">
              Icons are loaded from Devicon online; the project visuals come from the local image folder.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {onlineTools.map((tool) => (
              <div key={tool.name} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-center">
                <img src={tool.src} alt="" className="mx-auto h-11 w-11 object-contain" loading="lazy" />
                <p className="mt-4 text-sm font-bold text-white/80">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
