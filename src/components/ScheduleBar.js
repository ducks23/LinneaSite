import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SundayData from './Schedule/SundayData'
import MondayData from './Schedule/MondayData'
import TuesdayData from './Schedule/TuesdayData'
import WednesdayData from './Schedule/WednesdayData'
import ThursdayData from './Schedule/ThursdayData'
import FridayData from './Schedule/FridayData'
import ScheduleCard from './ScheduleCard'
import Grid from '@material-ui/core/Grid';




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

const _Sunday = SundayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Monday = MondayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Tuesday = TuesdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Wednesday = WednesdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Thursday = ThursdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Friday = FridayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )



export default function ScheduleBar() {
  var d = new Date();
  var n = d.getDay();
  const classes = useStyles();
  const [value, setValue] = React.useState(n);

  function handleChange(event, newValue) {
    setValue(newValue);
  }




  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >

        <Tab label="Sun" />
        <Tab label="Mon" />
        <Tab label="Tue" />
        <Tab label="Wed" />
        <Tab label="Thur" />
        <Tab label="Fri" />
        <Tab label="Sat" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Sunday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 1 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Monday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 2 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Tuesday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 3 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Wednesday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 4 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Thursday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 5 && <TabContainer>
                        <div className={classes.root}>
                          <Grid container spacing={0}>
                            {_Friday }
                          </Grid>
                        </div>
                      </TabContainer>}
      {value === 6 && <TabContainer>No Yoga go have some fun</TabContainer>}
    </div>
  );
}
