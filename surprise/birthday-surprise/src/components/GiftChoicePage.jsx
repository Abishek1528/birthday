import React from 'react';
import './GiftChoicePage.css';

const GiftChoicePage = ({ onCamera, onWhistle, onStar }) => {
  const decorations = [
    ['🎈', 'gchoice-balloon balloon-a'], ['🎈', 'gchoice-balloon balloon-b'],
    ['🎈', 'gchoice-balloon balloon-c'], ['🎈', 'gchoice-balloon balloon-d'],
    ['🎂', 'gchoice-cake cake-a'], ['🍰', 'gchoice-cake cake-b'],
    ['🍫', 'gchoice-chocolate chocolate-a'], ['🍫', 'gchoice-chocolate chocolate-b'],
    ['🍫', 'gchoice-chocolate chocolate-c'], ['⭐', 'gchoice-star star-a'],
    ['✦', 'gchoice-star star-b'], ['✧', 'gchoice-star star-c'],
    ['✨', 'gchoice-star star-d'], ['🎁', 'gchoice-gift gift-a'],
    ['🎁', 'gchoice-gift gift-b'], ['🎉', 'gchoice-party party-a'],
    ['🥳', 'gchoice-party party-b'], ['🍬', 'gchoice-candy candy-a'],
    ['🍭', 'gchoice-candy candy-b'], ['💖', 'gchoice-heart heart-a'],
    ['💗', 'gchoice-heart heart-b'], ['🎊', 'gchoice-party party-c'],
    ['🌟', 'gchoice-star star-e'], ['🍰', 'gchoice-cake cake-c'],
  ];

  return (
    <div className="gift-choice-page">
      {decorations.map(([emoji, className], index) => (
        <div key={`${className}-${index}`} className={`gchoice-decor ${className}`} aria-hidden="true">
          {emoji}
        </div>
      ))}
      <div className="gift-choice-stage">
        <h1 className="choice-title">These are for you</h1>
        <p className="choice-sub">Choose one to open</p>

        <div className="choices-row">
          <button className="choice-item" onClick={onCamera}>
            <div className="choice-icon"><img src="/assets/camera.png" alt="Camera" className="choice-image" /></div>
            <div className="choice-label">Camera</div>
          </button>
          <button className="choice-item" onClick={onWhistle}>
            <div className="choice-icon"><img src="/assets/whistle.png" alt="Whistle" className="choice-image" /></div>
            <div className="choice-label">Whistle</div>
          </button>
          <button className="choice-item" onClick={onStar}>
            <div className="choice-icon">⭐</div>
            <div className="choice-label">Star</div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default GiftChoicePage;
