import { useEffect } from 'react';
import { initScroll, scrollTo, ScrollTrigger } from './fx/scroll';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Layers from './sections/Layers';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Life from './sections/Life';
import Numbers from './sections/Numbers';
import Ask from './sections/Ask';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// Old multi-page URLs still land on the right section.
const legacy: Record<string, string> = { '/about': '#work', '/projects': '#projects', '/experience': '#experience', '/contact': '#contact', '/life': '#life' };

const App = () => {
  useEffect(() => {
    const clean = initScroll();
    const to = legacy[location.pathname] ?? (location.hash || null);
    if (location.pathname !== '/') history.replaceState(null, '', '/');
    document.fonts.ready.then(() => { ScrollTrigger.refresh(); if (to) scrollTo(to); });
    return clean;
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Layers />
        <Experience />
        <Projects />
        <Life />
        <Numbers />
        <Ask />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
