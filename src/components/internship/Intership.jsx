import React from "react";
import HeroSection from "../heroForOthersection/HeroSection";
// import Team from "../team/Team";
// import Testimonials from "../testimonials/Testimonials";
// import Vision from "../vision/Vision";
import InternshipFT from "./InternshipFT";
import Logo from "../../assest/footer-logo.png";
import "./internship.css";
import VisionImg from "../../assest/vision-intern.png";
import { HashLink } from "react-router-hash-link";
import Roadmap from "./Roadmap";

const About = () => {
  return (
    <div id="about">
      <HeroSection name={"Internship"} />
      <section className="container section">
        <div className="about-intern">
          <div className="logo">
            <img src={Logo} alt="" srcset="" />
          </div>
          <div className="about-intern-text">
            <p>Tech Elevate: Elevating Careers, Transforming Futures.</p>
          </div>
        </div>
      </section>

      <div>
        <section className="vision container  bg-color">
          <div className="vision-img">
            <img src={VisionImg} alt="" />
          </div>
          <div className="vision-content">
            <div className="vision-title">
              <h2>Elevate your career with our internship program.</h2>
            </div>

            <div className="vision-description">
              <p>
                Dedicated to delivering cutting-edge solutions in our Internship
                Program, fostering goal achievement and professional
                advancement.
              </p>
            </div>

            <div className="vision-subpoint">
              <div className="vision-icon">
                <i class="bx bx-bullseye"></i>
              </div>
              <div className="vision-subpoint-description">
                <h3>Mission:</h3>
                <p>
                  Empowering emerging innovators with experiential learning.
                </p>
              </div>
            </div>

            <div className="vision-subpoint">
              <div className="vision-icon">
                <i class="bx bx-run"></i>
              </div>
              <div className="vision-subpoint-description">
                <h3>Vision:</h3>
                <p>
                  Pioneering transformative education, bridging the
                  academia-industry gap towards excellence in technology.
                </p>
              </div>
            </div>

            <div className="vision-start-button">
              <HashLink to={"/Internship-form"}>
                <button className="button">Get Started</button>
              </HashLink>
            </div>
          </div>
        </section>
        <InternshipFT />
      </div>
      <div className="container bg-color">
        <Roadmap />
      </div>
    </div>
  );
};

export default About;
