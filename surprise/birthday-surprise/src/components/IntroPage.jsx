import React, { useState, useEffect, useRef } from 'react';
import './IntroPage.css';

/* ─────────────────────────────────────────────────────────────────
   Realistic Ulysses-style blue butterfly SVG
   Black body + wings with vivid electric-blue iridescent panels
───────────────────────────────────────────────────────────────── */
const BlueButterflySmall = () => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: '100%', overflow: 'visible' }}>
    <defs>
      <radialGradient id="blueWingL" cx="35%" cy="35%" r="65%">
        <stop offset="0%"  stopColor="#00CFFF" stopOpacity="1" />
        <stop offset="40%" stopColor="#0088FF" stopOpacity="1" />
        <stop offset="80%" stopColor="#0044CC" stopOpacity="1" />
        <stop offset="100%" stopColor="#001A66" stopOpacity="1" />
      </radialGradient>
      <radialGradient id="blueWingR" cx="65%" cy="35%" r="65%">
        <stop offset="0%"  stopColor="#00CFFF" stopOpacity="1" />
        <stop offset="40%" stopColor="#0088FF" stopOpacity="1" />
        <stop offset="80%" stopColor="#0044CC" stopOpacity="1" />
        <stop offset="100%" stopColor="#001A66" stopOpacity="1" />
      </radialGradient>
    </defs>
    {/* Upper left wing */}
    <path d="M60 40 C50 10, 8 2, 4 22 C0 38, 28 52, 60 42 Z"
          fill="url(#blueWingL)" />
    <path d="M60 40 C50 10, 8 2, 4 22 C0 38, 28 52, 60 42 Z"
          fill="none" stroke="#000B2E" strokeWidth="1.2" opacity="0.7"/>
    {/* Upper right wing */}
    <path d="M60 40 C70 10, 112 2, 116 22 C120 38, 92 52, 60 42 Z"
          fill="url(#blueWingR)" />
    <path d="M60 40 C70 10, 112 2, 116 22 C120 38, 92 52, 60 42 Z"
          fill="none" stroke="#000B2E" strokeWidth="1.2" opacity="0.7"/>
    {/* Lower left wing */}
    <path d="M60 44 C42 44, 14 54, 16 68 C18 78, 44 76, 60 52 Z"
          fill="#0055CC" />
    <path d="M60 44 C42 44, 14 54, 16 68 C18 78, 44 76, 60 52 Z"
          fill="none" stroke="#000B2E" strokeWidth="1" opacity="0.6"/>
    {/* Lower right wing */}
    <path d="M60 44 C78 44, 106 54, 104 68 C102 78, 76 76, 60 52 Z"
          fill="#0055CC" />
    <path d="M60 44 C78 44, 106 54, 104 68 C102 78, 76 76, 60 52 Z"
          fill="none" stroke="#000B2E" strokeWidth="1" opacity="0.6"/>
    {/* Wing sheen highlight */}
    <ellipse cx="38" cy="22" rx="14" ry="8" fill="#7FFFFD" opacity="0.28" transform="rotate(-20 38 22)"/>
    <ellipse cx="82" cy="22" rx="14" ry="8" fill="#7FFFFD" opacity="0.28" transform="rotate(20 82 22)"/>
    {/* Black wing borders / veins */}
    <path d="M60 42 C48 30 20 14 10 16" stroke="#000B2E" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M60 42 C72 30 100 14 110 16" stroke="#000B2E" strokeWidth="1" fill="none" opacity="0.5"/>
    {/* Body */}
    <ellipse cx="60" cy="45" rx="3.5" ry="16" fill="#0A0A1A" />
    <ellipse cx="60" cy="28" rx="3" ry="5"   fill="#111133" />
    {/* Antennae */}
    <path d="M59 24 Q54 14 50 9" stroke="#111133" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="49" cy="8" r="2" fill="#0066CC"/>
    <path d="M61 24 Q66 14 70 9" stroke="#111133" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="71" cy="8" r="2" fill="#0066CC"/>
  </svg>
);

