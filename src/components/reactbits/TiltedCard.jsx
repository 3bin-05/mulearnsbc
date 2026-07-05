import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * TiltedCard Component (ReactBits equivalent)
 * Applies a smooth spring-based 3D tilt effect on hover/touch using Framer Motion.
 * Pure wrapper version: applies the 3D tilt effect to its children.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents.
 * @param {string} [props.className=""] - Additional container classes.
 */
export default function TiltedCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs configuration for organic lag
  const springConfig = { stiffness: 120, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map mouse coordinate bounds to rotations (-8 to 8 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(normX);
    y.set(normY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={`relative shrink-0 select-none snap-start ${className}`}
    >
      {children}
    </motion.div>
  );
}
