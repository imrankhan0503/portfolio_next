import Title from "@/components/Title";
import { site } from "@/data/site";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Title>About me</Title>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.about}</p>
    </section>
  );
}