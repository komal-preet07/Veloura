import React from 'react';
import './styles/BestSellers.css';
import { productDetails } from './data/productDetails';
import { useCart } from "./contexts/CartContext";


const FeaturedProducts = () => {
  const { addToCart, cartItems } = useCart();

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Oil-Free Radiance</h2>
        <a href="/all-products" className="see-all-link">See All</a>
      </div>

      <div className="product-grid">
        {productDetails.map((product) => {
          const itemInCart = cartItems.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="card">
              <div className="card-image-area">
                <span className="badge">{product.tag}</span>
                <div className="pattern-background"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image" 
                />
              </div>

              <div className="card-details">
                <h3>{product.name}</h3>
                <p className="description">{product.subText}</p>

                <div className="rating-row">
                  <span className="star">★</span> 
                  <span className="rating-score">{product.rating}</span>
                  <a href="#" className="review-link">See Reviews</a>
                </div>

                <div className="price-action-row">
                  <div className="price-info">
                    <span className="price">{product.price}</span>
                    <span className="coupon-code">🏷 {product.coupon}</span>
                  </div>
                  
                  <button 
                    className="add-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add {itemInCart ? `(${itemInCart.quantity})` : ''}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
