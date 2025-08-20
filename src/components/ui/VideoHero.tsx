import React from 'react';

interface VideoHeroProps {
  videoSrc: string;
  fallbackImage?: string;
  overlay?: boolean;
  className?: string;
  objectFit?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  fallbackImage,
  overlay = true,
  className = '',
  objectFit = 'object-cover',
}) => {
  return (
    <div className={`relative w-full h-[70vh] overflow-hidden ${className}`}>
      <video
        className={`absolute top-0 left-0 w-full h-full ${objectFit}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlay && (
        <div className="absolute inset-0 bg-black/30 z-10" />
      )}
    </div>
  );
};

export default VideoHero;
