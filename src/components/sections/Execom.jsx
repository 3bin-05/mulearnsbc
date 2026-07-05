import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Section from '../layout/Section';

// Import assets
import chethas from '../../assets/chethas.png';
import aswath from '../../assets/aswath.png';
import arjun from '../../assets/arjun.png';
import aadil from '../../assets/aadil.png';
import maanas_member from '../../assets/maanas_member.png';
import devika from '../../assets/devika.png';
import abin from '../../assets/abin.png';
import diya from '../../assets/diya.png';

const members = [
  {
    id: 1,
    name: 'Chethas L Pramod',
    role: 'CAMPUS LEAD',
    photo: chethas,
    bio: 'Oversees overall chapter activities, drives community initiatives, and coordinates with the µLearn state core team.',
    contact: 'linkedin.com/in/chethaslpramod'
  },
  {
    id: 2,
    name: 'Aswath S A',
    role: 'CAMPUS CO-LEAD',
    photo: aswath,
    bio: 'Coordinates operational work, facilitates internal events, and manages cross-chapter collaborations.',
    contact: 'linkedin.com/in/aswath-sa'
  },
  {
    id: 3,
    name: 'Arjun TK',
    role: 'IG MANAGER',
    photo: arjun,
    bio: 'Manages various Chapter Interest Groups, facilitates workshops, and coordinates peer study groups.',
    contact: 'github.com/arjun-tk'
  },
  {
    id: 4,
    name: 'Aadil Mohamed A',
    role: 'OPERATION LEAD',
    photo: aadil,
    bio: 'Directs logistics, coordinates event check-ins, and manages calendar timelines for learning circles.',
    contact: 'github.com/aadilmohamed'
  },
  {
    id: 5,
    name: 'Maanas',
    role: 'CAMPUS LEAD',
    photo: maanas_member,
    bio: 'Coordinates chapter activities, supports learning circles, and leads local student chapters.',
    contact: 'github.com/maanas-dev'
  },
  {
    id: 6,
    name: 'Devika J',
    role: 'CO-LEAD',
    photo: devika,
    bio: 'Coordinates chapter operations, handles PR, and manages outward communications.',
    contact: 'linkedin.com/in/devika-j'
  },
  {
    id: 7,
    name: 'Abin S George',
    role: 'TECHNICAL LEAD',
    photo: abin,
    bio: 'Leads developer groups, schedules tech sprints, audits proof-of-work code, and maintains campus portal repositories.',
    contact: 'github.com/abinsgeorge'
  },
  {
    id: 8,
    name: 'Diya',
    role: 'DESIGN LEAD',
    photo: diya,
    bio: 'Directs the branding, designs presentation templates, and maintains UX consistency across all chapter assets.',
    contact: 'figma.com/@diya-design'
  }
];

/**
 * ExeCom Section Component (Phase 8).
 * Tone: Light (bg-white text-ink).
 * Redesigned to show circular profile photos connected with wavy horizontal paths.
 */
