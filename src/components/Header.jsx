import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="userName">
        <p className="firstName">PULFERMULLER</p>
        <p className="name">Arthur</p>
      </div>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink to="/portfolio" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink to="/career" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>PARCOURS</li>
        </NavLink>
        <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>CONTACT</li>
        </NavLink>

      </ul>
    </div>
  );
};

export default Header;
