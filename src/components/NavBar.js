import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer'
import { Link, animateScroll as scroll } from "react-scroll";


import "./style.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '25 px'
  },
//make the h1 text size smaller
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 25
  },
  button: {
     margin: theme.spacing(1),
   },
   input: {
     display: 'none',
   },
}));

export default function NavBar() {
  const classes = useStyles();

  return (

    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
          <a href="/" class="navbar-brand">Linnea Solveig</a>
          <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbar9">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbar9">
              <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="#">
                  <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}
                  > About </Link></a>
              </li>


                  <li class="nav-item">
                      <a class="nav-link" href="#"><Link
                          activeClass="active"
                          to="schedule"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                      > Schedule </Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Link
                            activeClass="active"
                            to="online"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Online Classes </Link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Contact </Link>
                  </a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  /*
          <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          > Contact </Link>
        </li>
      </ul>
*/


  );
}
