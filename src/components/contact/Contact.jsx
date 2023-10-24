import React from "react";
import HeroSection from "../heroForOthersection/HeroSection";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact">
      <HeroSection name={"contact"}  />

      <ContactForm />

      {/* <div className="contact-links">
        <a href="https://wa.me/+919209237239" target={"blank"}>
          <div className="contact-link-card">
            <div className="contact-link-icon">
              <i class="bx bxl-whatsapp"></i>
            </div>
            <div className="contact-link-info">
              Phone / Whatsapp : <br /> (+91) 9209237239
            </div>
          </div>
        </a>

        <a href="mailto:flareglobalsoft@gmail.com" target={"blank"}>
          <div className="contact-link-card">
            <div className="contact-link-icon">
              <i class="bx bxl-gmail"></i>
            </div>
            <div className="contact-link-info">
              Email :<br /> flareglobalsoft@gmail.com
            </div>
          </div>
        </a>

        <a href="https://www.instagram.com/flareglobalsoft/" target={"blank"}>
          <div className="contact-link-card">
            <div className="contact-link-icon">
              <i class="bx bxl-instagram"></i>
            </div>
            <div className="contact-link-info">
              Instagram :<br /> Flare Global Soft
            </div>
          </div>
        </a>
      </div> */}


    </div>
  );
};

export default Contact;
