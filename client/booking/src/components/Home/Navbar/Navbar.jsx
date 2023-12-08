import React from 'react';
import './Navbar.css';
import Avatar from '../../../utils/Avatar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Avatar firstName={"fabin"} lastName={"ziyad"}/>
        <p className='help'>Help ?</p>
      </div>
    </nav>
  );
};

export default Navbar;
