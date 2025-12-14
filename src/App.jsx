import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import "./components/styles/App.css";
import AnimatedSection from "./components/Animated";
import BestSeller from "./components/BestSeller"
import Testimonials from "./components/Testimonials"
import { CartProvider } from "./components/contexts/CartContext";
import Footer from "./components/Footer"

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <AnimatedSection />
      <BestSeller />
      <Testimonials />
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;
