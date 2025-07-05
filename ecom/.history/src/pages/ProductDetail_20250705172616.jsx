import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="text-white text-center mt-10">Product not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-red-400">{product.title}</h1>
          <p className="text-lg text-gray-400">{product.category}</p>
          <p className="text-2xl font-semibold">₹{product.price}</p>
          <p className="text-sm text-gray-300">This is a premium t-shirt from our {product.category} collection. Perfect for fans of style and storytelling.</p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full text-white font-semibold transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
