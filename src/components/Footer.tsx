import type { SVGProps } from 'react';
import { Mail, MessageCircle, Radio } from 'lucide-react';
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

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 7.5c2.6-.8 5.4-.8 8 0" />
    <path d="M7.5 17c-1.5-.4-2.8-1.1-3.8-2.1.4-3.4 1.4-6 3-8 1.2-.5 2.3-.8 3.4-1l.6 1.1" />
    <path d="M16.5 17c1.5-.4 2.8-1.1 3.8-2.1-.4-3.4-1.4-6-3-8-1.2-.5-2.3-.8-3.4-1l-.6 1.1" />
    <path d="M8.5 17.2c2.2 1.1 4.8 1.1 7 0" />
    <path d="M9.5 12.5h.01" />
    <path d="M14.5 12.5h.01" />
  </svg>
);

const CONTACT_LINKS = [
  {
    label: 'Mail',
    href: 'mulearnsbc@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mulearnsbc',
    icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mulearn.sbc?igsh=MWQ1cGRsbmxpeHZ3',
    icon: InstagramIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q',
    icon: MessageCircle,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/mTuerRmEAr',
    icon: DiscordIcon,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-20 min-h-[520px] border-t border-white/[0.04] bg-[#060606] text-white overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-noise opacity-[0.018] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:88px_88px] pointer-events-none" />
      <div className="footer-orbit" aria-hidden="true">
        <span />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 pt-20 sm:pt-24 pb-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="flex flex-col sm:flex-row items-start gap-5 max-w-xl min-w-0">
          <a href="#" className="shrink-0 group" aria-label="MuLearn SBC home">
            <img
              src={logoImg}
              alt="MuLearn SBC Logo"
              className="h-14 sm:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <div>
            <span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-white/45">
              Contact Us
            </span>
            <h2 className="font-orbitron text-[24px] sm:text-[34px] leading-none font-bold tracking-wide mt-2">
              MuLearn SBC
            </h2>
            <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-white/55 mt-3 max-w-md">
              Connect with the community, follow updates, and reach the team for collaborations, events, and campus chapter conversations.
            </p>

            <div className="mt-6 grid gap-3 font-orbitron text-[10px] tracking-[0.16em] uppercase text-white/45">
              <div className="border-l border-white/18 pl-4">
                <span className="block text-white/72">Base Location</span>
                <span className="mt-2 block font-sans text-[13px] normal-case tracking-normal leading-relaxed text-white/55">
                  Sree Buddha College of Engineering<br />
                  Pattoor, Kerala
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm">
                <div className="border border-white/10 bg-white/[0.025] px-3 py-2">
                  <span className="block text-white/35">9&deg;12&apos;41&quot;N</span>
                </div>
                <div className="border border-white/10 bg-white/[0.025] px-3 py-2">
                  <span className="block text-white/35">76&deg;38&apos;29&quot;E</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/35">Status</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
                <span className="text-white/72">Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col gap-4 min-w-0">
          <div className="border border-white/10 bg-black/35 p-4 sm:p-5 rounded-sm w-full lg:min-w-[420px]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 font-orbitron text-[10px] tracking-[0.22em] uppercase text-white/60">
                <Radio className="w-3.5 h-3.5" />
                Community Signal
              </span>
              <span className="font-mono text-[10px] text-white/35">ONLINE</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {['Learn', 'Build', 'Lead'].map((item) => (
                <div key={item} className="border border-white/8 bg-white/[0.025] px-3 py-3">
                  <span className="block font-orbitron text-[10px] tracking-[0.18em] uppercase text-white/42">
                    {item}
                  </span>
                  <span className="mt-2 block h-[2px] bg-white/20">
                    <span className="block h-full w-2/3 bg-white/55" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-end items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
            {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="group relative h-11 px-4 rounded-sm border border-white/12 bg-white/[0.03] text-white/58 hover:text-black hover:border-white transition-all overflow-hidden flex items-center justify-center gap-2 font-orbitron text-[10px] tracking-[0.16em] uppercase min-w-0"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <Icon className="relative z-10 w-4 h-4 transition-colors duration-300" />
                <span className="relative z-10 transition-colors duration-300">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-orbitron text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/35 text-center sm:text-left">
          <span>@copyright MuLearn SBC 2026</span>
          <span>Made with love by Tech Team, MuLearn SBC</span>
        </div>
      </div>
    </footer>
  );
}
