import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import {link} from 'react-router-dom';


import ".index.css"

 function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
        Gituhb
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer ;