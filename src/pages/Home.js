import React from "react";
import backgroundImg from "../assets/images/homePageHand.jpg";
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
                "Je suis un développeur web Front end intéressé et sensible à l'UX design."
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
      <FooterHome />
    </section>
  );
};

export default Home;
