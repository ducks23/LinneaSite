import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer'
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '25 px'
  },
//make the h1 text size smaller
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 25
  },
  button: {
     margin: theme.spacing(1),
   },
   input: {
     display: 'none',
   },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>

        <h1 className={classes.title}>
              Linnea Solveig
        </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
