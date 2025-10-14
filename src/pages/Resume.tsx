export default function Resume() {
  return (
    <main id="content">
      <section className="section container-app">
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="h2">Resume</h1>
            <a className="btn btn-primary" href="/resume.pdf" download>
              Download PDF
            </a>
          </div>

          <div className="aspect-[1/1.414] w-full">
            <object data="/resume.pdf" type="application/pdf" className="w-full h-[80vh]">
              <p className="pdf-fallback">
                Your device cannot preview PDFs. Please use the download button above.
              </p>
            </object>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Resume Highlights</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-300">
              <li>IT Ops Intern @ Kochasoft - Windows/Linux, patching, triage</li>
              <li>Projects: ProveIt, Recommender, Grid Anomaly Detection</li>
              <li>Stack: TypeScript, React, Python, Docker</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}