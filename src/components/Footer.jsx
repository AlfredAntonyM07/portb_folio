import { ArrowUp, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-wordmark" href="#home"><span className="wordmark-mark">A</span> Alfred Antony M</a>
        <p>Business understanding, analytical thinking, practical technology.</p>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/alfred-antony-m" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /></a>
            <a href="mailto:alfredantony077@gmail.com" aria-label="Email Alfred"><Mail size={16} /></a>
          </div>
          <a className="back-top" href="#home">Back to top <ArrowUp size={15} /></a>
        </div>
      </div>
      <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Alfred Antony M</span><span>Designed with intention · Built for what’s next</span></div>
    </footer>
  );
}
