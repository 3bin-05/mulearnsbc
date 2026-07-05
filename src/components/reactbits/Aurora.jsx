import React from 'react';

/**
 * Aurora background component.
 * Renders a slow-drifting, single-hue purple ambient glow on a black canvas.
 * Implemented with GPU-composited CSS transforms for zero compositor lag.
 * 
 * @param {Object} props
 * @param {string} [props.className=""] - Additional classes.
 */
export default function Aurora({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-black ${className}`}>
      {/* Glow Blob 1: Top Left */}
      <div 
        className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple/10 blur-[130px] animate-aurora-slow"
      />
      {/* Glow Blob 2: Bottom Right */}
      <div 
        className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-purple-dark/8 blur-[150px] animate-aurora-reverse"
      />
      {/* Glow Blob 3: Center Drift */}
      <div 
        className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple/5 blur-[160px] animate-aurora-drift"
      />
      {/* Subtle bottom fade to blend with white section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
