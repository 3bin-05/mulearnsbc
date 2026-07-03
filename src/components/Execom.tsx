import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, RefreshCw } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Member {
  name: string;
  role: string;
  roleCode: string;
  authLevel: string;
  sysRole: string;
  dept: string;
  skills: { label: string; value: number }[];
  github?: string;
  linkedin?: string;
  quote: string;
  image: string;
}

const MEMBERS: Member[] = [
  {
    name: 'Aadit Ajay',
    role: 'Campus Lead',
    roleCode: 'CMD-01',
    authLevel: 'L-05 (MAX)',
    sysRole: 'COMMANDER',
    dept: 'CORE_TEAM',
    skills: [{ label: 'LEADERSHIP', value: 96 }, { label: 'STRATEGY', value: 93 }, { label: 'COMMUNITY', value: 90 }],
    quote: 'LEADING THE CAMPUS COMMUNITY WITH VISION AND EXECUTING HIGH-IMPACT PROGRAMS.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Malavika ps',
    role: 'Campus Co-Lead',
    roleCode: 'CMD-02',
    authLevel: 'L-05 (MAX)',
    sysRole: 'COORD_UNIT',
    dept: 'CORE_TEAM',
    skills: [{ label: 'LEADERSHIP', value: 92 }, { label: 'MANAGEMENT', value: 90 }, { label: 'OPERATIONS', value: 88 }],
    quote: 'COORDINATING LEADERSHIP ENERGIES TO BUILD A STRENGTHENED CAMPUS COMMUNITY.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Diya Thresia Daniel',
    role: 'HR Manager',
    roleCode: 'SEC-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'HUMAN_RESOURCES',
    dept: 'CORE_TEAM',
    skills: [{ label: 'PEOPLE', value: 94 }, { label: 'COMPLIANCE', value: 90 }, { label: 'SYSTEMS', value: 85 }],
    quote: 'MANAGING TALENT ACQUISITION AND COMPLIANCE INTEGRATION ACROSS ALL DEPARTMENTS.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ebin Reji',
    role: 'Technical Advisor',
    roleCode: 'ENG-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'TECH_ADVISOR',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'ARCHITECTURE', value: 95 }, { label: 'CONSULTING', value: 92 }, { label: 'DEV_STACK', value: 90 }],
    quote: 'GUIDING THE FUTURE ARCHITECTURE OF DIGITAL ASSETS AND SCALING SYSTEM WORKFLOWS.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Aadil D A',
    role: 'Technical Advisor',
    roleCode: 'ENG-02',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'TECH_ADVISOR',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'ENGINEERING', value: 93 }, { label: 'SYSTEMS', value: 91 }, { label: 'STRATEGY', value: 88 }],
    quote: 'PROVIDING DEEP STRATEGIC INSIGHTS AND SUPPORTING FULL-STACK ENGINEERING PIPELINES.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Abin S George',
    role: 'Operations Team Lead',
    roleCode: 'OPS-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'OPERATIONS_LEAD',
    dept: 'OPERATIONS',
    skills: [{ label: 'LOGISTICS', value: 94 }, { label: 'EXECUTION', value: 92 }, { label: 'PEER_ENGAGEMENT', value: 89 }],
    quote: 'STREAMLINING EVENT LOGISTICS AND ENSURING SEAMLESS OPERATIONAL INTEGRITY.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Vaishnav S',
    role: 'Creative Team Lead',
    roleCode: 'DSN-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'CREATIVE_LEAD',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'VISUALS', value: 96 }, { label: 'BRANDING', value: 93 }, { label: 'AESTHETICS', value: 91 }],
    quote: 'TRANSLATING VISUAL IDEAS INTO PREMIUM DIGITAL EXPERIENCES AND BRAND INTERFACES.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'S.P Devanand',
    role: 'Muv Team - Director',
    roleCode: 'MUV-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'MUV_DIRECTOR',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'DIRECTION', value: 95 }, { label: 'STORYTELLING', value: 93 }, { label: 'MEDIA', value: 90 }],
    quote: 'STORYTELLING AND DIRECTING CINEMATIC MEDIA NARRATIVES FOR MAXIMUM IMPACT.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ajin B David',
    role: 'IG Lead - Game Dev',
    roleCode: 'IG-01',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_GAME_DEV',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'GAME_DEV', value: 94 }, { label: 'INTERACTION', value: 91 }, { label: 'GRAPHICS', value: 87 }],
    quote: 'FOSTERING INTERACTION DESIGN AND GAMIFICATION MECHANICS IN THE CAMPUS COMMUNITY.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Maanas T Manoj',
    role: 'IG Lead - Cyber Security',
    roleCode: 'IG-02',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_SEC',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'SECURITY', value: 95 }, { label: 'NETWORKING', value: 90 }, { label: 'LINUX', value: 88 }],
    quote: 'SECURING SYSTEMS AND PROMOTING PENETRATION TESTING BEST PRACTICES.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'ABIN PHILIP ANIL',
    role: 'IG Lead - AI',
    roleCode: 'IG-03',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_AI',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'AI_MODELS', value: 96 }, { label: 'PYTHON', value: 93 }, { label: 'MATH', value: 89 }],
    quote: 'EXPLORING NEURAL NETWORKS, MACHINE LEARNING, AND PREDICTIVE DATA MODELING.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ananthu Mohan',
    role: 'IG Lead - Gen AI',
    roleCode: 'IG-04',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_GEN_AI',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'LLMS', value: 94 }, { label: 'PROMPTING', value: 92 }, { label: 'AUTOMATION', value: 87 }],
    quote: 'EXPERIMENTING WITH LARGE LANGUAGE MODELS AND GENERATIVE AI APPLICATIONS.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Krishna S Kumar',
    role: 'IG Lead - App Dev',
    roleCode: 'IG-05',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_APP_DEV',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'FLUTTER', value: 93 }, { label: 'REACT_NATIVE', value: 91 }, { label: 'MOBILE_UI', value: 86 }],
    quote: 'DESIGNING NATIVE MOBILE APPLICATIONS WITH SEAMLESS CROSS-PLATFORM COMPATIBILITY.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Devika J',
    role: 'IG Lead - Web Dev',
    roleCode: 'IG-06',
    authLevel: 'L-03 (MID)',
    sysRole: 'IG_WEB_DEV',
    dept: 'TECH_SECTOR',
    skills: [{ label: 'REACT', value: 95 }, { label: 'TYPESCRIPT', value: 92 }, { label: 'CSS_LAYOUT', value: 90 }],
    quote: 'BUILDING HIGH-PERFORMANCE WEB APPLICATIONS AND USER INTERFACES FOR ALL DEPLOYMENTS.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Karthik Renjith',
    role: 'Marketing Team - Outreach Manager',
    roleCode: 'MKT-01',
    authLevel: 'L-03 (MID)',
    sysRole: 'OUTREACH_MGR',
    dept: 'OPERATIONS',
    skills: [{ label: 'OUTREACH', value: 93 }, { label: 'COMMUNICATION', value: 91 }, { label: 'PUBLIC_RELATIONS', value: 88 }],
    quote: 'EXPANDING CONNECTIVITY AND DRIVING ENGAGEMENT WITH GLOBAL STAKEHOLDERS.',
    image: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Mohammed Adhil',
    role: 'Marketing Team - Social Media Manager',
    roleCode: 'MKT-02',
    authLevel: 'L-03 (MID)',
    sysRole: 'PR_MGR',
    dept: 'OPERATIONS',
    skills: [{ label: 'SOCIAL_MEDIA', value: 94 }, { label: 'COPYWRITING', value: 90 }, { label: 'CONTENT', value: 87 }],
    quote: 'SHAPING THE BRAND PRESENCE AND BUILDING VIRAL SOCIAL MEDIA CAMPAIGNS.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Devanarayanan A',
    role: 'Creative Team',
    roleCode: 'DSN-02',
    authLevel: 'L-02 (LOW)',
    sysRole: 'CREATIVE_STAFF',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'GRAPHICS', value: 90 }, { label: 'PHOTOSHOP', value: 88 }, { label: 'ILLUSTRATOR', value: 85 }],
    quote: 'ILLUSTRATING DIGITAL ARTWORK AND CONTRIBUTING VISUAL GRAPHICS TO CAMPAIGNS.',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Arjun R Kurup',
    role: 'Creative Team',
    roleCode: 'DSN-03',
    authLevel: 'L-02 (LOW)',
    sysRole: 'CREATIVE_STAFF',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'DESIGN_ASSETS', value: 91 }, { label: 'UI_DESIGN', value: 89 }, { label: 'COLLABORATION', value: 84 }],
    quote: 'DEVELOPING HIGH-END DESIGN ASSETS AND USER INTERFACES.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Navaneeth R Nair',
    role: 'Creative Team',
    roleCode: 'DSN-04',
    authLevel: 'L-02 (LOW)',
    sysRole: 'CREATIVE_STAFF',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'ANIMATION', value: 92 }, { label: 'MOTION', value: 89 }, { label: 'EFFECTS', value: 85 }],
    quote: 'CREATING ANIMATIONS AND DIGITAL EFFECTS FOR MARKETING CONTENT.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Beema Amal',
    role: 'Design Team',
    roleCode: 'DSN-05',
    authLevel: 'L-02 (LOW)',
    sysRole: 'DESIGNER',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'BRANDING', value: 91 }, { label: 'STYLING', value: 88 }, { label: 'TYPOGRAPHY', value: 86 }],
    quote: 'SHAPING BRAND DESIGN PRINCIPLES AND STYLES FOR THE SBC COMMUNITY.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John C Deepak',
    role: 'Design Team',
    roleCode: 'DSN-06',
    authLevel: 'L-02 (LOW)',
    sysRole: 'DESIGNER',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'VISUAL_STRATEGY', value: 90 }, { label: 'LAYOUT', value: 89 }, { label: 'ASSETS', value: 85 }],
    quote: 'DEFINING THE VISUAL DESIGN STRATEGY AND LAYOUT ARCHITECTURE FOR GRAPHICS.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Nidhi M P',
    role: 'Muv Team - Editor',
    roleCode: 'MUV-02',
    authLevel: 'L-02 (LOW)',
    sysRole: 'MUV_EDITOR',
    dept: 'CREATIVE_SECTOR',
    skills: [{ label: 'VIDEO_EDITING', value: 93 }, { label: 'PRODUCTION', value: 90 }, { label: 'SOUND', value: 86 }],
    quote: 'EDITING HIGH-IMPACT VIDEO CONTENT AND OVERSEEING MEDIA PRODUCTION FILES.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Adhithyan S Pillai',
    role: 'Operations Team',
    roleCode: 'OPS-02',
    authLevel: 'L-02 (LOW)',
    sysRole: 'OPERATIONS_STAFF',
    dept: 'OPERATIONS',
    skills: [{ label: 'REGISTRATIONS', value: 91 }, { label: 'ON_SITE', value: 89 }, { label: 'COORDINATION', value: 86 }],
    quote: 'SUPPORTING REGISTRATIONS AND COORDINATING ON-SITE EVENT FLOWS.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Faizan A',
    role: 'Operations Team',
    roleCode: 'OPS-03',
    authLevel: 'L-02 (LOW)',
    sysRole: 'OPERATIONS_STAFF',
    dept: 'OPERATIONS',
    skills: [{ label: 'LOGISTICS', value: 92 }, { label: 'ALLOCATION', value: 89 }, { label: 'SUPPORT', value: 87 }],
    quote: 'ENSURING RESOURCE ALLOCATION AND ASSISTING IN BOOTCAMP LOGISTICS.',
    image: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Akshaj A',
    role: 'Operations Team',
    roleCode: 'OPS-04',
    authLevel: 'L-02 (LOW)',
    sysRole: 'OPERATIONS_STAFF',
    dept: 'OPERATIONS',
    skills: [{ label: 'MEETUPS', value: 91 }, { label: 'ATTENDANCE', value: 88 }, { label: 'COORDINATION', value: 87 }],
    quote: 'FACILITATING ON-CAMPUS MEETUPS AND TRACKING CORE MEMBERS ATTENDANCE.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Arjun Santhosh nair',
    role: 'Operations Team',
    roleCode: 'OPS-05',
    authLevel: 'L-02 (LOW)',
    sysRole: 'OPERATIONS_STAFF',
    dept: 'OPERATIONS',
    skills: [{ label: 'VOLUNTEER', value: 90 }, { label: 'PROVISIONING', value: 88 }, { label: 'LOGISTICS', value: 87 }],
    quote: 'COORDINATING VOLUNTEER WORKFLOWS AND RESOURCE PROVISIONING FOR LABS.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400&h=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

