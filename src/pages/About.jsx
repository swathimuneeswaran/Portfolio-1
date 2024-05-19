import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";



const About = () => {
  return (
    <>
      <Navbar />
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            About<span> Me</span>
          </h2>
          <h3 className="text-animation">
            <span></span>
          </h3>
          <p className="para">
            I'm a curious explorer of the digital realm, armed with a
            certificate in full-stack development.
           While my professional journey is just beginning, my passion
            for creating captivating web experiences
             knows no bounds. From the basic building blocks of HTML to
            the intricate web of backend databases, delight in
            unraveling coding puzzles and bringing digital dreams to life.
            Beyond the screen,you'll find me wandering through the wilderness, seeking
            inspiration from nature's wonders and infusing it into my digital creations.
            <span>
              
              Let's embark on this coding adventure together, where imagination
               dances with pixels, and every line of code tells a story.
            </span>
          </p>
        </div>
        <div className="about-img">
          <img src="https://media3.giphy.com/media/h5vCZ5J3EJBQ7IkvO9/source.gif" width="200px" alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
