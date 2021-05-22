import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

function Tech({ ...techInfo }) {
  return (
    <div>
      <Image id='iconPic' src={techInfo.icon}/>
    </div>
  );
}

Tech.propTypes = {
  techInfo: PropTypes.object,
};

export default Tech;
