import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import TiltedCard from '../reactbits/TiltedCard';

/**
 * Redesigned Impact Projects Section.
 * Style: Lined paper, spiral binder wire loops, graph grid, torn pages, tapes, and paperclips.
 */
export default function Impact() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  return (
    <Section id="impact" tone="light" className="relative overflow-hidden">
      
      {/* Section Header */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 z-10">
        
        {/* Left Side: Tagline, Title, Description */}
        <div className="max-w-[620px]">
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple">
            FROM THE COMMUNITY
          </span>
          <div className="w-8 h-[2px] bg-purple mt-2 mb-6" />

          <h2 className="font-display font-semibold text-[38px] sm:text-[48px] tracking-tight text-ink mb-4 leading-tight relative">
            Impact <span className="relative inline-block">
              Projects
              {/* Hand-drawn underline under Projects */}
              <span className="absolute left-0 bottom-[-6px] w-full h-[8px] pointer-events-none">
                <svg viewBox="0 0 100 10" fill="none" className="w-full h-full text-purple" preserveAspectRatio="none">
                  <path d="M3 5 C 30 9, 70 9, 97 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
            {/* Sparkle star next to title */}
            <span className="absolute top-0 right-[-24px] text-purple hidden sm:inline-block">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 12 2 Q 12 12 22 12 Q 12 12 12 22 Q 12 12 2 12 Q 12 12 12 2 Z" />
              </svg>
            </span>
          </h2>
          <p className="max-w-[46ch] text-[14px] sm:text-[15px] text-ink/65 leading-relaxed font-body mt-4">
            Real software shipped by students to solve real campus problems.
          </p>
        </div>

        {/* Right Side: Hand-drawn Swipe indicator */}
        <div className="flex items-center gap-2 select-none self-start md:self-end">
          <span className="font-cursive text-purple text-[17px] font-medium leading-none rotate-[-4deg] mr-1 block">
            Swipe or scroll
          </span>
          {/* Curved hand-drawn arrow */}
          <div className="text-purple w-16 h-6">
            <svg viewBox="0 0 100 30" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 5 20 Q 40 10 70 15 T 90 10" />
              <path d="M 82 5 L 90 10 L 84 18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Rail */}
      <div className="flex overflow-x-auto gap-8 md:gap-10 pb-12 snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide relative z-10 pt-4">
        
        {/* Card 1: AeroScribe (Spiral notebook, lined paper, paperclip) */}
        <TiltedCard className="w-[300px] md:w-[325px] h-[390px] bg-transparent border-0 overflow-visible relative">
          {/* Paperclip clipping top-left edge */}
          <div className="absolute top-[-4px] left-[32px] z-30 rotate-[-12deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-purple" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V9.5a3.5 3.5 0 0 1 7 0v9a5 5 0 0 1-10 0v-11a7 7 0 0 1 14 0v10" />
            </svg>
          </div>

          {/* Spiral binder wire on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-[#E9E5F3] flex flex-col justify-between py-6 z-20 bg-white/10 select-none">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="relative flex items-center justify-center h-6">
                {/* Metal spiral wire */}
                <div className="absolute left-[-2px] w-6 h-4 border-2 border-gray-400/40 rounded-full border-r-transparent rotate-[-15deg] z-30" />
                {/* Binder paper hole */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#FCFCFC] border border-gray-300 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.08)] z-10" />
              </div>
            ))}
          </div>

          {/* Sheet Body (Lined background with curl) */}
          <div 
            style={{
              backgroundImage: 'repeating-linear-gradient(#fff, #fff 24px, #ECE8F7 24px, #ECE8F7 25px)',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%)'
            }}
            className="relative w-full h-full bg-white text-ink pl-12 pr-6 py-6 border border-hairline rounded-[2px] shadow-[2px_12px_28px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            {/* Red left margin line */}
            <div className="absolute left-10 top-0 bottom-0 w-[1.5px] bg-[#FFA0A0]" />

            {/* Bottom-right Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-5 h-5 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#CDC0FC'
              }}
            />

            {/* Header segment */}
            <div className="flex justify-between items-center z-10 relative mt-2">
              <span className="font-cursive text-2xl font-bold text-purple select-none">
                01.
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-purple bg-[#F3EEFF] border border-purple-400/35 px-2.5 py-0.5 rounded-full select-none">
                VERIFIED
              </span>
            </div>

            {/* Sketch drawing segment */}
            <div className="flex items-center justify-center my-3 z-10 relative">
              <svg viewBox="0 0 64 64" className="w-24 h-14 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Central body */}
                <ellipse cx="32" cy="32" rx="6" ry="4" />
                {/* Arms */}
                <path d="M 28 30 L 16 20 M 36 30 L 48 20 M 28 34 L 16 44 M 36 34 L 48 44" />
                {/* Motors */}
                <line x1="12" y1="20" x2="20" y2="20" />
                <line x1="44" y1="20" x2="52" y2="20" />
                <line x1="12" y1="44" x2="20" y2="44" />
                <line x1="44" y1="44" x2="52" y2="44" />
                {/* Propellers */}
                <path d="M 10 18 Q 16 22 22 18" />
                <path d="M 42 18 Q 48 22 54 18" />
                <path d="M 10 42 Q 16 46 22 42" />
                <path d="M 42 42 Q 48 46 54 42" />
                {/* Sensor camera */}
                <path d="M 32 36 L 32 40 M 30 40 L 34 40" />
              </svg>
            </div>

            {/* Info details */}
            <div className="z-10 relative">
              <h3 className="font-display font-bold text-xl text-ink leading-tight mb-2">
                AeroScribe
              </h3>
              <p className="text-[12px] sm:text-[13px] text-ink/75 leading-relaxed font-body min-h-[54px]">
                An IoT telemetry visualizer that maps real-time UAV coordinates and sensor data to a web-based dashboard.
              </p>
            </div>

            {/* Footer tags */}
            <div className="border-t border-hairline/80 pt-4 flex gap-1.5 z-10 relative">
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                REACT
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                THREE.JS
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                WEBSOCKETS
              </span>
            </div>
          </div>
        </TiltedCard>

        {/* Card 2: CampusConnect (Tapes, lined paper, ripped bottom) */}
        <TiltedCard className="w-[300px] md:w-[325px] h-[390px] bg-transparent border-0 overflow-visible relative pt-4 rotate-[1.5deg]">
          {/* Tape strip at top center */}
          <div className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 bg-[#C1B5F3]/70 border-l border-r border-dashed border-purple-400/30 rotate-[-1.5deg] shadow-sm z-20" />

          {/* Sheet Body (Lined background with ripped bottom edge) */}
          <div 
            style={{
              backgroundImage: 'repeating-linear-gradient(#fff, #fff 24px, #ECE8F7 24px, #ECE8F7 25px)',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 98% 95%, 96% 92%, 94% 95%, 92% 92%, 90% 95%, 88% 92%, 86% 95%, 84% 92%, 82% 95%, 80% 92%, 78% 95%, 76% 92%, 74% 95%, 72% 92%, 70% 95%, 68% 92%, 66% 95%, 64% 92%, 62% 95%, 60% 92%, 58% 95%, 56% 92%, 54% 95%, 52% 92%, 50% 95%, 48% 92%, 46% 95%, 44% 92%, 42% 95%, 40% 92%, 38% 95%, 36% 92%, 34% 95%, 32% 92%, 30% 95%, 28% 92%, 26% 95%, 24% 92%, 22% 95%, 20% 92%, 18% 95%, 16% 92%, 14% 95%, 12% 92%, 10% 95%, 8% 92%, 6% 95%, 4% 92%, 2% 95%, 0% 92%)'
            }}
            className="relative w-full h-[calc(100%-16px)] bg-white text-ink px-6 py-6 border border-hairline rounded-[2px] shadow-[2px_12px_28px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            {/* Red left margin line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1.5px] bg-[#FFA0A0]" />

            {/* Header segment */}
            <div className="flex justify-between items-center z-10 relative mt-2 pl-4">
              <span className="font-cursive text-2xl font-bold text-purple select-none">
                02.
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-purple bg-[#F3EEFF] border border-purple-400/35 px-2.5 py-0.5 rounded-full select-none">
                BUILDING
              </span>
            </div>

            {/* Sketch drawing segment */}
            <div className="flex items-center justify-center my-3 z-10 relative pl-4">
              <svg viewBox="0 0 64 64" className="w-24 h-14 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Laptop */}
                <path d="M 24 38 L 40 38 L 44 42 L 20 42 Z" />
                <path d="M 26 38 L 26 30 L 38 30 L 38 38" />
                {/* Left person */}
                <circle cx="20" cy="22" r="3.5" />
                <path d="M 14 36 C 14 30, 24 30, 24 36" />
                <path d="M 18 30 L 22 34" />
                {/* Right person */}
                <circle cx="44" cy="22" r="3.5" />
                <path d="M 38 36 C 38 30, 48 30, 48 36" />
                <path d="M 46 30 L 42 34" />
              </svg>
            </div>

            {/* Info details */}
            <div className="z-10 relative pl-4">
              <h3 className="font-display font-bold text-xl text-ink leading-tight mb-2">
                CampusConnect
              </h3>
              <p className="text-[12px] sm:text-[13px] text-ink/75 leading-relaxed font-body min-h-[54px]">
                A skill-based peer-pairing portal connecting junior developers with senior mentors across active learning circles.
              </p>
            </div>

            {/* Footer tags */}
            <div className="border-t border-hairline/80 pt-4 pb-4 flex gap-1.5 z-10 relative pl-4">
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                NEXT.JS
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                POSTGRESQL
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                TAILWIND
              </span>
            </div>
          </div>
        </TiltedCard>

        {/* Card 3: KarmaCalc (Tape, graph grid paper) */}
        <TiltedCard className="w-[300px] md:w-[325px] h-[390px] bg-transparent border-0 overflow-visible relative pt-4 rotate-[-1.2deg]">
          {/* Tape strip at top center */}
          <div className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 bg-[#C1B5F3]/70 border-l border-r border-dashed border-purple-400/30 rotate-[1deg] shadow-sm z-20" />

          {/* Sheet Body (Grid pattern with curl) */}
          <div 
            style={{
              background: 'linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px)',
              backgroundSize: '15px 15px',
              backgroundColor: '#FCFCFC',
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%)'
            }}
            className="relative w-full h-[calc(100%-16px)] text-ink px-6 py-6 border border-hairline rounded-[2px] shadow-[2px_12px_28px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            {/* Bottom-right Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-5 h-5 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#CDC0FC'
              }}
            />

            {/* Header segment */}
            <div className="flex justify-between items-center z-10 relative mt-2">
              <span className="font-cursive text-2xl font-bold text-purple select-none">
                03.
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-purple bg-[#F3EEFF] border border-purple-400/35 px-2.5 py-0.5 rounded-full select-none">
                SHIPPED
              </span>
            </div>

            {/* Sketch drawing segment */}
            <div className="flex items-center justify-center my-3 z-10 relative">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M15.05 13A5 5 0 0 1 11 9.05" />
              </svg>
            </div>

            {/* Info details */}
            <div className="z-10 relative">
              <h3 className="font-display font-bold text-xl text-ink leading-tight mb-2">
                KarmaCalc
              </h3>
              <p className="text-[12px] sm:text-[13px] text-ink/75 leading-relaxed font-body min-h-[54px]">
                A WhatsApp conversational interface translating daily build-in-public posts into structured Karma points updates.
              </p>
            </div>

            {/* Footer tags */}
            <div className="border-t border-hairline/80 pt-4 flex gap-1.5 z-10 relative">
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                NODE.JS
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                META API
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                FIRESTORE
              </span>
            </div>
          </div>
        </TiltedCard>

        {/* Card 4: OpenStudy (Yellow tape, solid purple paper) */}
        <TiltedCard className="w-[300px] md:w-[325px] h-[390px] bg-transparent border-0 overflow-visible relative pt-4 rotate-[1deg]">
          {/* Tape strip at top right */}
          <div className="absolute top-0 right-8 w-20 h-6 bg-[#EDDE95]/70 border-l border-r border-dashed border-amber-400/40 rotate-[12deg] shadow-sm z-20" />

          {/* Sheet Body (Solid purple background with curl) */}
          <div 
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%)'
            }}
            className="relative w-full h-[calc(100%-16px)] bg-[#E2D7FF] text-ink px-6 py-6 border border-hairline rounded-[2px] shadow-[2px_12px_28px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            {/* Bottom-right Fold Corner */}
            <div 
              className="absolute bottom-0 right-0 w-5 h-5 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundColor: '#B6A6EB'
              }}
            />

            {/* Header segment */}
            <div className="flex justify-between items-center z-10 relative mt-2">
              <span className="font-cursive text-2xl font-bold text-purple select-none">
                04.
              </span>
            </div>

            {/* Sketch drawing segment */}
            <div className="flex items-center justify-center my-3 z-10 relative">
              <svg viewBox="0 0 64 64" className="w-24 h-14 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Left page */}
                <path d="M 32 44 C 24 40, 14 40, 10 42 L 10 18 C 14 16, 24 16, 32 20 Z" />
                {/* Right page */}
                <path d="M 32 44 C 40 40, 50 40, 54 42 L 54 18 C 50 16, 40 16, 32 20 Z" />
                {/* Book spine */}
                <path d="M 32 20 L 32 44" />
                {/* Page lines */}
                <path d="M 14 23 Q 22 21 28 25 M 14 28 Q 22 26 28 30 M 14 33 Q 22 31 28 35" strokeWidth="1" />
                <path d="M 50 23 Q 42 21 36 25 M 50 28 Q 42 26 36 30 M 50 33 Q 42 31 36 35" strokeWidth="1" />
              </svg>
            </div>

            {/* Info details */}
            <div className="z-10 relative">
              <h3 className="font-display font-bold text-xl text-ink leading-tight mb-2">
                OpenStudy
              </h3>
              <p className="text-[12px] sm:text-[13px] text-ink/75 leading-relaxed font-body min-h-[54px] line-clamp-3">
                A crowdsourced study guide directory built and updated by active peer learning groups, student by student.
              </p>
            </div>

            {/* Footer tags */}
            <div className="border-t border-hairline/80 pt-4 flex gap-1.5 z-10 relative">
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                ASTRO
              </span>
              <span className="font-mono text-[9px] uppercase font-semibold text-purple bg-[#F3EEFF] border border-purple-400/25 px-2 py-0.5 rounded-full select-none">
                SUPABASE
              </span>
            </div>
          </div>
        </TiltedCard>

      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col items-center gap-4 select-none relative z-10">
        
        {/* Carousel indicator dots */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-purple" />
          <div className="h-2 w-2 rounded-full bg-purple/30" />
          <div className="h-2 w-2 rounded-full bg-purple/30" />
          <div className="h-2 w-2 rounded-full bg-purple/30" />
        </div>

        {/* Drag to explore helper tip */}
        <div className="flex items-center gap-3 font-cursive text-purple text-[17px] font-medium leading-none">
          {/* Left arrow */}
          <span>
            <svg viewBox="0 0 40 10" className="w-8 h-2 fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 35 5 L 5 5 M 12 1 L 5 5 L 12 9" />
            </svg>
          </span>
          <span>Drag to explore</span>
          {/* Right arrow */}
          <span>
            <svg viewBox="0 0 40 10" className="w-8 h-2 fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 5 5 L 35 5 M 28 1 L 35 5 L 28 9" />
            </svg>
          </span>
        </div>
      </div>

    </Section>
  );
}
