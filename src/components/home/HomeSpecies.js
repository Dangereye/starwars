import React from "react";
import wookie from "../../images/wookie.jpg";
import twilek from "../../images/twilek.jpg";
import yodas from "../../images/yodas.jpg";
// import dathomirian from "../../images/dathomirian.jpg";
// import mandalorian from "../../images/mandalorian.jpg";
// import tuskens from "../../images/tuskens.jpg";
import Button from "../Button";

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
          {/* <img
            src={dathomirian}
            alt="Dathomirian"
            title="Image by tunechick83 from Pixabay."
          />
          <img
            src={mandalorian}
            alt="Mandalorian"
            title="Photo by Brett Sayles from Pexels."
          />
          <img
            src={tuskens}
            alt="Tusken raiders"
            title="Image by bxato from Pixabay "
          /> */}
        </div>
        <div className="text">
          <h4>Explore</h4>
          <h2 className="section-title">37 Species</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            corporis in accusamus reprehenderit, possimus provident unde! Harum,
            explicabo?
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
