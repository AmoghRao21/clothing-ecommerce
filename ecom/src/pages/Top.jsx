import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import top1 from '../assets/T-shirt1.png';
import top2 from '../assets/T-shirt5.png';
import top3 from '../assets/T-shirt3.png';
import top4 from '../assets/T-shirt6.png';
import top5 from '../assets/mentality1.png';

const TopSellers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);
  
  // Sample data - replace with your actual images
  const sellers = [
    { image: top1, title: 'Fire Samurai', rank: '#1' },
    { image: top2, title: 'Neon Mindset', rank: '#2' },
    { image: top3, title: 'Divine Beast', rank: '#3' },
    { image: top4, title: 'Urban Flame', rank: '#4' },
    { image: top5, title: 'Royal Skull', rank: '#5' },
  ];

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setScrollPosition(scrollLeft);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 350;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-black"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-radial from-orange-500/8 to-transparent blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-full mx-auto">
        {/* Enhanced Header with Dark Elk brand styling */}
        <div className="text-center mb-12 px-4">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                TOP
              </span>
              <span className="ml-4 text-white">SELLERS</span>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full shadow-lg shadow-amber-500/30"></div>
          </div>
          <p className="text-gray-300 text-xl mt-8 font-medium tracking-wide max-w-2xl mx-auto">
            The streets have spoken. <span className="text-amber-400 font-bold">These are the legends.</span>
          </p>
        </div>

        {/* Enhanced Carousel Container */}
        <div className="relative px-8 md:px-12 lg:px-16">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300 group border border-amber-500/30 hover:border-amber-400/60 shadow-2xl hover:shadow-amber-500/20"
            >
              <ChevronLeft className="w-7 h-7 text-white group-hover:text-amber-300 transition-colors" />
            </button>
          )}
          
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300 group border border-amber-500/30 hover:border-amber-400/60 shadow-2xl hover:shadow-amber-500/20"
            >
              <ChevronRight className="w-7 h-7 text-white group-hover:text-amber-300 transition-colors" />
            </button>
          )}

          {/* Gradient Fades - Reduced width */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/60 to-transparent z-20 pointer-events-none"></div>

          {/* Enhanced Carousel - Better spacing */}
          <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sellers.map((seller, index) => (
              <article 
                key={index}
                className="relative flex-shrink-0 w-80 sm:w-96 md:w-80 lg:w-96 xl:w-[400px] snap-start group cursor-pointer"
              >
                {/* Enhanced Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-600/40 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/15 group-hover:scale-[1.02] transform-gpu">
                  
                  {/* Enhanced rank number with premium styling */}
                  <div className="absolute -top-3 -right-3 z-10 w-18 h-18 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl border-3 border-black/70 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-black font-black text-xl drop-shadow-lg">
                      {seller.rank}
                    </span>
                  </div>

                  {/* Enhanced large rank number background - golden color */}
                  <div className="absolute top-6 right-6 z-5 pointer-events-none">
                    <div 
                      className="font-black text-[100px] sm:text-[120px] leading-none select-none"
                      style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 30%, #f59e0b 70%, #d97706 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.25,
                        textShadow: '0 0 30px rgba(251, 191, 36, 0.15)',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: '900',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {seller.rank.replace('#', '')}
                    </div>
                  </div>

                  {/* Enhanced Product Image - Better proportions */}
                  <div className="relative p-4 pt-8 pb-5">
                    <div className="aspect-square w-full mx-auto mb-4 relative group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={seller.image} 
                        alt={`${seller.title} - Top selling t-shirt ${seller.rank}`}
                        className="w-full h-full object-cover rounded-xl shadow-xl"
                      />
                      
                      {/* Enhanced overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                      
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{
                             boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), inset 0 0 0 1px rgba(251, 191, 36, 0.1)'
                           }}>
                      </div>
                    </div>

                    {/* Enhanced Product Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-100 transition-colors duration-300 tracking-tight leading-tight">
                        {seller.title}
                      </h3>
                    </div>
                  </div>

                  {/* Enhanced premium border glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: 'linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)',
                         boxShadow: 'inset 0 0 0 1px rgba(251, 191, 36, 0.2)'
                       }}>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TopSellers;