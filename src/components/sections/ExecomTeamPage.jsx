import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover
} from '@/components/ui/animated-slideshow';
import { Zap, Shield } from 'lucide-react';
import { useExecom } from '../../hooks/useExecom';

// Member Images
import lekshmi_shan from '../../assets/Execom/lekshmi shan.webp';
import diya from '../../assets/Execom/diya.webp';
import karthik from '../../assets/Execom/Karthikayan pulipra Renjith.webp';
import abin_s_george from '../../assets/Execom/Abin S George.webp';
import vaishnav from '../../assets/Execom/vaishnav.webp';
import ebinreji from '../../assets/Execom/ebinreji.webp';
import ajin from '../../assets/Execom/ajin.webp';
import maanas from '../../assets/Execom/maanas.webp';
import abin_philip_anil from '../../assets/Execom/ABIN PHILIP ANIL.webp';
import aadil from '../../assets/Execom/Aadil D A.webp';
import ananthu from '../../assets/Execom/ananthu.webp';
import devanarayanan from '../../assets/Execom/devanarayana.webp';
import adhithyan from '../../assets/Execom/adhithyan.webp';
import malavika from '../../assets/Execom/malavika.webp';
import krishna from '../../assets/Execom/Krishna S Kumar.webp';
import devika from '../../assets/Execom/Devika J.webp';
import faizan from '../../assets/Execom/Faizan A.webp';
import mohammed_adhil from '../../assets/Execom/Adhil Mohammed.webp';
import beema from '../../assets/Execom/Beema Amal.webp';
import nidhi from '../../assets/Execom/Nidhi MP.webp';
import arjun_r_kurup from '../../assets/Execom/Arjun R Kurup.webp';
import sp_devanand from '../../assets/Execom/Devanand Sp.webp';
import navaneeth from '../../assets/Execom/Navaneeth R.webp';
import john from '../../assets/Execom/John.webp';
import akshaj from '../../assets/Execom/AKSHAJ.webp';
import arjun_nair from '../../assets/Execom/Arjun Nair.webp';
import aadit from '../../assets/Execom/aadit.webp';
import execom_sketch_mu from '../../assets/execom_sketch_mu.png';

const membersData = [
  {
    name: 'Lekshmi Shan',
    role: 'Lead Enabler',
    photo: lekshmi_shan,
    bio: 'Guides and mentors the campus chapter, facilitating institutional support and ecosystem enablement.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lekshmi%20Shan',
    category: 'leadership'
  },
  {
    name: 'Aadit Ajay',
    role: 'Campus Lead',
    photo: aadit,
    bio: 'Leads the campus chapter, orchestrates activities, coordinates with state core teams, and drives overall vision.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Aadit%20Ajay',
    category: 'leadership'
  },
  {
    name: 'Malavika ps',
    role: 'Campus Co-Lead',
    photo: malavika,
    bio: 'Co-leads the chapter, supports strategic growth, and manages campus engagement programs.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Malavika%20ps',
    category: 'leadership'
  },
  {
    name: 'Diya Thresia Daniel',
    role: 'HR Manager',
    photo: diya,
    bio: 'Manages internal team dynamics, coordinates member onboarding, and handles talent management.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Diya%20Thresia%20Daniel',
    category: 'leadership'
  },
  {
    name: 'Abin S George',
    role: 'Operations Team Lead',
    photo: abin_s_george,
    bio: 'Oversees logistics, orchestrates event execution, and directs daily operational activities.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Abin%20S%20George',
    category: 'leadership'
  },
  {
    name: 'Vaishnav S',
    role: 'Creative Team - Lead',
    photo: vaishnav,
    bio: 'Directs visual storytelling, leads the creative team, and conceptualizes branding campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Vaishnav%20S',
    category: 'leadership'
  },
  {
    name: 'Karthik Renjith',
    role: 'Outreach Manager',
    photo: karthik,
    bio: 'Drives external outreach, builds community partnerships, and expands chapter visibility.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Karthik%20Renjith',
    category: 'leadership'
  },
  {
    name: 'Ebin Reji',
    role: 'Technical Advisor',
    photo: ebinreji,
    bio: 'Provides architectural guidance, reviews proof-of-work, and mentors student developers.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ebin%20Reji',
    category: 'leadership'
  },
  {
    name: 'Aadil D A',
    role: 'Technical Advisor',
    photo: aadil,
    bio: 'Mentors development sprints, audits codebases, and provides tech advisory support.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Aadil%20D%20A',
    category: 'leadership'
  },
  {
    name: 'Ajin B David',
    role: 'IG Lead - Game Dev',
    photo: ajin,
    bio: 'Nurtures the game development community and coordinates hands-on game design bootcamps.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ajin%20B%20David',
    category: 'interests'
  },
  {
    name: 'Maanas T Manoj',
    role: 'IG Lead - Cyber Security',
    photo: maanas,
    bio: 'Leads the cybersecurity interest group, organizing CTF workshops and security sprints.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Maanas%20T%20Manoj',
    category: 'interests'
  },
  {
    name: 'ABIN PHILIP ANIL',
    role: 'IG Lead - AI',
    photo: abin_philip_anil,
    bio: 'Fosters learning circles in artificial intelligence and machine learning pipelines.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=ABIN%20PHILIP%20ANIL',
    category: 'interests'
  },
  {
    name: 'Ananthu Mohan',
    role: 'IG Lead - Gen AI',
    photo: ananthu,
    bio: 'Coordinates learning activities around generative AI models, LLMs, and prompt engineering.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ananthu%20Mohan',
    category: 'interests'
  },
  {
    name: 'Krishna S Kumar',
    role: 'IG Lead - App Dev',
    photo: krishna,
    bio: 'Runs application development workshops, mentoring students in mobile build sprints.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Krishna%20S%20Kumar',
    category: 'interests'
  },
  {
    name: 'Devika J',
    role: 'IG Lead - Web Dev',
    photo: devika,
    bio: 'Guides web development tracks, teaching frontend frameworks and responsive design.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Devika%20J',
    category: 'interests'
  },
  {
    name: 'Devanarayanan A',
    role: 'Creative Team',
    photo: devanarayanan,
    bio: 'Designs marketing collaterals and crafts visual assets for digital community campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Devanarayanan%20A',
    category: 'creative'
  },
  {
    name: 'Arjun R Kurup',
    role: 'Creative Team',
    photo: arjun_r_kurup,
    bio: 'Produces creative illustrations and builds design layouts for campus initiatives.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Arjun%20R%20Kurup',
    category: 'creative'
  },
  {
    name: 'Navaneeth R Nair',
    role: 'Creative Team',
    photo: navaneeth,
    bio: 'Supports the creative direction, drafting copy and designing engaging campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Navaneeth%20R%20Nair',
    category: 'creative'
  },
  {
    name: 'Beema Amal',
    role: 'Design Team',
    photo: beema,
    bio: 'Creates visual graphics, posters, and user interface designs for chapter projects.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Beema%20Amal',
    category: 'creative'
  },
  {
    name: 'John C Deepak',
    role: 'Design Team',
    photo: john,
    bio: 'Contributes to graphic designing, layout design, and presentation templates.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=John%20C%20Deepak',
    category: 'creative'
  },
  {
    name: 'Mohammed Adhil',
    role: 'Social Media Manager',
    photo: mohammed_adhil,
    bio: 'Manages social media channels, curates engagement posts, and tracks analytics.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Mohammed%20Adhil',
    category: 'creative'
  },
  {
    name: 'Adhithyan S Pillai',
    role: 'Operations Team',
    photo: adhithyan,
    bio: 'Coordinates logistics, schedules learning spaces, and supports event operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Adhithyan%20S%20Pillai',
    category: 'operations'
  },
  {
    name: 'Faizan A',
    role: 'Operations Team',
    photo: faizan,
    bio: 'Assists with event coordination, logistics check-ins, and community operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Faizan%20A',
    category: 'operations'
  },
  {
    name: 'Akshaj A',
    role: 'Operations Team',
    photo: akshaj,
    bio: 'Provides logistics support, registration management, and event check-in operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Akshaj%20A',
    category: 'operations'
  },
  {
    name: 'Arjun Santhosh nair',
    role: 'Operations Team',
    photo: arjun_nair,
    bio: 'Handles operations, schedules coordination, and maintains venue setups.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Arjun%20Santhosh%20nair',
    category: 'operations'
  },
  {
    name: 'S.P Devanand',
    role: 'Muv Team - Director',
    photo: sp_devanand,
    bio: 'Directs media production, curates video concepts, and manages media operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=S.P%20Devanand',
    category: 'operations'
  },
  {
    name: 'Nidhi M P',
    role: 'Muv Team - Editor',
    photo: nidhi,
    bio: 'Edits video content, designs media reels, and produces chapter promotional videos.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Nidhi%20M%20P',
    category: 'operations'
  }
];

