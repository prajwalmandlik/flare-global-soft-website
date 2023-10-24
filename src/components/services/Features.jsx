import React from "react";
import "./services.css";
import Img1 from "../../assest/Features/collaboration.png";
import Img2 from "../../assest/Features/delivery.png";
import Img3 from "../../assest/Features/after-seles-services.png";
import Img4 from "../../assest/Features/24hr-delivery.png";

const Features = () => {
  return (
    <>
    <section className="section container features  bg-color">
      <div className="section-text">
        <h2 className="section_title">
          We believe that success is about more than just delivering great
          products and services.
        </h2>
      </div>

      <div className="feature-section">
        <div className="feature-img">
          <img src={Img1} alt="" />
        </div>
        <div className="feature-info">
          <h2 className="feature-title">Active Collaboration:</h2>
          <p className="feature-description">
            At flare globla soft, we believe that collaboration is key to
            success. That's why we work closely with our clients to understand
            their needs and provide them with the best possible solutions. Our
            team of experts will listen to your concerns, provide guidance, and
            work with you to find the best technology solutions for your
            business.
          </p>
        </div>
      </div>
      </section>
      <section className="section container features">

      <div className="feature-section opposite">
        <div className="feature-img">
          <img src={Img2} alt="" />
        </div>
        <div className="feature-info">
          <h2 className="feature-title">On-Schedule Delivery:</h2>
          <p className="feature-description">
            We understand that your time is valuable, which is why we prioritize
            on-schedule delivery. Our team of experts will work tirelessly to
            ensure that your projects are delivered on time and to the highest
            standards. Whether you need a new website, custom software, or a
            mobile app, we will make sure that it's delivered on time and on
            budget.
          </p>
        </div>
      </div>
      </section>
      <section className="section container features bg-color">
      <div className="feature-section">
        <div className="feature-img">
          <img src={Img3} alt="" />
        </div>
        <div className="feature-info">
          <h2 className="feature-title">After Sales Services:</h2>
          <p className="feature-description">
            At flare global soft, we don't just deliver technology solutions, we
            provide ongoing support and services to ensure that your business
            continues to thrive. From regular software updates to technical
            support, our after-sales services will help you keep your technology
            running smoothly and stay ahead of the competition.
          </p>
        </div>
      </div>
      </section>
      <section className="section container features">

      <div className="feature-section opposite">
        <div className="feature-img">
          <img src={Img4} alt="" />
        </div>
        <div className="feature-info">
          <h2 className="feature-title">24x7 On-Support:</h2>
          <p className="feature-description">
            We know that technology issues can arise at any time, which is why
            we provide 24x7 on-support. Our technical support team is available
            around the clock to assist you with any technology-related issues
            you may have. Whether you need help with a hardware repair or
            software troubleshooting, our team is here to help.
          </p>
        </div>
      </div>

    </section>
    </>
  );
};

export default Features;
