import React from "react";
import wookie from "../../images/wookie.jpg";
import twilek from "../../images/twilek.jpg";
import yodas from "../../images/yodas.jpg";
import Button from "../shared/Button";

const Species = () => {
  return (
    <section id="species">
      <div className="container">
        <div className="images">
          <img
            src={wookie}
            alt="Wookie"
            title="Photo by Craig Adderley from Pexels."
          />
          <img
            src={twilek}
            alt="Twilek"
            title="Image by tunechick83 from Pixabay."
          />
          <img
            src={yodas}
            alt="Yodas"
            title="Photo by Aksel Fristrup on Unsplash."
          />
        </div>
        <div className="text">
          <h4>Explore</h4>
          <h2>Species</h2>
          <p>
            Explore unique species from the Starwars universe, view statistics
            on class, designation, appearance, lifespan, homeworld and more.
          </p>
          <Button
            path="/species"
            css="btn-dark btn-large"
            text="View species"
          />
        </div>
      </div>
    </section>
  );
};

export default Species;
