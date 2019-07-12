import React from 'react';
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Schedule from "./components/Schedule"
import PrivateClasses from "./components/PrivateClasses"
import Bio from "./components/Bio"
import logo from './logo.svg';
import Card1 from './components/Card1'
import './App.css';
import OnlineClasses from './components/OnlineClasses'

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Schedule />
      <Bio />
      <OnlineClasses />
      <PrivateClasses />

    </div>
  );
}

export default App;
