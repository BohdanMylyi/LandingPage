import React from "react";
import "../styles/Services.css";
import UI from "../icons/ui.png";
import WEB from "../icons/web.png";
import graphic from "../icons/graphic.png";
import app from "../icons/app.png";

const Services = () => {
  return (
    <section className="services">
      <div className="title-and-description">
        <h2 className="services-title">Services</h2>
        <p className="description-services">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div className="blocks">
        <div className="services-block">
          <img src={UI} className="block-icon" alt="UI Icon"></img>
          <br/>
          <medium>UI/UX</medium>
          <p className="description-block">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh
          </p>
        </div>
        <div className="services-block">
          <img src={WEB} className="block-icon" alt="Web Icon"></img>
          <br/>
          <medium>UI/UX</medium>
          <p className="description-block">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh
          </p>
        </div>
        <div className="services-block">
          <img src={graphic} className="block-icon" alt="Graphic icon"></img>
          <br/>
          <medium>UI/UX</medium>
          <p className="description-block">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh
          </p>
        </div>
        <div className="services-block">
          <img src={app} className="block-icon" alt="App Icon"></img>
          <br/>
          <medium>UI/UX</medium>
          <p className="description-block">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
