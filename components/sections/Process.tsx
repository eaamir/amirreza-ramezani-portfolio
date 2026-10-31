import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="section-kicker"><span>03 / PROCESS</span><span>HOW I WORK</span></div>
      <div className="section-heading"><p className="eyebrow">A CLEAR WAY FORWARD</p><h2>Good work is<br /><em>a process.</em></h2></div>
      <div className="process-grid">
        {processSteps.map(([number, title, description]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
        ))}
      </div>
      <div className="process-line" />
    </section>
  );
}
