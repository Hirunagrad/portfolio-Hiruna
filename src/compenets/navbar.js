import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
//import { BrowserRouter as Router } from 'react-router-dom';

import '../navbar.css';



class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
         
            <MDBNavbar className="nav" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>H.</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/"><span>Home</span></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="about"><span>About</span></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><span>Profile</span></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><span>Contact us</span></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              </MDBCollapse>  
            </MDBNavbar>
         

         
        </header>

       
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar