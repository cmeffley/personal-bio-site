import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
} from 'reactstrap';

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
                <Link className='nav-link' to='/editprojects'>Edit Projects</Link>
              </DropdownItem>
              <DropdownItem>
                <Link className='nav-link' to='/edittech'>Edit Tech</Link>
              </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
  );

  return (
    <>
      <Navbar className='navigation' color='light' light expand='md' sticky='top'>
        <Link className='navbar-brand' to='/'>Chris Meffley</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link' smooth to='#about'>About</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link' smooth to='#projects'>Projects</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link' smooth to='#tech'>Technologies</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link' smooth to='#footer'>Connect</HashLink>
            </NavItem>
            {admin && authenticated()}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
NavBar.propTypes = {
  admin: PropTypes.any
};
export default NavBar;
