import { motion } from "framer-motion";

interface TimelineItemProps {
  when: string;
  title: string;
  details: readonly string[];
}

export default function TimelineItem({ when, title, details }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* vertical line + dot */}
      <div className="absolute -left-[1.45rem] top-1 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />

      <div>
        <p className="text-sm text-violet-400 font-semibold">{when}</p>
        <h4 className="font-bold text-lg text-white mt-0.5">{title}</h4>
        <ul className="mt-1.5 list-disc list-inside text-neutral-400 text-sm leading-relaxed">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}