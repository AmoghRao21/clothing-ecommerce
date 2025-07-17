import React, { useState } from 'react';

const CartPage = () => {
  // Demo cart items with premium streetwear products
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "MENTALITY Dark Warrior Tee",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      quantity: 1,
      size: "L",
      rating: 4.8,
      reviews: 124,
      description: "Premium cotton blend with dark warrior graphic",
      stockStatus: "Only 3 left"
    },
    {
      id: 2,
      title: "MENTALITY Skull King Hoodie",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
      quantity: 2,
      size: "XL",
      rating: 4.9,
      reviews: 89,
      description: "Oversized fit with embroidered skull design"
    },
    {
      id: 3,
      title: "MENTALITY Death Crown Tee",
      price: 54.99,
      originalPrice: 74.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center",
      quantity: 1,
      size: "M",
      rating: 4.7,
      reviews: 156,
      description: "Dark aesthetic with premium finishing"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const moveToWishlist = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      // In a real app, you'd save to wishlist storage/API
      alert(`"${item.title}" has been moved to your wishlist`);
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateOriginalTotal = () => {
    return cartItems.reduce((total, item) => total + (item.originalPrice * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with neon glow effect */}
      <div className="relative bg-gradient-to-r from-black via-zinc-900 to-black border-b border-amber-500/20 px-4 sm:px-6 md:px-20 py-6 sm:py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5"></div>
        <div className="relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
            SHOPPING CART
          </h1>
          <p className="text-amber-300/90 text-xs sm:text-sm font-medium tracking-wide">
            PREMIUM STREETWEAR • CURATED FOR LEGENDS
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-20 py-8 sm:py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-6 opacity-50">🛒</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 text-base sm:text-lg">Add some legendary pieces to get started</p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-3 space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-zinc-900/80 to-black/90 border border-zinc-700/50 rounded-lg p-4 sm:p-6 hover:border-amber-500/30 transition-all duration-500 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="relative group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-lg border border-zinc-700/50 group-hover:border-amber-500/50 transition-all duration-300 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Product Title */}
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Stock Status & Product Info Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm bg-zinc-800/80 text-amber-300 px-3 py-1 rounded-full border border-zinc-700/50 font-medium">
                            Size: {item.size}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-amber-400 text-sm">★</span>
                            <span className="text-gray-300 text-sm font-medium">{item.rating}</span>
                            <span className="text-gray-500 text-sm">({item.reviews})</span>
                          </div>
                        </div>
                        
                        {/* Stock Status */}
                        {item.stockStatus && (
                          <span className="text-sm bg-red-600/30 text-red-300 px-3 py-1 rounded-lg border border-red-500/50 font-bold animate-pulse shadow-lg shadow-red-500/20 inline-flex items-center gap-2 w-fit">
                            <span className="text-sm">⚠️</span> {item.stockStatus}
                          </span>
                        )}
                      </div>
                      
                      {/* Price & Quantity Section */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-bold text-2xl md:text-3xl">
                            ${item.price}
                          </span>
                          <span className="text-gray-500 line-through text-lg md:text-xl">
                            ${item.originalPrice}
                          </span>
                          <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                            SALE
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center sm:justify-end">
                          <div className="flex items-center bg-zinc-800/80 border border-zinc-700/50 rounded-lg overflow-hidden shadow-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-4 py-2 text-amber-400 hover:bg-zinc-700/50 transition-colors text-xl font-bold hover:text-amber-300"
                            >
                              −
                            </button>
                            <span className="px-6 py-2 text-white font-bold bg-zinc-900/50 min-w-[3.5rem] text-center text-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-4 py-2 text-amber-400 hover:bg-zinc-700/50 transition-colors text-xl font-bold hover:text-amber-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-700/30">
                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-all duration-200 px-4 py-2.5 hover:bg-amber-400/10 rounded-lg font-medium border border-amber-400/20 hover:border-amber-400/40"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Move to Wishlist
                        </button>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center justify-center gap-2 text-gray-400 hover:text-red-400 transition-all duration-200 px-4 py-2.5 hover:bg-red-400/10 rounded-lg font-medium border border-gray-600/30 hover:border-red-400/40"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1">
              <div className="bg-gradient-to-br from-zinc-900/90 to-black/95 border border-zinc-700/50 rounded-lg p-6 sm:p-8 xl:sticky xl:top-8 shadow-2xl backdrop-blur-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 pb-4 border-b border-zinc-700/50">
                  Order Summary
                </h2>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span className="font-semibold">${calculateOriginalTotal()}</span>
                  </div>
                  <div className="flex justify-between text-green-400 text-sm sm:text-base">
                    <span>You Save</span>
                    <span className="font-semibold">-${(calculateOriginalTotal() - calculateTotal()).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                    <span>Shipping</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="border-t border-zinc-700/50 pt-4 sm:pt-6">
                    <div className="flex justify-between text-xl sm:text-2xl font-bold text-white">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 mb-3 sm:mb-4 text-sm sm:text-base">
                  PROCEED TO CHECKOUT
                </button>
                
                <button className="w-full border border-zinc-700/50 text-amber-400 font-semibold py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 text-sm sm:text-base">
                  CONTINUE SHOPPING
                </button>
                
                <div className="mt-6 sm:mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;