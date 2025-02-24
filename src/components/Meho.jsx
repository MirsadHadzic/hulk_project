import React from 'react';
import '../styles/global.scss';
import rightTopImage from '../assets/images/AdobeStock_317982032.png';
import rightBottomImage from '../assets/images/AdobeStock_72319945.png';
import leftTopImage from '../assets/images/AdobeStock_447498369.png';
import leftBottomImage from '../assets/images/AdobeStock_343360291.png';

const Meho = () => {
  return (
    <section className="meho">
      
      <div className="background"></div>

      
      <h2 className="title">Outdoor Fun Continues Each Month</h2>

      
      <p className="description">
        Each new box comes with products, activities, and a booklet with learning material and games.
      </p>

      
      <div className="images">
        <div className="right-top-image" style={{ backgroundImage: `url(${rightTopImage})` }}></div>
        <div className="right-bottom-image" style={{ backgroundImage: `url(${rightBottomImage})` }}></div>
        <div className="left-top-image" style={{ backgroundImage: `url(${leftTopImage})` }}></div>
        <div className="left-bottom-image" style={{ backgroundImage: `url(${leftBottomImage})` }}></div>
      </div>

      
      <div className="white-rectangle">
        <p>
          You can expect lots of different themes all built around learning and spending time outdoors like Animals, Star Gazing, Gardening, Parks, Outdoor Crafts & Games, and many more!
        </p>
        
        <div className="little-mark"></div>
      </div>

      
      <button className="subscribe-now-button">
        {/* Inlined SVG */}
        <svg
          id="Component_29_1"
          data-name="Component 29 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="167"
          height="50"
          viewBox="0 0 167 50"
        >
          <rect
            id="Rectangle_73"
            data-name="Rectangle 73"
            className="button-bg"
            width="167"
            height="50"
            rx="5"
            fill="#7ec6bc"
          />
          <text
            id="Subscribe_now"
            data-name="Subscribe now"
            className="button-text"
            transform="translate(35 32.39)"
            fill="#483729"
            font-size="20"
            font-family="MouseMemoirs-Regular, Mouse Memoirs"
            letter-spacing="0.06em"
          >
            <tspan x="0" y="0">Subscribe Now</tspan>
          </text>
        </svg>
      </button>
    </section>
  );
};

export default Meho;