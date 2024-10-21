import React from "react";
import logo from "../logo/Logo.png";
import Nav from "../components/Nav";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <div className="logo">
        <img src={logo} alt="Muhammad Logo" />
      </div>
      <Nav />
      <li>
        <a href="#" className="cv-button">
          Download CV
        </a>
      </li>
    </navbar>
  );
};

export default Navbar;
