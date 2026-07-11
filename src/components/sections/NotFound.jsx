import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import error404 from '../../assets/error_404.png';

/**
 * Custom 404 Page Not Found Component.
 * Matches the website's clean white, ink text, and dark purple hand-drawn aesthetic.
 */
export default function NotFound() {
  const getTransition = (duration, delay = 0) => {
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center text-ink px-6 py-20 select-none bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #F3EEFF 0%, #FFFFFF 70%)'
      }}
    >
      <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center z-10">
        
        {/* Left Column: 404 Illustration */}
        <div className="md:col-span-6 flex justify-center items-center py-4">
          <div className="relative w-full max-w-[400px] md:max-w-[450px] flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={getTransition(0.8, 0.1)}
              src={error404}
              alt="404 Page Not Found Sketch"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Right Column: Error Messaging & CTA */}
        <div className="md:col-span-6 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.6)}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-purple font-semibold">
              ERROR 404
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.1)}
            className="font-display font-semibold text-[38px] sm:text-[48px] leading-[1.12] tracking-tight text-ink mb-6"
          >
            Lost in the <br />
            <span className="font-cursive text-purple text-[42px] sm:text-[52px] leading-none inline-block rotate-[-2deg] ml-1">
              Codebase?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.2)}
            className="max-w-[40ch] text-[14px] sm:text-[15px] text-ink/75 leading-relaxed mb-8 font-body"
          >
            The page you are trying to reach doesn't exist, has been moved, or you entered an unregistered path. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.7, 0.3)}
            className="w-full sm:max-w-xs"
          >
            <a
              href="/"
              className="group relative w-full inline-flex items-center justify-center gap-2 bg-purple text-white font-body text-[13px] font-semibold px-6 py-3.5 rounded-none overflow-hidden cursor-pointer shadow-sm text-center"
            >
              <span className="absolute inset-0 bg-[#A78BFA] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft size={14} className="stroke-[2.5px] transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Return to Homepage</span>
              </span>
            </a>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
