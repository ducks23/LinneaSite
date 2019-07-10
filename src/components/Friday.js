import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Thrusday() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>Location</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Time</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Type</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Directions</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>PY Mississippi</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>5:30 PM</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Hatha Flow</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>google Maps</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>PY Mississippi</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>7:15 PM</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Restorative</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>google Maps</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
