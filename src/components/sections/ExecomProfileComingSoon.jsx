import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../layout/Navbar';

// Format the username to show a friendly capitalized name
const formatName = (username) => {
  if (!username) return '';
  if (username === 'lekshmi') return 'Lekshmi Shan';
  return username
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function ExecomProfileComingSoon({ username }) {
  const formattedName = formatName(username);

  return (
    <div className="min-h-screen bg-white text-ink font-body flex flex-col justify-between selection:bg-purple selection:text-white pt-24 overflow-x-hidden">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-[1180px] mx-auto w-full relative py-8">
        
        {/* Hanging COMING SOON board */}
        <motion.div 
          className="mb-8 origin-top cursor-pointer"
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 80" className="w-56 sm:w-64 h-auto text-purple drop-shadow-sm animate-pulse-slow" fill="none">
            {/* Hanging lines from nail */}
            <path d="M 100 5 L 45 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M 100 5 L 155 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            
            {/* Nail */}
            <circle cx="100" cy="5" r="4.5" fill="#17171B" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="5" r="1.5" fill="#A1A1AA" />
            
            {/* Board Background (slightly wobbly) */}
            <path 
              d="M 40 42 C 90 41.5, 110 41.5, 160 42 C 163.5 42, 164.5 44, 164 47 L 161 73 C 160.5 76, 158 76.5, 155 76 C 110 75, 90 75, 45 76 C 42 76.5, 39.5 76, 39 73 L 36 47 C 35.5 44, 36.5 42, 40 42 Z" 
              fill="#F3EEFF" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinejoin="round" 
            />
            
            {/* Hanging clips / tape on board corners */}
            <line x1="45" y1="42" x2="45" y2="47" stroke="currentColor" strokeWidth="2" />
            <line x1="155" y1="42" x2="155" y2="47" stroke="currentColor" strokeWidth="2" />

            {/* COMING SOON text */}
            <text 
              x="100" 
              y="63" 
              textAnchor="middle" 
              fill="currentColor" 
              className="font-handwritten text-[13px] font-bold tracking-[0.18em]"
            >
              COMING SOON
            </text>
          </svg>
        </motion.div>

        {/* Text Details Section */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Sparkles / Twinkling Stars */}
          <SparkleStar className="absolute -left-12 sm:-left-20 -top-4 w-6 h-6 text-purple" delay={0.2} />
          <SparkleStar className="absolute -right-8 sm:-right-16 top-6 w-5 h-5 text-purple" delay={0.8} />
          <SparkleStar className="absolute -left-6 sm:-left-10 bottom-2 w-4 h-4 text-purple" delay={1.4} />

          {/* Heading */}
          <div className="relative inline-block mb-1 sm:mb-2">
            <h1 className="font-cursive text-5xl sm:text-7xl font-bold tracking-tight text-ink">
              ExeCom Profiles
            </h1>
            {/* Sketched Underline */}
            <svg className="absolute -bottom-2.5 left-0 w-full h-4 text-purple" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
              <path d="M 5 7 Q 150 12 295 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subheading */}
          <div className="relative inline-block mt-3">
            <span className="font-cursive text-2xl sm:text-4xl text-ink/80 italic">
              will be available <span className="relative z-10 px-1 font-bold">soon!</span>
            </span>
            {/* Sketched loop under "soon!" */}
            <svg className="absolute -bottom-3 sm:-bottom-4 -right-2 w-16 sm:w-20 h-6 text-purple -z-10" viewBox="0 0 80 30" fill="none" preserveAspectRatio="none">
              <path d="M 5 10 C 25 22, 65 22, 75 10 C 78 5, 60 5, 50 15 C 45 20, 52 28, 62 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* User Specific Message */}
          <p className="max-w-[38ch] text-[15px] sm:text-[17px] text-ink/65 leading-relaxed font-body mt-8 select-none">
            We're curating a special profile for <span className="font-semibold text-purple">{formattedName}</span>. Stay tuned!
          </p>
        </div>

        {/* Sketched Paper Airplane & Trail */}
        <motion.div 
          className="absolute right-[5%] sm:right-[12%] top-[25%] sm:top-[28%] text-purple/40 pointer-events-none hidden md:block"
          animate={{ y: [0, -12, 0], x: [0, 4, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-16 h-16" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 15 45 L 65 15 L 45 65 L 37 47 L 15 45 Z" />
            <path d="M 65 15 L 37 47" />
            <path d="M 37 47 L 40 57 L 45 65" />
          </svg>
        </motion.div>
        
        <div className="absolute right-[12%] sm:right-[18%] top-[30%] sm:top-[34%] w-28 h-20 text-purple/20 pointer-events-none hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4">
            <path d="M 10 70 C 40 50, 60 55, 80 40 C 95 28, 100 15, 110 10" strokeLinecap="round" />
          </svg>
        </div>

        {/* Polaroid Cards Area */}
        <div className="w-full mt-12 sm:mt-16 max-w-[900px] relative">
          {/* Polaroid container */}
          <div className="flex flex-nowrap md:flex-wrap items-end justify-start md:justify-center gap-6 sm:gap-8 px-6 pb-6 overflow-x-auto md:overflow-x-visible no-scrollbar -mx-6 md:mx-0">
            <PolaroidCard tilt={-5} pinType="tape" delay={0.1} />
            <PolaroidCard tilt={3} pinType="pin" delay={0.2} />
            <PolaroidCard tilt={-2} pinType="tape-angled" delay={0.3} />
            <PolaroidCard tilt={4} pinType="paperclip" delay={0.4} />
          </div>
          
          {/* Ground Line */}
          <div className="w-full border-t border-purple/15 mt-2 h-0 relative hidden md:block">
            <svg className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] h-3 text-purple/15" viewBox="0 0 800 12" fill="none" preserveAspectRatio="none">
              <path d="M 5 6 C 250 8, 550 8, 795 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </main>

      {/* Mini Footer / Back Home Action */}
      <footer className="py-8 w-full border-t border-hairline bg-off-white/40 flex justify-center mt-auto z-10">
        <a 
          href="/"
          className="text-xs sm:text-sm font-semibold text-purple hover:text-purple-dark transition-colors duration-200 flex items-center gap-1.5 active:scale-95 transform"
        >
          <span>← Back to Main Chapter Portal</span>
        </a>
      </footer>
    </div>
  );
}

// Sparkle SVG Component
function SparkleStar({ className, delay }) {
  return (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.9, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path d="M 12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2" />
    </motion.svg>
  );
}

// Polaroid Card Component
function PolaroidCard({ tilt, pinType, delay }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, rotate: tilt }}
      animate={{ y: 0, opacity: 1, rotate: tilt }}
      whileHover={{ 
        y: -10, 
        rotate: tilt + (tilt > 0 ? -2 : 2),
        scale: 1.04,
        transition: { duration: 0.25, ease: "easeOut" } 
      }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-shrink-0 w-36 sm:w-40 p-3 bg-white border border-purple/10 shadow-[0_8px_20px_rgba(0,0,0,0.035),_0_2px_4px_rgba(0,0,0,0.01)] rounded-[3px] select-none cursor-pointer flex flex-col items-center origin-top"
    >
      {/* Pin / Tape / Paperclip */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        {pinType === 'pin' && (
          <svg className="w-5 h-5 text-purple drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="7" r="4.5" />
            <path d="M 12 11 L 12 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
        {pinType === 'tape' && (
          <div className="w-12 h-3.5 bg-purple/15 border border-purple/10 backdrop-blur-[0.5px] -rotate-12 transform origin-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]" />
        )}
        {pinType === 'tape-angled' && (
          <div className="w-10 h-3.5 bg-purple/20 border border-purple/10 backdrop-blur-[0.5px] rotate-12 transform origin-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]" />
        )}
        {pinType === 'paperclip' && (
          <svg className="w-4 h-7 text-purple/50 -rotate-12 -translate-y-0.5 transform" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 6 12 L 6 30 C 6 34 14 34 14 30 L 14 10 C 14 5 4 5 4 12 L 4 32 C 4 38 18 38 18 32 L 18 12" />
          </svg>
        )}
      </div>
      
      {/* Card photo container */}
      <div className="w-full aspect-square border border-purple/10 bg-purple-tint/10 flex items-center justify-center p-2 rounded-sm relative overflow-hidden">
        {/* Hand-drawn avatar profile placeholder */}
        <svg className="w-4/5 h-4/5 text-purple/25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 50 42 A 15 15 0 1 0 50 12 A 15 15 0 1 0 50 42" />
          <path d="M 22 80 C 22 62, 35 55, 50 55 C 65 55, 78 62, 78 80" />
        </svg>
      </div>
      
      {/* Card details line sketches */}
      <div className="w-full mt-3 flex flex-col gap-1.5 px-1 pb-1">
        <div className="h-[2.5px] bg-purple/20 w-4/5 rounded-full" />
        <div className="h-[2.5px] bg-purple/10 w-3/5 rounded-full" />
      </div>
    </motion.div>
  );
}
