import { ArrowUpRight, Gauge, Landmark, MapPinned } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

function CreditVisual() {
  return (
    <div className="project-visual credit-visual" aria-hidden="true">
      <div className="visual-top"><span>APPLICATION REVIEW</span><span className="visual-live">MODEL OUTPUT</span></div>
      <div className="credit-visual-body">
        <div className="score-gauge"><div className="gauge-inner"><span>Risk</span><strong>Profile</strong></div></div>
        <div className="credit-bars"><span>Income consistency<i style={{ "--bar-width": "78%" }} /></span><span>Repayment history<i style={{ "--bar-width": "62%" }} /></span><span>Existing obligations<i style={{ "--bar-width": "45%" }} /></span></div>
      </div>
      <div className="visual-caption"><Landmark size={14} /> Historical data → a more consistent decision process</div>
    </div>
  );
}

function ParkingVisual() {
  return (
    <div className="project-visual parking-visual" aria-hidden="true">
      <div className="map-roads"><span /><span /><span /><span /></div>
      <div className="parking-label"><MapPinned size={14} /> NEARBY SPACES <span>· LIVE</span></div>
      <div className="map-pin pin-one"><i /></div><div className="map-pin pin-two"><i /></div><div className="map-pin pin-three"><i /></div>
      <div className="parking-card"><span className="parking-card-icon"><MapPinned size={15} /></span><span><strong>Space found</strong><small>Map-based search</small></span><span className="parking-open">OPEN</span></div>
    </div>
  );
}

function NetworkVisual() {
  return (
    <div className="project-visual network-visual" aria-hidden="true">
      <div className="network-top"><span>FLOW ANALYSIS</span><Gauge size={15} /></div>
      <div className="network-content">
        <div className="network-node node-source">FLOW</div>
        <div className="network-lines"><i /><i /><i /></div>
        <div className="network-node node-model">MODEL</div>
        <ArrowUpRight className="network-arrow" size={17} />
        <div className="network-insight"><span>SELECTIVE EXPLANATION</span><strong>83% <small>lower per-flow latency</small></strong></div>
      </div>
      <div className="network-bottom"><span>Accuracy</span><span>Explainability</span><span>Speed</span></div>
    </div>
  );
}

const projects = [
  {
    number: "01", title: "Credit Scoring Model", category: "FINANCIAL DATA · MACHINE LEARNING",
    description: "Explored how historical financial data can support more consistent loan application decisions, from model training to an API for predictions.",
    outcome: "A Random Forest model and Flask REST API for customer application predictions.",
    technologies: ["Python", "Pandas", "Flask", "Random Forest"],
    visual: CreditVisual,
  },
  {
    number: "02", title: "SmartPark", subtitle: "Cloud-Based Cooperative Parking System", category: "CLOUD · LOCATION SERVICES",
    description: "Designed a service that helps drivers find parking shared by space owners, with features aimed at making discovery and booking more convenient.",
    outcome: "Live availability, OTP verification, and map search; co-authored a conference paper and presented with a four-person team.",
    technologies: ["JavaScript", "Firebase", "Google Maps API"],
    visual: ParkingVisual,
  },
  {
    number: "03", title: "Latency-Aware Explainable Network Intrusion Detection", category: "EXPLAINABLE AI · NETWORK ANALYSIS",
    description: "Compared machine-learning models on CICIDS2017, considering model performance alongside interpretability and execution time.",
    outcome: "Selective explanation reduced per-flow latency by 83% in the project evaluation.",
    technologies: ["Python", "scikit-learn", "SHAP", "LIME"],
    visual: NetworkVisual,
  },
];

export default function Projects() {
  return (
    <section className="section section-projects" id="projects">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Selected academic work"
          title="Projects with a problem-solving point of view."
          description="A selection of team and academic projects exploring data, business needs, and technology."
        />
        <div className="project-grid">
          {projects.map(({ number, title, subtitle, category, description, outcome, technologies, visual: Visual }) => (
            <article className="project-card" key={number}>
              <Visual />
              <div className="project-copy">
                <div className="project-category"><span>{number}</span> {category}</div>
                <h3>{title}</h3>
                {subtitle && <p className="project-subtitle">{subtitle}</p>}
                <p className="project-description">{description}</p>
                <div className="project-outcome"><span>PROJECT OUTCOME</span><p>{outcome}</p></div>
                <div className="project-footer">
                  <div className="tag-row">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <span className="project-no-link" aria-label="Academic project, no repository link provided"><ArrowUpRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-footnote">Project summaries are based on academic work. No repository links are listed where none were provided.</p>
      </div>
    </section>
  );
}
