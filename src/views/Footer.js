import React from 'react';
import { Button } from 'semantic-ui-react';
import Contact from './Contact';

function Footer() {
  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>Thank you for visiting my Portfolio Site</h4>
            <p>Special thank you to Roy at <a href='mailto:     perfectcapturesphoto@gmail.com'>Perfect Captures Photo</a> for helping create the home photo!
            </p>
          </div>
          <div className='col'>
            <h4>Connect</h4>
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
            />
            <Contact/>
          </div>
        </div>
        <hr color='white'/>
        <div className='row'>
          <p className='col-sm'>
            &copy;Chris Meffley 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
