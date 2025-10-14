import { type FormEvent, useState } from "react";
import { site } from "../data/site";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string;
    if (!formspreeId) return setStatus("Missing Formspree ID (set VITE_FORMSPREE_ID in .env)");
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    setStatus(res.ok ? "Thanks! I’ll reply soon." : "Something went wrong. Try email.");
  }

  return (
    <main id="content">
      <section className="section container-app">
        <div className="max-w-xl mx-auto card">
          <h1 className="h2">Contact</h1>
          <p className="mt-2 text-neutral-300">
            Prefer email?{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3"
            />
            <button className="w-full btn btn-primary">Send</button>
            {status && <p className="text-center text-neutral-300">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}