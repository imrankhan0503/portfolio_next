// import Image from "next/image";
// import pic from "./assets/images/imran.png";
// import Nav from "@/components/Nav";
// import ContactForm from "@/components/ContactForm";
// import { site, skills, highlights } from "@/data/site";
// import { getRepos } from "@/lib/github";

// export const revalidate = 3600; // refresh GitHub projects every hour

// export default async function Home() {
//   const repos = await getRepos();

//   return (
//     <>
//       <Nav />
//       <main id="top">
//         {/* HERO */}
//         <section className="relative">
//           <div className="hero-glow absolute inset-x-0 top-0 h-96" />
//           <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:py-28">
//             <div>
//               <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm">
//                 <span className="h-2 w-2 rounded-full bg-green-500" />
//                 {site.status}
//               </p>
//               <h1 className="rise rise-2 mt-6 font-display text-6xl font-extrabold leading-none md:text-8xl">
//                 Hi, I'm {site.name}
//               </h1>
//               <p className="rise rise-3 mt-4 font-display text-2xl text-accent">
//                 {site.role}
//               </p>
//               <p className="rise rise-3 mt-4 max-w-lg text-lg text-muted">
//                 {site.tagline}
//               </p>
//               <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
//                 <a
//                   href="#projects"
//                   className="rounded-lg bg-accent px-6 py-3 font-medium text-white"
//                 >
//                   View my work
//                 </a>
//                 <a
//                   href="#contact"
//                   className="rounded-lg border border-line bg-surface px-6 py-3 font-medium"
//                 >
//                   Contact me
//                 </a>
//               </div>
//             </div>
//             <Image
//               src={pic}
//               alt={`Portrait of ${site.name}`}
//               width={260}
//               height={260}
//               priority
//               className="rise rise-2 h-48 w-48 rounded-full border-4 border-surface object-cover shadow-xl md:h-64 md:w-64"
//             />
//           </div>
//         </section>

//         {/* STRENGTHS */}
//         <section className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
//           {highlights.map((item) => (
//             <div
//               key={item.title}
//               className="rounded-xl border border-line bg-surface p-6"
//             >
//               <h3 className="font-display text-lg font-bold">{item.title}</h3>
//               <p className="mt-2 text-muted">{item.text}</p>
//             </div>
//           ))}
//         </section>

//         {/* ABOUT */}
//         <section className="mx-auto max-w-5xl px-6 py-20">
//           <Title>About me</Title>
//           <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
//             {site.about}
//           </p>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="mx-auto max-w-5xl px-6 pb-20">
//           <Title>Projects</Title>
//           <p className="mt-3 text-muted">Pulled live from my GitHub account.</p>

//           {repos.length === 0 ? (
//             <p className="mt-8">
//               Projects could not be loaded right now. See them on{" "}
//               <a
//                 className="text-accent underline"
//                 href={`https://github.com/${site.github}`}
//               >
//                 GitHub
//               </a>
//               .
//             </p>
//           ) : (
//             <div className="mt-8 grid gap-5 md:grid-cols-2">
//               {repos.map((repo) => (
//                 <article
//                   key={repo.id}
//                   className="flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
//                 >
//                   <h3 className="font-display text-xl font-bold">
//                     {repo.name}
//                   </h3>
//                   <p className="mt-2 flex-1 text-muted">
//                     {repo.description ||
//                       "Front end project created during my studies."}
//                   </p>
//                   <div className="mt-5 flex items-center gap-4 text-sm">
//                     {repo.language && (
//                       <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
//                         {repo.language}
//                       </span>
//                     )}
//                     <a className="font-medium underline" href={repo.html_url}>
//                       Code
//                     </a>
//                     {repo.homepage && (
//                       <a className="font-medium underline" href={repo.homepage}>
//                         Live demo
//                       </a>
//                     )}
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* SKILLS */}
//         <section id="skills" className="mx-auto max-w-5xl px-6 pb-20">
//           <Title>Skills</Title>
//           <div className="mt-8 grid gap-8 md:grid-cols-3">
//             {Object.entries(skills).map(([group, items]) => (
//               <div key={group}>
//                 <h3 className="font-display text-lg font-bold">{group}</h3>
//                 <ul className="mt-3 flex flex-wrap gap-2">
//                   {items.map((skill) => (
//                     <li
//                       key={skill}
//                       className="rounded-full border border-line bg-surface px-3 py-1 text-sm"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section id="contact" className="border-t border-line bg-surface">
//           <div className="mx-auto max-w-5xl px-6 py-20">
//             <Title>Let's work together</Title>
//             <p className="mb-8 mt-3 text-muted">
//               Have a role or project in mind? Send me a message.
//             </p>
//             <ContactForm />
//           </div>
//         </section>
//       </main>

//       <footer className="py-8 text-center text-sm text-muted">
//         © {new Date().getFullYear()} {site.name}, {site.role}
//       </footer>
//     </>
//   );
// }

// // Small reusable heading with an accent bar
// function Title({ children }: { children: React.ReactNode }) {
//   return (
//     <h2 className="flex items-center gap-3 font-display text-3xl font-bold">
//       <span className="h-8 w-1.5 rounded bg-accent" />
//       {children}
//     </h2>
//   );
// }


import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export const revalidate = 3600; // refresh GitHub projects every hour

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Highlights />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


