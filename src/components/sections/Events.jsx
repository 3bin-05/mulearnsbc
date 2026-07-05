import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';

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
          className="relative group min-h-[310px] select-none pt-4 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-default"
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
                  STANDBY
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
                Build Sprints
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                Intense, weekend-long hackathons focused on building, deploying, and open-sourcing real-world applications in 48 hours.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SCHEDULE AWAITING
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
          className="relative group min-h-[310px] select-none pt-4 rotate-[1.8deg] hover:rotate-0 transition-transform duration-300 cursor-default"
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
                  PLANNING
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
                Skill Workshops
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                Hands-on learning sessions covering emerging frameworks, tools, AI systems, and development methodologies.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SCHEDULE AWAITING
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
          className="relative group min-h-[310px] select-none pt-4 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 cursor-default"
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
                  AWAITING V1
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
                Community Circles
              </h3>
              <p className="font-handwritten text-[15px] sm:text-[16px] text-ink/80 leading-snug">
                Informal check-ins, show-and-tell sessions, and networking syncs to match preceptors with new learners.
              </p>
            </div>

            {/* Sticky Footer */}
            <div className="border-t border-dashed border-ink/15 pt-4 mt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] text-ink/45 uppercase tracking-[0.1em] font-medium">
                SCHEDULE AWAITING
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
        className="relative max-w-[680px] mx-auto z-10 pt-4"
      >
        
        {/* Paperclip matching the reference image layout precisely */}
        <div className="absolute top-[-15px] left-[32px] z-20 rotate-[-12deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-11 h-11 text-[#A32525]" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Realistic folded paperclip path */}
            <path d="M9 18V9.5a3.5 3.5 0 0 1 7 0v9a5 5 0 0 1-10 0v-11a7 7 0 0 1 14 0v10" />
          </svg>
        </div>

        {/* Megaphone sketch on the right exactly like the hand-drawn reference */}
        <div className="absolute bottom-[20px] right-[24px] z-20 pointer-events-none hidden sm:block opacity-85">
          <svg viewBox="0 0 48 48" className="w-16 h-16 text-purple" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Hand-drawn Megaphone/Speaker */}
            <path d="M 12 18 L 26 14 Q 30 14 30 20 L 30 28 Q 30 34 26 34 L 12 30" />
            <path d="M 12 18 Q 8 18 8 24 Q 8 30 12 30 Z" />
            <path d="M 14 30 L 11 38 Q 10 40 13 40 L 17 37 L 16 30" />
            <ellipse cx="30" cy="24" rx="3" ry="7" />
            <path d="M 37 16 Q 41 24 37 32" />
            <path d="M 42 11 Q 48 24 42 37" />
          </svg>
        </div>

        {/* The ripped paper card with dynamic clip path */}
        <div 
          className="bg-white py-8 px-8 sm:px-12 border border-hairline/80 shadow-[0_15px_35px_rgba(0,0,0,0.04)] text-center relative"
          style={{
            clipPath: 'polygon(0% 4px, 2% 0px, 4% 5px, 6% 1px, 8% 6px, 10% 2px, 12% 7px, 14% 3px, 16% 5px, 18% 1px, 20% 6px, 22% 2px, 24% 7px, 26% 3px, 28% 5px, 30% 1px, 32% 6px, 34% 2px, 36% 7px, 38% 3px, 40% 5px, 42% 1px, 44% 6px, 46% 2px, 48% 7px, 50% 3px, 52% 5px, 54% 1px, 56% 6px, 58% 2px, 60% 7px, 62% 3px, 64% 5px, 66% 1px, 68% 6px, 70% 2px, 72% 7px, 74% 3px, 76% 5px, 78% 1px, 80% 6px, 82% 2px, 84% 7px, 86% 3px, 88% 5px, 90% 1px, 92% 6px, 94% 2px, 96% 7px, 98% 3px, 100% 4px, 100% calc(100% - 4px), 98% calc(100% - 1px), 96% calc(100% - 6px), 94% calc(100% - 2px), 92% calc(100% - 7px), 90% calc(100% - 3px), 88% calc(100% - 5px), 86% calc(100% - 1px), 84% calc(100% - 6px), 82% calc(100% - 2px), 80% calc(100% - 7px), 78% calc(100% - 3px), 76% calc(100% - 5px), 74% calc(100% - 1px), 72% calc(100% - 6px), 70% calc(100% - 2px), 68% calc(100% - 7px), 66% calc(100% - 3px), 64% calc(100% - 5px), 62% calc(100% - 1px), 60% calc(100% - 6px), 58% calc(100% - 2px), 56% calc(100% - 7px), 54% calc(100% - 3px), 52% calc(100% - 5px), 50% calc(100% - 1px), 48% calc(100% - 6px), 46% calc(100% - 2px), 44% calc(100% - 7px), 42% calc(100% - 3px), 40% calc(100% - 5px), 38% calc(100% - 1px), 36% calc(100% - 6px), 34% calc(100% - 2px), 32% calc(100% - 7px), 30% calc(100% - 3px), 28% calc(100% - 5px), 26% calc(100% - 1px), 24% calc(100% - 6px), 22% calc(100% - 2px), 20% calc(100% - 7px), 18% calc(100% - 3px), 16% calc(100% - 5px), 14% calc(100% - 1px), 12% calc(100% - 6px), 10% calc(100% - 2px), 8% calc(100% - 7px), 6% calc(100% - 3px), 4% calc(100% - 5px), 2% calc(100% - 1px), 0% calc(100% - 4px))'
          }}
        >
          <span className="font-cursive text-xl font-bold tracking-wider text-purple block mb-3 select-none">
            \ \ \ V1.0 Chapter Status / / /
          </span>
          <p className="font-handwritten text-[16px] sm:text-[17px] text-ink/70 leading-relaxed max-w-[48ch] mx-auto">
            We are currently in setup mode. No events are scheduled at this exact moment, but planning is underway. 
            Announcements will be broadcasted live on our official Discord server first.
          </p>
        </div>
      </motion.div>

    </Section>
  );
}
