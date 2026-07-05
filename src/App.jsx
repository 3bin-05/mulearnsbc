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
import ExecomProfileComingSoon from './components/sections/ExecomProfileComingSoon';
import ExecomTeamPage from './components/sections/ExecomTeamPage';

const EXECOM_PROFILES = [
  'diya', 'karthik', 'abin-george', 'vaishnav', 'ebin', 'ajin', 'maanas',
  'abin-anil', 'aadil', 'ananthu', 'devanarayanan', 'adhithyan', 'malavika',
  'krishna', 'devika', 'faizan', 'adhil', 'beema', 'nidhi', 'arjun-kurup',
  'devanand', 'navaneeth', 'john', 'akshaj', 'arjun-nair'
];

function App() {
  const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();

  if (path === 'execom') {
    return <ExecomTeamPage />;
  }

  if (EXECOM_PROFILES.includes(path)) {
    return <ExecomProfileComingSoon username={path} />;
  }

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
