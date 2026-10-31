import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-meta"><span>SOFTWARE ENGINEER</span><span>PORTFOLIO — 2026</span></div>
      <div className="hero-main">
        <p className="eyebrow">INDEPENDENT DEVELOPER / DIGITAL CRAFT</p>
        <h1>Amirreza<br /><em>Ramezani</em><sup>®</sup></h1>
        <div className="hero-bottom">
          <p>A software development practice for thoughtful,<br /> scalable digital solutions.</p>
          <a href="#about" className="round-link" aria-label="Scroll to about"><ArrowDownRight size={22} /></a>
        </div>
      </div>
      <div className="hero-foot"><span>BASED IN IRAN · WORKING WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
