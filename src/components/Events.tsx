import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, User } from 'lucide-react';
import bgImg2 from '../assets/mubg2.webp';
import Footer from './Footer';

interface EventData {
  day: string;
  month: string;
  title: string;
  status: 'LIVE' | 'COMING SOON' | 'REGISTRATION OPEN' | 'COMPLETED';
  description: string;
  speaker?: string;
  time: string;
  venue: string;
}

const EVENTS: EventData[] = [
  {
    day: '--',
    month: 'JUL',
    title: 'From Fans to Frontend',
    status: 'COMING SOON',
    description: 'Build a stunning website for your favorite World Cup team using Antigravity',
    speaker: 'Umar Al Mukhtar Ibrahimkutty',
    time: '--:-- --',
    venue: 'ONLINE',
  },
  {
    day: '--',
    month: 'JUL',
    title: ' Kickoff to UI with Figma',
    status: 'COMING SOON',
    description: 'Discover the basics of UI/UX by crafting a world cup-inspired mobile app in Figma.',
    speaker: 'Aaron R Thomas',
    time: '--:-- --',
    venue: 'ONLINE',
  },
];

interface EventsProps {
  activeSection: 'hero' | 'execom' | 'events';
  onGoToExecom: (force?: boolean) => void;
}

export default function Events({ activeSection, onGoToExecom }: EventsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax effect (maximum 8px shift)
  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointerQuery.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Twinkling stars generation
  const starsRef = useRef(
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
  );

  // Wheel handler to slide Execom back down from the static Events page.
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const isAtTop = e.currentTarget.scrollTop <= 5;
    if (isAtTop && e.deltaY < -20) {
      e.preventDefault();
      e.stopPropagation();
      onGoToExecom(true);
    }
  };

  // Touch handlers to support swiping down to slide Execom back down.
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchY = e.touches[0].clientY;
    const diff = touchY - touchStartY.current; // positive = swipe down
    const isAtTop = e.currentTarget.scrollTop <= 5;
    if (isAtTop && diff > 80) {
      e.preventDefault();
      onGoToExecom(true);
    }
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id="events"
      ref={containerRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-0 w-full h-screen min-h-[100dvh] text-white overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain select-none z-30 ${
        activeSection === 'events' ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Background Image with subtle Parallax */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
          scale: 1.02,
        }}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      >
        <img
          src={bgImg2}
          alt="Space planet background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay with optimal opacity */}
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Background TWINKLING STARS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {starsRef.current.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.15, 0.95, 0.15] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* PLANET / MOUNTAINS horizontal mist slow animations */}
      <motion.div
        className="fixed inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/30 via-white/5 to-transparent opacity-20 pointer-events-none z-0"
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 min-h-screen w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 pt-28 sm:pt-32 pb-12 flex flex-col overflow-visible">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full min-h-full flex flex-col lg:flex-row gap-10 lg:gap-20 overflow-visible"
        >
          {/* LEFT SIDE COLUMN */}
          <div className="w-full lg:w-[42%] flex flex-col justify-start shrink-0 mb-4 lg:mb-0">
            {/* Small top label */}
            <motion.span
              variants={itemVariants}
              className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/60 uppercase mb-3 block"
            >
              STAY IN ORBIT
            </motion.span>

            {/* Giant Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-orbitron font-black text-[clamp(42px,14vw,48px)] sm:text-[76px] lg:text-[108px] tracking-tight leading-[0.9] text-[#F5F5F5] uppercase flex flex-col mb-4 sm:mb-6"
            >
              <span>CURRENT</span>
              <span>EVENTS</span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-sans font-light text-[13px] sm:text-[16px] text-white/82 leading-relaxed max-w-[450px] mb-5 sm:mb-8"
            >
              Discover workshops, hackathons, bootcamps, design sessions and community events.
            </motion.p>

            {/* Thin bottom divider */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-[220px] sm:max-w-none sm:w-[300px] h-[1px] bg-white/20"
            />
          </div>

          <div 
            className="w-full lg:w-[58%] relative overflow-visible h-auto lg:h-full pr-0 lg:pr-4 flex-1 flex flex-col justify-center"
          >
             {/* Vertical timeline line drawn by ScaleY */}
             <motion.div
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="absolute left-[112px] top-6 bottom-6 w-[1px] bg-white/20 origin-top hidden sm:block"
             />

            {/* Events panels list */}
            <div className="flex flex-col gap-5 sm:gap-8 lg:gap-10">
              {EVENTS.map((event) => (
                <motion.div
                  key={event.title}
                  variants={itemVariants}
                    className="relative flex flex-col sm:flex-row items-start group min-w-0"
                >
                  {/* Left Side: Date Block */}
                  <div className="flex sm:flex-col items-baseline sm:items-end shrink-0 w-full sm:w-[80px] text-left sm:text-right pt-0 sm:pt-[30px] pr-0 sm:pr-4">
                    <span className="text-[28px] sm:text-[36px] font-orbitron font-bold leading-none text-white">
                      {event.day}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-orbitron tracking-widest text-white/50 uppercase mt-1">
                      {event.month}
                    </span>
                  </div>

                  {/* Timeline Circle Bullet Node */}
                  <div className="absolute left-[112px] top-[43px] -translate-x-1/2 z-10 items-center justify-center hidden sm:flex">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className="w-4 h-4 rounded-full border border-white/25 bg-black flex items-center justify-center transition-colors duration-300 group-hover:border-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Premium Event Panel */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      borderColor: 'rgba(255, 255, 255, 0.22)',
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className="flex-1 min-w-0 w-full ml-0 sm:ml-16 bg-[#0d0d0d]/40 border border-white/10 rounded-md p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                  >
                    {/* Header: Title and Status badge */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <motion.h3
                        variants={{
                          hover: { x: 4 },
                        }}
                        className="font-orbitron font-bold text-[18px] sm:text-[22px] tracking-wide text-white transition-transform duration-300 group-hover:translate-x-1"
                      >
                        {event.title}
                      </motion.h3>

                      {/* Status Badge */}
                      <span className="font-orbitron text-[9px] tracking-wider uppercase border border-white/20 group-hover:border-white/55 px-2.5 py-1 rounded-full text-white/60 group-hover:text-white transition-all duration-300">
                        {event.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans font-light text-[13px] sm:text-[14px] text-white/70 leading-relaxed max-w-xl line-clamp-3">
                      {event.description}
                    </p>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-1">
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-sans text-white/50">
                        {event.speaker && (
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-white/40" />
                            <span>Speaker: <span className="text-white/80 font-medium">{event.speaker}</span></span>
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-white/40" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-white/40" />
                          {event.venue}
                        </span>
                      </div>

                      {/* Animated Arrow Icon */}
                      <motion.div
                        className="text-white/45 group-hover:text-white transition-colors duration-300"
                        variants={{
                          hover: { x: 8 },
                        }}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-3" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Status text */}
            <div className="text-center mt-5 sm:mt-8 lg:mt-10 sm:pl-[70px] lg:pl-[112px]">
              <span className="inline-flex items-center justify-center font-orbitron text-[10px] sm:text-[11px] tracking-[0.25em] text-white/78 uppercase border border-white/22 bg-white/[0.045] px-5 sm:px-7 py-2.5 select-none shadow-[0_0_22px_rgba(255,255,255,0.08)]">
                MORE EVENTS COMING SOON. STAY TUNED!
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 h-44 -mt-44 bg-gradient-to-b from-transparent via-[#060606]/65 to-[#060606] pointer-events-none" />
      <Footer />
    </motion.section>
  );
}
