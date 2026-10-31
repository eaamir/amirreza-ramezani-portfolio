import { navigation } from '@/data/navigation';

export default function Navbar() {
  return (
    <header className="topbar">
      <a className="wordmark" href="#top">AR<span>®</span></a>
      <nav aria-label="Main navigation">
        {navigation.map(([number, title, id]) => (
          <a key={id} href={`#${id}`}>{title}</a>
        ))}
      </nav>
      <a className="availability" href="mailto:amirrezarame@gmail.com"><i /> Available for work</a>
    </header>
  );
}
