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
import Hero from './layout/Hero/Hero';
import BuyNow from './layout/BuyNow/BuyNow';
import Footer from './layout/Footer/Footer';
import { AppWrapper, ScrollPaddingTop } from './App.style';
import { headerHeight } from './constants/headerHeight';

const App = () => {
  return (
    <AppWrapper style={{ paddingTop: headerHeight }}>
      <ScrollPaddingTop />
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
    </AppWrapper>
  );
};

export default App;
