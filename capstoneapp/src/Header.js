// Header.js
import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
      };
    
      const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
      };
    
      return (
        <header style={headerStyle}>
          <img src="path/to/your/little-lemon-logo.png" alt="Little Lemon Logo" style={imgStyle} />
        </header>
      );
    }
    
    export default Header;