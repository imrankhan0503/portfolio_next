export const site = {
  name: "Imran Khan",
  role: "Front End Developer",
  github: "imrankhan0503",
  linkedin: "https://www.linkedin.com/in/imrankhan0505",
  cv: "cv.pdf",
  status: "Open to opportunities", // change or delete this line's text anytime
  tagline: "I build fast, accessible and responsive websites with React and Next.js.",
  about:
    "I'm a front end development student who builds real projects, not just exercises. I care about clean, readable code, accessible interfaces and layouts that work on every screen. I use React, TypeScript and Next.js, and I write tests for what I build.",
};

// Repos you do NOT want shown (test repos, old exercises). Use the exact repo name.
export const hiddenRepos: string[] = [
  // "test",
  // "project1",
];

// Your best projects, shown first with a screenshot.
// Put screenshots in public/projects/ (e.g. public/projects/my-app.png).
// "name" must match the GitHub repo name exactly.
export type Featured = {
  name: string;
  title: string;
  description: string;
  tech: string[];
  image?: string; // e.g. "/projects/my-app.png"
  live?: string;
  code: string;
};
export const featured: Featured[] = [
  // {
  //   name: "my-repo-name",
  //   title: "Project title",
  //   description: "What it does and what you built, in one or two sentences.",
  //   tech: ["Next.js", "Supabase", "Tailwind CSS"],
  //   image: "/projects/my-repo-name.png",
  //   live: "https://my-project.vercel.app",
  //   code: "https://github.com/imrankhan0503/my-repo-name",
  // },
];

// Three short strengths shown under the hero
export const highlights = [
  { title: "Responsive", text: "Layouts that look right on phones, tablets and desktops.", proof: "auto" },
  { title: "Accessible", text: "Semantic HTML and keyboard-friendly interfaces for everyone.", proof: "auto" },
  { title: "Tested", text: "Automated tests with Jest to keep code reliable.", proof: "https://neon-reflex-test-tau.vercel.app/" },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "Tailwind CSS", "Material UI", "jQuery"],
  Backend: ["Node.js", "Express.js", "EJS"],
  Database: ["Supabase", "PostgreSQL", "SQL"],
  "Tools & Quality": ["GitHub", "Vercel", "npm", "Jest", "Automated Testing"],
};