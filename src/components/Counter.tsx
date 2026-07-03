import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.8,
      delay: delay + 0.3, // starts after layout fade-in
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col items-start md:items-end text-left md:text-right"
    >
      <span className="font-orbitron font-extrabold text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[64px] short:text-[40px] xshort:text-[32px] text-white leading-none tracking-tight">
        {displayValue}{suffix}
      </span>
      <span className="font-sans text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] short:text-[11px] xshort:text-[10px] uppercase tracking-statLabel font-normal text-white/82 mt-1 xl:mt-1.5">
        {label}
      </span>
    </motion.div>
  );
}

export default function Counter() {
  const stats = [
    { value: 20, suffix: '+', label: 'EVENTS CONDUCTED' },
    { value: 60, suffix: '+', label: 'STUDENTS ENGAGED' },
    { value: 100, suffix: 'K+', label: 'KARMA POINTS' },
  ];

  return (
    <div className="flex flex-col gap-4 short:gap-3 xshort:gap-2 md:gap-[20px] lg:gap-[22px]">
      {stats.map((stat, idx) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          delay={0.6 + idx * 0.12} // Staggered delay
        />
      ))}
    </div>
  );
}
