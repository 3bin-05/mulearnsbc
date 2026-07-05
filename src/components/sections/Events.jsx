import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import megaphoneSketch from '../../assets/megaphone_sketch.png';

/**
 * Redesigned Events & Hackathons Section with fully visible tapes, page folds,
 * paper airplane trail positioned level with the heading, paperclip, and megaphone.
 */
export default function Events() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  return (
    <Section id="events" tone="off-white" className="relative overflow-hidden">
      
      {/* Section Header */}
      <div className="relative mb-16 md:mb-20 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-[620px]">
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple">
            WHAT'S COMING UP?
          </span>
          <div className="w-8 h-[2px] bg-purple mt-2 mb-6" />

          <h2 className="font-display font-semibold text-[38px] sm:text-[48px] tracking-tight text-ink mb-4 leading-tight">
            Events & <span className="font-cursive text-purple text-[46px] sm:text-[56px] leading-none inline-block rotate-[-2deg] ml-1">Hackathons</span>
          </h2>
          <p className="max-w-[46ch] text-[14px] sm:text-[15px] text-ink/65 leading-relaxed font-body">
            We believe in proof-of-work. Here is what we are preparing for the upcoming semester chapter calendar.
          </p>
        </div>

        {/* Flight path loop with paper plane at the same level as the heading */}
        <div className="relative w-full max-w-[280px] h-[90px] hidden md:block pointer-events-none select-none mb-2 mr-4">
          <svg viewBox="0 0 280 90" className="w-full h-full text-purple/35 fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {/* Dotted path leading to paper plane */}
            <path d="M 10 65 Q 60 45 100 65 T 160 35 Q 185 10 210 35 T 255 25" strokeDasharray="5 5" />
            {/* Sparkle */}
            <g transform="translate(180, 50)">
              <path d="M 0 -6 Q 0 0 6 0 Q 0 0 0 6 Q 0 0 -6 0 Q 0 0 0 -6 Z" fill="currentColor" className="text-purple/50" />
            </g>
            {/* Paper airplane at the end, flying to top-right */}
            <g transform="translate(250, 20) rotate(-10)">
              <svg width="32" height="32" viewBox="0 0 24 24" className="w-8 h-8 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </g>
          </svg>
        </div>
      </div>

      {/* Sticky Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-24 relative z-10">
        
        {/* Sticky Note 1: Purple */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={getTransition(0.7, 0.05)}
          whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.03, y: -5 }}
          style={{ rotate: -2 }}
          className="relative group min-h-[310px] select-none pt-4 cursor-default"
        >
          {/* Opaque, Visible Purple Tape - outside inner card boundary to avoid clipping */}
          <div className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 bg-[#C1B5F3]/85 border-l border-r border-dashed border-purple-400/40 rotate-[-1.5deg] shadow-sm z-20" />

          {/* Inner Card (handles clipPath for bottom-right fold) */}
          <div 
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%)'
            }}
            className="relative bg-[#E2D7FF] text-ink p-6 md:p-8 h-full min-h-[294px] flex flex-col justify-between rounded-[2px] shadow-[2px_12px_24px_rgba(0,0,0,0.06)]"
          >
            {/* Curled Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#B6A6EB'
              }}
            />

            {/* Sticky Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="h-8 w-8 rounded-full border border-ink/15 flex items-center justify-center font-display font-medium text-xs select-none">
                01
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block leading-none">
                  STATUS:
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/80 block leading-none mt-1 border-b border-ink/40 pb-0.5 font-cursive">
                  UPCOMING
                </span>
              </div>
            </div>

            {/* Sticky Body */}
            <div className="my-auto flex flex-col items-start">
              {/* Custom hand-drawn Code icon */}
              <div className="mb-4 text-ink/75 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 8 6 L 2 12 L 8 18" />
                  <path d="M 16 6 L 22 12 L 16 18" />
                </svg>
              </div>
              <h3 className="font-cursive text-2xl font-bold text-ink mb-3 leading-none">
                From Fans to Frontend
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                 Build a stunning website for your favorite World Cup team using Antigravity with immersive animations and breathtaking visuals.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SPEAKER : Umar Al Mukhtar Ibrahimkutty
              </span>
              <div className="text-purple/70">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sticky Note 2: Yellow */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={getTransition(0.7, 0.15)}
          whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.03, y: -5 }}
          style={{ rotate: 1.8 }}
          className="relative group min-h-[310px] select-none pt-4 cursor-default"
        >
          {/* Opaque, Visible Yellow Tape - outside inner card boundary to avoid clipping */}
          <div className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 bg-[#EDDE95]/85 border-l border-r border-dashed border-amber-400/40 rotate-[2deg] shadow-sm z-20" />

          {/* Inner Card (handles clipPath for bottom-right fold) */}
          <div 
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%)'
            }}
            className="relative bg-[#FFF5C6] text-ink p-6 md:p-8 h-full min-h-[294px] flex flex-col justify-between rounded-[2px] shadow-[2px_12px_24px_rgba(0,0,0,0.06)]"
          >
            {/* Curled Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#DDD08E'
              }}
            />

            {/* Sticky Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="h-8 w-8 rounded-full border border-ink/15 flex items-center justify-center font-display font-medium text-xs select-none">
                02
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block leading-none">
                  STATUS:
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/80 block leading-none mt-1 border-b border-ink/40 pb-0.5 font-cursive">
                  UPCOMING
                </span>
              </div>
            </div>

            {/* Sticky Body */}
            <div className="my-auto flex flex-col items-start">
              {/* Custom hand-drawn Calendar icon */}
              <div className="mb-4 text-ink/75 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 6 Q 12 5 20 6 Q 21 12 20 20 Q 12 21 4 20 Q 3 12 4 6 Z" />
                  <path d="M 8 3 Q 8 6 8 7" />
                  <path d="M 16 3 Q 16 6 16 7" />
                  <path d="M 4 11 Q 12 10 20 11" />
                  <path d="M 9 15 L 9.1 15" strokeWidth="3" />
                  <path d="M 15 15 L 15.1 15" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="font-cursive text-2xl font-bold text-ink mb-3 leading-none">
                Kickoff to UI with Figma
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                Discover the basics of UI/UX by crafting a World Cup-inspired mobile app in Figma with engaging user experiences.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SPEAKER : Aaron R Thomas 
              </span>
              <div className="text-amber-800/60">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 14 Q10 8 12 11 T16 11 T18 15" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sticky Note 3: Pink */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={getTransition(0.7, 0.25)}
          whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.03, y: -5 }}
          style={{ rotate: -1 }}
          className="relative group min-h-[310px] select-none pt-4 cursor-default"
        >
          {/* Opaque, Visible Pink Tape - outside inner card boundary to avoid clipping */}
          <div className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 bg-[#EDAFC1]/85 border-l border-r border-dashed border-pink-400/40 rotate-[-1deg] shadow-sm z-20" />

          {/* Inner Card (handles clipPath for bottom-right fold) */}
          <div 
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%)'
            }}
            className="relative bg-[#FFD5E4] text-ink p-6 md:p-8 h-full min-h-[294px] flex flex-col justify-between rounded-[2px] shadow-[2px_12px_24px_rgba(0,0,0,0.06)]"
          >
            {/* Curled Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#E2ADB9'
              }}
            />

            {/* Sticky Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="h-8 w-8 rounded-full border border-ink/15 flex items-center justify-center font-display font-medium text-xs select-none">
                03
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block leading-none">
                  STATUS:
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/80 block leading-none mt-1 border-b border-ink/40 pb-0.5 font-cursive">
                  UPCOMING
                </span>
              </div>
            </div>

            {/* Sticky Body */}
            <div className="my-auto flex flex-col items-start">
              {/* Custom hand-drawn Group icon */}
              <div className="mb-4 text-ink/75 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="3.5" />
                  <path d="M 5 20 A 7 7 0 0 1 19 20" />
                  <circle cx="6" cy="10" r="2.5" />
                  <path d="M 2 20 A 4 4 0 0 1 10 20" />
                  <circle cx="18" cy="10" r="2.5" />
                  <path d="M 14 20 A 4 4 0 0 1 22 20" />
                </svg>
              </div>
              <h3 className="font-cursive text-2xl font-bold text-ink mb-3 leading-none">
                Game Dev 101
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                Build your very first video game using Unity, the leading game development engine, and bring your creative ideas to life.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SPEAKER : Devanarayanan A
              </span>
              <div className="text-pink-500/70">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35 l-1.45-1.32 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 c1.74 0 3.41 0.81 4.5 2.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 c0 3.78-3.4 6.86-8.55 11.54 Z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Ripped Paper Callout Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={getTransition(0.7, 0.3)}
        className="relative max-w-[760px] mx-auto z-10 pt-6"
      >
        
        {/* Translucent light grey tape sticking the card in the top center */}
        <div 
          className="absolute top-[12px] left-[calc(50%-45px)] w-[90px] h-6 bg-[#e0e0e0]/75 backdrop-blur-[0.5px] border-l border-r border-dashed border-gray-400/25 shadow-sm z-30 pointer-events-none"
        />

        {/* Refined Megaphone sketch on the right from generated asset */}
        <div className="absolute bottom-[10px] right-[24px] z-20 pointer-events-none hidden sm:block">
          <img 
            src={megaphoneSketch} 
            alt="Megaphone Sketch" 
            className="w-20 h-20 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.06)]"
          />
        </div>

        {/* The ripped paper card with dynamic clip path and noise paper texture */}
        <div 
          className="py-10 px-8 sm:px-16 md:px-24 border border-hairline shadow-[0_20px_45px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
          style={{
            clipPath: 'polygon(0% 0px, 100% 0px, 99.6% 8%, 100% 16%, 99.4% 24%, 100% 32%, 99.7% 40%, 100% 48%, 99.5% 56%, 100% 64%, 99.8% 72%, 100% 80%, 99.5% 88%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0.5% 92%, 0% 84%, 0.4% 76%, 0% 68%, 0.6% 60%, 0% 52%, 0.3% 44%, 0% 36%, 0.5% 28%, 0% 20%, 0.4% 12%, 0% 4px)',
            background: `
              radial-gradient(circle at 50% 50%, rgba(255,253,250,0.98), rgba(244,242,238,0.95)),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")
            `
          }}
        >
          {/* Intersecting paper fold crease overlays */}
          <div 
            className="absolute inset-0 pointer-events-none z-10" 
            style={{
              background: `
                linear-gradient(115deg, transparent 49.6%, rgba(0,0,0,0.04) 50%, rgba(255,255,255,0.6) 50.4%, transparent 50.8%),
                linear-gradient(25deg, transparent 49.7%, rgba(0,0,0,0.03) 50%, rgba(255,255,255,0.5) 50.3%, transparent 50.6%)
              `,
              mixBlendMode: 'multiply'
            }} 
          />

          {/* Curled fold decoration */}
          <div 
            className="absolute bottom-0 right-0 w-4 h-4 shadow-[-1px_-1px_2px_rgba(0,0,0,0.15)] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.95) 100%)',
              backgroundColor: '#e5e5e5',
              clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)'
            }}
          />

          {/* V1.0 Chapter Status Header with Pink Radiating Marks */}
          <div className="flex items-center justify-center gap-3 mb-4 select-none relative z-20">
            <svg className="w-5 h-5 text-pink-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 12 L4 10" />
              <path d="M11 9 L6 4" />
              <path d="M12 14 L8 19" />
            </svg>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              V1.0 CHAPTER STATUS
            </span>
            <svg className="w-5 h-5 text-pink-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M14 12 L20 10" />
              <path d="M13 9 L18 4" />
              <path d="M12 14 L16 19" />
            </svg>
          </div>

          <p className="font-handwritten text-[16px] sm:text-[18px] text-ink/80 leading-relaxed max-w-[50ch] mx-auto relative z-20">
            We are currently in setup mode. No events are scheduled at this exact moment, but planning is underway. 
            Announcements will be broadcasted live on our official Discord server first.
          </p>
        </div>
      </motion.div>

    </Section>
  );
}
