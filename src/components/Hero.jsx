import React, { useState, useEffect } from 'react';
import './styles/Hero.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const slides = [
  { id: 1, image: banner1, buttonText: 'Shop Now' },
  { id: 2, image: banner2, buttonText: 'Explore Now' },
  { id: 3, image: banner3, buttonText: 'Buy Now' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <button className="cta-button">{slide.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