const SECTORS = [
  { id: 'ALL', label: 'ALL SECTORS', code: 'SEC_ALL' },
  { id: 'CORE_TEAM', label: 'CORE TEAM', code: 'SEC_CORE' },
  { id: 'TECH_SECTOR', label: 'TECH DEPT', code: 'SEC_ENG' },
  { id: 'CREATIVE_SECTOR', label: 'CREATIVE DEPT', code: 'SEC_DSN' },
  { id: 'OPERATIONS', label: 'STAFF / CORE', codes: ['OPS_SECTOR', 'PR_SECTOR', 'CORE_OFFICE'] },
];

function ExecomRow({ member }: { member: Member }) {
  return (
    <div className="group relative w-full border-b border-white/10 flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] hover:bg-[#a8551a] hover:text-[#0c0c0c] hover:px-[4vw] md:hover:px-[12vw] px-0 text-white select-none">
      {/* Left Column: Portrait Photo */}
      <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 overflow-hidden bg-white/5 border border-white/10 group-hover:border-black/25 transition-colors duration-500">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
        />
        {/* Sci-Fi scanner line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-full h-1/2 animate-scan" />
      </div>

      {/* Right Column: Quote & Info Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Large Testimonial Quote */}
        <blockquote className="font-orbitron font-semibold text-[20px] sm:text-[24px] md:text-[28px] leading-tight tracking-wide uppercase">
          "{member.quote}"
        </blockquote>

        {/* Divider Line inside card */}
        <div className="w-full h-[1px] bg-white/15 group-hover:bg-black/15 transition-colors duration-500 my-6" />

        {/* Credentials & Details */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-orbitron">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[18px] sm:text-[20px] tracking-wide">
              {member.name}
            </span>
            <span className="text-[12px] opacity-70 tracking-widest font-sans font-light uppercase">
              {member.role} — {member.dept}
            </span>
          </div>

          {/* Social Icons & Code Node */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] opacity-45 font-mono tracking-widest uppercase">
              NODE: {member.roleCode} // {member.authLevel}
            </span>
            <div className="flex items-center gap-3">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white group-hover:text-black/50 group-hover:hover:text-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white group-hover:text-black/50 group-hover:hover:text-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ExecomProps {
  onClose: () => void;
}

export default function Execom({ onClose }: ExecomProps) {
  const [selectedSector, setSelectedSector] = useState('ALL');
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // Wheel event wrapper to slide Execom down back to Hero if scrolled up at the very top
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0 && e.deltaY < -20) {
      onClose();
    }
  };

  // Touch handlers to support sliding down on mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0) {
      const touchY = e.touches[0].clientY;
      const diff = touchY - touchStartY.current;
      // Swipe down gesture
      if (diff > 80) {
        onClose();
      }
    }
  };

  // Filter logic
  const filteredMembers = MEMBERS.filter((member) => {
    if (selectedSector === 'ALL') return true;
    const sectorConfig = SECTORS.find((s) => s.id === selectedSector);
    if (!sectorConfig) return true;
    
    if ('codes' in sectorConfig && sectorConfig.codes) {
      return sectorConfig.codes.includes(member.dept);
    }
    return member.dept === selectedSector;
  });

  return (
    <motion.section
      id="execom"
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      initial={{ y: '120%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '120%', opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#060606] text-white z-40 overflow-y-auto tech-scrollbar select-none"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />
      
      {/* Top indicator: Pull down to exit */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={onClose}>
        <span className="font-orbitron text-[9px] tracking-[0.2em] uppercase text-white/60">RETURN_HOME</span>
        <div className="w-6 h-[2px] bg-white/40 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 pb-24 flex flex-col gap-12">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mt-8">
          <div>
            <div className="flex items-baseline gap-4">
              <h1 className="font-orbitron font-extrabold text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px] tracking-tight leading-none text-white/95">
                EXECOM
              </h1>
              <span className="font-orbitron font-normal text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white/40 tracking-wider">
                2026
              </span>
            </div>
            <p className="font-sans font-light text-[12px] sm:text-[14px] lg:text-[16px] text-white/60 tracking-wider uppercase mt-4 max-w-[400px]">
              Meet the people building <br />
              <span className="font-medium text-white/90">MuLearn SBC.</span>
            </p>
          </div>

          {/* Telemetry Info Terminal */}
          <div className="border border-white/10 rounded-md p-4 bg-black/40 backdrop-blur-md font-mono text-[9px] sm:text-[10px] text-white/50 w-full lg:w-[380px] flex flex-col gap-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center text-white/80 border-b border-white/5 pb-1">
              <span className="flex items-center gap-1.5"><TerminalIcon className="w-3 h-3 text-white/60" /> DATABASE_STATUS</span>
              <span className="text-white/40 font-mono text-[8px]">v2.6.sbc</span>
            </div>
            <div className="flex justify-between">
              <span>SECURE_CONNECTION:</span>
              <span className="text-white/80 font-bold">ESTABLISHED</span>
            </div>
            <div className="flex justify-between">
              <span>DB_REF:</span>
              <span className="text-white/80">SBC_MEMBERS_09</span>
            </div>
            <div className="flex justify-between">
              <span>ACTIVE_RECORDS:</span>
              <span className="text-white/80">{String(filteredMembers.length).padStart(2, '0')} // TOTAL</span>
            </div>
            <div className="flex justify-between items-center border-t border-white/5 pt-1 mt-1 text-white/30">
              <span>DECRYPTING DATA MATRIX...</span>
              <RefreshCw className="w-2.5 h-2.5 animate-spin" />
            </div>
          </div>
        </div>

        {/* Sector Navigation Filters */}
        <div className="flex flex-wrap gap-2.5 border-y border-white/5 py-4">
          {SECTORS.map((sector) => {
            const isSelected = selectedSector === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`flex items-center gap-2 px-4 py-2 border font-orbitron text-[11px] tracking-wider transition-all duration-300 rounded-sm select-none ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] font-semibold'
                    : 'bg-transparent text-white/55 border-white/10 hover:border-white/30 hover:text-white/90'
                }`}
              >
                <span>{sector.label}</span>
                <span className={`text-[8px] opacity-40 font-mono ${isSelected ? 'text-black/60' : 'text-white/40'}`}>
                  // {'code' in sector ? sector.code : 'SEC_STAFF'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Execom Rows List */}
        <div className="flex flex-col border-t border-white/10 mt-4">
          {filteredMembers.map((member) => (
            <ExecomRow key={member.name} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
