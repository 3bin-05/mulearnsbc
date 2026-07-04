import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const TELEMETRY_LINES = [
  'INITIALIZING SBC MAINFRAME...',
  'ESTABLISHING SECURE PROTOCOLS...',
  'DECRYPTING DATABASES [SBC_MEMBERS_09]...',
  'LOADING COMMUNITY GRAPH MODULES...',
  'GRID SYNCHRONIZATION 100%...',
  'SBC COMM-SYSTEM ONLINE.'
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Simulated progress loader
  useEffect(() => {
    const duration = 2200; // 2.2 seconds loading
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setIsCompleted(true);
          // Small delay before transition out
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Telemetry text transitions
  useEffect(() => {
    if (progress < 15) setTelemetryIndex(0);
    else if (progress < 35) setTelemetryIndex(1);
    else if (progress < 55) setTelemetryIndex(2);
    else if (progress < 75) setTelemetryIndex(3);
    else if (progress < 95) setTelemetryIndex(4);
    else setTelemetryIndex(5);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.08,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden font-sans select-none"
        >
          {/* Subtle Grid overlay background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
          
          {/* Orbital Space Ring Centerpiece */}
          <div className="relative w-44 h-44 mb-10 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute w-full h-full rounded-full border border-dashed border-white/20"
            />
            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute w-[80%] h-[80%] rounded-full border border-white/10 border-t-white/50 border-b-white/40"
            />
            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute w-[58%] h-[58%] rounded-full border border-dashed border-white/5 border-l-white/30 border-r-white/30"
            />
            {/* Core glowing dot representing SBC planet */}
            <motion.div
              animate={{ 
                scale: [0.95, 1.15, 0.95],
                opacity: [0.4, 0.9, 0.4] 
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-white shadow-[0_0_20px_#ffffff,0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-black" />
            </motion.div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="font-orbitron font-extrabold text-[20px] sm:text-[24px] tracking-[0.25em] text-white">
              MULEARN SBC
            </h1>
            <div className="w-12 h-[1px] bg-white/40 mx-auto mt-2" />
          </div>

          {/* Sci-Fi Telemetry logs display */}
          <div className="h-6 font-mono text-[9px] sm:text-[10px] tracking-wider text-white/50 mb-3 select-none text-center px-4 w-[280px] sm:w-[360px] truncate">
            <span className="text-white/30 font-bold mr-2">SYS_LOG:</span>
            {TELEMETRY_LINES[telemetryIndex]}
          </div>

          {/* Sleek Cinematic Progress Bar */}
          <div className="w-[200px] sm:w-[260px] h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_8px_rgba(255,255,255,0.05)] mb-3">
            <motion.div 
              className="h-full bg-white shadow-[0_0_12px_#ffffff]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <div className="font-orbitron font-medium text-[11px] sm:text-[12px] tracking-[0.15em] text-white/70">
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
