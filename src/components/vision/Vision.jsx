import React from 'react'
import "./vision.css";
import VisionImg from "../../assest/vision.png";
import { HashLink } from 'react-router-hash-link';

const Vision = () => {
  return (
    <section className="vision container">
        <div className="vision-img">
            <img src={VisionImg} alt="" />
        </div>
        <div className="vision-content">
            <div className="vision-title">
                <h2>Make your Business reach the Highest level</h2>
            </div>

            <div className="vision-description">
                <p>We are dedicated to delivering Cutting-Edge Solutions that help Businesses achieve their Goals and reach New Heights.</p>
            </div>

            <div className="vision-subpoint">
                <div className="vision-icon"><i class='bx bx-bullseye'></i></div>
                <div className="vision-subpoint-description">
                    <h3>Mission:</h3>
                    <p>Our mission is to empower Businesses of all sizes with Innovative Technology Solutions that drive Growth, Streamline processes, and enhance their Competitive edge.</p>
                </div>
            </div>

            <div className="vision-subpoint">
            <div className="vision-icon"><i class='bx bx-run'></i></div>
                <div className="vision-subpoint-description">
                    <h3>Vision:</h3>
                    <p>Our vision to deliver exceptional value to our clients through Innovative Products and Services that help them achieve their Goals and reach new Heights.</p>
                </div>
            </div>

            <div className="vision-start-button">
            <HashLink to={"/Services#services"} >
                <button className="button">Get Started</button>
            </HashLink>
            </div>
        </div>
    </section>
  )
}

export default Vision
