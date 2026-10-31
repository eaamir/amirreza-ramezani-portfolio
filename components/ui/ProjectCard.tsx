import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  name: string;
  image: string;
  type: string;
  href: string;
  index: number;
};

export default function ProjectCard({ name, image, type, href, index }: ProjectCardProps) {
  return (
    <a className="project-card" href={href} target="_blank" rel="noreferrer">
      <div className="project-image">
        <Image src={image} alt={`${name} project preview`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
        <span className="project-open"><ArrowUpRight size={20} /></span>
      </div>
      <div className="project-caption">
        <div><span className="item-number">0{index + 1} / {type}</span><h3>{name}</h3></div>
        <ArrowUpRight size={18} />
      </div>
    </a>
  );
}
