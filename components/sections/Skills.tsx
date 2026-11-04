import Title from "@/components/Title";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 pb-20">
      <Title>Skills</Title>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-display text-lg font-bold">{group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((skill) => (
                <li key={skill} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}