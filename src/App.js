import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Passions from './components/Passions';
import ProfessionalJourney from './components/ProfessionalJourney';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UnderConstruction from './components/UnderConstruction';
import featureFlags from './config/featureFlags';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          {featureFlags.hero && <Hero />}
          {featureFlags.about && <About />}
          {featureFlags.passions && <Passions />}
          {featureFlags.professionalJourney && <ProfessionalJourney />}
          {featureFlags.projects && <Projects />}
          {featureFlags.skills && <Skills />}
          {featureFlags.contact && <Contact />}
        </main>
        <Footer />
        <UnderConstruction />
      </div>
    </ThemeProvider>
  );
}

export default App;