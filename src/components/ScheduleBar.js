import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Sunday from './Sunday'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
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

export default function ScrollableTabsButtonPrevent() {
  var d = new Date();
  var n = d.getDay();
  const classes = useStyles();
  const [value, setValue] = React.useState(n);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
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
      {value === 6 && <TabContainer><Typography variant="p"> Yoga go have some fun</Typography></TabContainer>}
    </div>
  );
}
