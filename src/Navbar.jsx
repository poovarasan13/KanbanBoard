import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
const linkStyle = {
  padding: '10px 15px',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '0 5px'
};

function Navbar() {
  return (
    <nav>

    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#fff' : '#ddd',
          backgroundColor: isActive ? '#4e4ec8' : 'transparent'
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#fff' : '#ddd',
          backgroundColor: isActive ? '#4e4ec8' : 'transparent'
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#fff' : '#ddd',
          backgroundColor: isActive ? '#4e4ec8' : 'transparent'
        })}
      >
        Contact
      </NavLink>
    </div>
  </nav>
  );
}

export default Navbar;
