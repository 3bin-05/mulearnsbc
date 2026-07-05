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

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: getInitialY(20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.35)}
            className="flex flex-row gap-4 items-center"
          >
            <motion.a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { y: 0 },
                hover: { y: -2 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative inline-flex items-center gap-2 bg-purple text-white font-body text-[13px] font-semibold px-6 py-3.5 rounded-none overflow-hidden cursor-pointer shadow-sm"
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
              className="inline-flex items-center gap-2 bg-white hover:bg-off-white text-ink border border-hairline font-body text-[13px] font-semibold px-6 py-3.5 rounded-none transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Circles</span>
              <ChevronRight size={14} className="text-purple stroke-[2.5px]" />
            </a>
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
