import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import IndexSection from '@/components/sections/IndexSection';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import Designs from '@/components/sections/Designs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IndexSection />
      <About />
      <Services />
      <Process />
      <Projects />
      <Designs />
      <Contact />
    </main>
  );
}
