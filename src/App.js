import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import featureFlags from './config/featureFlags';

const HomePage = () => (
  <>
    {featureFlags.hero && <Hero />}
    {featureFlags.about && <CollapsibleSection title="About Me"><About /></CollapsibleSection>}
    {featureFlags.passions && <CollapsibleSection title="My Passions"><Passions /></CollapsibleSection>}
    {featureFlags.professionalSnapshot && <CollapsibleSection title="Professional Snapshot"><ProfessionalSnapshot /></CollapsibleSection>}
    {featureFlags.projects && <CollapsibleSection title="Projects"><Projects /></CollapsibleSection>}
    {featureFlags.skills && <CollapsibleSection title="Skills"><Skills /></CollapsibleSection>}
    {featureFlags.contact && <Contact />}
  </>
);

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {featureFlags.blog && (
                <>
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                </>
              )}
            </Routes>
          </main>
          <Footer />
          <UnderConstruction />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;