import React from 'react';
import '../home.css';
import FullPageIntroWithFixedNavbar from './navbar';
import FooterPage from './footer';


function Home() {
    return (
            

       <div>
        
            <div className="hhm" style={{backgroundColor:'black'}}>
          
          <FullPageIntroWithFixedNavbar/>
           
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-lg-6">

                          <div className="name">
                              <h2>Hello ,</h2>
                              <h1>I'm <font className="hi">Hiruna </font>Gayashan<br/></h1>
                              <p className="details">
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
                              </p>

                              <a href='#' className="cv-btn">Download Cv</a>
                          </div>
                      </div>
                  </div>
              </div>
              <FooterPage/>
             </div>
             
            
             </div>
            
            
            
      
    )
}

export default Home;
