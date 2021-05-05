import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="footer">
      
      
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Hiruna Gayashan </a>
        </MDBContainer>
     
    </MDBFooter>
  );
}

export default FooterPage;