const CATEGORIES = [
  { id: 'leadership', label: 'Core Leadership' },
  { id: 'interests', label: 'IG Leads' },
  { id: 'creative', label: 'Creative & Design' },
  { id: 'operations', label: 'Operations & Media' }
];

export default function ExecomTeamPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('leadership');
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { members: dbMembers, loading: dbLoading, error: dbError } = useExecom();

  // Helper to map DB member to UI member structure
  const mappedMembers = useMemo(() => {
    if (dbLoading || !dbMembers || dbMembers.length === 0) {
      // Fallback to static data during loading or if database is empty/errors
      return membersData;
    }
    return dbMembers.map(member => {
      // Map positions to category if not already specified
      let category = member.category;
      if (!category) {
        const pos = (member.position || '').toLowerCase().trim();
        if (
          pos === 'lead' ||
          pos === 'co lead' ||
          pos === 'enabler lead' ||
          pos === 'hr' ||
          pos === 'mentor' ||
          pos === 'tech associate' ||
          pos === 'operations lead' ||
          pos === 'creative lead'
        ) {
          category = 'leadership';
        } else if (pos === 'ig lead') {
          category = 'interests';
        } else if (
          pos === 'creative team' ||
          pos === 'marketing lead' ||
          pos === 'marketing team'
        ) {
          category = 'creative';
        } else if (
          pos === 'operations team' ||
          pos === 'media lead' ||
          pos === 'media team' ||
          pos === 'muv lead' ||
          pos === 'muv team'
        ) {
          category = 'operations';
        } else {
          category = 'leadership';
        }
      }
      return {
        id: member.id,
        name: member.name,
        role: member.roleTitle || member.position,
        photo: member.imageUrl,
        bio: member.bio || '',
        linkedin: member.socials?.linkedin || '',
        github: member.socials?.github || '',
        instagram: member.socials?.instagram || '',
        category: category
      };
    });
  }, [dbMembers, dbLoading]);

  // Filter members based on selected category
  const filteredMembers = useMemo(() => {
    return mappedMembers.filter(member => member.category === activeCategory);
  }, [mappedMembers, activeCategory]);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  const getInitialY = (yVal) => {
    return shouldReduceMotion ? 0 : yVal;
  };

  const currentMember = filteredMembers[activeIndex] || filteredMembers[0] || {};

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#3d3929] font-body flex flex-col pt-24 overflow-x-hidden">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-[1180px] mx-auto px-6 w-full py-16">

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={getTransition(0.5)}
          className="mb-12"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-purple hover:text-purple-dark font-semibold transition-colors active:scale-95 duration-200"
          >
            <span>← Back to Chapter Portal</span>
          </a>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: getInitialY(24) }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.7, 0.1)}
          className="mb-16 relative"
        >
          <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-purple relative mb-4">
            OUR LEADERSHIP
            <div className="w-10 h-[2px] bg-purple mt-2 mb-6" />
          </span>
          <h1 className="font-display font-semibold text-[38px] sm:text-[50px] leading-[1.1] tracking-tight text-[#1a1811] mt-2 mb-6 max-w-[20ch]">
            Executive Committee, <br />
            <span className="text-purple font-cursive rotate-[-1deg] inline-block text-[44px] sm:text-[56px]">driving</span> everything.
          </h1>
          <p className="max-w-[50ch] text-[15px] sm:text-[16px] text-[#3d3929]/75 leading-relaxed font-body">
            The core team facilitating peer learning circles, hackathons, and operations at Sree Buddha College of Engineering.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[#3d3929]/10 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-purple text-white shadow-md'
                  : 'bg-[#3d3929]/5 text-[#3d3929] hover:bg-[#3d3929]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Animated Slideshow Container */}
        <HoverSlider key={activeCategory} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[480px]">
            
            {/* Left side: Members list */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.name}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  {/* Indicator Dot */}
                  <div className="w-2 h-2 flex items-center justify-center shrink-0">
                    {activeIndex === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-2 h-2 rounded-full bg-purple"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                  <TextStaggerHover
                    index={index}
                    className={`text-xl sm:text-2xl font-bold uppercase tracking-tight py-2 border-b border-dashed transition-all duration-300 w-full ${
                      activeIndex === index
                        ? 'text-purple border-purple/30'
                        : 'text-[#3d3929]/60 border-[#3d3929]/10'
                    }`}
                    text={member.name}
                  />
                </div>
              ))}
            </div>

            {/* Right side: Member Detail Showcase card */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start w-full relative">
              
              <div className="bg-[#0d0c13] rounded-[24px] border border-[#231b3c] shadow-[0_20px_50px_rgba(0,0,0,0.35)] w-full max-w-[360px] aspect-[2/3] flex flex-col relative overflow-hidden">
                
                {/* Wrapped Image and Background Sketch Overlay */}
                <div className="relative w-full h-[65%] overflow-hidden bg-[#0d0c13] z-10">
                  
                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm border border-purple/15 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <span className="text-purple font-sans text-xl font-bold leading-none select-none">μ</span>
                    <div className="flex flex-col text-left leading-none">
                      <span className="text-[7px] font-sans font-bold tracking-widest text-[#3d3929]/50 uppercase">
                        {currentMember.category === 'leadership' ? 'LEADERSHIP' : currentMember.category === 'interests' ? 'IG LEADS' : currentMember.category === 'creative' ? 'CREATIVE TEAM' : 'OPERATIONS'}
                      </span>
                      <span className="text-[9px] font-bold tracking-wider text-purple uppercase mt-0.5">
                        {currentMember.role}
                      </span>
                    </div>
                  </div>

                  <HoverSliderImageWrap className="w-full h-full relative z-0">
                    {filteredMembers.map((member, index) => (
                      <HoverSliderImage
                        key={member.name}
                        index={index}
                        imageUrl={member.photo}
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                        loading="eager"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-[#151221] text-purple/40">
                              <svg class="w-16 h-16 stroke-current" viewBox="0 0 100 100" fill="none" stroke-width="2.5" stroke-linecap="round">
                                <path d="M 50 42 A 15 15 0 1 0 50 12 A 15 15 0 1 0 50 42" />
                                <path d="M 22 80 C 22 62, 35 55, 50 55 C 65 55, 78 62, 78 80" />
                              </svg>
                            </div>
                          `;
                        }}
                      />
                    ))}
                  </HoverSliderImageWrap>

                  {/* Gradient Overlay to blend white background photo into black container bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-gradient-to-t from-[#0d0c13] to-transparent z-10 pointer-events-none" />
                </div>

                {/* Animated Bio Details Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMember.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-between px-6 pb-6 pt-3 z-20 text-left"
                  >
                    <div>
                      {/* Name */}
                      <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                        {currentMember.name}
                      </h3>

                      {/* Short Purple Accent Bar */}
                      <div className="w-8 h-[3px] bg-purple rounded-full my-2.5" />

                      {/* Role Title */}
                      <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-purple uppercase">
                        {currentMember.role}
                      </span>

                      {/* Bio */}
                      {currentMember.bio && (
                        <p className="text-xs text-white/60 leading-relaxed font-body mt-2 max-w-[40ch] line-clamp-2">
                          {currentMember.bio}
                        </p>
                      )}
                    </div>

                    <div>
                      {/* Thin Separator Line */}
                      <div className="h-px w-full border-t border-white/10 my-4" />

                      {/* Socials Row */}
                      <div className="flex flex-wrap gap-3">
                        {currentMember.linkedin && (
                          <a
                            href={currentMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center border border-[#2a1b4e] hover:border-purple/50 bg-[#161224]/30 hover:bg-[#1c162f] transition-all cursor-pointer text-white"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}

                        {currentMember.github && (
                          <a
                            href={currentMember.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center border border-[#2a1b4e] hover:border-purple/50 bg-[#161224]/30 hover:bg-[#1c162f] transition-all cursor-pointer text-white"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}

                        {currentMember.instagram && (
                          <a
                            href={currentMember.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center border border-[#2a1b4e] hover:border-purple/50 bg-[#161224]/30 hover:bg-[#1c162f] transition-all cursor-pointer text-white"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </HoverSlider>

      </main>

      <Footer />
    </div>
  );
}
