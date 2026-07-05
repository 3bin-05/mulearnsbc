import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Upload, 
  Star, 
  RefreshCw, 
  Heart, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

// Import footer assets
import footerMuSketch from '../../assets/footer_mu_sketch.png';
import footerWordmarkSketch from '../../assets/footer_wordmark_sketch.png';
import footerAirplaneSketch from '../../assets/footer_airplane_sketch.png';
import footerNoteCard from '../../assets/footer_note_card.png';
import sbcLogo from '../../assets/sbc.png';

const valueBadges = [
  { icon: GraduationCap, label: 'LEARN BY DOING' },
  { icon: Users, label: 'MENTOR BY SHARING' },
  { icon: Upload, label: 'SHIP IN PUBLIC' },
  { icon: Star, label: 'EARN KARMA POINTS' },
  { icon: RefreshCw, label: 'AUTONOMOUS CIRCLES' },
  { icon: Heart, label: 'PEER LEARNING' },
  { icon: ShieldCheck, label: 'PROOF OF WORK' }
];

const resourcesLinks = [
  { name: 'µLearn Global', url: 'https://mulearn.org' },
  { name: 'Documentation', url: 'https://docs.mulearn.org' },
  { name: 'Discord Server', url: 'https://discord.gg/mTuerRmEAr' },
  { name: 'Brand Assets', url: 'https://mulearn.org/brand-assets' }
];

