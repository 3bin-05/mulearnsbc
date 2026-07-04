import type { SVGProps } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import logoImg from '../assets/SBC-logo.svg';

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const CONTACT_LINKS = [
  {
    label: 'Mail',
    href: 'mailto:mulearnsbc@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mulearn-sbc',
    icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mulearn_sbc/',
    icon: InstagramIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/',
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/35 backdrop-blur-md">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-3 group" aria-label="MuLearn SBC home">
          <img
            src={logoImg}
            alt="MuLearn SBC Logo"
            className="h-8 sm:h-9 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-orbitron text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-white/55 group-hover:text-white/80 transition-colors">
            MuLearn SBC
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm border border-white/12 bg-white/[0.03] text-white/55 hover:text-white hover:border-white/35 hover:bg-white/[0.08] transition-all flex items-center justify-center"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
