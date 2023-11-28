import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <React.Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
    </BrowserRouter>
  );
}

export default App;