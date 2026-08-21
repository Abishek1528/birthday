import React, { useEffect, useRef, useState } from 'react';
import NextButton from './NextButton';
import './BirthdayPage.css';

const BirthdayPage = ({ onNext, onVideoComplete }) => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const revealTimerRef = useRef(null);
  const videoCompletedRef = useRef(false);

  const handleVideoComplete = () => {
    if (videoCompletedRef.current) return;
    videoCompletedRef.current = true;
    if (onVideoComplete) {
      onVideoComplete();
    }
    revealTimerRef.current = window.setTimeout(() => {
      setVideoFinished(true);
    }, 2000);
  };

  useEffect(() => () => {
    if (revealTimerRef.current) {
      window.clearTimeout(revealTimerRef.current);
    }
  }, []);

  const handleNext = () => {
    if (onNext) {
      onNext();
      return;
    }
    setShowSurprise(true);
  };

  return (
    <div className={`birthday-page ${videoFinished ? 'is-entered video-finished' : ''}`}>
      <div className="birthday-video-card">
        <video
          className="confetti-video"
          src="/assets/cracker.mp4"
          autoPlay
          playsInline
          preload="auto"
          onEnded={handleVideoComplete}
          aria-hidden="true"
        />
      </div>
      <div className="confetti-video-wash" aria-hidden="true" />

      {/* popper that explodes confetti/paper on page enter */}
      <div className="bday-popper" aria-hidden="true">
        <div className="pop-piece p1" />
        <div className="pop-piece p2" />
        <div className="pop-piece p3" />
        <div className="pop-piece p4" />
        <div className="pop-piece p5" />
        <div className="pop-piece p6" />
        <div className="pop-piece p7" />
        <div className="pop-piece p8" />
        <div className="pop-piece p9" />
        <div className="pop-piece p10" />
        <div className="pop-piece p11" />
        <div className="pop-piece p12" />
      </div>
      <div className="bday-decor bday-balloon bballoon-1" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FF7E95"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFB3C1" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#FF7E95"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="bday-decor bday-balloon bballoon-2" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FFA8B5"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFD1D9" opacity="0.7"/><polygon points="46,102 54,102 50,108" fill="#FFA8B5"/><path d="M50 108 Q45 120 52 130 Q47 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="bday-decor bday-balloon bballoon-3" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#C85568"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#E98FA0" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#C85568"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="bday-decor bday-balloon bballoon-4" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#F6C5C8"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFFFFF" opacity="0.7"/><polygon points="46,102 54,102 50,108" fill="#F6C5C8"/><path d="M50 108 Q45 120 52 130 Q47 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="bday-decor bday-balloon bballoon-5" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FF9EB1"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFCAD4" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#FF9EB1"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="bday-decor bday-balloon bballoon-6" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FF6B88"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFA8B8" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#FF6B88"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>

      <div className="bday-decor bconfetti bconfetti-1" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-2" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-3" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-4" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-5" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-6" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-7" aria-hidden="true" />
      <div className="bday-decor bconfetti bconfetti-8" aria-hidden="true" />

      <div className="bday-decor bstreamer bstreamer-1" aria-hidden="true">
        <svg viewBox="0 0 300 50"><path d="M0 25 Q75 0 150 25 T300 25" stroke="#FF7E95" strokeWidth="7" fill="none" strokeLinecap="round"/></svg>
      </div>
      <div className="bday-decor bstreamer bstreamer-2" aria-hidden="true">
        <svg viewBox="0 0 300 50"><path d="M0 25 Q75 50 150 25 T300 25" stroke="#C85568" strokeWidth="6" fill="none" strokeLinecap="round"/></svg>
      </div>
      <div className="bday-decor bstreamer bstreamer-3" aria-hidden="true">
        <svg viewBox="0 0 300 50"><path d="M0 25 Q75 0 150 25 T300 25" stroke="#FFA8B5" strokeWidth="5" fill="none" strokeLinecap="round"/></svg>
      </div>

      <div className="bday-decor bday-emoji be-1" aria-hidden="true">🎈</div>
      <div className="bday-decor bday-emoji be-2" aria-hidden="true">🎂</div>
      <div className="bday-decor bday-emoji be-3" aria-hidden="true">🎉</div>
      <div className="bday-decor bday-emoji be-4" aria-hidden="true">💖</div>
      <div className="bday-decor bday-emoji be-5" aria-hidden="true">✨</div>
      <div className="bday-decor bday-emoji be-6" aria-hidden="true">🎁</div>
      <div className="bday-decor bday-emoji be-7" aria-hidden="true">🥳</div>
      <div className="bday-decor bday-emoji be-8" aria-hidden="true">🌸</div>

      <div className="sparkle sparkle-1" aria-hidden="true">✦</div>
      <div className="sparkle sparkle-2" aria-hidden="true">✦</div>
      <div className="sparkle sparkle-3" aria-hidden="true">✦</div>
      <div className="sparkle sparkle-4" aria-hidden="true">✧</div>
      <div className="sparkle sparkle-5" aria-hidden="true">✧</div>
      <div className="sparkle sparkle-6" aria-hidden="true">✧</div>

      <div className="birthday-content">
        <div className="text-section">
          <h1 className="birthday-message line-1">Happy birthday</h1>
          <h1 className="birthday-message line-2">my happiness</h1>
        </div>

        <div className="photo-section">
          <div className="photo-container">
            <img
              src="/assets/couple.jpg"
              alt="Beautiful couple moment"
              className="couple-photo"
            />
          </div>
        </div>
      </div>

      {/* corner poppers */}
      <div className="bday-corner-popper left" aria-hidden="true">
        <div className="piece p-a" />
        <div className="piece p-b" />
        <div className="piece p-c" />
        <div className="piece p-d img" />
        <div className="piece p-e" />
        <div className="piece p-f img" />
        <div className="piece p-g" />
        <div className="piece p-h img" />
        <div className="piece p-i" />
        <div className="piece p-j img" />
        <div className="piece p-k" />
        <div className="piece p-l" />
        <div className="piece p-m" />
        <div className="piece p-n" />
        <div className="piece p-o" />
        <div className="piece p-p" />
        <div className="piece p-q" />
        <div className="piece p-r" />
        <div className="piece p-s" />
        <div className="piece p-t" />
      </div>
      <div className="bday-corner-popper right" aria-hidden="true">
        <div className="piece p-a" />
        <div className="piece p-b" />
        <div className="piece p-c" />
        <div className="piece p-d img" />
        <div className="piece p-e" />
        <div className="piece p-f img" />
        <div className="piece p-g" />
        <div className="piece p-h img" />
        <div className="piece p-i" />
        <div className="piece p-j img" />
        <div className="piece p-k" />
        <div className="piece p-l" />
        <div className="piece p-m" />
        <div className="piece p-n" />
        <div className="piece p-o" />
        <div className="piece p-p" />
        <div className="piece p-q" />
        <div className="piece p-r" />
        <div className="piece p-s" />
        <div className="piece p-t" />
      </div>
      <div className="bday-confetti-overlay" aria-hidden="true" />

      <div className="birthday-next-container">
        {showSurprise ? (
          <div className="surprise-message" role="alert">
            <p className="surprise-text">More surprises coming soon ❤️</p>
            <p className="surprise-subtext">You're the best thing that ever happened to me 💕</p>
          </div>
        ) : (
          <NextButton onClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default BirthdayPage;
