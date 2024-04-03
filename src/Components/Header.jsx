import React from 'react'
import { GiLaptop } from "react-icons/gi";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <GiLaptop className='mx-2' />
             Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header