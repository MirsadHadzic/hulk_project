import React from 'react';
import '../styles/global.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div>
        <h2>What Are Our Adventurers Saying</h2>
      </div>
      <div className="stars"></div>
      <div className="testimonial">
        <p>
          “Lorem ipsum dolor sit amet, consectetur sadipscing elit; sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.”
        </p>
        <p>- David C.</p>
      </div>
      {/* arrow image visor image etc */}
      {/* Arrow Buttons */}
      <div className="arrow arrow-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g id="Component_16_6" data-name="Component 16 – 6" transform="translate(38 38) rotate(180)">
            <rect id="Rectangle_63" data-name="Rectangle 63" width="38" height="38" rx="3" fill="#fff"/>
            <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(2.794 2.602)">
              <path id="Path_67" data-name="Path 67" d="M7.5,18H23.206" transform="translate(0 -1.576)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              <path id="Path_68" data-name="Path 68" d="M18,7.5l6.551,4.974L18,17.449" transform="translate(-0.345 3.949)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="arrow arrow-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g id="Component_16_6" data-name="Component 16 – 6" transform="translate(38 38) rotate(180)">
            <rect id="Rectangle_63" data-name="Rectangle 63" width="38" height="38" rx="3" fill="#fff"/>
            <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(2.794 2.602)">
              <path id="Path_67" data-name="Path 67" d="M7.5,18H23.206" transform="translate(0 -1.576)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              <path id="Path_68" data-name="Path 68" d="M18,7.5l6.551,4.974L18,17.449" transform="translate(-0.345 3.949)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="map-image"></div>
      <div className="visor-image"></div>
      <h2 className="community-heading">Join Our Community!</h2>
      <div className="image-container">
        <div className="image image-1"></div>
        <div className="image image-2"></div>
        <div className="image image-3"></div>
        <div className="image image-4"></div>
      </div>
      <div className="image-arrow image-arrow-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g id="Component_16_6" data-name="Component 16 – 6" transform="translate(38 38) rotate(180)">
            <rect id="Rectangle_63" data-name="Rectangle 63" width="38" height="38" rx="3" fill="#fff"/>
            <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(2.794 2.602)">
              <path id="Path_67" data-name="Path 67" d="M7.5,18H23.206" transform="translate(0 -1.576)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              <path id="Path_68" data-name="Path 68" d="M18,7.5l6.551,4.974L18,17.449" transform="translate(-0.345 3.949)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="image-arrow image-arrow-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g id="Component_16_6" data-name="Component 16 – 6" transform="translate(38 38) rotate(180)">
            <rect id="Rectangle_63" data-name="Rectangle 63" width="38" height="38" rx="3" fill="#fff"/>
            <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(2.794 2.602)">
              <path id="Path_67" data-name="Path 67" d="M7.5,18H23.206" transform="translate(0 -1.576)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              <path id="Path_68" data-name="Path 68" d="M18,7.5l6.551,4.974L18,17.449" transform="translate(-0.345 3.949)" fill="none" stroke="#483729" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="follow-button">
        <svg id="Component_30_1" data-name="Component 30 – 1" xmlns="http://www.w3.org/2000/svg" width="155" height="50" viewBox="0 0 155 50">
          <rect id="Rectangle_71" data-name="Rectangle 71" width="155" height="50" rx="5" fill="#629a92"/>
          <g id="Group_807" data-name="Group 807" transform="translate(-1540 -693.5)">
            <text id="Follow_Us" data-name="Follow Us" transform="translate(1599 726)" fill="#fff" font-size="20" font-family="MouseMemoirs-Regular, Mouse Memoirs" letter-spacing="0.06em"><tspan x="0" y="0">Follow Us</tspan></text>
            <path id="instagram" d="M12,3c-2.444,0-2.75.011-3.71.054A6.624,6.624,0,0,0,6.1,3.473,4.6,4.6,0,0,0,3.472,6.1a6.636,6.636,0,0,0-.419,2.185C3.01,9.249,3,9.555,3,12s.01,2.75.054,3.71a6.624,6.624,0,0,0,.419,2.185,4.6,4.6,0,0,0,2.633,2.633,6.636,6.636,0,0,0,2.185.419C9.25,20.989,9.557,21,12,21s2.75-.011,3.71-.054a6.623,6.623,0,0,0,2.185-.419,4.6,4.6,0,0,0,2.633-2.633,6.636,6.636,0,0,0,.419-2.185C20.99,14.75,21,14.443,21,12s-.011-2.75-.054-3.71A6.623,6.623,0,0,0,20.528,6.1,4.6,4.6,0,0,0,17.9,3.472a6.636,6.636,0,0,0-2.185-.419C14.75,3.011,14.444,3,12,3m0,1.622c2.4,0,2.687.009,3.636.052a5,5,0,0,1,1.672.31,2.979,2.979,0,0,1,1.708,1.708,5,5,0,0,1,.31,1.671c.043.95.052,1.233.052,3.637s-.009,2.687-.052,3.636a5.032,5.032,0,0,1-.31,1.672,2.979,2.979,0,0,1-1.708,1.708,5,5,0,0,1-1.671.31c-.949.043-1.233.052-3.637.052s-2.689-.009-3.636-.052a5.032,5.032,0,0,1-1.672-.31,2.979,2.979,0,0,1-1.708-1.708,4.963,4.963,0,0,1-.31-1.671c-.043-.95-.052-1.233-.052-3.637s.009-2.687.052-3.636a5,5,0,0,1,.31-1.672A2.979,2.979,0,0,1,6.692,4.984a4.963,4.963,0,0,1,1.671-.31C9.312,4.631,9.6,4.622,12,4.622M12,15a3,3,0,1,1,3-3,3,3,0,0,1-3,3m0-7.621A4.621,4.621,0,1,0,16.621,12,4.621,4.621,0,0,0,12,7.379M17.884,7.2a1.08,1.08,0,1,1-1.08-1.08,1.08,1.08,0,0,1,1.08,1.08" transform="translate(1571.999 707)" fill="#fff" fill-rule="evenodd"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;