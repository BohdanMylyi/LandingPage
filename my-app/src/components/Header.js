import React from 'react';
import profilePhoto from '../images/image-1.png';
import '../styles/styles.css';


const Header = () => {
  return (
    <>
    <header>
      <section className="heading">
        <div className="text">
          <small className="heading-welcome">
            <span className="small-welcome">Hi, I am</span>
            <span className="small-name">Muhammad Bin Jameel</span>
          </small>
          <h1 className="title">
            <span className="title_part-1">UI & UX</span>
            <span className="title_part-2">Designer</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
          </p>
          <a href="#" className="btn">Hire Me</a>
        </div>
      </section>

      <section className="photo-and-social">
        <div className="photo">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
      </section>
    </header>
    </>
  );
};

export default Header;
