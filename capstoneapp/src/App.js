import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the app takes at least the full height of the viewport
  };

  return (
    <div style={appStyle}>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;