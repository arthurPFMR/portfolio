import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
            <div className="followMeAllPage">
               <p>Me suivre</p>
               <p className='line'></p>
               <NavLink to={"https://github.com/arthurPFMR"}>
               <div className="gitAllPage"></div>
               </NavLink>
               <NavLink to={"https://www.linkedin.com/in/arthur-pulfermuller-358561230/"}>
                <div className="linkedinAllPage"></div>
               </NavLink> 
               <NavLink to={"https://twitter.com/ArthurPFMR"}>
                <div className="twitterAllPage"></div>
               </NavLink>
                </div>
    );
};

export default Footer;