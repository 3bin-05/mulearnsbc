import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Events', id: 'events' },
  { name: 'Impact', id: 'impact' },
  { name: 'Circles', id: 'circles' },
  { name: 'ExeCom', id: 'execom' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observers = navLinks.map((link) => {
      const el = document.getElementById(link.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.id);
          }
        },
        {
          rootMargin: '-20% 0px -60% 0px' // adjust focus area
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((item) => {
        if (item) {
          item.observer.unobserve(item.el);
        }
      });
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Fallback update in case scroll triggers delay observer
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Top Docked Sticky Navbar */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 bg-white ${
          isScrolled 
            ? 'border-b border-hairline/80 shadow-[0_2px_15px_rgba(0,0,0,0.015)] py-4' 
            : 'py-6'
        }`}
      >
        <div className="w-full max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          {/* Typographic Logo Mark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="text-[32px] font-display font-semibold text-purple leading-none select-none">
              µ
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base text-ink tracking-tight leading-none">
                MuLearn SBC
              </span>
              <span className="font-mono text-[8px] font-semibold tracking-[0.25em] text-ink/40 uppercase mt-1">
                CAMPUS CHAPTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === 'about' && !activeSection);
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative px-1 py-2 text-[14px] font-body font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink/65 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-purple rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-purple hover:bg-purple-dark text-white font-body text-[13.5px] font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Join µLearn</span>
              <span className="text-[16px] font-normal leading-none transform translate-y-[-0.5px]">→</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full md:hidden transition-colors hover:bg-off-white text-ink"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-between p-8 md:hidden"
          >
            {/* Header copy in mobile menu */}
            <div className="flex items-center justify-between pt-6">
              <a
                href="#hero"
                onClick={(e) => handleLinkClick(e, 'hero')}
                className="flex items-center gap-1 font-display font-bold tracking-tight text-lg"
              >
                <span className="text-purple">µ</span>
                <span className="text-white">LEARN SBC</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Staggered Links */}
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="flex flex-col gap-6 my-auto"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="font-display font-semibold text-4xl tracking-tight text-white hover:text-purple transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom Credit / CTA */}
            <div className="flex flex-col gap-4 pb-8">
              <a
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-purple hover:bg-purple-dark text-white font-body text-sm font-semibold py-4 rounded-full transition-colors duration-200"
              >
                Join µLearn
              </a>
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-white/60">
                Sree Buddha College of Engineering
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
