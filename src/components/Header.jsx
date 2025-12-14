import React from 'react';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import './styles/navbar.css'; 
import logo from '../assets/logo.png';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Veloura</a>
      </div>
      
      <div className="navbar-links">
        <a href="/skincare">Skin care</a>
        <a href="/sunscreens">Sunscreens</a>
        <a href="/bodycare">Body care</a>
        <a href="/about">About</a>
      </div>

      <div className="navbar-actions">
        <a href="/search" aria-label="Search"><FiSearch /></a>
        <a href="/account" aria-label="Account"><FiUser /></a>
        <a href="/cart" className="navbar-bag" aria-label="Shopping Bag">
          <FiShoppingBag />
          <span>0</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
