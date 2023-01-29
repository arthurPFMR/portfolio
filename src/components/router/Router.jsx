import React from "react";
import { Routes, Route } from "react-router-dom";
import Career from "../../pages/Career";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio /> } />
      <Route path="/career" element={<Career /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
  );
};

export default Router;
