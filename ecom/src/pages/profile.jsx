
import React, { useState } from 'react';
import { User, Package, MapPin, TrendingUp, Edit3, Trash2, Plus, Eye, Truck, Star, Calendar, Phone, Mail, Lock, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const FitfeedProfile = () => {
  const [activeTab, setActiveTab] = useState('fitfeed');

  // Reusable color classes for consistency
  const goldGradient = 'from-yellow-400 to-yellow-500';
  const goldText = 'text-yellow-300';
  const goldShadow = 'shadow-yellow-500/30';
  const goldBorder = 'border-yellow-500/40';
  const goldHover = 'hover:shadow-yellow-500/20';

  const orders = [
    {
      id: '#FIT2024001',
      date: 'March 15, 2024',
      status: 'Delivered',
      items: 'MENTALITY Dark Warrior Tee + 2 more',
      total: '$149.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop&crop=center'
    },
    {
      id: '#FIT2024002',
      date: 'March 20, 2024',
      status: 'Processing',
      items: 'MENTALITY Skull King Hoodie',
      total: '$89.99',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80&h=80&fit=crop&crop=center'
    },
    {
      id: '#FIT2024003',
      date: 'March 25, 2024',
      status: 'Shipped',
      items: 'MENTALITY Death Crown Tee',
      total: '$54.99',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37cd2eb?w=80&h=80&fit=crop&crop=center'
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Elite Avenue, Penthouse 4B',
      city: 'Ahmedabad, Gujarat 380001',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      type: 'Office',
      name: 'John Doe',
      address: '456 Business District, Tower A, Floor 25',
      city: 'Ahmedabad, Gujarat 380015',
      phone: '+91 98765 43210'
    }
  ];

  const earningHistory = [
    { type: 'Referral Bonus', date: 'March 20, 2024', amount: '+₹10' },
    { type: 'Purchase Cashback', date: 'March 15, 2024', amount: '+₹10' },
    { type: 'Review Reward', date: 'March 10, 2024', amount: '+₹5' }
  ];

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
      caption: 'This piece is absolutely INSANE 🔥 The quality hits different when you know you know 💯',
      likes: 2347,
      comments: 142,
      earnings: '₹25',
      timeAgo: '2h ago'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center',
      caption: 'New drop landed! MENTALITY collection never disappoints 🖤',
      likes: 1892,
      comments: 89,
      earnings: '₹18',
      timeAgo: '4h ago'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37cd2eb?w=400&h=400&fit=crop&crop=center',
      caption: 'Dark aesthetic vibes only ⚡️ Premium streetwear collection',
      likes: 3156,
      comments: 203,
      earnings: '₹32',
      timeAgo: '1d ago'
    }
  ];

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`
        relative flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 flex-1 md:flex-none justify-center md:justify-start group overflow-hidden
        ${isActive 
          ? `bg-gradient-to-r ${goldGradient} text-white shadow-2xl ${goldShadow}` 
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:shadow-lg'
        }
      `}
    >
      <Icon size={16} className="md:w-[18px] md:h-[18px] relative z-10" />
      <span className="hidden sm:inline relative z-10">{label}</span>
      {isActive && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-r ${goldGradient} rounded-2xl blur-md opacity-50 -z-10`} />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-2xl blur-2xl opacity-30 -z-20 scale-150" />
        </>
      )}
    </button>
  );

  const StatusBadge = ({ status }) => {
    const styles = {
      'Delivered': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-emerald-500/20',
      'Processing': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40 shadow-yellow-500/20',
      'Shipped': 'bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-blue-500/20'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-lg ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const PremiumCard = ({ children, className = '' }) => (
    <div className={`
      bg-gradient-to-br from-gray-900/90 to-black/90 
      backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 md:p-8 
      shadow-2xl shadow-black/30 relative overflow-hidden group ${goldHover} transition-all duration-500
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-yellow-600/5 to-yellow-600/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </div>
  );

  const PostCard = ({ post }) => (
    <div className={`bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 ${goldHover} transition-all duration-500 group`}>
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={post.image} 
          alt="Post" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-medium">{post.caption}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-400" />
              <span className="font-semibold">{post.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span className="font-semibold">{post.comments}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 px-3 py-1 rounded-xl text-sm font-bold border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
              {post.earnings}
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium">{post.timeAgo}</span>
          <div className="flex items-center gap-2">
            <button className="hover:text-white transition-colors">
              <Share2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background - updated to gold/yellow */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
      
      {/* Additional ambient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Enhanced Profile Header */}
        <PremiumCard className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="relative flex-shrink-0 group">
              <div className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black text-white relative z-10 border-2 border-gray-600 shadow-2xl group-hover:${goldBorder} transition-all duration-500`}>
                DU
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${goldGradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Dark User
              </h1>
              <p className={`${goldText} text-base md:text-lg font-bold mb-6 md:mb-8`}>Premium Member ⚡</p>
              
              <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto md:mx-0">
                <div className="text-center">
                  <div className={`text-xl md:text-2xl font-black ${goldText} mb-1`}>12</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Orders</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl md:text-2xl font-black ${goldText} mb-1`}>₹2,340</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Spent</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-black text-emerald-400 mb-1">₹75</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Earned</div>
                </div>
              </div>
            </div>
          </div>
        </PremiumCard>

        {/* Enhanced Tab Navigation */}
        <div className="flex gap-2 md:gap-3 mb-8 md:mb-12 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-2xl border border-gray-800/50 rounded-3xl p-2 md:p-3 overflow-x-auto shadow-2xl shadow-black/30">
          <TabButton id="fitfeed" label="FitFeed" icon={TrendingUp} isActive={activeTab === 'fitfeed'} onClick={setActiveTab} />
          <TabButton id="orders" label="Orders" icon={Package} isActive={activeTab === 'orders'} onClick={setActiveTab} />
          <TabButton id="addresses" label="Address" icon={MapPin} isActive={activeTab === 'addresses'} onClick={setActiveTab} />
          <TabButton id="earnings" label="Earnings" icon={Star} isActive={activeTab === 'earnings'} onClick={setActiveTab} />
          <TabButton id="profile" label="Profile" icon={User} isActive={activeTab === 'profile'} onClick={setActiveTab} />
        </div>

        {/* FitFeed Tab Content */}
        {activeTab === 'fitfeed' && (
          <div className="space-y-8 md:space-y-10">
            <PremiumCard>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 bg-gradient-to-r ${goldGradient} rounded-2xl shadow-lg ${goldShadow}`}>
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your FitFeed Posts</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </PremiumCard>

            <PremiumCard>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-lg shadow-emerald-500/30">
                  <Star className="text-white w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Post Earnings Summary</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group">
                  <div className="text-3xl font-black text-emerald-400 mb-2 group-hover:scale-105 transition-transform duration-300">₹75</div>
                  <div className="text-sm text-gray-400 font-semibold">Total Earnings</div>
                </div>
                <div className={`bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-6 border border-gray-700/50 shadow-xl ${goldHover} transition-all duration-300 group`}>
                  <div className={`text-3xl font-black ${goldText} mb-2 group-hover:scale-105 transition-transform duration-300`}>2.1K</div>
                  <div className="text-sm text-gray-400 font-semibold">Avg. Engagement</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group">
                  <div className="text-3xl font-black text-emerald-400 mb-2 group-hover:scale-105 transition-transform duration-300">₹25</div>
                  <div className="text-sm text-gray-400 font-semibold">Best Post</div>
                </div>
              </div>
            </PremiumCard>
          </div>
        )}

        {/* Orders Tab Content */}
        {activeTab === 'orders' && (
          <PremiumCard>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className={`p-3 bg-gradient-to-r ${goldGradient} rounded-2xl shadow-lg ${goldShadow}`}>
                <Package className="text-white w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Order History</h2>
            </div>
            
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className={`group bg-gradient-to-br from-gray-800/30 to-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-8 hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-black/50 hover:${goldBorder} transition-all duration-500 shadow-xl ${goldHover}`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                    <div className="relative group/image">
                      <img 
                        src={order.image} 
                        alt="Product" 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-gray-700/50 shadow-lg group-hover/image:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-3">
                        <span className={`${goldText} font-bold text-base bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent`}>{order.id}</span>
                        <StatusBadge status={order.status} />
                      </div>
                      <p className="text-gray-300 mb-3 text-base md:text-lg font-medium">{order.items}</p>
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="font-semibold">{order.date}</span>
                        </div>
                        <div className="font-bold text-white text-lg">{order.total}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <button className={`bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 ${goldText} px-4 py-3 rounded-2xl hover:from-yellow-500/30 hover:to-yellow-500/30 transition-all duration-300 ${goldBorder} shadow-lg ${goldShadow} group/btn`}>
                        <Eye size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                      <button className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-400 px-4 py-3 rounded-2xl hover:from-gray-600/50 hover:to-gray-700/50 hover:text-white transition-all duration-300 border border-gray-600/50 shadow-lg group/btn">
                        <Truck size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PremiumCard>
        )}

        {/* Addresses Tab Content */}
        {activeTab === 'addresses' && (
          <PremiumCard>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-10">
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-gradient-to-r ${goldGradient} rounded-2xl shadow-lg ${goldShadow}`}>
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Saved Addresses</h2>
              </div>
              <button className={`bg-gradient-to-r ${goldGradient} text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:from-yellow-500 hover:to-yellow-600 hover:shadow-2xl ${goldShadow} transition-all duration-300 flex items-center gap-3 text-sm md:text-base group`}>
                <Plus size={18} className="group-hover:scale-110 transition-transform duration-300" />
                Add Address
              </button>
            </div>
            
            <div className="grid gap-6 md:gap-8">
              {addresses.map((address) => (
                <div key={address.id} className={`bg-gradient-to-br from-gray-800/30 to-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-8 hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-black/50 hover:${goldBorder} transition-all duration-500 shadow-xl ${goldHover} group`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 ${goldText} px-4 py-2 rounded-full text-sm font-bold ${goldBorder} shadow-lg ${goldShadow}`}>
                          {address.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-3 text-white">{address.name}</h3>
                      <p className="text-gray-300 mb-2 text-sm md:text-base font-medium">{address.address}</p>
                      <p className="text-gray-300 mb-3 text-sm md:text-base font-medium">{address.city}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Phone size={16} />
                        <span className="font-semibold">{address.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className={`bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 ${goldText} p-3 rounded-2xl hover:from-yellow-500/30 hover:to-yellow-500/30 transition-all duration-300 ${goldBorder} shadow-lg ${goldShadow} group/btn`}>
                        <Edit3 size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                      <button className="bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 p-3 rounded-2xl hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 border border-red-500/30 shadow-lg shadow-red-500/20 group/btn">
                        <Trash2 size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PremiumCard>
        )}

        {/* Earnings Tab Content */}
        {activeTab === 'earnings' && (
          <div className="space-y-8 md:space-y-10">
            <PremiumCard>
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl shadow-lg shadow-emerald-500/30">
                    <Star className="text-white w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Earnings Progress</h2>
                </div>
                
                <div className="mb-8 md:mb-10">
                  <div className="text-5xl md:text-6xl font-black text-emerald-400 mb-3 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">₹75</div>
                  <p className="text-gray-400 text-lg md:text-xl font-semibold">out of ₹100 goal</p>
                </div>
                
                <div className="relative mb-8">
                  <div className="w-full h-4 md:h-5 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full relative overflow-hidden shadow-lg"
                      style={{ width: '75%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -top-1 left-0 w-full h-6 md:h-7 bg-gradient-to-r from-emerald-500/30 to-green-400/30 rounded-full blur-md" style={{ width: '75%' }} />
                </div>
                
                <p className="text-emerald-400 font-bold text-xl md:text-2xl">75% Complete 🎉</p>
              </div>
            </PremiumCard>

            <PremiumCard>
              <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-yellow-400" size={20} />
                Earning History
              </h3>
              
              <div className="space-y-4">
                {earningHistory.map((earning, index) => (
                  <div key={index} className="flex items-center justify-between py-3 md:py-4 border-b border-gray-700/50 last:border-b-0">
                    <div>
                      <p className="font-semibold text-sm md:text-base">{earning.type}</p>
                      <p className="text-xs md:text-sm text-gray-400">{earning.date}</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-base md:text-lg">{earning.amount}</div>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>
        )}

        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <PremiumCard>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <User className="text-yellow-400" size={24} />
              <h2 className="text-xl md:text-2xl font-bold">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-yellow-400 font-medium mb-2 text-sm">Full Name</label>
                <input 
                  type="text" 
                  value="Dark User" 
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors text-sm md:text-base"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-yellow-400 font-medium mb-2 flex items-center gap-2 text-sm">
                  <Mail size={14} />
                  Email Address
                </label>
                <input 
                  type="email" 
                  value="darkuser@fitfeed.com" 
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors text-sm md:text-base"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-yellow-400 font-medium mb-2 flex items-center gap-2 text-sm">
                  <Phone size={14} />
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  value="+91 98765 43210" 
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors text-sm md:text-base"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-yellow-400 font-medium mb-2 text-sm">Member Since</label>
                <input 
                  type="text" 
                  value="January 2023" 
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors text-sm md:text-base"
                  readOnly
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                <Edit3 size={16} />
                Edit Profile
              </button>
              <button className="bg-gray-800/50 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-700/50 transition-colors border border-gray-700/50 flex items-center justify-center gap-2 text-sm md:text-base">
                <Lock size={16} />
                Change Password
              </button>
            </div>
          </PremiumCard>
        )}
      </div>
    </div>
  );
};

export default FitfeedProfile;