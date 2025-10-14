import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { site } from "../data/site";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="content" className="flex flex-col gap-24">
      <Hero />

      {/* Quick intro / callout below hero */}
      <section
        id="intro"
        className="section container-app text-center text-neutral-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h2 mb-4"
        >
          Turning ideas into reality
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-neutral-400 leading-relaxed"
        >
          I'm passionate about solving real-world problems with code — from
          AI-assisted development to scalable DevOps infrastructure. Below are
          some of my featured projects and skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
        </motion.div>
      </section>
    </main>
  );
}