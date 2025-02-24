import React, { useState } from 'react';
import '../styles/global.scss';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleHover = () => {
    setIsHovered(true);
    setInputValue('username@email.com'); // Da se automatski teskt napise
  };

  const handleLeave = () => {
    setIsHovered(false);
    setInputValue(''); // Clear input
  };

  return (
    <footer className="footer">
      {/* Logo */}
      <div className="logo"></div>

      {/* Copyright */}
      <div className="copyright">© 2023 Wanlow</div>

      {/* Links */}
      <div className="privacy-policy">Privacy Policy</div>
      <div className="terms-conditions">Terms and Conditions</div>

      {/* Subscription Section */}
      <div className="subscribe">Subscribe</div>
      <div className="see-whats-new">See What's New</div>
      <div className="gift">Gift</div>
      <div className="support">Support</div>
      <div className="faqs">FAQs</div>

      {/* Signup to Receive Offers */}
      <div className="signup-offers">Signup to Receive Exclusive Offers, Content and More!</div>

      {/* Search Bar */}
      <div
        className="search-bar"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <input
          type="text"
          placeholder="Enter your email"
          value={inputValue} 
          readOnly // Spreciti pisanje bilo kakvo
        />
      </div>

    {/* inline SVG za komponentu */}

      {/* Sign In Button */}
      <div className="sign-in-button">
        <svg id="Component_31_1" data-name="Component 31 – 1" xmlns="http://www.w3.org/2000/svg" width="118" height="50" viewBox="0 0 118 50">
          <rect id="Rectangle_71" data-name="Rectangle 71" width="118" height="50" rx="5" fill="#7ec6bc"/>
          <g id="Group_807" data-name="Group 807" transform="translate(-1540 -693.5)">
            <text id="Sign_In" data-name="Sign In" transform="translate(1575 726)" fill="#483729" font-size="20" font-family="MouseMemoirs-Regular, Mouse Memoirs" letter-spacing="0.06em"><tspan x="0" y="0">Sign In</tspan></text>
          </g>
        </svg>
      </div>

      {/* Social Media Icons */}
      <div className="instagram-logo"></div>
      <div className="facebook-logo"></div>
      <div className="youtube-logo"></div>
      <div className="tiktok-logo"></div>

      {/* Trees Image */}
      <div className="trees-image"></div>
    </footer>
  );
};

export default Footer;