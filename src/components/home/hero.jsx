import React from "react";
import { HashLink } from "react-router-hash-link";
import Hero from "../../assest/hero-img.png";

const hero = () => {
  return (
    <section className="hero container bg-color" id="Hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Empower your vision with <br /> Flare Global Soft
        </h1>
        <p className="hero-subtitle">
          We provide consulting services, helping companies to reach their
          highest level. We optimize Business processes, making them easier.
        </p>
        <div className="hero-buttons">
          <HashLink to={"/Services#services"}>
            <button className="get-started hero-button">Get Started</button>
          </HashLink>
          <HashLink to={"/About#about"}>
            <button className="learn-more hero-button">Learn More</button>
          </HashLink>
        </div>
      </div>

      <div className="hero-img">
        <img src={Hero} alt="" />
      </div>
    </section>
  );
};

export default hero;
