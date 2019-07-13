import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <ul className="right">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/cal'>Calendar</NavLink></li>
          <li><NavLink to='/linkone/'>First</NavLink></li>
          <li><NavLink to='/linktwo/'>Second</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
/*
 <Link to='/' className="brand-logo">Home</Link>
 */
