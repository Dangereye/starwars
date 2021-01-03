import React from 'react';
import Logo from '../Icons/Logo';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <Logo />
        <ul className='desktop-menu'>
          <li>Movies</li>
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
