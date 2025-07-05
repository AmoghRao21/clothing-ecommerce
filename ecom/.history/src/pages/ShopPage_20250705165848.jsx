import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tee1 from '../assets/T-shirt1.png';
import tee2 from '../assets/Anime-web.png';
import tee3 from '../assets/Mentalty - 1.png';
import tee4 from '../assets/T-shirt6.png';

const products = [
  {
    id: 1,
    name: 'Street Blood Tee',
    image: tee1,
    price: '₹999',
    tag: 'Streetwear'
  },
  {
    id: 2,
    name: 'Anime Rage Tee',
    image: tee2,
    price: '₹899',
    tag: 'Anime'
  },
  {
    id: 3,
    name: 'Mythic Warrior Tee',
    image: tee3,
    price: '₹1099',
    tag: 'Heroes'
  },
  {
    id: 4,
    name: 'Visual Heat Tee',
    image: tee4,
    price: '₹849',
    tag: 'Aesthetic'
  }
];

const ShopPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.tag === filter);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-pixel tracking-wide">
        SHOP THE VIBE
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'Streetwear', 'Anime', 'Heroes', 'Aesthetic'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-semibold border transition duration-300 text-sm md:text-base ${
              filter === cat
                ? 'bg-amber-400 border-transparent text-black'
                : 'border-zinc-600 hover:border-amber-400 hover:text-amber-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-zinc-700 hover:border-red-500 overflow-hidden shadow-xl hover:shadow-red-500/20 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-amber-300 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.price}</p>
              <button className="mt-3 bg-amber-400 hover:bg-yellow-500 text-black px-4 py-2 text-xs rounded-full transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
