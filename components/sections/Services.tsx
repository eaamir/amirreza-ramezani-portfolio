import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-kicker"><span>02 / SERVICES</span><span>WHAT I DO</span></div>
      <div className="section-heading"><p className="eyebrow">CAPABILITIES</p><h2>From idea<br />to <em>impact.</em></h2></div>
      <div className="service-grid">
        {services.map(([number, title, description]) => (
          <article className="service" key={number}>
            <span className="item-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}
