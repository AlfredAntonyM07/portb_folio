import { ArrowUpRight, BarChart3, Boxes, BriefcaseBusiness, Lightbulb, Search } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const interests = [
  { icon: Search, title: "Business analysis", detail: "Understanding needs, mapping processes, and making requirements easier to act on.", skills: "Problem framing · Clear communication" },
  { icon: BarChart3, title: "Data analytics", detail: "Exploring information, finding patterns, and sharing useful, decision-ready takeaways.", skills: "Data interpretation · Reporting" },
  { icon: BriefcaseBusiness, title: "Business operations", detail: "Looking at how work flows across teams and where thoughtful improvements can help.", skills: "Systems thinking · Collaboration" },
  { icon: Boxes, title: "Supply chain & inventory", detail: "Interested in how planning, availability, and information support reliable operations.", skills: "Analytical thinking · Business systems" },
  { icon: Lightbulb, title: "Technology for business", detail: "Using software and data concepts to address practical needs with people in mind.", skills: "Technical fluency · Problem solving" },
];

export default function CareerInterests() {
  return (
    <section className="section section-interests" id="interests">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Where I’d like to contribute"
          title="Business questions. Analytical thinking. Practical solutions."
          description="I’m exploring early-career roles where curiosity and a cross-disciplinary foundation can make a difference."
        />
        <div className="interest-list">
          {interests.map(({ icon: Icon, title, detail, skills }, index) => (
            <article className="interest-item" key={title}>
              <span className="interest-index">0{index + 1}</span>
              <span className="interest-icon"><Icon size={20} strokeWidth={1.6} /></span>
              <div className="interest-main"><h3>{title}</h3><p>{detail}</p></div>
              <p className="interest-skills">{skills}</p>
              <ArrowUpRight className="interest-arrow" size={17} />
            </article>
          ))}
        </div>
        <p className="interest-disclaimer">Supply chain and inventory are areas of interest, not claimed areas of professional experience.</p>
      </div>
    </section>
  );
}
