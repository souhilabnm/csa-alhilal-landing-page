import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { Teams } from './components/Teams';
import { Gallery } from './components/Gallery';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Vision />
        <Teams />
        <Gallery />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default App;