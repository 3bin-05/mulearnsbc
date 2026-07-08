import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Users, Calendar, Trophy, Award, FileCode } from 'lucide-react';
import Section from '../layout/Section';
import notebookOrbit from '../../assets/notebook_orbit.png';

/**
 * Learning Circles Section Component (Redesigned).
 * Tone: Off-white (bg-off-white text-ink).
 * Displays peer-learning definitions on the left with sticky notes, and a high-fidelity torn notebook orbit graphic on the right.
 */
export default function Circles() {
  const shouldReduceMotion = useReducedMotion();

  const refHeader = useRef(null);
  const refStep1 = useRef(null);
  const refStep2 = useRef(null);
  const refOrbit = useRef(null);
  const refSticky1 = useRef(null);
  const refSticky2 = useRef(null);
  const inViewHeader = useInView(refHeader, { once: true, margin: '-10%' });
  const inViewStep1 = useInView(refStep1, { once: true });
  const inViewStep2 = useInView(refStep2, { once: true });
  const inViewOrbit = useInView(refOrbit, { once: true, margin: '-5%' });
  const inViewSticky1 = useInView(refSticky1, { once: true });
  const inViewSticky2 = useInView(refSticky2, { once: true });

  return (
    <Section id="circles" tone="off-white" className="relative">
      
      {/* 1. Header (Above grid) */}
      <div className="relative mb-16 z-10">
        <motion.div
          ref={refHeader}
          animate={inViewHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple relative mb-6">
            HOW WE LEARN
            <div className="w-8 h-[2px] bg-purple mt-2 mb-6" />
          </span>
          <h2 className="font-display font-semibold text-[38px] sm:text-[46px] tracking-tight text-ink mt-2 mb-6 leading-[1.15]">
            Learning Circles,<br />
            together
            <span className="font-cursive text-purple text-[46px] sm:text-[56px] leading-none inline-block rotate-[-2deg] ml-1"> we grow  </span>  
          </h2>
          <p className="max-w-[46ch] text-[15px] sm:text-[16px] text-ink/70 leading-relaxed font-body">
            Small peer groups. Strong mentors. Real projects.<br />
            That's how we learn in public.
          </p>
        </motion.div>
      </div>

      {/* 2. Grid containing steps & diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Steps */}
        <div className="lg:col-span-7 space-y-12">
          {/* Step 01 */}
          <div 
            ref={refStep1}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
          >
            {/* Sticky Note 01 */}
            <motion.div
              ref={refSticky1}
              animate={inViewSticky1
                ? { opacity: 1, rotate: -2.5, scale: 1 }
                : { opacity: 0, rotate: -2.5, scale: 1 }
              }
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-24 h-24 bg-[#E8DFFF] flex items-center justify-center rounded-[2px] shadow-[4px_12px_24px_rgba(124,58,237,0.08),_1px_2px_4px_rgba(0,0,0,0.04)] shrink-0 self-center sm:self-start select-none"
            >
              {/* Translucent tape overlay */}
              <div className="absolute -top-3 left-[calc(50%-24px)] w-12 h-6 bg-[#C1B5F3]/60 rotate-[-1.5deg] backdrop-blur-[0.5px] border-l border-r border-dashed border-purple-400/20 shadow-[0_1px_2px_rgba(0,0,0,0.03)] z-10" />
              <span className="font-display font-semibold text-[40px] text-ink/90">01</span>
            </motion.div>

            {/* Text Area */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display font-semibold text-lg text-ink">
                  Peer-Led Micro-Communities
                </h3>
              </div>
              <p className="text-[14px] text-ink/70 leading-relaxed font-body mb-4">
                A Learning Circle is a self-directed peer study group of 4 to 6 members who meet weekly to learn a specific technology path and build real-world projects together.
              </p>
              {/* Handwritten Action Link */}
              <div className="relative inline-block cursor-default">
                <span className="font-handwritten text-purple text-lg tracking-wide">
                  Collaborate. Learn. Build.
                </span>
                {/* Extending hand-drawn underline */}
                <svg className="absolute -bottom-1.5 left-0 w-[140%] h-2 text-purple/60 pointer-events-none" viewBox="0 0 140 8" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M 2 4 Q 30 2, 70 5 T 138 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div
            ref={refStep2}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
          >
            {/* Sticky Note 02 */}
            <motion.div
              ref={refSticky2}
              animate={inViewSticky2
                ? { opacity: 1, rotate: 3.2, scale: 1 }
                : { opacity: 0, rotate: 3.2, scale: 1 }
              }
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-24 h-24 bg-[#FEF3D2] flex items-center justify-center rounded-[2px] shadow-[4px_12px_24px_rgba(245,158,11,0.08),_1px_2px_4px_rgba(0,0,0,0.04)] shrink-0 self-center sm:self-start select-none"
            >
              {/* Translucent tape overlay */}
              <div className="absolute -top-3 left-[calc(50%-24px)] w-12 h-6 bg-[#EDDE95]/60 rotate-[2.5deg] backdrop-blur-[0.5px] border-l border-r border-dashed border-amber-400/20 shadow-[0_1px_2px_rgba(0,0,0,0.03)] z-10" />
              <span className="font-display font-semibold text-[40px] text-ink/90">02</span>
            </motion.div>

            {/* Text Area */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                
                <h3 className="font-display font-semibold text-lg text-ink">
                  Senior Quality & Mentorship
                </h3>
              </div>
              <p className="text-[14px] text-ink/70 leading-relaxed font-body mb-4">
                A Preceptor (senior peer or subject-matter lead) guides, reviews, and helps improve the circle's work. They ensure quality, unblock challenges, and validate progress.
              </p>
              {/* Handwritten Action Link */}
              <div className="relative inline-block cursor-default">
                <span className="font-handwritten text-purple text-lg tracking-wide">
                  Guide. Review. Elevate.
                </span>
                {/* Extending hand-drawn underline */}
                <svg className="absolute -bottom-1.5 left-0 w-[140%] h-2 text-purple/60 pointer-events-none" viewBox="0 0 140 8" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M 2 4 Q 40 6, 80 3 T 138 5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Orbit Diagram Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            ref={refOrbit}
            animate={inViewOrbit ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-[440px] select-none cursor-default"
          >
            <img 
              src={notebookOrbit} 
              alt="Learning Circles Orbiting Diagram" 
              className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

