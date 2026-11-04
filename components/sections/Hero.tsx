import Image from "next/image";
import { site } from "@/data/site";
import photo from "@/app/assets/images/imran.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:py-28">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {site.status}
          </p>
          <h1 className="rise rise-2 mt-6 font-display text-6xl font-extrabold leading-none md:text-8xl">
            Hi, I'm {site.name}
          </h1>
          <p className="rise rise-3 mt-4 font-display text-2xl text-accent">{site.role}</p>
          <p className="rise rise-3 mt-4 max-w-lg text-lg text-muted">{site.tagline}</p>

          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-accent px-6 py-3 font-medium text-white">
              View my work
            </a>
            <a href="#contact" className="rounded-lg border border-line bg-surface px-6 py-3 font-medium">
              Contact me
            </a>
            {site.cv && (
              <a href={site.cv} download className="rounded-lg border border-line bg-surface px-6 py-3 font-medium">
                Download CV
              </a>
            )}
          </div>

          <div className="rise rise-3 mt-6 flex gap-5 text-sm font-medium">
            <a className="underline" href={`https://github.com/${site.github}`}>GitHub</a>
            {site.linkedin && <a className="underline" href={site.linkedin}>LinkedIn</a>}
          </div>
        </div>

        <Image
          src={photo}
          alt={`Portrait of ${site.name}`}
          width={260}
          height={260}
          priority
          className="rise rise-2 h-48 w-48 rounded-full border-4 border-surface object-cover shadow-xl md:h-64 md:w-64"
        />
      </div>
    </section>
  );
}