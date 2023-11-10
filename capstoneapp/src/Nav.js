// Nav.js
import React from 'react';

function Nav() {
  const navStyle = {
    backgroundColor: '#444',
    color: '#fff',
    padding: '0.5rem',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  };

  const liStyle = {
    margin: '0 1rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
        <li style={liStyle}><a href="/about" style={linkStyle}>About Us</a></li>
        <li style={liStyle}><a href="/services" style={linkStyle}>Our Services</a></li>
        <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;