export default function Execom() {
  const [selectedMember, setSelectedMember] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key down
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

  return (
    <Section id="execom" tone="light">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-purple relative mb-4">
          WHO RUNS IT
          {/* Eyebrow underline */}
          <div className="absolute -bottom-1.5 left-0 w-6 h-[2px] bg-purple" />
        </span>
        
        <h2 className="font-display font-semibold text-[38px] sm:text-[46px] tracking-tight text-ink mt-4 mb-6 leading-[1.15]">
          <span className="relative inline-block">
            Executive Committee,
            {/* Scribble sparkle doodle above */}
            <svg className="absolute -top-6 -right-6 w-8 h-6 text-purple/80 pointer-events-none select-none animate-pulse" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 16 6 L 16 2" />
              <path d="M 12 9 L 8 7" />
              <path d="M 20 9 L 24 7" />
            </svg>
          </span><br />
          <span className="text-purple">driving</span>{' '}
          <span className="relative inline-block text-ink">
            everything.
            {/* Underline highlight */}
            <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-purple/35 pointer-events-none" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <path d="M 2 4 Q 50 2, 98 4" />
            </svg>
          </span>
        </h2>
        
        <p className="max-w-[46ch] text-[15px] sm:text-[16px] text-ink/70 leading-relaxed font-body">
          The core team facilitating peer learning circles, hackathons, and operations at Sree Buddha College of Engineering.
        </p>
      </motion.div>

      {/* Grid of Profile Cards connected with waves */}
      <div className="space-y-16 lg:space-y-24">
        
        {/* Row 1: Members 1-4 */}
        <div className="relative isolate">
          {/* Connecting Wavy Background Path (desktop only) */}
          <div className="absolute top-[44px] sm:top-12 left-[12.5%] right-[12.5%] h-12 -z-10 hidden lg:block select-none pointer-events-none">
            <svg className="w-full h-full text-[#E2D9FF]" viewBox="0 0 300 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
              <path d="M 0 20 C 35 32, 65 8, 100 20 C 135 32, 165 8, 200 20 C 235 32, 265 8, 300 20" />
            </svg>
          </div>

          {/* Sparkles / Accents for Row 1 */}
          {/* Accent Left */}
          <div className="absolute top-[20%] left-[-2%] text-purple/65 hidden lg:block select-none pointer-events-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 12 18 L 6 15" />
              <path d="M 12 18 L 18 15" />
            </svg>
          </div>
          {/* Accent Right */}
          <div className="absolute top-[10%] right-[-1%] text-purple/65 hidden lg:block select-none pointer-events-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 12 6 L 6 9" />
              <path d="M 12 6 L 18 9" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {members.slice(0, 4).map((member) => (
              <motion.div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.05 }}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Circular Profile Photo with white border and soft shadow */}
                <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full border-[5px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.06),_0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden mb-4 group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(124,58,237,0.12)] transition-all duration-300">
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                </div>
                
                {/* Details */}
                <h3 className="font-display font-semibold text-sm text-ink group-hover:text-purple transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Role Pill */}
                <div className="mt-2.5 bg-[#F3EEFF] text-[#7C3AED] px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase select-none">
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: Members 5-8 */}
        <div className="relative isolate">
          {/* Connecting Wavy Background Path (desktop only) */}
          <div className="absolute top-[44px] sm:top-12 left-[12.5%] right-[12.5%] h-12 -z-10 hidden lg:block select-none pointer-events-none">
            <svg className="w-full h-full text-[#E2D9FF]" viewBox="0 0 300 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
              <path d="M 0 20 C 35 8, 65 32, 100 20 C 135 8, 165 32, 200 20 C 235 8, 265 32, 300 20" />
            </svg>
          </div>

          {/* Sparkles / Accents for Row 2 */}
          {/* Accent Left (Sparkle) */}
          <div className="absolute top-[20%] left-[-3%] text-purple/65 hidden lg:block select-none pointer-events-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" />
            </svg>
          </div>
          {/* Accent Right (Sparkle) */}
          <div className="absolute top-[20%] right-[-3%] text-purple/65 hidden lg:block select-none pointer-events-none">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {members.slice(4, 8).map((member, idx) => (
              <motion.div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 4) * 0.05 }}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Circular Profile Photo with white border and soft shadow */}
                <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full border-[5px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.06),_0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden mb-4 group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(124,58,237,0.12)] transition-all duration-300">
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                </div>
                
                {/* Details */}
                <h3 className="font-display font-semibold text-sm text-ink group-hover:text-purple transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Role Pill */}
                <div className="mt-2.5 bg-[#F3EEFF] text-[#7C3AED] px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase select-none">
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Click-to-Open Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            
            {/* Backdrop blur backplate overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white w-full max-w-[420px] rounded-[20px] border border-hairline p-6 md:p-8 select-none z-10 shadow-none text-ink"
            >
              {/* Close button inside modal */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-ink/30 hover:text-ink hover:bg-off-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Modal Core Contents */}
              <div className="flex flex-col items-center text-center mt-2">
                {/* Circular Profile Photo in Modal */}
                <div className="h-20 w-20 rounded-full border border-hairline overflow-hidden mb-6 shadow-inner">
                  <img src={selectedMember.photo} alt={selectedMember.name} className="h-full w-full object-cover" />
                </div>

                {/* Name & Role */}
                <h3 className="font-display font-bold text-xl tracking-tight text-ink mb-1">
                  {selectedMember.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-purple">
                  {selectedMember.role}
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-hairline my-6" />

                {/* Bio text */}
                <p className="text-xs text-ink/70 leading-relaxed font-body mb-6 max-w-[34ch]">
                  {selectedMember.bio}
                </p>

                {/* Contact Handler Link */}
                <a
                  href={`https://${selectedMember.contact}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-ink/40 hover:text-purple bg-off-white border border-hairline px-4 py-2 rounded-full transition-colors"
                >
                  <span>{selectedMember.contact}</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
