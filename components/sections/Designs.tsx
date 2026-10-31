import Image from 'next/image';
import { designs } from '@/data/designs';

export default function Designs() {
  return (
    <section className="designs section-pad" id="designs">
      <div className="section-kicker"><span>05 / DESIGNS</span><span>VISUAL EXPLORATIONS</span></div>
      <div className="section-heading design-heading">
        <div><p className="eyebrow">BEYOND THE CODE</p><h2>Posters &amp;<br /><em>logos.</em></h2></div>
        <p className="heading-note">I explore visual design through posters, logos, and graphic compositions, combining creativity with a thoughtful approach to typography, color, and visual identity.</p>
      </div>
      <div className="design-grid">
        {designs.map(([name, src], index) => (
          <figure key={src}>
            <div className="design-image"><Image src={src} alt={name} fill sizes="(max-width: 700px) 50vw, 20vw" style={{ objectFit: 'contain' }} /></div>
            <figcaption><span>0{index + 1}</span>{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
