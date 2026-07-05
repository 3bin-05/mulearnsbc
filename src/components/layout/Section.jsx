import React from 'react';

/**
 * Shared Section layout wrapper component.
 * Handles the 160px/96px/64px vertical rhythm and 1180px max-width automatically.
 * 
 * @param {Object} props
 * @param {string} props.id - The unique section ID.
 * @param {'light' | 'off-white' | 'dark'} [props.tone='light'] - The style tone.
 * @param {string} [props.className=''] - Additional wrapper classes.
 * @param {string} [props.containerClassName=''] - Additional inner container classes.
 * @param {React.ReactNode} props.children - Section content.
 */
export default function Section({
  id,
  tone = 'light',
  className = '',
  containerClassName = '',
  children
}) {
  // Map tone to background and text colors
  const toneClasses = {
    light: 'bg-white text-ink border-b border-hairline',
    'off-white': 'bg-off-white text-ink border-b border-hairline',
    dark: 'bg-black text-white border-b border-hairline/10'
  };

  return (
    <section
      id={id}
      className={`py-[64px] md:py-[96px] lg:py-[160px] transition-colors duration-300 ${toneClasses[tone] || toneClasses.light} ${className}`}
    >
      <div className={`max-w-[1180px] mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
