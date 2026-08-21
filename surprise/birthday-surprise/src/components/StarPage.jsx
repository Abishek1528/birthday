import React, { useEffect, useRef, useState } from 'react';
import './StarPage.css';

const floatingDecorations = [
  ['🎈', 'star-decor balloon star-balloon-1'],
  ['🎈', 'star-decor balloon star-balloon-2'],
  ['🎈', 'star-decor balloon star-balloon-3'],
  ['🎂', 'star-decor cake star-cake-1'],
  ['🍰', 'star-decor cake star-cake-2'],
  ['🍫', 'star-decor chocolate star-chocolate-1'],
  ['🍫', 'star-decor chocolate star-chocolate-2'],
  ['🍫', 'star-decor chocolate star-chocolate-3'],
  ['⭐', 'star-decor star star-star-1'],
  ['✦', 'star-decor star star-star-2'],
  ['✧', 'star-decor star star-star-3'],
  ['✨', 'star-decor sparkle star-sparkle-1'],
  ['✨', 'star-decor sparkle star-sparkle-2'],
  ['🎁', 'star-decor gift star-gift-1'],
  ['🎉', 'star-decor party star-party-1'],
  ['💖', 'star-decor heart star-heart-1'],
  ['🎈', 'thankyou-decor thankyou-balloon-1'],
  ['🎈', 'thankyou-decor thankyou-balloon-2'],
  ['🎂', 'thankyou-decor thankyou-cake-1'],
  ['🍫', 'thankyou-decor thankyou-chocolate-1'],
  ['🍫', 'thankyou-decor thankyou-chocolate-2'],
  ['⭐', 'thankyou-decor thankyou-star-1'],
  ['✨', 'thankyou-decor thankyou-sparkle-1'],
  ['🎁', 'thankyou-decor thankyou-gift-1'],
  ['🎉', 'thankyou-decor thankyou-party-1'],
  ['💖', 'thankyou-decor thankyou-heart-1'],
  ['🎈', 'thankyou-decor thankyou-balloon-3'],
  ['🍰', 'thankyou-decor thankyou-cake-2'],
  ['🎵', 'song-decor song-note-1'],
  ['🎶', 'song-decor song-note-2'],
  ['🎼', 'song-decor song-note-3'],
  ['🎵', 'song-decor song-note-4'],
  ['🎶', 'song-decor song-note-5'],
  ['💖', 'song-decor song-heart-1'],
  ['💗', 'song-decor song-heart-2'],
  ['✨', 'song-decor song-sparkle-1'],
  ['⭐', 'song-decor song-star-1'],
  ['🎧', 'song-decor song-headphone-1'],
];

const StarPage = ({ onBack }) => {
  const videoRef = useRef(null);
  const revealTimerRef = useRef(null);
  const thankYouTimerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [screen, setScreen] = useState('star');
  const [answer, setAnswer] = useState('');
  const [isBlown, setIsBlown] = useState(false);

  const playStarVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  useEffect(() => () => {
    window.clearTimeout(revealTimerRef.current);
    window.clearTimeout(thankYouTimerRef.current);
  }, []);

  const showQuestion = () => setScreen('question');

  const chooseAnswer = (choice) => {
    setAnswer(choice);
    setScreen('message');
    revealTimerRef.current = window.setTimeout(() => setScreen('cake'), 2000);
  };

  const blowCandles = () => {
    if (isBlown) return;
    setIsBlown(true);
    thankYouTimerRef.current = window.setTimeout(() => setScreen('thankyou'), 3000);
  };

  return (
    <main className={`star-page star-page-${screen}`}>
      {floatingDecorations.map(([emoji, className], index) => (
        <div key={`${className}-${index}`} className={className} aria-hidden="true">
          {emoji}
        </div>
      ))}

      <section className={`star-content star-screen-${screen}`} aria-live="polite">
        {screen === 'star' && (
          <>
            <p className="star-kicker">A little surprise for you</p>
            <h1 id="star-title">This is for you selfie</h1>
            <div className="star-message">You are my brightest star ✨</div>
            <div className="star-video-card">
              <video
                ref={videoRef}
                className="star-video"
                src="/assets/star.mp4"
                loop
                playsInline
                controls
                onPlay={() => setIsPlaying(true)}
                aria-label="Star celebration video with sound"
              />
              {!isPlaying && (
                <button className="star-play-button" onClick={playStarVideo}>
                  <span aria-hidden="true">&#9654;</span> Play with sound
                </button>
              )}
            </div>
            <button className="star-next-button" onClick={showQuestion}>Next <span aria-hidden="true">&#8594;</span></button>
          </>
        )}

        {screen === 'question' && (
          <div className="surprise-question">
            <p className="star-kicker">One more little question</p>
            <h1>Do you like all the surprises?</h1>
            <div className="answer-row">
              <button className="answer-button answer-yes" onClick={() => chooseAnswer('yes')}>Yes</button>
              <button className="answer-button answer-no" onClick={() => chooseAnswer('no')}>No</button>
            </div>
          </div>
        )}

        {screen === 'message' && (
          <div className="cake-message-card" role="status">
            <span className="message-sparkle" aria-hidden="true">✦</span>
            <p>{answer === 'yes' ? 'I knew it!' : 'That is okay...'}</p>
            <strong>Get ready for the cake!</strong>
          </div>
        )}

        {screen === 'cake' && (
          <div className="cake-screen">
            <h1 className="cake-title">{isBlown ? 'Happy birthday my Cutieeee Pieee' : 'Make a wish'}</h1>
            <div className={`cake-visual ${isBlown ? 'candles-blown' : ''}`}>
              <img src="/assets/cake.svg" alt="Birthday cake" />
              <div className="candles" aria-label={isBlown ? 'Blown out candles' : 'Lit birthday candles'}>
                {[1, 2, 3].map((candle) => (
                  <span className="candle" key={candle}>
                    {!isBlown && <i className="flame" aria-hidden="true" />}
                    {isBlown && <i className="candle-smoke" aria-hidden="true" />}
                  </span>
                ))}
              </div>
            </div>
            <button className="blow-button" onClick={blowCandles}>
              <span aria-hidden="true">💨</span> Blow the candles
            </button>
          </div>
        )}

        {screen === 'thankyou' && (
          <div className="thankyou-screen">
            <img className="last-image" src="/assets/last.png" alt="Thank you for watching and happy 19th birthday message" />
            <div className="thankyou-next-container">
              <button className="thankyou-next-button" onClick={() => setScreen('song')}>
                Next <span aria-hidden="true">🎵 &#8594;</span>
              </button>
            </div>
          </div>
        )}

        {screen === 'song' && (
          <div className="song-screen">
            <div className="song-ambient-glow" aria-hidden="true" />
            <div className="song-content-wrapper">
              <div className="song-card-wrapper">
                <div className="song-pulse-ring" aria-hidden="true" />
                <div className="song-card-glow" aria-hidden="true" />
                <div className="song-image-frame">
                  <img
                    className="song-qr-image"
                    src="/assets/song.png"
                    alt="Happy Birthday! A song for you - Scan QR Code"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default StarPage;
