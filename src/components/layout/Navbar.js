import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Icons/Logo";

const Navbar = ({ menu, toggle, setMenu }) => {
  return (
    <nav id="navbar">
      <div className="container">
        <Link className="logo" to="/" onClick={() => setMenu(false)}>
          <Logo />
        </Link>
        <ul className="desktop-menu">
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
        <div
          className={menu ? "mobile-menu active" : "mobile-menu"}
          onClick={toggle}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
