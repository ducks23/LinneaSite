import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Down from "../images/down.png"

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Carousel from "./Carousel"
import Pic1 from '../images/Linneasolveigheadshot.jpg'
import Pic2 from '../images/pic2.jpeg'
import Pic3 from '../images/pic3.jpeg'
import Pic4 from '../images/pic4.jpeg'
import './style.css'


const useStyles = makeStyles(theme => ({
  root: {
    padding: 40,
    height: '100%',
    maxWidth: 550,
  },
  h2: {
    paddingTop: 20

  },
  p:{
    padding:30,
}

}));

function About() {

  const classes = useStyles();
  return (
    <Grid container justify="center">
    <div  className={classes.root}>
    <Box borderRadius={16} bgcolor="primary.main" className={classes.p} color="primary.contrastText" p={2} m={1}>

        <Grid container alignItems="center" justify = "center" spacing={3}>

      <div classname={classes.p}>
          <img src={Pic1}  className={classes.h2} paddingTop='50px' alt="linnea in sweater" class="responsive"  />
          <h2 className={classes.h2} > Yoga & Movement </h2>
      </div>
          </Grid>
      </Box>
      </div>
      </Grid>
)

}

export default About
