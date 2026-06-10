"use client";

// Icon mark + bold wordmark per client. Uses HTML spans (not SVG text)
// so the font renders correctly and respects the design system.
// LogoTicker wraps all logos in a seamless right-to-left marquee.

interface LogoProps {
  className?: string;
}

export function LogoNestoil({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="Nestoil">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3C12 3 5.5 10 5.5 14.5C5.5 18.09 8.42 21 12 21C15.58 21 18.5 18.09 18.5 14.5C18.5 10 12 3 12 3Z" />
      </svg>
      <span className="text-sm font-black tracking-widest">NESTOIL</span>
    </span>
  );
}

export function LogoMarathon({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="Marathon Oil">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3,20 7.5,7 12,16 16.5,7 21,20" />
      </svg>
      <span className="text-sm font-black tracking-wide">MARATHON OIL</span>
    </span>
  );
}

export function LogoSchlumberger({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="SLB">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 2 L20 5.5 L20 12.5 L14 16 L8 12.5 L8 5.5 Z" />
        <path d="M10 10.5 L14 8 L18 10.5 L14 13 Z" fill="white" />
      </svg>
      <span className="text-sm font-black tracking-widest">SLB</span>
    </span>
  );
}

export function LogoTenneco({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="Tenneco">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
      <span className="text-sm font-black tracking-widest">TENNECO</span>
    </span>
  );
}

export function LogoPortOfSanDiego({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="Port of San Diego">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" fill="currentColor" stroke="none" />
        <line x1="12" y1="7" x2="12" y2="21" />
        <path d="M5 15c0 3.87 3.13 6 7 6s7-2.13 7-6" />
        <line x1="9" y1="5" x2="15" y2="5" />
      </svg>
      <span className="text-sm font-black tracking-wide">PORT OF SAN DIEGO</span>
    </span>
  );
}

// ── Seamless right-to-left ticker ────────────────────────────────────────────

const LOGO_LIST = [
  { key: "nestoil",  el: <LogoNestoil /> },
  { key: "marathon", el: <LogoMarathon /> },
  { key: "slb",      el: <LogoSchlumberger /> },
  { key: "tenneco",  el: <LogoTenneco /> },
  { key: "port",     el: <LogoPortOfSanDiego /> },
];

export function LogoTicker() {
  // Duplicate so the loop is seamless: the strip is 2× wide and we translate -50%.
  const items = [...LOGO_LIST, ...LOGO_LIST];

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* left edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-canvas to-transparent"
      />
      {/* right edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-canvas to-transparent"
      />

      <div className="animate-logo-ticker flex w-max items-center gap-x-16">
        {items.map(({ key, el }, i) => (
          <span
            key={`${key}-${i}`}
            className="inline-flex items-center text-ink opacity-50 transition-opacity duration-200 hover:opacity-100"
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}
