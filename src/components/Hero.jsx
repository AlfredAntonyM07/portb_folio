import { ArrowDown, ArrowRight, ArrowUpRight, Download, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function InsightCard() {
  return (
    <div className="insight-card" aria-label="Illustration of business insight from data">
      <div className="insight-topline">
        <span className="insight-kicker"><span className="status-dot" /> BUSINESS / DATA / TECH</span>
        <span className="insight-index">01 — 03</span>
      </div>
      <div className="insight-title">
        <span>Better questions.</span>
        <span className="insight-title-accent">Clearer decisions.</span>
      </div>
      <div className="chart-area" aria-hidden="true">
        <div className="chart-y-labels"><span>100</span><span>75</span><span>50</span><span>25</span></div>
        <div className="chart-plot">
          <div className="chart-grid"><i /><i /><i /><i /></div>
          <svg className="chart-line" viewBox="0 0 390 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6296ba" stopOpacity=".22" />
                <stop offset="100%" stopColor="#6296ba" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 123 C32 118 40 95 73 101 S118 113 145 79 S191 88 218 63 S261 73 288 43 S333 50 355 24 S378 19 390 11 L390 150 L0 150Z" fill="url(#chartFill)" />
            <path d="M0 123 C32 118 40 95 73 101 S118 113 145 79 S191 88 218 63 S261 73 288 43 S333 50 355 24 S378 19 390 11" fill="none" stroke="#5487ab" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
            <circle cx="288" cy="43" r="4.3" fill="#fff" stroke="#5487ab" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="chart-x-labels"><span>OBSERVE</span><span>UNDERSTAND</span><span>ACT</span></div>
        </div>
        <div className="chart-annotation"><span>Insight</span><strong>→</strong><span>Action</span></div>
      </div>
      <div className="insight-footer">
        <div><span className="insight-footer-label">A practical perspective</span><span>Built around real-world questions</span></div>
        <span className="insight-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="home">
      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
        >
          <div className="availability"><span className="availability-dot" /> Final-year student · Open to opportunities</div>
          <p className="hero-name">ALFRED ANTONY M <span>— COIMBATORE, INDIA</span></p>
          <h1>Bridging business understanding, <em>data analytics</em> &amp; technology.</h1>
          <p className="hero-description">
            Final-year Computer Science and Business Systems student passionate about turning data into useful insight,
            understanding business challenges, and building technology-driven solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
            <a className="button button-secondary" href="/Alfred_Antony_Resume.pdf" download="Alfred_Antony_Resume.pdf">
              <Download size={16} /> Download resume
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-socials" aria-label="Social profiles">
              <a href="https://linkedin.com/in/alfred-antony-m" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
              <a href="https://github.com/AlfredAntonyM07" target="_blank" rel="noreferrer" aria-label="GitHub profile"><span className="github-glyph">GH</span></a>
              <a href="mailto:alfredantony077@gmail.com" aria-label="Email Alfred"><Mail size={17} /></a>
            </div>
            <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
          </div>
        </motion.div>
        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.12, ease: "easeOut" }}
        >
          <InsightCard />
          <div className="hero-caption"><span className="caption-line" /> A curious mind, focused on useful outcomes <ArrowUpRight size={14} /></div>
        </motion.div>
      </div>
      <a className="hero-bottom-note page-shell" href="#about"><span>01</span> An analytical mindset with a business-first perspective</a>
    </section>
  );
}
