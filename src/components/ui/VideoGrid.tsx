import React, { useState, useEffect, useRef, memo } from 'react';
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

const VideoGrid: React.FC<VideoGridProps> = memo(({ videos, className = '' }) => {
  const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleVideos(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    videoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
          <div 
            key={index} 
            className="group flex flex-col"
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
              {visibleVideos.has(index) && (
                <VideoHero
                  videoSrc={`/videos/${video.src}`}
                  className="h-[250px] sm:h-[300px] rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  objectFit={video.src === 'botox.mp4' ? 'object-none' : 'object-cover'}
                />
              )}
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                {video.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
});

VideoGrid.displayName = 'VideoGrid';

export default VideoGrid;
