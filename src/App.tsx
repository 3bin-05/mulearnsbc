import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Execom from './components/Execom';
import Events from './components/Events';
import CustomCursor from './components/CustomCursor';
import FooterObserver from './components/FooterObserver';
import Preloader from './components/Preloader';

import type { ActiveSection } from './types/activeSection';

export default function App() {
  const transitionDurationMs = 1200;
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [entranceY, setEntranceY] = useState<string | number>('120%');
  const [exitY, setExitY] = useState<string | number>('120%');
  const [isLoading, setIsLoading] = useState(true);
  const touchStartY = useRef(0);
  const isTransitionLocked = useRef(false);
  const unlockTimer = useRef<number | null>(null);
  const contactScrollTimer = useRef<number | null>(null);
  const shouldShowEventsLayer =
    activeSection === 'events' ||
    activeSection === 'contact' ||
    (activeSection === 'execom' && entranceY === '-100%');

  useEffect(() => {
    return () => {
      if (unlockTimer.current) {
        window.clearTimeout(unlockTimer.current);
      }
      if (contactScrollTimer.current) {
        window.clearTimeout(contactScrollTimer.current);
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

  const handleSectionChange = (section: ActiveSection, force = false) => {
    if (section === activeSection) return;

    // CONTACT is a UI selection; transitions/plates remain driven by hero/execom/events.
    if (section === 'contact') {
      setActiveSection('contact');
      return;
    }

    const transitionFrom = activeSection === 'contact' ? 'events' : activeSection;

    if (!force && isTransitionLocked.current) return;
    lockTransition();

    if (transitionFrom === 'hero' && section === 'execom') {
      setEntranceY('120%');
      setExitY('120%');
      setActiveSection('execom');
    } else if (transitionFrom === 'execom' && section === 'events') {
      setExitY('-100%');
      setActiveSection('events');
    } else if (transitionFrom === 'events' && section === 'execom') {
      setEntranceY('-100%');
      setExitY('-100%');
      setActiveSection('execom');
    } else if (transitionFrom === 'execom' && section === 'hero') {
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


  const scrollToContact = () => {
    requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleContactClick = () => {
    // Mark navbar as active immediately so it stays selected during scroll/transition.
    setActiveSection('contact');

    // If we're already on the events plate (which contains the footer), just scroll.
    if (activeSection === 'events') {
      scrollToContact();
      return;
    }

    // Otherwise, move to events first, then scroll to footer.
    handleSectionChange('events', true);
    if (contactScrollTimer.current) {
      window.clearTimeout(contactScrollTimer.current);
    }
    contactScrollTimer.current = window.setTimeout(() => {
      scrollToContact();
      contactScrollTimer.current = null;
    }, transitionDurationMs + 150);
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
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        onContactClick={handleContactClick}
      />
      <Hero activeSection={activeSection === 'contact' ? 'events' : activeSection} onCtaClick={() => handleSectionChange('execom')} />
      
      {/* Events only sits behind Execom for the Execom <-> Events plate transition. */}
      <AnimatePresence>
        {shouldShowEventsLayer && (
          <Events 
            activeSection={activeSection === 'contact' ? 'events' : activeSection} 
            onGoToExecom={(force?: boolean) => handleSectionChange('execom', force)}
          />
        )}
      </AnimatePresence>

      {(activeSection === 'events' || activeSection === 'contact') && (
        <FooterObserver
          onContactVisible={() => setActiveSection('contact')}
          onContactHidden={() => setActiveSection('events')}
        />
      )}

      <AnimatePresence>
        {activeSection === 'execom' && (
          <Execom 
            onClose={(force?: boolean) => handleSectionChange('hero', force)} 
            onGoToEvents={(force?: boolean) => handleSectionChange('events', force)}
            entranceY={entranceY}
            exitY={exitY}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
