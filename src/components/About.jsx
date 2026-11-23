import { ArrowUpRight, Compass, Lightbulb, UsersRound } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const traits = [
  { icon: Compass, title: "Business-aware", text: "Connects technical work to the problem it is meant to solve." },
  { icon: Lightbulb, title: "Analytical", text: "Enjoys exploring data, asking questions, and making findings clear." },
  { icon: UsersRound, title: "Collaborative", text: "Values thoughtful communication, listening, and shared progress." },
];

export default function About() {
  return (
    <section className="section section-about" id="about">
      <div className="page-shell">
        <SectionHeading eyebrow="A little about me" title="Curious about the why, not just the how." />
        <div className="about-layout">
          <div className="about-prose">
            <p className="about-lead">I’m a final-year Computer Science and Business Systems student, drawn to the point where business questions meet data and technology.</p>
            <p>My degree brings together computing, analytics, and business management. During my internship at Ether Services, I worked with a team on web applications and learned how user-facing and server-side work supports day-to-day business needs.</p>
            <p>Academic projects have let me explore financial decision-making, cooperative parking, and explainable machine learning. I’m now looking for an early-career opportunity where I can learn from a team, think through real problems, and contribute with care.</p>
            <a className="text-link" href="#contact">A bit more about my next step <ArrowUpRight size={15} /></a>
          </div>
          <div className="about-traits">
            {traits.map(({ icon: Icon, title, text }, index) => (
              <article className="trait-row" key={title}>
                <span className="trait-icon"><Icon size={18} strokeWidth={1.6} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="trait-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="about-footnote"><span>Currently based in</span><strong>Coimbatore, Tamil Nadu</strong><span className="footnote-divider" /><span>Interested in opportunities in India &amp; internationally</span></div>
      </div>
    </section>
  );
}
