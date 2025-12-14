import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="brand-name">Veloura</h2>
          <p className="brand-tagline">
            Infused with botanical extracts for velvet-soft, radiant skin.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">New Launches</a></li>
            <li><a href="#">Gift Sets</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="footer-links">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* About Links */}
        <div className="footer-links">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom with Notice */}
      <div className="footer-bottom">
        <p className="footer-notice">
          This website is for demonstration purposes only.
        </p>
        <p>© {currentYear} Veloura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
