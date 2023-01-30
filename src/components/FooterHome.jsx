import React from 'react';
import { NavLink } from 'react-router-dom';

// import gitImg from "../assets/images/git.webp"
// import linkedinImg from "../assets/images/linkedin.png"
// import twitterImg from "../assets/images/twitter.png"

const Footer = () => {
    return (
            <div className="followMe">
               <p>Me suivre</p>
               <p className='line'></p>
               <NavLink to={"https://github.com/arthurPFMR"}>
               {/* <img src={gitImg} alt="logo github" />  */}
               <div className="git"></div>
               </NavLink>
               <NavLink to={"https://www.linkedin.com/in/arthur-pulfermuller-358561230/"}>
                <div className="linkedin"></div>
               {/* <img src={linkedinImg} alt="logo github" /> */}
               </NavLink> 
               <NavLink to={"https://twitter.com/ArthurPFMR"}>
                <div className="twitter"></div>
               {/* <img src={twitterImg } alt="logo github" />  */}
               </NavLink>
                </div>
    );
};

export default Footer;