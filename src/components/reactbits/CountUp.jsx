import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * ReactBits CountUp component.
 * Animates a number from a starting value to a target value when scrolled into view.
 * 
 * @param {Object} props
 * @param {number} props.to - The target number to count up to.
 * @param {number} [props.from=0] - The starting number.
 * @param {number} [props.duration=1.4] - Duration of the animation in seconds.
 * @param {number} [props.delay=0] - Delay before the animation starts in seconds.
 * @param {string} [props.suffix=""] - A text suffix to append (e.g. "+", "K+").
 * @param {string} [props.className=""] - CSS classes for the text container.
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  delay = 0,
  suffix = '',
  className = ''
}) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '0px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    // Check for prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(to);
      return;
    }

    // Run animation with custom easeOutExpo curve (standard Apple transition)
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setCount(Math.round(value));
      }
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={nodeRef} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
