import React from 'react';
import '../styles/global.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      {/* Background */}
      <div className="background"></div>

      {/* Heading */}
      <h1 className="heading">How It Works</h1>

      {/* Boxes */}
      <div className="boxes">
        {/* Box 1 */}
        <div className="box">
          <div className="outer-box"></div>
          <div className="number">1</div>
          <h2 className="title">Order Your First Box</h2>
          <p className="description">
            You’ll start with the Welcome Box, followed by 12 amazing boxes to discover
          </p>
        </div>

        {/* Box 2 */}
        <div className="box">
          <div className="outer-box"></div>
          <div className="number">2</div>
          <h2 className="title">Delivered To Your Door</h2>
          <p className="description">
            Check your mailbox monthly
          </p>
        </div>

        {/* Box 3 */}
        <div className="box">
          <div className="outer-box"></div>
          <div className="number">3</div>
          <h2 className="title">Get Outside And Have Some Fun!</h2>
          <p className="description">
          In the backyard or the backcountry, Wanlow is designed to inspire kids to spend more time outdoors
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;