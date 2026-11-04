import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 py-8 text-sm text-muted">
      <div className="flex gap-5">
        <a className="underline" href={`https://github.com/${site.github}`}>GitHub</a>
        {site.linkedin && <a className="underline" href={site.linkedin}>LinkedIn</a>}
      </div>
      <p>© {new Date().getFullYear()} {site.name}, {site.role}</p>
    </footer>
  );
}