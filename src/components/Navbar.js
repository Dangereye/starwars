import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Icons/Logo';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <Link to='/'>
          <Logo />
        </Link>
        <ul className='desktop-menu'>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>People</li>
          <li>Planets</li>
          <li>Species</li>
          <li>Starships</li>
          <li>Vehicles</li>
        </ul>
        <div className='mobile-menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
