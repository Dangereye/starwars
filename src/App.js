import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import People from "./pages/People";
import Person from "./pages/Person";
import Planets from "./pages/Planets";
import Planet from "./pages/Planet";
import Species from "./pages/Species";
import SpeciesOne from "./pages/SpeciesOne";
import Starships from "./pages/Starships";
import Starship from "./pages/Starship";
import Vehicles from "./pages/Vehicles";
import Vehicle from "./pages/Vehicle";

const App = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const toggle = () => {
    setMenuIsOpen(!MenuIsOpen);
  };

  return (
    <div id="app">
      <Navbar menu={MenuIsOpen} toggle={toggle} setMenu={setMenuIsOpen} />
      <MobileMenu menu={MenuIsOpen} toggle={toggle} />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" exact component={Movie} />
          <Route path="/people" exact component={People} />
          <Route path="/person/:id" exact component={Person} />
          <Route path="/planets" exact component={Planets} />
          <Route path="/planet/:id" exact component={Planet} />
          <Route path="/species" exact component={Species} />
          <Route path="/species/:id" exact component={SpeciesOne} />
          <Route path="/starships" exact component={Starships} />
          <Route path="/starship/:id" exact component={Starship} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/vehicle/:id" exact component={Vehicle} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default App;
