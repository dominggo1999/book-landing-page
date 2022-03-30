import React from 'react';
import Header from './layout/Header/Header';
import Synopsis from './layout/Synopsis/Synopsis';
import About from './layout/About/About';
import Sponsors from './layout/Sponsors/Sponsors';
import Chapters from './layout/Chapters/Chapters';
import Reviews from './layout/Reviews/Reviews';
import Author from './layout/Author/Author';
import Contact from './layout/Contact/Contact';
import Faq from './layout/Faq/Faq';
import Footer from './layout/Footer/Footer';
import Hero from './layout/Hero/Hero';
import BuyNow from './layout/BuyNow/BuyNow';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Synopsis />
      <About />
      <Sponsors />
      <Chapters />
      <BuyNow />
      <Reviews />
      <Author />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
