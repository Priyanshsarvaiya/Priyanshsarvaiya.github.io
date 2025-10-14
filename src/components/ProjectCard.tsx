import { motion } from "framer-motion";
import Tag from "./Tag";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
  image?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="glass group overflow-hidden"
    >
      {/* image */}
      {project.image && (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="img-cover aspect-video transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100 opacity-95"
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-300">{project.summary}</p>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {/* links */}
        <div className="mt-4 flex flex-wrap gap-3">
          {project.repo && (
            <a
              className="btn"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              className="btn btn-primary"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}