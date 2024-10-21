import React from "react";
import facebookIcon from "../images/social/Facebook - Negative.png";
import instagramIcon from "../images/social/Instagram - Negative.png";
import linkedinIcon from "../images/social/LinkedIn - Negative.png";
import twitterIcon from "../images/social/Twitter - Negative.png";


import "../styles/Socials.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
