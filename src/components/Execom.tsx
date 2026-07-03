import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, RefreshCw } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
}

const MEMBERS: Member[] = [
  {
    name: 'Nihal Harris',
    role: 'Campus Lead',
    roleCode: 'CMD-01',
    authLevel: 'L-05 (MAX)',
    sysRole: 'COMMANDER',
    dept: 'HEADQUARTERS',
    skills: [
      { label: 'LEADERSHIP', value: 95 },
      { label: 'STRATEGY', value: 92 },
      { label: 'COMMUNITY', value: 88 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Anagha Rajesh',
    role: 'Co-Lead',
    roleCode: 'CMD-02',
    authLevel: 'L-05 (MAX)',
    sysRole: 'COORD_UNIT',
    dept: 'HEADQUARTERS',
    skills: [
      { label: 'COORDINATION', value: 94 },
      { label: 'OPERATIONS', value: 90 },
      { label: 'MANAGEMENT', value: 89 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ebin Joseph',
    role: 'Technology Lead',
    roleCode: 'ENG-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'ARCHITECT',
    dept: 'TECH_SECTOR',
    skills: [
      { label: 'DEV_STACK', value: 96 },
      { label: 'SYSTEM_DESIGN', value: 92 },
      { label: 'ALGORITHMS', value: 90 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Devika S.',
    role: 'Creative Lead',
    roleCode: 'DSN-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'INTERFACE_DES',
    dept: 'CREATIVE_SECTOR',
    skills: [
      { label: 'UI_AESTHETICS', value: 97 },
      { label: 'BRANDING', value: 93 },
      { label: 'MOTION_DESIGN', value: 88 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Girish Kumar',
    role: 'Operations Lead',
    roleCode: 'OPS-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'OPERATOR',
    dept: 'OPS_SECTOR',
    skills: [
      { label: 'EXECUTION', value: 94 },
      { label: 'LOGISTICS', value: 91 },
      { label: 'STAKEHOLDERS', value: 87 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Anoop George',
    role: 'Marketing Lead',
    roleCode: 'MKT-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'NET_DISTRIBUTOR',
    dept: 'PR_SECTOR',
    skills: [
      { label: 'CAMPAIGNS', value: 92 },
      { label: 'OUTREACH', value: 90 },
      { label: 'ANALYTICS', value: 85 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Riya Kurian',
    role: 'Secretary',
    roleCode: 'SEC-01',
    authLevel: 'L-04 (HIGH)',
    sysRole: 'SYSTEM_LOG',
    dept: 'CORE_OFFICE',
    skills: [
      { label: 'DOCUMENTATION', value: 95 },
      { label: 'COMPLIANCE', value: 92 },
      { label: 'ARCHIVING', value: 88 },
    ],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

const SECTORS = [
  { id: 'ALL', label: 'ALL SECTORS', code: 'SEC_ALL' },
  { id: 'HEADQUARTERS', label: 'HQ COMMAND', code: 'SEC_HQ' },
  { id: 'TECH_SECTOR', label: 'TECH DEPT', code: 'SEC_ENG' },
  { id: 'CREATIVE_SECTOR', label: 'CREATIVE DEPT', code: 'SEC_DSN' },
  { id: 'OPERATIONS', label: 'STAFF / CORE', codes: ['OPS_SECTOR', 'PR_SECTOR', 'CORE_OFFICE'] },
];

function HolographicAvatar({ roleCode, isHovered }: { roleCode: string; isHovered: boolean }) {
  return (
    <div className="relative w-36 h-36 mx-auto flex items-center justify-center select-none">
      {/* Outer spinning dash ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border border-dashed border-white/20 rounded-full"
      />
      {/* Middle ring rotating back */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 border border-dotted border-white/30 rounded-full"
      />
      {/* Hologram glowing core */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.08, 1] : [0.96, 1.04, 0.96],
          opacity: isHovered ? 0.95 : 0.75,
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-6 bg-gradient-to-tr from-white/5 to-white/18 rounded-full flex flex-col items-center justify-center border border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
      >
        <span className="text-[12px] font-orbitron font-bold tracking-widest text-white/90">
          {roleCode}
        </span>
        <span className="text-[8px] font-sans font-light tracking-widest text-white/40 mt-1 uppercase">
          SYS_OK
        </span>
      </motion.div>

      {/* Futuristic Target Locks */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white/40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white/40" />
      
      {/* Horizontal grid bar overlay on hover */}
      {isHovered && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 50, opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute left-2 right-2 h-[1px] bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.5)] pointer-events-none"
        />
      )}
    </div>
  );
}

function TelemetryCard({ member }: { member: Member }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // 3D rotation angles based on cursor offset
  const rotateX = mousePos.y * -12;
  const rotateY = mousePos.x * 12;

  // Hover light overlay gradient position
  const glowStyle = {
    background: isHovered
      ? `radial-gradient(circle 240px at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255, 255, 255, 0.08), transparent)`
      : 'none',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="relative h-[480px] w-full bg-[#0d0d0d]/40 border border-white/8 rounded-lg overflow-hidden flex flex-col justify-between p-6 select-none cursor-pointer group hover:border-white/20 transition-colors"
    >
      {/* Laser Reflection Glow overlay */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={glowStyle} />

      {/* Decorative Grid and Tech markings */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />
      
      {/* Sci-fi corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />

      {/* Scanner grid line scanline effect */}
      <div className="absolute top-3 right-4 flex items-center gap-1.5 font-orbitron text-[9px] tracking-wider text-white/35">
        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
        <span>SYS_SECURE</span>
      </div>

      {/* Card Header: Authentication Level and Department */}
      <div className="flex justify-between items-start pt-2 border-b border-white/5 pb-3">
        <div className="flex flex-col">
          <span className="font-orbitron text-[9px] text-white/40 tracking-wider">CLEARANCE</span>
          <span className="font-orbitron text-[11px] font-semibold text-white/80 mt-0.5">{member.authLevel}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-orbitron text-[9px] text-white/40 tracking-wider">SECTOR_NODE</span>
          <span className="font-orbitron text-[11px] font-semibold text-white/80 mt-0.5">{member.dept}</span>
        </div>
      </div>

      {/* Body: Holographic Avatar */}
      <div className="my-auto py-4">
        <HolographicAvatar roleCode={member.roleCode} isHovered={isHovered} />
      </div>

      {/* Card Footer: Metadata and stats */}
      <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
        {/* Name and Role */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="font-orbitron font-bold text-[18px] tracking-wide text-white leading-tight">
              {member.name}
            </h3>
            <span className="font-sans text-[12px] font-light text-white/70 tracking-wide mt-0.5">
              {member.role}
            </span>
          </div>
          <div className="font-orbitron text-[9px] text-white/30 tracking-widest text-right">
            CODE: {member.sysRole}
          </div>
        </div>

        {/* Telemetry Stats / Skills */}
        <div className="flex flex-col gap-2.5">
          {member.skills.map((skill) => (
            <div key={skill.label} className="flex flex-col gap-1">
              <div className="flex justify-between text-[8px] font-orbitron tracking-widest text-white/45">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? `${skill.value}%` : '8%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full bg-white/40"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Social Terminal Links */}
        <div className="flex justify-end gap-3 mt-1 pt-1 border-t border-white/5">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
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
              <span className="text-white/80">07 // TOTAL</span>
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

        {/* Execom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4">
          {filteredMembers.map((member) => (
            <TelemetryCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
