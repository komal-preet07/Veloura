import React from 'react';
import Animated from "../assets/Animated.png"; 
import product from "../assets/product.png"; 

const AnimatedSection = () => {

  const containerStyle = {
    borderTop: '100px solid white',
    backgroundImage: `url(${Animated})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px',
    width: '100%',
    display: 'flex',            
    paddingTop: '100px',
    alignItems: 'center',       
    justifyContent: 'center',   
    position: 'relative',
    overflow: 'visible'
  };

 
  const layoutGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr 1fr', 
    alignItems: 'center',
    width: '90%',
    maxWidth: '1400px',
    margin: '0 auto',
    zIndex: 2
  };

  // 3. Left Text Styling
  const leftTextStyle = {
    textAlign: 'right', 
    color: '#333', 
    paddingRight: '20px'
  };


  const rightTextStyle = {
    textAlign: 'left',
    color: '#333',
    paddingLeft: '20px'
  };

 
  const productStyle = {
    width: '600px',
    maxWidth: '2000px',
    transform: 'rotate(-15deg) scale(1.1)', 
    filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.3))', 
    display: 'block',
    margin: '0 auto',
    zIndex: 10 
  };

  return (
    <div style={containerStyle}>
      
 
      <div style={layoutGrid}>
        
        <div style={leftTextStyle}>
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
           <img src={product} alt="Veloura Product" style={productStyle} />
        </div>


        <div style={rightTextStyle}>
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