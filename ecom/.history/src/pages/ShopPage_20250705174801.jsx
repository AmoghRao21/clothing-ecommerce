import React, { useState } from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShopPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');

  const filteredProducts = products.filter((product) => {
    return (
      (category === 'All' || product.category === category) &&
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'low') return a.price - b.price;
    if (sort === 'high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-yellow-200 px-6 md:px-20 py-28">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-yellow-400 mb-12 font-pixel"
      >
        Explore Our Collection
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center bg-zinc-900 p-6 rounded-xl shadow-inner">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-yellow-200 w-full md:w-1/3 focus:outline-none focus:ring focus:ring-yellow-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-yellow-200 w-full md:w-1/4 focus:outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Anime">Anime</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Aesthetic">Aesthetic</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-yellow-200 w-full md:w-1/4 focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-zinc-800 to-black rounded-2xl border border-yellow-700 p-4 hover:shadow-yellow-400/20 hover:scale-[1.02] transition-all duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
            </Link>
            <h3 className="text-xl font-bold mb-1 text-yellow-400">{product.title}</h3>
            <p className="text-sm text-yellow-300 mb-2">{product.category}</p>
            <p className="text-lg font-semibold mb-4">₹{product.price}</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm">
                Add to Cart
              </button>
              <button className="flex-1 bg-black border border-yellow-400 hover:bg-yellow-700 hover:text-black text-yellow-400 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;