import { Link } from 'react-router-dom';

// The ClaimForge mark: an emblem combining legal scales and a precision crest.
export function Mark({ className = 'h-8 w-8', light = false }) {
  return (
    <span
      className={`${className} relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-110 ${
        light
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 ring-1 ring-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.3)]'
          : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white ring-1 ring-indigo-500/25 shadow-sm'
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" fill="none" className="h-[70%] w-[70%]" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V28M16 8L7 13L16 18L25 13L16 8Z" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19L5 23H13L9 19Z" fill="#818CF8" fillOpacity="0.45" stroke="#818CF8" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M23 19L19 23H27L23 19Z" fill="#818CF8" fillOpacity="0.45" stroke="#818CF8" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="1.5" fill="#FFFFFF" />
      </svg>
    </span>
  );
}

export default function Logo({ to = '/', light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 transition-all ${light ? 'text-white' : 'text-ink'}`}
      aria-label="ClaimForge home"
    >
      <Mark light={light} />
      <span className="text-[20px] tracking-tight">
        <span className="font-serif text-[24px] tracking-normal font-normal">Claim</span>
        <span className={`font-black ml-0.5 tracking-tight ${light ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600'}`}>Forge</span>
      </span>
    </Link>
  );
}
