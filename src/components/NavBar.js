import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
       <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Admin Edit
          </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link className="nav-link" to="/editprojects">Edit Projects</Link>
              </DropdownItem>
              <DropdownItem>
                  Option 2
              </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
  );

  return (
    <div>
      <Navbar className='navigation' color="light" light expand="md">
        <NavbarBrand href="/">Chris Meffley</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tech">Technologies</Link>
            </NavItem>
            {admin && authenticated()}
          </Nav>
          { admin !== null
            && <div className='auth-btn-container'>
                {
                  admin ? <Button color='danger' onClick={signOutUser}>SignOut?</Button>
                    : <Button color='info' onClick={signInUser}>SignIN!</Button>
                }
              </div>
            }
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  admin: PropTypes.any
};
export default NavBar;
