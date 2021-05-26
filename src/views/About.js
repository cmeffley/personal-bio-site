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
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
          </p>
        <Button
          inverted
          icon='github'
          a href='https://github.com/cmeffley'
          size='huge'
        />
        <Button
          inverted
          icon='linkedin'
          a href='https://www.linkedin.com/in/chrismeffley/'
          size='huge'
        />
        <Button
          inverted
          icon='mail outline'
          a href='mailto: cmeffley@gmail.com'
          size='huge'
        /><Contact/>
        </div>
        <img src={picOfMe} className='myPic' />
      </div>
    </div>
  );
}

export default About;
