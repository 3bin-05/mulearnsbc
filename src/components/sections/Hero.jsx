import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Users, Star, ChevronRight } from 'lucide-react';
import CountUp from '../reactbits/CountUp';
import studentSketch from '../../assets/student_sketch.png';

/**
 * Re-designed Hero Section Component (Strictly matching reference image).
 * Tone: Pure White (bg-white text-ink).
 * Matches the layout, typography, visual depth, and structure of the reference image exactly.
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  const getInitialY = (yVal) => {
    return shouldReduceMotion ? 0 : yVal;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start text-ink pt-32 pb-16 overflow-hidden select-none bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle at 85% 50%, #F3EEFF 0%, #FFFFFF 75%)'
      }}
    >
      {/* Main Grid Content Area */}
      <div className="w-full max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 mb-12">
        
        {/* Left Column: Typography and CTAs (col-span-6) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: getInitialY(15) }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.6)}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-purple flex items-center flex-wrap">
              MULEARN CAMPUS CODE:&nbsp;
              <span className="relative inline-block px-1 font-bold">
                SBC
                <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-purple" viewBox="0 0 40 10" fill="none" preserveAspectRatio="none">
                  
                </svg>
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: getInitialY(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.1)}
            className="font-display font-semibold text-[44px] sm:text-[70px] leading-[1.08] tracking-tight text-ink mb-8 max-w-[18ch]"
          >
            Students today. <br />
            <span className="font-cursive text-purple text-[46px] sm:text-[56px] leading-none inline-block rotate-[-2deg] ml-1">Impacts </span>
            &nbsp;tomorrow.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: getInitialY(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.25)}
            className="max-w-[48ch] text-[14px] sm:text-[15px] text-ink/75 leading-relaxed mb-10 font-body"
          >
            Sree Buddha College of Engineering's chapter of µLearn Foundation — where students learn by doing, mentor by sharing, and ship real work in public.
          </motion.p>

          {/* CTA Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: getInitialY(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.35)}
            className="flex flex-col gap-3 w-full sm:max-w-md"
          >
            {/* Top Row: Two Buttons */}
            <div className="flex flex-row gap-3 w-full">
              <motion.a
                href="https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -2 }
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative flex-1 inline-flex items-center justify-center gap-2 bg-purple text-white font-body text-[13px] font-semibold px-4 py-3.5 rounded-none overflow-hidden cursor-pointer shadow-sm text-center"
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
                
                {/* Content overlay */}
                <span className="relative z-10 flex items-center gap-2">
                  <span>Join the Community</span>
                  <ChevronRight size={14} className="stroke-[2.5px]" />
                </span>
              </motion.a>
              <a
                href="#circles"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('circles')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-off-white text-ink border border-hairline font-body text-[13px] font-semibold px-4 py-3.5 rounded-none transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <span>Explore Circles</span>
                <ChevronRight size={14} className="text-purple stroke-[2.5px]" />
              </a>
            </div>

            {/* Bottom Row: Discord Button */}
            <motion.a
              href="https://discord.gg/mTuerRmEAr"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { y: 0 },
                hover: { y: -2 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative w-full inline-flex items-center justify-center gap-2 bg-purple text-white font-body text-[13px] font-semibold px-6 py-3.5 rounded-none overflow-hidden cursor-pointer shadow-sm text-center"
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
              
              {/* Content overlay */}
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  viewBox="0 0 127.14 96.36"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.87-.64,1.71-1.32,2.51-2a75.46,75.46,0,0,0,72.6,0c.8,0.7,1.64,1.38,2.51,2a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.24,50.24,123.38,27.42,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                </svg>
                <span>Join our Discord Server</span>
                <ChevronRight size={14} className="stroke-[2.5px]" />
              </span>
            </motion.a>
          </motion.div>

        </div>

        {/* Right Column: Student Sketch Illustration */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-2">
          <div className="relative w-full max-w-[500px] lg:max-w-[560px] flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={getTransition(0.8, 0.2)}
              src={studentSketch}
              alt="Student learning and building"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

      </div>

      {/* Row 2: Stat Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: getInitialY(30) }}
        animate={{ opacity: 1, y: 0 }}
        transition={getTransition(0.8, 0.55)}
        className="w-full max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 z-10 pt-4"
      >
        
      </motion.div>
    </section>
  );
}
