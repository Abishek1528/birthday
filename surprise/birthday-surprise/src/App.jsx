import React, { useState, useRef, useEffect } from 'react';
import IntroPage from './components/IntroPage';
import PasscodePage from './components/PasscodePage';
import BirthdayPage from './components/BirthdayPage';
import GiftConfirmPage from './components/GiftConfirmPage';
import GiftChoicePage from './components/GiftChoicePage';
import GalleryPage from './components/GalleryPage';
import WhistlePage from './components/WhistlePage';
import StarPage from './components/StarPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visiblePage, setVisiblePage] = useState(1);
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  const tryStartMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.2;
    if (audio.muted) {
      audio.muted = false;
    }
    if (!audio.paused) {
      setMusicStarted(true);
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setMusicStarted(true);
        })
        .catch(() => {
          /* Keep trying on interaction */
        });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentPage === 1 && !musicStarted) {
      audio.muted = true;
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }

    const onAnyInteraction = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.muted) {
        audio.muted = false;
      }
      tryStartMusic();
    };

    window.addEventListener('pointerdown', onAnyInteraction);
    window.addEventListener('keydown', onAnyInteraction);
    window.addEventListener('touchstart', onAnyInteraction);
    return () => {
      window.removeEventListener('pointerdown', onAnyInteraction);
      window.removeEventListener('keydown', onAnyInteraction);
      window.removeEventListener('touchstart', onAnyInteraction);
    };
  }, [currentPage, musicStarted]);

  const navigateTo = (page) => {
    if (page === 3 || page === 9) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      tryStartMusic();
    }
    if (page === 9 && audioRef.current) {
      audioRef.current.pause();
    }
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setVisiblePage(page);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  useEffect(() => {
    if ((currentPage === 3 || currentPage === 9) && audioRef.current) {
      audioRef.current.pause();
    }
    if (currentPage === 1 && audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 0;
      tryStartMusic();
    } else if (currentPage !== 3 && currentPage !== 9 && musicStarted && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentPage, musicStarted]);

  // Intro "Yes" → go to passcode (page 2)
  const handleIntroYes = () => navigateTo(2);

  // Passcode success → go to birthday (page 3)
  const handlePasscodeSuccess = () => navigateTo(3);

  return (
    <div className="app">
      <audio
        ref={audioRef}
        src="/assets/Happy-Birthday.mp3"
        loop
        autoPlay
        preload="auto"
        playsInline
      />
      <div className="page-container">
        <div
          className={`page-wrapper ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          key={visiblePage}
        >
          {currentPage === 1 && (
            <IntroPage onYes={handleIntroYes} onStartMusic={tryStartMusic} />
          )}
          {currentPage === 2 && (
            <PasscodePage onSuccess={handlePasscodeSuccess} />
          )}
          {currentPage === 3 && (
            <BirthdayPage onNext={() => navigateTo(4)} onVideoComplete={tryStartMusic} />
          )}
          {currentPage === 4 && (
            <GiftConfirmPage onYes={() => navigateTo(5)} onNo={() => navigateTo(6)} />
          )}
          {currentPage === 5 && (
            <GiftChoicePage onCamera={() => navigateTo(7)} onWhistle={() => navigateTo(8)} onStar={() => navigateTo(9)} />
          )}
          {currentPage === 6 && (
            <GiftConfirmPage onYes={() => navigateTo(5)} onNo={() => navigateTo(6)} showPunchOnly={true} />
          )}
          {currentPage === 7 && (
            <GalleryPage onBack={() => navigateTo(5)} />
          )}
          {currentPage === 8 && (
            <WhistlePage onBack={() => navigateTo(5)} />
          )}
          {currentPage === 9 && (
            <StarPage onBack={() => navigateTo(5)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
