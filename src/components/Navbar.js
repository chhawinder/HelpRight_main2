import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="https://chhawinder.github.io/HelpRight_main2/">
          HelpRight
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          <ul className="navbar-nav navbar-right">
          <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://chhawinder.github.io/HelpRight_feed/">
                Feed
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
