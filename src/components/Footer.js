import React from 'react'
import Insta from "../images/instagram-512.png"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Pic1 from '../images/pic1.jpeg'

import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 900,
    padding: 50
  },
  paper: {
    padding:5,
    width: 305

}
});



function Footer() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
    <div className={classes.root}>
    <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
        <h3>Follow me on Instagram! </h3>
          <a href="https://www.instagram.com/linneasolveig/?hl=en">
            <img src={Insta}   alt="linneas instagram" height="50px" width="50px"></img>
          </a>
      </Box>
    </div>
    </Grid>
    )
}

export default Footer
