import Title from "@/components/Title";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Title>Let's work together</Title>
        <p className="mb-8 mt-3 text-muted">Have a role or project in mind? Send me a message.</p>
        <ContactForm />
      </div>
    </section>
  );
}