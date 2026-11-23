import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const emailAddress = "alfredantony077@gmail.com";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject")).trim();
    const body = [
      `From: ${String(formData.get("name")).trim()}`,
      `Reply-to: ${String(formData.get("email")).trim()}`,
      "",
      String(formData.get("message")).trim(),
    ].join("\n");
    setNotice("Opening your email application with the message details. Nothing is sent or stored by this website.");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section section-contact" id="contact">
      <div className="page-shell">
        <SectionHeading eyebrow="Get in touch" title="Let’s start a conversation." description="If you’re looking for an analytical, business-minded early-career teammate, I’d be glad to connect." />
        <div className="contact-grid">
          <div className="contact-details">
            <p className="contact-intro">I’m open to conversations about business analysis, data, operations, and technology-focused entry-level opportunities.</p>
            <a className="contact-detail" href={`mailto:${emailAddress}`}><span className="contact-detail-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>{emailAddress}</strong></span><ArrowRight size={16} /></a>
            <a className="contact-detail" href="https://linkedin.com/in/alfred-antony-m" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small><strong>alfred-antony-m</strong></span><ArrowRight size={16} /></a>
            <a className="contact-detail" href="https://github.com/AlfredAntonyM07" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Github size={17} /></span><span><small>GITHUB</small><strong>AlfredAntonyM07</strong></span><ArrowRight size={16} /></a>
            <div className="contact-location"><MapPin size={16} /> Based in Coimbatore, India <span>·</span> Open to international opportunities</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
            </div>
            <label>Subject<input name="subject" placeholder="What would you like to discuss?" required /></label>
            <label>Message<textarea name="message" rows="4" placeholder="Write a short message..." required /></label>
            <button className="button button-primary form-submit" type="submit">Continue in email app <ArrowRight size={16} /></button>
            <p className="form-note" role="status">{notice || "Frontend-only form: opens your email app; this site has no message backend."}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
