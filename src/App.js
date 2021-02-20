import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movie";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Person from "./pages/Person";

const App = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const toggle = () => {
    setMenuIsOpen(!MenuIsOpen);
  };

  return (
    <div id="app">
      <Navbar menu={MenuIsOpen} toggle={toggle} />
      <MobileMenu menu={MenuIsOpen} toggle={toggle} />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/person/:id" component={Person} />
          <Route path="/planets" component={Planets} />
          <Route path="/planet/:id" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/species/:id" component={Species} />
          <Route path="/starships" component={Starships} />
          <Route path="/starship/:id" component={Starships} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/vehicle/:id" component={Vehicles} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default App;
