import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Box from '@material-ui/core/Box';


import Pic2 from '../images/pic2.jpeg'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 700,

  },
  paper: {
    padding:5,
    width: 255

},
  p:{
    padding: 50
}
});

function Bio(){
    const classes = useStyles();
    return (
      <Grid container justify="center">
      <div  className={classes.root}>
      <Box borderRadius={16} bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>

          <Grid container alignItems="center" justify = "center" spacing={3}>

                <div classname={classes.p}>
                  <h1 id="about">Why I teach</h1>
                  <p> I teach yoga because I love it dearly and I delight in sharing this practice of connection and curiosity with others. I believe that mindful movement can be healing and empowering and that building a healthy relationship with our own bodies can help us as we pursue healthy relationships with the people and circumstances around us. For the past 19 years of my life yoga has been a secure and consistent source of support and grounding     especially in times of stress and upheaval. My desire is to create communities that feel warm, supportive and safe in which we can explore our humanness with compassion, humor and love.</p>
                </div>
            </Grid>
        </Box>
        </div>
        </Grid>
)

}

export default Bio
