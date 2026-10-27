import React from 'react';

interface HeroProps {
  isAssamese: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  // Finalized typography configuration locked from user adjustments
  const sizeScale = 130;
  const yOffset = -21;
  const glowIntensity = 80;

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 flex items-center justify-center h-[52vh] sm:h-[62vh] lg:h-[72vh] min-h-[380px] max-h-[640px]">
      {/* Edge-to-edge Full-Section Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/video_thumb.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
      >
        <source src="/gemini_generated_video.mp4" type="video/mp4" />
        <source src="/gemini_generated_video_d19b1b5d.mp4" type="video/mp4" />
      </video>

      {/* Centered Brand Title in Samarkan Font — Locked to Final Adjustments */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translateY(${yOffset}px)`,
        }}
      >
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            maxWidth: '96%',
          }}
        >
          <h1
            className="font-samarkan select-none text-center tracking-wide"
            style={{
              filter: `drop-shadow(0 4px 18px rgba(0,0,0,${glowIntensity / 100})) drop-shadow(0 2px 6px rgba(0,0,0,${(glowIntensity / 100) * 0.95})) drop-shadow(0 0 2px rgba(0,0,0,0.95))`,
              background: 'linear-gradient(180deg, #FFF8D6 0%, #F5D061 50%, #C89116 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {/* Responsive: 2 lines on mobile screens (< md), 1 line on desktop (>= md) */}
            <span className="flex flex-col md:inline leading-[1.15] md:leading-normal">
              <span
                className="md:inline"
                style={{
                  fontSize: `clamp(2rem, ${(sizeScale / 100) * 7.5}vw, ${(sizeScale / 100) * 3.5}rem)`,
                }}
              >
                Kanh Pital
              </span>{' '}
              <span
                className="md:inline opacity-95"
                style={{
                  fontSize: `clamp(1.4rem, ${(sizeScale / 100) * 5.2}vw, ${(sizeScale / 100) * 3.5}rem)`,
                }}
              >
                Silpa Udyog Pratisthan
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
