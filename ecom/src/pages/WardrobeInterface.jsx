import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bgImage from '../assets/bg.jpeg';
import tee1 from '../assets/T-shirt1.png';
import tee2 from '../assets/T-shirt6.png';
import tee3 from '../assets/T-shirt5.png';
import tee4 from '../assets/T-shirt3.png';

// 📱 Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const CurtainEffect = ({ isOpen, onComplete }) => {
  const curtainTransition = {
    duration: 2.2,
    ease: [0.76, 0, 0.24, 1],
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onComplete, curtainTransition.duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onComplete]);

  return (
    <AnimatePresence>
      {!isOpen && (
        <>
          <motion.div
            className="fixed top-0 left-0 h-full w-1/2 z-50"
            style={{ background: 'linear-gradient(to right, #0f0f0f, #1a0000)', transformOrigin: 'right' }}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            transition={curtainTransition}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-1/2 z-50"
            style={{ background: 'linear-gradient(to left, #0f0f0f, #1a0000)', transformOrigin: 'left' }}
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            exit={{ x: '100%' }}
            transition={curtainTransition}
          />
        </>
      )}
    </AnimatePresence>
  );
};

const Tee = ({ src, alt, index, isVisible }) => {
  const getTransform = (i) => {
    const transforms = [
      'translateX(-260px) translateZ(-800px) rotateY(-20deg)',
      'translateX(-130px) translateZ(-400px) rotateY(-10deg)',
      'translateX(0px) translateZ(400px) rotateY(-3deg) rotateX(2deg)',
      'translateX(130px) translateZ(-400px) rotateY(10deg)',
      'translateX(260px) translateZ(-800px) rotateY(20deg)'
    ];
    return transforms[i] || 'translateZ(0px)';
  };

  const delays = [3.8, 2.8, 1.2, 2.8, 3.8];

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, transform: 'translateX(0px) translateZ(0px)' }}
      animate={isVisible ? { opacity: 1, transform: getTransform(index) } : {}}
      transition={{ delay: delays[index], duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="rounded-3xl overflow-hidden bg-white w-[200px] sm:w-[220px] md:w-[240px]"
        whileHover={{ scale: 1.05 }}
        style={{
          transition: 'transform 0.4s ease-out',
          boxShadow: index === 2 ? '0px 50px 120px rgba(255,255,255,0.12)' : '0px 10px 40px rgba(0,0,0,0.25)'
        }}
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover rounded-3xl" />
      </motion.div>
    </motion.div>
  );
};

const Wardrobe = ({ showTees }) => {
  const isMobile = useIsMobile();

  const teeData = [
    { src: tee1, alt: 'Mentality Lion Tee' },
    { src: tee2, alt: 'Mentality Warrior Tee' },
    { src: tee3, alt: 'Anime Dark Sword Tee' },
    { src: tee4, alt: 'Attitude Hoodie Tee' },
    { src: tee1, alt: 'Repeat Tee' },
  ];

  // Show only center 3 on mobile
  const visibleTees = isMobile ? teeData.slice(1, 4) : teeData;

  return (
    <motion.div
      className="relative min-h-screen bg-black overflow-hidden"
      initial={{ scale: 0.96 }}
      animate={showTees ? { scale: 1 } : {}}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 py-28">
        <motion.h1
          className="font-nice text-5xl sm:text-6xl text-center font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showTees ? 1 : 0, y: showTees ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          NEW LAUNCHES
        </motion.h1>

        <div
          className="flex justify-center items-end gap-2 px-4 md:px-10 lg:px-16"
          style={{ perspective: '3000px' }}
        >
          {visibleTees.map((tee, index) => (
            <Tee key={index} src={tee.src} alt={tee.alt} index={index} isVisible={showTees} />
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: showTees ? 1 : 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <p className="text-gray-400 text-lg tracking-wider">
            PREMIUM STREETWEAR • LIMITED EDITION
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WardrobeInterface = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showTees, setShowTees] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCurtainOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCurtainComplete = () => setShowTees(true);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <Wardrobe showTees={showTees} />
      <CurtainEffect isOpen={curtainOpen} onComplete={handleCurtainComplete} />
    </div>
  );
};

export default WardrobeInterface;
