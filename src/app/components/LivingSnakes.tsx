"use client";

export default function LivingSnakes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, height: "100%" }}>
      {/* Glow filters */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {/* Snake 1 (Top to Bottom slowly) */}
        <path
          d="M -100,100 C 200,-50 400,300 300,500 C 200,700 800,800 1100,1100"
          fill="none"
          stroke="var(--red)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#neon-glow)"
          className="snake-path-1"
        />

        {/* Snake 2 (Right to Left) */}
        <path
          d="M 1100,300 C 800,500 700,100 500,400 C 300,700 100,500 -100,600"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#neon-glow)"
          className="snake-path-2"
        />
        
        {/* Snake 3 (Big 'S' shape crossing center) */}
        <path
          d="M 1100,-100 C 800,200 200,100 400,500 C 600,900 -100,800 -200,1100"
          fill="none"
          stroke="var(--red)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#neon-glow)"
          className="snake-path-3"
        />
      </svg>
    </div>
  );
}
