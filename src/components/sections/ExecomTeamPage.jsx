import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// ─── Member Images (commented out — new card section coming) ───
/*
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
*/

// ─── Member Data (commented out — new card section coming) ───
/*
const membersData = [
  {
    name: 'Lekshmi Shan',
    role: 'Lead Enabler',
    photo: lekshmi_shan,
    bio: 'Guides and mentors the campus chapter, facilitating institutional support and ecosystem enablement.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lekshmi%20Shan',
    level: 1
  },
  {
    name: 'Aadit Ajay',
    role: 'Campus Lead',
    photo: aadit,
    bio: 'Leads the campus chapter, orchestrates activities, coordinates with state core teams, and drives overall vision.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Aadit%20Ajay',
    level: 2
  },
  {
    name: 'Malavika ps',
    role: 'Campus Co-Lead',
    photo: malavika,
    bio: 'Co-leads the chapter, supports strategic growth, and manages campus engagement programs.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Malavika%20ps',
    level: 2
  },
  {
    name: 'Diya Thresia Daniel',
    role: 'HR Manager',
    photo: diya,
    bio: 'Manages internal team dynamics, coordinates member onboarding, and handles talent management.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Diya%20Thresia%20Daniel',
    level: 2
  },
  {
    name: 'Abin S George',
    role: 'Operations Team Lead',
    photo: abin_s_george,
    bio: 'Oversees logistics, orchestrates event execution, and directs daily operational activities.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Abin%20S%20George',
    level: 2
  },
  {
    name: 'Vaishnav S',
    role: 'Creative Team - Lead',
    photo: vaishnav,
    bio: 'Directs visual storytelling, leads the creative team, and conceptualizes branding campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Vaishnav%20S',
    level: 2
  },
  {
    name: 'Karthik Renjith',
    role: 'Outreach Manager',
    photo: karthik,
    bio: 'Drives external outreach, builds community partnerships, and expands chapter visibility.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Karthik%20Renjith',
    level: 3
  },
  {
    name: 'Ebin Reji',
    role: 'Technical Advisor',
    photo: ebinreji,
    bio: 'Provides architectural guidance, reviews proof-of-work, and mentors student developers.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ebin%20Reji',
    level: 3
  },
  {
    name: 'Aadil D A',
    role: 'Technical Advisor',
    photo: aadil,
    bio: 'Mentors development sprints, audits codebases, and provides tech advisory support.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Aadil%20D%20A',
    level: 3
  },
  {
    name: 'Ajin B David',
    role: 'IG Lead - Game Dev',
    photo: ajin,
    bio: 'Nurtures the game development community and coordinates hands-on game design bootcamps.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ajin%20B%20David',
    level: 4
  },
  {
    name: 'Maanas T Manoj',
    role: 'IG Lead - Cyber Security',
    photo: maanas,
    bio: 'Leads the cybersecurity interest group, organizing CTF workshops and security sprints.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Maanas%20T%20Manoj',
    level: 4
  },
  {
    name: 'ABIN PHILIP ANIL',
    role: 'IG Lead - AI',
    photo: abin_philip_anil,
    bio: 'Fosters learning circles in artificial intelligence and machine learning pipelines.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=ABIN%20PHILIP%20ANIL',
    level: 4
  },
  {
    name: 'Ananthu Mohan',
    role: 'IG Lead - Gen AI',
    photo: ananthu,
    bio: 'Coordinates learning activities around generative AI models, LLMs, and prompt engineering.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ananthu%20Mohan',
    level: 4
  },
  {
    name: 'Krishna S Kumar',
    role: 'IG Lead - App Dev',
    photo: krishna,
    bio: 'Runs application development workshops, mentoring students in mobile build sprints.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Krishna%20S%20Kumar',
    level: 4
  },
  {
    name: 'Devika J',
    role: 'IG Lead - Web Dev',
    photo: devika,
    bio: 'Guides web development tracks, teaching frontend frameworks and responsive design.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Devika%20J',
    level: 4
  },
  {
    name: 'Devanarayanan A',
    role: 'Creative Team',
    photo: devanarayanan,
    bio: 'Designs marketing collaterals and crafts visual assets for digital community campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Devanarayanan%20A',
    level: 5
  },
  {
    name: 'Arjun R Kurup',
    role: 'Creative Team',
    photo: arjun_r_kurup,
    bio: 'Produces creative illustrations and builds design layouts for campus initiatives.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Arjun%20R%20Kurup',
    level: 5
  },
  {
    name: 'Navaneeth R Nair',
    role: 'Creative Team',
    photo: navaneeth,
    bio: 'Supports the creative direction, drafting copy and designing engaging campaigns.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Navaneeth%20R%20Nair',
    level: 5
  },
  {
    name: 'Beema Amal',
    role: 'Design Team',
    photo: beema,
    bio: 'Creates visual graphics, posters, and user interface designs for chapter projects.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Beema%20Amal',
    level: 5
  },
  {
    name: 'John C Deepak',
    role: 'Design Team',
    photo: john,
    bio: 'Contributes to graphic designing, layout design, and presentation templates.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=John%20C%20Deepak',
    level: 5
  },
  {
    name: 'Mohammed Adhil',
    role: 'Social Media Manager',
    photo: mohammed_adhil,
    bio: 'Manages social media channels, curates engagement posts, and tracks analytics.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Mohammed%20Adhil',
    level: 5
  },
  {
    name: 'Adhithyan S Pillai',
    role: 'Operations Team',
    photo: adhithyan,
    bio: 'Coordinates logistics, schedules learning spaces, and supports event operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Adhithyan%20S%20Pillai',
    level: 6
  },
  {
    name: 'Faizan A',
    role: 'Operations Team',
    photo: faizan,
    bio: 'Assists with event coordination, logistics check-ins, and community operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Faizan%20A',
    level: 6
  },
  {
    name: 'Akshaj A',
    role: 'Operations Team',
    photo: akshaj,
    bio: 'Provides logistics support, registration management, and event check-in operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Akshaj%20A',
    level: 6
  },
  {
    name: 'Arjun Santhosh nair',
    role: 'Operations Team',
    photo: arjun_nair,
    bio: 'Handles operations, schedules coordination, and maintains venue setups.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Arjun%20Santhosh%20nair',
    level: 6
  },
  {
    name: 'S.P Devanand',
    role: 'Muv Team - Director',
    photo: sp_devanand,
    bio: 'Directs media production, curates video concepts, and manages media operations.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=S.P%20Devanand',
    level: 6
  },
  {
    name: 'Nidhi M P',
    role: 'Muv Team - Editor',
    photo: nidhi,
    bio: 'Edits video content, designs media reels, and produces chapter promotional videos.',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Nidhi%20M%20P',
    level: 6
  }
];
*/

