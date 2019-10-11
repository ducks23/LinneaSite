import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Pic1 from '../images/pic1.jpeg'
import Pic2 from '../images/bike.jpg'
import Pic3 from '../images/pic3.jpeg'
import "./style.css"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 700,

  }
});

function Carousel(){
    const classes = useStyles();
    return (
    <div className={classes.root}>

   </div>
  )};

export default Carousel
