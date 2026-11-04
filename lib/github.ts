import { site } from "@/data/site";
export type Repo = { id: number; name: string; description: string | null; html_url: string; homepage: string | null; language: string | null; fork: boolean; topics?: string[] };

export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${site.github}/repos?per_page=100&sort=updated`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json", ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) },
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork && r.name !== "portfolio");
  } catch {
    return [];
  }
}
