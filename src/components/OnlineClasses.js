import React from "react"
import OnlineCard from "./OnlineCard"
import OnlineData from "./OnlineData"
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: 40,
    maxWidth: 800,
    flexGrow: 1,
    justify : 'center'
  },
});


function OnlineClasses(){

const OnlineComponents = OnlineData.map(card => <OnlineCard id _title = {card._title} _about = {card._about} _tools = {card._tools} _ul={card._ul} pic={card.pic} /> )
console.log(OnlineComponents)
    const classes = useStyles();

    return(
      <Grid container spacing={2} justify = "center">
        <div className={classes.root}>
              <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
                  <h2>Online Classes</h2>
                  <Grid container spacing={0}>
                      {OnlineComponents}
                  </Grid>
              </Box>
        </div>
      </Grid>

    )

}

export default OnlineClasses
