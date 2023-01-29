import React from 'react';
import backgroundImg from "../assets/images/homePageHand.jpg"

const Home = () => {
    return (
        <section>
        <div className='bio'>
            <p className='firstPart'>Développeur <span className='glowText'>Front end </span>  
            intéressé et sensible</p>
            <p className='secondPart'>à l’<span className='glowText'>UX design</span></p>
        </div>
        <img className='homePageHand' src={backgroundImg} alt="Une main, la paume vers le haut" />
        </section>
    );
};

export default Home;