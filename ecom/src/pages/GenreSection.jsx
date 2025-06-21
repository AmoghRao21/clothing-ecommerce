import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import tee1 from '../assets/T-shirt1.png';
import tee2 from '../assets/Anime-web.png';
import tee3 from '../assets/Mentalty - 1.png';
import tee4 from '../assets/T-shirt6.png';
import useSound from 'use-sound';
import swipeSound from '../assets/swish.mp3';
import animeSound from '../assets/anime.mp3';
import streetSound from '../assets/street.mp3';
import mythicSound from '../assets/mythical.mp3';
import visualSound from '../assets/visual.mp3';

const vibeCategories = [
  {
    title: 'Street Blood',
    subtitle: 'Born in the Streets',
    image: tee1,
    link: '/collections/streetwear',
    sound: streetSound
  },
  {
    title: 'Anime Rage',
    subtitle: 'Unleash the Power Within',
    image: tee2,
    link: '/collections/anime',
    sound: animeSound
  },
  {
    title: 'Mythic Heroes',
    subtitle: 'Fuel Your Fandom',
    image: tee3,
    link: '/collections/heroes',
    sound: mythicSound
  },
  {
    title: 'Visual Heat',
    subtitle: 'Design That Speaks',
    image: tee4,
    link: '/collections/aesthetic',
    sound: visualSound
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 12 }
  }
};

const ChooseYourVibe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();
  const [play] = useSound(swipeSound, { volume: 0.15 });

  const [playAnime] = useSound(animeSound, { volume: 0.2, interrupt: true });
  const [playStreet] = useSound(streetSound, { volume: 0.2, interrupt: true });
  const [playMythic] = useSound(mythicSound, { volume: 0.2, interrupt: true });
  const [playVisual] = useSound(visualSound, { volume: 0.2, interrupt: true });

  const [hasPlayed, setHasPlayed] = useState({});
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start('show');
      setTimeout(() => setShowCurtain(false), 1200);
    }
  }, [isInView, controls]);

  const handleHoverSound = (title) => {
    if (hasPlayed[title]) return;
    setHasPlayed((prev) => ({ ...prev, [title]: true }));

    switch (title) {
      case 'Anime Rage':
        playAnime();
        break;
      case 'Street Blood':
        playStreet();
        break;
      case 'Mythic Heroes':
        playMythic();
        break;
      case 'Visual Heat':
        playVisual();
        break;
      default:
        break;
    }

    setTimeout(() => {
      // Audio is clipped via interrupt and short duration
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-black text-white"
    >
      {/* Curtain Reveal */}
      {showCurtain && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-40 bg-black origin-top pointer-events-none"
        />
      )}

      <div className="relative z-10">
        <h2 className="font-nice text-4xl md:text-5xl font-bold text-center mb-16 font-pixel tracking-wide">
          CHOOSE YOUR VIBE
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="px-6 md:px-16 flex md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {vibeCategories.map((item, index) => (
            <motion.a
              variants={itemVariants}
              href={item.link}
              key={index}
              className="group flex-shrink-0 md:flex-shrink rounded-3xl border border-zinc-800 hover:border-red-600 w-full md:w-auto snap-start transition-transform duration-500 bg-gradient-to-b from-zinc-900 to-black shadow-xl hover:shadow-red-500/30"
              onMouseEnter={() => {
                play();
                handleHoverSound(item.title);
              }}
            >
              <div className="relative w-full h-[450px] transform-gpu group-hover:[transform:perspective(1000px)_rotateX(4deg)] transition-transform duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-t-3xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-2xl font-extrabold text-red-500 font-pixel drop-shadow-md">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 font-medium tracking-wide">{item.subtitle}</p>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-amber-400 hover:bg-yellow-500 text-white px-4 py-2 text-xs rounded-full"
                  >
                    Shop Now
                  </motion.button>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-amber-300 mix-blend-screen transition duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-tl-xl blur-lg group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseYourVibe;
