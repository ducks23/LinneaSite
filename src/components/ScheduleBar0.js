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

import Box from '@material-ui/core/Box';




const _Sunday = SundayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Monday = MondayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Tuesday = TuesdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Wednesday = WednesdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Thursday = ThursdayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )
const _Friday = FridayData.map(card => <ScheduleCard id location = {card.location} time = {card.time} type = {card.type} directions={card.directions} pic={card.pic} /> )


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();

  var d = new Date();
  var n = d.getDay();
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
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Sunday" {...a11yProps(0)} />
          <Tab label="Monday" {...a11yProps(1)} />
          <Tab label="Tuesday" {...a11yProps(2)} />
          <Tab label="Wednesday" {...a11yProps(3)} />
          <Tab label="Thursday" {...a11yProps(4)} />
          <Tab label="Friday" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          <Grid container spacing={0}>
            {_Sunday }
          </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={0}>
          {_Monday }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={0}>
          {_Tuesday }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={0}>
          {_Wednesday }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container spacing={0}>
          {_Thursday }
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Grid container spacing={0}>
          {_Friday }
        </Grid>
      </TabPanel>

    </div>
  );
}
