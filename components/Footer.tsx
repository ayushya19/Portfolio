import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-black/15 py-8">
      <div className="section-shell flex flex-col justify-between gap-4 text-sm font-semibold text-[#5f5a52] md:flex-row">
        <p>© {new Date().getFullYear()} {portfolioData.name}. Product engineering, research, and immersive systems.</p>
        <a href={`mailto:${portfolioData.email}`} className="text-[#161616] hover:opacity-70">
          {portfolioData.email}
        </a>
      </div>
    </footer>
  );
}
