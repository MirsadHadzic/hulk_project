// App.jsx
import React from 'react';
import Header from './components/Header';
import Meho from './components/Meho';
import HowItWorks from './components/HowItWorks';
import WelcomeBox from './components/WelcomeBox';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'; // Import the new component
import './styles/global.scss';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WelcomeBox />
      <Meho />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;