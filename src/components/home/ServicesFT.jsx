import React, { useState } from "react";
import Web from "../../assest/web.png";
import App from "../../assest/app.png";
import Graphic from "../../assest/graphic.png";

const ServiesFT = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="serviceFT container">
      <div className="section-text">
        <h2 className="section-title">Services We Deliver</h2>
        <span className="section-subtitle">
          A complete solution for preparing for your success
        </span>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={Web} alt="" />
          <h3>Website Development</h3>
          <p>
            Whether you're looking to establish a strong online presence, drive
            traffic to your site, or streamline your business processes, we have
            the expertise to help you achieve your goals.
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
          <h3>Application Development</h3>
          <p>
            Whether you're looking to develop a mobile app or a custom
            application to streamline your business processes, we have the
            expertise and experience to help you achieve your goals.
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

              <h3 className="services-modal-title">Application Development</h3>
              <p className="services-modal-description">
                Serives with 2 years of experience. Providing quality work to
                clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Custom app design and development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">App redesigning.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Mobile SDKs.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Utilities development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Maintenance and support.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Project and error solving.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card">
          <img src={Graphic} alt="" />
          <h3>Graphics Design</h3>
          <p>
            Whether you're looking for a new logo, a complete brand identity, or
            anything in between, our graphics design services have got you
            covered.
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
      </div>
    </section>
  );
};

export default ServiesFT;
