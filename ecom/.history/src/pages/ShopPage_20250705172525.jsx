import React, { useState } from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      <h1 className="text-3xl font-bold text-center text-red-400 mb-10">Explore Our Collection</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-white w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-white w-full md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option value="Anime">Anime</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Aesthetic">Aesthetic</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 text-white w-full md:w-1/4"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product, index) => (
          <Link
            to={`/product/${product.id}`}
            key={index}
            className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-4 hover:shadow-red-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-1 text-red-400">{product.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{product.category}</p>
            <p className="text-lg font-semibold">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;