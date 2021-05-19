import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import front from '../assets/front.png';
import side from '../assets/side.png';
import mountain from '../assets/mountain.png';
import About from './About';
import Tech from './TechUsed';

function Home() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <h1 className='greeting'
        style={{ transform: `translateY(-${offSetY * 0.8}px)` }}
      >Hello</h1>
      <h1 className='name'
        style={{ transform: `translateY(-${offSetY * 0.8}px)` }}
      >I&apos;m Chris Meffley</h1>
      <header className='header'>
        <img src={front} className='front'
          style={{ transform: `translateY(${offSetY * 0.5}px)` }}
        />
        <img src={side} className='side'
          style={{ transform: `translateY(${offSetY * 0.5}px)` }}
        />
        <img src={mountain} className='mountain'
          style={{ transform: `translateY(${offSetY * 0.4}px)` }}
        />
        <Icon id='arrowIcon' name='angle double down' size='big'/>
      </header>
      <About style={{ transform: `translateY(${offSetY * 0.1}px)` }}/>
      <Tech />
    </>
  );
}

export default Home;
