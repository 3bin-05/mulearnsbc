import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Execom from './components/Execom';
import Events from './components/Events';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const transitionDurationMs = 1200;
  const [activeSection, setActiveSection] = useState<'hero' | 'execom' | 'events'>('hero');
  const [entranceY, setEntranceY] = useState<string | number>('120%');
  const [exitY, setExitY] = useState<string | number>('120%');
  const touchStartY = useRef(0);
  const isTransitionLocked = useRef(false);
  const unlockTimer = useRef<number | null>(null);
  const shouldShowEventsLayer = activeSection === 'events' || (activeSection === 'execom' && entranceY === '-100%');

  useEffect(() => {
    return () => {
      if (unlockTimer.current) {
        window.clearTimeout(unlockTimer.current);
      }
    };
  }, []);

  const lockTransition = () => {
    isTransitionLocked.current = true;
    if (unlockTimer.current) {
      window.clearTimeout(unlockTimer.current);
    }
    unlockTimer.current = window.setTimeout(() => {
      isTransitionLocked.current = false;
      unlockTimer.current = null;
    }, transitionDurationMs);
  };

  const handleSectionChange = (section: 'hero' | 'execom' | 'events', force = false) => {
    if (section === activeSection) {
      return;
    }
    if (!force && isTransitionLocked.current) {
      return;
    }
    lockTransition();

    if (activeSection === 'hero' && section === 'execom') {
      setEntranceY('120%');
      setExitY('120%');
      setActiveSection('execom');
    } else if (activeSection === 'execom' && section === 'events') {
      setExitY('-100%');
      setActiveSection('events');
    } else if (activeSection === 'events' && section === 'execom') {
      setEntranceY('-100%');
      setExitY('-100%');
      setActiveSection('execom');
    } else if (activeSection === 'execom' && section === 'hero') {
      setExitY('120%');
      setActiveSection('hero');
    } else {
      // Direct navbar jump or other edge cases
      if (section === 'events') {
        setExitY('-100%');
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
      e.preventDefault();
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
        e.preventDefault();
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
      <CustomCursor />
      <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
      <Hero activeSection={activeSection} onCtaClick={() => handleSectionChange('execom')} />
      
      {/* Events only sits behind Execom for the Execom <-> Events plate transition. */}
      <AnimatePresence>
        {shouldShowEventsLayer && (
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
