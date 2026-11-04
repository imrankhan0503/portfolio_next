"use client";
import { useEffect, useState } from "react";

const links = [["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Nav() {
  const [dark, setDark] = useState(false);


  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold">IK</a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map(([l, h]) => (<li key={h}><a href={h} className="text-muted hover:text-ink">{l}</a></li>))}
          <li>
           <button suppressHydrationWarning onClick={toggle} aria-label="Toggle dark mode" className="rounded-full border border-line px-3 py-1 text-muted hover:text-ink">
            {dark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}