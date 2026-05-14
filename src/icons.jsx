// Simple inline SVG icons — feline-leaning, hand-drawn feel
const Icon = {
  Cart: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.4L21 8H6" />
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="17" cy="20" r="1.2" />
    </svg>
  ),
  Search: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  Menu: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M3 7h18M3 17h18" />
    </svg>
  ),
  Close: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  ),
  Arrow: ({ size = 14, dir = 'right' }) => {
    const r = { right: 0, down: 90, left: 180, up: 270 }[dir];
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${r}deg)` }}>
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    );
  },
  Plus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Minus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 12h14" />
    </svg>
  ),
  Star: ({ size = 14, filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 2.5l2.95 6 6.6.95-4.78 4.65 1.13 6.55L12 17.6l-5.9 3.05 1.13-6.55L2.45 9.45l6.6-.95L12 2.5z" />
    </svg>
  ),
  Paw: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <ellipse cx="16" cy="22" rx="6.5" ry="5" />
      <ellipse cx="7" cy="14" rx="2.6" ry="3.4" />
      <ellipse cx="12.5" cy="9" rx="2.4" ry="3.2" />
      <ellipse cx="19.5" cy="9" rx="2.4" ry="3.2" />
      <ellipse cx="25" cy="14" rx="2.6" ry="3.4" />
    </svg>
  ),
  CatHead: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M5 7l4 5M27 7l-4 5" />
      <path d="M6 14c0-5.5 4.5-9 10-9s10 3.5 10 9c0 6-4 12-10 12S6 20 6 14z" />
      <circle cx="12" cy="15" r="0.8" fill="currentColor" />
      <circle cx="20" cy="15" r="0.8" fill="currentColor" />
      <path d="M14 19c.6.7 1.3 1 2 1s1.4-.3 2-1" />
      <path d="M16 17l-1 1.4M16 17l1 1.4" />
    </svg>
  ),
  Drop: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c0 0-7 7.5-7 12.5a7 7 0 0 0 14 0C19 10.5 12 3 12 3z" />
    </svg>
  ),
  Leaf: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-9 6-14 16-14 0 10-5 16-14 16-1 0-2-.5-2-2z" />
      <path d="M5 19l8-8" />
    </svg>
  ),
  Nose: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8L12 11l3-3" />
      <path d="M12 11v3M9 16c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      <path d="M5 5c1.5 3 3.5 5 7 5s5.5-2 7-5" />
    </svg>
  ),
  Instagram: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  Tiktok: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3c.5 2.4 2.4 4.3 4.8 4.6V11c-1.8 0-3.5-.6-5-1.6V16a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3H16z"/>
    </svg>
  ),
};

window.Icon = Icon;
