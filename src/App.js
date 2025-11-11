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

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Passions />
          <ProfessionalJourney />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;