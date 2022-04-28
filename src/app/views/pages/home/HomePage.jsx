import React from 'react';

import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <main>
      <Header />
      <section className='pb-5'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
