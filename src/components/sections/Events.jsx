import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Code,
  Zap,
  Users,
  Sparkles,
  Star,
  Heart,
  ChevronRight,
  Loader2,
  AlertCircle,
  CalendarOff,
} from 'lucide-react';
import Section from '../layout/Section';
import { useEvents } from '../../hooks/useEvents';

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */

/** Map a category string → Lucide icon element */
const getCategoryIcon = (category) => {
  switch (category) {
    case 'code':      return <Code      className="w-4 h-4" />;
    case 'zap':       return <Zap       className="w-4 h-4" />;
    case 'users':     return <Users     className="w-4 h-4" />;
    case 'calendar':  return <Calendar  className="w-4 h-4" />;
    case 'sparkles':  return <Sparkles  className="w-4 h-4" />;
    default:          return <Code      className="w-4 h-4" />;
  }
};

/**
 * Format an ISO date string (YYYY-MM-DD or YYYY-MM-DDTHH:mm…)
 * for display inside cards. Only shows the date part, not the time.
 */
function formatDateDisplay(dateStr) {
  if (!dateStr) return '—';
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    // Extract only the date part (before any 'T') to avoid invalid date from double T
    const datePart = dateStr.split('T')[0]; // "2026-07-09"
    const d = new Date(datePart + 'T00:00:00');
    if (isNaN(d.getTime())) return dateStr; // fallback
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).toUpperCase();
  }
  return dateStr; // already a human string
}

/**
 * Returns true when registration has closed (registrationCloseDate is in the past).
 * If no registrationCloseDate is set, registration is considered open.
 */
function isRegistrationClosed(event) {
  const raw = event.registrationCloseDate;
  if (!raw) return false;
  const normalized = raw.length === 16 ? raw + ':00' : raw;
  const closeDate = new Date(normalized);
  if (isNaN(closeDate.getTime())) return false;
  return closeDate < new Date();
}

/** Build a date range label like "08 MAY – 22 MAY 2025" */
function buildDateRange(event) {
  if (event.startDate && event.endDate) {
    return `${formatDateDisplay(event.startDate)} – ${formatDateDisplay(event.endDate)}`;
  }
  if (event.startDate) return formatDateDisplay(event.startDate);
  if (event.date)      return event.date; // legacy field
  return '—';
}

/* ─────────────────────────────────────────────────────────────
   Shared Loading / Empty / Error states
───────────────────────────────────────────────────────────── */

function LoadingState() {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-purple/60">
      <Loader2 className="w-5 h-5 animate-spin" />
      <span className="font-mono text-xs uppercase tracking-widest">Loading events…</span>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="flex items-center gap-3 py-12 text-red-400/80 bg-red-50 rounded-xl px-6">
      <AlertCircle className="w-5 h-5 shrink-0" />
      <span className="font-mono text-xs">Failed to load events: {message}</span>
    </div>
  );
}

