import React from "react";
import Button from "../shared/Button";

const Planets = () => {
  return (
    <section
      id="planets"
      style={{ backgroundImage: `url(/img/planets.jpg)` }}
      title="Image by Octavian A Tudose from Pixabay."
    >
      <div className="content">
        <span className="section-subtitle">Explore</span>
        <h2>Planets</h2>
        <p>
          Take a deep dive into the beautifully imagined worlds from the
          Starwars universe, view statistics concerning population, orbital time
          cycles, scale, gravity, climate, terrain, surface water and more.
        </p>
        <Button path="/planets" css="btn-red btn-large" text="View planets" />
      </div>
    </section>
  );
};

export default Planets;
