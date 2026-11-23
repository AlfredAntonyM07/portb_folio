import { ArrowUpRight, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Achievements() {
  return (
    <section className="section section-achievements" id="achievements">
      <div className="page-shell">
        <div className="achievement-panel">
          <div className="achievement-intro">
            <SectionHeading eyebrow="Outside the classroom" title="Practice makes progress." light />
            <p>Competitive programming has been a steady way to sharpen logical thinking and work through unfamiliar problems.</p>
            <p className="achievement-link"><Code2 size={15} /> CodeChef profile link not provided</p>
          </div>
          <div className="achievement-stats">
            <article><span>PROBLEMS SOLVED</span><strong>379</strong><small>on CodeChef</small></article>
            <div className="achievement-divider" />
            <article><span>CONTESTS</span><strong>99</strong><small>participated</small></article>
          </div>
          <span className="achievement-mark"><ArrowUpRight size={20} /></span>
        </div>
      </div>
    </section>
  );
}