export default function ExecomTeamPage() {
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTransition = (duration, delay = 0) => {
    if (shouldReduceMotion) {
      return { duration: 0, delay: 0 };
    }
    return { duration, delay, ease: [0.16, 1, 0.3, 1] };
  };

  const getInitialY = (yVal) => {
    return shouldReduceMotion ? 0 : yVal;
  };

  // ─── renderRows (commented out — new card section coming) ───
  /*
  const renderRows = [
    {
      id: 'level-1',
      title: 'Enabler',
      members: membersData.filter(m => m.level === 1),
      wavyType: 'top'
    },
    {
      id: 'level-2',
      title: 'Campus Leadership',
      members: membersData.filter(m => m.level === 2),
      wavyType: 'bottom'
    },
    {
      id: 'level-3',
      title: 'Outreach & Advisors',
      members: membersData.filter(m => m.level === 3),
      wavyType: 'top'
    },
    {
      id: 'level-4',
      title: 'Interest Group (IG) Leads',
      members: membersData.filter(m => m.level === 4),
      wavyType: 'bottom'
    },
    {
      id: 'level-5',
      title: 'Creative, Design & Media Managers',
      members: membersData.filter(m => m.level === 5),
      wavyType: 'top'
    },
    {
      id: 'level-6',
      title: 'Operations & Media Executives',
      members: membersData.filter(m => m.level === 6),
      wavyType: 'bottom'
    }
  ];
  */

  return (
    <div className="min-h-screen bg-white text-ink font-body flex flex-col selection:bg-purple selection:text-white pt-24 overflow-x-hidden">
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
          className="mb-20 relative"
        >
          <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-purple relative mb-4">
            OUR LEADERSHIP
            <div className="w-10 h-[2px] bg-purple mt-2 mb-6" />
          </span>
          <h1 className="font-display font-semibold text-[38px] sm:text-[50px] leading-[1.1] tracking-tight text-ink mt-2 mb-6 max-w-[20ch]">
            Executive Committee, <br />
            <span className="text-purple">driving</span> everything.
          </h1>
          <p className="max-w-[50ch] text-[15px] sm:text-[16px] text-ink/70 leading-relaxed font-body">
            The core team facilitating peer learning circles, hackathons, and operations at Sree Buddha College of Engineering.
          </p>
        </motion.div>

        {/* ── NEW CARDS SECTION GOES HERE ── */}

      </main>

      <Footer />
    </div>
  );
}
