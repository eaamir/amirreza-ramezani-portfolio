import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-kicker"><span>04 / SELECTED WORK</span><span>2022 — 2026</span></div>
      <div className="section-heading project-heading">
        <div><p className="eyebrow">A FEW THINGS I’VE BUILT</p><h2>Selected<br /><em>projects.</em></h2></div>
        <p className="heading-note">A selection of digital products, platforms, and websites built with care.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.name} {...project} index={index} />)}
      </div>
    </section>
  );
}
