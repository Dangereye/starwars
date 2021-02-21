import React from "react";
import background from "../../images/planets.jpg";
import Button from "../shared/Button";

const Planets = () => {
  return (
    <section
      id="planets"
      style={{ backgroundImage: `url(${background})` }}
      title="Image by Octavian A Tudose from Pixabay."
    >
      <div className="content">
        <h4>Explore</h4>
        <h2>Planets</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis
          in accusamus reprehenderit, possimus provident unde! Harum, explicabo?
        </p>
        <Button path="/planets" css="btn-red btn-large" text="View planets" />
      </div>
    </section>
  );
};

export default Planets;
