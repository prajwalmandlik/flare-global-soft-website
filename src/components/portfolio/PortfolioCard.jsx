import React from "react";

const PortfoiloCard = ({ item }) => {
  return (
    <div>
      <div className="portfolio-card" key={item.id}>
        <img src={item.image} alt="" className='portfolio-img' />
        <h3 className="portfolio-title">{item.title}</h3>
        <a href={item.link} className='portfolio-button' target={"blank"}>
            Demo <i className="bx bx-right-arrow-alt portfolio-button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfoiloCard;
