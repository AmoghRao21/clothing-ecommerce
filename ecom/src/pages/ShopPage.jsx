import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, X, Menu, Heart, Eye } from 'lucide-react';

const DarkElkShop = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const genres = [
    { id: 'All', label: 'All Drops', icon: '🔥' },
    { id: 'Marvel', label: 'Marvel', icon: '🦸' },
    { id: 'Streetwear', label: 'Streetwear', icon: '👕' },
    { id: 'Aesthetic', label: 'Aesthetic', icon: '🌙' },
    { id: 'Anime', label: 'Anime', icon: '⚔️' }
  ];

  const products = [
    {
      id: 1,
      title: "MENTALITY Dark Warrior Tee",
      price: 49.99,
      originalPrice: 69.99,
      image: "/src/assets/mentality1.png",
      genre: "Streetwear",
      rating: 4.8,
      reviews: 124,
      isHot: true,
      description: "Premium cotton blend with dark warrior graphic"
    },
    {
      id: 2,
      title: "MENTALITY Skull King Hoodie",
      price: 89.99,
      image: "/src/assets/mentality2.png",
      genre: "Streetwear",
      rating: 4.9,
      reviews: 89,
      description: "Oversized fit with embroidered skull design"
    },
    {
      id: 3,
      title: "MENTALITY Death Crown Tee",
      price: 54.99,
      image: "/src/assets/Mentaly - 1.png",
      genre: "Aesthetic",
      rating: 4.7,
      reviews: 156,
      description: "Dark aesthetic with premium finishing"
    },
    {
      id: 4,
      title: "MENTALITY Reaper King Hoodie",
      price: 94.99,
      image: "/src/assets/Mentaly - 2.png",
      genre: "Aesthetic",
      rating: 4.6,
      reviews: 73,
      description: "Limited edition reaper design"
    },
    {
      id: 5,
      title: "Vintage Grunge Distressed Tee",
      price: 59.99,
      image: "/src/assets/T-shirt1.png",
      genre: "Streetwear",
      rating: 4.8,
      reviews: 92,
      description: "Authentic vintage distressed finish"
    },
    {
      id: 6,
      title: "Urban Edge Graphic Tee",
      price: 47.99,
      image: "/src/assets/T-shirt2.png",
      genre: "Streetwear",
      rating: 4.9,
      reviews: 187,
      description: "Bold urban graphics for the streets"
    },
    {
      id: 7,
      title: "Retro Vibe Classic Tee",
      price: 42.99,
      image: "/src/assets/T-shirt5.png",
      genre: "Aesthetic",
      rating: 4.7,
      reviews: 234,
      description: "Throwback design with modern fit"
    },
    {
      id: 8,
      title: "Street Legend Graphic Tee",
      price: 52.99,
      image: "/src/assets/T-shirt6.png",
      genre: "Streetwear",
      rating: 4.5,
      reviews: 67,
      description: "For the legends of the street"
    }
  ];

  const filteredProducts = activeGenre === 'All' 
    ? products 
    : products.filter(product => product.genre === activeGenre);

  const ProductCard = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleAddToCart = () => {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    };

    return (
      <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:scale-[1.02]">
        
        {/* Product Image */}
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Heart Icon */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>

          {/* Quick View */}
          <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-400/30 transition-all duration-300">
              <Eye className="w-5 h-5 text-yellow-400" />
            </button>
          </div>

          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback */}
          <div className="w-full h-full absolute inset-0 flex items-center justify-center text-gray-500 hidden">
            <div className="text-center">
              <div className="text-6xl mb-2">👕</div>
              <div className="text-sm">Product Image</div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Quick Add
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 relative z-10">
          <div className="mb-3">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors line-clamp-1">
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {product.description}
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 text-sm ml-1 font-semibold">{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
              )}
            </div>
            {product.originalPrice && (
              <div className="bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs font-bold">
                SALE
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 transform ${
              isAdded 
                ? 'bg-green-500 text-white scale-95' 
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center justify-center gap-2">
                ✓ Added to Cart
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </span>
            )}
          </button>
        </div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-black to-gray-900 border-r border-gray-800/50 backdrop-blur-sm transform transition-all duration-500 ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      <div className="p-6">
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar Title */}
        <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          <Filter className="w-5 h-5 text-yellow-400" />
          Collections
        </h2>

        {/* Genre Filters */}
        <div className="space-y-3">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => {
                setActiveGenre(genre.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                activeGenre === genre.id
                  ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-white shadow-lg shadow-yellow-400/10 border border-yellow-400/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/80 hover:text-white border border-transparent hover:border-gray-700'
              }`}
            >
              <span className="text-2xl">{genre.icon}</span>
              <span className="font-semibold">{genre.label}</span>
              {activeGenre === genre.id && (
                <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        

        {/* Newsletter */}
        <div className="mt-6 p-4 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-2xl border border-yellow-400/20">
          <div className="text-center">
            <div className="text-sm text-yellow-400 font-semibold mb-2">🔥 Exclusive Drops</div>
            <div className="text-xs text-gray-300">Get notified about new releases</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">DE</span>
              </div>
              <h1 className="text-2xl font-bold text-white">DARK ELK</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text mb-3">
              {activeGenre === 'All' ? 'NEW DROPS' : activeGenre.toUpperCase()}
            </h2>
            <p className="text-gray-400 text-lg">PREMIUM STREETWEAR • CURATED FOR LEGENDS</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-3">No products found</h3>
              <p className="text-gray-400 text-lg">Try selecting a different collection</p>
            </div>
          )}
        </main>
      </div>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-30">
        <button className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold shadow-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-110 group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💬</span>
        </button>
      </div>
    </div>
  );
};

export default DarkElkShop;




// /*import React, { useState } from 'react';
// import { ShoppingCart, Star, Filter, Heart, Eye } from 'lucide-react';

// const DarkElkShop = () => {
//   const [activeGenre, setActiveGenre] = useState('All');

//   const genres = [
//     { id: 'All', label: 'All Drops', icon: '🔥' },
//     { id: 'Marvel', label: 'Marvel', icon: '🦸' },
//     { id: 'Streetwear', label: 'Streetwear', icon: '👕' },
//     { id: 'Aesthetic', label: 'Aesthetic', icon: '🌙' },
//     { id: 'Anime', label: 'Anime', icon: '⚔️' }
//   ];

//   const products = [
//     {
//       id: 1,
//       title: "MENTALITY Dark Warrior Tee",
//       price: 49.99,
//       originalPrice: 69.99,
//       image: "/src/assets/mentality1.png",
//       genre: "Streetwear",
//       rating: 4.8,
//       reviews: 124,
//       isHot: true,
//       description: "Premium cotton blend with dark warrior graphic"
//     },
//     {
//       id: 2,
//       title: "MENTALITY Skull King Hoodie",
//       price: 89.99,
//       image: "/src/assets/mentality2.png",
//       genre: "Streetwear",
//       rating: 4.9,
//       reviews: 89,
//       description: "Oversized fit with embroidered skull design"
//     },
//     {
//       id: 3,
//       title: "MENTALITY Death Crown Tee",
//       price: 54.99,
//       image: "/src/assets/Mentaly - 1.png",
//       genre: "Aesthetic",
//       rating: 4.7,
//       reviews: 156,
//       description: "Dark aesthetic with premium finishing"
//     },
//     {
//       id: 4,
//       title: "MENTALITY Reaper King Hoodie",
//       price: 94.99,
//       image: "/src/assets/Mentaly - 2.png",
//       genre: "Aesthetic",
//       rating: 4.6,
//       reviews: 73,
//       description: "Limited edition reaper design"
//     },
//     {
//       id: 5,
//       title: "Vintage Grunge Distressed Tee",
//       price: 59.99,
//       image: "/src/assets/T-shirt1.png",
//       genre: "Streetwear",
//       rating: 4.8,
//       reviews: 92,
//       description: "Authentic vintage distressed finish"
//     },
//     {
//       id: 6,
//       title: "Urban Edge Graphic Tee",
//       price: 47.99,
//       image: "/src/assets/T-shirt2.png",
//       genre: "Streetwear",
//       rating: 4.9,
//       reviews: 187,
//       description: "Bold urban graphics for the streets"
//     },
//     {
//       id: 7,
//       title: "Retro Vibe Classic Tee",
//       price: 42.99,
//       image: "/src/assets/T-shirt5.png",
//       genre: "Aesthetic",
//       rating: 4.7,
//       reviews: 234,
//       description: "Throwback design with modern fit"
//     },
//     {
//       id: 8,
//       title: "Street Legend Graphic Tee",
//       price: 52.99,
//       image: "/src/assets/T-shirt6.png",
//       genre: "Streetwear",
//       rating: 4.5,
//       reviews: 67,
//       description: "For the legends of the street"
//     }
//   ];

//   const filteredProducts = activeGenre === 'All' 
//     ? products 
//     : products.filter(product => product.genre === activeGenre);

//   const ProductCard = ({ product }) => {
//     const [isAdded, setIsAdded] = useState(false);
//     const [isLiked, setIsLiked] = useState(false);

//     const handleAddToCart = () => {
//       setIsAdded(true);
//       setTimeout(() => setIsAdded(false), 1500);
//     };

//     return (
//       <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:scale-[1.02]">
        
//         {/* Product Image */}
//         <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
//           {/* Heart Icon */}
//           <button 
//             onClick={() => setIsLiked(!isLiked)}
//             className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300"
//           >
//             <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
//           </button>

//           {/* Quick View */}
//           <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
//             <button className="w-10 h-10 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-400/30 transition-all duration-300">
//               <Eye className="w-5 h-5 text-yellow-400" />
//             </button>
//           </div>

//           {/* Product Image */}
//           <img 
//             src={product.image} 
//             alt={product.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//             onError={(e) => {
//               e.target.style.display = 'none';
//               e.target.nextSibling.style.display = 'flex';
//             }}
//           />
          
//           {/* Fallback */}
//           <div className="w-full h-full absolute inset-0 flex items-center justify-center text-gray-500 hidden">
//             <div className="text-center">
//               <div className="text-6xl mb-2">👕</div>
//               <div className="text-sm">Product Image</div>
//             </div>
//           </div>

//           {/* Hover Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
//         </div>

//         {/* Product Info */}
//         <div className="p-4 sm:p-6 relative z-10">
//           <div className="mb-3">
//             <h3 className="text-white font-bold text-sm sm:text-lg mb-1 group-hover:text-yellow-400 transition-colors line-clamp-1">
//               {product.title}
//             </h3>
//             <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
//               {product.description}
//             </p>
//           </div>
          
//           {/* Rating */}
//           <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center">
//               <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
//               <span className="text-yellow-400 text-xs sm:text-sm ml-1 font-semibold">{product.rating}</span>
//             </div>
//             <span className="text-gray-500 text-xs sm:text-sm">({product.reviews} reviews)</span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-2">
//               <span className="text-lg sm:text-2xl font-bold text-white">${product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-gray-500 line-through text-xs sm:text-sm">${product.originalPrice}</span>
//               )}
//             </div>
//             {product.originalPrice && (
//               <div className="bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs font-bold">
//                 SALE
//               </div>
//             )}
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className={`w-full py-2 sm:py-3 px-4 rounded-xl font-bold transition-all duration-300 transform text-xs sm:text-sm ${
//               isAdded 
//                 ? 'bg-green-500 text-white scale-95' 
//                 : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25'
//             }`}
//           >
//             {isAdded ? (
//               <span className="flex items-center justify-center gap-2">
//                 ✓ Added to Cart
//               </span>
//             ) : (
//               <span className="flex items-center justify-center gap-2">
//                 <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Add to Cart
//               </span>
//             )}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const Sidebar = () => (
//     <div className="w-24 sm:w-32 lg:w-80 bg-gradient-to-b from-black to-gray-900 border-r border-gray-800/50 backdrop-blur-sm fixed left-0 top-0 h-full overflow-y-auto scrollbar-hide">
//       <div className="p-2 sm:p-4 lg:p-6 h-full">
//         {/* Sidebar Title */}
//         <h2 className="text-xs sm:text-sm lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 flex items-center gap-1 sm:gap-2">
//           <Filter className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400" />
//           <span className="hidden sm:inline">Collections</span>
//         </h2>

//         {/* Genre Filters */}
//         <div className="space-y-2 sm:space-y-3">
//           {genres.map((genre) => (
//             <button
//               key={genre.id}
//               onClick={() => setActiveGenre(genre.id)}
//               className={`w-full flex flex-col sm:flex-row items-center gap-1 sm:gap-2 lg:gap-4 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 group ${
//                 activeGenre === genre.id
//                   ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-white shadow-lg shadow-yellow-400/10 border border-yellow-400/30'
//                   : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/80 hover:text-white border border-transparent hover:border-gray-700'
//               }`}
//             >
//               <span className="text-lg sm:text-xl lg:text-2xl">{genre.icon}</span>
//               <span className="font-semibold text-xs sm:text-sm lg:text-base text-center sm:text-left">{genre.label}</span>
//               {activeGenre === genre.id && (
//                 <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse hidden lg:block"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Newsletter */}
//         <div className="mt-4 sm:mt-6 p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-xl sm:rounded-2xl border border-yellow-400/20">
//           <div className="text-center">
//             <div className="text-xs sm:text-sm text-yellow-400 font-semibold mb-1 sm:mb-2">🔥 <span className="hidden sm:inline">Exclusive Drops</span></div>
//             <div className="text-xs text-gray-300 hidden sm:block">Get notified about new releases</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
//       <div className="flex">
//         <Sidebar />
        
//         {/* Main Content */}
//         <main className="flex-1 ml-24 sm:ml-32 lg:ml-80 p-4 sm:p-6 lg:p-8">
//           {/* Section Header */}
//           <div className="mb-6 sm:mb-8">
//             <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text mb-2 sm:mb-3">
//               {activeGenre === 'All' ? 'NEW DROPS' : activeGenre.toUpperCase()}
//             </h2>
//             <p className="text-gray-400 text-sm sm:text-base lg:text-lg">PREMIUM STREETWEAR • CURATED FOR LEGENDS</p>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProducts.length === 0 && (
//             <div className="text-center py-20">
//               <div className="text-6xl sm:text-8xl mb-6">🔍</div>
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">No products found</h3>
//               <p className="text-gray-400 text-base sm:text-lg">Try selecting a different collection</p>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Floating Chat Icon */}
//       <div className="fixed bottom-6 right-6 z-30">
//         <button className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold shadow-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-110 group">
//           <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">💬</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DarkElkShop;/*