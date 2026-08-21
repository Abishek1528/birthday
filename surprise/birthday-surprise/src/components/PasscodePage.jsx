import React, { useState } from 'react';
import NextButton from './NextButton';
import './PasscodePage.css';

const CORRECT_PASSCODE = '2208';

const PasscodePage = ({ onSuccess }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNumberClick = (num) => {
    if (passcode.length < 4) {
      setPasscode((prev) => prev + num);
      setError(false);
      setErrorMessage('');
    }
  };

  const handleBackspace = () => {
    setPasscode((prev) => prev.slice(0, -1));
    setError(false);
    setErrorMessage('');
  };

  const handleClear = () => {
    setPasscode('');
    setError(false);
    setErrorMessage('');
  };

  const handleNext = () => {
    if (passcode === CORRECT_PASSCODE) {
      onSuccess();
    } else {
      setError(true);
      setErrorMessage('Oops! Try again sweetheart ❤️');
      setTimeout(() => setError(false), 600);
    }
  };

  const keypadLayout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ];

  const handleKeyPress = (key) => {
    if (key === '*') {
      handleBackspace();
    } else if (key === '#') {
      handleClear();
    } else {
      handleNumberClick(key);
    }
  };

  return (
    <div className="passcode-page">
      <video
        className="cracker-video"
        src="/assets/confetti.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="cracker-video-wash" aria-hidden="true" />

      <div className="decor decor-balloon balloon-1" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FF7E95"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFB3C1" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#FF7E95"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="decor decor-balloon balloon-2" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FFA8B5"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFD1D9" opacity="0.7"/><polygon points="46,102 54,102 50,108" fill="#FFA8B5"/><path d="M50 108 Q45 120 52 130 Q47 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="decor decor-balloon balloon-3" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#C85568"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#E98FA0" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#C85568"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="decor decor-balloon balloon-4" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#F6C5C8"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFFFFF" opacity="0.7"/><polygon points="46,102 54,102 50,108" fill="#F6C5C8"/><path d="M50 108 Q45 120 52 130 Q47 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>
      <div className="decor decor-balloon balloon-5" aria-hidden="true">
        <svg viewBox="0 0 100 140"><ellipse cx="50" cy="55" rx="38" ry="48" fill="#FF9EB1"/><ellipse cx="40" cy="42" rx="8" ry="12" fill="#FFCAD4" opacity="0.6"/><polygon points="46,102 54,102 50,108" fill="#FF9EB1"/><path d="M50 108 Q55 120 48 130 Q53 135 50 140" stroke="#7F3341" strokeWidth="1.5" fill="none"/></svg>
      </div>

      <div className="decor confetti confetti-1" aria-hidden="true" />
      <div className="decor confetti confetti-2" aria-hidden="true" />
      <div className="decor confetti confetti-3" aria-hidden="true" />
      <div className="decor confetti confetti-4" aria-hidden="true" />
      <div className="decor confetti confetti-5" aria-hidden="true" />
      <div className="decor confetti confetti-6" aria-hidden="true" />

      <div className="cracker-light cracker-light-1" aria-hidden="true" />
      <div className="cracker-light cracker-light-2" aria-hidden="true" />
      <div className="cracker-light cracker-light-3" aria-hidden="true" />

      <div className="passcode-paper-burst passcode-paper-burst-left" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={index} className={`burst-paper burst-paper-${index + 1}`} />)}
      </div>
      <div className="passcode-paper-burst passcode-paper-burst-right" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={index} className={`burst-paper burst-paper-${index + 1}`} />)}
      </div>

      <div className="decor streamer streamer-1" aria-hidden="true">
        <svg viewBox="0 0 200 40"><path d="M0 20 Q50 0 100 20 T200 20" stroke="#FF7E95" strokeWidth="6" fill="none" strokeLinecap="round"/></svg>
      </div>
      <div className="decor streamer streamer-2" aria-hidden="true">
        <svg viewBox="0 0 200 40"><path d="M0 20 Q50 40 100 20 T200 20" stroke="#C85568" strokeWidth="5" fill="none" strokeLinecap="round"/></svg>
      </div>

      <div className="decor birthday-text decor-text-1" aria-hidden="true">🎈</div>
      <div className="decor birthday-text decor-text-2" aria-hidden="true">🎂</div>
      <div className="decor birthday-text decor-text-3" aria-hidden="true">🎉</div>
      <div className="decor birthday-text decor-text-4" aria-hidden="true">💖</div>
      <div className="decor birthday-text decor-text-5" aria-hidden="true">✨</div>
      <div className="decor birthday-text decor-text-6" aria-hidden="true">🎁</div>

      <div className="passcode-content">
        <div className="bunny-container">
          <img
            src="/assets/birthday-front.png"
            alt="Cute birthday bunny"
            className="bunny-image"
          />
        </div>

        <div className="passcode-section">
          <h2 className="passcode-title">Enter a passcode</h2>

          <div className={`passcode-boxes ${error ? 'shake' : ''}`}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`passcode-box ${passcode[index] ? 'filled' : ''}`}
                aria-label={`Passcode digit ${index + 1}${passcode[index] ? ' entered' : ' empty'}`}
              >
                {passcode[index] && <span className="passcode-digit">*</span>}
              </div>
            ))}
          </div>

          {errorMessage && (
            <div className="error-message" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="heart-keypad">
            {keypadLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="keypad-row">
                {row.map((key) => (
                  <button
                    key={key}
                    className={`heart-btn ${key === '*' || key === '#' ? 'special-btn' : ''}`}
                    onClick={() => handleKeyPress(key)}
                    aria-label={
                      key === '*' ? 'Backspace - remove last digit' :
                      key === '#' ? 'Clear passcode' :
                      `Number ${key}`
                    }
                  >
                    <svg className="heart-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M50 88.9C47.3 86.2 5 51 5 30.5C5 17 15.5 7 27.5 7C35.5 7 43 11 50 18.5C57 11 64.5 7 72.5 7C84.5 7 95 17 95 30.5C95 51 52.7 86.2 50 88.9Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="heart-btn-text">{key}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="next-button-container">
            <NextButton onClick={handleNext} disabled={passcode.length !== 4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasscodePage;
