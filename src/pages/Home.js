import React from "react";
import backgroundImg from "../assets/images/homeImg/homePageHand.jpg";
import Typewriter from "typewriter-effect";
import FooterHome from "../components/FooterHome";
import Header from "../components/Header";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="bio">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Bienvenue,")

              .pauseFor(50)
              .deleteAll()
              .typeString(
                "<p>Je suis un développeur web</p>"
              )
              .typeString(
                "<p><span class=glow>Front end</span></p>"
              )
              .typeString(
                "<p>intéressé et sensible</p> <p class=finalTextPart>à l'<span class=glow>UX design</span>.</p>"
              )
              .start();
          }}
        />
      </div>

      <img
        className="homePageHand"
        src={backgroundImg}
        alt="Une main, la paume vers le haut"
      />
      {/* <img 
        className="homePageHandReverse"
        src={backgroundImg}
        alt="Une main, la paume vers le haut"
      /> */}
      <FooterHome />
    </section>
  );
};

export default Home;
