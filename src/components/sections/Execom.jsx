import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import exegrp from '../../assets/exegrp.webp';

/**
 * Redesigned Execom Section Component.
 * Features a split layout with the group photo in a decorated Polaroid-style frame.
 * Grayscale by default, regains color from left to right on hover.
 */
export default function Execom() {
  const [isHovered, setIsHovered] = useState(false);
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
    <Section id="execom" tone="light" className="relative overflow-hidden select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography, taglines and doodles */}
        <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
          {/* WHO RUNS IT tag */}
          <motion.div
            initial={{ opacity: 0, y: getInitialY(15) }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={getTransition(0.6)}
            className="flex flex-col mb-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple">
              WHO RUNS IT
            </span>
            <div className="w-10 h-[2px] bg-purple mt-2" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: getInitialY(20) }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={getTransition(0.7, 0.1)}
            className="font-display font-semibold text-[38px] sm:text-[46px] leading-[1.1] tracking-tight text-ink mt-2 mb-6 max-w-[15ch]"
          >
            Executive Committee, <br />
            <span className="text-purple font-semibold">driving</span> everything.
          </motion.h2>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: getInitialY(20) }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={getTransition(0.7, 0.2)}
            className="max-w-[42ch] text-[15px] sm:text-[16px] text-ink/75 leading-relaxed mb-8 font-body"
          >
            The core team facilitating peer learning circles, hackathons, and operations at Sree Buddha College of Engineering.
          </motion.p>

          {/* Slogan with handwriting style */}
          <motion.div
            initial={{ opacity: 0, y: getInitialY(20) }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={getTransition(0.7, 0.35)}
            className="relative mt-4"
          >
            <p className="font-cursive text-purple text-[22px] sm:text-[24px] leading-snug rotate-[-3deg] ml-1">
              A team. Many roles. <br />
              <span className="pl-4">One mission.</span>
            </p>
            {/* Underline sketch */}
            <svg className="w-44 h-4 text-purple mt-1 opacity-80" viewBox="0 0 160 12" fill="none" preserveAspectRatio="none">
              <path d="M 5 6 C 50 10, 100 3, 155 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        {/* Right Column: Polaroid Photo Frame with group photo and doodles */}
        <div className="lg:col-span-7 flex justify-center items-center relative py-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={getTransition(0.8, 0.25)}
            whileHover={{ 
              rotate: 0,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              window.location.href = '/execom';
            }}
            className="relative p-4 sm:p-5 pb-16 sm:pb-20 bg-white border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.06),_0_2px_8px_rgba(0,0,0,0.02)] max-w-[580px] w-full cursor-pointer z-10"
          >
            {/* Washi Tape Accent */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-8 bg-purple/20 backdrop-blur-[1px] rotate-[-3deg] border-l border-r border-white/10 shadow-sm" />

            {/* Polaroid image window */}
            <div className="relative overflow-hidden w-full aspect-[4/3] bg-gray-50 border border-gray-100">
              {/* Grayscale Base Image */}
              <img
                src={exegrp}
                alt="Executive Committee Group (Grayscale)"
                className="w-full h-full object-cover filter grayscale select-none"
              />
              
              {/* Color Overlay Image (regaining color from left to right on hover) */}
              <img
                src={exegrp}
                alt="Executive Committee Group"
                className="absolute inset-0 w-full h-full object-cover select-none"
                style={{
                  clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                  transition: 'clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </div>

            {/* Label in handwriting style */}
            <div className="absolute bottom-4 left-0 right-0 text-center font-handwritten text-purple/80 text-[18px] sm:text-[20px] select-none">
              µLearn SBC Executive Committee 2026
            </div>
          </motion.div>

          {/* Hand-drawn Doodles around polaroid frame */}
          
          {/* Top-Left Burst lines */}
          <svg className="absolute -top-10 -left-6 w-16 h-16 text-purple select-none pointer-events-none opacity-80" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 40 40 C 35 25, 25 15, 15 10" />
            <path d="M 40 40 C 28 28, 15 28, 5 30" />
            <path d="M 40 40 C 32 38, 28 45, 25 55" />
          </svg>

          {/* Top-Right Stars */}
          <svg className="absolute -top-6 -right-6 w-16 h-16 text-purple select-none pointer-events-none opacity-85" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M 22 12 Q 22 22 12 22 Q 22 22 22 32 Q 22 22 32 22 Q 22 22 22 12 Z" />
            <path d="M 45 28 Q 45 33 40 33 Q 45 33 45 38 Q 45 33 50 33 Q 45 33 45 28 Z" />
          </svg>

          {/* Bottom-Right Scribble Double Underline */}
          <svg className="absolute -bottom-8 right-6 w-32 h-8 text-purple select-none pointer-events-none opacity-80" viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M 10 5 C 40 8, 80 2, 110 5" />
            <path d="M 20 12 C 50 15, 75 8, 105 10" />
          </svg>

          {/* Dotted Arrow pointing from under the left column tagline up-right to the polaroid frame */}
          <svg className="absolute -bottom-10 -left-14 w-28 h-28 text-purple select-none pointer-events-none opacity-80 hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 15 85 C 35 90, 60 80, 70 55" strokeDasharray="4 4" />
            <path d="M 62 58 L 71 52 L 72 62" />
          </svg>

        </div>

      </div>
    </Section>
  );
}
