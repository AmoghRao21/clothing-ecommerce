import React, { useState } from 'react';
import { Heart, X, ShoppingCart, Star, Eye, Share2, Filter } from 'lucide-react';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "MENTALITY Dark Warrior Tee",
      brand: "Premium Streetwear Collection",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/400",
      inStock: true,
      sale: true,
      category: "Streetwear"
    },
    {
      id: 2,
      name: "MENTALITY Skull King Hoodie",
      brand: "Premium Streetwear Collection",
      price: 89.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/400",
      inStock: true,
      sale: false,
      category: "Streetwear"
    },
    {
      id: 3,
      name: "MENTALITY Death Crown Tee",
      brand: "Premium Streetwear Collection",
      price: 54.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/400",
      inStock: false,
      sale: false,
      category: "Streetwear"
    },
    {
      id: 4,
      name: "MENTALITY Reaper King Hoodie",
      brand: "Premium Streetwear Collection",
      price: 94.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 73,
      image: "/api/placeholder/300/400",
      inStock: true,
      sale: false,
      category: "Streetwear"
    },
    {
      id: 5,
      name: "Dark Aesthetic Premium Tee",
      brand: "Premium Streetwear Collection",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 92,
      image: "/api/placeholder/300/400",
      inStock: true,
      sale: true,
      category: "Aesthetic"
    },
    {
      id: 6,
      name: "Gothic Design Premium Hoodie",
      brand: "Premium Streetwear Collection",
      price: 79.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 67,
      image: "/api/placeholder/300/400",
      inStock: false,
      sale: false,
      category: "Aesthetic"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Streetwear', 'Aesthetic', 'Marvel', 'Anime'];

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    console.log('Added to cart:', item);
  };

  const filteredItems = selectedCategory === 'All' 
    ? wishlistItems 
    : wishlistItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">DE</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  DARK ELK
                </h1>
                <p className="text-gray-400 text-sm font-medium tracking-wider">
                  PREMIUM STREETWEAR • CURATED FOR LEGENDS
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium">HOME</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium">SHOP</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium">FITFEED</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium">ACCOUNT</a>
              <a href="#" className="text-yellow-400 font-bold relative">
                WISHLIST
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium">CART</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            MY WISHLIST
          </h2>
          <p className="text-xl text-gray-300 mb-2">CURATED PREMIUM COLLECTION</p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-400 font-bold text-lg">({filteredItems.length} ITEMS)</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Heart className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-200">Your wishlist is empty</h3>
            <p className="text-gray-400 text-lg mb-8">Discover premium streetwear that speaks to your soul</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              EXPLORE COLLECTIONS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative">
                {/* Card */}
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-yellow-500/20 hover:border-yellow-400/50 hover:scale-105">
                  {/* Remove & Share Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <button className="w-10 h-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-10 h-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Sale Badge */}
                  {item.sale && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      SALE
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Neon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-4">
                        <button className="w-12 h-12 bg-yellow-400 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                          <Eye className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => addToCart(item)}
                          disabled={!item.inStock}
                          className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                            item.inStock 
                              ? 'bg-green-500 bg-opacity-20 hover:bg-green-500 hover:text-black' 
                              : 'bg-gray-600 bg-opacity-20 cursor-not-allowed'
                          }`}
                        >
                          <ShoppingCart className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 font-medium">{item.brand}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-4 h-4 ${star <= Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-yellow-400 text-sm ml-2 font-medium">{item.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">({item.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through ml-3 text-lg">${item.originalPrice}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      {item.inStock ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <div className="space-y-2">
                          <div className="text-center py-2">
                            <span className="text-red-400 font-bold">OUT OF STOCK</span>
                          </div>
                          <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-full font-bold hover:bg-gray-600 hover:text-yellow-400 transition-all duration-300">
                            NOTIFY WHEN AVAILABLE
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* You Might Also Like */}
        {filteredItems.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                You Might Also <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Like</span>
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
                <span className="text-yellow-400 font-bold">RECOMMENDED</span>
                <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-yellow-500/20">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="text-gray-600 font-bold">PREMIUM ITEM {i}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      Exclusive Design {i}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">Premium Collection</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        ${(Math.random() * 50 + 30).toFixed(2)}
                      </span>
                      <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all duration-300">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default WishlistPage;