import React, { useEffect, useRef } from 'react';
import './GalleryPage.css';

const galleryImages = [
  ['/assets/1.jpeg', 'Gallery memory 1'],
  ['/assets/2.jpeg', 'Gallery memory 2'],
  ['/assets/3.png', 'Gallery memory 3'],
  ['/assets/4.png', 'Gallery memory 4'],
  ['/assets/5.png', 'Gallery memory 5'],
  ['/assets/6.jpeg', 'Gallery memory 6'],
];

const GalleryPage = ({ onBack }) => {
  const lanternVideoRef = useRef(null);

  useEffect(() => {
    const video = lanternVideoRef.current;
    if (!video) return;

    const startVideo = () => {
      video.loop = true;
      video.muted = true;
      video.play().catch(() => {});
    };

    const videoTimer = window.setTimeout(startVideo, 5000);
    return () => window.clearTimeout(videoTimer);
  }, []);

  return (
    <main className="gallery-page">
      <video
        ref={lanternVideoRef}
        className="gallery-lantern-video"
        src="/assets/latern.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="gallery-video-overlay" aria-hidden="true" />

      <button className="gallery-back-button" onClick={onBack} aria-label="Back to gift choices">
        <span aria-hidden="true">&#8592;</span> Back
      </button>

      <section className="gallery-content" aria-labelledby="gallery-title">
        <p className="gallery-kicker">A little collection of memories</p>
        <h1 id="gallery-title">My Cute Angel&apos;s Gallery</h1>
        <div className="gallery-grid">
          {galleryImages.map(([src, alt]) => (
            <figure className="gallery-photo" key={src}>
              <img src={src} alt={alt} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
