import React, { useState } from "react";
import { useCart } from "./contexts/CartContext"; 
import "./styles/style.css";
import hydrating from "../assets/hydrating.png";
import moisture from "../assets/moisture.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";

const imageMap = {
  hydrating,
  moisture,
  banner3,
  banner4,
  banner5,
};

export default function ProductCard({ product }) {
  const { name, tagline, price, rating, label, image, buttonType } = product;
  const { addToCart, isInCart } = useCart(); 
  const [added, setAdded] = useState(false);


  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        {label && <p className="product-label">{label}</p>}
        <img src={imageMap[image]} alt={name} className="product-image" />
      </div>

      <h3 className="product-name">{name}</h3>
      <p className="product-tagline">{tagline}</p>

      <div className="product-info">
        <span className="rating">⭐ {rating}</span>
        <span className="price">₹{price}</span>
      </div>

      <button
        className="add-to-cart"
        onClick={handleAddToCart}
        disabled={inCart} 
      >
        {buttonType === "select-shade"
          ? "Select Shade"
          : inCart
          ? "Added ✓"
          : "Add"}
      </button>
    </div>
  );
}
