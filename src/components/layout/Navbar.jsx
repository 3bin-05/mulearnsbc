import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import sbcLogo from '../../assets/sbc.png';
import StaggeredMenu from '../reactbits/StaggeredMenu';

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

  const menuItems = [
    { label: 'ABOUT', ariaLabel: 'Go to about section', link: '#about' },
    { label: 'EVENTS', ariaLabel: 'Go to events section', link: '#events' },
    { label: 'IMPACT', ariaLabel: 'Go to impact section', link: '#impact' },
    { label: 'CIRCLES', ariaLabel: 'Go to circles section', link: '#circles' },
    { label: 'EXECOM', ariaLabel: 'Go to execom section', link: '#execom' },
    { label: 'JOIN µLEARN', ariaLabel: 'Join mulearn foundation', link: 'https://mulearn.org' }
  ];

  const socialItems = [
    { label: 'Discord', link: 'https://discord.gg/mTuerRmEAr' },
    { label: 'Instagram', link: 'https://www.instagram.com/mulearn.sbc' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/mulearnsbc' },
    { label: 'WhatsApp', link: 'https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q' }
  ];

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

  const isProfilePage = window.location.pathname !== '/' && window.location.pathname !== '/index.html';

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isProfilePage) {
      window.location.href = `/#${id}`;
      return;
    }
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
        className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 bg-white hidden md:block ${
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
            <img 
              src={sbcLogo} 
              alt="µlearn" 
              className="h-6 sm:h-7 object-contain pointer-events-none" 
            />
            <div className="flex flex-col border-l border-hairline pl-3">
              <span className="font-display font-bold text-sm sm:text-base text-ink tracking-tight leading-none">
                SBC
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
            <motion.a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { y: 0 },
                hover: { y: -1 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative hidden md:inline-flex items-center gap-1.5 bg-purple text-white font-body text-[13.5px] font-medium px-6 py-2.5 rounded-full overflow-hidden transition-all duration-200 shadow-sm active:scale-95"
            >
              {/* Swift background fill from left to right using Framer Motion variants */}
              <motion.span
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 }
                }}
                style={{ originX: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#A78BFA]"
              />

              <span className="relative z-10 flex items-center gap-1.5">
                <span>Join µLearn</span>
                <span className="text-[16px] font-normal leading-none transform translate-y-[-0.5px]">→</span>
              </span>
            </motion.a>

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

      {/* Mobile Staggered Menu */}
      <div className="block md:hidden">
        <StaggeredMenu
          position="right"
          isFixed={true}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#17171B"
          openMenuButtonColor="#17171B"
          changeMenuColorOnOpen={true}
          colors={['#F3EEFF', '#7C3AED']}
          logoUrl={sbcLogo}
          accentColor="#7C3AED"
          className={isScrolled ? 'sm-scrolled' : ''}
        />
      </div>
    </>
  );
}
