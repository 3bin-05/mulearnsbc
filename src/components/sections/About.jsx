import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Star, Users, Rocket } from 'lucide-react';
import Section from '../layout/Section';
import campusSketch from '../../assets/campus_sketch.png';
import CountUp from '../reactbits/CountUp';

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
      {/* Main Grid: Left Paragraphs & Right Campus Sketch */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
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

        {/* Right Column: Large Campus Sketch Illustration (col-span-7) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative py-6 lg:py-0 select-none">
          <div className="relative w-full max-w-[640px] lg:max-w-none flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={getTransition(0.8, 0.1)}
              src={campusSketch}
              alt="Sree Buddha College of Engineering Campus Sketch"
              className="w-full h-auto object-contain max-h-[600px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            />
          </div>
        </div>

      </div>

      {/* Bottom Horizontal Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={getTransition(0.7, 0.2)}
        className="w-full bg-white rounded-[24px] shadow-[0_20px_45px_rgba(0,0,0,0.03)] p-6 md:p-8 mt-16 md:mt-20 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          
          {/* Stat 1: Events Held */}
          <div className="flex items-center gap-4 lg:pr-8 lg:border-r lg:border-purple/25">
            <div className="h-12 w-12 rounded-[16px] bg-purple-tint text-purple flex items-center justify-center shrink-0 animate-wiggle">
              <Calendar size={20} className="stroke-[2.25]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/75 block leading-none mb-2">
                EVENTS HELD
              </span>
              <span className="font-display font-bold text-3xl sm:text-4xl text-purple block leading-none mb-2">
                <CountUp to={50} suffix="+" />
              </span>
              <span className="font-sans text-[12px] text-ink/65 block leading-snug">
                Workshops, sessions & hackathons
              </span>
            </div>
          </div>

          {/* Stat 2: Students Engaged */}
          <div className="flex items-center gap-4 lg:px-8 lg:border-r lg:border-purple/25">
            <div className="h-12 w-12 rounded-[16px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
              <Users size={20} className="stroke-[2.25]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/75 block leading-none mb-2">
                STUDENTS ENGAGED
              </span>
              <span className="font-display font-bold text-3xl sm:text-4xl text-purple block leading-none mb-2">
                <CountUp to={100} suffix="+" />
              </span>
              <span className="font-sans text-[12px] text-ink/65 block leading-snug">
                Active learners & contributors
              </span>
            </div>
          </div>

          {/* Stat 3: Karma Points */}
          <div className="flex items-center gap-4 lg:px-8 lg:border-r lg:border-purple/25">
            <div className="h-12 w-12 rounded-[16px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
              <Star size={20} className="stroke-[2.25]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/75 block leading-none mb-2">
                KARMA POINTS
              </span>
              <span className="font-display font-bold text-3xl sm:text-4xl text-purple block leading-none mb-2">
                <CountUp to={300} suffix="K+" />
              </span>
              <span className="font-sans text-[12px] text-ink/65 block leading-snug">
                Points earned through challenges & contributions
              </span>
            </div>
          </div>

          {/* Stat 4: Impact Created */}
          <div className="flex items-center gap-4 lg:pl-8">
            <div className="h-12 w-12 rounded-[16px] bg-purple-tint text-purple flex items-center justify-center shrink-0">
              <Rocket size={20} className="stroke-[2.25]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/75 block leading-none mb-2">
                IMPACT CREATED
              </span>
              <span className="font-display font-bold text-4xl sm:text-5xl text-purple block leading-none mb-1">
                &infin;
              </span>
              <span className="font-sans text-[12px] text-ink/65 block leading-snug">
                Ideas shipped. Impact multiplied.
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </Section>
  );
}
