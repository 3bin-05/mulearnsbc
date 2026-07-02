import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center max-w-[720px] mx-auto my-auto py-2 z-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold leading-[1.15] text-white mb-4 tracking-tight"
      >
        Together, We Build<br />
        <span className="gradient-text">Beyond Tomorrow.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="font-body text-[0.9rem] md:text-[1rem] leading-relaxed text-text-secondary max-w-[540px] mb-6 opacity-90"
      >
        MuLearn SBC is a community of curious minds, driven by learning, innovation, and impact. Where ideas turn into real-world change.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="cta-btn-hover"
      >
        <a
          href="#explore"
          className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-br from-accent-indigo to-accent-blue text-white font-semibold text-[0.9rem] rounded-full shadow-[0_8px_30px_rgba(92,103,242,0.45)] hover:shadow-[0_12px_35px_rgba(92,103,242,0.65)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
        >
          Explore Our Journey
          <svg
            className="arrow-icon-shift"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
