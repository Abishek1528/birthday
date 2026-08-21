import React, { useEffect, useRef, useState } from 'react';
import './WhistlePage.css';

const WhistlePage = ({ onBack }) => {
  const [isBlown, setIsBlown] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const balloonVideoRef = useRef(null);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainRef = useRef(null);
  const sequenceTimersRef = useRef([]);

  useEffect(() => () => {
    sequenceTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    oscillatorRef.current?.stop();
    audioContextRef.current?.close();
  }, []);

  useEffect(() => {
    if (!showVideo || !balloonVideoRef.current) return;
    const video = balloonVideoRef.current;
    video.loop = true;
    video.muted = true;
    video.play().catch(() => {});
    const letterTimer = window.setTimeout(() => setShowLetter(true), 2000);
    sequenceTimersRef.current.push(letterTimer);
    return () => window.clearTimeout(letterTimer);
  }, [showVideo]);

  const blowWhistle = () => {
    if (isBlown) return;
    setIsBlown(true);
    const videoTimer = window.setTimeout(() => setShowVideo(true), 5000);
    sequenceTimersRef.current.push(videoTimer);

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1450, now);
      oscillator.frequency.linearRampToValueAtTime(2050, now + 0.35);
      oscillator.frequency.linearRampToValueAtTime(1650, now + 2.65);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.13, now + 0.08);
      gain.gain.setValueAtTime(0.13, now + 2.65);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 3.05);
      audioContextRef.current = context;
      oscillatorRef.current = oscillator;
      gainRef.current = gain;
    } catch {
      // Visual transition still works if Web Audio is unavailable.
    }
  };

  return (
    <main className={`whistle-page ${isBlown ? 'is-blown' : ''}`}>
      <video
        ref={balloonVideoRef}
        className={`balloon-background-video ${showVideo ? 'is-playing' : ''}`}
        src="/assets/ballon_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="whistle-video-overlay" aria-hidden="true" />

      <button className="whistle-back-button" onClick={onBack} aria-label="Back to gift choices">
        <span aria-hidden="true">&#8592;</span> Back
      </button>

      {!isBlown ? (
        <section className="whistle-prompt" aria-live="polite">
          <div className="whistle-image-wrap">
            <img src="/assets/whistle.png" alt="Whistle" />
          </div>
          <h1>Blow the whistle</h1>
          <p>Make a little celebration sound</p>
          <button className="blow-button" onClick={blowWhistle}>Blow whistle</button>
        </section>
      ) : showLetter ? (
        <section className="letter-paper" aria-label="A message for my sweet girl">
          <p>To my sweet girl,</p>
          <p>from the moment you walked into my life,<br />
            you&apos;ve made everything brighter, softer, and<br />
            so much happier. I am incredibly grateful for<br />
            your laugh, your kindness, and the quiet,<br />
            beautiful moments we share.</p>
          <p>You are my favorite part of every day, and<br />
            happy birthday yashiii</p>
          <div className="letter-heart" aria-hidden="true">&#10084;</div>
        </section>
      ) : null}
    </main>
  );
};

export default WhistlePage;
