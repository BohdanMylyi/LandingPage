import React from "react";
import logo from "../../logo";
import {
  facebookIcon,
  twitterIcon,
  instagramIcon,
  linkedinIcon,
} from "../../logo";
import "./styles";

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
      <ul className="social">
        <li>
          <a href="#">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
