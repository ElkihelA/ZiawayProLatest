import React from 'react';
import './landings.scss';

import { SectionNavbar } from './sections/SectionNavbar';
import { SectionOne } from './sections/SectionOne';
import { SectionThree } from './sections/SectionThree';
import { SectionTwo } from './sections/SectionTwo';
import { SectionFour } from './sections/SectionFour';
import { SectionFooter } from './sections/SectionFooter';

const Landing = () => {
  return (
    <main className='landing-container'>
      <SectionNavbar />
      <div className='pt-80'>
        <SectionOne id='section1' />
        <SectionTwo id='section2' />
        <SectionThree id='section3' />
        <SectionFour id='section4' />
      </div>
      <SectionFooter id='section-footer' />
    </main>
  );
};

export default Landing;
