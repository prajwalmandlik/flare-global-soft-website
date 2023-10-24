import React from "react";
import "./home.css";
import Hero from "./hero";
import Testimonials from "../testimonials/Testimonials";
// import Team from "../team/Team";
import Vision from "../vision/Vision";
import Quote from "./Quote";
import ServiesFT from "./ServicesFT";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <ServiesFT />
      <div className="bg-color">
        <Vision />
      </div>
      <Quote />
      <Testimonials />
      {/* <Team /> */}
    </div>
  );
};

export default Home;
