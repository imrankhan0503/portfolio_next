"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xojjlove"}`, {
        method: "POST", headers: { Accept: "application/json" }, body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      form.reset(); setStatus("ok");
    } catch { setStatus("error"); }
  }
  const field = "mt-1 w-full rounded-md border border-line bg-surface px-3 py-2 focus:border-accent";
  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-4">
      <label className="text-sm font-medium">Name<input suppressHydrationWarning name="name" required className={field} /></label>
      <label className="text-sm font-medium">Email<input suppressHydrationWarning type="email" name="_replyto" required className={field} /></label>
      <label className="text-sm font-medium">Message<textarea name="message" rows={5} required className={field} /></label>
      <div className="flex items-center gap-4">
        <button suppressHydrationWarning disabled={status === "sending"} className="rounded-md bg-accent px-5 py-2.5 font-medium text-white disabled:opacity-60">
          Submit
        </button>
        <p role="status" className="text-sm">
          {status === "ok" && "Thanks, your message has been sent."}
          {status === "error" && "Something went wrong. Please try again."}
        </p>
      </div>
    </form>
  );
}
