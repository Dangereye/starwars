import React from "react";
import { AiFillBug } from "react-icons/ai";
import { GiTank } from "react-icons/gi";
import { IoPeopleSharp, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileMenu = ({ menu, toggle }) => {
  return (
    <div id="mobile-menu" className={menu ? "active" : ""}>
      <ul>
        <li>
          <Link to="/people" onClick={toggle}>
            <IoPeopleSharp />
            <span>People</span>
          </Link>
        </li>
        <li>
          <Link to="/planets" onClick={toggle}>
            <IoPlanetSharp />
            <span>Planets</span>
          </Link>
        </li>
        <li>
          <Link to="/species" onClick={toggle}>
            <AiFillBug />
            <span>Species</span>
          </Link>
        </li>
        <li>
          <Link to="/starships" onClick={toggle}>
            <RiSpaceShipFill />
            <span>Starships</span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/vehicles" onClick={toggle}>
            <GiTank />
            <span>Vehicles</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