const contactLinks = [
  { name: 'SBCE Site', url: 'https://sbce.ac.in' },
  { name: 'mulearnsbc@gmail.com', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mulearnsbc@gmail.com' },
  { name: 'About Chapter', url: '#about' },
  { name: 'Join µLearn', url: '#circles' }
];

/**
 * Footer Layout Component (Phase 9).
 * Tone: Light (bg-white text-ink).
 * Redesigned to feature hand-drawn branding sketches, values badge horizontal ticker, link columns, and paperclip index card.
 */
export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-ink border-t border-hairline pt-28 pb-8 overflow-hidden select-none font-body">
      
      {/* 1. Large Branding Sketch Header (Light Background) */}
      <div className="max-w-[1180px] mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: µ Greek sketch */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <img 
              src={footerMuSketch} 
              alt="mu sketch" 
              className="h-28 object-contain select-none pointer-events-none" 
            />
          </div>

          {/* Center: MULEARN SBC wordmark sketch */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <img 
              src={footerWordmarkSketch} 
              alt="MULEARN SBC" 
              className="h-16 object-contain select-none pointer-events-none mb-3" 
            />
            <p className="text-[13px] sm:text-[14px] text-ink/65 tracking-tight font-body">
              Students learning together. Building together. Shipping together.
            </p>
          </div>

          {/* Right: Paper airplane sketch */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <img 
              src={footerAirplaneSketch} 
              alt="airplane sketch" 
              className="h-24 object-contain select-none pointer-events-none" 
            />
          </div>
        </div>
      </div>

      {/* 2. Core Values Horizontal Banner */}
      <div className="border-t border-b border-hairline/60 py-5 bg-white overflow-x-auto select-none">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between gap-6 min-w-max lg:min-w-0">
          {valueBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-purple shrink-0" />
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-ink">
                    {badge.label}
                  </span>
                </div>
                {idx < valueBadges.length - 1 && (
                  <div className="h-4 w-[1px] bg-hairline/60 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Footer Columns */}
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Chapter Logo & Info */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-5 select-none">
              <img 
                src={sbcLogo} 
                alt="µlearn" 
                className="h-6 sm:h-7 object-contain pointer-events-none" 
              />
              <div className="flex flex-col border-l border-hairline pl-3">
                <span className="font-display font-bold text-sm tracking-tight text-ink">SBC</span>
                <span className="font-mono text-[9px] font-bold tracking-widest text-purple">CAMPUS CHAPTER</span>
              </div>
            </div>
            
            <p className="text-xs text-ink/65 leading-relaxed font-body mb-6 max-w-[34ch]">
              Sree Buddha College of Engineering's official chapter of µLearn Foundation. Promoting decentralized peer-to-peer technical learning, side projects, and public proof-of-work.
            </p>

            {/* Social circle buttons */}
            <div className="flex items-center gap-3">
              {/* Discord */}
              <a 
                href="https://discord.gg/mTuerRmEAr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink/75 hover:bg-[#F3EEFF] hover:text-purple hover:border-purple/30 transition-all duration-300 bg-white shadow-sm"
                aria-label="Discord"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.59,75.59,0,0,0,72.9,0c.82.71,1.68,1.4,2.58,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.24,49.27,123,26.41,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/mulearn.sbc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink/75 hover:bg-[#F3EEFF] hover:text-purple hover:border-purple/30 transition-all duration-300 bg-white shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/mulearnsbc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink/75 hover:bg-[#F3EEFF] hover:text-purple hover:border-purple/30 transition-all duration-300 bg-white shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a 
                href="https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink/75 hover:bg-[#F3EEFF] hover:text-purple hover:border-purple/30 transition-all duration-300 bg-white shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.93a7.9 7.9 0 0 0 1.08 3.971L0 16l4.2-1.1a7.8 7.8 0 0 0 3.79 1.01h.007a7.86 7.86 0 0 0 7.86-7.858 7.8 7.8 0 0 0-2.256-5.627h-.002zm-5.607 11.3a6.6 6.6 0 0 1-3.378-.928l-.242-.143-2.5 1 .65-2.463-.159-.253a6.56 6.56 0 0 1-1.007-3.5C2.33 4.545 5.12 1.76 8.5 1.76 11.88 1.76 14.67 4.545 14.67 7.93a6.58 6.58 0 0 1-6.676 6.697M11.67 9.871c-.195-.1-.195-.1-.65-.325-.455-.225-.765-.375-.855-.425-.09-.05-.18-.1-.28-.05-.1.05-.2.15-.3.25-.1.1-.2.25-.3.35-.1.1-.2.15-.4.05-.2-.1-.85-.3-1.625-1-.6-.525-.975-1.15-1.125-1.35-.15-.2-.05-.3.05-.4.1-.1.2-.25.3-.35.1-.1.15-.2.2-.3.05-.1 0-.25-.05-.35-.05-.1-.425-1-.575-1.375-.15-.375-.3-.375-.425-.375-.125 0-.275 0-.425 0-.15 0-.4.05-.625.3-.225.25-.85.825-.85 2.025 0 1.2 1 2.375 1.125 2.55.125.175 1.825 2.825 4.475 3.825.625.25 1.125.4 1.5.525.625.175 1.175.15 1.625.075.5-.075 1.5-.625 1.725-1.2.225-.575.225-1.075.15-1.2-.075-.125-.225-.2-.425-.3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Resources Links */}
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-widest text-ink/40 mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-between text-xs text-ink/65 hover:text-purple transition-all duration-200 py-1 border-b border-dashed border-hairline/20"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={10} className="text-ink/40 group-hover:text-purple group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-widest text-ink/40 mb-5">
              CONTACT SBC
            </h4>
            <ul className="space-y-2">
              {contactLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url} 
                    {...(link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center justify-between text-xs text-ink/65 hover:text-purple transition-all duration-200 py-1 border-b border-dashed border-hairline/20"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={10} className="text-ink/40 group-hover:text-purple group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Paperclip card */}
          <div className="col-span-12 md:col-span-3 flex justify-center md:justify-end">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { rotate: 3, scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-[220px] sm:w-[240px] select-none cursor-default"
            >
              <img 
                src={footerNoteCard} 
                alt="quote card" 
                className="w-full h-auto object-contain pointer-events-none" 
              />
            </motion.div>
          </div>

        </div>

        {/* 4. Bottom copyright and credits */}
        <div className="border-t border-hairline pt-8 mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-body text-[10px] text-ink/40">
            © {currentYear} µLearn SBC Chapter. All rights reserved.
          </span>
          <span className="font-body text-[10px] text-ink/50 flex items-center justify-center gap-1.5">
            <Heart size={10} className="text-purple fill-purple shrink-0 animate-pulse" />
            <span>Made by Tech Team - Mulearn SBC.</span>
          </span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink/40">
            BUILT UNDER PRESSURE · SREE BUDDHA COLLEGE OF ENGINEERING
          </span>
        </div>
      </div>
    </footer>
  );
}
