import React, { useEffect, useState } from 'react';


const DarkElkNavbar = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      
      setIsScrolled(currentScrollY > 30);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'HOME', path: '/', icon: '🏠' },
    { name: 'SHOP', path: '/shop', icon: '🛍️' },
    { name: 'FITFEED', path: '/fitfeed', icon: '📱' },
    { name: 'ACCOUNT', path: '/account', icon: '👤' },
    { name: 'WISHLIST', path: '/wishlist', icon: '❤️' },
    { name: 'CART', path: '/cart', icon: '🛒' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-gradient-to-r from-zinc-900/95 via-black/98 to-zinc-900/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(255,215,0,0.15)] border-b border-yellow-500/30' 
            : 'bg-gradient-to-r from-black/40 via-zinc-900/30 to-black/40 backdrop-blur-md border-b border-white/5'
        }`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => handleNavClick('/')}
            >
              <div className="relative">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Dark Elk Logo" 
                  className="w-12 h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 filter drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                />
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 tracking-tight leading-none">
                  DARK ELK
                </span>
                <span className="text-xs text-yellow-400/60 font-medium tracking-[0.2em] uppercase">
                  Premium Collection
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center bg-black/30 backdrop-blur-xl rounded-full px-2 py-2 border border-yellow-500/20">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-8 py-3 mx-1 text-sm font-bold tracking-wider transition-all duration-500 rounded-full cursor-pointer group ${
                    currentPath === item.path
                      ? 'text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[0_0_30px_rgba(255,215,0,0.5)] scale-105'
                      : 'text-white hover:text-yellow-400 hover:bg-yellow-400/10 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 ${
                    currentPath === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/95 via-zinc-900/98 to-black/95 backdrop-blur-2xl border-b border-yellow-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Mobile Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHA+dGggZD0iTTIwIDVMMzUgMTJWMjhMMjAgMzVMNSAyOFYxMkwyMCA1WiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjRkZENzAwIiBzdHJva2Utd2lkdGg9IjIiLz4KPHA+dGggZD0iTTIwIDEwTDMwIDE1VjI1TDIwIDMwTDEwIDI1VjE1TDIwIDEwWiIgZmlsbD0iI0ZGRDcwMCIvPgo8L3N2Zz4K" 
              alt="Dark Elk Logo" 
              className="w-10 h-10 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 tracking-tight leading-none">
                DARK ELK
              </span>
              <span className="text-xs text-yellow-400/60 font-medium tracking-wider uppercase">
                Premium
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="relative p-3 rounded-full bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={toggleMobileMenu}
        />
        
        <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/95 via-zinc-900/98 to-black/95 backdrop-blur-2xl border-b border-yellow-500/30 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="pt-20 pb-8 px-6">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${
                    currentPath === item.path
                      ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 border-2 border-yellow-500/40 shadow-[0_0_30px_rgba(255,215,0,0.3)]'
                      : 'bg-white/5 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-500/30'
                  }`}
                >
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">{item.icon}</span>
                  <span className={`text-sm font-bold tracking-wider ${
                    currentPath === item.path ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
                  }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-black/95 via-zinc-900/98 to-black/95 backdrop-blur-2xl border-t border-yellow-500/30">
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.slice(0, 4).map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavClick(item.path)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-500 cursor-pointer relative ${
                currentPath === item.path 
                  ? 'text-yellow-400 bg-yellow-400/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                  : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
              }`}
            >
              <span className="text-lg filter drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">{item.icon}</span>
              <span className="text-xs font-bold tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.name}
              </span>
              {currentPath === item.path && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Spacers */}
      <div className="lg:hidden h-20" />
      <div className="lg:hidden h-20" />
    </>
  );
};

export default DarkElkNavbar; 