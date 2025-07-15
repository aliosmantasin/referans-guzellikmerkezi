'use client';

import { useState, useRef } from 'react';

interface VideoSectionProps {
  videoUrl: string;
  posterUrl: string;
}

const PlayIcon = () => (
  <svg
    className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export function VideoSection({ videoUrl, posterUrl }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <section className="my-16 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Uygulama Videomuz</h2>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl aspect-video group">
        <video
          ref={videoRef}
          className="w-full h-full"
          src={videoUrl}
          poster={posterUrl}
          controls={isPlaying}
          playsInline
          loop
        >
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black cursor-pointer bg-opacity-40 hover:bg-opacity-30"
            onClick={handlePlay}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex w-24 h-24 bg-white rounded-full opacity-50 animate-ping"></span>
              <div className="relative flex items-center justify-center w-24 h-24 transition-transform duration-300 rounded-full shadow-lg bg-white/30 backdrop-blur-sm group-hover:scale-110">
                <PlayIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 