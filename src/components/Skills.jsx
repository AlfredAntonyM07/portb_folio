import { Activity, BriefcaseBusiness, Code2, Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const groups = [
  { icon: Activity, title: "Business & analytical", items: ["Data analysis", "Decision making", "Problem solving", "Reporting & presentation", "Business systems concepts"] },
  { icon: Code2, title: "Technical", items: ["Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Machine learning"] },
  { icon: BriefcaseBusiness, title: "Tools", items: ["MS Excel", "Google Sheets", "MS Word", "Google Docs", "MS PowerPoint", "GitHub"] },
  { icon: Handshake, title: "Professional", items: ["Communication", "Teamwork", "Active listening", "Collaboration"] },
];

export default function Skills() {
  return (
    <section className="section section-skills" id="skills">
      <div className="page-shell">
        <SectionHeading eyebrow="Skills & toolkit" title="A balanced foundation, still growing." description="Skills developed through coursework, project work, and collaboration." />
        <div className="skill-grid">
          {groups.map(({ icon: Icon, title, items }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={18} strokeWidth={1.7} /></span><span className="skill-number">0{index + 1}</span></div>
              <h3>{title}</h3>
              <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-note">No proficiency scores shown — these are areas I’m building through practice and experience.</p>
      </div>
    </section>
  );
}
