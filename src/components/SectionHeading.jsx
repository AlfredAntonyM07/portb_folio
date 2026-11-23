import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-heading${light ? " section-heading--light" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.48, ease: "easeOut" }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}
