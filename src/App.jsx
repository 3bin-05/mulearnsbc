import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import bgImg from './assets/mubg.png';

export default function App() {
  return (
    <div 
      className="relative h-screen w-full bg-bg-dark bg-center bg-no-repeat bg-cover flex flex-col justify-between overflow-hidden font-sans select-none"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Blending gradients (recreating the cave darkness edges) */}
      <div className="absolute top-0 left-0 w-full h-[18vh] bg-gradient-to-b from-bg-dark to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-bg-dark to-transparent pointer-events-none z-10" />

      {/* Global vector gradients for stats icons */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }} width="0" height="0">
        <defs>
          <linearGradient id="purple-blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Body wrapper */}
      <main className="relative z-20 w-full max-w-[1200px] mx-auto px-1 md:px-2 flex-1 flex flex-col justify-between pt-[105px] pb-6 md:pb-8 box-border overflow-hidden">
        {/* Central visual header inside cave planet window */}
        <Hero />
        
        {/* Bottom chapter summary and metrics layout */}
        <Stats />
      </main>
    </div>
  );
}
