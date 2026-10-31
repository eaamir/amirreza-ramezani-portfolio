import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="contact section-pad" id="contact">
      <div className="section-kicker"><span>06 / CONTACT</span><span>HAVE A PROJECT IN MIND?</span></div>
      <div className="contact-main">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Let’s make<br /><em>something</em><br />great<span>.</span></h2>
        <a className="contact-cta" href="mailto:amirrezarame@gmail.com">Start a conversation <ArrowUpRight size={20} /></a>
      </div>
      <div className="contact-bottom">
        <div><span className="footer-label">EMAIL</span><a href="mailto:amirrezarame@gmail.com">amirrezarame@gmail.com</a></div>
        <div><span className="footer-label">PHONE / WHATSAPP</span><a href="https://wa.me/989197267029">+98 919 726 7029</a></div>
        <div><span className="footer-label">ELSEWHERE</span><a href="https://dribbble.com/theevostudio" target="_blank" rel="noreferrer">Dribbble</a><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a></div>
        <div><span className="footer-label">SOCIAL</span><a href="https://github.com/eaamir" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
      <div className="copyright"><span>© 2026 AMIRREZA RAMEZANI</span><a href="#top">BACK TO TOP ↑</a><span>DESIGNED WITH INTENTION.</span></div>
    </footer>
  );
}
