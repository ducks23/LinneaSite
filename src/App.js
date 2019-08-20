import React from 'react';
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Schedule from "./components/Schedule"
import PrivateClasses from "./components/PrivateClasses"
import Bio from "./components/Bio"
import logo from './logo.svg';
import './App.css';
import OnlineClasses from './components/OnlineClasses'
import footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Schedule />
      <Bio />
      <Testimonials />
      <PrivateClasses />

      <Footer />
    </div>
  );
}

export default App;
