import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Execom from './components/Execom';
import Events from './components/Events';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'execom' | 'events'>('hero');
  const [entranceY, setEntranceY] = useState<string | number>('120%');
  const [exitY, setExitY] = useState<string | number>('120%');
  const touchStartY = useRef(0);
  const lastTransitionTime = useRef(0);

  const handleSectionChange = (section: 'hero' | 'execom' | 'events', force = false) => {
    const now = Date.now();
    if (!force && now - lastTransitionTime.current < 1000) {
      return;
    }
    lastTransitionTime.current = now;

    if (activeSection === 'hero' && section === 'execom') {
      setEntranceY('120%');
      setExitY('120%');
      setActiveSection('execom');
    } else if (activeSection === 'execom' && section === 'events') {
      setExitY('-120%');
      setActiveSection('events');
    } else if (activeSection === 'events' && section === 'execom') {
      setEntranceY('-120%');
      setExitY('-120%');
      setActiveSection('execom');
    } else if (activeSection === 'execom' && section === 'hero') {
      setExitY('120%');
      setActiveSection('hero');
    } else {
      // Direct navbar jump or other edge cases
      if (section === 'events') {
        setExitY('-120%');
        setActiveSection('events');
      } else if (section === 'execom') {
        setEntranceY('120%');
        setExitY('120%');
        setActiveSection('execom');
      } else if (section === 'hero') {
        setActiveSection('hero');
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (activeSection === 'hero' && e.deltaY > 20) {
      handleSectionChange('execom');
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
        handleSectionChange('execom');
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
      <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
      <Hero activeSection={activeSection} onCtaClick={() => handleSectionChange('execom')} />
      
      {/* Events section mounts behind Execom to allow seamless lift-to-reveal transition */}
      <AnimatePresence>
        {(activeSection === 'events' || activeSection === 'execom') && (
          <Events 
            activeSection={activeSection} 
            onGoToExecom={() => handleSectionChange('execom')}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeSection === 'execom' && (
          <Execom 
            onClose={() => handleSectionChange('hero')} 
            onGoToEvents={() => handleSectionChange('events')}
            entranceY={entranceY}
            exitY={exitY}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
