import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/SBC-logo.svg';

interface NavbarProps {
  activeSection: 'hero' | 'execom' | 'events';
  setActiveSection: (section: 'hero' | 'execom' | 'events', force?: boolean) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['HOME', 'EXECOM', 'EVENTS', 'CONTACT US'];

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3,
      },
    },
  };

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    if (item === 'HOME') {
      setActiveSection('hero', true);
    } else if (item === 'EXECOM') {
      setActiveSection('execom', true);
    } else if (item === 'EVENTS') {
      setActiveSection('events', true);
    }
  };

  const isItemActive = (item: string) => {
    if (item === 'HOME' && activeSection === 'hero') return true;
    if (item === 'EXECOM' && activeSection === 'execom') return true;
    if (item === 'EVENTS' && activeSection === 'events') return true;
    return false;
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 pt-5 pb-4 flex justify-between items-center">
        {/* Left: Logo and Branding */}
        <a href="#" className="flex items-center gap-4 group">
          <img
            src={logoImg}
            alt="MuLearn SBC Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Right: Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-[15px] font-orbitron font-medium tracking-nav transition-all relative flex flex-col items-center py-1 ${
                isItemActive(item) ? 'text-white' : 'text-white/45 hover:text-white/80'
              }`}
            >
              <span>{item}</span>
              {isItemActive(item) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#ffffff]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Thin Divider Under Navbar */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={dividerVariants}
          className="h-[1px] w-full bg-white/18 origin-left"
          style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
        />
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-orbitron font-semibold tracking-nav uppercase transition-colors ${
                    isItemActive(item) ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
