import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <div className="text-white text-center mt-10 font-semibold text-lg">
        Product not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-yellow-200 px-6 md:px-20 py-28 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start bg-gradient-to-br from-[#1a1a1a] to-black p-10 rounded-3xl border border-yellow-500 shadow-[0_0_60px_rgba(255,215,0,0.3)] relative overflow-hidden">
        {/* Golden Glow Effects */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500 rounded-full blur-2xl opacity-5 animate-pulse" />

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.2)] object-cover"
          />
        </motion.div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-yellow-400 tracking-wider leading-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {product.title}
          </motion.h1>

          <p className="text-lg text-yellow-300 italic">Category: {product.category}</p>
          <p className="text-4xl font-black text-yellow-500 tracking-wider">₹{product.price}</p>

          <motion.p
            className="text-md text-yellow-100 tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            This is more than just clothing—it's a manifestation of luxury and rebellion. Own the streets, conventions, and every spotlight with this handpicked essential from the <span className="font-bold text-yellow-400">DARK ELK</span> signature drop. Crafted for visionaries who dare to stand out.
          </motion.p>

          <div className="bg-zinc-800/30 p-4 rounded-xl border border-yellow-900/30">
            <h4 className="text-yellow-400 text-lg font-semibold mb-2">Product Highlights:</h4>
            <ul className="text-sm text-yellow-300 space-y-1 pl-4 list-disc">
              <li>100% Ultra-soft Premium Cotton</li>
              <li>Luxury Fade-Proof Design Print</li>
              <li>Designed & Made in India</li>
              <li>Ships within 24 hours</li>
              <li>Limited Edition – No Restocks</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Add to Cart
            </button>
            <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-500 hover:text-black text-yellow-400 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300">
              Buy Now
            </button>
          </div>

          {/* Trust Badge */}
          <div className="pt-6 text-sm text-yellow-300">
            ✅ Secure Checkout &nbsp; | &nbsp; 🚚 Free Shipping Over ₹999 &nbsp; | &nbsp; 💯 Quality Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
