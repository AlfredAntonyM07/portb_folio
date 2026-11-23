import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const education = [
  {
    period: "2023 — 2027", level: "UNDERGRADUATE", title: "B.Tech — Computer Science and Business Systems",
    school: "Kalaignar Karunanidhi Institute of Technology (KIT)", location: "Coimbatore",
    result: "CGPA 7.34 / 10", description: "An interdisciplinary program connecting computer science, data analytics, and business management.", featured: true,
  },
  {
    period: "2022 — 2023", level: "HIGHER SECONDARY · HSC", title: "Higher Secondary", school: "Ambal Matric Higher Secondary School", location: "Sirumugai", result: "63.5%",
  },
  {
    period: "2020 — 2021", level: "SECONDARY · SSLC", title: "Secondary School", school: "SVGV Matric Higher Secondary School", location: "Karamadai", result: "",
  },
];

export default function Education() {
  return (
    <section className="section section-education" id="education">
      <div className="page-shell">
        <SectionHeading eyebrow="Education" title="An interdisciplinary foundation." />
        <div className="education-list">
          {education.map(({ period, level, title, school, location, result, description, featured }, index) => (
            <article className={`education-row${featured ? " education-row--featured" : ""}`} key={title}>
              <div className="education-period">{period}</div>
              <div className="education-marker">{featured ? <GraduationCap size={17} /> : <BookOpen size={15} />}</div>
              <div className="education-content">
                <div className="education-meta"><span>{level}</span>{result && <span className="education-result">{result}</span>}</div>
                <h3>{title}</h3>
                <p className="education-school">{school} <span>·</span> {location}</p>
                {description && <p className="education-description">{description}</p>}
              </div>
              <span className="education-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
