import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    height: '50vh',
    padding: 50,

  },
});

function PrivateClasses(){
    const classes = useStyles();
    return (
      <Grid container justify = "center">
        <div className={classes.root}>
            <Typography mx="auto" variant="h6" gutterBottom>
                Private Lessons:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>I offer private and semi-private classes.
                These classes are both enlightening and enormously fun! Whether you have specific injuries, mysterious discomforts, vague questions, or definitive goals, spending an hour or so, one on one, can help your practice grow and expand.
                $75 per hour. $15 for each additional student. Maximum 4 students. Buy a package of four classes $280.
              </Typography>

        </div>
        </Grid>

)

}

export default PrivateClasses
