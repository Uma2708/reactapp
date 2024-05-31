import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">HO KEN</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="user-menu">
        <img src="user-icon.png" alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;
