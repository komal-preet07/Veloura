import React from 'react';
import './styles/Animated.css'; 

import Animated from "../assets/Animated.png"; 
import product from "../assets/product.png"; 

const AnimatedSection = () => {

  const containerStyle = {
    backgroundImage: `url(${Animated})`,
  };

  const productStyle = {
    transform: 'rotate(-15deg) scale(1.1)', 
    filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.3))', 
  };

  return (
    <div className="animated-container" style={containerStyle}>
      
      <div className="layout-grid">
        
        <div className="left-text">
          <p style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px' }}>
            Introducing Veloura
          </p>
          <h2 style={{ fontSize: '2.8rem', lineHeight: '1.1', color: '#800f2f', margin: '0' }}>
            LUXURIOUS<br />VELVET SKINCARE
          </h2>
          <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
            Infused with botanical extracts
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
           <img src={product} alt="Veloura Product" className="product-image-display" style={productStyle} />
        </div>


        <div className="right-text">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            REVEAL YOUR RADIANCE
          </h3>
          <h2 style={{ fontSize: '2.5rem', borderBottom: '3px solid #800f2f', display: 'inline-block', marginBottom: '20px' }}>
            IN 5 MINUTES
          </h2>
          
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontWeight: '600' }}>
            <li>+ SMOOTHS & HYDRATES</li>
            <li>+ MINIMIZES PORES</li>
            <li>+ GIVES VELVET FINISH</li>
          </ul>

          <button style={{
            marginTop: '20px',
            padding: '15px 40px',
            backgroundColor: '#800f2f',
            color: 'white',
            border: 'none',
            fontSize: '1rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            ADD TO CART
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnimatedSection;