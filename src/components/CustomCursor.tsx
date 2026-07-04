import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 520, damping: 42, mass: 0.35 });
  const smoothY = useSpring(cursorY, { stiffness: 520, damping: 42, mass: 0.35 });

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updatePointerMode = () => setIsFinePointer(finePointerQuery.matches);

    updatePointerMode();
    finePointerQuery.addEventListener('change', updatePointerMode);

    return () => finePointerQuery.removeEventListener('change', updatePointerMode);
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 9);
      cursorY.set(event.clientY - 9);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest('a, button, [role="button"], input, textarea, select')));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.55 : 1,
      }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
    >
      <span />
    </motion.div>
  );
}
