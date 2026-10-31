import { ArrowUpRight } from 'lucide-react';
import { navigation } from '@/data/navigation';

export default function IndexSection() {
  return (
    <section className="index-section section-pad">
      <div className="section-kicker"><span>INDEX / 00</span><span>OVERVIEW</span></div>
      <div className="index-layout">
        <h2>Contents<span>.</span></h2>
        <div className="index-list">
          {navigation.map(([number, title, id]) => (
            <a href={`#${id}`} key={id}><span>{number}</span><b>{title}</b><ArrowUpRight size={16} /></a>
          ))}
        </div>
      </div>
    </section>
  );
}
