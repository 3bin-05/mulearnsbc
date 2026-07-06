import React, { useState, useEffect } from 'react';
import './Preloader.css';
import sbcLogo from '../../assets/sbc.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Lock body scroll on mount, restore on unmount
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Update progress smoothly using requestAnimationFrame over 5000ms
  useEffect(() => {
    const duration = 5000; // exactly 5 seconds
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);

      setProgress(progressPercent);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsExiting(true);
        const timer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); // Wait for the 600ms CSS fade-out transition
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [onComplete]);

  // Calculate SVG clip path attributes based on progress.
  // The SVG viewBox height is 100.
  // We want the clip-rect to reveal the logo from bottom to top.
  const svgHeight = 100;
  const clipHeight = (progress / 100) * svgHeight;
  const clipY = svgHeight - clipHeight;

  return (
    <div className={`preloader-overlay ${isExiting ? 'fade-out' : ''}`}>
      
      {/* Central Orbit System and Logo */}
      <div className="preloader-orbit-wrapper">
        {/* Soft Radial Glow */}
        <div className="preloader-bg-glow" />

        {/* Concentric Circles */}
        <div className="orbit-circle-outer" />
        <div className="orbit-circle-inner" />

        {/* Tilted Ellipse Orbit & Flying Rocket */}
        <div className="orbit-ellipse-container">
          <div className="orbit-ellipse-line" />
          
          {/* Flying Rocket */}
          <div className="orbit-rocket">
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sleek Rocket Body (pointing top-right naturally) */}
              <path 
                d="M21.2 2.8c-1.2-1.2-3-1.8-4.7-1.5-1.2.2-2.3.8-3.2 1.7l-7.6 7.6c-.6.6-1 1.4-1.2 2.3l-1.4 5.2c-.2.6.2 1.2.8 1l5.2-1.4c.9-.2 1.7-.6 2.3-1.2l7.6-7.6c.9-.9 1.5-2 1.7-3.2.3-1.7-.3-3.5-1.5-4.7z" 
                fill="#7C3AED" 
              />
              {/* Rocket Window */}
              <circle cx="16" cy="8" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Decorative Particles & Stars */}
        <div className="orbit-decor-dot-solid" />
        <div className="orbit-decor-dot-hollow" />
        <div className="orbit-decor-dot-small-inner" />
        
        {/* Sparkle 1 (four-pointed star) */}
        <svg viewBox="0 0 24 24" className="orbit-decor-star-sparkle-1" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>

        {/* Sparkle 2 (four-pointed star outline) */}
        <svg viewBox="0 0 24 24" className="orbit-decor-star-sparkle-2" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>

        {/* Central Logo & Branding Block */}
        <div className="preloader-branding-container">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            fill="none"
            className="preloader-logo-svg"
          >
            <defs>
              {/* Beautiful brand gradient */}
              <linearGradient id="purpleGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />     {/* Indigo */}
                <stop offset="50%" stopColor="#7C3AED" />    {/* Brand Purple */}
                <stop offset="100%" stopColor="#A78BFA" />   {/* Light Purple */}
              </linearGradient>
              
              {/* Dynamic Clip-path to animate the gradient filling up */}
              <clipPath id="logoClip">
                <rect x="0" y={clipY} width="100" height={clipHeight} />
              </clipPath>
            </defs>

            {/* Silhouette/Background Rounded Geometric Mu Logo */}
            <text
              x="50"
              y="71"
              textAnchor="middle"
              fontFamily="'Gilroy', 'Inter', sans-serif"
              fontWeight="900"
              fontSize="70"
              fill="#F3EEFF"
              stroke="rgba(124, 58, 237, 0.06)"
              strokeWidth="0.5"
              className="select-none pointer-events-none"
            >
              μ
            </text>

            {/* Glowing Purple Gradient Filled path on top, clipped dynamically */}
            <text
              x="50"
              y="71"
              textAnchor="middle"
              fontFamily="'Gilroy', 'Inter', sans-serif"
              fontWeight="900"
              fontSize="70"
              fill="url(#purpleGradient)"
              clipPath="url(#logoClip)"
              className="select-none pointer-events-none"
            >
              μ
            </text>
          </svg>

          {/* µlearn branding */}
          <img 
            src={sbcLogo} 
            alt="µlearn" 
            className="preloader-wordmark-img" 
          />
          <div className="preloader-subheading">SBC CAMPUS CHAPTER</div>
        </div>
      </div>

      {/* Tagline */}
      <div className="preloader-tagline">
        Learn. Build. Share. <span className="repeat-text">Repeat.</span>
      </div>

      {/* Horizontal bottom progress bar row */}
      <div className="preloader-bottom-container">
        <div className="preloader-bottom-row">
          <span className="preloader-bottom-label">LOADING</span>
          
          <div className="preloader-bottom-track">
            <div 
              className="preloader-bottom-fill" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          <span className="preloader-bottom-percent">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>

    </div>
  );
};

export default Preloader;