/* Large version for the hero butterfly */
const BlueButterflyBig = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: '100%', overflow: 'visible' }}>
    <defs>
      <radialGradient id="bigWingL" cx="30%" cy="30%" r="70%">
        <stop offset="0%"  stopColor="#33DDFF" />
        <stop offset="25%" stopColor="#00AAFF" />
        <stop offset="55%" stopColor="#0055EE" />
        <stop offset="85%" stopColor="#0022AA" />
        <stop offset="100%" stopColor="#000D66" />
      </radialGradient>
      <radialGradient id="bigWingR" cx="70%" cy="30%" r="70%">
        <stop offset="0%"  stopColor="#33DDFF" />
        <stop offset="25%" stopColor="#00AAFF" />
        <stop offset="55%" stopColor="#0055EE" />
        <stop offset="85%" stopColor="#0022AA" />
        <stop offset="100%" stopColor="#000D66" />
      </radialGradient>
      <radialGradient id="bigLowerL" cx="40%" cy="40%" r="60%">
        <stop offset="0%"  stopColor="#0077FF" />
        <stop offset="60%" stopColor="#0033AA" />
        <stop offset="100%" stopColor="#000D55" />
      </radialGradient>
      <radialGradient id="bigLowerR" cx="60%" cy="40%" r="60%">
        <stop offset="0%"  stopColor="#0077FF" />
        <stop offset="60%" stopColor="#0033AA" />
        <stop offset="100%" stopColor="#000D55" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Upper left wing — large sweeping shape */}
    <path d="M120 80
             C108 20, 16 -5, 5 30
             C-5 58, 50 98, 120 85 Z"
          fill="url(#bigWingL)" filter="url(#glow)"/>
    {/* Black edge veining */}
    <path d="M120 80 C108 20, 16 -5, 5 30 C-5 58, 50 98, 120 85 Z"
          fill="none" stroke="#000B2E" strokeWidth="2.5" opacity="0.75"/>
    <path d="M5 30 C18 10 55 8 80 20" stroke="#000B2E" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M120 82 C100 55 40 30 12 38" stroke="#000B2E" strokeWidth="1" fill="none" opacity="0.35"/>

    {/* Upper right wing */}
    <path d="M120 80
             C132 20, 224 -5, 235 30
             C245 58, 190 98, 120 85 Z"
          fill="url(#bigWingR)" filter="url(#glow)"/>
    <path d="M120 80 C132 20, 224 -5, 235 30 C245 58, 190 98, 120 85 Z"
          fill="none" stroke="#000B2E" strokeWidth="2.5" opacity="0.75"/>
    <path d="M235 30 C222 10 185 8 160 20" stroke="#000B2E" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M120 82 C140 55 200 30 228 38" stroke="#000B2E" strokeWidth="1" fill="none" opacity="0.35"/>

    {/* Lower left wing */}
    <path d="M120 88
             C96 88, 28 105, 30 132
             C32 152, 88 150, 120 108 Z"
          fill="url(#bigLowerL)"/>
    <path d="M120 88 C96 88, 28 105, 30 132 C32 152, 88 150, 120 108 Z"
          fill="none" stroke="#000B2E" strokeWidth="2" opacity="0.7"/>
    {/* Lower right wing */}
    <path d="M120 88
             C144 88, 212 105, 210 132
             C208 152, 152 150, 120 108 Z"
          fill="url(#bigLowerR)"/>
    <path d="M120 88 C144 88, 212 105, 210 132 C208 152, 152 150, 120 108 Z"
          fill="none" stroke="#000B2E" strokeWidth="2" opacity="0.7"/>

    {/* Iridescent sheen highlights */}
    <ellipse cx="70" cy="38" rx="28" ry="15" fill="#99EEFF" opacity="0.22" transform="rotate(-25 70 38)"/>
    <ellipse cx="170" cy="38" rx="28" ry="15" fill="#99EEFF" opacity="0.22" transform="rotate(25 170 38)"/>
    <ellipse cx="65" cy="115" rx="16" ry="9" fill="#66CCFF" opacity="0.18" transform="rotate(10 65 115)"/>
    <ellipse cx="175" cy="115" rx="16" ry="9" fill="#66CCFF" opacity="0.18" transform="rotate(-10 175 115)"/>

    {/* Black edge spots on lower wings */}
    <circle cx="45"  cy="128" r="5" fill="#000B2E" opacity="0.5"/>
    <circle cx="195" cy="128" r="5" fill="#000B2E" opacity="0.5"/>
    <circle cx="58"  cy="142" r="4" fill="#000B2E" opacity="0.4"/>
    <circle cx="182" cy="142" r="4" fill="#000B2E" opacity="0.4"/>

    {/* Body */}
    <ellipse cx="120" cy="92" rx="5.5" ry="30" fill="#06060F" />
    <ellipse cx="120" cy="62" rx="5"   ry="10" fill="#0A0A20" />
    {/* Antennae */}
    <path d="M118 54 Q108 36 100 24" stroke="#0A0A20" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="99" cy="22" r="4" fill="#0055CC"/>
    <path d="M122 54 Q132 36 140 24" stroke="#0A0A20" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="141" cy="22" r="4" fill="#0055CC"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────────
   Background butterfly paths — each butterfly flies across screen
   using a unique CSS animation class
