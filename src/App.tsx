import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Execom from './components/Execom';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'execom'>('hero');
  const touchStartY = useRef(0);

  const handleWheel = (e: React.WheelEvent) => {
    if (activeSection === 'hero' && e.deltaY > 20) {
      setActiveSection('execom');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (activeSection === 'hero') {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY.current - touchY; // positive value is swipe up
      if (diff > 80) {
        setActiveSection('execom');
      }
    }
  };

  return (
    <main
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="min-h-screen bg-black text-white relative w-full overflow-hidden select-none font-sans antialiased"
    >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero activeSection={activeSection} onCtaClick={() => setActiveSection('execom')} />
      <AnimatePresence>
        {activeSection === 'execom' && (
          <Execom onClose={() => setActiveSection('hero')} />
        )}
      </AnimatePresence>
    </main>
  );
}
