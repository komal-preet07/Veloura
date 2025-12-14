import React from "react";
import "./styles/ProductSection.css";
import { products } from "./data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Hydration Heroes</h2>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="scroll-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