───────────────────────────────────────────────────────────────── */
const BG_BUTTERFLIES = [
  { id: 1,  animClass: 'bf-path-1',  size: 52, delay: -2.4, startX: '-10%', startY: '10%' },
  { id: 2,  animClass: 'bf-path-2',  size: 42, delay: -4.7, startX: '84%',  startY: '6%' },
  { id: 3,  animClass: 'bf-path-3',  size: 60, delay: -1.3, startX: '-12%', startY: '48%' },
  { id: 4,  animClass: 'bf-path-4',  size: 40, delay: -3.1, startX: '92%',  startY: '8%' },
  { id: 5,  animClass: 'bf-path-5',  size: 56, delay: -5.2, startX: '-14%', startY: '82%' },
  { id: 6,  animClass: 'bf-path-6',  size: 36, delay: -2.9, startX: '98%',  startY: '50%' },
  { id: 7,  animClass: 'bf-path-7',  size: 48, delay: -6.8, startX: '-16%', startY: '68%' },
  { id: 8,  animClass: 'bf-path-8',  size: 42, delay: -4.3, startX: '-8%',  startY: '2%' },
  { id: 9,  animClass: 'bf-path-9',  size: 50, delay: -2.0, startX: '92%',  startY: '28%' },
  { id: 10, animClass: 'bf-path-10', size: 34, delay: -4.0, startX: '48%', startY: '90%' },
  { id: 11, animClass: 'bf-path-11', size: 46, delay: -5.5, startX: '12%', startY: '20%' },
  { id: 12, animClass: 'bf-path-12', size: 38, delay: -3.6, startX: '74%', startY: '60%' },
];

/* ─────────────────────────────────────────────────────────────────
   IntroPage Component
───────────────────────────────────────────────────────────────── */
const IntroPage = ({ onYes, onStartMusic }) => {
  const [sceneActive, setSceneActive]   = useState(false);
  const [showButtons, setShowButtons]   = useState(false);
  const [punchActive, setPunchActive]   = useState(false);
  const [punchText,   setPunchText]     = useState(false);
  const interacted = useRef(false);

  /* Start music on first user interaction with the intro page */
  const handleFirstInteraction = () => {
    if (!interacted.current) {
      interacted.current = true;
      if (onStartMusic) onStartMusic();
    }
  };

  useEffect(() => {
    // Small butterflies move first, then the hero and paper arrive.
    const t1 = setTimeout(() => setSceneActive(true),  1600);
    // Buttons appear after the hero butterfly has settled.
    const t2 = setTimeout(() => setShowButtons(true), 6200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleNo = () => {
    handleFirstInteraction();
    setPunchActive(true);
    setPunchText(true);
    setTimeout(() => setPunchActive(false), 700);
  };

  const handleYes = () => {
    handleFirstInteraction();
    onYes();
  };

  return (
    <div
      className="intro-page"
      onClick={handleFirstInteraction}
      onTouchStart={handleFirstInteraction}
    >
      {/* Falling confetti */}
      {[1,2,3,4,5,6,7,8].map(n => (
        <div key={n} className={`i-confetti i-confetti-${n}`} aria-hidden="true" />
      ))}

      {/* Floating emoji decorations */}
      <div className="i-emoji i-e1" aria-hidden="true">🎈</div>
      <div className="i-emoji i-e2" aria-hidden="true">🎉</div>
      <div className="i-emoji i-e3" aria-hidden="true">💖</div>
      <div className="i-emoji i-e4" aria-hidden="true">✨</div>
      <div className="i-emoji i-e5" aria-hidden="true">🌸</div>
      <div className="i-emoji i-e6" aria-hidden="true">🎀</div>

      {/* Background butterflies flying across screen */}
      {BG_BUTTERFLIES.map(b => (
        <div
          key={b.id}
          className={`bg-bf ${b.animClass}`}
          style={{
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            top: b.startY,
            left: b.startX,
          }}
          aria-hidden="true"
        >
          <div className="bf-wing-anim">
            <BlueButterflySmall />
          </div>
        </div>
      ))}

      {/* ── Main scene: big butterfly pulling paper ── */}
      <div className={`main-scene ${sceneActive ? 'scene-fly-in' : ''}`}>
        <div className={`paper-card ${sceneActive ? 'paper-wave' : ''}`}>
          {/* Corner fold */}
          <span className="fold-corner" aria-hidden="true" />
          {/* Stamp */}
          <span className="paper-stamp" aria-hidden="true">💌</span>

          <div className="paper-inner">
            <p className="paper-text">Do you like surprises? 🎁🤩</p>
            <p className="paper-sub">Ready to see surprise? 🎊</p>

            {showButtons && (
              <div className="paper-btns" style={{ animation: 'fadeinup 0.5s ease forwards' }}>
                <button
                  id="intro-yes-btn"
                  className="ibtn yes-btn"
                  onClick={handleYes}
                >
                  Yes! 🥳
                </button>
                <button
                  id="intro-no-btn"
                  className={`ibtn no-btn ${punchActive ? 'punched' : ''}`}
                  onClick={handleNo}
                >
                  No 😶
                </button>
              </div>
            )}

            {punchText && (
              <p className="punch-msg" aria-live="polite">
                👊 Click Yes, you don't want to miss this surprise! 😄
              </p>
            )}
          </div>
        </div>

        <div className="thread" aria-hidden="true" />

        <div className="hero-butterfly">
          <div className="hero-wing-anim">
            <BlueButterflyBig />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