function EmptyState({ label }) {
  return (
    <div className="col-span-3 flex flex-col items-center justify-center py-14 gap-3 text-ink/30">
      <CalendarOff className="w-8 h-8" />
      <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Events Section
───────────────────────────────────────────────────────────── */

export default function Events() {
  const shouldReduceMotion = useReducedMotion();
  const { running, comingSoon, past, loading, error } = useEvents();

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) return { duration: 0, delay: 0 };
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  return (
    <Section id="events" tone="off-white" className="relative">

      {/* ── Section Header ── */}
      <div className="relative mb-16 md:mb-20 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-[620px]">
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple">
            WHAT'S COMING UP?
          </span>
          <div className="w-8 h-[2px] bg-purple mt-2 mb-6" />
          <h2 className="font-display font-semibold text-[38px] sm:text-[48px] tracking-tight text-ink mb-4 leading-tight">
            Events &amp; <span className="font-cursive text-purple text-[46px] sm:text-[56px] leading-none inline-block rotate-[-2deg] ml-1">Hackathons</span>
          </h2>
          <p className="max-w-[46ch] text-[14px] sm:text-[15px] text-ink/65 leading-relaxed font-body">
            We believe in proof-of-work. Here is what we are preparing for the upcoming semester chapter calendar.
          </p>
        </div>

        {/* Paper-plane flight path deco */}
        <div className="relative w-full max-w-[280px] h-[90px] hidden md:block pointer-events-none select-none mb-2 mr-4">
          <svg viewBox="0 0 280 90" className="w-full h-full text-purple/35 fill-none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M 10 65 Q 60 45 100 65 T 160 35 Q 185 10 210 35 T 255 25" strokeDasharray="5 5" />
            <g transform="translate(180, 50)">
              <path d="M 0 -6 Q 0 0 6 0 Q 0 0 0 6 Q 0 0 -6 0 Q 0 0 0 -6 Z" fill="currentColor" className="text-purple/50" />
            </g>
            <g transform="translate(250, 20) rotate(-10)">
              <svg width="32" height="32" viewBox="0 0 24 24" className="w-8 h-8 text-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </g>
          </svg>
        </div>
      </div>

      {error && <ErrorState message={error} />}

      {/* ══════════════════════════════════════════════════════
          1. RUNNING EVENTS
      ══════════════════════════════════════════════════════ */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8 z-10 relative">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple" />
            </span>
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple">
              RUNNING EVENTS
            </h3>
          </div>
          <a href="#events" className="font-mono text-[10px] sm:text-xs font-semibold text-purple/80 hover:text-purple transition-colors flex items-center gap-1 group">
            <span>View all running events</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {loading ? (
          <LoadingState />
        ) : running.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EmptyState label="No running events right now" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {running.map((event, index) => (
              <RunningEventCard
                key={event.id}
                event={event}
                index={index}
                getTransition={getTransition}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════
          2. COMING SOON (sticky notes)
      ══════════════════════════════════════════════════════ */}
      <div className="mb-16">
        <div className="flex items-center justify-between mt-20 mb-8 z-10 relative">
          <div className="flex items-center gap-2 text-purple">
            <Calendar className="w-4 h-4" />
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple">
              COMING SOON
            </h3>
          </div>
          <a href="#events" className="font-mono text-[10px] sm:text-xs font-semibold text-purple/80 hover:text-purple transition-colors flex items-center gap-1 group">
            <span>View all upcoming events</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {loading ? (
          <LoadingState />
        ) : comingSoon.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EmptyState label="No upcoming events scheduled yet" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {comingSoon.map((event, index) => (
              <UpcomingStickyNote
                key={event.id}
                event={event}
                index={index}
                getTransition={getTransition}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════
          3. PAST EVENTS
      ══════════════════════════════════════════════════════ */}
      <div className="mb-12">
        <div className="flex items-center justify-between mt-20 mb-8 z-10 relative">
          <div className="flex items-center gap-2 text-purple">
            <Clock className="w-4 h-4" />
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple">
              PAST EVENTS
            </h3>
          </div>
          <a href="#events" className="font-mono text-[10px] sm:text-xs font-semibold text-purple/80 hover:text-purple transition-colors flex items-center gap-1 group">
            <span>View all past events</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {loading ? (
          <LoadingState />
        ) : past.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EmptyState label="No past events recorded yet" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {past.map((event, index) => (
              <PastEventCard
                key={event.id}
                event={event}
                index={index}
                getTransition={getTransition}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        )}
      </div>

    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Running Event Card
───────────────────────────────────────────────────────────── */

function RunningEventCard({ event, index, getTransition, shouldReduceMotion }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const dateLabel = buildDateRange(event);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      transition={getTransition(0.7, index * 0.1)}
      className="w-full animate-none"
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { y: 0, borderColor: 'rgba(233,233,236,0.1)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
          hover:   { y: -6, borderColor: 'rgba(124,58,237,0.45)', boxShadow: '0 20px 35px rgba(124,58,237,0.12)' },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl bg-zinc-950 border aspect-[1.35/1] flex flex-col justify-end p-6 cursor-pointer select-none group transition-all duration-300"
      >
        {/* Background Image — reads cardImage directly from Firestore */}
        <img
          src={event.cardImage || event.wideImage || event.imageUrl || event.image}
          alt={event.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105 brightness-[0.6] group-hover:brightness-[0.35]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-[1]" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            {getCategoryIcon(event.category)}
          </div>
          <span className="bg-purple text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full text-white">
            RUNNING
          </span>
        </div>

        {/* Text Content */}
        <motion.div
          variants={{ initial: { y: 20 }, hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 flex flex-col gap-2 w-full"
        >
          <h4 className="font-display font-semibold text-lg text-white leading-tight">{event.title}</h4>
          <p className="text-[12px] text-white/70 leading-relaxed font-body line-clamp-2">{event.description}</p>

          {/* Date / Time / Location */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-1 text-[9px] text-white/55 font-mono">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-300" />
              <span>{dateLabel}</span>
            </div>
            {(event.time || event.startDate) && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-300" />
                <span>{event.time || (event.startDate?.includes('T') ? event.startDate.split('T')[1] : '')}</span>
              </div>
            )}
            {(event.venue || event.location || event.mode) && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span>{event.venue || event.location || event.mode}</span>
              </div>
            )}
          </div>

          {/* Register button (expands on hover) */}
          <motion.div
            variants={{ initial: { opacity: 0, height: 0, marginTop: 0 }, hover: { opacity: 1, height: 'auto', marginTop: 12 } }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {isRegistrationClosed(event) ? (
              /* Faded disabled state when registration deadline has passed */
              <span
                className="w-full inline-flex items-center justify-center gap-1.5 bg-purple text-white font-body text-xs font-semibold py-2.5 rounded-lg opacity-40 grayscale cursor-not-allowed select-none pointer-events-none transition-all duration-500"
                aria-disabled="true"
              >
                <span>Registration Closed</span>
              </span>
            ) : (
              <a
                href={event.registrationLink || event.registerUrl || event.registrationUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-purple hover:bg-[#A78BFA] text-white font-body text-xs font-semibold py-2.5 rounded-lg transition-colors duration-200"
              >
                <span>Register Now</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Coming-Soon Sticky Note
───────────────────────────────────────────────────────────── */

function UpcomingStickyNote({ event, index, getTransition, shouldReduceMotion }) {
  const refSticky = useRef(null);
  const inViewSticky = useInView(refSticky, { once: true });

  return (
    <motion.div
      ref={refSticky}
      animate={inViewSticky
        ? { opacity: 1, rotate: event.cardRotate ?? 0, scale: 1 }
        : { opacity: 0, rotate: event.cardRotate ?? 0, scale: 1 }
      }
      whileHover={{ rotate: 0, scale: 1.04, y: -4, boxShadow: '0 20px 30px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative group min-h-[330px] select-none pt-4 cursor-default"
    >
      {/* Tape */}
      <div
        style={{ backgroundColor: event.tapeColor, transform: `rotate(${event.tapeRotate ?? 0}deg)` }}
        className="absolute top-0 left-[calc(50%-45px)] w-[90px] h-6 border-l border-r border-dashed border-black/10 shadow-sm z-20 opacity-90"
      />

      {/* Card body */}
      <div
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%)',
          backgroundColor: event.color,
        }}
        className="relative text-ink p-6 md:p-8 h-full min-h-[310px] flex flex-col justify-between rounded-[2px] shadow-[2px_12px_24px_rgba(0,0,0,0.05)] border border-black/5"
      >
        {/* Curled fold corner */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-[4px] shadow-[-1px_-1px_3px_rgba(0,0,0,0.08)] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.15) 100%)',
            backgroundColor: event.accentColor,
          }}
        />

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="h-8 w-8 rounded-full border border-ink/15 flex items-center justify-center font-display font-medium text-xs select-none">
            {event.num}
          </div>
          <div className="flex flex-col items-end">
            <span className="font-mono text-[8px] uppercase tracking-wider text-ink/40 block leading-none">STATUS:</span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink/75 block leading-none mt-1 border-b border-ink/30 pb-0.5 font-cursive">
              COMING SOON
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="my-auto flex flex-col items-start w-full">
          <div className="mb-3 text-ink/70 group-hover:scale-105 transition-transform duration-300">
            {getCategoryIcon(event.category || 'code')}
          </div>
          <h4 className="font-display text-xl sm:text-2xl font-bold text-ink mb-2 leading-tight">{event.title}</h4>
          <p className="font-body text-[13px] sm:text-[14px] text-ink/70 leading-relaxed line-clamp-4">
            {event.shortDescription || event.description || 'Details coming soon…'}
          </p>
          {event.startDate && (
            <div className="mt-3 flex items-center gap-1.5 text-ink/50 text-[10px] font-mono">
              <Calendar className="w-3 h-3" />
              <span>{formatDateDisplay(event.startDate)}</span>
            </div>
          )}
        </div>

        {/* Footer / speaker */}
        <div className="border-t border-dashed border-ink/15 pt-3.5 mt-5 flex items-center justify-between">
          <span className="font-mono text-[8.5px] text-ink/50 uppercase tracking-[0.05em] font-semibold truncate max-w-[80%]">
            {event.speaker
              ? `SPEAKER: ${event.speaker}`
              : (event.venue || event.location)
              ? `📍 ${event.venue || event.location}`
              : 'SBC EVENT'}
          </span>
          <div className="text-purple/60 shrink-0">
            {event.icon === 'star'     && <Star  size={18} className="fill-purple/10" />}
            {event.icon === 'heart'    && <Heart size={18} className="fill-purple/10" />}
            {event.icon === 'scribble' && (
              <svg className="w-5 h-5 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M 4 15 C 8 10, 16 18, 20 12" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Past Event Card
───────────────────────────────────────────────────────────── */

function PastEventCard({ event, index, getTransition, shouldReduceMotion }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const dateLabel = buildDateRange(event);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      transition={getTransition(0.7, index * 0.1)}
      className="w-full animate-none"
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { y: 0, borderColor: 'rgba(233,233,236,0.1)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
          hover:   { y: -6, borderColor: 'rgba(124,58,237,0.35)', boxShadow: '0 20px 35px rgba(0,0,0,0.15)' },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl bg-zinc-950 border aspect-[1.35/1] flex flex-col justify-end p-6 cursor-pointer select-none group transition-all duration-300"
      >
        {/* Background Image — reads cardImage directly from Firestore */}
        <img
          src={event.cardImage || event.wideImage || event.imageUrl || event.image}
          alt={event.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105 brightness-[0.45] group-hover:brightness-[0.25] grayscale-[20%] group-hover:grayscale-0"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-[1]" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            {getCategoryIcon(event.category)}
          </div>
          <span className="bg-[#2E204E] text-[#C084FC] border border-[#C084FC]/30 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
            COMPLETED
          </span>
        </div>

        {/* Text Content */}
        <motion.div
          variants={{ initial: { y: 20 }, hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 flex flex-col gap-2 w-full"
        >
          <h4 className="font-display font-semibold text-lg text-white leading-tight">{event.title}</h4>
          <p className="text-[12px] text-white/70 leading-relaxed font-body line-clamp-2">{event.description}</p>

          {/* Date / Time / Location */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-1 text-[9px] text-white/55 font-mono">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-300" />
              <span>{dateLabel}</span>
            </div>
            {(event.time || event.startDate) && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-300" />
                <span>{event.time || (event.startDate?.includes('T') ? event.startDate.split('T')[1] : '')}</span>
              </div>
            )}
            {(event.venue || event.location || event.mode) && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span>{event.venue || event.location || event.mode}</span>
              </div>
            )}
          </div>

          {/* View details button (expands on hover) */}
          <motion.div
            variants={{ initial: { opacity: 0, height: 0, marginTop: 0 }, hover: { opacity: 1, height: 'auto', marginTop: 12 } }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <a
              href={event.registrationLink || event.detailsUrl || event.registerUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-body text-xs font-semibold py-2.5 rounded-lg transition-colors duration-200 border border-zinc-700/50"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
