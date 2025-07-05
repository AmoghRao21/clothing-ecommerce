// pages/ShopPage.jsx
import React, { useState } from 'react';
import productsData from '../data/products';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wider">Shop the Collection</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;