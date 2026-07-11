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

  // Filter members based on selected category
  const filteredMembers = useMemo(() => {
    return membersData.filter(member => member.category === activeCategory);
  }, [activeCategory]);

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-[480px]">
            
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
              


              <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-purple/10 w-full max-w-[460px] flex flex-col gap-6 relative overflow-hidden">
                
                {/* Wrapped Image and Background Sketch Overlay */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f7f4ff] border border-purple/10 shadow-sm z-10">
                  


                  {/* Top Right Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm border border-purple/15 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
                    <img src={execom_sketch_mu} className="w-6 h-6 object-contain mix-blend-multiply" alt="Mu badge" />
                    <div className="flex flex-col text-left leading-none">
                      <span className="text-[7px] font-mono font-bold tracking-widest text-[#3d3929]/50 uppercase">
                        {currentMember.category === 'leadership' ? 'LEADERSHIP' : currentMember.category === 'interests' ? 'INTEREST LEAD' : currentMember.category === 'creative' ? 'CREATIVE TEAM' : 'OPERATIONS'}
                      </span>
                      <span className="text-[9px] font-bold tracking-wider text-purple uppercase mt-0.5">
                        {currentMember.role}
                      </span>
                    </div>
                  </div>

                  <HoverSliderImageWrap className="w-full h-full relative z-10 mix-blend-multiply">
                    {filteredMembers.map((member, index) => (
                      <HoverSliderImage
                        key={member.name}
                        index={index}
                        imageUrl={member.photo}
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-purple-tint/30 text-purple/40">
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
                </div>

                {/* Animated Bio Details Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMember.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3 min-h-[140px] z-10"
                  >
                    <div className="flex flex-col items-start">
                      <h3 className="font-display font-semibold text-2xl text-[#1a1811]">
                        {currentMember.name}
                      </h3>
                      {/* Purple gradient underline */}
                      <div className="w-12 h-1 bg-gradient-to-r from-purple to-purple-dark rounded-full mt-2" />
                    </div>
                    
                    <p className="text-sm text-[#3d3929]/75 leading-relaxed font-body mt-2">
                      {currentMember.bio}
                    </p>

                    {/* Clean dashed line separator */}
                    <div className="h-px w-full border-t border-dashed border-purple/20 my-6" />

                    {currentMember.linkedin && (
                      <div className="w-full">
                        <motion.a
                          href={currentMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full py-3.5 rounded-2xl border border-purple/25 text-purple font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 bg-white shadow-sm overflow-hidden"
                          whileHover="hover"
                          initial="initial"
                        >
                          {/* Hover slide background overlay (animates left to right) */}
                          <motion.div
                            className="absolute inset-0 bg-purple/10"
                            variants={{
                              initial: { x: "-100%" },
                              hover: { x: "0%" }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                          <svg className="w-4 h-4 fill-current shrink-0 z-10" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span className="z-10">Connect on LinkedIn</span>
                          <span className="ml-1 z-10">→</span>
                        </motion.a>
                      </div>
                    )}
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
