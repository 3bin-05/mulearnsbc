import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/SBC-logo.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Execom', 'Events', 'Contact Us'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-dark/85 backdrop-blur-lg border-b border-white/5 shadow-2xl h-16'
            : 'bg-transparent h-16 md:h-20'
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-1 md:px-2 flex justify-between items-center">
          <a href="#" className="flex items-center z-50" onClick={() => setActiveTab('Home')}>
            <motion.img
              src={logoImg}
              alt="MuLearn SBC Logo"
              className="w-auto block object-contain"
              style={{ height: isScrolled ? '36px' : '42px' }}
              layout
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setActiveTab(item)}
                className={`relative py-2 text-[0.95rem] font-medium tracking-wide transition-colors duration-300 ${
                  activeTab === item ? 'text-white font-semibold' : 'text-white/65 hover:text-white'
                }`}
              >
                {item}
                {activeTab === item && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue rounded-full shadow-[0_0_8px_rgba(157,80,255,0.6)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-screen h-screen bg-bg-dark/98 backdrop-blur-2xl z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={() => {
                    setActiveTab(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-semibold font-heading tracking-wide transition-colors ${
                    activeTab === item
                      ? 'text-white drop-shadow-[0_0_15px_rgba(157,80,255,0.5)]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
