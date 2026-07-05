import React, { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * GlareHover Component (ReactBits equivalent)
 * Combines a cursor-following radial gradient glow with a 3D tilt rotation.
 * Automatically disables interaction for prefers-reduced-motion.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner content.
 * @param {string} [props.className=""] - Wrapper classes.
 * @param {string} [props.glareColor="rgba(124, 58, 237, 0.12)"] - Spotlight color.
 * @param {string} [props.glareSize="300px"] - Spotlight radius.
 * @param {number} [props.maxTilt=8] - Max tilt angle in degrees.
 */
export default function GlareHover({
  children,
  className = '',
  glareColor = 'rgba(124, 58, 237, 0.12)',
  glareSize = '300px',
  maxTilt = 8
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!containerRef.current || shouldReduceMotion) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates from -0.5 to 0.5
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // Calculate rotations
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setCoords({ x, y });
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered
          ? 'transform 0.05s ease-out, border-color 0.3s ease, background-color 0.3s ease'
          : 'transform 0.5s ease-out, border-color 0.3s ease, background-color 0.3s ease',
        transformStyle: 'preserve-3d',
        '--x': `${coords.x}px`,
        '--y': `${coords.y}px`,
      }}
    >
      {/* Glare/Spotlight Overlay */}
      {isHovered && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle ${glareSize} at var(--x) var(--y), ${glareColor}, transparent 80%)`,
          }}
        />
      )}
      <div className="h-full w-full" style={{ transform: shouldReduceMotion ? 'none' : 'translateZ(10px)' }}>
        {children}
      </div>
    </div>
  );
}
