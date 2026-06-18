import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ScrollProgress from './components/ScrollProgress.js';
import BackToTop from './components/BackToTop.js';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';

function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 text-slate-100">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
