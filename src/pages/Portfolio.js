import React from "react";
import Footer from "../components/Footer"
import HeaderAllPages from "../components/HeaderAllpages";

import portfolioImg from "../assets/images/portfolioImg/kasa.webp"
import { NavLink } from "react-router-dom";


const Portfolio = () => {
  return (
    <div>
      <HeaderAllPages />
      <div className="content">
      <NavLink to={"https://github.com/arthurPFMR/P7_OCR_Kasa"}>
      <div className="kasa"></div>
      </NavLink>
      <p className="description">Projet réalisé lors de ma formation chez OpenClassrooms. 
        Création d'une application web de location immobilière avec React,
        een suivant les maquettes Figma. </p>
        </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
