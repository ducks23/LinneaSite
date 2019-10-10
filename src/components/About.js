import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Down from "../images/down.png"
import Flower from "./Flower"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Carousel from "./Carousel"
import Pic1 from '../images/pic1.jpeg'
import Pic2 from '../images/pic2.jpeg'
import Pic3 from '../images/pic3.jpeg'
import Pic4 from '../images/pic4.jpeg'
import "./style.css"
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 80,
    height: '90vh',
  },
  h2: {
    padding: 40,

  },
  box:{
    height: '60vh',
    maxWidth: '60vh',


}
}));

function About() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div class="container-fluid">
        <Carousel />
      </div>
    </div>
)

}

export default About
