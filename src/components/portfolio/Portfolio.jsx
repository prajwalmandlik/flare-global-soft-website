import React from "react";
import "./portfolio.css";
import PortfolioGallary from "./PortfolioGallary";

function Portfoilo() {
  return (
    <section className=" portfolio section" id="portfolio">
      <div className="section-text">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span>
      </div>
      <PortfolioGallary />
    </section>
  );
}

export default Portfoilo;
