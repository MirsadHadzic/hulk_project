import React from 'react';
import '../styles/global.scss';

const WelcomeBox = () => {
  return (
    <section className="welcome-box">
      
      <div className="background"></div>

     
      <div className="right-image"></div>

      
      <div className="title-container">
        <h2 className="welcome-title">The Welcome Box</h2>
        <div className="stars"></div>
      </div>

     
      <p className="description">
        For the first delivery, every child receives the Welcome Box which is packed full of everything they'll need to kick off their outdoor fun of learning and discovery!
      </p>

      
      <div className="item-list">
       
        <div className="item">
          <div className="icon"></div>
          <p className="item-text">Colorful backpack for all of your new gear</p>
        </div>

        {/* Treasure Map */}
        <div className="item">
          <div className="icon"></div>
          <p className="item-text">Treasure Map to collect your monthly badges as you progress through the subscription</p>
        </div>

        {/* Nature Journal */}
        <div className="item">
          <div className="icon"></div>
          <p className="item-text">Nature journal to keep track of your drawings and learnings</p>
        </div>

        {/* Booklet */}
        <div className="item">
          <div className="icon"></div>
          <p className="item-text">Booklet full of activities, games, and learning material</p>
        </div>
      </div>

      
      <button className="orange-button">
        {/* Inlined SVG */}
        <svg
          id="Component_28_1"
          data-name="Component 28 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="50"
          viewBox="0 0 192 50"
        >
          <rect
            id="Rectangle_72"
            data-name="Rectangle 72"
            className="button-bg"
            width="192"
            height="50"
            rx="5"
            fill="#db7623"
          />
          <g id="Group_14" data-name="Group 14" transform="translate(-1564 -693)">
            <text
              id="Get_Your_First_Box"
              data-name="Get Your First Box"
              className="button-text"
              transform="translate(1599 726)"
              fill="#fff"
              font-size="20"
              font-family="MouseMemoirs-Regular, Mouse Memoirs"
              letter-spacing="0.06em"
            >
              <tspan x="0" y="0">Get Your First Box</tspan>
            </text>
          </g>
        </svg>
      </button>
    </section>
  );
};

export default WelcomeBox;