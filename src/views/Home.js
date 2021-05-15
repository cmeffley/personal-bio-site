import React from 'react';
import front from '../assets/front.png';
import side from '../assets/side.png';
import mountain from '../assets/mountain.png';
import sky from '../assets/sky.png';

function Home() {
  return (
    <>
      <header className='header'>
        <img src={front} className='front' />
        <img src={side} className='side'/>
        <img src={mountain} className='mountain'/>
        <img src={sky} className='sky'/>
      </header>
    </>
  );
}

export default Home;
