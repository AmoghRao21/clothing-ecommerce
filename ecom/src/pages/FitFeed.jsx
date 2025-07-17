import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Plus, Home, Search, User, Bell, MoreHorizontal, Zap, TrendingUp, Flame, ShoppingBag, Palette } from 'lucide-react';

const FitfeedApp = () => {
  const [activeTab, setActiveTab] = useState('bought');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showAddPost, setShowAddPost] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const boughtTeePosts = [
    {
      id: 1,
      user: { name: 'alex_streetwear', avatar: '/api/placeholder/40/40', verified: true },
      timeAgo: '2h ago',
      image: '/api/placeholder/400/500',
      caption: 'This piece is absolutely INSANE 🔥 The quality hits different when you know you know 💯',
      likes: 2347,
      comments: 142,
      trending: true
    },
    {
      id: 2,
      user: { name: 'maya_aesthetic', avatar: '/api/placeholder/40/40', verified: true },
      timeAgo: '4h ago',
      image: '/api/placeholder/400/600',
      caption: 'Oversized energy >>> Everything else. This fit is pure vibes ✨🖤',
      likes: 1892,
      comments: 283,
      trending: false
    },
    {
      id: 3,
      user: { name: 'urban_prince', avatar: '/api/placeholder/40/40', verified: false },
      timeAgo: '6h ago',
      image: '/api/placeholder/400/550',
      caption: 'When the fit hits different and you KNOW you\'re that person 😤💫',
      likes: 3156,
      comments: 419,
      trending: true
    }
  ];

  const customDesignPosts = [
    {
      id: 4,
      user: { name: 'designer_nova', avatar: '/api/placeholder/40/40', verified: true },
      timeAgo: '1h ago',
      image: '/api/placeholder/400/500',
      caption: 'Just dropped this custom piece and I\'m OBSESSED 🎨✨ Who else needs this energy?',
      likes: 4312,
      comments: 667,
      trending: true
    },
    {
      id: 5,
      user: { name: 'creative_waves', avatar: '/api/placeholder/40/40', verified: true },
      timeAgo: '3h ago',
      image: '/api/placeholder/400/600',
      caption: 'Minimalist but make it LOUD. This custom is speaking my language 🗣️🔥',
      likes: 2780,
      comments: 345,
      trending: false
    }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const PostCard = ({ post }) => (
    <div className="relative group mb-8 w-full max-w-md mx-auto">
      {/* Trending Badge */}
      {post.trending && (
        <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 rounded-full p-2 shadow-lg animate-pulse">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl group-hover:shadow-yellow-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-yellow-500/30">
        
        {/* User Header with Glassmorphism */}
        <div className="relative p-6 pb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-orange-600/10 to-amber-600/10 backdrop-blur-sm" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gradient-to-r from-yellow-500 to-orange-500 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-black text-white text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {post.user.name}
                  </h3>

                </div>
                <p className="text-gray-400 text-sm font-medium">{post.timeAgo}</p>
              </div>
            </div>
            <MoreHorizontal className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Post Image with Overlay Effects */}
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt="Post"
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-white font-semibold text-lg leading-tight">
                {post.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar with Gold Effects */}
        <div className="p-6 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleLike(post.id)}
                className="group/like relative overflow-hidden"
              >
                <Heart 
                  className={`w-8 h-8 transition-all duration-300 ${
                    likedPosts.has(post.id) 
                      ? 'fill-red-500 text-red-500 scale-125 drop-shadow-lg' 
                      : 'text-gray-300 hover:text-red-500 group-hover/like:scale-125'
                  }`}
                />
                {likedPosts.has(post.id) && (
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-30 scale-150 animate-pulse" />
                )}
              </button>
              
              <button className="group/comment">
                <MessageCircle className="w-8 h-8 text-gray-300 hover:text-blue-500 group-hover/comment:scale-125 transition-all duration-300" />
              </button>
              
              <button className="group/share">
                <Share2 className="w-8 h-8 text-gray-300 hover:text-green-500 group-hover/share:scale-125 transition-all duration-300" />
              </button>
              
              <button className="group/fire">
                <Flame className="w-8 h-8 text-gray-300 hover:text-orange-500 group-hover/fire:scale-125 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Engagement Stats with Glow */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white font-bold text-lg">
                {(post.likes + (likedPosts.has(post.id) ? 1 : 0)).toLocaleString()}
              </span>
              <span className="text-gray-400 text-sm">likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-white font-bold text-lg">{post.comments.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AddPostModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-50 flex items-end animate-fadeIn">
      <div className="bg-gradient-to-t from-gray-900 to-black rounded-t-3xl w-full max-h-[85vh] overflow-y-auto border-t border-gray-700/50 shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Create Magic ✨
            </h2>
            <button 
              onClick={() => setShowAddPost(false)}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative border-2 border-dashed border-gray-600 rounded-3xl p-12 text-center bg-gray-900/50 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                <Plus className="w-16 h-16 text-gray-500 mx-auto mb-6 group-hover:text-yellow-500 transition-colors" />
                <p className="text-gray-400 text-lg font-semibold">Drop your fire content here 🔥</p>
                <p className="text-gray-500 text-sm mt-2">JPG, PNG, or GIF up to 10MB</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-20" />
              <textarea 
                placeholder="What's the vibe? Tell your story..."
                className="relative w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-white placeholder-gray-500 resize-none h-32 font-medium text-lg focus:border-yellow-500/50 focus:outline-none transition-all duration-300"
              />
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl" />
                <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-2xl font-black text-lg transition-all duration-300 group-hover:scale-105">
                  🛍️ Bought Tee
                </div>
              </button>
              <button className="flex-1 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl" />
                <div className="relative bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white py-4 rounded-2xl font-black text-lg transition-all duration-300 group-hover:scale-105">
                  🎨 My Design
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-orange-900/10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Sidebar Navigation */}
        <div className="w-80 fixed left-0 top-0 h-full backdrop-blur-2xl bg-black/80 border-r border-gray-800/50 z-40">
          <div className="p-8">
            <div className="mb-12">
              <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                FitFeed
              </h1>
            </div>
            
            {/* Professional Tab Selection */}
            <div className="space-y-4 mb-12">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Categories
              </div>
              
              <button
                onClick={() => setActiveTab('bought')}
                className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  activeTab === 'bought' 
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500/30' 
                    : 'bg-gray-800/30 border-2 border-gray-700/30 hover:border-amber-500/20'
                }`}
              >
                <div className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeTab === 'bought' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  } transition-all duration-300`}>
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-bold text-lg ${
                      activeTab === 'bought' 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      Bought Tees
                    </h3>
                    <p className="text-sm text-gray-400">Premium streetwear collection</p>
                  </div>
                </div>
                {activeTab === 'bought' && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
                )}
              </button>
              
              <button
                onClick={() => setActiveTab('designs')}
                className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  activeTab === 'designs' 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/30' 
                    : 'bg-gray-800/30 border-2 border-gray-700/30 hover:border-yellow-500/20'
                }`}
              >
                <div className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeTab === 'designs' 
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500' 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  } transition-all duration-300`}>
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-bold text-lg ${
                      activeTab === 'designs' 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      My Designs
                    </h3>
                    <p className="text-sm text-gray-400">Custom creative expressions</p>
                  </div>
                </div>
                {activeTab === 'designs' && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-yellow-500 to-amber-500 rounded-full" />
                )}
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Navigation
              </div>
              
              {[
                { icon: Home, key: 'home', label: 'Home' },
                { icon: Search, key: 'explore', label: 'Explore' },
                { icon: User, key: 'profile', label: 'Profile' },
                { icon: Bell, key: 'notifications', label: 'Notifications' }
              ].map(({ icon: Icon, key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveNavItem(key)}
                  className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center space-x-4 ${
                    activeNavItem === key 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-white border border-yellow-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-semibold">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 ml-80">
          <div className="max-w-2xl mx-auto px-6 py-8">
            {activeTab === 'bought' 
              ? boughtTeePosts.map(post => <PostCard key={post.id} post={post} />)
              : customDesignPosts.map(post => <PostCard key={post.id} post={post} />)
            }
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Tabs */}
        <div className="sticky top-0 z-30 backdrop-blur-2xl bg-black/80 border-b border-gray-800/30">
          <div className="flex px-4 py-3">
            <button
              onClick={() => setActiveTab('bought')}
              className={`flex-1 relative overflow-hidden rounded-2xl transition-all duration-300 ${
                activeTab === 'bought' 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500/40' 
                  : 'bg-gray-800/30 border-2 border-gray-700/30'
              }`}
            >
              <div className="p-4 flex items-center justify-center space-x-2">
                <ShoppingBag className={`w-5 h-5 ${
                  activeTab === 'bought' ? 'text-amber-400' : 'text-gray-400'
                }`} />
                <span className={`font-bold ${
                  activeTab === 'bought' ? 'text-white' : 'text-gray-400'
                }`}>
                  Bought Tees
                </span>
              </div>
            </button>
            
            <div className="w-3" />
            
            <button
              onClick={() => setActiveTab('designs')}
              className={`flex-1 relative overflow-hidden rounded-2xl transition-all duration-300 ${
                activeTab === 'designs' 
                  ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/40' 
                  : 'bg-gray-800/30 border-2 border-gray-700/30'
              }`}
            >
              <div className="p-4 flex items-center justify-center space-x-2">
                <Palette className={`w-5 h-5 ${
                  activeTab === 'designs' ? 'text-yellow-400' : 'text-gray-400'
                }`} />
                <span className={`font-bold ${
                  activeTab === 'designs' ? 'text-white' : 'text-gray-400'
                }`}>
                  My Designs
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Feed */}
        <div className="px-4 py-6 pb-32">
          {activeTab === 'bought' 
            ? boughtTeePosts.map(post => <PostCard key={post.id} post={post} />)
            : customDesignPosts.map(post => <PostCard key={post.id} post={post} />)
          }
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-2xl bg-black/90 border-t border-gray-800/50 safe-area-inset-bottom">
          <div className="relative px-4 py-3">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-orange-600/10 to-amber-600/10" />
            <div className="relative flex items-center justify-around">
              {[
                { icon: Home, key: 'home', label: 'Home' },
                { icon: Search, key: 'explore', label: 'Explore' },
                { icon: Plus, key: 'add', label: 'Add' },
                { icon: User, key: 'profile', label: 'Profile' }
              ].map(({ icon: Icon, key, label }) => (
                <button
                  key={key}
                  onClick={() => key === 'add' ? setShowAddPost(true) : setActiveNavItem(key)}
                  className={`relative p-3 rounded-2xl transition-all duration-300 flex flex-col items-center ${
                    activeNavItem === key 
                      ? 'text-white scale-110' 
                      : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
                >
                  {activeNavItem === key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-30" />
                  )}
                  <Icon className="w-6 h-6 relative z-10 mb-1" />
                  <span className="text-xs font-medium relative z-10">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowAddPost(true)}
        className="fixed bottom-24 right-6 lg:bottom-8 w-16 h-16 rounded-full overflow-hidden group z-30"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 animate-spin-slow" />
        <div className="absolute inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
          <Plus className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-150" />
      </button>

      {/* Add Post Modal */}
      {showAddPost && <AddPostModal />}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FitfeedApp;