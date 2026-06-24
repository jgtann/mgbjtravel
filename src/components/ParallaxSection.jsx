import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ imageUrl, height = '400px' }) => {
  return (
    <div 
      className="parallax-container" 
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        height: height
      }}
    >
      <div className="parallax-overlay"></div>
    </div>
  );
};

export default ParallaxSection;
