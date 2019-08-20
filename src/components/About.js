import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Om from "../images/om.png"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '90vh'
    },


}));

function About() {
    const classes = useStyles();
    return (
    <div className={classes.root}>

      <Typography component="div" variant="body1">

          <Typography variant="h5" component="h3">
            Hi I'm Linnea
          </Typography>
          <img src ={Om} width="300" height="300"></img>

          <Typography component="p">
             I love to teach Yoga in Portland, Oregon :)
          </Typography>
      </Typography>
  </div>
  )
}

export default About
