import React from 'react';
import '../styles/global.scss';
import leftBackground from '../assets/images/Group 837.png';
import rightBackground from '../assets/images/Group 836.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="left-half" style={{ backgroundImage: `url(${leftBackground})` }}></div>
      <div className="right-half" style={{ backgroundImage: `url(${rightBackground})` }}></div>
      <div className="content">
        <h1 className="slogan">GET OUTSIDE!</h1>
        <p className="description">
          Monthly subscription box designed to get kids excited to spend more time outdoors and less time inside with their digital devices!
        </p>
        <button className="get-started">
          <svg
            id="Component_27_1"
            data-name="Component 27 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="50"
            viewBox="0 0 147 50"
          >
            <rect
              id="Rectangle_71"
              data-name="Rectangle 71"
              className="button-bg"
              width="147"
              height="50"
              rx="5"
              fill="#7ec6bc"
            />
            <text
              id="Get_Started"
              data-name="Get Started"
              className="button-text"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#483729"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "25px", 
                lineHeight: "28px", 
                fontFamily: "'Mouse Memoirs', sans-serif", 
                letterSpacing: "0px"
              }}
            >
              Get Started
            </text>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;