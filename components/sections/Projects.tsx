import Image from "next/image";
import Title from "@/components/Title";
import { site, featured, hiddenRepos } from "@/data/site";
import { getRepos, type Repo } from "@/lib/github";

export default async function Projects() {
  const allRepos = await getRepos();

  // Other repos = not hidden and not already shown as featured
  const featuredNames = featured.map((f) => f.name);
  const otherRepos = allRepos.filter( (r) => r.homepage && 
    !hiddenRepos.includes(r.name) && 
    !featuredNames.includes(r.name) )
    

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pb-20">
      <Title>Projects</Title>

      {/* Featured projects with screenshots (added in data/site.ts) */}
      {featured.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-1 hover:shadow-lg">
              {project.image && (
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={800}
                  height={450}
                  className="h-auto w-full border-b border-line"
                />
              )}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">{t}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm font-medium">
                  {project.live && <a className="underline" href={project.live}>Live demo</a>}
                  <a className="underline" href={project.code}>Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Other repos from GitHub */}
      {otherRepos.length > 0 && (
        <>
          <h3 className="mt-12 font-display text-xl font-bold">
            {featured.length > 0 ? "More on GitHub" : "From my GitHub"}
          </h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {otherRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}

      {allRepos.length === 0 && featured.length === 0 && (
        <p className="mt-8">
          Projects could not be loaded right now. See them on{" "}
          <a className="text-accent underline" href={`https://github.com/${site.github}`}>GitHub</a>.
        </p>
      )}
    </section>
  );
}

// A simple card for a GitHub repo
function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <h3 className="font-display text-xl font-bold">{repo.name}</h3>
      <p className="mt-2 flex-1 text-muted">
        {repo.description || "Front end project created during my studies."}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {repo.language && (
          <li className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">{repo.language}</li>
        )}
        {repo.topics?.map((topic) => (
          <li key={topic} className="rounded-full border border-line px-3 py-1 text-sm">{topic}</li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-medium">
        {repo.homepage && <a className="underline" href={repo.homepage}>Live demo</a>}
        <a className="underline" href={repo.html_url}>Code</a>
      </div>
    </article>
  );
}