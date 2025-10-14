import { site } from "../data/site";

export default function Skills() {
  return (
    <main id="content">
      <section className="section container-app">
        <header className="mb-6">
          <h1 className="h2">Skills</h1>
          <p className="mt-2 text-neutral-400">
            A snapshot of my core languages, frameworks, DevOps tools, and data/ML stack.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(site.skills).map(([cat, items]) => (
            <article key={cat} className="card">
              <h3 className="text-lg font-semibold">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="tag">{i}</span>
                ))}
              </div>

              {/* subtle bar just for visual polish */}
              <div className="mt-4 h-2 w-full rounded bg-white/10">
                <div className="h-2 w-3/4 rounded bg-violet-600" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}