import React, { useState, useEffect, useRef } from 'react';
import './GiftConfirmPage.css';

const GiftConfirmPage = ({ onYes, onNo, showPunchOnly }) => {
  const [showPunch, setShowPunch] = useState(!!showPunchOnly);

  const handleYes = () => {
    if (onYes) onYes();
  };
  const handleNo = () => {
    setShowPunch(true);
    if (onNo) onNo();
  };

  const [processedSrc, setProcessedSrc] = useState(null);
  const imgRef = useRef(null);

  // attempt client-side background removal for near-white pixels
  useEffect(() => {
    const src = '/assets/gift-box.png';
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // if pixel is near-white, make transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        const out = canvas.toDataURL('image/png');
        setProcessedSrc(out);
      } catch (e) {
        // fallback: leave original
        setProcessedSrc(src);
      }
    };
    img.onerror = () => setProcessedSrc(src);
  }, []);

  return (
    <div className="gift-confirm-page">
      <div className="gconf-decor gconf-balloon gcb-1" aria-hidden="true">🎈</div>
      <div className="gconf-decor gconf-balloon gcb-2" aria-hidden="true">🎈</div>
      <div className="gconf-decor gconf-ribbon gcr-1" aria-hidden="true" />
      <div className="gconf-decor gconf-sparkle gcs-1" aria-hidden="true">✦</div>
      <div className="gconf-decor gconf-candy gc-1" aria-hidden="true">🍬</div>
      <div className="gconf-decor gconf-cake gc-2" aria-hidden="true">🍰</div>
      <div className="gconf-decor gconf-heart gc-3" aria-hidden="true">💖</div>
      <div className="gconf-decor gconf-star gc-4" aria-hidden="true">⭐</div>
      <div className="gconf-decor gconf-choco gc-5" aria-hidden="true">🍫</div>
      <div className="gift-stage">
        {!showPunch ? (
          <>
            <h1 className="gift-question">Do you want to open your gift?</h1>
            <div className="gift-image" aria-hidden="true">
              <img
                ref={imgRef}
                src={processedSrc || '/assets/gift-box.png'}
                alt="Gift box"
                className="gift-img"
              />
            </div>
            <div className="gift-choices">
              <button className="gift-yes" onClick={handleYes}>Yes</button>
              <button className="gift-no" onClick={handleNo}>No</button>
            </div>
          </>
        ) : (
          <div className="punch-wrap">
            <div className="punch-gif" aria-hidden="true">👊</div>
            <div className="punch-text">Click yes to see surprise ✨</div>
            <div className="punch-cta">
              <button className="gift-yes" onClick={handleYes}>Yes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftConfirmPage;
