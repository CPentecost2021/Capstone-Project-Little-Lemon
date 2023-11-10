// Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: 'auto', // Push the footer to the bottom of the container
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Little Lemon. All rights reserved.</p>
      {/* Add any additional content here */}
    </footer>
  );
}

export default Footer;