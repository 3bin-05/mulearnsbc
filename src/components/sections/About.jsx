import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileCheck, Hash, Users2, Network, Calendar, Star, Building2 } from 'lucide-react';
import Section from '../layout/Section';
import campusSketch from '../../assets/campus_sketch.png';

/**
 * About Section Component (Phase 4 Redesign).
 * Matches the reference image layout: Three columns on desktop.
 * Left: Heading & description paragraphs.
 * Middle: Campus sketch image with dot grid decoration.
 * Right: Rebuilt Specifications card.
 */
export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  return (
    <Section id="about" tone="light">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Heading and Description Paragraphs (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={getTransition(0.7)}
            className="w-full"
          >
            <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-purple">
              WHAT WE ARE
            </span>
            <div className="w-8 h-[2px] bg-purple mt-2 mb-6" />

            <h2 className="font-display font-semibold text-[36px] sm:text-[44px] leading-[1.12] tracking-tight text-ink mb-8 max-w-[20ch]">
              Not a club. <br />
              A<span className="font-cursive text-purple text-[46px] sm:text-[56px] leading-none inline-block rotate-[-2deg] ml-1">  Community  </span> that compounds.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={getTransition(0.7, 0.15)}
            className="space-y-6 text-[14px] sm:text-[15px] text-ink/75 leading-relaxed font-body"
          >
            <p>
              µLearn SBC is the campus chapter of the µLearn Foundation at Sree Buddha College of Engineering. 
              We operate differently from conventional campus clubs.
            </p>
            <p>
              There are no hierarchies, no passive memberships, and no closed meetings.
            </p>
            <p>
              Instead, we are built on a simple premise: learning is a collaborative social activity. 
              We enable students to gather in small, autonomous units called Learning Circles, where they study 
              emerging technologies, build side projects, and support each other through peer feedback.
            </p>
            <p>
              By participating in challenges and sharing work in public, members earn Karma points, 
              establishing a verifiable proof-of-work portfolio that replaces traditional, paper-based resumes.
            </p>
          </motion.div>
        </div>

        {/* Middle Column: Campus Sketch Illustration (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col justify-center items-center relative py-6 lg:py-0 select-none">
          <div className="relative w-full max-w-[320px] lg:max-w-none flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={getTransition(0.8, 0.1)}
              src={campusSketch}
              alt="Sree Buddha College of Engineering Campus Sketch"
              className="w-full h-auto object-contain"
            />
            
    
          </div>
        </div>

        {/* Right Column: Specifications Card (col-span-4) */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={getTransition(0.7, 0.2)}
            className="w-full max-w-[360px] bg-white border border-hairline rounded-[24px] shadow-[0_24px_50px_rgba(0,0,0,0.03)] p-6 md:p-7 relative overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-[12px] bg-purple text-white flex items-center justify-center shadow-[0_4px_12px_rgba(124,58,237,0.25)]">
                <FileCheck size={20} className="stroke-[2px]" />
              </div>
              <div>
                <span className="font-display font-bold text-[11px] tracking-[0.15em] text-purple block uppercase">
                  Chapter Specifications
                </span>
                <div className="w-8 h-[2px] bg-purple mt-1" />
              </div>
            </div>

            {/* List Items */}
            <div className="divide-y divide-hairline mb-8">
              
              {/* Item 1: Chapter ID */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Hash size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Chapter ID
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right">
                  SBC-MULEARN
                </span>
              </div>

              {/* Item 2: Framework */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Users2 size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Framework
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right">
                  Peer-to-Peer Learning
                </span>
              </div>

              {/* Item 3: Active Circles */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Network size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Active Circles
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right">
                  12+ Peer Groups
                </span>
              </div>

              {/* Item 4: Established */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Calendar size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Established
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right">
                  October 2023
                </span>
              </div>

              {/* Item 5: Core Principle */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Star size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Core Principle
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right">
                  Build in Public
                </span>
              </div>

              {/* Item 6: Affiliation */}
              <div className="py-3.5 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-[10px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
                    <Building2 size={16} className="stroke-[2.25]" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                    Affiliation
                  </span>
                </div>
                <span className="font-display font-semibold text-[13px] text-ink text-right font-body">
                  µLearn Foundation
                </span>
              </div>

            </div>

            {/* Bottom Wavy Decoration with Badge */}
            <div className="relative w-full pt-4 flex items-center justify-center">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-hairline" />
              
              <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[6px] text-purple/20 fill-none pointer-events-none">
                <path d="M0 5 Q 25 8, 50 5 T 100 5" stroke="currentColor" strokeWidth="0.75" />
              </svg>

              <div className="relative z-10 h-9 w-9 rounded-full border border-hairline bg-white text-purple flex items-center justify-center shadow-sm font-display font-bold text-xs select-none">
                µ
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </Section>
  );
}
