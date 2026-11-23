import { ArrowUpRight, Award } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const certificates = [
  ["01", "Algorithms for Searching, Sorting, and Indexing", "Coursera", "June 2025"],
  ["02", "Build a Full Website using WordPress", "Coursera", "December 2024"],
  ["03", "Web Development using HTML and CSS", "Infosys", "November 2024"],
  ["04", "Python Essentials 1 and 2", "Cisco Networking Academy", ""],
];

export default function Certifications() {
  return (
    <section className="section section-certifications" id="certifications">
      <div className="page-shell">
        <SectionHeading eyebrow="Continued learning" title="Certifications." />
        <div className="cert-list">
          {certificates.map(([number, title, issuer, date]) => (
            <article className="cert-row" key={number}>
              <span className="cert-number">{number}</span>
              <span className="cert-icon"><Award size={17} strokeWidth={1.6} /></span>
              <div className="cert-copy"><h3>{title}</h3><p>{issuer}</p></div>
              {date && <span className="cert-date">{date}</span>}
              <ArrowUpRight className="cert-arrow" size={16} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
