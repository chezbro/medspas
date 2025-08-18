import React from 'react';

interface VideoHeroProps {
  videoSrc: string;
  fallbackImage?: string;
  overlay?: boolean;
  className?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  fallbackImage,
  overlay = true,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-[70vh] overflow-hidden ${className}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
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
