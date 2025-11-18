import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Passions from './components/Passions';
import ProfessionalSnapshot from './components/ProfessionalSnapshot';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UnderConstruction from './components/UnderConstruction';
import CollapsibleSection from './components/CollapsibleSection';
import featureFlags from './config/featureFlags';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          {featureFlags.hero && <Hero />}
          {featureFlags.about && <CollapsibleSection title="About Me"><About /></CollapsibleSection>}
          {featureFlags.passions && <CollapsibleSection title="My Passions"><Passions /></CollapsibleSection>}
          {featureFlags.professionalSnapshot && <CollapsibleSection title="Professional Snapshot"><ProfessionalSnapshot /></CollapsibleSection>}
          {featureFlags.projects && <CollapsibleSection title="Projects"><Projects /></CollapsibleSection>}
          {featureFlags.skills && <CollapsibleSection title="Skills"><Skills /></CollapsibleSection>}
          {featureFlags.contact && <Contact />}
        </main>
        <Footer />
        <UnderConstruction />
      </div>
    </ThemeProvider>
  );
}

export default App;