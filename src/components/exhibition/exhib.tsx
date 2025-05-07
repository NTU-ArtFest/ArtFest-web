import React, { useEffect, useRef } from 'react';
import type { Exhibition as ExhibitionType } from "../../data/exhib_data";
import { Key } from "react";

interface ExhibitionProps {
  data: ExhibitionType;
}

interface Work {
  title: string;
  image: string;
  description: string[];
}

// Helper function to group array items into chunks of specified size
const chunkArray = (array: string[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export default function Exhibition({ data }: ExhibitionProps) {
  // Group team members into chunks of 3
  const teamChunks = chunkArray(data.team, 3);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Start transition immediately, full opacity at 40% of window height
      let opacity = scrollPosition / (windowHeight * 0.4);
      opacity = Math.min(Math.max(opacity, 0), 1); // Clamp between 0 and 1
      
      if (overlayRef.current) {
        overlayRef.current.style.opacity = opacity.toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set proper state on load
    handleScroll();
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
      {/* Black background layer */}
      <div className="fixed inset-0 z-0 bg-black"></div>
  
      {/* Video section: fullscreen play with color transition effect */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        {/* Background image */}
        <img 
          src="/exhibition/video_bg.png"
          alt="Background for video"
          className="absolute inset-0 w-full h-full object-cover opacity-0 z-0"
        />
        {/* Video */}
        <video
          className="w-full h-full object-contain relative z-10"
          src="/exhibition/tidal.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay that changes opacity on scroll for color transition */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 z-20"
        ></div>
      </div>

      {/* Script for scroll effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const videoOverlay = document.getElementById('video-overlay');
            
            window.addEventListener('scroll', function() {
              const scrollPosition = window.scrollY;
              const windowHeight = window.innerHeight;
              
              // Start transition when scrolling begins
              // Full black at 40% of the window height
              let opacity = scrollPosition / (windowHeight * 0.4);
              opacity = Math.min(Math.max(opacity, 0), 1); // Clamp between 0 and 1
              
              if (videoOverlay) {
                videoOverlay.style.opacity = opacity.toString();
                console.log("Scroll position:", scrollPosition, "Opacity:", opacity);
              }
            });
          });
        `
      }} />

      {/* Script for scroll effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const videoOverlay = document.getElementById('video-overlay');
            
            window.addEventListener('scroll', function() {
              const scrollPosition = window.scrollY;
              const windowHeight = window.innerHeight;
              
              // Calculate opacity based on scroll position
              // Start fading when scroll reaches 10% of window height
              // Full opacity when scroll reaches 50% of window height
              let opacity = (scrollPosition - windowHeight * 0.1) / (windowHeight * 0.4);
              opacity = Math.min(Math.max(opacity, 0), 1); // Clamp between 0 and 1
              
              if (videoOverlay) {
                videoOverlay.style.opacity = opacity;
              }
            });
          });
        `
      }} />

      <div className="relative w-full min-h-screen z-10">
        {/* Background with dimmed brightness */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <img
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
          src="/exhibition/sea.png"
          alt="Exhibition Background"
        />
        
        {/* Mobile layout */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* Title at top left */}
          <div className="self-start mt-6 sm:mt-8 ml-5 sm:ml-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider mb-1 uppercase">{data.title}</h1>
            <p className="text-xs sm:text-sm tracking-wide">{data.subtitle}</p>
          </div>
          
          {/* Exhibition info at bottom right */}
          <div className="absolute bottom-6 sm:bottom-8 right-5 sm:right-8 text-right text-[10px] space-y-1 sm:space-y-2 max-w-[70vw]">
            <p className="mb-1">
              <span className="font-bold text-[11px]">策劃團隊</span><br />
              {teamChunks.map((chunk, index) => (
                <span key={index}>{chunk.join('、')}<br /></span>
              ))}
            </p>
            (data.advisor && (
              <p><span className="font-bold text-[11px]">指導單位</span><br />{data.advisor}</p>
            )
            )
            <p><span className="font-bold text-[11px]">合作單位</span><br />{data.cooperation}</p>
            <p><span className="font-bold text-[11px]">展覽媒材</span><br />{data.media}</p>
            <p><span className="font-bold text-[11px]">展覽時間</span><br />{data.date}</p>
            <p><span className="font-bold text-[11px]">展覽地點</span><br />{data.location}</p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative w-full min-h-screen z-10">
          <div className="relative h-screen w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">{data.title}</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">{data.subtitle}</p>
            </div>
            <div className="absolute bottom-12 right-12 text-right max-w-md space-y-3 md:space-y-4">
              <p className="mb-1">
                <span className="font-bold text-sm md:text-base">策劃團隊</span><br />
                {teamChunks.map((chunk, index) => (
                  <span key={index} className="text-xs md:text-sm">{chunk.join('、')}<br /></span>
                ))}
              </p>
              <p><span className="font-bold text-sm md:text-base">指導單位</span><br />
                <span className="text-xs md:text-sm">{data.advisor}</span>
              </p>
              <p><span className="font-bold text-sm md:text-base">合作單位</span><br />
                <span className="text-xs md:text-sm">{data.cooperation}</span>
              </p>
              <p><span className="font-bold text-sm md:text-base">展覽媒材</span><br />
                <span className="text-xs md:text-sm">{data.media}</span>
              </p>
              <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
                <span className="text-xs md:text-sm">{data.date}</span>
              </p>
              <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
                <span className="text-xs md:text-sm">{data.location}</span>
              </p>
            </div>
          </div>  
        </div>
      </div>
      
      {/* Quote section */}
      <div className="relative z-10 py-10 md:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed space-y-6 font-light">
            {data.quotes.map((q, i) => (
              <p className="text-center italic" key={i}>{q}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Exhibition introduction section */}
      <div className="relative z-10 py-10 md:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-light mb-6 sm:mb-8 md:mb-12 tracking-wider text-center uppercase">展覽介紹</h2>
          <div className="max-w-3xl mx-auto text-[10px] sm:text-xs md:text-sm leading-relaxed space-y-4 md:space-y-6 font-light">
            {data.introduction.map((intro: string, i: Key) => (
              <p className="text-left" key={i}>{intro}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Works display section */}
      <div className="relative z-10 py-10 md:py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-light mb-8 md:mb-16 tracking-wider text-center uppercase">作品展示</h2>
          
          {/* Mobile layout (stacked) */}
          <div className="md:hidden">
            {data.works.map((work: Work, idx: number) => (
              <div 
                className={`max-w-6xl mx-auto ${idx !== data.works.length - 1 ? 'mb-12' : ''}`} 
                key={work.title}
              >
                {/* Work image */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Work description */}
                <div className="w-full">
                  <h3 className="text-base font-medium mb-3 tracking-wide uppercase">{work.title}</h3>
                  <div className="space-y-2 text-[10px] font-light leading-relaxed">
                    {work.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop layout (side by side) */}
          <div className="hidden md:block">
            {data.works.map((work: Work, idx: number) => (
              <div 
                className={`max-w-6xl mx-auto ${idx !== data.works.length - 1 ? 'mb-16 lg:mb-24' : ''}`} 
                key={work.title}
              >
                <div className="flex flex-row items-start gap-8 lg:gap-12">
                  {/* Work image */}
                  <div className="w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Work description */}
                  <div className="w-1/2">
                    <h3 className="text-lg lg:text-xl font-medium mb-4 lg:mb-6 tracking-wide uppercase">{work.title}</h3>
                    <div className="space-y-3 lg:space-y-4 text-xs lg:text-sm font-light leading-relaxed">
                      {work.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-4 sm:py-6 md:py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 text-[10px] sm:text-xs">
            {data.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}