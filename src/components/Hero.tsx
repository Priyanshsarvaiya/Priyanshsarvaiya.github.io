import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="section" aria-labelledby="hero-title">
      <div className="container-app">
        {/* decorative bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] select-none bg-gradient-to-b from-violet-600/20 to-transparent blur-3xl"
        />

        <div className="glass p-8 md:p-12 text-center">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h1"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-sky-300">
              {site.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-lg text-neutral-300"
          >
            {site.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-neutral-400"
          >
            Building AI, DevOps, and full-stack experiences with a focus on clean UX,
            automation, and shipping real products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-7 flex justify-center gap-3"
          >
            <Link to="/resume" className="btn btn-primary">
              View Resume
            </Link>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </motion.div>

          {/* tiny helper for scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-2 text-sm text-neutral-400"
          >
            <span>Explore my work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}