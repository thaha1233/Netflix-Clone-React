import React, { useState } from 'react';
import {Link, link} from 'react-router-dom';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

 function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar className='nav' expand='lg' light  >
      <MDBContainer fluid>
        {/* MDBNavbarBrand => Link = Error*/}
        <MDBNavbarBrand className="nav-logo" >Netflix </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon className='bars' icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav  >
            <Link className="link" to="/" active aria-current='page' href='#'>
              Home
            </Link >
            <Link className="link" to="/Movies">Movies</Link>
            <Link className="link" to="/search">search</Link>
        
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
  );
}

export default Navbar;