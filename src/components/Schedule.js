import React from 'react'
import ScheduleBar from './ScheduleBar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 800,
    maxheight: '100vh'

  },
});

function Schedule(){
  const classes = useStyles();
  return (
    <Grid container justify = "center">
      <div className={classes.root}>
        <Typography component="div" variant="body1">
            <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
              <h2>Schedule</h2>
              <ScheduleBar />
            </Box>
        </Typography>
      </div>
    </Grid>


    )

}

export default Schedule
