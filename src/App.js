import React from 'react';
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Schedule from "./components/Schedule"
import logo from './logo.svg';
import './App.css';
import BhaktiShop from "./components/BhaktiShop"
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Schedule />
      <BhaktiShop />
    </div>
  );
}

export default App;
