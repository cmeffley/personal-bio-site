import React from 'react';
import { Button } from 'semantic-ui-react';
import picOfMe from '../assets/picOfMe.jpg';
import Contact from './Contact';

function About() {
  return (
    <div id='about'>
      <div className='about-container'>
      <div className='aboutMe'>
        <h2>I am a Software Engineer</h2><br/>
          <p>I was in the animal care field for over a decade before I became a software engineer. I discovered many similarities between my old career and new one, including: problem solving, efficient communication, adaptability and passion.</p>
          <p>I graduated from Nashville Software School in January of 2022 and have been eager to continue my education and broaden my knowledge as much as possible.</p>
          <p>If I am not in front of my computer, you will find me outside hiking, cycling or training for my next endurance adventure.</p>
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
