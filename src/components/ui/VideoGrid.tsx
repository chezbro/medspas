import React from 'react';
import VideoHero from './VideoHero';
import Container from './Container';

interface VideoGridProps {
  videos: {
    src: string;
    title: string;
    description: string;
  }[];
  className?: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, className = '' }) => {
  return (
    <Container className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
        <h2 className="text-base font-semibold leading-7 text-primary-600">
          Our Treatments
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Experience Excellence in Aesthetics
        </p>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Discover our range of premium aesthetic treatments, delivered with precision and care by certified professionals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col">
            <VideoHero
              videoSrc={`/videos/${video.src}`}
              className="h-[250px] sm:h-[300px] rounded-xl"
            />
            <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900">
              {video.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {video.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default VideoGrid;
