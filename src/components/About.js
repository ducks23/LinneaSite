import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Down from "../images/down.png"
import Flower from "./Flower"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 200,
    padding: 40,
    height: '90vh'
  }
}));

function About() {
  const classes = useStyles();
  return (<Grid container="container" justify="center">

    <div className={classes.root}>
      <Typography component="div" variant="body1">

        <Flower/>
        <Typography component="p">I teach Yoga in Portland, Oregon </Typography>
      </Typography>
    {/*  <img src={Down} alt="linneaPicture" height="200" width="300"></img>
*/}
    </div>

  </Grid>)
}

export default About
