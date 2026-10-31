import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Amirreza Ramezani — Software Engineer',
  description: 'Software developer building thoughtful digital experiences, modern web applications, and reliable backend systems.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
