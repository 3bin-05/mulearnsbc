import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Rocket } from 'lucide-react';

export default function Stats() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-end w-full gap-6 lg:gap-8 mt-4 lg:mt-6 z-10"
    >
      {/* Left Column: Chapter Description */}
      <motion.div variants={itemVariants} className="flex-1 max-w-[480px] text-center lg:text-left">
        <div className="inline-flex items-center gap-2.5 text-xs font-bold text-accent-blue uppercase tracking-[2px] mb-2">
          <span className="w-[18px] h-[3px] bg-accent-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
          We are MuLearn SBC
        </div>
        <h2 className="font-heading text-2xl lg:text-3xl font-bold leading-tight text-white mb-2 tracking-tight">
          Learn. Connect. Grow.
        </h2>
        <p className="font-body text-[0.9rem] leading-relaxed text-text-secondary">
          A campus chapter of MuLearn Foundation, empowering students to learn together, build together, and lead the future.
        </p>
      </motion.div>

      {/* Right Column: Stats Panel */}
      <motion.div 
        variants={itemVariants} 
        className="flex items-center flex-wrap sm:flex-nowrap bg-white/[0.015] backdrop-blur-md border border-white/5 rounded-[20px] p-4 sm:px-7 sm:py-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:border-white/10 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4),0_0_25px_rgba(92,103,242,0.03)] hover:-translate-y-0.5 transition-all duration-500 w-full sm:w-auto"
      >
        {/* Stat 1: Active Learners */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center p-2 sm:p-0 lg:p-2 min-w-[120px] flex-1">
          <div className="mb-3 sm:mb-0 lg:mb-3 text-accent-indigo hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <Users size={24} stroke="url(#purple-blue-gradient)" strokeWidth={2} />
          </div>
          <div className="flex flex-col sm:ml-4 lg:ml-0">
            <h3 className="font-heading text-3xl font-extrabold leading-none text-white mb-1">1000+</h3>
            <p className="font-body text-[0.75rem] font-semibold text-text-secondary uppercase tracking-[0.5px]">Active Learners</p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-14 bg-gradient-to-b from-transparent via-white/15 to-transparent mx-3 lg:mx-4" />
        <div className="block sm:hidden w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />

        {/* Stat 2: Events Hosted */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center p-2 sm:p-0 lg:p-2 min-w-[120px] flex-1">
          <div className="mb-3 sm:mb-0 lg:mb-3 text-accent-indigo hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <Calendar size={24} stroke="url(#purple-blue-gradient)" strokeWidth={2} />
          </div>
          <div className="flex flex-col sm:ml-4 lg:ml-0">
            <h3 className="font-heading text-3xl font-extrabold leading-none text-white mb-1">50+</h3>
            <p className="font-body text-[0.75rem] font-semibold text-text-secondary uppercase tracking-[0.5px]">Events Hosted</p>
          </div>
        </div>

        <div className="hidden sm:block w-px h-14 bg-gradient-to-b from-transparent via-white/15 to-transparent mx-3 lg:mx-4" />
        <div className="block sm:hidden w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />

        {/* Stat 3: Infinite Possibilities */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center p-2 sm:p-0 lg:p-2 min-w-[120px] flex-1">
          <div className="mb-3 sm:mb-0 lg:mb-3 text-accent-indigo hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <Rocket size={24} stroke="url(#purple-blue-gradient)" strokeWidth={2} />
          </div>
          <div className="flex flex-col sm:ml-4 lg:ml-0">
            <h3 className="font-heading text-3xl font-extrabold leading-none gradient-text mb-1">Infinite</h3>
            <p className="font-body text-[0.75rem] font-semibold text-text-secondary uppercase tracking-[0.5px]">Possibilities</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
