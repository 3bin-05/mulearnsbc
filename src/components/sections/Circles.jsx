import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

  return (
    <Section id="circles" tone="off-white" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Copy & Steps */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple relative mb-6">
              HOW WE LEARN
              {/* Hand-drawn scribble underline for eyebrow */}
              <svg className="absolute -bottom-2 left-0 w-16 h-2 text-purple/70 pointer-events-none" viewBox="0 0 60 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M 2 3 Q 25 1, 58 3" />
              </svg>
            </span>
            <h2 className="font-display font-semibold text-[38px] sm:text-[46px] tracking-tight text-ink mt-2 mb-6 leading-[1.15]">
              Learning Circles,<br />
              <span className="text-purple">together</span>{' '}
              <span className="relative inline-block text-ink">
                we grow.
                {/* Loop doodle above "we grow." */}
                <svg className="absolute -top-7 right-4 w-12 h-8 text-purple/85 pointer-events-none select-none" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 18 C 10 12, 12 4, 18 10 C 22 14, 25 2, 28 8 C 30 12, 33 6, 37 10" />
                </svg>
                {/* Highlight underline below "we grow." */}
                <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-purple/35 pointer-events-none" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                  <path d="M 2 4 Q 50 2, 98 4" />
                </svg>
              </span>
            </h2>
            <p className="max-w-[46ch] text-[15px] sm:text-[16px] text-ink/70 leading-relaxed font-body mb-12">
              Small peer groups. Strong mentors. Real projects.<br />
              That's how we learn in public.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Step 01 */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >
              {/* Sticky Note 01 */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-24 h-24 bg-[#E8DFFF] flex items-center justify-center rounded-[2px] shadow-[4px_12px_24px_rgba(124,58,237,0.08),_1px_2px_4px_rgba(0,0,0,0.04)] rotate-[-2.5deg] shrink-0 self-center sm:self-start select-none"
              >
                {/* Translucent tape overlay */}
                <div className="absolute -top-3 left-[calc(50%-24px)] w-12 h-6 bg-[#C1B5F3]/60 rotate-[-1.5deg] backdrop-blur-[0.5px] border-l border-r border-dashed border-purple-400/20 shadow-[0_1px_2px_rgba(0,0,0,0.03)] z-10" />
                <span className="font-display font-semibold text-[40px] text-ink/90">01</span>
              </motion.div>

              {/* Text Area */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/* Watercolor icon splash */}
                  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                      <path d="M 50,15 C 68,14 85,25 87,45 C 89,65 75,80 53,85 C 31,90 17,76,14,55 C 11,34 32,16 50,15 Z" />
                    </svg>
                    <Users className="relative w-5 h-5 text-purple" strokeWidth={2} />
                  </div>
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
            </motion.div>

            {/* Step 02 */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >
              {/* Sticky Note 02 */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-24 h-24 bg-[#FEF3D2] flex items-center justify-center rounded-[2px] shadow-[4px_12px_24px_rgba(245,158,11,0.08),_1px_2px_4px_rgba(0,0,0,0.04)] rotate-[3.2deg] shrink-0 self-center sm:self-start select-none"
              >
                {/* Translucent tape overlay */}
                <div className="absolute -top-3 left-[calc(50%-24px)] w-12 h-6 bg-[#EDDE95]/60 rotate-[2.5deg] backdrop-blur-[0.5px] border-l border-r border-dashed border-amber-400/20 shadow-[0_1px_2px_rgba(0,0,0,0.03)] z-10" />
                <span className="font-display font-semibold text-[40px] text-ink/90">02</span>
              </motion.div>

              {/* Text Area */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {/* Watercolor icon splash */}
                  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                      <path d="M 50,12 C 72,16 88,28 85,48 C 82,68 68,82 48,85 C 28,88 12,72,15,52 C 18,32 28,8 50,12 Z" />
                    </svg>
                    <Award className="relative w-5 h-5 text-purple" strokeWidth={2} />
                  </div>
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
            </motion.div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Orbit Diagram Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={shouldReduceMotion ? {} : { rotate: 0.5, scale: 1.01 }}
            viewport={{ once: true, margin: '-5%' }}
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

      {/* Bottom Bar: Stats/Features Bar */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full bg-[#F8F7FA] border border-hairline rounded-[20px] py-8 px-6 sm:px-10 mt-16 md:mt-24 select-none"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-hairline">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 pt-0 sm:pt-4 lg:pt-0 lg:px-4 first:pl-0">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                <path d="M 50,15 C 68,14 85,25 87,45 C 89,65 75,80 53,85 C 31,90 17,76,14,55 C 11,34 32,16 50,15 Z" />
              </svg>
              <Users className="relative w-6 h-6 text-purple" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-ink leading-tight">Small by design</h4>
              <p className="text-[12px] text-ink/50 mt-1">4–6 members per circle</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 pt-6 sm:pt-4 lg:pt-0 lg:px-6">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                <path d="M 50,12 C 72,16 88,28 85,48 C 82,68 68,82 48,85 C 28,88 12,72,15,52 C 18,32 28,8 50,12 Z" />
              </svg>
              <Calendar className="relative w-6 h-6 text-purple" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-ink leading-tight">Weekly sync</h4>
              <p className="text-[12px] text-ink/50 mt-1">Learn, build & ship together</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 pt-6 sm:pt-6 lg:pt-0 lg:px-6">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                <path d="M 50,15 C 65,10 82,18 85,38 C 88,58 75,78 55,82 C 35,86 18,74,15,54 C 12,34 35,20 50,15 Z" />
              </svg>
              <FileCode className="relative w-6 h-6 text-purple" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-ink leading-tight">Build in public</h4>
              <p className="text-[12px] text-ink/50 mt-1">Transparent progress, real impact</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 pt-6 sm:pt-6 lg:pt-0 lg:px-6 last:pr-0">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-purple-tint fill-currentColor">
                <path d="M 50,10 C 70,12 85,25 82,45 C 79,65 65,85 45,82 C 25,79 12,62,15,42 C 18,22 30,8 50,10 Z" />
              </svg>
              <Trophy className="relative w-6 h-6 text-purple" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-ink leading-tight">Earn Karma</h4>
              <p className="text-[12px] text-ink/50 mt-1">
                Proof of work →<br />Resumes
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </Section>
  );
}

