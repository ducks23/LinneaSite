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
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import Flower from './components/Flower'
const theme = createMuiTheme({
  palette: {
    secondary: {
     light: '#ffeeff',
     main: '#f8bbd0',
     dark: '#c48b9f',
     contrastText: '#000000',
   },
   primary: {
     light: '#ffff8b',
     main: '#ffee58',
     dark: '#c9bc1f',
     contrastText: '#00000',
   },
  },
});




function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar />
      <About />
      <Bio />
      <Schedule />
      <OnlineClasses />
      <Testimonials />

      <PrivateClasses />

      <Footer />
    </ThemeProvider>
    </div>
  );
}

export default App;
