import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocomotiveScroll from 'locomotive-scroll';

// Scroll to section when the hash changes
const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    
    <Router>
      <ScrollToSection />
      <Navbar /> {/* Ensure Navbar is correctly implemented with Links */}

      {/* Main Content */}
   
      <main className="pt-16 overflow-x-hidden bg-black"> {/* Add padding to prevent overlap and hide horizontal scrollbar */}
        <Routes>
          {/* Single Route for the home page, including all sections */}
          <Route path="/" element={
            <div>
              <section id='hero'>
                <Hero />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </div>
          } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
