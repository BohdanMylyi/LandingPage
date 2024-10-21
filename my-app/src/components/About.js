import React from 'react';
import aboutPhoto from '../images';
import './styles';

const About = () => {
  return (
    <section className="about">
      <img src={aboutPhoto} alt="Profile Photo_2" />
      <div className="about-me">
        <h2 className="about-me">About me</h2>
        <p className="description-about">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
          consectetur lacus
        </p>
        <ul className="statistics">
          <li><img src="../images/statistics/UX.png" alt="UX" /></li>
          <li><img src="../images/statistics/Website Design.png" alt="Website Design" /></li>
          <li><img src="../images/statistics/App Design.png" alt="App Design" /></li>
          <li><img src="../images/statistics/Graphic Design.png" alt="Graphic Design" /></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
