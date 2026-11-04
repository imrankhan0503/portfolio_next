import { highlights, hiddenRepos } from "@/data/site";
import { getRepos } from "@/lib/github";

export default async function Highlights() {
  const repos = await getRepos(); // cached, so no extra GitHub request
  const demo = repos.find((r) => r.homepage && !hiddenRepos.includes(r.name))?.homepage;

  return (
    <section className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
      {highlights.map((item) => {
        // "auto" = use the first live demo found, "" = no link
        const href = item.proof === "auto" ? demo : item.proof;
        return (
          <div key={item.title} className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-display text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.text}</p>
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-accent underline">
                Live demo
              </a>
            )}
          </div>
        );
      })}
    </section>
  );
}