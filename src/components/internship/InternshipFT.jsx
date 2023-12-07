import React, { useState } from "react";
import Web from "../../assest/web-intern.png";
import App from "../../assest/app-intern.png";
import Java from "../../assest/java-intern.png";
import Python from "../../assest/python-intern.png";

const InternshipFT = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="serviceFT container">
      <div className="section-text">
        <h2 className="section-title">Opportunities We Offer</h2>
        <span className="section-subtitle">
        A comprehensive platform for gearing up for your professional success
        </span>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={Web} alt="" />
          <h3>Full Stack Web Development</h3>
          <p>
          Elevate your full-stack web development skills with our internship. Gain hands-on experience to construct dynamic web solutions and achieve your career goals.
          </p>
          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Website Development</h3>
              <p className="services-modal-description">
                Serives with 2 years of experience. Providing quality work to
                clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Custom website design and development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Redesigning.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web application development and intergration.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Maintenance and support.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Domain and hosting.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Project handling and error solving.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={App} alt="" />
          <h3>Android App Development</h3>
          <p>
          Advance your expertise in Android app development with our internship. Acquire hands-on experience to craft impactful mobile solutions and reach your career milestones.
          </p>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Android App Development</h3>
              <p className="services-modal-description">
              Join our Android App Development internship with two years of expertise. Dive into delivering quality work for clients, gaining hands-on experience in app design, development, maintenance, and project handling.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Android Essentials.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Java Fundamentals.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Android UI Mastery.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Activities and Intents.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Data Storage & Networking.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Database & Final Project.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={Java} alt="" />
          <h3>Java Fundamentals</h3>
          <p>
          Enhance your Java fundamentals proficiency with our internship. Gain hands-on experience to solidify foundational skills and pave the way for significant career milestones.
          </p>
          <span className="services-button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Graphics Design</h3>
              <p className="services-modal-description">
                Serives with 2 years of experience. Providing quality work to
                clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Logo design and branding.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Print Materials.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Advertising.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Presentations.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Instagram Posts.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Video Production</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={Python} alt="" />
          <h3>Python Fundamentals</h3>
          <p>
          Boost your Python fundamentals proficiency with our internship. Gain hands-on experience to apply essential coding skills and advance towards your career objectives.
          </p>
          <span className="services-button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Internship</h3>
              <p className="services-modal-description">
              Gain hands-on experience with 2 years of industry expertise. Providing quality industry experience for Students & Beginners.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Get Certified.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Trained by Experts.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Explore Opportunities.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Utilities development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Gain Experience.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipFT;
