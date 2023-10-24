import React, { useState } from "react";
import "./header.css";
import Logo from "../../assest/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  /* ================ Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // when the scroll is higher than 200 viewport height,add the scroll-header class to a tag with the header calss
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);

  return (
    <header className="header section">
      <nav className="nav container">
        <div className="nav-logo">
        <HashLink to={"/#home"} className={"logo-link"}>
          <img src={Logo} alt="" /> <span>Flare Global Soft</span>
            </HashLink>
        </div>

        <div className={toggle ? "nav-menu-show" : "nav-menu"}>
          <ul className={toggle ? "nav-links-show" : "nav-links"}>
            <HashLink to={"/#home"} onClick={() => setToggle(!toggle)} >
              <li className="nav-link">Home</li>
            </HashLink>
            <HashLink to={"/About#about"} onClick={() => setToggle(!toggle)}>
              <li className="nav-link" >About</li>
            </HashLink>
            <HashLink to={"/Services#services"} onClick={() => setToggle(!toggle)} >
              <li className="nav-link" >Services</li>
            </HashLink>
            <HashLink to={"/Contact#contact"} onClick={() => setToggle(!toggle)} >
              <li className="nav-link">Contact</li>
            </HashLink>
            <HashLink to={"/Internship#Internship"} onClick={() => setToggle(!toggle)} >
              <li className="nav-link">Internship</li>
            </HashLink>
          </ul>

          <div className="nav-toggle">
            <i
              class={toggle ? "uil uil-times" : "uil uil-bars"}
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
