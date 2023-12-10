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
            Elevate your full-stack web development skills with our internship.
            Gain hands-on experience to construct dynamic web solutions and
            achieve your career goals.
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

              <h3 className="services-modal-title">
                Full Stack Web Development
              </h3>
              <p className="services-modal-description">
                Join our internship, leveraging two years of expertise. Dive
                into quality work in web design, development, and project
                management, accelerating your skills in Full Stack Web
                Development.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Introduction to Web Development.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Advanced CSS and JavaScript.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">React.js Fundamentals.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Advanced React.js.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Node.js and Express.js.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    MongoDB and Full-Stack Integration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={App} alt="" />
          <h3>Android App Development</h3>
          <p>
            Advance your expertise in Android app development with our
            internship. Acquire hands-on experience to craft impactful mobile
            solutions and reach your career milestones.
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
                Join our Android App Development internship with two years of
                expertise. Dive into delivering quality work for clients,
                gaining hands-on experience in app design, development,
                maintenance, and project handling.
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
                  <p className="services-modal-info">
                    Data Storage & Networking.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Database & Final Project.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={Java} alt="" />
          <h3>Java Fundamentals</h3>
          <p>
            Enhance your Java fundamentals proficiency with our internship. Gain
            hands-on experience to solidify foundational skills and pave the way
            for significant career milestones.
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

              <h3 className="services-modal-title">Java Fundamentals</h3>
              <p className="services-modal-description">
                Join our Java Fundamentals internship for concise, hands-on
                expertise in application design, development, and project
                handling, guided by our two years of industry experience.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Java Fundamentals.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Control Structure, Looping,Function & Methods.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">OOPs basics.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Arrays and Basic I/O.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Strings.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">File handling</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={Python} alt="" />
          <h3>Python Fundamentals</h3>
          <p>
            Boost your Python fundamentals proficiency with our internship. Gain
            hands-on experience to apply essential coding skills and advance
            towards your career objectives.
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

              <h3 className="services-modal-title">Python Fundamentals</h3>
              <p className="services-modal-description">
                Join our Python Fundamentals Internship with two years of
                expertise. Dive into quality work for clients, gaining hands-on
                experience in Python basics, development, and project handling.
                Elevate your skills in the dynamic realm of Python programming.
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
