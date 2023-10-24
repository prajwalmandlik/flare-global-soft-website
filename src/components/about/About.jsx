import React from "react";
import HeroSection from "../heroForOthersection/HeroSection";
// import Team from "../team/Team";
import Testimonials from "../testimonials/Testimonials";
import Vision from "../vision/Vision";
import Logo from "../../assest/footer-logo.png";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <HeroSection name={"about"} />
        <section className="container section  bg-color">
      <div className="about-us" >
          <div className="logo">
            <img src={Logo} alt="" srcset="" />
          </div>
          <div className="about-us-text">
            <p>
              Welcome to Flare Global Soft, a dynamic and innovative Information
              Technology startup. We are dedicated to delivering cutting-edge
              solutions that help businesses achieve their goals and reach new
              heights. Our team of experts combines their passion for technology
              with a deep understanding of our clients' needs to create truly
              transformative solutions.
            </p>
          </div>
      </div>
        </section>

      <div>
        <Vision />
      </div>

      {/* <div id="team" className="bg-color">
        <Team />
      </div> */}
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
