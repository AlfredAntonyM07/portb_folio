import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section className="section section-experience" id="experience">
      <div className="page-shell">
        <SectionHeading eyebrow="Experience" title="Learning by building with a team." />
        <article className="experience-card">
          <div className="experience-date"><span>May — June</span><strong>2025</strong><span className="experience-duration">2 months</span></div>
          <div className="experience-rule"><span /></div>
          <div className="experience-content">
            <div className="experience-heading">
              <div><p className="experience-type">INTERNSHIP · SOFTWARE DEVELOPMENT</p><h3>Full Stack Java Developer Intern</h3></div>
              <ArrowUpRight className="experience-link-icon" size={19} />
            </div>
            <p className="experience-company">Ether Services <span>·</span> <MapPin size={14} /> Coimbatore, India</p>
            <p className="experience-summary">Contributed to web applications supporting day-to-day business functionality, working across user-facing and server-side modules.</p>
            <ul className="experience-points">
              <li>Built and maintained application modules using Java, HTML, CSS, JavaScript, and MySQL.</li>
              <li>Worked with teammates to identify and resolve issues, with attention to application performance.</li>
              <li>Gained practical experience connecting implementation details to user and business needs.</li>
            </ul>
            <div className="tag-row"><span>Java</span><span>JavaScript</span><span>HTML &amp; CSS</span><span>MySQL</span><span>Teamwork</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}
