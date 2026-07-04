import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import bgImg from '../assets/mubg.png';
import Counter from './Counter';

interface HeroProps {
  activeSection: 'hero' | 'execom' | 'events';
  onCtaClick: () => void;
}

export default function Hero({ activeSection, onCtaClick }: HeroProps) {
  const isExecom = activeSection === 'execom';
  const isEvents = activeSection === 'events';

  // Parallax background variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft spring config for cinematic lag-free parallax
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 40,
    damping: 18,
  });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 40,
    damping: 18,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate cursor position offset from center (-0.5 to 0.5)
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Entrance variants for text items
  const exploreVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
    },
  };

  const word1Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 },
    },
  };

  const word2Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.55 },
    },
  };

  const word3Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.7 },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.85 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 0.82,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 1.0 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 1.15 },
    },
  };

  return (
    <motion.div
      animate={{
        scale: isExecom ? 0.96 : (isEvents ? 0.96 : 1),
        opacity: isExecom ? 0.15 : (isEvents ? 0 : 1),
      }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full h-screen overflow-hidden bg-black select-none ${
        isEvents ? 'pointer-events-none' : 'pointer-events-auto'
      } will-change-transform`}
    >
      {/* Background Image with subtle Parallax */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          scale: 1.03, // Slight scale to avoid edges showing
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
      >
        <img
          src={bgImg}
          alt="Space background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-black/28 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.28)' }}
        />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between pt-[90px] sm:pt-[110px] lg:pt-[120px] pb-[30px] sm:pb-[45px] lg:pb-[50px] short:pt-[70px] short:pb-[30px] xshort:pt-[60px] xshort:pb-[20px]">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center max-w-[900px]">
          {/* Explore Tagline */}
          <motion.span
            variants={exploreVariants}
            initial="hidden"
            animate="visible"
            className="font-orbitron font-semibold text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] xl:text-[56px] short:text-[34px] xshort:text-[28px] tracking-explore text-exploreText leading-none mb-4 short:mb-3 xshort:mb-2"
          >
            EXPLORE.
          </motion.span>

          {/* Main Giant Heading */}
          <h1 className="font-orbitron font-bold text-[56px] sm:text-[76px] md:text-[110px] lg:text-[135px] xl:text-[155px] 2xl:text-[175px] short:text-[100px] xshort:text-[80px] leading-hero tracking-tighter text-premiumText flex flex-col select-none">
            <motion.span
              variants={word1Variants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              LEARN.
            </motion.span>
            <motion.span
              variants={word2Variants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              BUILD.
            </motion.span>
            <motion.span
              variants={word3Variants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              LEAD.
            </motion.span>
          </h1>

          {/* Horizontal Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            className="h-[1.5px] w-[280px] sm:w-[360px] md:w-[450px] bg-white/25 origin-left mt-5 mb-4 short:mt-4 short:mb-3 xshort:mt-3 xshort:mb-2"
          />

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="font-sans text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] short:text-[16px] xshort:text-[13px] font-light tracking-subtitle text-white/82 mb-8 short:mb-6 xshort:mb-4 uppercase"
          >
            TOGETHER, WE SHAPE THE FUTURE.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="self-start"
          >
            <motion.button
              onClick={onCtaClick}
              className="group relative overflow-hidden inline-flex items-center py-[16px] px-[32px] sm:py-[20px] sm:px-[40px] lg:py-[24px] lg:px-[48px] short:py-[14px] short:px-[30px] xshort:py-[12px] xshort:px-[24px] border border-white/45 bg-transparent text-white hover:text-black font-sans text-[14px] sm:text-[16px] lg:text-[18px] font-medium tracking-[0.08em] uppercase transition-colors duration-300"
              whileHover={{
                y: -2,
                borderColor: '#ffffff',
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Sliding background layer */}
              <span className="absolute inset-0 w-full h-full bg-white transition-transform duration-500 ease-[0.22,1,0.36,1] -translate-x-full group-hover:translate-x-0 z-0" />
              
              {/* Content layer */}
              <span className="relative z-10 flex items-center gap-3 sm:gap-4">
                <span>JOIN OUR JOURNEY</span>
                <motion.span
                  className="inline-block"
                  variants={{
                    hover: { x: 5 },
                  }}
                  whileHover="hover"
                  animate="rest"
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[14px]"
                  >
                    <path
                      d="M1 7H17M17 7L11 1M17 7L11 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile inline stats (visible only on mobile below CTA) */}
          <div className="block md:hidden mt-8 short:mt-6 xshort:mt-4">
            <Counter />
          </div>
        </div>
      </div>

      {/* Desktop absolute stats (aligned bottom-right relative to page wrapper, matching user's spec) */}
      <div className="hidden md:block absolute bottom-[30px] sm:bottom-[45px] lg:bottom-[50px] right-6 sm:right-10 lg:right-14 short:bottom-[40px] xshort:bottom-[30px] z-20">
        <Counter />
      </div>
    </motion.div>
  );
}
