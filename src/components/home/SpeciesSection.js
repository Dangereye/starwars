import React from "react";
import Button from "../shared/Button";

const Species = () => {
  return (
    <section id="species">
      <div className="container">
        <div className="images">
          <img
            src="/img/wookie.jpg"
            alt="Wookie"
            title="Photo by Craig Adderley from Pexels."
            loading="lazy"
          />
          <img
            src="/img/twilek.jpg"
            alt="Twilek"
            title="Image by tunechick83 from Pixabay."
            loading="lazy"
          />
          <img
            src="/img/yodas.jpg"
            alt="Yodas"
            title="Photo by Aksel Fristrup on Unsplash."
            loading="lazy"
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
