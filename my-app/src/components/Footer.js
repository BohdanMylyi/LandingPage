import React from "react";
import logo from "../logo/Logo.png";
import "../styles/Footer.css";
import Nav from "../components/Nav";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Muhammad Logo" className="logo-footer" />
      <div className="centered-nav">
        <Nav />
      </div>
      <div className="centered-socials">
        <Socials />
      </div>
      <footerBottom>
        <span className="footerBottom-text">
          © 2023 <span className="footerBottom-text_name">Muhammad All</span>{" "}
          Rights Reserved , Inc.
        </span>
      </footerBottom>
    </footer>
  );
};

export default Footer;
