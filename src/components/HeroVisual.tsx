export function HeroVisual() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0" />

      {/* Abstract system / wing geometry — full-bleed visual plane */}
      <svg
        className="wing absolute -right-[8%] top-[8%] h-[78%] w-[70%] opacity-90"
        viewBox="0 0 800 700"
        fill="none"
      >
        <path
          d="M120 360C220 180 390 90 560 120C480 220 430 310 410 420C330 400 220 390 120 360Z"
          fill="url(#wingA)"
          opacity="0.55"
        />
        <path
          d="M180 420C290 300 470 240 650 280C560 370 500 450 470 560C360 520 250 480 180 420Z"
          fill="url(#wingB)"
          opacity="0.45"
        />
        <path
          className="signal-line"
          d="M90 500C210 430 340 390 490 400C610 408 700 450 760 520"
          stroke="#436291"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
        <circle cx="490" cy="400" r="5" fill="#1a8f84" />
        <circle cx="340" cy="390" r="3.5" fill="#436291" />
        <defs>
          <linearGradient id="wingA" x1="120" y1="120" x2="560" y2="420">
            <stop stopColor="#436291" stopOpacity="0.35" />
            <stop offset="1" stopColor="#1a8f84" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wingB" x1="180" y1="280" x2="650" y2="560">
            <stop stopColor="#1a8f84" stopOpacity="0.28" />
            <stop offset="1" stopColor="#436291" stopOpacity="0.04" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wing-delayed absolute left-[-12%] bottom-[-5%] h-[55%] w-[55%] opacity-70"
        viewBox="0 0 600 500"
        fill="none"
      >
        <path
          d="M40 280C140 140 280 70 430 90C360 180 320 250 300 340C220 320 120 310 40 280Z"
          fill="#436291"
          fillOpacity="0.08"
        />
        <path
          d="M80 80V400M160 60V420M240 90V390M320 50V430"
          stroke="#152033"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
