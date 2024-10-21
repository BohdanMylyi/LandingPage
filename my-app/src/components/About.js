import React from 'react';
import aboutPhoto from '../images/image-2.png';
import UX from '../images/statistics/UX.png'
import websiteDesign from '../images/statistics/Website Design.png'
import AppDesign from '../images/statistics/AppDesign.png'
import GraphicDesign from '../images/statistics/Graphic Design.png'



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
          <li><img src={UX} alt="UX" /></li>
          <li><img src={websiteDesign} alt="Website Design" /></li>
          <li><img src={AppDesign} alt="App Design" /></li>
          <li><img src={GraphicDesign} alt="Graphic Design" /></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
