import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box'



const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    height: '100%',
    padding: 10,

  },
});

function PrivateClasses(){
    const classes = useStyles();
    return (
      <Grid container justify="center">
          <div id="private" className={classes.root}>
              <Box borderRadius={16} bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>

                  <h2>
                    Private Lessons:
                  </h2>
                  <p>I offer private and semi-private classes.
                    These classes are both enlightening and enormously fun! Whether you have specific injuries, mysterious discomforts, vague questions, or definitive goals, spending an hour or so, one on one, can help your practice grow and expand.
                    $75 per hour. $15 for each additional student. Maximum 4 students. Buy a package of four classes $280.
                  </p>
<a href = "mailto: linneasolveigyoga@gmail.com" style={{ color: '#000' }}>Contact: linneasolveigyoga@gmail.com</a>

              </Box>
          </div>
      </Grid>

)

}

export default PrivateClasses
