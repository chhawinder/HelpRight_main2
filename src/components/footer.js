import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='Information col'>
          <h1>HelpRight</h1>
          <img src="public\favicon.png" alt="" />
          <p>Volunteer for India is an initiative of Society for Promotion of Volunteerism, a registered non profit organization (TVM/TC/45/2021) under the The Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act, 1955, working towards promoting volunteerism.</p>

        </div>
        <div className='sitemap col'>
          <h4>SITEMAPS</h4>
          <ul className="navbar-nav navbar-right">
          <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
          <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERIVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACTS
              </a>
            </li>
           
          </ul>


        </div>
        <div className='col'>
          <h4>LOCATION</h4>
          <p>
          <i class="fa-solid fa-location-dot"></i>    Head Office<br/>
            TC 7/1200, Chittatinkara
            Vattiyoorkavu PO
            Trivandrum, Kerala-695013.
          </p>

        </div>
        <div className='col'>
          <h4>CONNECT WITH US</h4>
          
        <div className="social-links">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
          <i className="far fa-envelope"></i>
        </a>
        <br />
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-phone"></i>  
        </a>
        <h4>+91 7347235182</h4>
        
      </div>

        </div>


      </div>
      
     {/* <link rel="stylesheet" href="path/to/your/css/file.css" /> */}
    </footer>
  );
}

export default Footer;
