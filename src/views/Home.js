import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import About from './About';
import ProjectCards from './ProjectCards';
import TechUsed from './TechUsed';
import Footer from './Footer';

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
    <div id='home'>
      <h1 className='greeting'
        style={{ transform: `translateY(-${offSetY * 0.7}px)` }}
      >Hello</h1>
      <h1 className='name'
        style={{ transform: `translateY(-${offSetY * 0.7}px)` }}
      >I&apos;m Chris Meffley</h1>
      <header className='header'>
        <Icon id='arrowIcon' name='angle double down' size='big'/>
      </header>
      <About/>
      <div className='scroll-img1'></div>
      <ProjectCards/>
      <div className='scroll-img2'></div>
      <TechUsed/>
      <Footer/>
    </div>
  );
}

export default Home;
