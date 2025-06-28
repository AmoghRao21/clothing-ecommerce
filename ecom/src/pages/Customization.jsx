import React, { useState, useEffect } from 'react';

const TShirtCustomizer = () => {
  // State management for customization options
  const [currentColor, setCurrentColor] = useState('black');
  const [currentPosition, setCurrentPosition] = useState('front');
  const [currentDesign, setCurrentDesign] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Design options data
  const designs = [
    { id: 'design1', name: 'Skull Design', thumbnail: 'https://picsum.photos/100/100?random=1' },
    { id: 'design2', name: 'Wolf Design', thumbnail: 'https://picsum.photos/100/100?random=2' },
    { id: 'design3', name: 'Eagle Design', thumbnail: 'https://picsum.photos/100/100?random=3' },
    { id: 'design4', name: 'Lion Design', thumbnail: 'https://picsum.photos/100/100?random=4' },
    { id: 'design5', name: 'Dragon Design', thumbnail: 'https://picsum.photos/100/100?random=5' },
    { id: 'design6', name: 'Tiger Design', thumbnail: 'https://picsum.photos/100/100?random=6' }
  ];

  // Generate preview image source
  const getPreviewImageSrc = () => {
    if (currentDesign) {
      return `assets/${currentColor}_${currentDesign}_${currentPosition}.png`;
    }
    return `assets/${currentColor}_blank.png`;
  };

  // Fallback image for when main image fails to load
  const getFallbackImageSrc = () => {
    return `https://picsum.photos/400/400?random=${currentColor}${currentDesign || 'blank'}${currentPosition}`;
  };

  // Handle image loading
  const handleImageLoad = () => {
    setPreviewLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setPreviewLoading(false);
    setImageError(true);
  };

  // Preload images on component mount
  useEffect(() => {
    const colors = ['black', 'white'];
    const positions = ['front', 'back'];
    const designIds = designs.map(d => d.id);
    
    const imagesToPreload = [];
    
    // Add blank t-shirts
    colors.forEach(color => {
      imagesToPreload.push(`assets/${color}_blank.png`);
    });
    
    // Add all design combinations
    colors.forEach(color => {
      designIds.forEach(design => {
        positions.forEach(position => {
          imagesToPreload.push(`assets/${color}_${design}_${position}.png`);
        });
      });
    });
    
    // Preload images silently
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Reset loading state when selection changes
  useEffect(() => {
    setPreviewLoading(true);
    setImageError(false);
  }, [currentColor, currentPosition, currentDesign]);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    header: {
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid #333'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ff6b35'
    },
    navMenu: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    mainContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem'
    },
    pageTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ff6b35',
      marginBottom: '3rem',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      textShadow: '0 0 20px rgba(255, 107, 53, 0.3)'
    },
    customizerContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    previewSection: {
      background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid #333',
      position: 'sticky',
      top: '120px'
    },
    previewTitle: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: '#ff6b35'
    },
    previewContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
      borderRadius: '15px',
      overflow: 'hidden'
    },
    tshirtPreview: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
      transform: previewLoading ? 'scale(0.95)' : 'scale(1)',
      opacity: previewLoading ? 0.5 : 1
    },
    previewPlaceholder: {
      color: '#888',
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '2rem'
    },
    previewInfo: {
      marginTop: '1.5rem',
      textAlign: 'center',
      color: '#ccc',
      fontSize: '0.9rem'
    },
    controlsSection: {
      background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid #333'
    },
    controlGroup: {
      marginBottom: '2.5rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid #333'
    },
    controlGroupLast: {
      marginBottom: '2.5rem',
      paddingBottom: '2rem',
      borderBottom: 'none'
    },
    controlLabel: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ff6b35',
      display: 'block'
    },
    colorSelector: {
      display: 'flex',
      gap: '1rem'
    },
    colorOption: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: '3px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    colorOptionWhite: {
      background: '#ffffff'
    },
    colorOptionBlack: {
      background: '#000000'
    },
    colorOptionActive: {
      borderColor: '#ff6b35',
      transform: 'scale(1.15)',
      boxShadow: '0 0 25px rgba(255, 107, 53, 0.5)'
    },
    positionSelector: {
      display: 'flex',
      gap: '1rem'
    },
    positionOption: {
      flex: 1,
      padding: '1rem',
      background: '#333',
      border: '2px solid transparent',
      borderRadius: '10px',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    positionOptionActive: {
      background: '#ff6b35',
      borderColor: '#ff6b35',
      color: '#000',
      transform: 'translateY(-3px)'
    },
    designGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '1rem'
    },
    designOption: {
      aspectRatio: '1',
      background: '#333',
      border: '3px solid transparent',
      borderRadius: '10px',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    designOptionActive: {
      borderColor: '#ff6b35',
      transform: 'scale(1.1)',
      boxShadow: '0 0 25px rgba(255, 107, 53, 0.5)'
    },
    designImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    // Mobile responsive styles
    '@media (max-width: 768px)': {
      customizerContainer: {
        gridTemplateColumns: '1fr',
        gap: '2rem'
      },
      previewSection: {
        position: 'static'
      },
      pageTitle: {
        fontSize: '2rem',
        marginBottom: '2rem'
      },
      colorOption: {
        width: '50px',
        height: '50px'
      },
      designGrid: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      positionSelector: {
        flexDirection: 'column'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.navContainer}>
          <div style={styles.logo}>
            🦌 DARK ELK
          </div>
          <ul style={styles.navMenu}>
            <li><a href="#home" style={styles.navLink}>HOME</a></li>
            <li><a href="#shop" style={styles.navLink}>SHOP</a></li>
            <li><a href="#custom" style={styles.navLink}>CUSTOM</a></li>
            <li><a href="#contact" style={styles.navLink}>CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.mainContainer}>
        <h1 style={styles.pageTitle}>Custom Design</h1>
        
        <div style={styles.customizerContainer}>
          {/* Preview Section */}
          <div style={styles.previewSection}>
            <h2 style={styles.previewTitle}>Live Preview</h2>
            <div style={styles.previewContainer}>
              {!imageError ? (
                <img
                  style={styles.tshirtPreview}
                  src={getPreviewImageSrc()}
                  alt="T-shirt Preview"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              ) : (
                <img
                  style={styles.tshirtPreview}
                  src={getFallbackImageSrc()}
                  alt="T-shirt Preview"
                  onLoad={handleImageLoad}
                />
              )}
            </div>
            <div style={styles.previewInfo}>
              <div>
                Color: <span style={{color: '#ff6b35'}}>{currentColor.charAt(0).toUpperCase() + currentColor.slice(1)}</span> • 
                Position: <span style={{color: '#ff6b35'}}>{currentPosition.charAt(0).toUpperCase() + currentPosition.slice(1)}</span> • 
                Design: <span style={{color: '#ff6b35'}}>{currentDesign ? `Design ${currentDesign.slice(-1)}` : 'None'}</span>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div style={styles.controlsSection}>
            {/* Color Selection */}
            <div style={styles.controlGroup}>
              <label style={styles.controlLabel}>T-Shirt Color</label>
              <div style={styles.colorSelector}>
                <div
                  style={{
                    ...styles.colorOption,
                    ...styles.colorOptionBlack,
                    ...(currentColor === 'black' ? styles.colorOptionActive : {})
                  }}
                  onClick={() => setCurrentColor('black')}
                  title="Black"
                />
                <div
                  style={{
                    ...styles.colorOption,
                    ...styles.colorOptionWhite,
                    ...(currentColor === 'white' ? styles.colorOptionActive : {})
                  }}
                  onClick={() => setCurrentColor('white')}
                  title="White"
                />
              </div>
            </div>

            {/* Position Selection */}
            <div style={styles.controlGroup}>
              <label style={styles.controlLabel}>Design Position</label>
              <div style={styles.positionSelector}>
                <div
                  style={{
                    ...styles.positionOption,
                    ...(currentPosition === 'front' ? styles.positionOptionActive : {})
                  }}
                  onClick={() => setCurrentPosition('front')}
                >
                  FRONT
                </div>
                <div
                  style={{
                    ...styles.positionOption,
                    ...(currentPosition === 'back' ? styles.positionOptionActive : {})
                  }}
                  onClick={() => setCurrentPosition('back')}
                >
                  BACK
                </div>
              </div>
            </div>

            {/* Design Selection */}
            <div style={styles.controlGroupLast}>
              <label style={styles.controlLabel}>Choose Design</label>
              <div style={styles.designGrid}>
                {designs.map((design) => (
                  <div
                    key={design.id}
                    style={{
                      ...styles.designOption,
                      ...(currentDesign === design.id ? styles.designOptionActive : {})
                    }}
                    onClick={() => setCurrentDesign(design.id)}
                    title={design.name}
                  >
                    <img
                      src={design.thumbnail}
                      alt={design.name}
                      style={styles.designImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TShirtCustomizer;