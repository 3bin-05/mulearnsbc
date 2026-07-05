import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * BlurText - Staggered text reveal with blur and translate-y effect.
 * Renders words or letters that drift up and resolve from a blur state.
 *
 * @param {Object} props
 * @param {string} props.text - Text to animate.
 * @param {number} [props.delay=0] - Delay before start.
 * @param {string} [props.className=""] - Wrapper classes.
 * @param {'words' | 'letters'} [props.animateBy='words'] - Split strategy.
 */
export default function BlurText({
  text,
  delay = 0,
  className = '',
  animateBy = 'words'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const shouldReduceMotion = useReducedMotion();

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : (animateBy === 'words' ? 0.06 : 0.015),
        delayChildren: delay,
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? 'none' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          className="inline-block"
          style={{ whiteSpace: 'pre' }}
        >
          {el}{animateBy === 'words' && i < elements.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}
