import React from 'react';
import { Button } from 'semantic-ui-react';
import picOfMe from '../assets/picOfMe.jpg';
import Contact from './Contact';

function About() {
  return (
    <div id='about'>
      <div className='about-container'>
      <div className='aboutMe'>
        <h2>I am a Full Stack Web Developer</h2><br/>
          <p>I have been a zookeeper for almost a decade, and most recently a veterinary technician. During the pandemic, I returned to zookeeping but really starting thinking about a new career that would continue to challenge me for years to come.</p>
          <p>So how did I get from animal care to Nashville Software School? I have always been intrigued by how things work, and there are several similarties between web development and animal care. You have to be adaptable, a problem solver, think outside the box and a valuable team member.</p>
          <p>I am an avid hiker, Ironman finisher and Eagle Scout. I enjoy learning and trying new things, and I hope to find my version of success in the web development community. </p>
        <Button
          inverted
          icon='github'
          a href='https://github.com/cmeffley'
          size='large'
        />
        <Button
          inverted
          icon='linkedin'
          a href='https://www.linkedin.com/in/chrismeffley/'
          size='large'
        />
        <Button
          inverted
          icon='mail outline'
          a href='mailto: cmeffley@gmail.com'
          size='large'
        /><Contact/>
      </div>
        <img src={picOfMe} className='myPic' />
      </div>
    </div>
  );
}

export default About;
