import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../data/site";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // Build tag list
  const allTags = useMemo(() => {
    const s = new Set<string>(["All"]);
    site.projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => (a === "All" ? -1 : a.localeCompare(b)));
  }, []);

  const [active, setActive] = useState<string>("All");
  const filtered = site.projects.filter(
    (p) => active === "All" || p.tags.includes(active)
  );

  return (
    <main id="content">
      <section className="section container-app">
        <header className="mb-6">
          <h1 className="h2">Projects</h1>
          <p className="mt-2 text-neutral-400">
            Filter by technology to explore highlighted work.
          </p>
        </header>

        {/* Tag filter */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {allTags.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`btn ${isActive ? "btn-primary" : ""}`}
                aria-pressed={isActive}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}