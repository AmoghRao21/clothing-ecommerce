import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import top1 from '../assets/T-shirt1.png';
import top2 from '../assets/T-shirt5.png';
import top3 from '../assets/T-shirt3.png';
import top4 from '../assets/T-shirt6.png';
import top5 from '../assets/mentality1.png';

const sellers = [
  { image: top1, title: 'Fire Samurai', rank: '#1' },
  { image: top2, title: 'Neon Mindset', rank: '#2' },
  { image: top3, title: 'Divine Beast', rank: '#3' },
  { image: top4, title: 'Urban Flame', rank: '#4' },
  { image: top5, title: 'Royal Skull', rank: '#5' },
  { image: top1, title: 'Fire Samurai', rank: '#1' },
  { image: top2, title: 'Neon Mindset', rank: '#2' },
  { image: top3, title: 'Divine Beast', rank: '#3' },
];

const TopSellers = () => {
  const marqueeRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartScroll(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 py-24 px-0 bg-gradient-to-br from-black to-[#120000] text-white overflow-hidden">
      <motion.h2
        className="font-nice text-center text-4xl sm:text-5xl font-bold tracking-wide mb-16 bg-white text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Top Sellers
      </motion.h2>

      <div className="relative w-full overflow-x-auto scrollbar-hide cursor-grab">
        <div
          ref={marqueeRef}
          className={`flex gap-10 group ${startScroll ? 'animate-marquee' : ''}`}
          onMouseEnter={() => marqueeRef.current.style.animationPlayState = 'paused'}
          onMouseLeave={() => marqueeRef.current.style.animationPlayState = 'running'}
          style={{
            animation: startScroll ? 'marquee 8s linear infinite alternate' : 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {[...sellers, ...sellers].map((item, index) => {
            const isTop3 = ['#1', '#2', '#3'].includes(item.rank);
            return (
              <motion.div
                key={index}
                className={`min-w-[240px] sm:min-w-[280px] md:min-w-[320px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-black via-[#1a0000] to-[#0f0f0f] p-5 border border-red-800/20 relative backdrop-blur-md ${isTop3 ? 'scale-105 border-2 border-amber-300 shadow-amber-500/30 shadow-lg' : ''}`}
              >
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-xs font-bold rounded-full shadow-md z-10">
                  {item.rank}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-[0_0_30px_rgba(255,0,0,0.4)] z-0"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="mt-20 text-center text-sm text-gray-400 tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Limited quantities. Premium quality. Made for the bold.
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TopSellers;
