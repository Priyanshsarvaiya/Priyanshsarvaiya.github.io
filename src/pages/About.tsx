import { site } from "../data/site";
import TimelineItem from "../components/TimelineItem";

export default function About() {
  return (
    <main id="content">
      <section className="section">
        <div className="container-app grid items-start gap-8 md:grid-cols-3">
          {/* Left: photo + quick bio bullets */}
          <aside className="card md:col-span-1">
            <img
              src="/images/placeholder.png"
              alt="Priyansh headshot"
              className="w-40 h-40 object-cover rounded-2xl"
              loading="lazy"
            />
            <h2 className="h2 mt-4">About</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>• CS @ SFU</li>
              <li>• AI / DevOps / Full-Stack</li>
              <li>• Kochasoft - IT Ops Intern</li>
            </ul>
          </aside>

          {/* Right: timeline */}
          <section className="md:col-span-2">
            <div className="card">
              <h3 className="text-xl font-semibold">Timeline</h3>
              <div className="mt-4 space-y-6 border-l border-white/10 pl-6">
                {site.timeline.map((t) => (
                  <TimelineItem
                    key={`${t.when}-${t.title}`}
                    when={t.when}
                    title={t.title}
                    details={t.details}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}