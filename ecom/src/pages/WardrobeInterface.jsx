import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bgImage from '../assets/bg.jpeg';
import tee1 from '../assets/Mentalty - 1.png';
import tee2 from '../assets/Mentalty - 2.png';
import tee3 from '../assets/Mentalty - 1.png';
import tee4 from '../assets/Mentalty - 2.png';

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
  const waveVariants = {
    wave: {
      rotate: [-0.5, 0.5, -0.5],
      y: [0, -2, 0],
      transition: {
        duration: 4 + index * 0.4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.2,
      },
    },
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateX: -10,
      rotateY: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.3,
      },
    },
  };

  const rotateY = [-3, 0, 3, 0][index % 4];

  return (
    <motion.div
      className="relative group transform-style-preserve-3d"
      variants={revealVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      whileHover={{ rotateY: rotateY + 6, rotateX: 3, scale: 1.03, transition: { duration: 0.5 } }}
      style={{ perspective: 1200, transformStyle: 'preserve-3d', transform: `rotateY(${rotateY}deg)` }}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden"
        variants={waveVariants}
        animate={isVisible ? 'wave' : 'none'}
        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.4)', transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent blur-sm transform translate-y-2 rounded-lg" />
        <img
          src={src}
          alt={alt}
          className="w-full h-auto relative z-10"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', transform: 'translateZ(20px)' }}
        />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60 blur-sm" />
      </motion.div>
    </motion.div>
  );
};

const Wardrobe = ({ showTees }) => {
  const teeData = [
    { src: tee1, alt: 'Mentality Lion Tee' },
    { src: tee2, alt: 'Mentality Warrior Tee' },
    { src: tee3, alt: 'Anime Dark Sword Tee' },
    { src: tee4, alt: 'Attitude Hoodie Tee' },
  ];

  return (
    <motion.div
      className="relative min-h-screen bg-black overflow-hidden"
      initial={{ scale: 0.98 }}
      animate={{ scale: showTees ? 1 : 0.98 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${bgImage})`, backgroundBlendMode: 'multiply' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.h1
          className=" font-nice text-6xl font-bold text-center mb-16 mt-5 bg-gradient-to-r from-yellow-200 via-yellow-500 to-gold bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showTees ? 1 : 0, y: showTees ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          NEW LAUNCHES
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl px-4 mx-auto">
          {teeData.map((tee, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-black/40 rounded-2xl backdrop-blur-sm border border-gray-700/30" />
              <div className="relative p-2 sm:p-4 lg:p-6 rounded-2xl">
                <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full opacity-60" />
                <div className="mt-8">
                  <Tee src={tee.src} alt={tee.alt} index={index} isVisible={showTees} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: showTees ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
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
    const timer = setTimeout(() => {
      setCurtainOpen(true);
    }, 500);
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
