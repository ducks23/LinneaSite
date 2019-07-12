import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Sunday from './days/Sunday'
import Monday from './days/Monday'
import Tuesday from './days/Tuesday'
import Wednesday from './days/Wednesday'
import Thursday from './days/Thursday'
import Friday from './days/Friday'

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
  },
}));

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
      {value === 0 && <TabContainer><Sunday /></TabContainer>}
      {value === 1 && <TabContainer><Monday /></TabContainer>}
      {value === 2 && <TabContainer><Tuesday /></TabContainer>}
      {value === 3 && <TabContainer><Wednesday /></TabContainer>}
      {value === 4 && <TabContainer><Thursday /></TabContainer>}
      {value === 5 && <TabContainer><Friday /></TabContainer>}
      {value === 6 && <TabContainer>No Yoga go have some fun</TabContainer>}
    </div>
  );
}
