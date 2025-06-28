import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Send, User, Calendar, Camera, Plus, X, Zap, Star } from 'lucide-react';

const FitFeed = () => {
  const [posts, setPosts] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newPost, setNewPost] = useState({ image: null, imagePreview: '', caption: '' });
  const [commentInputs, setCommentInputs] = useState({});
  const fileInputRef = useRef(null);

  // Initialize with some sample data
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        username: 'streetwear_king',
        avatar: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        caption: 'New drop from Dark Elk hitting different 🔥 Mentality collection goes hard #streetwear #darkelk',
        likes: 23,
        likedBy: [],
        comments: [
          { id: 1, username: 'fashion_rebel', avatar: '⚡', text: 'This fit is insane bro! 🔥🔥' },
          { id: 2, username: 'style_maven', avatar: '🌟', text: 'Need that hoodie ASAP' }
        ],
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        trending: true
      },
      {
        id: 2,
        username: 'urban_aesthetics',
        avatar: '🌟',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        caption: 'Mentality tee with the vintage wash 🖤 Premium streetwear hits different #mentalitybrand',
        likes: 41,
        likedBy: [],
        comments: [
          { id: 1, username: 'drip_check', avatar: '💧', text: 'Color combo is perfect!' },
        ],
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        trending: false
      },
      {
        id: 3,
        username: 'fit_curator',
        avatar: '👑',
        imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        caption: 'Layering game strong with this Dark Elk piece 💪 Black on black never fails',
        likes: 67,
        likedBy: ['currentUser'],
        comments: [],
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
        trending: true
      }
    ];
    setPosts(samplePosts);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewPost(prev => ({
          ...prev,
          image: file,
          imagePreview: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = () => {
    if (!newPost.imagePreview || !newPost.caption) return;

    const post = {
      id: Date.now(),
      username: 'you',
      avatar: '🚀',
      imageUrl: newPost.imagePreview,
      caption: newPost.caption,
      likes: 0,
      likedBy: [],
      comments: [],
      timestamp: new Date(),
      trending: false
    };

    setPosts(prev => [post, ...prev]);
    setNewPost({ image: null, imagePreview: '', caption: '' });
    setShowUploadModal(false);
  };

  const handleLike = (postId) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const isLiked = post.likedBy.includes('currentUser');
        return {
          ...post,
          likes: isLiked ? post.likes - 1 : post.likes + 1,
          likedBy: isLiked 
            ? post.likedBy.filter(user => user !== 'currentUser')
            : [...post.likedBy, 'currentUser']
        };
      }
      return post;
    }));
  };

  const handleComment = (postId) => {
    const commentText = commentInputs[postId]?.trim();
    if (!commentText) return;

    const newComment = {
      id: Date.now(),
      username: 'you',
      avatar: '🚀',
      text: commentText
    };

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));

    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    return `${days}d`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Header - Optimized with better spacing and visibility */}
      <div className="sticky top-0 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border-b border-yellow-400/30 z-50 shadow-lg shadow-black/50">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-yellow-400/30">
                <span className="text-black text-xl md:text-2xl">🔥</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                  FITFEED
                </h1>
                <p className="text-xs text-gray-300 font-medium tracking-wide">WHERE STYLE MEETS STREET</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/40 backdrop-blur-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-yellow-400">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Added proper padding to prevent navbar overlap */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-24">
        {/* Trending Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="text-yellow-400" size={20} />
            <h2 className="text-xl font-bold text-white">Trending Fits</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10 ${
                post.trending 
                  ? 'border-yellow-400/40 shadow-lg shadow-yellow-400/20' 
                  : 'border-gray-700/50'
              }`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Trending Badge */}
              {post.trending && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/30">
                  <div className="flex items-center space-x-1">
                    <span className="text-black text-xs">🔥</span>
                    <span className="text-xs font-bold text-black">TRENDING</span>
                  </div>
                </div>
              )}

              {/* Post Header */}
              <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-xl border-2 border-gray-600 shadow-lg">
                      {post.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 shadow-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">@{post.username}</h3>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={12} />
                      <span>{formatTimeAgo(post.timestamp)}</span>
                      {post.trending && (
                        <>
                          <span>•</span>
                          <Star size={12} className="text-yellow-400" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative mx-6 mb-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={post.imageUrl}
                    alt="Outfit post"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x320/1a1a1a/yellow?text=Style+Loading...';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-6">
                <p className="text-gray-200 mb-6 leading-relaxed text-base">{post.caption}</p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 group/like transition-transform duration-200 hover:scale-110"
                    >
                      <div className="relative">
                        <Heart
                          size={28}
                          className={`transition-all duration-300 ${
                            post.likedBy.includes('currentUser')
                              ? 'text-red-500 fill-red-500 scale-110'
                              : 'text-gray-400 group-hover/like:text-red-500'
                          }`}
                        />
                        {post.likedBy.includes('currentUser') && (
                          <div className="absolute inset-0 animate-ping">
                            <Heart size={28} className="text-red-500 opacity-20" />
                          </div>
                        )}
                      </div>
                      <span className="font-bold text-white text-lg">{post.likes}</span>
                    </button>
                    <div className="flex items-center space-x-2">
                      <MessageCircle size={28} className="text-gray-400" />
                      <span className="font-bold text-white text-lg">{post.comments.length}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    #{post.id}
                  </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-4 mb-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-sm">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-yellow-400 text-sm">@{comment.username}</span>
                        <p className="text-gray-300 text-sm mt-1">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Input */}
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-inner">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm flex-shrink-0 shadow-sm">
                    🚀
                  </div>
                  <input
                    type="text"
                    placeholder="Drop a comment..."
                    value={commentInputs[post.id] || ''}
                    onChange={(e) => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                    onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className="p-2 text-yellow-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



        {posts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">👗</div>
            <h3 className="text-2xl font-bold text-white mb-4">No fits in the feed yet</h3>
            <p className="text-gray-400 text-lg">Be the first to drop your style!</p>
          </div>
        )}
      </div>

      {/* Floating Upload Button */}
      <button
        onClick={() => setShowUploadModal(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl shadow-yellow-400/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-yellow-400/50 z-40 group"
      >
        <Plus size={28} className="text-black transition-transform duration-300 group-hover:rotate-180" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 animate-ping opacity-20"></div>
      </button>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700 relative shadow-2xl">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-yellow-400/30">
                <span className="text-black text-3xl">📸</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Share Your Fit</h2>
              <p className="text-gray-400">Show the world your style</p>
            </div>

            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {newPost.imagePreview ? (
                  <div className="relative">
                    <img
                      src={newPost.imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                    <button
                      onClick={() => setNewPost(prev => ({ ...prev, imagePreview: '', image: null }))}
                      className="absolute top-2 right-2 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-48 border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center hover:border-yellow-400 transition-colors duration-300 group"
                  >
                    <span className="text-gray-400 text-4xl mb-3">📸</span>
                    <span className="text-gray-400 group-hover:text-yellow-400 font-medium">
                      Click to upload your fit
                    </span>
                  </button>
                )}
              </div>

              {/* Caption Input */}
              <div>
                <textarea
                  placeholder="Describe your fit, tag brands, add hashtags..."
                  value={newPost.caption}
                  onChange={(e) => setNewPost(prev => ({ ...prev, caption: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none shadow-inner"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handlePostSubmit}
                disabled={!newPost.imagePreview || !newPost.caption}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
              >
                POST YOUR FIT 🔥
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default FitFeed;