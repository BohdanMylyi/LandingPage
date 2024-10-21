import React from "react";
import logo from "../logo/Logo.png";


import "../styles/styles.css";

const Navbar = () => {
  return (
    <navbar>
      <div className="logo">
        <img src={logo} alt="Muhammad Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#" className="cv-button">
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </navbar>
  );
};

export default Navbar;
