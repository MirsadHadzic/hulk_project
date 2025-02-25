import React, { useState } from 'react';
import '../styles/global.scss';
import logo from '../assets/images/Wanlow Type Logo w Tagline.png'; 
import getStartedIcon from '../assets/images/Component 25 – 1.png'; 
import icon1 from '../assets/images/Component 26 – 1.png'; 
import icon2 from '../assets/images/Component 24 – 2.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`left-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" className="about-us">About Us</a></li>
          <li><a href="#faqs" className="faqs">FAQs</a></li>
          <li><a href="#contact" className="contact-us">Contact Us</a></li>
        </ul>
      </nav>

      <div className="logo">
        <img src={logo} alt="Wanlow Logo" />
      </div>

      <div className="right-section">
        <div className="get-started">
          <button>
            <img src={getStartedIcon} alt="Get Started" />
          </button>
        </div>
        <div className="icon-container">
          <img src={icon1} alt="Icon 1" />
          <div className="icon-2-wrapper">
            <img src={icon2} alt="Icon 2" />
            <div className="blue-circle">1</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
