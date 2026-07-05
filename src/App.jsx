import React from 'react';
import Navbar from './components/layout/Navbar';
import Section from './components/layout/Section';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Impact from './components/sections/Impact';
import Circles from './components/sections/Circles';
import Execom from './components/sections/Execom';

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-ink selection:bg-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <About />

        {/* Events Section */}
        <Events />

        {/* Impact Section */}
        <Impact />

        {/* Learning Circles Section */}
        <Circles />

        {/* Execom Section */}
        <Execom />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
