import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function AdminAuth({ admin }) {
  return (
    <div>
      <h1>hello world</h1>
       { admin !== null
            && <div className='auth-btn-container'>
                {
                  admin ? <Button color='danger' onClick={signOutUser}>SignOut?</Button>
                    : <Button color='info' onClick={signInUser}>SignIN!</Button>
                }
              </div>
            }
    </div>
  );
}

AdminAuth.propTypes = {
  admin: PropTypes.any
};

export default AdminAuth;
